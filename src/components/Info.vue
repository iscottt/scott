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
      <span class="!font-dou text-2xl flex-1 font-thin">🌱 不知名前端攻城狮 <span class="dot">...</span></span>
    </div>
    <div v-if="isMobile" class="font-bin font-bold text-6xl mt-15 w-full flex items-center justify-center flex-col">
      <div class="!font-dou text-xl flex-1 font-thin pt-15 w-full text-center">🌱 不知名前端攻城狮</div>
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
  @apply w-520px overflow-hidden ! -mt-30;
}

@media (max-width: 768px) {
  .home-info {
    @apply ! w-full overflow-hidden ! mt-0 flex items-center flex-col justify-center;
  }

  .douyin-style {
    @apply mt-5 w-full;
  }

  .info {
    text-align: center;
  }

  .douyin-style {
    text-align: center;
  }

  .douyin-style-font {
    text-align: center;

    .douyin-style-title:before {
      left: 50% !important;
      transform: translateX(-50%);
    }
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
  width: 100%;
  position: relative;
  animation: debounce 2s steps(3) infinite;
  /** font style **/
  font-size: 50px;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: STITLE;
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
  left: -3px;
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
