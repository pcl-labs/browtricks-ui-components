<template>
  <div class="relative flex flex-col w-full">
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12 flex flex-col ">
      <div class="space-y-6 pt-3 md:pt-0 flex flex-col flex-1">
        <div class="flex items-center px-3 md:px-0">
          <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Media</h2>
          <div class="flex gap-2">
            <!-- Start
                Just for demo purpose to see how alert gets open -->
            <Button @click="isCloseAlert = true" class="w-auto sm:px-6 bg-peach-100" :btn-primary="true">Show
              Alert</Button>
            <!-- End -->
            <!-- <template v-if="isMoreMedia">
              <Button type="submit" :btn-primary="true" class="w-auto sm:px-6 ml-2 hidden sm:block" @click="isMoreMedia = false">Add Media</Button>
            </template> -->
            <Button @click="isUploadMedia = true">Add Media</Button>
          </div>
        </div>
        <div v-if="!isMoreMedia"
          class="overflow-hidden md:rounded-lg shadow-3 bg-white border border-grey-300 flex-1 flex justify-center items-center">
          <div class="setup-guide-area p-10 px-4 ">
            <div class="flex flex-col justify-center text-center space-y-10 max-w-md sm:px-7 mx-auto">
              <div class="relative flex flex-col"><img src="@/assets/media.svg" alt="setup-thumb"
                  class="mx-auto xl:block" /></div>
              <div class="flex flex-col space-y-5">
                <div class="space-y-4">
                  <h2 class="text-3xl sm:text-4xl font-bold text-grey-800 leading-none">Add Media</h2>
                  <p class="text-xl text-grey-900">Featuring customer content is a great way to build a community around
                    your products and your brand. You can import directly from social media posts or add your own
                    manually.
                    <a href="#"
                      class="text-peach-500 hover:text-grey-800 duration-300 ease-in-out hover:underline">Learn more</a>
                  </p>
                </div>
                <div class="flex flex-wrap gap-3 w-full justify-center">
                  <Button type="submit" :btn-outline="true" :btn-primary="false" class="w-auto sm:px-6">Connect social
                    accounts</Button>
                  <Button type="submit" :btn-primary="true" @click="isMoreMedia = true" class="w-auto sm:px-6 ">Add
                    manually</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- add media section table -->
        <div v-if="isMoreMedia" class="overflow-hidden md:rounded-lg bg-white border-y md:border-x border-grey-300 shadow-3">
          <div class="p-4 pb-0 gap-2 md:gap-5 flex">
            <div class="flex flex-1 gap-2 md:gap-5">
              <div class="relative flex-1">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon class="h-4 w-4 text-grey-900 mt-1" aria-hidden="true" />
                </div>
                <Input id="search" type="search" label-text="" name="search" v-model="password"
                  placeholder="Search for media" inputClasses="pl-10 border-peach-500" />
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
                    ]">
                    <ShortIcon class="w-4 mr-2" /> <span>Sort</span>
                  </MenuButton>


                  <transition enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                    <MenuItems
                      class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-3 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                          active
                            ? 'bg-grey-100 text-grey-900'
                            : 'text-grey-700',
                          'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                        ]">
                          A-Z
                        </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                        <button :class="[
                          active
                            ? 'bg-grey-100 text-grey-900'
                            : 'text-grey-700',
                          'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                        ]">
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
            
                  <div class="inline-block min-w-full align-middle md:px-0 lg:px-0">
                    <div class="overflow-hidden pt-4">
                      <table class="min-w-full border-0 border-collapse divide-y divide-grey-200">
                        <thead class="hidden sm:table-header-group">
                          <tr>
                            <th scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-grey-800 sm:pl-6">
                              Media
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-left text-lg font-semibold text-grey-800">
                              Customer
                            </th>
                            <th scope="col" class="px-3 py-3.5 text-center text-lg font-semibold text-grey-800">
                              Link
                            </th>
                            <th scope="col" class="px-3 py-3.5 pr-8 text-right text-lg font-semibold text-grey-800">
                              Date added
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-grey-200 bg-white">
                          <tr v-for="cust in customers" :key="cust.email" @click="isUploadMedia = true" class="odd:bg-white even:bg-grey-100">
                            <td class="whitespace-nowrap p-3 pl-4 text-lg sm:pl-6">
                              <div class="flex items-center">
                                <div
                                  class="h-14 w-14 flex justify-center items-center flex-shrink-0 overflow-hidden rounded">
                                  <img class="aspect-square object-cover" :src="cust.image" alt="" />
                                </div>
                                <div class="ml-4">
                                  <div class="font-medium text-grey-800">
                                    {{ cust.name }}
                                  </div>
                                  <div class="text-grey-700 flex gap-2 items-center"><span>{{ cust.type }}</span><span
                                      class="w-1 h-1 sm:hidden rounded-full bg-grey-700 block"></span><span
                                      class="sm:hidden">{{ cust.date_added }}</span></div>
                                  <p class="sm:hidden"><a href="javascript:void(0)"
                                      class="hover:text-grey-900 text-blue hover:underline">{{ cust.name }}</a></p>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-lg text-blue hidden sm:table-cell">
                              <a href="javascript:void(0)" class="hover:text-grey-900 text-blue hover:underline">{{
                                cust.name
                              }}</a>
                            </td>
                            <td class="text-center">
                              <a href="javascript:void(0)" class="inline-flex items-center justify-center rounded-md border border-grey-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9">
                                <LinkChain class="w-4 h-4" />
                              </a>
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 pr-8 text-right text-lg text-grey-700 hidden sm:table-cell">
                              {{ cust.date_added }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                
            </div>
            <nav class="flex items-center justify-between border-t border-grey-200 bg-white px-4 py-3 sm:px-6"
              aria-label="Pagination">
              <div class="flex flex-1 justify-start items-center gap-2">
                <a href="#"
                  class="relative inline-flex items-center rounded-l border border-grey-500 bg-white px-2.5 py-2 text-lg font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300">
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
                <a href="#"
                  class="relative inline-flex items-center rounded-r border border-grey-500 bg-white px-2.5 py-2 text-lg font-medium text-grey-800 hover:bg-grey-500 ease-in-out duration-300">
                  <AngleRight class="w-1.5" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>




    <SlideOvers :open-dialog="isUploadMedia" dialog-title="Upload Media" @closeModal="isUploadMedia = false">
      <div class="space-y-5">
        <!-- Replace with your content -->
        <div class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-32 rounded-xl">
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
        <!-- /End replace -->
        <!-- Picture Profile after upload  -->
        <div class="space-y-4 hidden">
          <div class="block w-full overflow-hidden rounded-lg">
            <img src="@/assets/eyelarge.png" alt="" class="object-cover aspect-square w-full" />
          </div>
          <div class="flex items-start justify-between">
            <div class="space-y-1">
              <h2 class="text-lg font-normal text-grey-800 leading-none">
                cutie_brows
              </h2>
              <p class="text-lg font-normal text-grey-700 flex items-center">
                JPG
                <span class="w-2 h-2 rounded-full bg-grey-500 block mx-3"></span>
                Jun 4, 2022
              </p>
            </div>
            <a href="javascript:void(0)"
              class="inline-flex items-center justify-center rounded-md border border-grey-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-grey-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9">
              <LinkChain class="w-4 h-4" />
            </a>
          </div>
        </div>
        <!-- End Picture Profile -->
      </div>
      <div class="space-y-2 mt-4">
        <Textarea rows="4" id="project-description" name="project-description" label-text="Description"
          placeholder="great eyebrows" labelClasses="block xs:text-lg font-semibold text-grey-800" maxlength="2000"
              v-model.lazy="description"
              :model-value="description" />
      </div>
      <div class="space-y-2 mt-4">
        <Input id="link" type="text" label-text="Link" name="link" v-model="password" placeholder="www.google.com"
          labelClasses="block xs:text-lg font-semibold text-grey-800" inputClasses="border-peach-500" />
      </div>
      <!-- Customer -->
      <div class="space-y-2 mt-4">
        <label for="project-description" class="block text-lg font-semibold text-grey-800">Customer</label>
        <div class="flex justify-between">
          <a href="#" class="text-lg font-normal text-blue leading-none inline-flex cursor-pointer">Carla Septimus</a>
          <a href="#" class="text-lg font-normal text-blue leading-none inline-flex cursor-pointer">Assign to another
            client</a>
        </div>
      </div>
      <!-- Assign to client -->
      <div class="space-y-2 my-4">
        <label for="project-description" class="block text-lg font-semibold text-grey-800">Assign to customer</label>
        <Combobox v-model="selected">
          <div class="relative">
            <div class="relative w-full z-20">
              <ComboboxInput type="search"
                class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-lg invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none"
                :displayValue="(person) => person.name" placeholder="Start typing customer name"
                @change="query = $event.target.value" />
              <ComboboxButton class="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon class="h-5 w-5 text-grey-400" aria-hidden="			true" />
              </ComboboxButton>
            </div>
            <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
              @after-leave="query = ''">
              <ComboboxOptions
                class="absolute z-10 mt-1 max-h-40 w-full on-hover-scroll overflow-auto rounded-md bg-white py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg">
                <div v-if="
                  filteredPeople.length === 0 && query !== ''
                " class="relative cursor-default select-none py-2 px-4 text-grey-700">
                  Nothing found.
                </div>

                <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person"
                  v-slot="{ selected, active }">
                  <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                    'bg-grey-200 text-grey-800': active,
                    'text-grey-900': !active,
                  }">
                    <span class="block truncate" :class="{
                      'font-medium': selected,
                      'font-normal': !selected,
                    }">
                      {{ person.name }}
                    </span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3" :class="{
                      'text-white': active,
                      'text-teal-600': !active,
                    }">
                      <CheckIcon class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </li>
                </ComboboxOption>
              </ComboboxOptions>
            </TransitionRoot>
          </div>
        </Combobox>
      </div>
      <!-- Visibility -->
      <div class="space-y-2 my-4">
        <p class="block text-lg font-semibold text-grey-800">
          Visibility
        </p>

        <CheckboxRadio id="visible" inputClasses="rounded-full" type="radio" checked="checked" name="visibility" label-text="Visible"
          v-model="visibility" />
        <CheckboxRadio id="hidden" inputClasses="rounded-full" type="radio" name="visibility" label-text="Hidden" v-model="visibility" />
      </div>
      <!-- Call to action with upload button -->
      <div class="hidden gap-x-2 pt-5">
        <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6 bg-peach-100"
          :btn-primary="true">Upload</Button>
        <Button class="w-auto sm:px-8" type="button" :btn-outline="true" :btn-primary="false">Cancle</Button>
      </div>
      <!-- Edit Media button save and cancel -->
      <div class="flex flex-wrap justify-between items-strech">
        <div class="flex gap-x-2">
          <Button @click="editNoteDailog = false" type="submit" class="w-auto" :btn-primary="true">Save</Button>
          <Button class="w-auto" @click="isUploadMedia = false" type="button" :btn-outline="true"
            :btn-primary="false">Cancel</Button>
        </div>
        <Button @click="deleteCustomerDailog = true" :btn-no-border="true" :btn-primary="false"
          class="text-red hover:bg-red/10 xs:px-4 gap-x-2 inline-flex items-center">
          <TrashIcon class="w-4" /> Delete Media
        </Button>
      </div>
    </SlideOvers>
  </div>

  <!-- Start Alert -->
  <Alert :open-alert="isCloseAlert" @closeAlert="isCloseAlert = false" :show-details-btn="true">
    <template #icon>
      <SuccessIcon class="w-4 text-green" />
    </template>
    <template #title>File uploaded</template>
    <!-- Here description -->
    <template #description>
      <div class="pl-7 text-md text-grey-700">description</div>
    </template>

    <template #details>
      <div class="space-y-1">
        <div class="flex items-center gap-3">
          <div class="h-8 w-8 flex justify-center items-center shrink-0 overflow-hidden rounded">
            <img class="aspect-square object-cover"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="">
          </div>

          <p class="font-medium text-grey-700 text-lg">Screenshot...102531.png</p>
          <ExclamationIcon class="w-5 ml-auto text-red" />
        </div>
        <p class="text-red font-medium pl-11">File Format is not supported</p>

      </div>

    </template>
  </Alert>
  <!-- End Alert -->



