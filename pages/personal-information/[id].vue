<template>
  <div>
    <h1 class="font-semibold">{{ pageInfo?.title }}</h1>

    <div class="mt-40">
      <h1>Personla Infor amtion</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reportMenu } from "../../store/menu";

import { PageDataType } from "../../types/model";

definePageMeta({
  title: "Personal Information",
  image: "https://i.imgur.com/3uVxKCd.png",
  name: "personal-info",
  layout: "report-layout",
});

const $route = useRoute();




const pageInfo = computed(() => {
  const id = $route.params.id as keyof PageDataType;
  // loop and find the page data

  const page = pageData.find((page: any) => page[id as string]);

  // Return the found page data or a default value
  return page ? page[id] : null;
});

const pageData = reportMenu
</script>

<style scoped></style>

