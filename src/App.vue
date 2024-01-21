<script lang="ts">
import Buttons from './components/Buttons.vue'
import Items from './components/Items.vue'
export default {
  components: {
    Items,
    Buttons,
  }
}
</script>

<template>
  <div class="max-w-[70%] w-fit mx-auto border-x-4 border-slate-200">
  <Buttons/>
  <Items/>
</div>
</template>