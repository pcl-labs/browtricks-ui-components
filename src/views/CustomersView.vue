<template>
 
    <div class="relative flex flex-col min-h-screen">
      <TopNavbar :is-login="isLogin" />
      <!-- column wrapper -->
      <div class="flex flex-1 relative items-stretch">
        <SidebarNavigation />
        <h1>Customer page</h1>
      </div>
    </div>
  
</template>

<script setup>
import { reactive, ref } from "vue";

import HomeCustomer from '@/components/HomeCustomer.vue';
import TopNavbar from "@/components/helpers/TopNavbar.vue";
import SidebarNavigation from "@/components/helpers/SidebarNavigation.vue";

const isLogin = reactive(true);

</script>