<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-primary-600">
          Safeguard and Assist
        </h2>
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          Online Banker - Your Shield Against Online Financial Frauds
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Helping individuals recover and secure their assets. Every report,
          every intervention, is our commitment to you.
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl
          class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
        >
          <div
            v-for="feature in features"
            :key="feature.name"
            class="relative pl-16"
          >
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div
                class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600"
              >
                <i :class="feature.icon" class="text-white"></i>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: "Fraud Reporting",
    description:
      "Easily report any fraudulent activities. Our dedicated team will swiftly act on your reports.",
    icon: "fa-thin fa-file-chart-column",
  },
  {
    name: "Victim Assistance",
    description:
      "Have you been scammed? We're here to guide and help you recover and secure your assets.",
    icon: "fa-sharp fa-regular fa-handshake-angle",
  },
  {
    name: "Security Awareness",
    description:
      "Stay informed with the latest trends in online scams and preventive measures through our resources.",
    icon: "fa-duotone fa-lock",
  },
  {
    name: "24/7 Support",
    description:
      "Reach out to our expert team any time. We are always here to support and assist you.",
    icon: "fa-brands fa-rocketchat",
  },
];
</script>
