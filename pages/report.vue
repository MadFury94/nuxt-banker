<template>
  <div class="flex justify-center items-center h-screen">
    <ul class="flex disc list-inside flex-col gap-y-7">
      <li class="" v-for="(item, index) in menuItems" :key="index">
        <NuxtLink
          :to="{
            name: 'personal-info',
            params: {
              id: item.id,
            },
          }"
        >
          <span class="text-3xl">{{ item.title }}</span>
          <p>{{ item.description }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "report",
  title: `WE ARE HERE TO SOLVE YOUR ISSUES`,
  description:
    "We are here to solve your issues. We are here to solve your issues.",
  layout: "report-layout",
  image: "/assets/images/hero.png",
});
const menuItems = [
  {
    "id":'banking',
    title: "BANKING/ FINANCE CONSULTATION",
    subDescription: "",

    description: "report banking issues",
  },
  {
    id:'learn',
    title: "LEARN FINANCIAL LITERACY ",
    subDescription: "",
    description: "leanr about oney",
  },
  {
    id:'efcc',
    title: "CONTACT EFCC ",
    subDescription: "",
    description: "contact the authorities",
  },
];

const selectedItem = ref(menuItems[0]);
</script>

<style scoped></style>