</template>

<script setup>
  import { ref, computed } from 'vue';

  import AngleRight from '@/assets/icons/AngleRight.vue';
  import AngleLeft from '@/assets/icons/AngleLeft.vue';
  import Button from '@/components/Button.vue';
  import Input from '@/components/Input.vue';
  import Textarea from '@/components/Textarea.vue';
  import CheckboxRadio from '@/components/CheckboxRadio.vue';
  import SlideOvers from '@/components/SlideOvers.vue';
  import FileSelect from '@/components/FileSelect.vue';
  import Alert from '@/components/Alert.vue';

  import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
  import LinkChain from '@/assets/icons/LinkChain.vue';
  import ExclamationIcon from '@/assets/icons/exclamation.vue';
  import ShortIcon from '@/assets/icons/ShortIcon.vue';
  import SuccessIcon from '@/assets/icons/success.vue';

  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
  import Success from '../assets/icons/success.vue';

  import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOptions,
    ComboboxOption,
  } from '@headlessui/vue';
  const description = ref('');
  const isMoreMedia = ref(false);
  const isUploadMedia = ref(false);
  const isCloseAlert = ref(false);
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

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

let selected = ref(people[0]);
let query = ref('');

let filteredPeople = computed(() =>
  query.value === ''
    ? people
    : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
);
</script>
