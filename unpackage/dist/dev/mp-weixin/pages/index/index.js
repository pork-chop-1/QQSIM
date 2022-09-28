"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: __spreadValues({}, common_vendor.mapState([
    "id",
    "msgList"
  ])),
  onLoad() {
  },
  methods: {
    navInfoPlane(id) {
      common_vendor.index.navigateTo({
        url: "/pages/MsgPlane/index?id=" + id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.f(_ctx.msgList, (msg, k0, i0) => {
      return {
        a: common_vendor.t(msg.name),
        b: common_vendor.t(msg.msg),
        c: msg.id,
        d: common_vendor.o(($event) => $options.navInfoPlane(msg.id), msg.id)
      };
    }),
    c: common_assets._imports_0$1
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "D:/workspace/HBuilderProjects/QQSIM/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
