<script setup lang="ts">
import { ref, reactive, defineAsyncComponent, onMounted } from "vue";
import MainFrame from "@/layouts/main/MainFrame.vue";


const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let scheduleInfo = reactive({
  baseDate: new Date(),
  datepickerValue: '',
  month: 0,
  year: 0,
  no_of_days: [] as number[],
  blankdays: [] as number[],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

  events: [
    // {
    //   event_date: '2023-03-01',
    //   event_title: "3.1절",
    //   event_theme: 'blue'
    // },

    // {
    //   event_date: '2023-03-01',
    //   event_title: "어린이날",
    //   event_theme: 'red'
    // },

    // {
    //   event_date: new Date(2023, 12, 25),
    //   event_title: "X-mas",
    //   event_theme: 'red'
    // }
  ] as { event_date: string, event_title: string, event_theme: string, }[],
  event_title: '',
  event_date: '',
  event_theme: 'blue',

  themes: [
    {
      value: "blue",
      label: "Blue Theme"
    },
    {
      value: "red",
      label: "Red Theme"
    },
    {
      value: "yellow",
      label: "Yellow Theme"
    },
    {
      value: "green",
      label: "Green Theme"
    },
    {
      value: "purple",
      label: "Purple Theme"
    }
  ],
  openEventModal: false,
});

const initDate = () => {
  let today = new Date();
  scheduleInfo.month = today.getMonth();
  scheduleInfo.year = today.getFullYear();
  scheduleInfo.baseDate = new Date(scheduleInfo.year, scheduleInfo.month, today.getDate());
  scheduleInfo.datepickerValue = new Date(scheduleInfo.year, scheduleInfo.month, today.getDate()).toDateString();
}

const onClickMoveMonth = (month: number) => {
  scheduleInfo.baseDate = new Date(scheduleInfo.baseDate.getFullYear(), scheduleInfo.baseDate.getMonth() + month, 1);
  scheduleInfo.datepickerValue = new Date(scheduleInfo.baseDate.getFullYear(), scheduleInfo.baseDate.getMonth() + month, 1).toDateString();
  scheduleInfo.year = scheduleInfo.baseDate.getFullYear();
  scheduleInfo.month = scheduleInfo.baseDate.getMonth();
  getNoOfDays()
}

const onClickShowEventModal = (date: number) => {
  scheduleInfo.openEventModal = true;
  scheduleInfo.event_date = new Date(scheduleInfo.year, scheduleInfo.month, date).toDateString();
};

const isToday = (date: number) => {
  const today = new Date();
  const d = new Date(scheduleInfo.year, scheduleInfo.month, date);
  return today.toDateString() === d.toDateString() ? true : false;
}

const addEvent = () => {
  if (scheduleInfo.event_title == '') {
    return;
  }

  scheduleInfo.events.push({
    event_date: scheduleInfo.event_date,
    event_title: scheduleInfo.event_title,
    event_theme: scheduleInfo.event_theme
  });

  console.log(scheduleInfo.events);

  // clear the form data
  scheduleInfo.event_title = '';
  scheduleInfo.event_date = '';
  scheduleInfo.event_theme = 'blue';

  //close the modal
  scheduleInfo.openEventModal = false;
}

