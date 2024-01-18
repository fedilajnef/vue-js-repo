<template>
    <img :src="src" alt="Image"  width="300" height="300" class="mx-5 my-10" >
  </template>
  
  <script >
  const props = defineProps(['src']);
  </script>