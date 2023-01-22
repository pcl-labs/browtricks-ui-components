<template>
  <div class="relative flex flex-col min-h-screen w-full divide-y space-y-10">
    <div class="sm:grid grid-cols-12 gap-5 space-y-4 sm:space-y-0">
      <div v-for="formTemp in formTemplates" :key="formTemp.title" @click="$router.push('/pmu-details')"
        class="overflow-hidden md:rounded-lg shadow-3 bg-white md:col-span-6 sl:col-span-4 divide-y cursor-pointer ease-in-out duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="relative py-6 px-4 flex justify-center items-center">
            <img class="h-auto max-h-60 object-cover"  :src="formTemp.templateUrl" alt="" />
        </div>
        <div class="space-y-2 px-4 sl:px-8 py-6">
          <h4 class="flex-1 text-base font-bold leading-none text-grey-800">{{ formTemp.title }}</h4>
          <p class="text-base font-normal text-grey-700 leading-snug">Created
            <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
          </p>
        </div>
      </div>
    </div>
    <div class="space-y-4 sm:space-y-6 pt-6">
      <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto px-3 md:px-0">Forms you have
        created</h2>
      <div class="sm:grid grid-cols-12 gap-5 space-y-4 sm:space-y-0">
        <div v-for="formTemp in formTemplates" :key="formTemp.title" @click="$router.push('/pmu-details')"
          class="overflow-hidden md:rounded-lg shadow-3 bg-white md:col-span-6 sl:col-span-4 divide-y cursor-pointer ease-in-out duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div class="relative py-6 px-4 flex justify-center items-center">
            <img class="h-auto max-h-60 object-cover"  :src="formTemp.templateUrl" alt="" />
          </div>
          <div class="space-y-2 px-4 sl:px-8 py-6">
            <h4 class="flex-1 text-base font-bold leading-none text-grey-800">{{ formTemp.title }}</h4>
            <p class="text-base font-normal text-grey-700 leading-snug">Created
              <time :datetime="formTemp.datetime" class="ml-2">{{ formTemp.date }}</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    formTemplates: {
      type: Array
    }
  })
</script>