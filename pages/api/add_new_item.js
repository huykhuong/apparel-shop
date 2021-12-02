// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../firebase";

const handler = async (req, res) => {
  const db = app.firestore();
  if (req.method === "POST") {
    const data = req.body;

    await db.collection("items").add(data);

    res.status(201).json({ message: "Successful" });
  }
};

export default handler;
