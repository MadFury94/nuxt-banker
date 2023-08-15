<template>
  <div>
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-primary-400">
        Secure Banking
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
      >
        Everything you need to report & track online fraud
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-800">
        A platform designed with utmost security to ensure your banking
        experience remains uncompromised. Your security is our priority.
      </p>
    </div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="(feature, index) in features" :key="index">
          <div class="mx-auto max-w-7xl lg:px-14">
            <div class="mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl>
                <div class="flex flex-col">
                  <dt
                    class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-700"
                  >
                    <component
                      :is="feature.icon"
                      class="h-5 w-5 flex-none text-primary-400"
                      aria-hidden="true"
                    />
                    {{ feature.name }}
                  </dt>
                  <dd
                    class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-800"
                  >
                    <p class="flex-auto">{{ feature.description }}</p>
                    <p class="mt-6">
                      <a
                        :href="feature.link"
                        class="text-sm font-semibold leading-6 text-primary-400"
                        >Learn more <span aria-hidden="true">→</span></a
                      >
                    </p>
                  </dd>
                </div>
              </dl>
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
import {
  ShieldExclamationIcon,
  BanknotesIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/vue/20/solid";

// or other themes

import "@splidejs/vue-splide/css/core";

type Features = {
  name: string;
  description: string;
  link: string;
  icon: any;
};

const features: Features[] = [
  {
    name: "Banking/Finance Consultation",
    description:
      "Get expert advice on managing your finances and banking concerns. Navigate the banking world with confidence.",
    link: "#",
    icon: BanknotesIcon,
  },
  {
    name: "EFCC Collaboration",
    description:
      "In partnership with the EFCC, we ensure thorough investigations and prompt resolutions to fraud cases.",
    link: "#",
    icon: UserIcon,
  },
  {
    name: "Financial Literacy",
    description:
      "Equip yourself with knowledge. Learn the essentials of finance and banking to protect yourself from fraud.",
    link: "#",
    icon: BookOpenIcon,
  },
  {
    name: "Fraud Reporting",
    description:
      "Report any suspicious activity immediately. Your safety is our priority. We act fast.",
    link: "#",
    icon: ShieldExclamationIcon,
  },
  {
    name: "General Complaint",
    description:
      "Have concerns about your banking services? File a complaint and we'll help address it.",
    link: "#",
    icon: ShieldExclamationIcon,
  },
  {
    name: "Opening Bank Account",
    description:
      "Get guidance on opening a bank account that suits your needs. Start your financial journey with us.",
    link: "#",
    icon: ShieldExclamationIcon,
  },
  {
    name: "SME Support",
    description:
      "Specialized support for Small and Medium Enterprises. Get insights tailored for your business.",
    link: "#",
    icon: ShieldExclamationIcon,
  },
];
const options = {
  rewind: true,
  gap: "0rem",
  type: "loop",
  pagination: false,
  arrows: true,
  perPage: 3,
  breakpoints: {
    1200: { perPage: 3, gap: 1, arrows: true },
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
