<template>
  <div class="home-info">
    <div class="douyin-style">
      <div class="douyin-style-font">
        <div class="douyin-style-title" data-title="Scott">
          <span>Scott</span>
        </div>
      </div>
      <div class="douyin-style-font shake" style="--shake-offset: -2px; --shake-height: 20px; --shake-delay: 0s">
        <div class="douyin-style-title" data-title="Scott">
          <span>Scott</span>
        </div>
      </div>
      <div class="douyin-style-font shake" style="--shake-offset: -3px; --shake-height: 2px; --shake-delay: 0。2s">
        <div class="douyin-style-title" data-title="Scott">
          <span>Scott</span>
        </div>
      </div>
      <div class="douyin-style-font shake" style="--shake-offset: -5px; --shake-height: 10px; --shake-delay: 0.1s">
        <div class="douyin-style-title" data-title="Scott">
          <span>Scott</span>
        </div>
      </div>
    </div>
    <div v-if="!isMobile" class="font-bin font-bold text-6xl mt-15 w-full">
      <span class="font-dou text-2xl flex-1 font-thin">🌱 不知名前端攻城狮 <span class="dot">...</span></span>
    </div>
    <div v-if="isMobile" class="font-bin font-bold text-6xl mt-15 w-full flex items-center justify-center flex-col">
      <div class="font-dou text-xl w-full flex-1 font-thin pt-15 pl-10">
        🌱 不知名前端攻城狮 <span class="dot">...</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EnumDeviceType } from '@/enum/system';
import { useAppStore } from '@/store';
const app = useAppStore();
// 获取设备终端判断
const isMobile = computed(() => {
  return app.device === EnumDeviceType.mobile;
});
</script>

<style scoped lang="less">
.home-info {
  @apply w-520px overflow-hidden  !-mt-30;
}
@media (max-width: 768px) {
  .home-info {
    @apply w-full overflow-hidden !mt-0;
  }
  .douyin-style {
    @apply ml-22 mt-5;
  }
  .info {
    text-align: center;
  }
}
.dot {
  animation: dot 2s infinite step-start;
  display: inline-block;
  width: 0.5em;
  vertical-align: bottom; /*始终让省略号在文字的下面*/
  overflow: hidden;
}

@keyframes dot {
  /*动态改变显示宽度, 但始终让总占据空间不变, 避免抖动*/
  0% {
    width: 0;
    margin-right: 1.5em;
  }
  33% {
    width: 0.2em;
    margin-right: 1em;
  }
  66% {
    width: 0.45em;
    margin-right: 0.5em;
  }
  100% {
    width: 1em;
    margin-right: 0;
  }
}
@media (max-width: 1440px) {
  .home-info {
    width: 450px;
  }
}

.douyin-style {
  position: relative;
}

.douyin-style-font {
  font-weight: 700;
  width: 100%;
  position: relative;
  animation: debounce 2s steps(3) infinite;
  /** font style **/
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: DTITLE;
}

.douyin-style-font .douyin-style-title {
  position: absolute;
  top: 3px;
  left: 3px;
  width: inherit;
}

.douyin-style-font .douyin-style-title:before {
  position: absolute;
  top: -2px;
  left: -2px;
  color: #333;
  opacity: 0.8;
  z-index: 2;
  content: attr(data-title);
}

.douyin-style-font.shake {
  position: absolute;
  z-index: 9;
  left: var(--shake-offset);
  height: var(--shake-height);
  overflow: hidden;
  background: transparent;
  animation: shake-body 2s steps(4) infinite;
  animation-delay: var(--shake-delay);
}

.douyin-style-font.shake .douyin-style-title {
  animation: shake-content 2s steps(4) infinite;
  animation-delay: var(--shake-delay);
}

@keyframes debounce {
  0% {
    margin-left: 2px;
  }
  0% {
    margin-left: -4px;
  }
}

@keyframes shake-body {
  0% {
    top: 0;
  }
  100% {
    top: 60px;
  }
}

@keyframes shake-content {
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: -60px;
  }
}
</style>
