const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const cors = require("cors");

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(cors());
//Get messages from user login to clicked user in matches display:
router.get("/getMessages", async (req, res) => {
  const client = new MongoClient(process.env.URI);
  const { userId, correspondingUserId } = req.query;
  try {
    await client.connect();
    const database = client.db("Hannie-dating-app");
    const messages = database.collection("messages");
    const query = {
      from_userId: userId,
      to_userId: correspondingUserId,
    };
    const foundMessages = await messages.find(query).toArray();
    res.send(foundMessages);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
});

//Add a new message to the database:
router.post("/addMessage", async (req, res) => {
  const client = new MongoClient(process.env.URI);
  const message = req.body;
  console.log(message);
  try {
    await client.connect();
    const database = client.db("Hannie-dating-app");
    const messages = database.collection("messages");
    const result = await messages.insertOne(message);
    res.send(result);
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  } finally {
    client.close();
  }
});

module.exports = router;
