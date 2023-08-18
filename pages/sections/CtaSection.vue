<template>
  <div class="bg-white sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
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
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="flex flex-col"
          >
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
                  :href="feature.href"
                  class="text-sm font-semibold leading-6 text-primary-400"
                  >Learn more <span aria-hidden="true">→</span></a
                >
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    name: "Real-Time Alerts",
    description:
      "Stay ahead with instant notifications on any suspicious activities or breaches in your account. Security at your fingertips.",
    href: "#",
    icon: "fa-duotone fa-shield-check",
  },
  {
    name: "24/7 Support",
    description:
      "Our dedicated team is available round the clock. If you suspect any fraudulent activity, we're here to assist immediately.",
    href: "#",
    icon: "fa-solid fa-envelope",
  },
  {
    name: "Transparent Tracking",
    description:
      "Track your fraud reports with our transparent system. Stay updated with the status and outcomes of your reports.",
    href: "#",
    icon: "fa-solid fa-eye",
  },
];
</script>
