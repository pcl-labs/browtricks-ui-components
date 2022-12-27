<template>
  <div class="space-y-1">
    <label
      :for="id"
      :class="`block text-sm font-medium text-grey-900 text-start ${labelClasses}`"
    >
      {{ labelText }}
    </label>
    <input
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :id="id"
      :class="`
        block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-2.5 placeholder-grey-700 font-medium shadow-sm focus:border-peach focus:outline-none focus:ring-peach text-sm invalid:bg-red/5 invalid:border-red ease-in-out duration-300 outline-none peer ${inputClasses}`"
      @change="$emit('update:modelValue', $event.target.value)"
    />
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
  type: {
    type: String,
    required: true,
  },
  // Input event
  onChange: {
    type: Function,
    required: true,
  },
  // Input box classes
  inputClasses: {
    type: String,
    required: true,
  },
  // Input box classes
  classes: {
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
