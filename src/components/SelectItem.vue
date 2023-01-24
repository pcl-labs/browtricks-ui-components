<template>
  <Listbox
    as="div"
    @update:model-value="$emit('update:model-value', $event)"
    :model-value="modelValue"
  >
    <ListboxLabel class="block text-sm font-semibold text-grey-800">
      {{ label }}
    </ListboxLabel>
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default rounded-md border border-grey-300 bg-white p-3 pr-10 font-semibold text-grey-800 text-left shadow-sm focus:border-peach-500 focus:outline-none focus:ring-1 focus:ring-peach-500 text-sm ease-in-out duration-300 outline-none"
      >
        <span class="flex items-center">
          <span class="block truncate">{{ modelValue.name }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <Chevrondown
            class="h-5 w-5 text-grey-800"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-grey-300 focus:outline-none text-sm ease-in-out duration-300 py-3 outline-none"
        >
          <ListboxOption
            as="template"
            v-for="option in options"
            :key="option.id"
            :value="option"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-grey-800 bg-gray-100' : 'text-grey-800',
                selected ? 'text-grey-800 bg-gray-100' : 'text-grey-800',
              ]"
              class="relative cursor-default select-none py-2 pl-3 pr-9"
            >
              <div class="flex items-center">
                <component
                  :is="option.icon"
                  class="block h-4 w-4 cursor-pointer text-peach-500"
                  aria-hidden="true"
                />
                <span :class="[selected ? 'font-semibold' : 'font-semibold', 'ml-3 block truncate font-semibold']">
                  {{ option.name }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-grey-800' : 'text-grey-800',
                  'absolute inset-y-0 right-0 flex items-center mr-4',
                ]"
              >
                <CheckIcon
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<script setup>
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import Chevrondown from '@/assets/icons/Chevrondown.vue';

defineProps({
  modelValue: { type: Object, required: true },
  label: { type: String, required: true },
  options: { type: Array, required: true },
});

defineEmits(['update:model-value']);
</script>
