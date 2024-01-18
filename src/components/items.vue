<template>
    <div class="flex flex-wrap ">
      <ImageItem v-for="image in images" :key="image.id" :src="image.url" />
    </div>
  </template>
  
  <script lang="ts">
  
  import ImageItem from './ImageItem.vue';
  import { ref } from 'vue';
  export default {
    data() {
        return {
             images:ref<{id:number ,url: string  }[]>([]),
        }
    },
  methods:{
    fillArray(){
      for (let index = 0; index < 15; index++) {
        let element : {id:number ,url: string  }={id:index,url:"https://picsum.photos/300/" };
        this.images.push(element);
        
      }

    }


  },
  mounted() {
      fillArray();
  },
  components: {
    ImageItem 
    }
 

  }

  </script>