<template>
  <div>
    <AboutHero />
    <NumberCounter />
    <!-- <AboutFeatures /> -->
    <CtaSlider />
    <TestimonialSlider />
    <OurTeam />
    <ContactSection />
  </div>
</template>

<script setup>
import AboutFeatures from "./sections/AboutFeatures.vue";
import AboutHero from "./sections/AboutHero.vue";
import NumberCounter from "./sections/NumberCounter.vue";
import TestimonialSlider from "./sections/TestimonialSlider.vue";
import OurTeam from "./sections/OurTeam.vue";
import ContactSection from "./sections/ContactSection.vue";
import CtaSlider from "./sections/CtaSlider.vue";

definePageMeta({
  name: "aboutPage",
  title: "About Us",
});
</script>

<style lang="scss" scoped></style>
