<script setup lang="ts">
    import SideMenu from './SideMenu.vue';
</script>

<template>
    <section class="main-frame w-full min-h-screen flex flex-row"> <!--mx-auto -->
        <SideMenu />
        <div>
            <slot></slot> 
        </div>
    </section>
</template>

<style  scoped>
    .main-frame {
        
    }
</style>
