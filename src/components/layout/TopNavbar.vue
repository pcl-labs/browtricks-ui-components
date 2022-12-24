<template>
  <div class="top-navbar-wrapper">
    <!--Top Navbar -->
    <Disclosure
      as="nav"
      class="flex-shrink-0 bg-white py-1.5 shadow relative z-30"
      v-slot="{ open }"
    >
      <div class="mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-5 lg:pr-14">
        <div
          class="relative px-2 sm:px-0 flex h-16 items-center justify-end md:justify-between"
        >
          <!-- Logo section -->
          <div class="md:flex items-center relative gap-3 hidden">
            <router-link
              to="/home"
              class="flex-shrink-0 home-logo pl-8 md:pl-0"
            >
              <img
                class="h-8 w-auto pl-10 md:pl-0"
                :src="logo"
                alt="BrowTricks"
              />
            </router-link>
          </div>

          <!-- Links section -->
          <div v-if="isLogin" class="block">
            <div class="flex items-center justify-end">
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton as="button" class="flex items-center gap-3 group">
                    <span class="sm:inline-flex gap-1 hidden">
                      <span class="text-sm text-grey-800 font-semibold">
                        {{ user.username }}
                      </span>
                      <caretDown class="w-3 text-grey-800/50" />
                    </span>
                    <span
                      class="h-8 w-8 rounded-full flex justify-center items-center overflow-hidden ring-2 ring-transparent group-hover:ring-peach ring-offset-2 ring-offset-white"
                    >
                      <img
                        class="aspect-square"
                        :src="user.profile"
                        :alt="user.username"
                      />
                    </span>
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="px-4 py-3" role="none">
                      <p class="text-sm" role="none">
                        <router-link :to="user.profile_url"
                          ><span
                            class="block md:hidden text-sm text-grey-800 font-semibold"
                          >
                            {{ user.username }}</span
                          ></router-link
                        ><span class="hidden md:block">Email</span>
                      </p>
                      <p
                        class="truncate text-sm font-medium text-grey-800"
                        role="none"
                      >
                        {{ user.email }}
                      </p>
                    </div>

                    <div class="py-1" role="none">
                      <MenuItem
                        v-for="item in user.links"
                        :key="item.name"
                        v-slot="{ active }"
                      >
                        <a
                          :href="item.href"
                          :class="[
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700 text-left',
                          ]"
                          >{{ item.name }}</a
                        >
                      </MenuItem>
                    </div>

                    <div class="py-1" role="none">
                      <button
                        type="button"
                        class="block px-4 py-2 hover:bg-peach text-sm text-grey-900 transition-all ease-in-out duration-300 w-full text-left font-semibold"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
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
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="a"
              :href="item.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-indigo-200 hover:bg-indigo-600 hover:text-indigo-100"
            >
              {{ item.name }}</DisclosureButton
            >
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';

import logo from '@/assets/logo.png';
import caretDown from '@/assets/icons/caretDown.vue'; 
defineProps({
  isLogin: Boolean,
});

// User data
const user = {
  username: 'Chris Luke',
  email: 'Sincere@april.biz',
  profile:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80',
  profile_url: '/user-profile',
  links: [
    { name: 'Profle', href: '/user-profile', current: true },
    { name: 'Login', href: '/login', current: false },
    { name: 'Create Account', href: '/signup', current: false },
    { name: 'Forgot Password', href: '/forgot-password', current: false },
  ],
};
</script>
