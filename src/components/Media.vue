<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <div class="space-y-6 pt-3 md:pt-0 md:pb-7 border-0 border-solid border-gray-300">
        <div class="flex items-center px-3 md:px-0">
        <h2 class="flex-1 text-5xl font-bold leading-none text-grey-800 mr-auto">Media</h2>
            <Button @click="isUploadMedia = true">Add Media</Button>
            <!-- <template v-if="isMoreMedia">
              <Button type="submit" :btn-primary="true" class="w-auto sm:px-6 ml-2 hidden sm:block" @click="isMoreMedia = false">Add Media</Button>
            </template> -->
        </div>
        <div v-if="!isMoreMedia" class="overflow-hidden md:rounded-lg shadow-3 bg-white">
          <div class="setup-guide-area py-20 px-4 lg:p-40">
            <div class="flex flex-col justify-center text-center space-y-10 max-w-md sm:px-7 mx-auto">
              <div class="relative flex flex-col"><img src="@/assets/media.svg" alt="setup-thumb" class="mx-auto xl:block" /></div>
              <div class="flex flex-col space-y-5">
                <div class="space-y-4">
                  <h2 class="text-2xl font-bold text-grey-800 leading-none">Add Media</h2>
                  <p class="text-xl text-grey-900">Featuring customer content is a great way to build a community around your products and your brand. You can import directly from social media posts or add your own manually.
                    <a href="#" class="text-peach-500 hover:text-grey-800 duration-300 ease-in-out hover:underline">Learn more</a></p>
                </div>
                <div class="flex flex-wrap gap-3 w-full justify-center">  
                  <Button type="submit" :btn-outline="true" :btn-primary="false" class="w-auto sm:px-6">Connect social accounts</Button>
                  <Button type="submit" :btn-primary="true" @click="isMoreMedia = true" class="w-auto sm:px-6 ">Add manually</Button>
                </div>  
              </div>
             </div>
          </div>
        </div>
        <!-- add media section table -->
        <div v-if="isMoreMedia" class="overflow-hidden md:rounded-lg bg-white border border-grey-300 shadow-3">
          <div class="p-4 pb-0 gap-2 md:gap-5 flex">
          <div class="flex flex-1 gap-2 md:gap-5">
            <div class="relative flex-1">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" >
                <MagnifyingGlassIcon
                  class="h-4 w-4 text-grey-900 mt-1"
                  aria-hidden="true"
                />
              </div>
              <Input id="search" type="search" label-text="" name="search" v-model="password" placeholder="Search for media" 
               inputClasses="pl-10 border-peach-500" />
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
                  <MenuItems class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-3 ring-1 ring-black ring-opacity-5 focus:outline-none" >
                    <div class="py-1">
                      <MenuItem v-slot="{ active }">
                        <button
                          :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
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
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
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
              <div class="inline-block min-w-full pt-2 align-middle md:px-0 lg:px-0" >
                <div class="overflow-hidden">
                  <div class="inline-block min-w-full align-middle md:px-0 lg:px-0">
                    <div class="overflow-hidden pt-2">
                      <table class="min-w-full border-0 border-collapse divide-y divide-gray-200">
                        <thead class="hidden sm:table-header-group">
                          <tr>
                            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-grey-800 sm:pl-6" >
                              Media
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-lg font-semibold text-grey-800" >
                              Customer
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-center text-lg font-semibold text-grey-800" >
                              Link
                            </th>
                            <th scope="col" class="px-3 py-3.5 pr-8 text-right text-lg font-semibold text-grey-800" >
                              Date added
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 bg-white">
                          <tr v-for="cust in customers" :key="cust.email" class="odd:bg-white even:bg-grey-100">
                            <td class="whitespace-nowrap p-3 pl-4 text-lg sm:pl-6" >
                              <div class="flex items-center">
                                <div class="h-14 w-14 flex justify-center items-center flex-shrink-0 overflow-hidden rounded">
                                  <img class="aspect-square object-cover" :src="cust.image" alt="" />
                                </div>
                                <div class="ml-4">
                                  <div class="font-medium text-grey-800">
                                    {{ cust.name }}
                                  </div>
                                  <div class="text-grey-700 flex gap-2 items-center"><span>{{ cust.type }}</span><span class="w-1 h-1 sm:hidden rounded-full bg-grey-700 block"></span><span class="sm:hidden">{{ cust.date_added }}</span></div>
                                  <p class="sm:hidden"><a href="javascript:void(0)" class="hover:text-grey-900 text-blue hover:underline">{{ cust.name }}</a></p>
                                </div>
                              </div>
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-lg text-blue hidden sm:table-cell"
                            >
                              <a href="javascript:void(0)" class="hover:text-grey-900 text-blue hover:underline">{{ cust.name }}</a>
                            </td>
                            <td class="text-center">
                              <a
                                href="javascript:void(0)"
                                class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9"
                              >
                                <LinkChain class="w-4 h-4" />
                              </a>
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 pr-8 text-right text-lg text-gray-500 hidden sm:table-cell"
                            >
                              {{ cust.date_added }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                </div>
                </div>
                </div>
              </div>
            </div>
            <nav
            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
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
    <SlideOvers :open-dialog="isUploadMedia" @closeModal="isUploadMedia = false">
      <FileSelect />
    </SlideOvers>
  </div>
</template>

<script setup>
  import AngleRight from '@/assets/icons/AngleRight.vue';
  import AngleLeft from '@/assets/icons/AngleLeft.vue';
  import {ref} from 'vue';   
  import Button from '@/components/Button.vue';
  import SlideOvers from '@/components/SlideOvers.vue';
  import FileSelect from '@/components/FileSelect.vue';

  import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
  import LinkChain from '@/assets/icons/LinkChain.vue';
  import ShortIcon from '@/assets/icons/ShortIcon.vue'; 
 
  import Input from '@/components/Input.vue';
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

  const isMoreMedia = ref(false);
  const isUploadMedia = ref(false);
  const customers = [
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb- 1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Lindsay Walton',
    url: '#',
    title: 'Front-end Developer',
    type: 'JPG',
    date_added: 'Nov 28, 2022',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
</script>
