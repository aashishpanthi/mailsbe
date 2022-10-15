import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  backendUrl: process.env.NHOST_BACKEND_URL,
});

nhost.graphql.setAccessToken(process.env.NHOST_ADMIN_SECRET);

export default async (req, res) => {
  // get the data from the request
  const imgText = req.query.text || "";

  // make a get query to get email id using imgText
  const GET_EMAIL_ID = `
  query getId($text: String) {
    emails(where: {img_text: {_eq: $text}}) {
      id
    }
  }`;

  // get the email id from the request
  const { data, error } = await nhost.graphql.request(GET_EMAIL_ID);

  if (error) {
    res.status(500).json({ error });
  }

  // extract the email id from the response
  const emailId = data.emails[0].id;

  // update query using the email id
  const UPDATE_QUERY = `
  mutation UpdateEmail($id: Int, $date: timestamptz) {
    update_emails(where: {id: {_eq: $id}}, _set: {seen: true, seen_at: $date}) {
      affected_rows
    }
  }`;

  //update the seen column in emails table
  const { data: updatedData, error: updateError } = await nhost.graphql.request(
    UPDATE_QUERY,
    {
      id: emailId,
      date: new Date(),
    }
  );

  if (error) {
    res.status(500).json({ error: updateError });
  }

  // return the updated data
  res.status(200).send({
    imgText,
    data,
    updatedData,
  });
};
