import axios from "axios";
import newsapi from "newsapi";

const NewApi = new newsapi("98c97ba22409441ba35bab0cee8019ca");

async function news(req, res) {
  console.log("req", req.body.categoria);
  let category = req.body.categoria;
  let contry = req.body.pais;
  let lenguage = req.body.lenguage;

  try {
    let dataNew = await NewApi.v2.topHeadlines({
      
        category:  category,
        language: lenguage,
        country: contry
    });

    return res.status(200).send({ data: dataNew, message: "noticias" });
  } catch (e) {
    console.log("error-->", e);
    return res.status(500).send(e);
  }
}

export default {
  news,
};
