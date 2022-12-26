<template>
  <div class="container">
    <a-typography>
      <a-typography-title class="font-dou !text-xl">关于Scott</a-typography-title>
      <a-typography-paragraph class="text-base"> 97年2月生，25岁，男性，热爱编程和分享。 </a-typography-paragraph>

      <a-typography-title class="font-dou !text-xl">我的公众号</a-typography-title>
      <a-typography-paragraph>
        <img src="@/assets/images/wechat.png" />
      </a-typography-paragraph>

      <a-typography-title class="font-dou !text-xl">我的网站</a-typography-title>
      <a-typography-paragraph>
        <ul class="text-base">
          <li class="!mb-2">
            Scott的个人博客
            <a href="https://blog.ethan.pub" target="_blank">https://blog.scott-studio.cn </a>
          </li>
        </ul>
      </a-typography-paragraph>
      <a-typography-title class="font-dou !text-xl">我的Github</a-typography-title>
      <a-typography-paragraph class="text-base">
        <ul class="text-base">
          <li class="!mb-2">
            <p>地址：<a href="https://github.com/iscottt" target="_blank">https://github.com/iscottt </a></p>
          </li>
          <li class="!mb-2">
            <p>里面有一些还算有用的代码~</p>
          </li>
        </ul>
      </a-typography-paragraph>
      <a-typography-title class="font-dou !text-xl">联系方式</a-typography-title>
      <a-typography-paragraph class="text-base">
        <p class="!mb-2">微信 💬：<a-typography-text mark>iScottt163</a-typography-text></p>
        <p>邮箱 📧：<a-typography-text mark>iscottt@163.com</a-typography-text></p>
      </a-typography-paragraph>
    </a-typography>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="less">
.container {
  @apply w-1300px mx-auto mt-10 p-10 rounded-md;
  p {
    margin: 0;
  }
  img {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .container {
    @apply w-full mt-2;
    img {
      width: 100%;
    }
  }
}
</style>
