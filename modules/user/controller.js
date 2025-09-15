const configProvider = require("../../global/config_switch");
const dataLayer = require("../../global/data_layer");

exports.getUsers = (req, res) => {
  //   const configs = configProvider.get("config1");
  const get = dataLayer.getData();
  res.json(get);
};

exports.changeConfig = (req, res) => {
  const setKey = configProvider.updateKey("config1");

  const configs = configProvider.get("config1");

  res.json(configs);
};
