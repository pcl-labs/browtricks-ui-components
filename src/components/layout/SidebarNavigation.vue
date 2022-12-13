<template>
 
    <!-- Left sidebar Account profile {{joo}} -->
    
   <div class="z-40 left-5 -top-14 absolute flex items-center md:hidden">
      <!-- Open menu button-->
      <button type="button"  @click="showNavbar = !showNavbar"
        class="inline-flex items-center justify-center rounded-md p-2 border border-grey-300 text-grey-800 hover:border-grey-800 hover:bg-grey-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open side menu</span>

          <component v-if="!showNavbar" :is="Bars3Icon" class="block h-6 w-6 text-grey-900" aria-hidden="true" />
          <component v-else :is="XMarkIcon" class="block h-6 w-6 text-grey-900" aria-hidden="true" />

      </button>
    </div> 
   
    <!-- Mobile Sidebar -->
      <Transition  name="custom-classes" 
  enter-active-class="transition ease-in-out duration-300 transform" enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
  leave-active-class="transition ease-in-out duration-300 transform"  leave-from-class="translate-x-0" leave-to-class="-translate-x-full"> 
      <aside v-if="showNavbar" class="bg-white w-70 absolute z-20 left-0 inset-y-0 shadow-md       ">
        <nav class="flex-1 space-y-1 pr-2 py-4" aria-label="Sidebar">
          <div class="space-y-2 relative">
            <a v-for="item in layout/SidebarNavigation" :key="item.name" :href="item.href" :class="
              item.current
                ? 'before:opacity-100 after:opacity-100'
                : 'before:opacity-0 after:opacity-0'
            "
              class="group text-grey-800 flex items-center pr-2 pl-6 py-2.5 text-sm font-medium rounded-md transition-all ease-in-out duration-300 relative after:rounded-full after:w-1.5 after:bg-peach after:absolute after:inset-y-0 after:left-0 before:absolute before:bg-peach before:inset-0 before:rounded before:left-3 hover:before:opacity-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
              :aria-current="item.current ? 'page' : undefined">
              <span class="relative z-10 flex items-center">
                <component :is="item.icon" class="mr-3 h-5 w-5 text-grey-900" aria-hidden="true" />
                {{ item.name }}
              </span>
            </a>
          </div>
        </nav>
      </aside>
    </Transition> 

    <!-- Desktop Only -->
    <div class="flex-col w-70 border-r bordr-grey-500 hidden md:flex  ">
      <nav class="flex-1 space-y-1 pr-2 py-4 bg-" aria-label="Sidebar">
        <div class="space-y-2 relative">
          <router-link :to="item.href" tag="a" active-class="current" exact v-for="item in SidebarNavigation" :key="item.name" :class="
            item.current
              ? 'before:opacity-100 after:opacity-100'
              : 'before:opacity-0 after:opacity-0'
          "
            class="group text-grey-800 flex items-center pr-2 pl-6 py-2.5 text-sm font-medium rounded-md transition-all ease-in-out duration-300 relative after:rounded-full after:w-1.5 after:bg-peach after:absolute after:inset-y-0 after:left-0 before:absolute before:bg-peach before:inset-0 before:rounded before:left-3 hover:before:opacity-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
            >
            <span class="relative z-10 flex items-center">
              <component :is="item.icon" class="mr-3 h-5 w-5 text-grey-900" aria-hidden="true" />
              {{ item.name }}
            </span>
          </router-link>
        </div>
      </nav>
    </div>

   
  
</template>

<script setup>
import { reactive, ref } from "vue";

import HomeIcon from '@/assets/icons/HomeIcon.vue';
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import FormIcon from '@/assets/icons/FormIcon.vue';
import SettingsIcon from '@/assets/icons/SettingsIcon.vue';
import MediaIcon from '@/assets/icons/MediaIcon.vue';
import Bars3Icon from '@/assets/icons/Bars3Icon.vue';
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';

const SidebarNavigation = [

  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Customers", href: "/customers", icon: HeartIcon},
  { name: "PMU Forms", href: "#", icon: FormIcon},
  { name: "Media", href: "#", icon: MediaIcon},
  { name: "Settings", href: "/settings", icon: SettingsIcon},

  
];
const showNavbar = ref(false);
</script>

 