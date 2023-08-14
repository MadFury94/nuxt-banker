<template>
  <div>
    <div>
      <HeroSlider />

      <CtaSection />
      <NumberCounter />
      <HeroSecton />

      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSecton from "./sections/HeroSecton.vue";
import HeroSlider from "./sections/HeroSlider.vue";
import CtaSection from "./sections/CtaSection.vue";
import NumberCounter from "./sections/NumberCounter.vue";
import ContactSection from "./sections/ContactSection.vue";
</script>

<style lang="scss" scoped></style>
