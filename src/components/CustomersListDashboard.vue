<template>
   <div class="relative flex flex-col min-h-screen w-full">
    <div v-if="showAddCustomer">
      <!-- <EditCustomer /> -->
      <!-- <AddCustomer /> -->
      <CustomersList />
    </div>
    <div v-else class="bg-gray-100 px-4 py-3 md:p-5 xl:px-14 xl:py-12"> 
      <h1 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 mb-5">               
        Customers
        </h1>
      <div class="overflow-hidden rounded-lg shadow-3 bg-white">
        <div class="setup-guide-area py-20 px-4 lg:p-40">
          <div class="flex flex-col justify-center text-center space-y-10 max-w-xs mx-auto">
            <div class="relative flex flex-col"><img src="../assets/customer.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
            <div class="flex flex-col space-y-10">
              <div class="space-y-4">
              <h2 class="text-2xl font-bold text-grey-800 leading-none">View customer List</h2>
              <p class="text-md text-grey-900">Get started by adding customer contact info in order to add media, manage PMU form      
                signing, and notes.</p>
              </div>
            <Button type="submit" :btn-primary="true"  @click="showAddCustomer = true" class="w-auto sm:px-6 mx-auto">Customer List</Button>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// import EditCustomer from '@/components/EditCustomer.vue';
import AddCustomer from '@/components/AddCustomer.vue';
import Button from '@/components/layout/Button.vue';
import CustomersList from '@/components/CustomersList.vue';

const showAddCustomer = ref(false);
</script>
