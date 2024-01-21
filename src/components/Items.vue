<template>
  <div class="flex flex-wrap ">
    <ImageItem v-for="i in 6" :key="i"/>
  </div>
</template>
  
<script lang="ts">
import ImageItem from './ImageItem.vue';
export default {
  components: {
    ImageItem,
  }
}

</script>