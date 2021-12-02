// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../firebase";

const handler = async (req, res) => {
  const db = app.firestore();

  if (req.method === "POST") {
  } else {
    let items = [];
    const querySnapshot = await db.collection("items").get();

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        name: doc.data().name,
        description: doc.data().description,
        price: doc.data().price,
        images: doc.data().images,
        sizes: doc.data().sizes,
        category: doc.data().category,
        sub_category: doc.data().sub_category,
        gender: doc.data().gender,
      });
    });

    res.json(items);
  }
};

export default handler;
