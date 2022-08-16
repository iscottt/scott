<template>
  <a-layout class="h-full layout">
    <a-layout-header class="!bg-transparent !relative !z-10 !px-50 flex items-center justify-between">
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        class="!bg-transparent !border-none"
      >
        <a-menu-item key="1" class="font-bin" style="font-size: 18px">Skill</a-menu-item>
        <a-menu-item key="2" class="font-bin" style="font-size: 18px">Experience</a-menu-item>
        <a-menu-item key="3" class="font-bin" style="font-size: 18px">About Me</a-menu-item>
      </a-menu>

      <div class="actions h-full flex items-center">
        <a-tooltip color="#108ee9">
          <template #title>Github</template>
          <a href="https://github.com/iscottt" target="_blank" style="display: inherit; color: #0e70d5">
            <GithubFilled style="font-size: 24px" class="cursor-pointer mr-3" />
          </a>
        </a-tooltip>
        <a-tooltip color="#108ee9">
          <template #title>个人博客</template>
          <a href="https://ethan.pub" target="_blank" style="display: inherit; color: #0e70d5">
            <IeCircleFilled style="font-size: 24px" class="cursor-pointer mr-3" />
          </a>
        </a-tooltip>
        <a-tooltip color="#108ee9">
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
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';

const selectedKeys: Ref<string[]> = ref(['2']);
</script>

<style scoped lang="less">
.layout {
  background: url('@/assets/images/home_bg.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
