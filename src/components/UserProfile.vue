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
                            <svg
                              class="w-5 h-5"
                              viewBox="0 0 14 14"
                              fill="none"
                              stroke="currentColor"
                            >
                              <path
                                d="M5.79297 7.60407C6.0521 7.95085 6.38271 8.23779 6.76237 8.44543C7.14202 8.65306 7.56185 8.77653 7.99337 8.80747C8.42489 8.83841 8.85801 8.77608 9.26335 8.62472C9.66869 8.47337 10.0368 8.23651 10.3426 7.93024L12.1528 6.11818C12.7024 5.54859 13.0065 4.7857 12.9996 3.99385C12.9928 3.20199 12.6755 2.44451 12.1161 1.88456C11.5567 1.32461 10.8 1.007 10.009 1.00011C9.2179 0.993233 8.45579 1.29764 7.88678 1.84777L6.84892 2.88065"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.20678 6.39594C7.94765 6.04915 7.61704 5.76221 7.23738 5.55457C6.85773 5.34694 6.4379 5.22347 6.00638 5.19253C5.57486 5.16159 5.14174 5.22392 4.7364 5.37528C4.33106 5.52664 3.96298 5.76349 3.65712 6.06977L1.84691 7.88182C1.29734 8.45142 0.99324 9.2143 1.00011 10.0062C1.00699 10.798 1.32428 11.5555 1.88366 12.1154C2.44304 12.6754 3.19975 12.993 3.9908 12.9999C4.78185 13.0068 5.54396 12.7024 6.11297 12.1522L7.14479 11.1194"
                                stroke-width="1.2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
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
import FileSelect from "./FileSelect.vue";
import MagnifyingGlassIcon from "@/assets/icons/MagnifyingGlassIcon.vue";
import ShortIcon from "@/assets/icons/ShortIcon.vue";

const file = null;

const icons = {
  sort: "M5.29289 2.29289C5.47386 2.11193 5.72386 2 6 2C6.27614 2 6.52614 2.11193 6.70711 2.29289L9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711C9.31658 7.09763 8.68342 7.09763 8.29289 6.70711L7 5.41421V13C7 13.5523 6.55228 14 6 14C5.44772 14 5 13.5523 5 13V5.41421L3.70711 6.70711C3.31658 7.09763 2.68342 7.09763 2.29289 6.70711C1.90237 6.31658 1.90237 5.68342 2.29289 5.29289L5.29289 2.29289ZM13 7C13 6.448 13.448 6 14 6C14.553 6 15 6.448 15 7V14.585L16.293 13.293C16.683 12.902 17.317 12.902 17.707 13.293C17.903 13.488 18 13.744 18 14.001C18 14.256 17.903 14.512 17.707 14.707L14.707 17.707C14.527 17.888 14.277 18 14 18C13.724 18 13.474 17.888 13.293 17.707L10.293 14.707C10.098 14.512 10 14.256 10 14.001C10 13.744 10.098 13.488 10.293 13.293C10.684 12.902 11.316 12.902 11.707 13.293L13 14.585V7Z",
};

const customers = [
  {
    name: "Lindsay Walton",
    url: "#",
    title: "Front-end Developer",
    type: "JPG",
    date_added: "Nov 28, 2022",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    url: "#",
    title: "Front-end Developer",
    type: "JPG",
    date_added: "Nov 28, 2022",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    url: "#",
    title: "Front-end Developer",
    type: "JPG",
    date_added: "Nov 28, 2022",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    url: "#",
    title: "Front-end Developer",
    type: "JPG",
    date_added: "Nov 28, 2022",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    url: "#",
    title: "Front-end Developer",
    type: "JPG",
    date_added: "Nov 28, 2022",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
</script>
