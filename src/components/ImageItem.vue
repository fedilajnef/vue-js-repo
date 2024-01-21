<template>
  <div v-if="loading" class="w-[300px] h-[300px] bg-slate-500 animate-pulse mx-5 my-10"></div>
  <img v-else :src="source" alt="Image" width="300" height="300" class="mx-5 my-10" >
</template>
  
<script lang="ts">
import { ref } from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      source: ref<string>(''),
      loading: ref<boolean>(true),
    }
  },
  methods: {
    getImage(url: string) {
      axios.get(url, {
        headers: {
          'Content-Type': 'image/jpeg',
        }
      })
        .then((response) => {
          this.source = response.request.responseURL;
          this.loading = false;
        })
    },
  },
  mounted() {
    this.getImage('https://picsum.photos/300/');
  },
  created() {
    this.$emitter.on('reload', () => {
      this.loading = true;
      this.getImage('https://picsum.photos/300/');
    })
    this.$emitter.on('addGray', () => {
      this.loading = true;
      // send the current source to the server to get the new url of the image
      axios.post('https://worker.fedylajnef.workers.dev/addGray', {
        source: this.source,
      }).then((response) => {
        this.getImage(response.data.source)
      }).catch((error) => {
        console.log(error);
      })
    })
    this.$emitter.on('removeGray', () => {
      this.loading = true;
      // send the current source to the server to get the new url of the image
      axios.post('https://worker.fedylajnef.workers.dev/removeGray', {
        source: this.source,
      }).then((response) => {
        this.getImage(response.data.source)
      })
    })
    this.$emitter.on('addBlur', () => {
      this.loading = true;
      // send the current source to the server to get the new url of the image
      axios.post('https://worker.fedylajnef.workers.dev/addBlur', {
        source: this.source,
      }).then((response) => {
        this.getImage(response.data.source)
      })
    })
    this.$emitter.on('removeBlur', () => {
      this.loading = true;
      // send the current source to the server to get the new url of the image
      axios.post('https://worker.fedylajnef.workers.dev/removeBlur', {
        source: this.source,
      }).then((response) => {
        this.getImage(response.data.source)
      })
    })
  }
}
</script>