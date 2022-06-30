import Vue from "vue";

const components = ["Picture", "VText", "VButton", "Group", "RectShape"];

// 全局注册
components.forEach((name) => {
  Vue.component(name, () => import(`@/custom-component/${name}`));
});
