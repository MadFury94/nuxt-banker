<template>
  <div>
    <h1>Topic of interest</h1>

    {{ $route.params.userUuid }}

    {{ form }}

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

definePageMeta({
  name: "topic-of-interest",
});

const form = ref({
  topic: "",
  description: "",
});

function saveInfo() {
  console.log(form.value);

  axios
    .patch(
      `http://localhost:5620/v1/public/reports/a7da1356-9dad-42ea-b436-f7cf6d8b2b24
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
</script>

<style scoped></style>
