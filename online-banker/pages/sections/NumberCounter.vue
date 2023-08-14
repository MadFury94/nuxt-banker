<template>
  <div class="mx-auto bg-secondary-700">
    <section class="text-center">
      <div ref="records" class="image py-5">
        <div class="flex grid-cols-4 flex-col lg:grid">
          <div class="" v-for="(record, index) in recordsList" :key="index">
            <div>
              <div class="py-5 text-white">
                <p class="">
                  <span class="text-4xl"><i :class="record.icon"></i></span>
                </p>
                <h1 class="text-3xl font-semibold">
                  <span
                    ref="counter"
                    class="counter"
                    :data-target="record.target"
                  ></span>
                </h1>
                <h5
                  class="whitespace-normal text-lg font-semibold uppercase text-primary-200"
                >
                  {{ record.text }}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";

const records = ref(null);
const recordsList = [
  {
    icon: "fas fa-shield-alt",
    target: "1000",
    text: "reports processed",
  },
  {
    icon: "fas fa-user-check",
    target: "750000",
    text: "users protected",
  },
  {
    icon: "fas fa-trophy",
    target: "30",
    text: "awards for security excellence",
  },
  {
    icon: "fas fa-chart-line",
    target: "50",
    text: "banking partners",
  },
];
onMounted(() => {
  try {
    const record = records.value;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        const counter = document.querySelectorAll<HTMLElement>(".counter");

        counter.forEach((counter) => {
          counter.innerText = "0";

          const updateCounter = () => {
            const target = +counter.getAttribute("data-target")!;
            const c = +counter.innerText;

            const increment = target / 1000;

            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              setTimeout(updateCounter, 1);
            } else {
              counter.innerText = `${target}`;
            }
          };
          updateCounter();
        });
      } else {
        entries[0].target.classList.remove("animate");
      }
    });

    observer.observe(record!);
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>
.image {
  /* Additional style configurations remain unchanged */
}
.margin {
  /* Additional style configurations remain unchanged */
}
</style>
