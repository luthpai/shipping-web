<script setup>
import { NCarousel } from "naive-ui"
import { useStore } from "vuex"

const store = useStore()
</script>

<template>
  <div id="hero" :class="store.state.menu == false ? 'pt-16' : 'pt-[24rem]'">
    <div id="hero-text">
      <div class="w-full">
        <n-carousel
          direction="vertical"
          :show-dots="false"
          :interval="1800"
          effect="fade"
          style="transition-duration: 800ms"
          class="hover:cursor-not-allowed"
          autoplay
          id="carousel"
        >
          <h1 class="carousel-text">RAPID</h1>
          <h1 class="carousel-text">SECURE</h1>
          <h1 class="carousel-text">RELIABLE</h1>
          <h1 class="carousel-text">TRUSTED</h1>
        </n-carousel>
        <h1 id="msg-text">
          SHIP EVERYTHING, <br />
          EVERYWHERE.
        </h1>
        <div id="buttonList">
          <router-link to="/track">Track Parcel</router-link>
          <router-link to="/get-a-quote">Get A Quote</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  color: black;
}

@keyframes herotext {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#hero {
  @apply bg-[#eeeeee] flex flex-col w-full min-h-screen h-[700vh] justify-start text-white px-4 lg:px-16;

  #hero-text {
    @apply h-fit w-fit items-start pb-0 flex flex-col;

    #msg-text {
      @apply text-3xl sm:text-5xl text-sky-600 font-extrabold w-fit;
    }
    .carousel-text {
      @apply text-5xl sm:text-6xl text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-500 to-sky-600 w-fit;
      animation: herotext 4s ease infinite;
      background-size: 300%;
    }
    #carousel {
      @apply h-[47px] sm:h-[61px] w-[30rem];
    }

    #buttonList {
      @apply text-lg gap-2 flex py-2 w-fit;
      a {
        @apply text-white bg-sky-600 py-2 px-3 rounded-lg font-semibold shadow-sm;

        &:hover {
          @apply bg-sky-700 text-gray-200 px-4;
        }
      }
    }
  }
}
</style>
