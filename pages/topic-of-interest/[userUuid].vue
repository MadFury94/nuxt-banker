<template>
  <div>
    <h1>Topic of interest</h1>

    {{ $route.params.userUuid }}

    {{ report.name }}
    {{ report.reportType }}
    <div class="relative">
      <div class="form max-w-md">
        <div>
          <label>Select a topic</label>
          <select v-model="form.topic">
            <option value="debt-management">Debt Management</option>
            <option value="task-planning">Task Planing</option>
          </select>
        </div>

        <div>
          <label>Tell Us More</label>
          <textarea
            v-model="form.description"
            type="textarea"
            :rows="8"
          ></textarea>
        </div>
      </div>
    </div>

    <button class="btn-primary" @click="saveInfo">Save</button>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";

import { serverUrl } from "../../app.config";

definePageMeta({
  name: "topic-of-interest",
  layout: "report-layout",
  image:
    "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692097687/pretty-dark-skinned-young-woman-with-afro-hairstyle-smiles-joyfully-advertises-something-cool-appealing_e9hzue.jpg",
});

const form = ref({
  topic: "task-planning",
  description: "i wan tot learn ho to plan my task",
});

const $route = useRoute();

const reportUuid = computed(() => {
  return $route.params.userUuid;
});

const report = ref({});

function saveInfo() {
  console.log(form.value);

  axios
    .patch(
      `${serverUrl}/public/reports/${reportUuid.value}
`,
      form.value
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

function getReport() {
  console.log("get user report");
  axios
    .get(
      `${serverUrl}/public/reports/${reportUuid.value}
`
    )
    .then(
      (response: any) => {
        // redirect to the next page

        console.log(response.data.data);
        report.value = response.data.data;
      },
      (error) => {
        console.log(error);
      }
    );
}

onMounted(() => {
  getReport();
});
</script>

<style scoped></style>
