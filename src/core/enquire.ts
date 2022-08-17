import { EnumDeviceType } from '@/enum/system';

import { useAppStore } from '@/store/modules';
import enquireJs from 'enquire.js';
import { onMounted } from 'vue';

export const AppDeviceEnquire = () => {
  onMounted(() => {
    const app = useAppStore();
    deviceEnquire((deviceType: EnumDeviceType) => {
      switch (deviceType) {
        case EnumDeviceType.desktop:
          app.setDeviceType(EnumDeviceType.desktop);
          break;
        case EnumDeviceType.tablet:
          app.setDeviceType(EnumDeviceType.tablet);
          break;
        case EnumDeviceType.mobile:
          app.setDeviceType(EnumDeviceType.mobile);
          break;
        default:
          app.setDeviceType(EnumDeviceType.desktop);
          break;
      }
    });
  });
};

/**
 * 响应式检测
 * @param {*} callback
 */
export const deviceEnquire = function (callback) {
  const matchDesktop = {
    match: () => {
      callback && callback(EnumDeviceType.desktop);
    },
  };

  const matchLablet = {
    match: () => {
      callback && callback(EnumDeviceType.tablet);
    },
  };

  const matchMobile = {
    match: () => {
      callback && callback(EnumDeviceType.mobile);
    },
  };

  enquireJs
    .register('screen and (max-width: 576px)', matchMobile)
    .register('screen and (min-width: 576px) and (max-width: 1199px)', matchLablet)
    .register('screen and (min-width: 1200px)', matchDesktop);
};
