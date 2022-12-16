<template>
  <div class="user-profile-wrapper relative flex flex-col w-full">
    <!-- Projects List -->
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div class="mb-7 pb-10 space-y-5 border-b border-solid border-gray-300">
        <h2
          class="flex-1 text-2.5xl font-semibold leading-none text-black pb-3"
        >
          Chris Luke
        </h2>
        <div
          class="coverflow-hidden rounded-xl bg-white shadow-3 border border-grey-300 divide-y divide-grey-300"
        >
          <div class="p-7">
            <div class="flex flex-col text-left">
              <h6>Add Media</h6>
              <div
                class="flex items-center justify-center gap-5 border border-dashed border-orange-200 mt-3 p-5 py-10 rounded-xl"
              >
                <div class="flex flex-col gap-2">
                  <div class="flex justify-center items-center">
                    <file-select v-model="file"></file-select>
                  </div>
                  <p v-if="file">{{ file.name }}</p>
                  <p class="text-xs text-grey-800/80">
                    Accepts .jpg., png., mp4., mov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-7 space-y-7">
        <h2 class="flex-1 text-2.5xl font-semibold leading-none text-black">
          Your media
        </h2>
        <div
          class="coverflow-hidden rounded-xl bg-white pb-3 border border-grey-300 divide-y divide-grey-300"
        >
          <div class="p-4 gap-2 md:gap-5 flex">
            <div class="w-full flex-1">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <MagnifyingGlassIcon
                    class="h-4 w-4 text-grey-800"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  class="block w-full placeholder-black/40 appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer pl-10"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>

            <div class="sm:flex-none flex">
              <button
                type="button"
                class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
              >
                <ShortIcon class="w-5" />
                Sort
              </button>
            </div>
          </div>

          <div class="flex-col">
            <div class="overflow-x-auto">
              <div
                class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
              >
                <div class="overflow-hidden">
                  <table
                    class="min-w-full border-0 border-collapse divide-y divide-gray-200"
                  >
                    <thead class="">
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-grey-800 sm:pl-6"
                        >
                          Media
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-left text-sm font-semibold text-grey-800"
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 text-center text-sm font-semibold text-grey-800"
                        >
                          Link
                        </th>
                        <th
                          scope="col"
                          class="px-3 py-3.5 pr-8 text-right text-sm font-semibold text-grey-800"
                        >
                          Date added
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white">
                      <tr v-for="cust in customers" :key="cust.email">
                        <td
                          class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6"
                        >
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0">
                              <img
                                class="h-10 w-10 rounded"
                                :src="cust.image"
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="font-medium text-grey-800">
                                {{ cust.name }}
                              </div>
                              <div class="text-gray-500">{{ cust.type }}</div>
                            </div>
                          </div>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 text-sm text-blue"
                        >
                          {{ cust.name }}
                        </td>
                        <td class="text-center">
                          <a
                            href="javascript:void(0)"
                            class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-sm font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-12 h-12"
                          >
                            <LinkChain class="w- h-5" />
                          </a>
                        </td>
                        <td
                          class="whitespace-nowrap px-3 py-4 pr-8 text-right text-sm text-gray-500"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import FileSelect from './FileSelect.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import LinkChain from '@/assets/icons/LinkChain.vue';
import ShortIcon from '@/assets/icons/ShortIcon.vue';

let file = null;

const customers = [
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
