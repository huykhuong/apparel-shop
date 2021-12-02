// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../../firebase";

const handler = async (req, res) => {
  const db = app.firestore();
  const { productId } = req.query;

  if (req.method === "POST") {
  } else {
    const doc = await db.collection("items").doc(productId).get();

    const item = {
      id: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      price: doc.data().price,
      images: doc.data().images,
      sizes: doc.data().sizes,
      category: doc.data().category,
      sub_category: doc.data().sub_category,
      gender: doc.data().gender,
    };

    res.status(201).json(item);
  }
};

export default handler;
