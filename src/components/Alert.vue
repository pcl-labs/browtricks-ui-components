<template>
  <div class="rounded-md bg-grey-800 p-0 fixed right-5 top-5 shadow-3" style="width: 294px; " v-if="openAlert">
      <div class="p-4">
    <div class="flex w-full justify-between">   
        <div class="flex gap-3 items-center">
          <div class="flex-shrink-0"><slot name="icon"></slot></div>
            <h3 class="text-lg font-semibold text-white">
              <slot name="title"></slot>
            </h3>  
        </div>                  
        <div class="flex items-center">
          <button
            type="button"
            class="mr-2 hover:text-light focus:outline-none outline-none cursor-pointer  hover:bg-peach-500 hover:text-grey-800 text-white p-1 rounded ease-in-out duration-300"
            @click="showDetails = !showDetails"
            v-if="showDetailsBtn"
          >
            <span class="sr-only">Show details</span>
            <component
              :is="Chevrondown"
              class="block h-4 w-4 cursor-pointer"
              aria-hidden="true"
            />
          </button>
        
          <button
            type="button"
            class="hover:text-light focus:outline-none outline-none cursor-pointer hover:bg-red text-white p-1 rounded ease-in-out duration-300"
            @click="$emit('closeAlert')"
          >
            <span class="sr-only">Close panel</span>
            <component
              :is="XMarkIcon"
              class="block h-4 w-4 cursor-pointer"
              aria-hidden="true"
            />
          </button>
        </div>      
      </div>
    <slot name="description"></slot>
  </div>
    <div class="details relative border-t border-grey-200 p-4 text-sm text-white" v-if="showDetails">
      <slot name="details"></slot>
    </div>
  </div>
</template>

<script setup>
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import Chevrondown from '@/assets/icons/Chevrondown.vue';
defineProps({
  openAlert: {
    type: Boolean,
    required: true,
    default: false,
  },
  showDetails: {
    type: Boolean,
    required: true,
    default: false,
  },
  showDetailsBtn: {
    type: Boolean,
    required: true,
    default: false,
  },
});

</script>