// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { app } from "../../firebase";

const handler = async (req, res) => {
  const db = app.firestore();

  if (req.method === "POST") {
  } else {
    let categories = [];
    const querySnapshot = await db.collection("categories").get();

    // "then" part after the await
    querySnapshot.forEach((doc) => {
      categories.push({
        name: doc.data().name,
        sub_categories: doc.data().sub_categories,
      });
    });

    res.json(categories);
  }
};

export default handler;
