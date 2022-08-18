<template>
  <div class="container">
    <div class="title">{{ info.title }}</div>
    <div class="item" v-if="info.img instanceof Array">
      <img :src="img" v-for="img in info.img" :key="img" />
    </div>
    <div class="flex justify-center" v-else>
      <a-image v-if="isMobile" :src="info.img" class="full-img" />
      <img v-else :src="info.img" class="full-img" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnumDeviceType } from '@/enum/system';
import { useAppStore } from '@/store';

const route = useRoute();
const info = ref<any>({});
const app = useAppStore();
// 获取设备终端判断
const isMobile = computed(() => {
  return app.device === EnumDeviceType.mobile;
});
onMounted(() => {
  info.value = route.query;
});
</script>

<style scoped lang="less">
.container {
  @apply w-1300px mx-auto mt-10;
  .title {
    @apply font-dou mb-4 ml-5;
  }
  .item {
    @apply w-full flex items-center justify-evenly;
    img {
      width: 300px;
    }
    .full-img {
      width: 90%;
    }
  }
}

@media (max-width: 768px) {
  .container {
    @apply w-full;

    .title {
      @apply w-full text-center ml-0;
    }
    .item {
      @apply flex-col;
      img {
        @apply mb-4;
      }
    }
  }
}
</style>
