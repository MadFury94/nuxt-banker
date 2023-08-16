<template>
  <div class="flex justify-center items-center h-screen">
    <ul class="flex disc list-inside flex-col gap-y-7">
      <li class="" v-for="(item, index) in menuItems" :key="index">
        <NuxtLink
          class="cursor-pointer"
          :to="{
            name: 'personal-info',
            params: {
              id: item.id,
            },
          }"
        >
          <span class="text-3xl">
            <i class="text-primary-500" :class="item.icon"></i>

            {{ item.title }}</span
          >
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
    title: "Banking/Finance Consultation",
    subDescription: "Expert advice for banking needs.",
    description:
      "Discuss and resolve complex banking and financial issues with our experts.",
    icon: "fa-solid fa-building-columns",
  },
  {
    id: "learn",
    title: "Learn Financial Literacy",
    subDescription: "Empower your financial decisions.",
    description:
      "Expand your knowledge about money management, investments, and savings.",
    icon: "fa-solid fa-graduation-cap",
  },
  {
    id: "efcc",
    title: "Contact EFCC",
    subDescription: "Report fraudulent activities.",
    description:
      "Reach out to the Economic and Financial Crimes Commission for financial misconduct.",
    icon: "fa-solid fa-building-columns",
  },
  {
    id: "account",
    title: "Bank Account Opening",
    subDescription: "Start your financial journey.",
    description:
      "Get assistance in opening a new bank account tailored to your needs.",
    icon: "fa-solid fa-file-invoice-dollar",
  },
  {
    id: "complaints",
    title: "General Complaints",
    subDescription: "Address your banking concerns.",
    description:
      "Submit any banking-related concerns or issues you might be facing.",
    icon: "fa-solid fa-circle-exclamation",
  },
  {
    id: "sme",
    title: "SME Consultation",
    subDescription: "Boost your business banking.",
    description:
      "Get specialized banking advice and solutions for your small or medium-sized enterprise.",
    icon: "fa-solid fa-business-time",
  },
];

const selectedItem = ref(menuItems[0]);
</script>

<style scoped></style>
