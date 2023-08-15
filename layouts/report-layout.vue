<template>
  <Header />
  <div class="grid lg:grid-cols-5 h-screen">
    <div class="col-span-2 bg-red-200">
     <div class="flex justify-center items-center h-screen">
      <div>
        <h1>{{ $route.meta.title }}</h1>
        <h1>{{ $route.meta.description }}</h1>
      </div>
     </div>
    </div>
    <div class=" col-span-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";


</script>


<style scoped></style>
