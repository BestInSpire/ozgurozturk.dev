<script setup lang="ts">
import NavBar from "./components/NavigationBar.vue"
</script>

<template>

  <NavBar />

  <div class="content">
    <router-view v-slot="{ Component }">
      <transition name="bounce">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>

</template>

<style lang="sass" scoped>
.bounce-enter-active
  animation: bounce-in 0.5s

.bounce-leave-active
  animation: bounce-in 0.5s reverse

@keyframes bounce-in
  0%
    transform: scale(0)

  50%
    transform: scale(1.25)

  100%
    transform: scale(1)
</style>
