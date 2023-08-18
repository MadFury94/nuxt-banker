<template>
  <div>
    <div>
      <HeroSlider />

      <CtaSlider />
      <NumberCounter />
      <HeroSecton />
      <TestimonialSlider />
      <FaqSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroSecton from "./sections/HeroSecton.vue";
import HeroSlider from "./sections/HeroSlider.vue";
import NumberCounter from "./sections/NumberCounter.vue";
import ContactSection from "./sections/ContactSection.vue";
import CtaSlider from "./sections/CtaSlider.vue";
import FaqSection from "./sections/FaqSection.vue";
import TestimonialSlider from "./sections/TestimonialSlider.vue";
</script>

<style lang="scss" scoped></style>
