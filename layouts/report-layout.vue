<template>
  <div>
    <Header />
    <div class="grid lg:grid-cols-5">
      <div
        :style="`background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${$route.meta.image}');`"
        class="col-span-2 h-8 lg:h-screen bg-cover bg-center"
      >
        <div class="flex justify-center items-center lg:h-screen">
          <div class="p-8">
            <template v-if="pageInfo">
              <h1 class="text-3xl text-white">{{ pageInfo?.title }}</h1>
              <h1 class="text-white text-base">{{ pageInfo?.description }}</h1>
            </template>

            <h1 class="text-4xl text-white font-semibold">
              {{ $route.meta.title }}
            </h1>
            <div class="h-4 mb-48">
              <h1 class="text-2xl text-white font-semibold">
                {{ $route.meta.description }}
              </h1>
            </div>

            <button class="text-white" @click="$router.go(-1)">
              <BackwardIcon class="h-10 text-white"> </BackwardIcon>
            </button>
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
import { BackwardIcon } from "@heroicons/vue/20/solid";

const $route = useRoute();

const pageData = reportMenu;

const pageInfo = computed(() => {
  const id = $route.params.id as keyof PageDataType;
  // loop and find the page data

  const page = pageData.find((page: any) => page[id as string]);

  // Return the found page data or a default value
  return page ? page[id] : null;
});

console.log(reportMenu);
</script>

<style scoped>
.text-wrapper {
  position: relative;
  z-index: 2;
}
</style>
