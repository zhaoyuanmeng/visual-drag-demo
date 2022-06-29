<template>
  <div class="component-list" @dragstart="handleDragStart">
    <!-- 必须给下面要拖动的元素设置 draggable-->
    <div
      v-for="(item, index) in componentList"
      :key="index"
      class="list"
      draggable
      :data-index="index"
    >
      <span class="iconfont" :class="'icon-' + item.icon"></span>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script>
// 这就是一个类似vnode结构的东西  然后拿到里面需要的值进行渲染
import componentList from "@/custom-component/component-list";

export default {
  data() {
    return {
      componentList,
    };
  },
  methods: {
    // 拖拽触发的回调函数 用来设置数据的（也就是index）
    handleDragStart(e) {
      // DataTransfer对象专门用来存储拖放时要携带的数据
      // e.target.dataset.xxx获取data-xxx的值
      e.dataTransfer.setData("index", e.target.dataset.index);
    },
  },
};
</script>

<style lang="scss" scoped>
.component-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;

  .list {
    width: 45%;
    border: 1px solid #ddd;
    cursor: grab;
    margin-bottom: 10px;
    text-align: center;
    color: #333;
    padding: 2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
      cursor: grabbing;
    }

    .iconfont {
      margin-right: 4px;
      font-size: 20px;
    }

    .icon-wenben,
    .icon-tupian {
      font-size: 18px;
    }
  }
}
</style>
