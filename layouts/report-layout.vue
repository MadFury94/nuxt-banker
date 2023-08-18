<template>
  <div>
    <Header />
    <div class="grid lg:grid-cols-5 relative">
      <div
        :style="`background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${$route.meta.image}');`"
        class="col-span-2 h-8 lg:h-screen bg-cover bg-center hidden lg:block"
      >
        <div class="flex justify-center items-center lg:h-screen">
          <div class="p-8">
            <template v-if="pageInfo">
              <h1 class="text-3xl text-primary-500">{{ pageInfo?.title }}</h1>
              <h1 class="text-white text-base">{{ pageInfo?.description }}</h1>
            </template>
            <h1
              v-if="!hideOnReporting"
              class="text-4xl text-primary-500 font-semibold"
            >
              {{ $route.meta.title }}
            </h1>
            <div class="">
              <h1 class="text-2xl text-white font-semibold">
                {{ $route.meta.description }}
              </h1>
            </div>
            <div class="flex gap-x-96 px-12 items-center absolute bottom-28">
              <div v-if="!hideOnReporting">
                <button
                  class="text-white flex items-center gap-x-2 font-bold text-2xl"
                  @click="$router.go(-1)"
                >
                  <!-- <i class="fa-regular fa-left-long"></i> -->
                  <i class="fa-solid fa-arrow-left"></i>
                  <h1>Return</h1>
                </button>
              </div>

              <div class="text-white flex gap-x-2 text-3xl">
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-tiktok"></i>
                <i class="fa-brands fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reportMenu } from "../store/menu";
import { PageDataType } from "../types/model";
import Header from "./Header.vue";

const $route = useRoute();

const hideOnReporting = computed(() => {
  return $route.name === "personal-info";
});

const pageData = reportMenu;

const pageInfo = computed(() => {
  const id = $route.params.id as keyof PageDataType;
  // loop and find the page data

  const page = pageData.find((page: any) => page[id as string]);

  // Return the found page data or a default value
  return page ? page[id] : null;
});
</script>

<style scoped>
.text-wrapper {
  position: relative;
  z-index: 2;
}
</style>
