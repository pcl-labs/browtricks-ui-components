<template>
 
    <div class="relative flex flex-col min-h-screen">
      <TopNavbar :is-login="isLogin" />
      <!-- column wrapper -->
      <div class="flex flex-1 relative ">
        <SidebarNavigation />
        <HomeCustomer />
      </div>
    </div>
  
</template>

<script setup>
import { reactive, ref } from "vue";

import HomeCustomer from '@/components/HomeCustomer.vue';
import TopNavbar from "@/components/layout/TopNavbar.vue";
import SidebarNavigation from "@/components/layout/SidebarNavigation.vue";

const isLogin = reactive(true);

</script>