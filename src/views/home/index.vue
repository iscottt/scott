<template>
  <div class="home">
    <div class="loading" v-if="loading">
      <div class="loader">
        <div class="loader_overlay"></div>
        <div class="loader_cogs">
          <div class="loader_cogs__top">
            <div class="top_part"></div>
            <div class="top_part"></div>
            <div class="top_part"></div>
            <div class="top_hole"></div>
          </div>
          <div class="loader_cogs__left">
            <div class="left_part"></div>
            <div class="left_part"></div>
            <div class="left_part"></div>
            <div class="left_hole"></div>
          </div>
          <div class="loader_cogs__bottom">
            <div class="bottom_part"></div>
            <div class="bottom_part"></div>
            <div class="bottom_part"></div>
            <div class="bottom_hole"><!-- lol --></div>
          </div>
          <p class="font-bin text-2xl text-center">loading...</p>
        </div>
      </div>
    </div>
    <template v-if="!isMobile">
      <Info />
      <div class="-right-62px top-0">
        <Pictorial />
      </div>
    </template>
    <template v-if="isMobile">
      <Pictorial class="mt-10" />
      <Info />
      <div class="enter">了解更多</div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import Pictorial from '@/components/Pictorial.vue';
import Info from '@/components/Info.vue';
import { EnumDeviceType } from '@/enum/system';
import { useAppStore } from '@/store';
const loading = ref(false);
const app = useAppStore();
// 获取设备终端判断
const isMobile = computed(() => {
  return app.device === EnumDeviceType.mobile;
});
onMounted(() => {
  const notFirst = sessionStorage.getItem('notFirst');
  loading.value = notFirst ? false : true;
  setTimeout(() => {
    loading.value = false;
    if (!notFirst) {
      sessionStorage.setItem('notFirst', 'true');
    }
  }, 2000);
});
</script>

<style lang="less" scoped>
.home {
  @apply h-full flex items-center justify-center py-5 mx-auto px-50;
}
.enter {
  @apply bg-[#20a0ff] block text-white px-15px mt-5 rounded-[20px] text-[14px] font-bold;
  box-shadow: 0 8px 10px rgb(32 160 255 / 30%);
  line-height: 38px;
}
@media screen and (max-width: 756px) {
  .home {
    @apply h-full items-center justify-start py-5 mx-auto px-2 flex flex-col;
  }
}

.loading {
  @apply left-0 right-0 fixed bottom-0 top-0 z-12 flex items-center justify-center bg-[#f0f2f7];
}

.loader {
  height: 100%;
  position: relative;
  margin: auto;
  width: 400px;
}
.loader_overlay {
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: 0px 0px 0px 1000px rgba(255, 255, 255, 0.67), 0px 0px 19px 0px rgba(0, 0, 0, 0.16) inset;
  border-radius: 100%;
  z-index: -1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.loader_cogs {
  z-index: -2;
  width: 100px;
  height: 100px;
  top: -120px !important;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.loader_cogs__top {
  position: relative;
  width: 100px;
  height: 100px;
  transform-origin: 50px 50px;
  -webkit-animation: rotate 10s infinite linear;
  animation: rotate 10s infinite linear;
}
.loader_cogs__top div:nth-of-type(1) {
  transform: rotate(30deg);
}
.loader_cogs__top div:nth-of-type(2) {
  transform: rotate(60deg);
}
.loader_cogs__top div:nth-of-type(3) {
  transform: rotate(90deg);
}
.loader_cogs__top div.top_part {
  width: 100px;
  border-radius: 10px;
  position: absolute;
  height: 100px;
  background: #f98db9;
}
.loader_cogs__top div.top_hole {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.loader_cogs__left {
  position: relative;
  width: 80px;
  transform: rotate(16deg);
  top: 28px;
  transform-origin: 40px 40px;
  animation: rotate_left 10s 0.1s infinite reverse linear;
  left: -24px;
  height: 80px;
}
.loader_cogs__left div:nth-of-type(1) {
  transform: rotate(30deg);
}
.loader_cogs__left div:nth-of-type(2) {
  transform: rotate(60deg);
}
.loader_cogs__left div:nth-of-type(3) {
  transform: rotate(90deg);
}
.loader_cogs__left div.left_part {
  width: 80px;
  border-radius: 6px;
  position: absolute;
  height: 80px;
  background: #97ddff;
}
.loader_cogs__left div.left_hole {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.loader_cogs__bottom {
  position: relative;
  width: 60px;
  top: -65px;
  transform-origin: 30px 30px;
  -webkit-animation: rotate_left 10.2s 0.4s infinite linear;
  animation: rotate_left 10.2s 0.4s infinite linear;
  transform: rotate(4deg);
  left: 79px;
  height: 60px;
}
.loader_cogs__bottom div:nth-of-type(1) {
  transform: rotate(30deg);
}
.loader_cogs__bottom div:nth-of-type(2) {
  transform: rotate(60deg);
}
.loader_cogs__bottom div:nth-of-type(3) {
  transform: rotate(90deg);
}
.loader_cogs__bottom div.bottom_part {
  width: 60px;
  border-radius: 5px;
  position: absolute;
  height: 60px;
  background: #ffcd66;
}
.loader_cogs__bottom div.bottom_hole {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: white;
  position: absolute;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

/* Animations */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate_left {
  from {
    transform: rotate(16deg);
  }
  to {
    transform: rotate(376deg);
  }
}
@keyframes rotate_right {
  from {
    transform: rotate(4deg);
  }
  to {
    transform: rotate(364deg);
  }
}
</style>
