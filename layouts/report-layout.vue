<template>
  <Header />
  <div class="bg-red-500">
    <div>
      <img
        src="https://res.cloudinary.com/dqwfjxn8g/image/upload/v1692097687/pretty-dark-skinned-young-woman-with-afro-hairstyle-smiles-joyfully-advertises-something-cool-appealing_e9hzue.jpg"
        alt=""
      />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "./Header.vue";
</script>

<style scoped></style>
