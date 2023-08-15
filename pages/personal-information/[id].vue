<template>
  <div class="p-10">
    <h1 class="font-semibold hidden text-4xl lg:block">
      {{ pageInfo?.title }}
    </h1>
    <h1 class="font-semibold mt-20">Personal Information</h1>

    <div class="flex justify-center">
      <div class="w-full">
        <input class="border-2 border-red-500 w-full" type="text" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reportMenu } from "../../store/menu";

import { PageDataType } from "../../types/model";

definePageMeta({
  title: "Personal Information",
  image:
    "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692097687/pretty-dark-skinned-young-woman-with-afro-hairstyle-smiles-joyfully-advertises-something-cool-appealing_e9hzue.jpg",
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

const pageData = reportMenu;
</script>

<style scoped></style>
