const config = require("config");
const configProvider = require("./config_switch");

class DataLayer {
  constructor() {}

  getData() {
    const getData = configProvider.get("config1");
    if (getData.enabled) {
      return getData;
    } else {
      return false;
    }
  }
}

const dataLayer = new DataLayer();

module.exports = dataLayer;
