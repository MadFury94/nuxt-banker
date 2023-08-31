<template>
  <div>
    <h1>Topic of interest</h1>

    {{ $route.params }}
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  name: "topic-of-interest",
});
</script>

<style scoped></style>