const getNoOfDays = () => {
  let yyyy = scheduleInfo.baseDate.getFullYear();
  let mm = scheduleInfo.baseDate.getMonth();
  let daysInMonth = new Date(yyyy, mm + 1, 0).getDate();

  // find where to start calendar day of week
  let dayOfWeek = new Date(yyyy, mm).getDay();
  let blankdaysArray = [];
  for (var i = 1; i <= dayOfWeek; i++) {
    blankdaysArray.push(i);
  }

  let daysArray = [];
  for (var i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  scheduleInfo.blankdays = blankdaysArray;
  scheduleInfo.no_of_days = daysArray;
}

onMounted(() => {
  initDate()
})


</script>

<template>
  <MainFrame>
    <div class="antialiased sans-serif bg-gray-100 h-screen" style="width:calc(100% - 8rem)">
      <div> <!-- x-data="app()" x-init="[initDate(), getNoOfDays()]" x-cloak -->
        <div class="mx-auto px-4 py-2">
          <div class="font-bold text-gray-800 text-xl mb-0.5">
            Schedule Tasks
          </div>
          <div class="bg-white rounded-lg shadow overflow-hidden">
            <div class="flex items-center justify-between py-2 px-6">
              <div>
                <span class="text-lg font-bold text-gray-800">{{ MONTH_NAMES[scheduleInfo.month] }}</span>
                <span class="ml-1 text-lg text-gray-600 font-normal">{{ scheduleInfo.year }}</span>
              </div>
              <div class="border rounded-lg px-1" style="padding-top: 2px;">
                <button type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center"
                  :class="{ 'cursor-not-allowed opacity-25': scheduleInfo.baseDate.getMonth() == 0 }"
                  :disabled="scheduleInfo.baseDate.getMonth() == 0 ? true : false" @click="onClickMoveMonth(-1);">
                  <svg class="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div class="border-r inline-flex h-6"></div>
                <button type="button"
                  class="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1"
                  :class="{ 'cursor-not-allowed opacity-25': scheduleInfo.baseDate.getMonth() == 11 }"
                  :disabled="scheduleInfo.baseDate.getMonth() == 11 ? true : false" @click="onClickMoveMonth(+1);">
                  <svg class="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="-mx-1 -mb-1">
              <div class="flex flex-wrap" style="margin-bottom: -40px;">
                <template v-for="(day, index) in DAYS" :key="index">
                  <div style="width: 14.26%" class="px-2 py-2">
                    <div class="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{{ day }}</div>
                  </div>
                </template>
              </div>

              <div class="flex flex-wrap border-t border-l">
                <template x-for="blankday in blankdays">
                  <div style="width: 14.28%; height: 120px" class="text-center border-r border-b px-4 pt-2"></div>
                </template>
                <template v-for="(date, dateIndex) in scheduleInfo.no_of_days" :key="dateIndex">
                  <div style="width: 14.28%; height: 120px" class="px-4 pt-2 border-r border-b relative">
                    <div @click="(e) => onClickShowEventModal(date)"
                      class="inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100"
                      :class="{ 'bg-blue-500 text-white': isToday(date) == true, 'text-gray-700 hover:bg-blue-200': isToday(date) == false }">
                      {{ date }}
                    </div>
                    <div style="height: 80px;" class="overflow-y-auto mt-1">
                      <!-- <div 
										class="absolute top-0 right-0 mt-2 mr-2 inline-flex items-center justify-center rounded-full text-sm w-6 h-6 bg-gray-700 text-white leading-none"
										x-show="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"
										x-text="events.filter(e => e.event_date === new Date(year, month, date).toDateString()).length"></div> -->

                      <template
                        v-for="event in scheduleInfo.events.filter(e => new Date(e.event_date).toDateString() === new Date(scheduleInfo.year, scheduleInfo.month, date).toDateString())">
                        <div class="px-2 py-1 rounded-lg mt-1 overflow-hidden border" :class="{
                          'border-blue-200 text-blue-800 bg-blue-100': event.event_theme === 'blue',
                          'border-red-200 text-red-800 bg-red-100': event.event_theme === 'red',
                          'border-yellow-200 text-yellow-800 bg-yellow-100': event.event_theme === 'yellow',
                          'border-green-200 text-green-800 bg-green-100': event.event_theme === 'green',
                          'border-purple-200 text-purple-800 bg-purple-100': event.event_theme === 'purple'
                        }">
                          <p class="text-sm truncate leading-tight">{{ event.event_title }}</p>
                        </div>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainFrame>
</template>

<style scoped></style>
