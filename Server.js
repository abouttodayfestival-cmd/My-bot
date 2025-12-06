const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", (req, res) => {
  const msg = req.body.message.toLowerCase();
  let reply = "मुझे समझ नहीं आया, थोड़ी और जानकारी दो।";

  if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello! मैं आपका AI Bot हूँ।";
  } else if (msg.includes("world") || msg.includes("duniya")) {
    reply = "दुनिया बहुत बड़ी है! आप क्या जानना चाहते हैं?";
  }

  res.json({ reply });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
