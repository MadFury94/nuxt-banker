<template>
  <div class="p-10">
    <h1 class="font-semibold hidden text-4xl lg:block">
      {{ pageInfo?.title }}
    </h1>
    <h1 class="font-semibold my-10">Personal Information</h1>
    <div>
      {{ form }}
      <div class="flex justify-center">
        <div class="w-full">
          <div>
            <label>Name:</label>
            <input
              v-model="form.name"
              class="border-2 border-gray-500 rounded-sm py-1 text-2xl w-full"
              type="text"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              v-model="form.email"
              class="border-2 border-gray-500 rounded-sm py-1 text-2xl w-full"
              type="email"
            />
          </div>
          <div>
            <label>Number:</label>
            <input
              v-model="form.number"
              class="border-2 border-gray-500 rounded-sm py-1 text-2xl w-full"
              type="tel"
            />
          </div>

          <button
            @click="submitForm"
            class="bg-primary-500 my-4 rounded-md p-2"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reportMenu } from "../../store/menu";
import { PageDataType } from "../../types/model";
import { getRandomNumber } from "../../utils/functions";

const form = reactive({
  name: "",
  email: "",
  number: "",
});

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

const pageParams = computed(() => {
  return $route.params.id;
});

const pageData = reportMenu;

function submitForm() {
  axios
    .post("http://localhost:3000/reports", {
      id: getRandomNumber(1, 1000),
      name: form.name,
      email: form.email,
      number: form.number,
      reportType: pageParams.value,
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
}
</script>

<style scoped></style>
