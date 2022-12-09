<template>
  <div class="relative flex flex-col min-h-screen">
    <!--Top Navbar -->
    <Disclosure as="nav" class="flex-shrink-0 bg-white py-1.5 shadow relative z-30" v-slot="{ open }">
      <div class="mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-5 lg:pr-14">
        <div class="relative px-2 sm:px-0 flex h-16 items-center justify-between">
          <!-- Logo section -->
          <div class="flex items-center relative gap-3">
            <div class="flex items-center md:hidden">
              <!-- Open menu button-->
              <button type="button"  @click="showNavbar = !showNavbar"
                class="inline-flex items-center justify-center rounded-md p-2 border border-grey-300 text-grey-800 hover:border-grey-800 hover:bg-grey-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open side menu</span>
                  <Bars3Icon v-if="!showNavbar" class="block h-6 w-6" aria-hidden="true" />
                 <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" /> 
              </button>
            </div>
            <router-link to="/home" class="flex-shrink-0">
              <img class="h-8 w-auto" :src="logo" alt="BrowTricks" />
            </router-link>
          </div>


          <!-- Links section -->
          <div class=" block ">
            <div class="flex items-center justify-end">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton as="button" class="flex items-center gap-3 group">
                    <span class="sm:inline-flex gap-1 hidden ">
                      <span class="text-sm text-grey-800 font-semibold">
                        <router-link :to="user.profile_url">{{user.username}}</router-link>
                      </span>
                      <ChevronDownIcon class="w-5" />
                    </span>
                    <span
                      class="h-8 w-8 rounded-full flex justify-center items-center overflow-hidden ring-2 ring-transparent group-hover:ring-peach ring-offset-2 ring-offset-white">
                      <img class="aspect-square" :src="user.profile" :alt="user.username" />
                    </span>
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-4 py-3" role="none">
                      <p class="text-sm" role="none"><span class="block md:hidden text-sm text-grey-800 font-semibold"> {{user.username}}</span><span class="hidden md:block">Email</span></p>
                      <p class="truncate text-sm font-medium text-grey-800" role="none">{{user.email}}</p>
                    </div>

                    <div class="py-1" role="none">
                      <MenuItem v-for="item in user.links" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-left']">{{ item.name }}</a>
                      </MenuItem>
                    </div>

                    <div class="py-1" role="none">

                      <button type="button" class="block px-4 py-2 hover:bg-peach text-sm text-grey-800 transition-all ease-in-out duration-300 w-full text-left font-bold"
                        role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>

                    </div>


                  </MenuItems>
                </transition>
              </Menu>




            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel class="lg:hidden">
        <div class="border-t border-indigo-800 pt-4 pb-3">
          <div class="space-y-1 px-2">
            <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100">
              {{ item.name }}</DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <!-- 3 column wrapper -->
    <div class="flex flex-1 relative ">
      <!-- Left sidebar Account profile -->

      <aside v-if="showNavbar" class="bg-white md:bg-grey-200 w-68 md:hidden absolute z-20 left-0 inset-y-0 shadow-md border-r bordr-grey-500
      md:static md:shadow-none
      ">
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

      <!-- Desktop Only -->
      <aside class="bg-white hidden md:bg-grey-200 w-68 md:block absolute z-20 left-0 inset-y-0 shadow-md border-r bordr-grey-500
      md:static md:shadow-none
      ">
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

      <!-- Projects List -->
      <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
        <div class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300">
          <div class="border-b border-grey-200 p-7">
            <div class="flex flex-col text-left">
              <h1 class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3">
                Setup guide
              </h1>
              <div class="flex items-center gap-5">
                <span class="whitespace-nowrap text-base font-normal text-grey-700">1 of 6 tasks complete</span>
                <div class="w-full bg-grey-300 rounded-full h-1.5 dark:bg-gray-700">  
                  <div class="bg-grey-700 h-1.5 rounded-full dark:bg-blue-500" style="width:20% /*width: index / ${setupCount} * 100 + '%'*/">  </div>
                   <!-- Step count % formulla `index / ${setupCount} * 100 + '%'` -->
                </div>
              </div>
            </div>
          </div>
          <div class="xl:flex p-7">
            <div class="flex-1">
              <ul role="list" class="pr-5 max-w-md overflow-hidden step-list">
                <!-- customers steps -->
                <li v-for="(step, index) in customerSteps" :key="index" :class="step.isExpanded ? 'open' : 'close'"
                  class="text-left relative pb-10">
                  <div class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-peach-2 v-line" aria-hidden="true"></div>

                  <a href="#" class="group relative flex items-start">
                    <span class="flex h-9 items-center">
                      <span
                        class="relative left-1 z-10 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-white"
                        :class="
                          step.isExpanded
                            ? 'bg-peach'
                            : 'bg-white border-2 border-dashed  border-peach '
                        ">
                        <CheckIcon v-if="step.isExpanded" class="h-4 w-4 text-grey-800" aria-hidden="true" />
                      </span>
                    </span>
                    <div class="ml-7 flex min-w-0 flex-col space-y-3 pt-2">
                      <h3 @click="step.isExpanded = !step.isExpanded" class="text-sm font-semibold">
                        {{ step.title }}
                      </h3>
                      <div :class="step.isExpanded ? 'block' : 'hidden'" class="space-y-5">
                        <p class="text-md text-grey-800">{{ step.answer }}</p>
                        <button type="submit"
                          class="mt-4 flex w-auto justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-sm font-semibold text-grey-800 shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 transition-all ease-in-out duration-300">
                          Add customers
                        </button>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="">
              <img src="../assets/setup-guide-thumb.svg" alt="setup-thumb" class="hidden xl:block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
 
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  CheckIcon,
  HomeIcon,
  Cog6ToothIcon,
  Bars3Icon,
  DocumentTextIcon,
  ChevronDownIcon,
  HeartIcon,
  PhotoIcon,
} from "@heroicons/vue/20/solid";
import {
  Bars3CenterLeftIcon,
  ClockIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  ScaleIcon,
  UserGroupIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

import logo  from '@/assets/logo.png';

const user = {
  "username": "Chris Luke",
  "email": "Sincere@april.biz",
  "profile": "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
  "profile_url": '/user-profile',
  "links": [
    { name: 'Login', href: '/login', current: true },
    { name: 'Create Account', href: '/signup', current: false },
    { name: 'Forgot Password', href: '/forgot-password', current: false },
  ]
}
// const navigation = [
//   { name: "Dashboard", href: "#", current: true },
//   { name: "Domains", href: "#", current: false },
// ];
const sidebarNavigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Customers", href: "#", icon: HeartIcon, current: false },
  { name: "PMU Forms", href: "#", icon: DocumentTextIcon, current: false },
  { name: "Media", href: "#", icon: PhotoIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
  // { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
];

const setupCount = reactive(6);
const showNavbar = ref(false);

// Setup Guide data
const customerSteps = reactive([
  {
    title: "Add customers",
    answer:
      "Streamline your contact book by saving before/after media and signed forms all within our single app.",
    isExpanded: true,
  },
  {
    title: "Create forms",
    answer:
      "Use our pre-built templates for quick onboarding, or create your own templates for use again and again! View signing status, and manage sms integrations.",
    isExpanded: false,
  },
  {
    title: "Connect social accounts",
    answer:
      "Import user generated content across social channels. Gain access to advanced analytics and performance reports by connecting your brand social accounts.",
    isExpanded: false,
  },
  {
    title: "Add before/after media",
    answer:
      "Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.",
    isExpanded: false,
  },
  {
    title: "Enable SMS sending",
    answer:
      "Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.",
    isExpanded: false,
  },
]);
</script>
 
