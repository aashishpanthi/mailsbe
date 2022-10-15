import { NhostClient } from "@nhost/nhost-js";

const accessToken = process.env.NHOST_ADMIN_SECRET;
const backendUrl = process.env.NHOST_BACKEND_URL;

const nhost = new NhostClient({
  backendUrl: backendUrl,
});

nhost.graphql.setAccessToken(accessToken);

export default async (req, res) => {
  // get the data from the request
  const imgText = req.query.text;
  console.log("imgText", imgText);

  if (!imgText) {
    return res.status(500).json({ error: "No image token provided" });
  }

  // make a get query to get email id using imgText
  const GET_EMAIL_ID = `
  query getId($text: String!) {
    emails(where: {img_text: {_eq: $text}}) {
      id
      seen
    }
  }`;

  // update query with the email id
  const UPDATE_QUERY = `
    mutation UpdateEmail($id: Int!, $date: timestamptz!) {
      update_emails(where: {id: {_eq: $id}}, _set: {seen: true, seen_at: $date}) {
        affected_rows
      }
    }`;

  try {
    const { data, error } = await nhost.graphql.request(GET_EMAIL_ID, {
      text: imgText,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    if (!data) {
      return res.status(500).json({ error: "No email found" });
    }

    // extract the email id from the response
    const emailId = data.emails[0].id;
    const seen = data.emails[0].seen;

    if (seen) {
      return res.status(500).json({ error: "Kaam hogaya vai" });
    }

    //update the seen column in emails table
    const { data: updatedData, error: updateError } =
      await nhost.graphql.request(UPDATE_QUERY, {
        id: emailId,
        date: new Date(),
      });

    if (updateError) {
      return res.status(500).json({ error: error.message });
    }

    res.status(404).send({ error: "Bye bye" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
