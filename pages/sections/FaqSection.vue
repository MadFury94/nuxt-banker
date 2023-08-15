<template>
  <div>
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div class="mx-auto max-w-4xl text-center">
            <PillInfo title="LET'S HELP" class="flex justify-center" />
            <p
              class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Frequently asked questions
            </p>
          </div>
          <p
            class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600"
          >
            If your question isn’t listed below, please contact our Customer
            Service on 1-800-123-4567.
          </p>

          <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
            <Disclosure
              as="div"
              v-for="faq in faqs"
              :key="faq.question"
              class="pt-6"
              v-slot="{ open }"
            >
              <dt>
                <DisclosureButton
                  class="flex w-full items-start justify-between text-left text-gray-900"
                >
                  <span class="text-base font-semibold leading-7">{{
                    faq.question
                  }}</span>
                  <span class="ml-6 flex h-7 items-center">
                    <PlusSmallIcon
                      v-if="!open"
                      class="h-6 w-6"
                      aria-hidden="true"
                    />
                    <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base leading-7 text-gray-600">
                  {{ faq.answer }}
                </p>
              </DisclosurePanel>
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What services does Online Banker offer?",
    answer:
      "Online Banker provides a platform for reporting online fraud and suspicious banking activities. We also offer Banking/Finance Consultation, EFCC collaboration, Financial Literacy programs, and support for SMEs.",
  },
  {
    question: "How do I report a suspicious activity?",
    answer:
      "You can easily file a report through our website or mobile app. Just provide the relevant details, and our team will take it from there.",
  },
  {
    question: "Is my data secure when I report an issue?",
    answer:
      "Absolutely! Online Banker is committed to the privacy and security of its users. All reports and personal data are encrypted and handled with utmost confidentiality.",
  },
  {
    question: "How long does it take to resolve a report?",
    answer:
      "The resolution time can vary depending on the complexity of the issue. However, we always aim to address reports in the shortest time possible while ensuring a thorough investigation.",
  },
  {
    question: "Can I track the status of my report?",
    answer:
      "Yes, once you file a report with Online Banker, you can track its status through our transparent tracking system available on our website and app.",
  },
  {
    question: "Do you collaborate with banks and law enforcement agencies?",
    answer:
      "Yes, we do! Online Banker works closely with banks, the EFCC, and other relevant agencies to ensure that fraudulent activities are thoroughly investigated and addressed.",
  },
  {
    question: "What should I do if I suspect my bank details are compromised?",
    answer:
      "Immediately report it on our platform and also contact your bank to alert them. It's crucial to act fast to prevent any unauthorized transactions.",
  },
  // More questions...
];
</script>

<style scoped></style>
