<template>
  <div class="p-10">
    <h1 class="font-semibold hidden text-4xl lg:block">
      {{ pageInfo?.title }}
    </h1>
    <h1 class="font-semibold my-10">Personal Information</h1>
    <div>
      <div v-for="(item, index) in pageInfo?.form?.personal">
        <div class="form">
          <label class="capitalize">{{ item.label }}:</label>

          <input v-model="form[item.label]" :type="item.type" />
        </div>
      </div>
      <div class="flex justify-center">
        <div class="w-full">
          <div class="flex items-center gap-x-10">
            <button
              @click="submitForm"
              class="bg-primary-500 my-4 rounded-md p-2"
            >
              Submit
            </button>

            <div class="relative flex items-center">
              <div class="flex h-6 items-center">
                <input
                  v-model="form.save"
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="comments" class="font-medium text-gray-900"
                  >Save my Information</label
                >
                <p id="comments-description" class="text-gray-500">
                  Your information only saved on this device for the next time u
                  want to make a report
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { serverUrl } from "../../app.config";
import { reportMenu } from "../../store/menu";
import { PageDataType } from "../../types/model";

const form = reactive<{
  name: string;
  email: string;
  number: string;
  save: boolean;
}>({
  name: "",
  email: "",
  number: "",
  save: false,
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
  return page ? (page[id] as any) : null;
});

const pageParams = computed(() => {
  return $route.params.id;
});

const pageData = reportMenu;

function saveToLocalStorage() {
  localStorage.setItem("form", JSON.stringify(form));
}

function getLocalStorage() {
  const data = localStorage.getItem("form");
  if (data) {
    const parsedData = JSON.parse(data);
    form.name = parsedData.name;
    form.email = parsedData.email;
    form.number = parsedData.number;
    form.save = parsedData.save;
  }
}

onMounted(() => {
  getLocalStorage();
});

function submitForm() {
  if (form.save) {
    saveToLocalStorage();
  }

  axios
    .post(
      `${serverUrl}/public/reports
`,
      {
        name: form.name,
        email: form.email,
        number: form.number,
        reportType: pageParams.value,
      }
    )
    .then(
      (response: any) => {
        const uuid = response.data.data.uuid;

        // redirect to the next page
        navigateTo({
          name: "topic-of-interest",
          params: { userUuid: uuid },
        });
      },
      (error) => {
        console.log(error);
      }
    );
}
</script>

<style scoped></style>
