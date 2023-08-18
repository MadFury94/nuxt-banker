<template>
  <div>
    <Splide
      :has-track="false"
      :options="options"
      aria-label="My Favorite Images"
      class=""
    >
      <SplideTrack>
        <SplideSlide v-for="(item, index) in testimonials" :key="index">
          <TestimonialCard
            :name="item.name"
            :position="item.position"
            :image="item.image"
            :description="item.description"
          />
        </SplideSlide>
      </SplideTrack>
      <button class="splide__toggle" type="button">
        <span class="splide__toggle__play"
          ><i class="fa-sharp fa-solid fa-play"></i
        ></span>
        <span class="splide__toggle__pause"
          ><i class="fa-sharp fa-solid fa-pause"></i
        ></span>
      </button>
      <div class="splide__progress">
        <div class="splide__progress__bar"></div>
      </div>
    </Splide>
  </div>
</template>

<script lang="ts" setup>
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

import "@splidejs/vue-splide/css";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";
import TestimonialCard from "./TestimonialCard.vue";

const testimonials = [
  {
    name: "Chijioke Okafor",
    position: "Entrepreneur",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/handsome-elegant-man-car-salon_numphc.jpg",
    description:
      "I was distraught when I mistakenly transferred a significant amount to the wrong account. Thanks to Online Banker, I was able to recover the funds within days.",
    star: "5",
  },
  {
    name: "Aisha Bello",
    position: "Retailer",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/medium-shot-senior-black-woman-outdoors_xvk2yu.jpg",
    description:
      "Online Banker came to my rescue when my business funds got stuck during a transfer. They liaised with the bank and ensured I got my money back.",
    star: "5",
  },
  {
    name: "Emeka Nwosu",
    position: "Real Estate Developer",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/medium-shot-smiley-man-sitting-car_uajuom.jpg",
    description:
      "I was on the brink of losing a huge sum to a fraudulent transaction. Online Banker's swift intervention helped block the transaction and safeguard my money.",
    star: "5",
  },
  {
    name: "Funke Adebayo",
    position: "Online Merchant",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/portrait-young-woman-with-afro-dreadlocks-posing-with-car_wosirx.jpg",
    description:
      "A glitch in a payment gateway could have cost me thousands. Thankfully, Online Banker's team worked tirelessly with the bank to rectify the issue.",
    star: "5",
  },
  {
    name: "Tunde Lawal",
    position: "Freelancer",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692346124/afroamerican-man-posing-car_sfsaqg.jpg",
    description:
      "When a client's payment was withheld by the bank without reason, Online Banker stepped in. Their mediation made sure I got my payment in record time.",
    star: "5",
  },
  {
    name: "Chioma Adeleke",
    position: "Event Organizer",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692348397/young-african-american-woman-posed-against-fountain-with-telephone-hand_ka0mmi.jpg",
    description:
      "I nearly fell for a phishing scam and would've lost all my savings. Online Banker's prompt advice helped me take the right precautions in time.",
    star: "5",
  },
];
const options = {
  rewind: true,
  gap: "3rem",
  type: "loop",
  pagination: true,
  arrows: true,
  perPage: 1,
  breakpoints: {
    1200: { perPage: 1, gap: "1rem", arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>

<style scoped>
.splide__progress__bar {
  height: 3px;
  @apply bg-primary-200;
}
</style>
