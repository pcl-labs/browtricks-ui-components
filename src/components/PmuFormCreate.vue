<template>
  <div class="relative flex flex-col w-full flex-1 xs:pr-16">
    <div class="flex-1 space-y-6 xs:pt-0">
      <div class="overflow-hidden rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">
        <div class="space-y-4">
          <div class="relative">
            <Input
              id="formName"
              type="text"
              label-text="Form name"
              placeholder="Post PMU Care Form"
              v-model="formName"
              :on-change="handleInput"
              autocomplete="formName"
            />
          </div>
          <div class="relative">
            <Textarea
              name="description"
              rows="4"
              id="description"
              label-text="Description"
              placeholder="Please complete this form"
            />
          </div>
        </div>
      </div>
      <div class="xs:relative space-y-3 xs:space-y-0">
        <!-- Before Form Upload -->
        <div class="relative rounded-lg shadow-3 bg-white border border-grey-300 p-4 lg:py-6 lg:px-8">
          <div class="space-y-4">
            <div class="space-y-1">
              <h3 class="flex-1 text-base font-bold leading-snug text-grey-800">Use your own document</h3>
              <p class="text-sm font-normal text-grey-700 leading-snug md:leading-none">
                Upload your own pre-built PDF or DOC form
              </p>
            </div>
            <div
              @click="isUploadDocument = true"
              class="cursor-pointer flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-14 rounded-xl"
            >
              <div class="flex flex-col">
                <span
                  class="inline-flex w-full justify-center items-center rounded-md border border-peach-500 bg-peach-500 py-1 px-2 h-full text-xs font-semibold text-grey-800/70 shadow-sm hover:bg-peach-100 hover:border-peach-100 ease-in-out duration-300 cursor-pointer"
                >
                  <span v-if="value">{{ value.name }}</span>
                  <span v-else>Upload File </span>
                </span>
                <!-- <FileSelect /> -->
                <p class="text-md text-grey-900">Accepts .pdf., doc.</p>
              </div>
            </div>
            <div class="flex justify-start sm:justify-end">
              <Button
                class="text-red hover:bg-red/10 px-2 gap-x-1.5 inline-flex items-center justify-end"
                type="button"
                :btn-no-border="true"
                :btn-primary="false"
              >
                <TrashIcon class="w-4" />
                Delete
              </Button>
            </div>
          </div>
        </div>

        <!-- After Form Upload (Please remove class "hidden" when document will be uploaded and updated here)-->
        <div class="relative rounded-lg shadow-3 bg-white border border-grey-300 space-y-3 p-4 lg:py-6 lg:px-8 hidden">
          <div class="flex items-center">
            <div class="relative flex-1">
              <Input
                id="formDescription"
                type="text"
                :label-text="'Form description'"
                :placeholder="'Please read the folowing'"
              />
            </div>
            <div class="pt-5 flex pl-3 gap-0.5">
              <Button
                class="text-red hover:bg-red/10 mv:px-3 gap-x-1.5 inline-flex items-center ml-auto justify-end"
                :btn-no-border="true"
                :btn-primary="false"
              >
                <TrashIcon class="w-4" />
              </Button>
            </div>
          </div>

          <div class="relative flex justify-center items-center">
            <img
              class="h-auto object-cover"
              :src="uploadedPdf"
              alt=""
            />
          </div>
        </div>
      </div>

      <!-- Start Question area -->
      <Sortable
        item-key="key"
        :list="questions"
      >
        <template #item="{ index }">
          <QuestionBuilder @delete-question="removeQuestion(index)" />
        </template>
      </Sortable>
      <!-- End Questions area -->

      <div class="mt-8">
        <Button
          type="submit"
          :btn-primary="true"
        >
          Save and create form
        </Button>
      </div>
    </div>

    <SlideOvers
      :open-dialog="isUploadDocument"
      dialog-title="Upload Document"
      @closeModal="isUploadDocument = false"
    >
      <div class="space-y-5">
        <!-- Replace with your content -->
        <div class="flex items-center justify-center gap-5 border border-dashed border-grey-300 p-5 py-32 rounded-xl">
          <div class="flex flex-col gap-2">
            <div class="flex justify-center items-center">
              <file-select v-model="file"></file-select>
            </div>
            <p v-if="file">{{ file.name }}</p>
            <p class="text-xs text-grey-800/80">Accepts .jpg., png., mp4., mov.</p>
          </div>
        </div>
        <!-- /End replace -->
        <!-- Picture Profile after upload -->
        <div class="space-y-4 hidden">
          <div class="block w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf"
              frameborder="0"
              class="object-cover aspect-square w-full h-1/4"
            />
          </div>
          <div class="flex items-start justify-between">
            <div class="space-y-1">
              <h2 class="text-lg font-normal text-grey-800 leading-none">Pre & Post Brow Care.pdf</h2>
              <p class="text-lg font-normal text-grey-700 flex items-center">
                PDF
                <span class="w-2 h-2 rounded-full bg-grey-500 block mx-3" />
                Jun 4, 2022
              </p>
            </div>
            <a
              href="javascript:void(0)"
              class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-lg font-medium text-blue shadow-sm hover:bg-blue hover:border-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 ease-in-out duration-300 w-9 h-9"
            >
              <LinkChain class="w-4 h-4" />
            </a>
          </div>
        </div>
        <!-- End Picture Profile -->
      </div>

      <div class="flex flex-wrap justify-between items-strech mt-4">
        <div class="flex gap-x-2">
          <Button
            @click="editNoteDailog = false"
            type="submit"
            class="w-auto"
            :btn-primary="true"
          >
            Save
          </Button>
          <Button
            class="w-auto"
            @click="isUploadDocument = false"
            type="button"
            :btn-outline="true"
            :btn-primary="false"
          >
            Cancel
          </Button>
        </div>

        <!-- Picture Profile after upload delete media button needs to enable () -->
        <Button
          @click="deleteCustomerDailog = true"
          :btn-no-border="true"
          :btn-primary="false"
          class="text-red hover:bg-red/10 xs:px-4 gap-x-2 inline-flex items-center"
        >
          <TrashIcon class="w-4" /> Delete Media
        </Button>
      </div>
    </SlideOvers>
  </div>

  <!-- Right Floated action buttons -->
  <div
    class="absolute sm:fixed right-0 -top-16 sm:top-1/2 sm:-translate-y-1/2 rounded-lg sm:rounded-none sm:rounded-l-lg shadow-3 bg-white border border-grey-300 sm:border-r-0 inline-flex"
  >
    <div class="p-1.5 flex xs:flex-col gap-2">
      <Button
        @click="addQuestion"
        class="text-grey-700 hover:bg-red/10 px-2 flex items-center justify-end"
        :btn-no-border="true"
        :btn-primary="false"
      >
        <PlusCircle class="w-5" />
      </Button>
      <hr class="h-full xs:h-auto xs:w-full border-grey-500 border-0 border-l xs:border-l-0 xs:border-b" />
      <Button
        class="text-grey-700 hover:bg-red/10 px-2 flex items-center justify-end"
        :btn-no-border="true"
        :btn-primary="false"
      >
        <PictureIcon class="w-5" />
      </Button>
    </div>
  </div>
  <!-- End Right Floated action buttons -->
</template>

<script setup>
import { ref } from 'vue';
import { Sortable } from 'sortablejs-vue3';
import Input from '@/components/Input.vue';
import Textarea from '@/components/Textarea.vue';
import SlideOvers from '@/components/SlideOvers.vue';
import FileSelect from '@/components/FileSelect.vue';
import Button from '@/components/Button.vue';
import TrashIcon from '@/assets/icons/trash.vue';
import PlusCircle from '@/assets/icons/PlusCircle.vue';
import PictureIcon from '@/assets/icons/PictureIcon.vue';
import LinkChain from '@/assets/icons/LinkChain.vue';
import uploadedPdf from '@/assets/Pre_and_Post_Care_Agreement.png';
import QuestionBuilder from './pmu/QuestionBuilder.vue';

const moreQuestions = ref(0);
const isMoreQuestions = ref(false);
const isUploadDocument = ref(false);

const questions = ref([{ key: 1 }]);

function addQuestion() {
  let lastKey = questions.value[questions.value.length - 1].key;
  questions.value.push({ key: lastKey++ });
}

function removeQuestion(index) {
  questions.value.splice(index, 1);
}
</script>
