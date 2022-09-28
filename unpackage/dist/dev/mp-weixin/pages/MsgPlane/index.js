"use strict";
var common_vendor = require("../../common/vendor.js");
var common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      id: ""
    };
  },
  computed: {
    msgList() {
      return this.$store.state.msgList[this.id];
    }
  },
  onLoad({ id }) {
    this.id = id;
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($options.msgList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.msg),
        b: item.time
      };
    }),
    b: common_assets._imports_0$1
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7e08f212"], ["__file", "D:/workspace/HBuilderProjects/QQSIM/pages/MsgPlane/index.vue"]]);
wx.createPage(MiniProgramPage);
