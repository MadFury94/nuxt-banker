Vue

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2
          class="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl"
        >
          Meet the Boss
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-800">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
      >
        <li
          v-for="person in people"
          :key="person.name"
          class="rounded-2xl bg-secondary-800 px-8 py-10 col-span-3"
        >
          <img
            class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
            :src="person.imageUrl"
            alt=""
          />
          <h3
            class="mt-6 text-base font-semibold leading-7 tracking-tight text-white"
          >
            {{ person.name }}
          </h3>
          <p class="text-sm leading-6 text-gray-400">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6">
            <li>
              <a
                :href="person.twitterUrl"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">Twitter</span>
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                :href="person.linkedinUrl"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">instagram</span>
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                :href="person.tiktok"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">TikTok</span>
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </li>
            <li>
              <a
                :href="person.linkedinUrl"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">LinkedIn</span>
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    name: "STANLEY ONUORAH",
    role: "CEO",
    imageUrl:
      "https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692377827/WhatsApp-Image-2023-01-27-at-09.57.04_wykuhf.jpg",
    twitterUrl: "",
    linkedinUrl: "#",
    tiktok: "#",
    instagram: "#",
  },
  // More people...
];
</script>
