<template>
  <div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(item, index) in sliders" :key="index">
          <div class="mx-auto">
            <div class="relative h-[700px] isolate overflow-hidden px-2">
              <div class="absolute inset-0 bg-black opacity-50"></div>

              <img
                :src="item.image"
                alt=""
                class="h-[700px] object-cover absolute inset-0 -z-10 w-full"
              />

              <div class="mx-auto py-32 sm:py-48 lg:py-40 lg:px-80 px-10">
                <div class="hidden sm:mb-8 sm:flex"></div>
                <div class="lg:text-start">
                  <h1
                    class="text-base my-2 font-semibold leading-6 text-secondary-500 ring-1 ring-inset ring-indigo-600/10 relative z-10"
                  >
                    {{ item.heading }}
                  </h1>
                  <div class="text-3xl">
                    <h1
                      class="font-semibol w-80 lg:w-full tracking-tight text-lg text-white relative z-10 my-2"
                    >
                      {{ item.heading2 }}
                    </h1>
                    <h1
                      class="lg:text-8xl font-semibold tracking-tight sm:text-xl md:text-xl text-white relative z-10 my-2"
                    >
                      {{ item.heading3 }}
                    </h1>
                  </div>
                  <p
                    class="mt-6 text-lg leading-8 w-80 lg:w-full py-4 text-gray-300 relative z-10"
                  >
                    {{ item.description }}
                  </p>
                  <!-- <div class="flex gap-x-6 relative z-10">
                    <ButtonComponent :title="item.button" link="index" />
                  </div> -->
                </div>
              </div>
            </div>
          </div>
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
    </Splide>
  </div>
</template>
<script setup lang="ts">
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
import { ref } from "vue";

// or other themes
import "@splidejs/splide/css/skyblue";

import "@splidejs/vue-splide/css/core";

type Sliders = {
  heading: string;
  heading2: string;
  heading3: string;
  button: string;

  image: string;
  description: string;
};
const sliders = ref<Sliders[]>([
  {
    heading: "SECURE BANKING",
    heading2: "It's Time to Trust",
    heading3: "Your Digital Transactions",
    button: "Learn more",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692006182/cute-small-height-african-american-girl-with-dreadlocks-wear-coloured-yellow-dress-against-atm-with-credit-card-hand_by6uox.jpg",
    description:
      "Introducing robust fraud detection and reporting systems to keep your online banking secure.",
  },
  {
    heading: "REAL-TIME ALERTS",
    heading2: "Stay Updated",
    heading3: "With Transaction Activities",
    button: "Discover more",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692006319/african-american-research-agency-coworkers-meeting-about-startup-project-financial-status-business-people-desk-company-office-finance-department-talking-about-marketing-expenses_z9jia8.jpg",
    description:
      "Receive instant notifications for any suspicious activities or breaches on your account.",
  },
  {
    heading: "REPORTING MADE EASY",
    heading2: "User-friendly",
    heading3: "Fraud Reporting System",
    button: "Start Reporting",
    image:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692006299/multi-ethnic-entrepreneurs-stand-up-analyzing-financial-graph-brainstorming-ideas-partnership-project-working-company-presentation-startup-office-executives-managers-having-business-meeting_kzlxqq.jpg",
    description:
      "A streamlined support system to report banking issues and frauds with ease and effectiveness.",
  },
]);
const options = {
  rewind: true,
  gap: "0rem",
  type: "loop",
  pagination: false,
  arrows: true,
  perPage: 1,
  breakpoints: {
    1200: { perPage: 1, gap: 0, arrows: true },
    640: { perPage: 1, gap: 0, arrows: false },
  },

  autoplay: true,
};
</script>

<style>
.myImage {
  height: 900px;
  width: 100%;
}
</style>
