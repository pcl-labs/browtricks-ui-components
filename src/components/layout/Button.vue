<template>
  <button :class="btnClasses ? btnClasses : 'inline-flex gap-2 items-center justify-center bg-peach w-full rounded-md border border-transparent py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300'"
    @click="$emit('emitclick')">
    <slot>Save</slot>
  </button>
</template>

<script setup>
const props = defineProps({
  btnClasses: {
    type: String,
    required: true
  }
});
</script>
