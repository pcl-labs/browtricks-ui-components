<template>
  <div class="relative flex flex-col w-full flex-1">
    <div class="flex-1 sm:px-3 py-3 md:p-5 xl:px-14 xl:py-12">
      <div class="flex flex-wrap items-center justify-between mb-7 px-3 sm:px-0">
        <div class="sm:flex-auto">
          <h2 class="text-2xl font-bold text-grey-800 leading-none">
            Customers List
          </h2>
        </div>
        <div class="sm:mt-4 md:mt-0  sm:flex-none">
          <Button :btn-primary="true" 
            @click="this.$router.push({ name: 'add-customer' })"
            class="sm:w-38 sm:mr-auto"
            >Add customer</Button
          >
        </div>
      </div>
      <div class="overflow-hidden sm:rounded-lg bg-white border-y sm:border-x border-grey-300 shadow-3">
        <div class="p-4 pb-0 gap-2 md:gap-5 flex">
          <div class="flex flex-1 gap-2 md:gap-5">
            <div class="relative flex-1">
              <div
                class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                <MagnifyingGlassIcon
                  class="h-4 w-4 text-grey-900 mt-1"
                  aria-hidden="true"
                />
              </div>
              <Input
                id="search"
                type="search"
                label-text=""
                name="search"
                v-model="password"
                placeholder="Search for customer"
                inputClasses="pl-10 border-peach-500"
              />
            </div>

            <div class="sm:flex-none flex relative">          

              <Menu as="div" class="relative inline-block text-left">
              
                <MenuButton 
                class="inline-flex items-center rounded-md border border-grey-700  text-lg font-medium text-grey-800 shadow-sm hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500 mt-1"
                :class="[
                  active
                    ? 'bg-peach-500 border-peach-500'
                    : 'border-grey-700 bg-white',
                  'block pl-4 pr-5 py-2.5 text-lg text-left ease-in-out duration-300 w-full',
                ]"
              >
                <ShortIcon class="w-4 mr-2" /> <span>Sort</span>
              </MenuButton>
                

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-3 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <button
                          :class="[
                            active
                              ? 'bg-grey-100 text-grey-900'
                              : 'text-grey-700',
                            'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                          ]"
                        >
                          A-Z
                        </button>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <button
                          :class="[
                            active
                              ? 'bg-grey-100 text-grey-900'
                              : 'text-grey-700',
                            'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                          ]"
                        >
                          Z-A
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>
        </div>

        <div class="flex-col">
          <div class="overflow-x-auto">
            <div class="inline-block min-w-full align-middle ">
              <div class="overflow-hidden pt-2">
                <table
                  class="min-w-full border-0 border-collapse divide-y divide-grey-200"
                >
                  <thead class="hidden sm:table-header-group">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 w-1/3 pl-4 pr-3 text-left text-lg font-semibold text-grey-800 sm:pl-6"
                      >
                        Customer name
                      </th>
                      <th
                        scope="col"
                        class="px-3 w-2/3 py-3.5 text-lg font-semibold text-grey-800 text-center"
                      >
                       <span class="w-60 max-w-full inline-flex text-left">Phone</span> 
                      </th>
                      <th
                        scope="col"
                        class="px-3 w-1/3 py-3.5 text-left text-lg font-semibold text-grey-800"
                      >
                        Email
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-grey-200 bg-white">
                    <tr
                      v-for="cust in customers"
                      :key="cust.email"
                      class="odd:bg-white even:bg-grey-100 py-2 sm:py-0 block sm:table-row"
                    >
                      <td
                        class="whitespace-nowrap py-0.5 sm:py-4 px-3 text-lg sm:pl-6 font-normal text-grey-800 block sm:table-cell"
                      >
                        {{ cust.name }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-0.5 sm:py-4 text-lg font-normal text-grey-800 sm:text-center block sm:table-cell"
                      >
                       <span class="w-60 max-w-full inline-flex text-left">
                        {{ cust.phone }}
                        </span>
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-0.5 sm:py-4 text-lg font-normal text-grey-800 block sm:table-cell"
                      >
                        {{ cust.email }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <nav
            class="flex items-center justify-between border-t border-grey-200 bg-white px-4 py-3 sm:px-6"
            aria-label="Pagination"
          >
            <div class="flex flex-1 justify-start items-center gap-2">
              <a
                href="#"
                class="relative inline-flex items-center rounded-l border border-grey-500 bg-white px-2.5 py-2 text-lg font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300"
              >
                <AngleLeft class="w-1.5" />
              </a>
              <p class="text-lg text-grey-800 font-medium">
                <!-- space -->
                <span class="">10</span>
                <!-- space -->
                of
                <!-- space -->
                <span class="">174</span>
                results
              </p>
              <a
                href="#"
                class="relative inline-flex items-center rounded-r border border-grey-500 bg-white px-2.5 py-2 text-lg font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300"
                ><AngleRight class="w-1.5"
              /></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AngleRight from '@/assets/icons/AngleRight.vue';
import AngleLeft from '@/assets/icons/AngleLeft.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import ShortIcon from '@/assets/icons/ShortIcon.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
const customers = [
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com',
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com',
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com',
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com',
  },
  {
    name: 'Lindsay Walton',
    phone: '(468) 845-6839',
    email: 'carlasiphron@gmail.com',
  },
];
</script>
