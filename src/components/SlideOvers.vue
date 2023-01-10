<template>
  <TransitionRoot as="template" :show="openDialog">
    <Dialog as="div" class="relative z-30" @click="$emit('closeModal')">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/70 transition ease-in-out duration-300"
        />
      </TransitionChild>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-5"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-md pl-10">
                <div
                  class="flex h-full flex-col py-4 px-3 bg-white shadow-xl relative"
                >
                  <button
                    type="button"
                    class="hover:text-gray-500 focus:outline-none outline-none cursor-pointer absolute top-2.5 -left-12 hover:bg-red text-white p-2 rounded ease-in-out duration-300"
                    @click="$emit('closeModal')"
                  >
                    <span class="sr-only">Close panel</span>
                    <component
                      :is="XMarkIcon"
                      class="block h-6 w-6 text-white cursor-pointer"
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    class="relative flex-1 w-full space-y-5 px-2 py-2 max-h-full overflow-y-auto overflow-x-hidden on-hover-scroll"
                  >
                    <div class="space-y-5">
                      <DialogTitle class="text-lg font-semibold text-gray-800"
                        >Upload Media</DialogTitle
                      >
                      <!-- Replace with your content -->
                      <div
                        class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-32 rounded-xl"
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
                      <!-- /End replace -->
                      <!-- Picture Profile after upload  -->
                      <div class="space-y-4 hidden">
                        <div class="block w-full overflow-hidden rounded-lg">
                          <img
                            src="@/assets/eyelarge.png"
                            alt=""
                            class="object-cover aspect-square w-full"
                          />
                        </div>
                        <div class="flex items-start justify-between">
                          <div class="space-y-1">
                            <h2
                              class="text-lg font-normal text-grey-800 leading-none"
                            >
                              cutie_brows
                            </h2>
                            <p
                              class="text-lg font-normal text-grey-700 flex items-center"
                            >
                              JPG
                              <span
                                class="w-2 h-2 rounded-full bg-grey-500 block mx-3"
                              ></span>
                              Jun 4, 2022
                            </p>
                          </div>
                          <a
                            href="javascript:void(0)"
                            class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9"
                          >
                            <LinkChain class="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <!-- End Picture Profile -->
                    </div>
                    <div class="space-y-2">
                      <Textarea
                        rows="4"
                        id="project-description"
                        name="project-description"
                        label-text="Description"
                        placeholder="great eyebrows"
                        labelClasses="block xs:text-lg font-semibold text-grey-800"
                      />
                    </div>
                    <div class="space-y-2">
                      <Input
                        id="link"
                        type="text"
                        label-text="Link"
                        name="link"
                        v-model="password"
                        placeholder="www.google.com"
                        labelClasses="block xs:text-lg font-semibold text-grey-800"
                        inputClasses="border-peach-500"
                      />
                    </div>
                    <!-- Customer -->
                    <div class="space-y-2">
                      <label
                        for="project-description"
                        class="block text-lg font-semibold text-grey-800"
                        >Customer</label
                      >
                      <div class="flex justify-between">
                        <a
                          href="#"
                          class="text-lg font-normal text-blue leading-none inline-flex cursor-pointer"
                          >Carla Septimus</a
                        >
                        <a
                          href="#"
                          class="text-lg font-normal text-blue leading-none inline-flex cursor-pointer"
                          >Assign to another client</a
                        >
                      </div>
                    </div>
                    <!-- Assign to client -->
                    <div class="space-y-2">
                      <label
                        for="project-description"
                        class="block text-lg font-semibold text-grey-800"
                        >Assign to customer</label
                      >
                      <Combobox v-model="selected">
                        <div class="relative">
                          <div class="relative w-full z-20">
                            <ComboboxInput
                              type="search"
                              class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-lg invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none"
                              :displayValue="(person) => person.name"
                              placeholder="Start typing customer name"
                              @change="query = $event.target.value"
                            />
                            <ComboboxButton
                              class="absolute inset-y-0 right-0 flex items-center pr-2"
                            >
                              <ChevronUpDownIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="			true"
                              />
                            </ComboboxButton>
                          </div>
                          <TransitionRoot
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            @after-leave="query = ''"
                          >
                            <ComboboxOptions
                              class="absolute z-10 mt-1 max-h-40 w-full on-hover-scroll overflow-auto rounded-md bg-white py-1 text-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
                            >
                              <div
                                v-if="
                                  filteredPeople.length === 0 && query !== ''
                                "
                                class="relative cursor-default select-none py-2 px-4 text-gray-700"
                              >
                                Nothing found.
                              </div>

                              <ComboboxOption
                                v-for="person in filteredPeople"
                                as="template"
                                :key="person.id"
                                :value="person"
                                v-slot="{ selected, active }"
                              >
                                <li
                                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                                  :class="{
                                    'bg-grey-200 text-grey-800': active,
                                    'text-gray-900': !active,
                                  }"
                                >
                                  <span
                                    class="block truncate"
                                    :class="{
                                      'font-medium': selected,
                                      'font-normal': !selected,
                                    }"
                                  >
                                    {{ person.name }}
                                  </span>
                                  <span
                                    v-if="selected"
                                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                                    :class="{
                                      'text-white': active,
                                      'text-teal-600': !active,
                                    }"
                                  >
                                    <CheckIcon
                                      class="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                </li>
                              </ComboboxOption>
                            </ComboboxOptions>
                          </TransitionRoot>
                        </div>
                      </Combobox>
                    </div>
                    <!-- Visibility -->
                    <div class="space-y-2">
                      <p class="block text-lg font-semibold text-grey-800">
                        Visibility
                      </p>

                      <CheckboxRadio
                        id="visible"
                        type="radio"
                        checked="checked"
                        name="visibility"
                        label-text="Visible"
                        v-model="visibility"
                      />
                      <CheckboxRadio
                        id="hidden"
                        type="radio"
                        name="visibility"
                        label-text="Hidden"
                        v-model="visibility"
                      />
                    </div>
                    <!-- Call to action with upload button -->
                    <div class="hidden gap-x-2 pt-5">
                      <Button
                        @click="editNoteDailog = false"
                        type="submit"
                        class="w-auto sm:px-6 bg-peach-100"
                        :btn-primary="true"
                        >Upload</Button
                      >
                      <Button @click="$emit('closeModal')"
                        class="w-auto sm:px-8"
                        type="button"
                        :btn-outline="true"
                        :btn-primary="false"
                        >Cancle</Button
                      >
                    </div>
                    <!-- Edit Media button save and cancel -->
                    <div class="flex flex-wrap justify-between items-strech">
                      <div class="flex gap-x-2">
                        <Button
                          @click="editNoteDailog = false"
                          type="submit"
                          class="w-auto"
                          :btn-primary="true"
                          >Save</Button
                        >
                        <Button
                          class="w-auto"
                          type="button"
                          :btn-outline="true"
                          :btn-primary="false"
                          >Cancel</Button
                        >
                      </div>
                      <Button
                        @click="deleteCustomerDailog = true"
                        :btn-no-border="true"
                        :btn-primary="false"
                        class="text-red hover:bg-red/10 xs:px-4 gap-x-2 inline-flex items-center"
                      >
                        <TrashIcon class="w-4" /> Delete Media
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import LinkChain from '@/assets/icons/LinkChain.vue';
import FileSelect from '@/components/FileSelect.vue';
import { ref, computed } from 'vue';
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
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import TrashIcon from '@/assets/icons/trash.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Textarea from '@/components/Textarea.vue';
import CheckboxRadio from '@/components/CheckboxRadio.vue';

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
const open = ref(true);
defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
});
</script>
