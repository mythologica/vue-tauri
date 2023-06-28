<script setup lang="ts">
import {ref} from "vue";
import MonthIcon from "@/components/calendar/MonthIcon.vue";

const menus = ref([
  {id:'1',title:"Schedule", icon: "bi-calendar", },
  {id:'2',title:"Idea", icon: "bi-lightbulb", },
  {id:'3',title:"Writer", icon: "bi-vector-pen", },
  {id:'4',title:"Project", icon: "bi-graph-up-arrow", },
  {id:'5',title:"Chat", icon: "bi-chat-left-dots", },
  {id:'6',title:"Code", icon: "bi-code-square", },
])

</script>

<template>
  <div class="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
    <div class="flex h-screen flex-col justify-between pb-6">
      <div>
        <ul class="space-y-2 tracking-wide">
          <li v-for="(menu,idx) in menus" :key="menu.id" class="min-w-max">
            <a href="#" aria-label="dashboard" :class="{  'relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white':(idx === 0 ), 'group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600':(idx !== 0) }">
              <i class="bi text-[1.7rem] -ml-1 h-6 w-8 fill-none antialiased flex justify-center items-center relative" :class="menu.icon"></i>
              <span class="-mr-1 font-medium">{{menu.title}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="w-max -mb-3">
        <a href="#" class="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
          <i class="bi bi-gear text-[1.7rem] -ml-1 h-6 w-8 fill-none antialiased flex justify-center items-center relative" ></i>
          <span class="group-hover:text-gray-700">Settings</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
