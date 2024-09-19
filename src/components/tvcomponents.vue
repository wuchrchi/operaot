<template>
    <div class="tvWall">
      <h3 class="tvTitle">輪播牆</h3>
      <div class="carousel">
        <!-- 只顯示當前激活的 bigBox -->
        <div class="bigBox" v-for="(section, index) in sections" :key="index" v-show="currentIndex === index">
          <h4 class="sTitle">{{ section.title }}</h4>
          <div class="smallBox" v-for="(item, idx) in section.boxes" :key="idx">
            <div class="gridName">{{ item.name }}</div>
            <div class="gridParameter">{{ item.parameter }}</div>
          </div>
        </div>
      </div>
      <!-- 導航點 -->
      <div class="dots">
        <span v-for="(section, index) in sections" :key="index" class="dot" :class="{ active: currentIndex === index }" @click="currentIndex = index"></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'tvComponents',
    data() {
      return {
        currentIndex: 0, // 初始顯示第一個 section
        sections: [
          {
            title: "第一大格子標題",
            boxes: [
              { name: "小格子1", parameter: "參數1" },
              { name: "小格子2", parameter: "參數2" },
              { name: "小格子3", parameter: "參數3" },
              { name: "小格子4", parameter: "參數4" },
            ]
          },
          {
            title: "第二大格子標題",
            boxes: [
              { name: "小格子5", parameter: "參數5" },
              { name: "小格子6", parameter: "參數6" },
              { name: "小格子7", parameter: "參數7" },
              { name: "小格子8", parameter: "參數8" },
            ]
          },
          {
            title: "第三大格子標題",
            boxes: [
              { name: "小格子9", parameter: "參數5" },
              { name: "小格子10", parameter: "參數6" },
              { name: "小格子11", parameter: "參數7" },
              { name: "小格子12", parameter: "參數8" },
            ]
          },
          {
            title: "第四大格子標題",
            boxes: [
              { name: "小格子13", parameter: "參數5" },
              { name: "小格子14", parameter: "參數6" },
              { name: "小格子15", parameter: "參數7" },
              { name: "小格子16", parameter: "參數8" },
            ]
          },
        ]
      };
    }
  };
  </script>

<style >
@import url(../css/reset.css);
@import url(../css/m3color.css);
@import url(../css/tvcomponents.css);
</style>