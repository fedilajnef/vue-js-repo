<script lang="ts">
export default {
methods: {
        // Méthode appelée lorsque la touche "Enter" est pressée.
        styleimage(style: any) {
            // Appelle la fonction reçue en tant que propriété du parent (addFunction).
         console.log(style)
         
    }
}





}

</script>

<template>
    
    <button class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        mx-10
        
    "  
     @click="styleimage( 'all' )">all</button>
    
    <button class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        mx-10 "
            @click="styleimage( 'Grayscale' )"
            >Grayscale</button> <button class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        mx-10"
        @click="styleimage( 'Blur' )"
    >Blur</button>
        
</template>