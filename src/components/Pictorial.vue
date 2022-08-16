<template>
  <div class="pictorial-wrap flex items-center justify-center">
    <div class="pictorial">
      <div class="pic backboard"></div>
      <div class="pic list">
        <div class="hover-wrap">
          <img src="@/assets/images/home/pictorial/list.png" alt="Icon list" class="cursor-pointer" />
        </div>
      </div>
      <div class="pic mr-king">
        <div class="hover-wrap">
          <img src="@/assets/images/home/pictorial/mr-king.png" alt="Mr King" />
        </div>
      </div>
      <div v-for="(icon, i) in icons" :key="i" :class="`pic icon icon${i}`">
        <div class="hover-wrap">
          <img :src="icon" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import icon0Png from '@/assets/images/home/pictorial/0.png';
import icon1Png from '@/assets/images/home/pictorial/1.png';
import icon2Png from '@/assets/images/home/pictorial/2.png';
import icon3Png from '@/assets/images/home/pictorial/3.png';
import icon4Png from '@/assets/images/home/pictorial/4.png';
import icon5Png from '@/assets/images/home/pictorial/5.png';

const icons: any[] = [icon0Png, icon1Png, icon2Png, icon3Png, icon4Png, icon5Png];
</script>

<style lang="less" scoped>
.pictorial-wrap {
  font-size: 100px;
}
.pictorial-wrap .pictorial {
  position: relative;
  width: 7.45em;
  height: 6.9em;
}
.pictorial-wrap .pictorial .pic {
  position: absolute;
}
.pictorial-wrap .pictorial .backboard {
  width: 6.01em;
  height: 4.79em;
  top: 0.18em;
  right: 0.53em;
  opacity: 0.4;
  background: url('@/assets/images/home/pictorial/backboard.png') 0 0/100% no-repeat;
  animation: fadeIn 0.7s ease-in-out 1 forwards;
}
.pictorial-wrap .pictorial .mr-king {
  width: 3.45em;
  height: 4.51em;
  left: 0.98em;
  bottom: 0.1em;
  opacity: 0.4;
  transition: transform 1s;
  transform: translateY(0.1em);
  animation: mrKing 1s ease-in-out 1 forwards, fadeIn 1s ease-in-out 1 forwards;
}
.pictorial-wrap .pictorial .mr-king .hover-wrap {
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pictorial-wrap .pictorial .mr-king .hover-wrap:hover {
  transform: scale(1.05);
}
.pictorial-wrap .pictorial .mr-king .hover-wrap img {
  width: 100%;
}
.pictorial-wrap .pictorial .list {
  width: 3.58em;
  height: 3.13em;
  top: 3.64em;
  left: 3.94em;
  opacity: 0;
  transition: transform 1s;
  animation: list 0.7s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .list .hover-wrap {
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pictorial-wrap .pictorial .list .hover-wrap:hover {
  transform: scale(1.05);
}
.pictorial-wrap .pictorial .list .hover-wrap img {
  width: 100%;
}
.pictorial-wrap .pictorial .icon {
  width: 1.2em;
  height: 1.2em;
  top: 2.8em;
  left: 2em;
  cursor: pointer;
}
.pictorial-wrap .pictorial .icon .hover-wrap {
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.pictorial-wrap .pictorial .icon .hover-wrap:hover {
  transform: scale(1.2);
}
.pictorial-wrap .pictorial .icon0 {
  opacity: 0;
  animation: icon-move0 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon0 img {
  width: 100%;
  animation: flutter-up 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move0 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(-2em, 0em);
  }
}
.pictorial-wrap .pictorial .icon1 {
  opacity: 0;
  animation: icon-move1 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon1 img {
  width: 100%;
  animation: flutter-down 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move1 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(-1.618033988em, -1.175570504em);
  }
}
.pictorial-wrap .pictorial .icon2 {
  opacity: 0;
  animation: icon-move2 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon2 img {
  width: 100%;
  animation: flutter-up 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move2 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(-0.618033988em, -1.902113032em);
  }
}
.pictorial-wrap .pictorial .icon3 {
  opacity: 0;
  animation: icon-move3 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon3 img {
  width: 100%;
  animation: flutter-down 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move3 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(0.618033988em, -1.902113032em);
  }
}
.pictorial-wrap .pictorial .icon4 {
  opacity: 0;
  animation: icon-move4 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon4 img {
  width: 100%;
  animation: flutter-up 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move4 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(1.618033988em, -1.175570504em);
  }
}
.pictorial-wrap .pictorial .icon5 {
  opacity: 0;
  animation: icon-move5 0.8s ease-in-out 0s forwards;
}
.pictorial-wrap .pictorial .icon5 img {
  width: 100%;
  animation: flutter-down 3s ease-in-out 0.8s infinite alternate;
}
@keyframes icon-move5 {
  from {
    opacity: 0;
    transform: translate(0, 0);
  }
  to {
    opacity: 1;
    transform: translate(2em, 0em);
  }
}
@media (max-width: 1440px) {
  .pictorial-wrap {
    font-size: 60px;
  }
}
@media (max-width: 750px) {
  .pictorial-wrap {
    font-size: 0.9rem;
  }
}
@keyframes flutter-down {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.1em);
  }
}
@keyframes flutter-up {
  0% {
    transform: translateY(0);
  }
  to {
    transform: translateY(-0.1em);
  }
}
@keyframes list {
  from {
    opacity: 0.4;
    transform: translate(0);
  }
  to {
    opacity: 1;
    transform: translateY(-0.06em);
  }
}
@keyframes mrKing {
  from {
    transform: translateY(0.1em);
  }
  to {
    transform: translate(0);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
