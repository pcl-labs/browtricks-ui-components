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
                    <span class="sm:inline-flex gap-1 hidden "><span
                        class="text-sm text-grey-800 font-semibold">{{ user.username }}</span>
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
                      <p class="text-sm" role="none"><span class="block md:hidden text-sm text-grey-800 font-semibold">
                          {{ user.username }}</span><span class="hidden md:block">Email</span></p>
                      <p class="truncate text-sm font-medium text-grey-800" role="none">{{ user.email }}</p>
                    </div>

                    <div class="py-1" role="none">
                      <MenuItem v-for="item in user.links" :key="item.name" v-slot="{ active }">
                      <a :href="item.href"
                        :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 text-left']">{{
                            item.name
                        }}</a>
                      </MenuItem>
                    </div>

                    <div class="py-1" role="none">

                      <button type="button"
                        class="block px-4 py-2 hover:bg-peach text-sm text-grey-800 transition-all ease-in-out duration-300 w-full text-left font-bold"
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
        <div class="mb-7 pb-7 border-b border-solid border-gray-300">
          <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3">
            Chris Luke
          </h2>
          <div class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300">
            <div class="p-7">
              <div class="flex flex-col text-left">
                <h6>Add Media</h6>
                <div
                  class="flex items-center justify-center gap-5 border border-dashed border-orange-200 mt-3 p-5 py-10 rounded-xl">
                  <div class="flex flex-col gap-2">
                    <div class="flex justify-center items-center"><file-select v-model="file"></file-select></div>
                    <p v-if="file">{{ file.name }}</p>
                    <p class="text-xs text-grey-800/80">Accepts .jpg., png., mp4., mov.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-7">
          <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3">
            Your media
          </h2>
          <div class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300">
<!-- Table we are still working on -->
<div class="py-10 px-3 flex justify-center">
<p>Table we are still working on</p>
</div>




            <div class="hidden sm:items-center p-4">
              <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">Users</h1>
                <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name,
                  title, email and role.</p>
              </div>
              <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button type="button"
                  class="flex w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Add
                  user</button>
              </div>
            </div>



            <div class="hidden flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
                    <table class="min-w-full divide-y divide-gray-300">
                      <thead class="bg-gray-50">
                        <tr>
                          <th scope="col"
                            class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                          <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                          <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-gray-200 bg-white">
                        <tr v-for="person in users" :key="person.email">
                          <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div class="flex items-center">
                              <div class="h-10 w-10 flex-shrink-0">
                                <img class="h-10 w-10 rounded" :src="person.image" alt="" />
                              </div>
                              <div class="ml-4">
                                <div class="font-medium text-gray-900">{{ person.name }}</div>
                                <div class="text-gray-500">{{ person.type }}</div>
                              </div>
                            </div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div class="text-gray-900">{{ person.title }}</div>
                            <div class="text-gray-500">{{ person.department }}</div>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span
                              class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">Active</span>
                          </td>
                          <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ person.role }}</td>
                          <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, {{
                                person.name
                            }}</span></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import FileSelect from './FileSelect.vue'

export default {
  components: {
    FileSelect
  },

  data() {
    return {
      file: null
    }
  }
}
</script>


<script setup>

import { reactive, ref  } from "vue";

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

import logo from '@/assets/logo.png';

const user = {
  "username": "Chris Luke",
  "email": "Sincere@april.biz",
  "profile": "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80",
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


const users = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    department: 'Optimization',
    type: 'JPG',
    role: 'Member',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
</script>
