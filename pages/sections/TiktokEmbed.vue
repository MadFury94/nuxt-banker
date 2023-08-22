<template>
  <div>
    <no-ssr>
      <blockquote
        class="tiktok-embed"
        :cite="videoUrl"
        :data-video-id="videoId"
        :style="embedStyle"
      >
        <!-- ... The rest of the TikTok embed code ... -->
      </blockquote>
    </no-ssr>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoUrl = ref("");
const videoId = ref("");
const embedStyle = ref({});

// Props passed to the component
const props = defineProps({
  url: String,
  id: String,
  style: Object,
});

// Initialize properties based on props
videoUrl.value = props.url;
videoId.value = props.id;
embedStyle.value = props.style;

// Load the TikTok script when the component is mounted
onMounted(() => {
  // Check if the script is already added, if not, then append
  if (
    !document.querySelector('script[src="https://www.tiktok.com/embed.js"]')
  ) {
    const tikTokScript = document.createElement("script");
    tikTokScript.src = "https://www.tiktok.com/embed.js";
    tikTokScript.async = true;
    document.body.appendChild(tikTokScript);
  }
});
</script>

<style scoped></style>
