const speakeasy = require("speakeasy");

exports.generateSecret = (req, res) => {
  //   const configs = configProvider.get("config1");
  const secret = speak.generateSecret({
    length: 20,
    name: "TOTP Demo App",
    issuer: "TOTP Demo",
  });
  res.json("get");
};
