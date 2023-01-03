<template>
  <button :class="
  {
    'inline-flex gap-2 items-center justify-center bg-peach-500 w-auto rounded-md border border-transparent py-2 px-4 text-xl font-semibold text-black shadow-sm hover:bg-peach-100 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300': btnPrimary, // default button peach

    
    'inline-flex items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-lg font-medium text-grey-800 shadow-sm hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500': btnOutline, // gray line bordered button

    'inline-flex items-center rounded-md border border-grey-900 bg-transparent px-6 py-2 font-semibold text-grey-800 shadow-sm hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500 leading-none ': btnDarkOutline, // Dark Line button

    'inline-flex items-center justify-center rounded-md border border-red bg-transparent px-4 w-auto text-center py-2 text-xl font-medium text-red shadow-sm hover:bg-red hover:text-white focus:outline-none outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300': btnDanger, // red bordered button
   
    'inline-flex items-center rounded-md border border-transparent bg-transparent px-6 py-2 font-semibold text-grey-800  hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 leading-none': btnNoBorder, // Dark Line button
  
  }" @click="$emit('click')">
    <slot>Save</slot>
  </button>
</template>

<script setup>
defineProps({
  btnPrimary: {
    type: Boolean,
    required: true,
    default: 'true'
  },
  btnOutline: Boolean,
  btnDarkOutline: Boolean,
  btnDanger: Boolean,
  btnNoBorder: Boolean,
 
});
</script>
