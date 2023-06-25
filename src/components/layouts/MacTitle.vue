<script setup lang="ts">
</script>

<template>
    <div class="flex flex-row justify-between items-center mb-4">
        <div class="flex flex-row">
            <button class="bg-red-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring"
                aria-label="Close">
            </button>
            <button
                class="bg-yellow-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring"
                aria-label="Restore Down">
            </button>
            <button
                class="bg-green-500 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4 focus:outline-none focus:ring"
                aria-label="Minimize">
            </button>
        </div>
        <div class="p-1 rounded-full text-gray-500">
            <button
                class="flex flex-col justify-center items-center p-2 rounded-full focus:ring-2 hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none"
                aria-label="Add">
                <svg class="fill-current h-4 w-4" viewBox="0 0 25 25">
                <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
            </svg>
        </button>
    </div>
</div>
</template>