<template>
 
    <div class="relative flex flex-col min-h-screen">
      <TopNavbar :is-login="isLogin" />
      <!-- column wrapper -->
      <div class="flex flex-1 relative items-stretch">
        <SideBarNavigation />
       
        <Settings />
      </div>
    </div>
 
</template>

<script setup>
import { reactive, ref } from "vue";

import Settings from '@/components/Settings.vue';
import TopNavbar from "@/components/helpers/TopNavbar.vue";
import SideBarNavigation from "@/components/helpers/SideBarNavigation.vue";

const isLogin = reactive(true);

</script>