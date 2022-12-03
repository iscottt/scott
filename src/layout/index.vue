<template>
  <a-layout class="h-full layout">
    <a-layout-header
      class="!bg-transparent !relative !z-10 flex items-center justify-between"
      :class="isMobile ? '!px-2 w-full' : '!px-50'"
    >
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px', width: '100%' }"
        class="!bg-transparent !border-none"
        :class="isMobile ? 'flex justify-center' : ''"
      >
        <a-menu-item
          key="/home"
          @click="router.push('/home')"
          class="font-dou menu-item"
          :class="isMobile ? '!px-3' : ''"
          :style="{ 'font-size': isMobile ? '14px' : '18px' }"
        >
          <img src="https://ethanwp.oss-cn-shenzhen.aliyuncs.com/blog/logo.svg" alt="" class="relative top-5px" />
        </a-menu-item>
        <a-menu-item
          key="/skills"
          @click="router.push('/skills')"
          class="font-dou"
          :class="isMobile ? '!px-3' : ''"
          :style="{ 'font-size': isMobile ? '14px' : '18px' }"
          >技能
        </a-menu-item>
        <a-menu-item
          key="/experience"
          @click="router.push('/experience')"
          class="font-dou"
          :class="isMobile ? '!px-3' : ''"
          :style="{ 'font-size': isMobile ? '14px' : '18px' }"
          >经历
        </a-menu-item>
        <a-menu-item
          key="/works"
          class="font-dou"
          @click="router.push('/works')"
          :class="isMobile ? '!px-3' : ''"
          :style="{ 'font-size': isMobile ? '14px' : '18px' }"
          >作品
        </a-menu-item>
        <a-menu-item
          key="/about"
          class="font-dou"
          @click="router.push('/about')"
          :class="isMobile ? '!px-3' : ''"
          :style="{ 'font-size': isMobile ? '14px' : '18px' }"
          >关于我
        </a-menu-item>
      </a-menu>

      <div v-if="!isMobile" class="actions h-full flex items-center">
        <a-tooltip color="#464d6e">
          <template #title>Github</template>
          <a href="https://github.com/iscottt" target="_blank" style="display: inherit; color: #0e70d5">
            <GithubFilled style="font-size: 24px" class="cursor-pointer mr-3" />
          </a>
        </a-tooltip>
        <a-tooltip color="#464d6e">
          <template #title>个人博客</template>
          <a href="https://ethan.pub" target="_blank" style="display: inherit; color: #0e70d5">
            <IeCircleFilled style="font-size: 24px" class="cursor-pointer mr-3" />
          </a>
        </a-tooltip>
        <a-tooltip color="#464d6e">
          <template #title>掘金主页</template>
          <a
            href="https://juejin.cn/user/3456520286121272/posts"
            target="_blank"
            style="display: inherit; color: #0e70d5"
          >
            <SlackCircleFilled style="font-size: 24px" class="cursor-pointer" />
          </a>
        </a-tooltip>
        <!-- <slack-circle-filled /> -->
      </div>
    </a-layout-header>
    <a-layout-content>
      <router-view v-slot="{ Component, route }">
        <transition name="fade-slide" mode="out-in" appear>
          <component :is="Component" v-if="app.reloadFlag" :key="route.path" />
        </transition>
      </router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import { EnumDeviceType } from '@/enum/system';
import { useAppStore } from '@/store';
import { Ref } from 'vue';
const route = useRoute();
const router = useRouter();
const selectedKeys: Ref<string[]> = ref([route.fullPath]);
const app = useAppStore();
// 获取设备终端判断
const isMobile = computed(() => {
  return app.device === EnumDeviceType.mobile;
});
</script>

<style scoped lang="less">
.layout {
  background: url('@/assets/images/home_bg.png') no-repeat center;
  background-size: cover;
  overflow: auto;
}
</style>
