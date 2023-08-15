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
    "Follow the prompts on the right so we understand you better and know how we can help",
  layout: "report-layout",
  image:
    "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692097687/pretty-dark-skinned-young-woman-with-afro-hairstyle-smiles-joyfully-advertises-something-cool-appealing_e9hzue.jpg",
});
const menuItems = [
  {
    id: "banking",
    title: "BANKING/ FINANCE CONSULTATION",
    subDescription: "",

    description: "report banking issues",
  },
  {
    id: "learn",
    title: "LEARN FINANCIAL LITERACY ",
    subDescription: "",
    description: "leanr about oney",
  },
  {
    id: "efcc",
    title: "CONTACT EFCC ",
    subDescription: "",
    description: "contact the authorities",
  },
  {
    id: "account",
    subDescription: "",
    title: "Bank Account Opening",
    description: "contact the authorities",
  },

  {
    id: "complaints",
    subDescription: "",

    title: "General Complaints",
    description: "contact the authorities",
  },
  {
    id: "sme",
    title: "SME Consultation",
    subDescription: "",
    description: "contact the authorities",
  },
];

const selectedItem = ref(menuItems[0]);
</script>

<style scoped></style>
