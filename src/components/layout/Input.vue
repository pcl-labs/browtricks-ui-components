<template>
  <div class="space-y-1">
  <label :class="labelClasses ? labelClasses : 'block text-sm font-normal text-grey-900 text-start'" :for="id">{{ labelText }}</label>
  <input
    :type="type"
    :value="modelValue"
    @change="onChange"
    :id="id"
    :class="inputClasses ? inputClasses : 'block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach text-sm invalid:bg-red/5 invalid:border-red peer'"
  />
  <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
                  <b>Error:</b> Invalid or incorrect Username  Invalid or incorrect password
                </p></div>
</template>

<script setup>
const props = defineProps({
  id: String,
  labelText: String,
  modelValue: String,
  type: {
    type: String,
    required: true
  },
  // Input event
  onChange: {
    type: Function,
    required: true,
  },
  // Input box classes
  inputClasses: {
    type: String,
    required: true
  },
  // Label classes
  labelClasses: {
    type: String,
    required: true
  }
})
</script>