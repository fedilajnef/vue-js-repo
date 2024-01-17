<template>
    <div class="flex flex-wrap ">
      <ImageItem v-for="image in images" :key="image.id" :src="image.url" />
    </div>
  </template>
  
  <script setup>
  import ImageItem from './ImageItem.vue';
  import { ref } from 'vue';
  
  const images = ref([
    { id: 1, url: 'https://picsum.photos/id/45/4592/2576' },
    { id: 2, url: 'https://picsum.photos/id/46/3264/2448' },
    { id: 3, url: 'https://picsum.photos/id/47/4272/2848' },
    { id: 4, url: 'https://picsum.photos/id/49/1280/792' },

  ]);
  </script>