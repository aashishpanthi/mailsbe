import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  backendUrl: process.env.NHOST_BACKEND_URL,
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
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

  // update query with the email id
  const UPDATE_QUERY = `
    mutation UpdateEmail($id: Int, $date: timestamptz) {
      update_emails(where: {id: {_eq: $id}}, _set: {seen: true, seen_at: $date}) {
        affected_rows
      }
    }`;

  try {
    const { data } = await nhost.graphql.query(GET_EMAIL_ID, {
      variables: {
        text: imgText,
      },
    });

    // extract the email id from the response
    const emailId = data.emails[0].id;

    // //update the seen column in emails table
    // const { data: updatedData } = await nhost.graphql.request(UPDATE_QUERY, {
    //   id: emailId,
    //   date: new Date().toString(),
    // });

    // return the updated data
    res.status(200).send({
      imgText,
      data,
      emailId,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
