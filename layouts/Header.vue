<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691917489/Skillset_hql5da.png"
            alt=""
          />
        </a>
      </div>
      <div class="flex gap-x-4 lg:hidden">
        <ButtonComponent title="Report" link="report" />
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <i class="fa-sharp fa-regular fa-bars-staggered"></i>
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Home
            <i class="fa-solid fa-chevron-down text-gray-900"></i>
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div class="p-4">
                <div
                  v-for="item in fraudOptions"
                  :key="item.name"
                  class="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div
                    class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                  >
                    <i
                      :class="item.icon"
                      class="text-gray-600 group-hover:text-primary-600"
                    ></i>
                  </div>
                  <div class="flex-auto">
                    <a
                      :href="item.href"
                      class="block font-semibold text-gray-900"
                    >
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </a>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div
                class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"
              >
                <a
                  v-for="item in callsToAction"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <i
                    :class="item.icon"
                    class="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  ></i>

                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Services</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Fraud Reporting</a
        >
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Security Center</a
        >
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Company
            <i class="fa-solid fa-chevron-down text-gray-900"></i>
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5"
            >
              <div
                v-for="item in company"
                :key="item.name"
                class="relative rounded-lg p-4 hover:bg-gray-50"
              >
                <a
                  :href="item.href"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {{ item.name }}
                  <span class="absolute inset-0" />
                </a>
                <p class="mt-1 text-sm leading-6 text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <RouterLink class="btn" :to="{ name: 'report' }">Report</RouterLink>
      </div>
    </nav>
    <ClientOnly>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10"></div>
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="p-6">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img
                  class="h-8 w-auto"
                  src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1691917489/Skillset_hql5da.png"
                  alt=""
                />
              </a>

              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span>Close menu</span>
                <i class="fa-solid fa-rectangle-xmark"></i>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in fraudOptions"
                    :key="item.name"
                    :href="item.href"
                    class="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <i
                        :class="item.icon"
                        class="h-6 w-6 text-gray-600 group-hover:text-primary-600"
                        aria-hidden="true"
                      >
                      </i>
                    </div>
                    {{ item.name }}
                  </a>
                </div>
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in company"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="sticky bottom-0 grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 text-center"
          >
            <a
              v-for="item in callsToAction"
              :key="item.name"
              :href="item.href"
              class="p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100"
              >{{ item.name }}</a
            >
          </div>
        </DialogPanel>
      </Dialog>
    </ClientOnly>
  </header>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { ref } from "vue";
import ButtonComponent from "../components/ButtonComponent.vue";

const fraudOptions = [
  {
    name: "Phishing Attacks",
    description: "Report phishing emails, messages or websites.",
    href: "#",
    icon: "fa-light fa-shield-check",
  },
  {
    name: "Unusual Transactions",
    description: "Report any suspicious transactions on your account.",
    href: "#",
    icon: "fa-duotone fa-file-chart-column",
  },
  {
    name: "Identity Theft",
    description: "Believe someone is using your identity? Report here.",
    href: "#",
    icon: "fa-solid fa-face-viewfinder",
  },
];
const callsToAction = [
  {
    name: "Submit a Report",
    href: "#",
    icon: "fa-duotone fa-file-chart-column",
  },
  { name: "Contact Support", href: "#", icon: "fa-solid fa-phone" },
];
const company = [
  {
    name: "About",
    href: { name: "about" },
    description: "About Online Banker",
  },
  {
    name: "Resources",
    href: "#",
    description:
      "Guides, articles, and tools to better understand banking security",
  },
  {
    name: "Community",
    href: "#",
    description: "Connect with others to share insights and tips on security",
  },
];

const mobileMenuOpen = ref(false);
</script>
