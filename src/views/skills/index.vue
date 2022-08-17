<template>
  <div class="skill-container">
    <div class="skill-list">
      <div
        class="item"
        v-for="(item, index) in skillList"
        :key="item.title"
        :style="{
          animationDelay: index * 0.1 + 's',
        }"
      >
        <div class="title">{{ item.title }}</div>
        <div class="desc">掌握程度：{{ item.desc }}</div>
        <a-progress :showInfo="false" :strokeColor="item.color" :percent="item.percent" />
      </div>
    </div>
    <div class="kitchen">
      <div class="banner">
        <div class="bg" style="transform: translate(0px, 0px); opacity: 1">
          <img
            alt="pBg"
            width="580"
            src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*sF8hSL7wK54AAAAAAAAAAAAAARQnAQ"
          />
        </div>
        <div class="graph" style="transform: translate(0px, 0px); opacity: 1">
          <div class="hover">
            <img
              alt="pGraph"
              :width="isMobile ? 120 : 212"
              src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*vhpWT4_L0K4AAAAAAAAAAAAAARQnAQ"
            />
          </div>
        </div>
        <div class="emoji" style="transform: rotate(-9.99999deg); opacity: 1">
          <div class="hover">
            <img
              alt="emoji"
              :width="isMobile ? 120 : 212"
              src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*6NORRLB5ElMAAAAAAAAAAAAAARQnAQ"
            />
          </div>
        </div>
        <div class="tooltip" style="transform: translate(0px, 0px); opacity: 1">
          <div class="hover">
            <img alt="pTooltip" width="132" src="https://pro.ant.design/static/stuffs_pie.49af377c.png" />
          </div>
        </div>
        <div class="layout" style="transform: translate(0px, 0px); opacity: 1">
          <div class="hover">
            <img
              alt="pLayout"
              width="166"
              src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*HTYfRoylglcAAAAAAAAAAAAAARQnAQ"
            />
          </div>
        </div>
        <div class="love" style="transform: translate(0px, 0px); opacity: 1">
          <div class="hover">
            <img
              alt="pLove"
              width="70"
              src="https://gw.alipayobjects.com/mdn/rms_7d1485/afts/img/A*QxVlTKsh4q0AAAAAAAAAAAAAARQnAQ"
            />
          </div>
        </div>
        <div class="ball" style="transform: translate(0px, 0px); opacity: 1">
          <div class="hover">
            <img
              alt="pBall"
              :width="88"
              src="https://gw.alipayobjects.com/zos/antfincdn/Eb8IHpb9jE/Typescript_logo_2020.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnumDeviceType } from '@/enum/system';
import { useAppStore } from '@/store';

const skillList = [
  {
    title: 'vue.js',
    desc: '熟练',
    color: '#abcdef',
    percent: 85,
  },
  {
    title: 'typescript',
    desc: '熟练',
    color: '#67C23A',
    percent: 75,
  },
  {
    title: 'NodeJs',
    desc: '熟练',
    color: '#E6A23C',
    percent: 70,
  },
  {
    title: 'MySQL',
    desc: '熟悉',
    color: '#F56C6C',
    percent: 60,
  },
  {
    title: '大屏可视化开发',
    desc: '熟练',
    color: '#409EFF',
    percent: 85,
  },
  {
    title: '小程序开发',
    desc: '熟练',
    color: '#909399',
    percent: 90,
  },
];
const app = useAppStore();
// 获取设备终端判断
const isMobile = computed(() => {
  return app.device === EnumDeviceType.mobile;
});
</script>

<style scoped lang="less">
.skill-container {
  @apply flex items-center justify-evenly;
  .skill-list {
    @apply w-600px flex items-center mt-20 justify-start flex-wrap;
    .item {
      opacity: 0;
      animation: itemEnter 0.5s ease-in-out alternate forwards;
      overflow: hidden;
      @apply w-260px bg-white rounded-md mr-10 mb-12 flex flex-col items-start justify-center p-5 relative;
      &:after {
        content: '';
        border-radius: 100%;
        @apply absolute -left-8px top-16px w-16px h-16px bg-[#abcdef];
      }
      &:nth-of-type(2)::after {
        background-color: #67c23a;
      }
      &:nth-of-type(3)::after {
        background-color: #e6a23c;
      }
      &:nth-of-type(4)::after {
        background-color: #f56c6c;
      }
      &:nth-of-type(5)::after {
        background-color: #409eff;
      }
      &:nth-of-type(6)::after {
        background-color: #909399;
      }
      .title {
        @apply font-dou text-sm;
      }
      .desc {
        @apply text-dark-50 mt-2 mb-1 text-xs font-dou;
      }
    }
  }
}
.kitchen {
  .banner {
    @apply relative w-full;
    .bg {
      @apply pt-50px;
      animation: tooltipShow 1s ease-in-out alternate;
    }
    .graph {
      @apply absolute top-400px left-50px;
      animation: show 1s ease-in-out alternate;
      img {
        animation: flow2 5s ease-in-out infinite alternate;
      }
    }
    .emoji {
      @apply absolute top-100px left-10px;
      animation: emojiShow 1s ease-in-out alternate;
      img {
        animation: flow2 3s ease-in-out infinite alternate;
      }
    }
    .tooltip {
      @apply absolute top-300px left-280px;
      animation: tooltipShow 1s ease-in-out alternate;
      img {
        animation: flow2 2.5s ease-in-out infinite alternate;
      }
    }
    .layout {
      @apply absolute top-380px left-420px;
      animation: layoutShow 1s ease-in-out alternate;
      img {
        animation: flow 4.5s ease-in-out infinite alternate;
      }
    }
    .love {
      @apply absolute top-20px left-190px;
      animation: loveShow 1s ease-in-out alternate;
      img {
        animation: flow 2s ease-in-out infinite alternate;
      }
    }
    .ball {
      @apply absolute top-130px left-350px;
      animation: ballShow 1s ease-in-out alternate;
      img {
        animation: flow2 3s ease-in-out infinite alternate;
      }
    }
    .hover {
      transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
@media (max-width: 768px) {
  .skill-container {
    @apply flex-col-reverse;
    .skill-list {
      @apply !w-full !justify-center;
      .item {
        @apply !mr-0;
      }
    }
  }
  .kitchen .banner .graph {
    top: 300px;
    animation: showMb 1s ease-in-out alternate;
  }
  .kitchen .banner .ball {
    left: 260px;
  }
  .kitchen .banner .tooltip {
    left: 240px;
    top: 280px;
    animation: tooltipShowMb 1s ease-in-out alternate;
  }
  .kitchen .banner .love {
    top: 50px;
    animation: loveShowMb 1s ease-in-out alternate;
  }
}

@keyframes loveShowMb {
  0% {
    transform: translate(-40px, 140px) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes flow2 {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(0, -10%, 0);
  }
}

@keyframes flow {
  0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(0, 10%, 0);
  }
}

@keyframes show {
  0% {
    transform: translate(100%, -100%) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes showMb {
  0% {
    transform: translate(80px, -100px) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes emojiShow {
  0% {
    transform: translate(100%, 100%) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1) rotate(-9.99999deg);
    opacity: 1;
  }
}
@keyframes tooltipShow {
  0% {
    transform: translate(-30px, -30px) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes tooltipShowMb {
  0% {
    transform: translate(-100px, -100px) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes ballShow {
  0% {
    transform: translate(-100%, 100%) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes loveShow {
  0% {
    transform: translate(100%, 400%) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
}
@keyframes layoutShow {
  0% {
    transform: translate(-100%, -100%) scale(0.1);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
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
