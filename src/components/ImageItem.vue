<template>
    <img :src="src" alt="Image"  width="300" class="mx-5 my-10" >
  </template>
  
  <script setup>
  const props = defineProps(['src']);
  </script>