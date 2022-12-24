<template>
  <TransitionRoot appear :show="openDialog" as="template">
    <Dialog as="div" @click="$emit('closeModal')" class="relative z-50">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-80" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="max-w-full transform overflow-hidden bg-white p-6 text-left align-middle transition-all shadow rounded-md">
              <div class="z-10 absolute top-0 right-0 pt-2 pr-2 ">
                <button type="button" class="rounded hover:bg-gray-200 p-2 ease-in-out duration-300" @click="$emit('closeModal')">
                  <span class="sr-only">Close</span>
                  <component
                    :is="XMarkIcon"
                    class="block h-5 w-5 text-grey-900"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <!-- dailog contents -->
              <div class="modal-contents">
                <slot></slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

defineProps({
  openDialog: {
    type: Boolean,
    required: true
  },
  dialogWidth: {
    type: String,
    required: false,
  },
})
</script>