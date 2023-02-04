<template>
  <div class="relative rounded-lg shadow-3 border border-grey-300 bg-white mb-6">
    <img
      src="@/assets/icons/move-icon.svg"
      class="handle absolute top-2 left-0 right-0 mx-auto hover:cursor-move"
    />
    <div class="setup-guide-area p-4 lg:py-6 lg:px-8">
      <div class="md:grid md:grid-cols-12 gap-5 xl:gap-10 2xl:gap-20 flex flex-col">
        <div class="md:hidden">
          <SelectItem
            v-model="currentQuestionType"
            label="Response Type"
            :options="questionTypeOptions"
          />
        </div>
        <div class="md:col-span-9">
          <div class="relative space-y-4">
            <div class="space-y-3">
              <Textarea
                name="question"
                rows="4"
              />
              <CheckboxRadio
                id="visible"
                inputClasses="rounded"
                type="checkbox"
                checked="checked"
                name="visibility"
                label-text="This question is required"
              />
            </div>

            <!-- Check List -->
            <div
              class="space-y-3"
              v-if="currentQuestionType.id === 2"
            >
              <div
                v-for="(option, index) in checklistOptions"
                :key="option.id"
                class="flex justify-around items-center"
              >
                <Input
                  class="flex-1"
                  :label-text="`# Option ${option.id}`"
                  :model-value="checklistOptions[index].response"
                />
                <Button
                  class="text-red hover:bg-red/10 px-2 gap-x-1.5 inline-flex items-center justify-end self-end"
                  :btn-no-border="true"
                  :btn-primary="false"
                  @click="removeOption('checklist', index)"
                >
                  <XMarkIcon class="block h-5 w-5" />
                </Button>
              </div>

              <button
                type="button"
                class="flex items-center cursor-pointer"
                @click="addOption('checklist')"
              >
                <PlusCircle class="w-4 mr-2 text-grey-700" />
                Add option
              </button>
            </div>

            <!-- Multiple Choice -->
            <div
              class="space-y-3"
              v-else-if="currentQuestionType.id === 3"
            >
              <div
                v-for="option in multipleChoiceOptions"
                :key="option.id"
                class="flex justify-around items-center"
              >
                <Input
                  class="flex-1"
                  :label-text="`# Option ${option.id}`"
                  :model-value="option.response"
                />
                <Button
                  class="text-red hover:bg-red/10 px-2 gap-x-1.5 inline-flex items-center justify-end self-end"
                  :btn-no-border="true"
                  :btn-primary="false"
                  @click="removeOption('multiple_choice', index)"
                >
                  <XMarkIcon class="block h-5 w-5" />
                </Button>
              </div>

              <button
                type="button"
                class="flex items-center cursor-pointer"
                @click="addOption('multiple_choice')"
              >
                <PlusCircle class="w-4 mr-2 text-grey-700" />
                Add option
              </button>
            </div>
          </div>
        </div>

        <div class="md:col-span-3">
          <div class="flex flex-col h-full">
            <div class="md:block hidden">
              <SelectItem
                v-model="currentQuestionType"
                label="Response Type"
                :options="questionTypeOptions"
              />
            </div>
            <div class="mt-auto flex justify-start sm:justify-end">
              <button
                @click="$emit('delete-question')"
                class="text-red hover:bg-red/10 px-2 gap-x-1.5 inline-flex items-center justify-end"
                :btn-no-border="true"
                :btn-primary="false"
              >
                <TrashIcon class="w-4" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue';
import CheckboxRadio from '@/components/CheckboxRadio.vue';
import SelectItem from '@/components/SelectItem.vue';
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import Button from '@/components/Button.vue';
import TrashIcon from '@/assets/icons/trash.vue';
import PlusCircle from '@/assets/icons/PlusCircle.vue';
import TextLeftAlign from '@/assets/icons/TextLeftAlign.vue';
import MultipleChoiceIcon from '@/assets/icons/MultipleChoiceIcon.vue';
import CheckCircleIcon from '@/assets/icons/CheckCircleIcon.vue';

const questionTypeOptions = [
  {
    id: 1,
    name: 'Text Response',
    icon: TextLeftAlign,
  },
  {
    id: 2,
    name: 'Checklist',
    icon: CheckCircleIcon,
  },
  {
    id: 3,
    name: 'Multiple choice',
    icon: MultipleChoiceIcon,
  },
];

const currentQuestionType = ref(questionTypeOptions[1]);

const checklistOptions = ref([
  {
    id: 1,
    type: 'checklist',
    response: 'Option 1',
  },
]);

const multipleChoiceOptions = ref([
  {
    id: 1,
    type: 'mutliple_choice',
    response: 'Option 1',
  },
]);

function addOption(type) {
  if (type === 'checklist') {
    const last = checklistOptions.value[checklistOptions.value.length - 1];
    let id = last.id + 1;
    checklistOptions.value.push({
      id,
      type: 'checklist',
      response: `Option ${id}`,
    });
  } else {
    const last = multipleChoiceOptions.value[multipleChoiceOptions.value.length - 1];
    let id = last.id + 1;
    multipleChoiceOptions.value.push({
      id,
      type: 'mutiple_choice',
      response: `Option ${id}`,
    });
  }
}

function removeOption(type, index) {
  if (type === 'checklist' && checklistOptions.value.length < 1) {
    checklistOptions.value.splice(index, 1);
  } else if (type === 'mutliple_choice' && multipleChoiceOptions.value.length < 1) {
    multipleChoiceOptions.value.splice(index, 1);
  }
}
</script>
