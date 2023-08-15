<template>
  <div>
    <h1>Personla Infor amtion</h1>

    {{ $route.params }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Personal Information",
  description: "Personal Information",
  image: "https://i.imgur.com/3uVxKCd.png",
  name:'personal-info',
  layout:"report-layout"
});
</script>

<style scoped></style>
