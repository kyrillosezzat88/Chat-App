const crypto = require("crypto");
const { connect } = require("getstream");
const bycrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;
    const userID = crypto.randomBytes(16).toString("hex");
    const serverClient = connect(api_key, api_secret, app_id);
    const hashedPassword = await bycrypt.hash(password, 10);

    const token = serverClient.createUserToken(userID);
    return res
      .status(200)
      .json({ token, fullName, username, userID, hashedPassword, phoneNumber });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);
    const { users } = await client.queryUsers({ name: username });
    if (!users.length)
      return res.status(404).json({ message: "user not found" });
    const success = await bycrypt.compare(password, users[0].hashedPassword);
    const token = serverClient.createUserToken(users[0].id);
    if (success)
      return res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userID: users[0].id,
      });
    return res.status(500).json({ message: "incorrect password" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  Login,
  signup,
};
