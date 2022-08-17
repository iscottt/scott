import { EnumDeviceType } from '@/enum/system';
import { nextTick } from 'vue';
import { defineStore } from 'pinia';

interface AppState {
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  /** 设备终端信息(移动端适配) */
  device: EnumDeviceType;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    reloadFlag: true,
    device: EnumDeviceType.desktop,
  }),
  actions: {
    /**
     * 重载页面
     * @param duration - 重载的延迟时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false;
      await nextTick();
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true;
        }, duration);
      } else {
        this.reloadFlag = true;
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 });
      }, 100);
    },
    async setDeviceType(deviceType: EnumDeviceType) {
      this.device = deviceType;
    },
  },
});
