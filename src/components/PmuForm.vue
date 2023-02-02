<template>
  <div class="relative flex flex-col w-full"> 
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12 flex flex-col">
      <div class="space-y-6 sm:space-y-6 pt-3 md:pt-0 flex flex-col flex-1">
        <div class="flex items-center ">
          <template v-if="!isMoreForm && !isCreateForm">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">PMU Forms</h2>
          </template>
          <template v-if="isMoreForm">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Form templates</h2>
            <Button type="submit" :btn-primary="true" class="w-auto sm:px-6 ml-2  sm:block" @click="isMoreForm = false; isCreateForm = true;">Add Form</Button>
          </template>
          <div class="relative mt-3 xs:mt-0">
          <template v-if="isCreateForm">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto pr-24 xs:pr-0">Create Your Own Form</h2>
            <!-- <Button type="submit" :btn-primary="true" class="w-auto sm:px-6 ml-2 hidden sm:block" @click="isMoreForm = false">Add Form</Button> -->
          </template>
        </div>
        </div>

        <div v-if="!isMoreForm && !isCreateForm" class="overflow-hidden md:rounded-lg border border-grey-300 shadow-3 bg-white flex-1 flex justify-center items-center">
          <div class="setup-guide-area p-10 px-4 ">
            <div class="flex flex-col justify-center text-center space-y-10 max-w-md sm:px-7 mx-auto">
              <div class="relative flex flex-col">
                <img src="../assets/pmuform-sample.svg" alt="setup-thumb" class="mx-auto xl:block" />
              </div>
              <div class="flex flex-col space-y-10">
                <div class="space-y-4">
                  <h2 class="text-3xl sm:text-4xl font-bold text-grey-800 leading-none">Setup onboarding PMU forms</h2>
                  <p class="text-xl text-grey-900 sm:px-5"> Customers can sign your PMU forms before arriving for treatment. Select from our prebuilt PMU form templates, or create your own. </p>
                </div>
                <div class="flex flex-wrap gap-3 w-full justify-center">
                  <Button type="submit" :btn-outline="true" :btn-primary="false" @click="isMoreForm = true" class="w-auto sm:px-6">Use template</Button>
                  <Button type="submit" :btn-primary="true" @click="isCreateForm = true" class="w-auto sm:px-6 ">Create my own</Button>
                </div>
              </div>
             </div>
          </div>
        </div>
        <!-- Add PMU Forms contents -->
        <div v-if="isMoreForm" class="overflow-hidden  bg-transparent">
          <template v-if="isMoreForm">
            <PmuFormList :form-templates="formTemplates" />
          </template>
          <!-- <template v-if="isCreateForm">
            <PmuFormCreate />
          </template> -->
        </div>
        <div v-if="isCreateForm" class="relative md:rounded-lg bg-transparent">
          <PmuFormCreate />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import Button from '@/components/Button.vue';
  import PmuFormList from '@/components/PmuFormList.vue';
  import PmuFormCreate from '@/components/PmuFormCreate.vue';

  const isMoreForm = ref(false);
  const isCreateForm = ref(false);

  const formTemplates = [
    {
      title: 'Pre and Post Care Agreement 1',
      date: 'Nov 10, 2020 - 4:39 AM',
      templateUrl:
        '/src/assets/Pre_and_Post_Care_Agreement.png',
    },
    {
      title: 'Pre and Post Care Agreement 2',
      date: 'Nov 10, 2020 - 4:39 AM',
      templateUrl:
        '/src/assets/Pre_and_Post_Care_Agreement.png',
    },
    {
      title: 'Pre and Post Care Agreement 3',
      date: 'Nov 10, 2020 - 4:39 AM',
      templateUrl:
        '/src/assets/Pre_and_Post_Care_Agreement.png',
    },
  ]
</script>
