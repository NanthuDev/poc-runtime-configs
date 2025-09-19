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
  res.json({ secret: "secret.base32" });
};
