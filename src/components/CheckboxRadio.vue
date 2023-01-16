<template>
<div class="relative flex item-start gap-3">
<input 
:type="type"
      :value="modelValue" 
      :id="id"
      :name="name"    
      :checked="checked"
      :class="`relative text-peach-500 shadow-md w-5 h-5 border-peach-500 focus:ring-peach-500 peer ${inputClasses}`"  @change="$emit('update:modelValue', $event.target.value)">
<label :for="id" :class="`block text-lg text-grey-800 ${labelClasses}`">{{ labelText }}</label>
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
  },// Input box classes
  name: {
    type: String,
    required: true,
  }, 
 checked: {
    type: String,
    required: true,
  }, 
 
  
  
  // Label classes
  labelClasses: {
    type: String,
    required: true,
  }, 
});
</script>
