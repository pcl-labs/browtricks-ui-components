<template>
  <!-- Left sidebar Account profile {{joo}} -->

  <div class="z-40 left-5 -top-14 absolute flex items-center md:hidden">
    <!-- Open menu button-->
    <button
      type="button"
      @click="showNavbar = !showNavbar"
      class="inline-flex items-center justify-center rounded-md p-2 border border-grey-300 text-grey-800 hover:border-grey-800 hover:bg-grey-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span class="sr-only">Open side menu</span>

      <component
        v-if="!showNavbar"
        :is="Bars3Icon"
        class="block h-6 w-6 text-grey-900"
        aria-hidden="true"
      />
      <component
        v-else
        :is="XMarkIcon"
        class="block h-6 w-6 text-grey-900"
        aria-hidden="true"
      />
    </button>
  </div>

  <!-- Mobile Sidebar -->
  <Transition
    name="custom-classes"
    enter-active-class="transition ease-in-out duration-300 transform"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition ease-in-out duration-300 transform"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <aside v-if="showNavbar" class="inset-0 fixed z-50 flex flex-col">
      <div
        class="fixed inset-0 bg-grey-800/90 pl-70"
        @click="showNavbar = !showNavbar"
      >
        <button
          type="button"
          class="inline-flex items-center justify-center py-6 px-4 border-0 outline-none text-white focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open side menu</span>
          <component
            v-if="showNavbar"
            :is="XMarkIcon"
            class="block h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>
      <nav
        class="flex-1 space-y-1 bg-white w-70 shadow-md relative z-10"
        aria-label="Sidebar"
      >
        <div class="bg-white py-5 shadow w-full">
          <router-link to="/home" class="flex-shrink-0 flex flex-1">
            <img class="h-8 w-auto pl-6" :src="logo" alt="BrowTricks" />
          </router-link>
        </div>

        <div class="space-y-2 relative pr-2 py-4">
          <router-link
          tag="div"
          :to="item.href"
          v-slot="{navigate, isActive, isExactActive }"
          exact
          v-for="item in SidebarNavigation"
          :key="item.name"
          @click="navigate"
          class="block"
        >
          <span
            class="group text-grey-800 flex items-center pr-2 pl-6 py-2.5 text-sm font-medium rounded-md transition-all ease-in-out duration-300 relative after:rounded-full after:w-1.5 after:bg-peach after:absolute after:inset-y-0 after:left-0 before:absolute before:bg-peach before:inset-0 before:rounded before:left-3 hover:before:opacity-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
            :class="[
              isActive && 'before:opacity-100 after:opacity-100 ',
              !isActive && 'before:opacity-0 after:opacity-0 ',
              isExactActive && 'before:opacity-100 after:opacity-100 ',
              !isExactActive && 'before:opacity-0 after:opacity-0 ',
            ]"
          >
            <span class="relative z-10 flex items-center">
              <component
                :is="item.icon"
                :class="item.classIcon"
                class="mr-3 text-grey-900"
                aria-hidden="true"
              />
              {{ item.name }}
            </span>
          </span>
        </router-link>
       
        </div>
      </nav>
    </aside>
  </Transition>

  <!-- Desktop Only -->
  <div class="flex-col w-70 border-r bordr-grey-500 hidden md:flex">
    <nav class="flex-1 space-y-2 pr-2 py-4 relative " aria-label="Sidebar">
      
        <router-link
          tag="div"
          :to="item.href"
          v-slot="{navigate, isActive, isExactActive }"
          exact
          v-for="item in SidebarNavigation"
          :key="item.name"
          @click="navigate"
          class="block"
        >
          <span
            class="group text-grey-800 flex items-center pr-2 pl-6 py-2.5 text-sm font-medium rounded-md transition-all ease-in-out duration-300 relative after:rounded-full after:w-1.5 after:bg-peach after:absolute after:inset-y-0 after:left-0 before:absolute before:bg-peach before:inset-0 before:rounded before:left-3 hover:before:opacity-100 hover:after:opacity-100 after:transition-all after:ease-in-out after:duration-300 before:transition-all before:ease-in-out before:duration-300"
            :class="[
              isActive && 'before:opacity-100 after:opacity-100 ',
              !isActive && 'before:opacity-0 after:opacity-0 ',
              isExactActive && 'before:opacity-100 after:opacity-100 ',
              !isExactActive && 'before:opacity-0 after:opacity-0 ',
            ]"
          >
            <span class="relative z-10 flex items-center">
              <component
                :is="item.icon"
                :class="item.classIcon"
                class="mr-3 text-grey-900"
                aria-hidden="true"
              />
              {{ item.name }}
            </span>
          </span>
        </router-link>
       
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/logo.png';
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import HeartIcon from '@/assets/icons/HeartIcon.vue';
import FormIcon from '@/assets/icons/FormIcon.vue';
import SettingsIcon from '@/assets/icons/SettingsIcon.vue';
import MediaIcon from '@/assets/icons/MediaIcon.vue';
import Bars3Icon from '@/assets/icons/Bars3Icon.vue';
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';

const SidebarNavigation = [
  {
    name: 'Home',
    href: '/home',
    icon: HomeIcon,
    classIcon: 'h-4 w-4',
    current: true,
  },
  {
    name: 'Customers',
    href: '/customers',
    icon: HeartIcon,
    classIcon: 'h-4 w-4',
  },
  {
    name: 'PMU Forms',
    href: '/pmu',
    icon: FormIcon,
    classIcon: 'h-5 w-5',
  },
  {
    name: 'Media',
    href: '/media',
    icon: MediaIcon,
    classIcon: 'h-5 w-5',
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: SettingsIcon,
    classIcon: 'h-4 w-4',
  },
];
const showNavbar = ref(false);
</script>
