<template>
  <ConfigProvider :locale="zhCN">
    <router-view />
  </ConfigProvider>
</template>
<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { AppDeviceEnquire } from '@/core';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
AppDeviceEnquire();
dayjs.locale('zh-cn');
</script>

<style scoped lang="less"></style>
