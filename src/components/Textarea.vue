<template>
  <div class="space-y-1">
    <label
      :for="id"
      :class="`block text-lg font-medium text-grey-900 text-start ${labelClasses}`"
    >
      {{ labelText }} 
    </label>
    <div class="relative">
    <textarea :rows="rows" :name="name" :id="comment" :placeholder="placeholder" :class="`block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 text-grey-800 font-medium shadow-sm focus:border-peach-500 focus:outline-none focus:ring-peach-500 text-lg invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer ${inputClasses}`"
    v-bind:value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)" :maxlength="maxlength"
    />
    <span class="absolute bottom-1 right-2 text-sm text-grey-700">{{ modelValue?.length }} / {{ maxlength }}</span>
  </div>
    <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
      <b>Error:</b> Invalid or incorrect Username Invalid or incorrect password
    </p>
  </div>
</template>

<script setup>
 
   
 
defineProps({
  id: String,
  labelText: String,
  modelValue: String,
  rows: {
    type: Boolean,
    required: false
  }, maxlength: {
    type: Boolean,
    required: false
  },
  // Input name attr
  name: {
    type: String,
    required: false,
  },
  // Input box classes
  inputClasses: {
    type: String,
    required: true,
  },
  // Label classes
  labelClasses: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>
