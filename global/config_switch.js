const config = require("config");

class ConfigProvider {
  constructor() {
    this.runtimeConfig = { ...config };
    this.config = {};
    this.subscribers = new Set();
  }

  get(key) {
    return this.runtimeConfig[key];
  }

  updateKey(key) {
    this.runtimeConfig[key].enabled = false;
    return true;
  }
}

const configProvider = new ConfigProvider();

module.exports = configProvider;
