"use strict";

import Vue from 'vue';
import axios from "axios";

let config = {
  baseURL: process.env.APIURL || "",
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

//const _axios = axios.create(config);

export const httpClient = axios.create(config);

Plugin.install = function(Vue, options) {
  Vue.axios = httpClient;
  window.axios = httpClient;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return httpClient;
      }
    },
    $axios: {
      get() {
        return httpClient;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;
