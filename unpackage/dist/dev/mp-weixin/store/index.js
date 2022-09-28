"use strict";
var common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    id: 0,
    msgList: [
      {
        id: 1,
        name: "mark1",
        msg: "\u9879\u76EE  \u7F16\u8BD1\u6210\u529F\u3002\u524D\u7AEF\u8FD0\u884C\u65E5\u5FD7\uFF0C\u8BF7\u53E6\u884C\u5728\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177\u7684\u63A7\u5236\u53F0\u67E5\u770B\u3002",
        time: 1664346809237
      }
    ],
    msgDetail: {
      1: [
        {
          time: 1664346809237,
          name: "mark1",
          id: 1,
          msg: "\u9879\u76EE  \u7F16\u8BD1\u6210\u529F\u3002\u524D\u7AEF\u8FD0\u884C\u65E5\u5FD7\uFF0C\u8BF7\u53E6\u884C\u5728\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177\u7684\u63A7\u5236\u53F0\u67E5\u770B\u3002"
        },
        {
          time: 1664346809237,
          name: "preserve",
          id: 0,
          msg: "\u9879\u76EE  \u7F16\u8BD1\u6210\u529F\u3002\u524D\u7AEF\u8FD0\u884C\u65E5\u5FD7\uFF0C\u8BF7\u53E6\u884C\u5728\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177\u7684\u63A7\u5236\u53F0\u67E5\u770B\u3002"
        },
        {
          time: 1664346809237,
          name: "mark1",
          id: 1,
          msg: "\u9879\u76EE  \u7F16\u8BD1\u6210\u529F\u3002\u524D\u7AEF\u8FD0\u884C\u65E5\u5FD7\uFF0C\u8BF7\u53E6\u884C\u5728\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5DE5\u5177\u7684\u63A7\u5236\u53F0\u67E5\u770B\u3002"
        }
      ]
    }
  },
  mutations: {},
  getters: {},
  actions: {}
});
exports.store = store;
