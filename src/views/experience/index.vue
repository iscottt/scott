<template>
  <div class="container">
    <div
      class="item"
      v-for="(item, index) in experList"
      :key="item.title"
      :style="{
        animationDelay: index * 0.1 + 's',
      }"
    >
      <img :src="item.img" alt="" />
      <div class="title">{{ item.title }}</div>
      <div class="time">{{ item.time }}</div>
      <div class="desc">
        <p>
          专业：<span class="ml-2">{{ item.major }}</span>
        </p>
        <p class="mt-2">
          学历：<span class="ml-2">{{ item.desc }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const experList = [
  {
    title: '江西应用技术职业学院',
    time: '2014/09 ~ 2017/07',
    major: '软件工程',
    desc: '大专（全日制）',
    img: '/public/images/exper1.png',
  },
  {
    title: '东华理工大学',
    time: '2021/03 ~ 2023/07',
    major: '计算机科学与技术',
    desc: '本科（非全日制）',
    img: '/public/images/exper2.png',
  },
  {
    title: '深圳智友信息科技有限公司',
    time: '2020/02 ~ 至今',
    major: '前端开发工程师',
    desc: '负责项目前端部分的工作，负责项目的技术选型和框架的搭建，负责封装公共的UI组件和功能组件',
    img: '/public/images/exper3.png',
  },
  {
    title: '杭州云嘉健康管理有限公司',
    time: '2020/02 ~ 至今',
    major: '前端开发工程师',
    desc: '负责前端部分的工作，负责搭建后台管理系统框架，研究并投入使用前沿技术',
    img: '/public/images/exper4.png',
  },
];
</script>

<style scoped lang="less">
.container {
  @apply flex items-start justify-center w-full w-1300px mx-auto mt-50;
  .item {
    opacity: 0;
    animation: itemEnter 0.5s ease-in-out alternate forwards;
    @apply flex text-dark-100 items-start justify-start min-h-300px overflow-auto flex-col flex-1 p-5 font-dou;
    img {
      @apply w-88px h-88px mb-5;
    }
    .title {
      @apply text-lg w-200px;
    }
    .time {
      @apply text-sm my-2;
    }
    .desc {
      @apply text-xs;
    }
  }
}
@keyframes itemEnter {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
