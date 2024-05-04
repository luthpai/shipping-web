<script setup lang="ts">
import { RouterView } from "vue-router"
// @ts-ignore
import Nav from "@/components/Nav.vue"
</script>

<template>
  <Nav />
  <RouterView v-slot="{ Component }">
    <Transition name="slide" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: 400ms ease all;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(50vw);
}
</style>
