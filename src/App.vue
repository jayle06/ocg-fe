<template>
  <MainHeader />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <MainFooter />
</template>

<script>
import MainHeader from "@/components/MainHeader"
import MainFooter from "@/components/MainFooter"

export default {
  name : 'App',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
