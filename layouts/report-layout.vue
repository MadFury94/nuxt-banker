<template>
 <div>
  <Header />
  <div class="grid lg:grid-cols-5 ">
    <div class=" col-span-2 bg-red-200 h-80 lg:h-screen">
     <div class="flex justify-center items-center lg:h-screen">
      <div class="p-8 h-20">
        <template v-if="pageInfo">
          <h1 class="text-3xl">{{ pageInfo?.title}}</h1>
        <h1>{{ pageInfo?.description}}</h1>
        </template>
     
        <h1>{{ $route.meta.title }}</h1>
        <h1>{{ $route.meta.description }}</h1>
      </div>
     </div>
    </div>
    <div class=" col-span-3">
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


const pageData = reportMenu


const pageInfo = computed(() => {
  const id = $route.params.id as keyof PageDataType;
  // loop and find the page data

  const page = pageData.find((page: any) => page[id as string]);

  // Return the found page data or a default value
  return page ? page[id] : null;
});

console.log(reportMenu);


</script>


<style scoped></style>
