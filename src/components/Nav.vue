<script setup>
import { useStore } from "vuex"
import { RouterLink } from "vue-router"
import { ref } from "vue"

const store = useStore()
const scrolled = ref(false)

window.addEventListener("resize", () => {
  store.state.menu = false
})

window.addEventListener("scroll", () => {
  if (window.scrollY > 20 && store.state.menu) {
    store.commit("closeMenu")
  }

  if (window.scrollY > 20) scrolled.value = true
  else scrolled.value = false
}) 
</script>

<template>
  <nav id="Nav" class="fixed">
    <div id="logo" :class="store.state.menu ? 'left-[-100vw]' : 'left-4'">
      <router-link to="/">
        <v-icon name="la-shipping-fast-solid" class="mb-1" scale="2.8" />
        <span>Shipping</span></router-link
      >
    </div>
    <ul id="mdMenu">
      <li><router-link class="homies" to="/">Home</router-link></li>
      <li><router-link class="homies" to="/#about">About</router-link></li>
      <li>
        <router-link class="homies" to="/#services">Services</router-link>
      </li>
      <li><router-link class="homies" to="/#contact">Contact</router-link></li>
      <li id="track-button">
        <router-link to="/track">Track Parcel</router-link>
      </li>
    </ul>
    <button
      :class="
        scrolled 
          ? 'menu text-sky-600 absolute right-[-5rem]'
          : 'menu text-sky-600 absolute right-4'
      "
      @click="store.commit('toggleMenu')"
    >
      <div
        :class="store.state.menu ? 'rotate-45 absolute right-0' : ''"
        class="w-[24px] h-[3px] bg-sky-600"
      ></div>
      <div
        :class="store.state.menu ? 'rotate-[-225deg] absolute right-0' : ''"
        class="w-[24px] h-[3px] bg-sky-600"
      ></div>
    </button>
    <button :class="
      scrolled 
        ? 'w-[31px] block bg-[#eee] text-sky-600 absolute right-4 top-3 md:hidden'
        : 'top-[-5rem] text-sky-600 bg-[#eee] block w-[31px] absolute right-4 md:hidden'
    " @click="store.commit('toggleMenu')">
      <v-icon name="bi-arrow-up-circle" scale="2." />
    </button>
  </nav>
  <div id="xsMenu" :class="!store.state.menu ? 'top-[-23rem]' : 'top-0'">
    <ul>
      <li>
        <router-link @click="store.commit('closeMenu')" to="/"
          >Home</router-link
        >
      </li>
      <li>
        <router-link @click="store.commit('closeMenu')" to="/#about"
          >About</router-link
        >
      </li>
      <li>
        <router-link @click="store.commit('closeMenu')" to="/#services"
          >Services</router-link
        >
      </li>
      <li>
        <router-link @click="store.commit('closeMenu')" to="/#contact"
          >Contact</router-link
        >
      </li>
      <li>
        <router-link @click="store.commit('closeMenu')" to="/track"
          >Track Parcel</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
nav {
  @apply 
    z-50
    w-full 
    top-0 
    left-0 
    right-0 
    h-16
    bg-[#eee]
    
    py-2
    px-4
    md:px-8
    lg:px-16

    flex 
    justify-between
    items-center;

  #logo {
    @apply absolute lg:left-16;

    a {
      @apply text-sky-600;
      transition: all 0.2s !important;

      &:hover {
        @apply text-sky-700;
      }

      span {
        @apply block absolute left-16 top-[-100vh] md:top-3 lg:top-2 md:text-3xl lg:text-4xl font-bold;
      }
    }
  }

  #mdMenu {
    @apply flex text-lg items-center gap-4 font-semibold top-[-100vh] md:top-3 absolute right-4 md:right-8 lg:right-16 text-gray-700;

    .homies {
      &:hover {
        @apply text-black;
      }
    }
  }

  #track-button {
    @apply py-1 px-3 font-bold rounded-lg bg-sky-600 text-white;

    &:hover {
      @apply bg-sky-700 text-gray-200;
    }
  }
}

.menu {
  @apply md:hidden flex flex-col justify-center gap-2 h-[16px] w-[24px];
}

#xsMenu {
  @apply flex flex-col md:hidden bg-[#eee] text-sky-600 absolute px-8 w-full right-0 left-0 bottom-0 shadow-sm z-[49] py-16 h-[23rem];

  div {
    @apply flex items-center justify-end font-semibold;
  }

  ul {
    @apply flex flex-col text-3xl font-semibold gap-4 justify-center;
  }
}
</style>
