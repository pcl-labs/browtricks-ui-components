<template>
  <div class="relative flex flex-col min-h-screen">
    <TopNavbar :is-login="isLogin" />
    <!-- column wrapper -->
    <div class="flex flex-1 relative items-stretch">
      <SidebarNavigation />
      <!-- <PmuDetails /> -->
      <!-- Post PMU Care Form -->
      <div class="space-y-9 flex-1 py-3 md:p-5 xl:px-14 xl:py-12 flex flex-col">
        <div class="space-y-6">
          <div class="overflow-hidden md:rounded-xl bg-white shadow-3">
            <div class="space-y-3 p-4 sm:px-8 sm:py-8">
              <h1 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800">Post PMU Care Form</h1>
              <p class="text-lg md:text-xl font-normal text-grey-700 leading-none">
                Requested by Koko Teams on Nov 10, 2020
              </p>
            </div>
          </div>
          <div class="overflow-hidden md:rounded-xl bg-white shadow-3">
            <div class="space-y-8 p-4 sm:px-8 sm:py-8">
              <h2 class="text-3xl font-semibold text-grey-800 leading-tight">
                I have read, or had read to me, the above Pre and Post Care instructions and expectations. I agree to
                follow the above directions and understand that how I heal depends on how closely I follow said
                directions. I understand a touchup appointment will be needed to complete the process.
              </h2>
              <div class="space-y-4">
                <CheckboxRadio
                  id="check1"
                  inputClasses="rounded"
                  type="checkbox"
                  name="check1"
                  label-text="I am currently taking blood thinners"
                />

                <CheckboxRadio
                  id="check2"
                  inputClasses="rounded"
                  type="checkbox"
                  name="check2"
                  label-text="I am pregnant or breastfeeding"
                />

                <CheckboxRadio
                  id="check3"
                  inputClasses="rounded"
                  type="checkbox"
                  name="check3"
                  label-text="I have skin diseases such as psoriasis or eczema"
                />
              </div>
            </div>
          </div>
          <div class="overflow-hidden md:rounded-xl bg-white shadow-3">
            <div class="space-y-8 p-4 sm:px-8 sm:py-8">
              <h2 class="text-3xl font-semibold text-grey-800 leading-tight">
                I have read, or had read to me, the above Pre and Post Care instructions and expectations. I agree to
                follow the above directions and understand that how I heal depends on how closely I follow said
                directions. I understand a touchup appointment will be needed to complete the process.
              </h2>
              <div class="space-y-4">
                <CheckboxRadio
                  id="check4"
                  inputClasses="rounded-full"
                  type="checkbox"
                  name="check4"
                  label-text="I am currently taking blood thinners"
                />

                <CheckboxRadio
                  id="check5"
                  inputClasses="rounded-full"
                  type="checkbox"
                  name="check5"
                  label-text="I am pregnant or breastfeeding"
                />

                <CheckboxRadio
                  id="check6"
                  inputClasses="rounded-full"
                  type="checkbox"
                  name="check6"
                  label-text="I have skin diseases such as psoriasis or eczema"
                />
              </div>
            </div>
          </div>
          <div class="overflow-hidden md:rounded-xl bg-white shadow-3">
            <div class="space-y-8 p-4 sm:px-8 sm:py-8">
              <h2 class="text-3xl font-semibold text-grey-800 leading-tight">
                I have read, or had read to me, the above Pre and Post Care instructions and expectations. I agree to
                follow the above directions and understand that how I heal depends on how closely I follow said
                directions. I understand a touchup appointment will be needed to complete the process.
              </h2>
              <div class="space-y-2 mt-4">
                <Textarea
                  rows="4"
                  id="project-description"
                  name="project-description"
                  label-text="Answer"
                  placeholder=""
                  labelClasses="block xs:text-lg font-semibold text-grey-800"
                />
              </div>
            </div>
          </div>
          <div class="overflow-hidden md:rounded-xl bg-white shadow-3">
            <div class="space-y-8 p-4 sm:px-8 sm:py-8">
              <h2 class="text-3xl font-semibold text-grey-800 leading-tight">Please read the folowing</h2>
              <div class="relative py-6 px-4 flex justify-center items-center">
                <img
                  class="h-auto object-cover"
                  src="/src/assets/Pre_and_Post_Care_Agreement.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col px-4 md:px-0">
            <CheckboxRadio
              id="agree"
              inputClasses="rounded"
              type="checkbox"
              name="agree"
              label-text="Agree with terms"
            />
          </div>
        </div>
        <!-- Signature section here -->
        <div class="space-y-1 px-4 md:px-0">
          <h5 class="block text-lg font-semibold text-grey-800">Sign here:</h5>
          <div class="flex flex-col md:flex-row items-center gap-x-10 gap-y-5 w-full md:w-2/5">
            <div class="space-y-4 w-full">
              <div class="overflow-hidden rounded-xl bg-transparent border border-grey-300 w-full md:w-60">
                <div class="space-y-3 px-12 py-16 flex flex-wrap justify-center items-center text-center w-full">
                  <div class="flex flex-col gap-2">
                    <div class="flex justify-center items-center">
                      <file-select v-model="file"></file-select>
                    </div>
                    <p v-if="file">{{ file.name }}</p>
                    <p class="text-xs text-grey-800/80">Upload your signature</p>
                  </div>
                  <!-- <Signature class="w-40 h-16 block" /> -->
                </div>
              </div>
            </div>
            <div class="space-y-5 w-full">
              <div class="flex items-center gap-3 text-lg leading-none text-black relative w-40">
                <p class="font-normal">Signature:</p>
                <Signature class="w-20 h-8 md:absolute -top-3 right-0" />
              </div>
              <div class="flex items-center gap-3 text-lg leading-none text-black">
                <p class="font-normal">Signed by:</p>
                <span class="font-semibold">Jane Doe</span>
              </div>
              <div class="flex items-center gap-3 text-lg leading-none text-black">
                <p class="font-normal">Date:</p>
                <span class="font-semibold">11 Nov 2022</span>
              </div>
            </div>
          </div>
          <div class="flex gap-3 pt-6 md:pt-3.5">
            <Button
              type="submit"
              :btn-outline="true"
              :btn-primary="false"
              @click="isMoreForm = true"
              class="w-auto sm:px-6"
              >Undo</Button
            >
            <Button
              type="submit"
              :btn-outline="true"
              :btn-primary="false"
              @click="isMoreForm = true"
              class="w-auto sm:px-6"
              >Save signature</Button
            >
          </div>
        </div>
        <div class="flex flex-col px-4 md:px-0">
          <Button
            type="submit"
            :btn-primary="true"
            @click="isSave = true"
            class="md:w-24 max-w-full sm:px-6"
            >Submit</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import TopNavbar from '@/components/layout/TopNavbar.vue';
import SidebarNavigation from '@/components/layout/SidebarNavigation.vue';
import CheckboxRadio from '@/components/CheckboxRadio.vue';
import Textarea from '@/components/Textarea.vue';
import Signature from '@/assets/icons/Signature.vue';
import Button from '@/components/Button.vue';
import FileSelect from '@/components/FileSelect.vue';
// import PmuDetails from '@/components/PmuDetails.vue';

const isLogin = reactive(true);
</script>
