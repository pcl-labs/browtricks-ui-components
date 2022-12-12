<template>
 
    <div class="relative flex flex-col min-h-screen">
      <TopNavbar :is-login="isLogin" />
      <!-- column wrapper -->
      <div class="flex flex-1 relative items-stretch">
        <SideBarNavigation />
        <h1>Customer page</h1>
      </div>
    </div>
  
</template>

<script setup>
import { ref } from "vue";

import HomeCustomer from '@/components/HomeCustomer.vue';
import TopNavbar from "@/components/helpers/TopNavbar.vue";
import SideBarNavigation from "@/components/helpers/SideBarNavigation.vue";

const isLogin = ref(true);

</script>