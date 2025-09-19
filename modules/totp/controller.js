const speakeasy = require("speakeasy");

exports.generateSecret = (req, res) => {
  const secret = speakeasy.generateSecret({
    length: 20,
    name: "TOTP Demo App",
    issuer: "TOTP Demo",
  });
  res.json({ secret: secret.base32 });
};

exports.getTOTP = (req, res) => {
  console.log(req.body);
  const { secret } = req.body;
  try {
    const token = speakeasy.totp({
      secret: secret,
      encoding: "base32",
      time: Date.now() / 1000, // Current time in seconds
    });

    res.json({ code: token });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate TOTP code" });
  }
};
