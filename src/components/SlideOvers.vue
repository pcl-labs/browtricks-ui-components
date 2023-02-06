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
                    class="hover:text-grey-500 focus:outline-none outline-none cursor-pointer absolute top-2.5 -left-12 hover:bg-red text-white p-2 rounded ease-in-out duration-300"
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
                      <DialogTitle class="text-lg font-semibold text-grey-800">{{dialogTitle}}</DialogTitle>
                      <!-- Slideoover contents -->
                      <div class="slideover-contents">
                        <slot></slot>
                      </div>
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

import { ref, computed } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
 
} from '@headlessui/vue';
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';

import Button from '@/components/Button.vue';
 

const open = ref(true);
defineProps({
  openDialog: {
    type: Boolean,
    required: true,
  },
  dialogTitle: {
    type: String,
    required: true,
    default: 'Upload'
  },
});
</script>
