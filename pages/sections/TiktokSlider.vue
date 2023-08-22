<template>
  <div>
    <Splide :has-track="false" :options="options" aria-label="My Slide">
      <SplideTrack>
        <SplideSlide v-for="video in videos" :key="video.id">
          <div class="mx-auto">
            <TiktokEmbed :url="video.url" :id="video.id" :style="embedStyle" />
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

import "@splidejs/vue-splide/css/core";
import TiktokEmbed from "./TiktokEmbed.vue";

type Videos = {
  url: string;
  id: string;
};
const videos = ref<Videos[]>([
  {
    url: "https://www.tiktok.com/@onlinebanker/video/7244821338148424965",
    id: "7244821338148424965",
  },
  {
    url: "https://www.tiktok.com/music/original-sound-7244821353530477318?refer=embed",
    id: "1234567890123456789",
  },
  {
    url: "https://www.tiktok.com/@anotherexample/video/9876543210987654321",
    id: "9876543210987654321",
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
const embedStyle = {
  maxWidth: "605px",
  minWidth: "325px",
};
</script>

<style>
.myImage {
  height: 900px;
  width: 100%;
}
</style>
