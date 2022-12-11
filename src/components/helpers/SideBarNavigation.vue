<template>
 
    <!-- Left sidebar Account profile {{joo}} -->
    
   <div class="z-40 left-5 -top-14 absolute flex items-center md:hidden">
      <!-- Open menu button-->
      <button type="button"  @click="showNavbar = !showNavbar"
        class="inline-flex items-center justify-center rounded-md p-2 border border-grey-300 text-grey-800 hover:border-grey-800 hover:bg-grey-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open side menu</span>
          <Bars3Icon v-if="!showNavbar" class="block h-6 w-6" aria-hidden="true" />
         <XMarkIcon v-else class="block h-6 w-6 " aria-hidden="true" /> 
      </button>
    </div> 
   
    <!-- Mobile Sidebar -->
      <Transition  name="custom-classes" 
  enter-active-class="transition ease-in-out duration-300 transform" enter-from-class="-translate-x-full" enter-to-class="translate-x-0"
  leave-active-class="transition ease-in-out duration-300 transform"  leave-from-class="translate-x-0" leave-to-class="-translate-x-full"> 
      <aside v-if="showNavbar" class="bg-white w-68 absolute z-20 left-0 inset-y-0 shadow-md       ">
        <nav class="flex-1 space-y-1 pr-2 py-4" aria-label="Sidebar">
          <div class="space-y-2 relative">
            <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="
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
    <div class="flex-col w-68 border-r bordr-grey-500 hidden md:flex  ">
      <nav class="flex-1 space-y-1 pr-2 py-4" aria-label="Sidebar">
        <div class="space-y-2 relative">
          <a v-for="item in sidebarNavigation" :key="item.name" :href="item.href" :class="
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
    </div>

    <!-- <div class="w-68 bg-red"></div> -->
  
</template>

<script setup>
import { reactive, ref } from "vue";

import {
  CheckIcon,
  HomeIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HeartIcon,
  PhotoIcon,
} from "@heroicons/vue/20/solid";

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const sidebarNavigation = [
  { name: "Home", href: "/home", icon: HomeIcon, current: true },
  { name: "Customers", href: "/customers", icon: HeartIcon, current: false },
  { name: "PMU Forms", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Media", href: "#", icon: PhotoIcon, current: false },
  { name: "Settings", href: "/settings", icon: Cog6ToothIcon, current: false },
];
const showNavbar = ref(false);
</script>

<!-- <style lang="scss" scoped>
.open-menu-btn {
  top: 18px;
  position: fixed;
  left: 18px;
  z-index: 111;
}
// Transition animation css
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
} 
</style>-->
