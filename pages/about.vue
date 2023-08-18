<template>
  <div>
    <AboutHero />
    <NumberCounter />
  </div>
</template>

<script setup>
import AboutHero from "./sections/AboutHero.vue";
import NumberCounter from "./sections/NumberCounter.vue";

definePageMeta({
  name: "aboutPage",
  title: "About Us",
});
</script>

<style lang="scss" scoped></style>
