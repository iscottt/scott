<template>
  <div class="container">
    <a-row class="row-main" :gutter="20">
      <a-col
        class="item-fa"
        :xs="24"
        :sm="24"
        :md="12"
        :lg="8"
        :xl="6"
        v-for="(item, index) in workList"
        :key="item.title"
      >
        <div
          class="post-item card flex flex-col items-center"
          :style="{
            animationDelay: index * 0.1 + 's',
          }"
          @click="showMore(item)"
        >
          <a class="img">
            <span class="date">
              <HistoryOutlined />
              {{ item.time }}
            </span>
          </a>
          <div class="title">{{ item.title }}</div>
          <div class="tags !my-2" style="transform: scale(1); opacity: 1; visibility: visible">
            <a class="color-4" v-for="_ in item.major" :key="_">{{ _ }}</a>
          </div>
          <a class="go">查看详情</a>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
const workList = [
  {
    title: '福建医科大附属第一医院智慧食堂',
    desc: `该系统基于医院管理平台钉钉app而开发,支持医护人员通过钉钉入口实现堂食和配送、多种支付及线上充值功能。主要负责前端部分的工作，基于Vue2+Typescript+ Ant-Design-Vue进行开发`,
    img: [
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/canteen.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/canteen2.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/canteen3.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/canteen4.png',
    ],
    major: ['Vue', 'Typescript', '钉钉小程序开发'],
    time: '2019/05 ~ 2019/12',
  },
  {
    title: '嘉兴市第一医院互联网医院',
    desc: `嘉兴市第一医院互联网医院包含，微信小程序，钉钉小程序，pc端医生工作站，pc端后台管理系统。主要负责所有前端内容的开发，项目亮点：IM即时通讯、基于腾讯云的视频通话、电子签名等`,
    img: [
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/hospital.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/hospital2.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/hospital3.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/hospital4.png',
    ],
    major: ['Vue', 'Typescript', '微信小程序开发'],
    time: '2019/01 ~ 2020/01',
  },
  {
    title: '小哥星座微信小程序',
    desc: `小哥星座微信小程序是基于uni-app开发的微信小程序，包含了塔罗占卜，星座运势、许愿广场等模块。用户可以每天查看自己星座的运势，同时塔罗占卜也能带你打开命运之门，一窥命运真容。`,
    major: ['Vue', 'Typescript', '微信小程序开发'],
    img: [
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/tarot1.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/tarot2.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/tarot3.png',
      'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/tarot4.png',
    ],
    time: '2017/07 ~ 2018/07',
  },
  {
    title: '台州市中西医结合医院大屏',
    desc: `台州市中西医结合医院大屏项目基于Vue+Echats进行开发，主要负责前端部分的开发，项目亮点是基于video.js封装了rtmp推流实现摄像头视频实时播放，利用ffmpeg+nginx实现rtsp转rtmp`,
    img: 'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/screen.png',
    major: ['Vue', 'Typescript', 'Echarts'],
    time: '2020/01 ~ 2020/05',
  },
  {
    title: '浙江省市场监督管理局智能运维平台',
    desc: `浙江省市场监督管理局智能运维平台是基于Vue3+Vite+Typescript+Ant-Design-Vue进行开发。主要负责前端部分，包含项目框架的搭建，技术选型，复杂组建的封装以及单点登录和权限验证模块`,
    img: 'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/oms.png',
    major: ['Vue 3.x', 'Typescript', '钉钉小程序开发'],
    time: '2021/09 ~ 2022/06',
  },
  {
    title: 'Scott Admin',
    desc: `Scott Admin 是一个基于 Vue3.0、Vite 、 Ant-Design-Vue 、TypeScript、Pinia、WindiCss 构建的后台解决方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、弹窗表单、查询表格等功能。`,
    img: 'https://ethanwp.oss-cn-shenzhen.aliyuncs.com/resume/sadmin2.png',
    major: ['Vue 3.x', 'Typescript', 'Pinia', 'WindiCss'],
    time: '2022/07 ~ 2022/08',
  },
];
const router = useRouter();
const showMore = (item) => {
  // TODO: 到详情页
  router.push({
    path: '/works-detail',
    query: { title: item.title, img: item.img },
  });
};
</script>

<style scoped lang="less">
.container {
  @apply w-1300px flex flex-wrap items-start justify-center mx-auto mt-12;
  .item {
    opacity: 0;
    animation: itemEnter 0.5s ease-in-out alternate forwards;
    transition: box-shadow 0.3s, border-color 0.3s;
    @apply w-340px cursor-pointer overflow-hidden rounded-md p-6 flex bg-white flex-col items-start justify-start border-light-50 mb-5;
    &:hover {
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    }
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    .cover {
      @apply flex w-full items-center justify-center;
      img {
        @apply w-300px h-150px;
      }
    }
    .content {
      @apply flex-1 flex flex-col items-start justify-center;
      .title {
        @apply text-xl mt-4 font-bold;
      }
      .desc {
        @apply w-full text-base my-2;
      }
      .action {
        @apply text-gray-500 text-sm font-bin;
      }
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

@media (max-width: 768px) {
  .container {
    @apply w-full;
  }
  .row-main {
    @apply w-full flex flex-col items-center justify-center;
    .item {
      margin-right: 0;
    }
  }
}
</style>
