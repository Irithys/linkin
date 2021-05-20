import { jwtAuth, use } from "../../middleware/middleware";
import { insertPageLinks } from "../../lib/dbfunc";

async function handler(req, res) {
  // Run the middleware

  try {
    await use(req, res, jwtAuth);
    console.log(req.body);
    await insertPageLinks(req.body);
    // let updatedPageData = await getPageData();
    // console.log(updatedPageData);
    res.json("updatedPageData");
  } catch (error) {
    console.log(error.message);

    res.status(500).send(error.message);
  }
}

export default handler;