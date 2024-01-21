<script lang="ts">
export default {
    methods: {
        reload() {
            this.$emitter.emit('reload');
            this.graySelected = false;
            this.blurSelected = false;
        },
        selectGray() {
            this.graySelected = !this.graySelected;
            if (this.graySelected) {
                this.$emitter.emit('addGray')
            } else {
                this.$emitter.emit('removeGray')
            }
        },
        selectBlur() {
            this.blurSelected = !this.blurSelected;
            if (this.blurSelected) {
                this.$emitter.emit('addBlur')
            } else {
                this.$emitter.emit('removeBlur')
            }
        }
    },
    data() {
        return {
            graySelected: false,
            blurSelected: false,
        }
    }
}
</script>

<template>
    <div class="flex gap-3 justify-center place-items-center mx-5">
        <button class="
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            mr-auto
        "
        @click="reload">Randomize</button>
        <button class="
            border border-black
            rounded-sm
            py-1 px-4
            
        " :class="{'bg-black text-white': graySelected}" @click="selectGray">GrayScale</button>
        <button class="
            border border-black
            rounded-sm
            py-1 px-4
        " :class="{'bg-black text-white': blurSelected}" @click="selectBlur">Blur</button>
    </div>
</template>