<script setup lang="ts">
const props = defineProps({
  month: { type: Number, required: false },
})


const month = props.month ?? (new Date().getMonth()+1) ;
</script>

<template>
    <i class="bi bi-calendar text-[1.7rem] -ml-1 h-8 w-8 fill-none antialiased flex justify-center items-center relative">
        <span class="absolute top-[0.4rem] right-[0.6rem] text-[0.8rem] font-semibold">
            {{ month  }}
        </span>
    </i>
</template>