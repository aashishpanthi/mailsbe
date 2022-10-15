import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  backendUrl: process.env.NHOST_BACKEND_URL,
});

nhost.functions.setAccessToken(process.env.NHOST_ADMIN_SECRET);

export default (req, res) => {
  // get the data from the request
  const imgText = req.query.text || "";

  // get the email id from the request

  // update query using the email id

  //update the seen column in emails table

  // return the updated data
  res.status(200).send({
    imgText,
    backendUrl: process.env.NHOST_BACKEND_URL,
    adminSecret: process.env.NHOST_ADMIN_SECRET,
  });
};
