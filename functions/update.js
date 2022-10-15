import { NhostClient } from "@nhost/nhost-js";

const accessToken = process.env.NHOST_ADMIN_SECRET;
const backendUrl = process.env.NHOST_BACKEND_URL;

const nhost = new NhostClient({
  backendUrl: backendUrl,
});

console.log(nhost.graphql.getUrl());

// nhost.graphql.setAccessToken(accessToken);

console.log({
  accessToken,
  backendUrl,
});

export default async (req, res) => {
  // get the data from the request
  const imgText = req.query.text;
  console.log("imgText", imgText);

  if (!imgText) {
    res.status(500).json({ error: "No image token provided" });
  }

  // make a get query to get email id using imgText
  const GET_EMAIL_ID = `
  query getId($text: String!) {
    emails(where: {img_text: {_eq: $text}}) {
      id
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
    const { data } = await nhost.graphql.request(GET_EMAIL_ID, {
      variables: {
        text: imgText,
      },
    });

    if (!data) {
      res.status(500).json({ error: "No email found" });
    }

    // extract the email id from the response
    const emailId = data.emails[0].id;

    //update the seen column in emails table
    const { data: updatedData } = await nhost.graphql.request(UPDATE_QUERY, {
      id: emailId,
      date: new Date(),
    });

    // return the updated data
    res.status(200).send({
      imgText,
      data,
      emailId,
      updatedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
