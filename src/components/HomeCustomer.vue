<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <!-- Setup Guide -->
    <div class="flex-1 py-3 md:p-5 xl:px-14 xl:py-12">
      <div
        class="coverflow-hidden md:rounded-xl bg-white shadow-3 border-y md:border border-grey-300 divide-y divide-grey-300"
      >
        <div class="border-b border-grey-200 px-4 pt-10 pb-6 md:px-7">
          <div class="flex flex-col text-left">
            <h1
              class="flex-1 text-lg md:text-2.5xl font-semibold leading-none text-black pb-3"
            >
              Setup guide
            </h1>
            <div class="flex items-center gap-5">
              <span
                class="whitespace-nowrap text-sm md:text-base font-normal text-grey-700"
                >1 of 6 tasks complete</span
              >
              <div
                class="w-full bg-grey-300 rounded-full h-1.5 dark:bg-gray-700"
              >
                <div
                  class="bg-grey-700 h-1.5 rounded-full dark:bg-blue-500"
                  style="
                    width: 20%; /*width: index / ${setupCount} * 100 + '%'*/
                  "
                ></div>
                <!-- Step count % formulla `index / ${setupCount} * 100 + '%'` -->
              </div>
            </div>
          </div>
        </div>
        <div class="xl:flex px-4 py-10 md:px-7">
          <div class="flex-1">
            <ul role="list" class="md:pr-5 max-w-md overflow-hidden step-list">
              <!-- customers steps -->
              <li
                v-for="(step, index) in customerSteps"
                :key="index"
                :class="step.isExpanded ? 'open' : 'close'"
                class="text-left relative pb-10"
              >
                <div
                  class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-peach-100 v-line"
                  aria-hidden="true"
                ></div>

                <a href="#" class="group relative flex items-start">
                  <span class="flex h-9 items-center">
                    <span
                      class="relative left-1 z-10 flex h-6 w-6 items-center justify-center rounded-full ring-4 ring-white"
                      :class="
                        step.isExpanded
                          ? 'bg-peach-500'
                          : 'bg-white border-2 border-dashed  border-peach-500 '
                      "
                    >
                      <CheckIcon
                        v-if="step.isExpanded"
                        class="h-4 w-4 text-grey-800"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                  <div class="ml-7 flex min-w-0 flex-col space-y-3 pt-2">
                    <h3
                      @click="step.isExpanded = !step.isExpanded"
                      class="text-sm font-semibold"
                    >
                      {{ step.title }}
                    </h3>
                    <div
                      :class="step.isExpanded ? 'block' : 'hidden'"
                      class="space-y-5"
                    >
                      <p class="text-md text-grey-800">{{ step.answer }}</p>
                      <Button @click="consoleClick" class="sm:min-w-40 mt-4" :btn-primary="true">Add customer</Button>

                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div class="">
            <img
              src="../assets/setup-guide-thumb.svg"
              alt="setup-thumb"
              class="hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import CheckIcon from '@/assets/icons/CheckIcon.vue';
import Button from '@/components/Button.vue';
// Setup Guide data
const customerSteps = reactive([
  {
    title: 'Add customers',
    answer:
      'Streamline your contact book by saving before/after media and signed forms all within our single app.',
    isExpanded: true,
  },
  {
    title: 'Create forms',
    answer:
      'Use our pre-built templates for quick onboarding, or create your own templates for use again and again! View signing status, and manage sms integrations.',
    isExpanded: false,
  },
  {
    title: 'Connect social accounts',
    answer:
      'Import user generated content across social channels. Gain access to advanced analytics and performance reports by connecting your brand social accounts.',
    isExpanded: false,
  },
  {
    title: 'Add before/after media',
    answer:
      'Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.',
    isExpanded: false,
  },
  {
    title: 'Enable SMS sending',
    answer:
      'Save customer content to your account. Build relationships by storing notes, images, and more directly to their profile.',
    isExpanded: false,
  },
]);
</script>
