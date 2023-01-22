<template>
   <div class="relative flex flex-col w-full flex-1">
    <div v-if="showAddCustomer">
      <EditCustomer />
      <!-- <AddCustomer /> -->
      <!-- <CustomersList /> -->
    </div>
    <div v-else class="px-4 py-3 md:p-5 xl:px-14 xl:py-12 flex flex-col flex-1"> 
      <h1 class="text-5xl font-bold leading-none text-grey-800 mb-5">               
        Customers
        </h1>
      <div class="overflow-hidden rounded-lg shadow-3 bg-white flex-1 flex justify-center items-center border border-grey-300">
        <div class=" p-10 px-4 ">
          <div class="flex flex-col justify-center text-center space-y-10 max-w-xs mx-auto">
            <div class="relative flex flex-col"><img src="../assets/customer.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
            <div class="flex flex-col space-y-10">
              <div class="space-y-4">
              <h2 class="text-2xl font-bold text-grey-800 leading-none">Edit a customer</h2>
              <p class="text-xl text-grey-900">Get started by adding customer contact info in order to add media, manage PMU form      
                signing, and notes.</p>
              </div>
            <Button type="submit" :btn-primary="true"  @click="showAddCustomer = true" class="w-auto sm:px-6 mx-auto">Edit customer</Button>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import EditCustomer from '@/components/EditCustomer.vue';
// import AddCustomer from '@/components/AddCustomer.vue';
import Button from '@/components/Button.vue';
// import CustomersList from '@/components/CustomersList.vue';

const showAddCustomer = ref(false);
</script>
