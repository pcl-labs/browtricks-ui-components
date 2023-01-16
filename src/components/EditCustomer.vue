<template>
  <div class="relative flex flex-col w-full flex-1">
    <div class="flex-1 p-4 md:p-5 xl:px-14 xl:py-12 flex flex-col">
      <div class="space-y-6">
        <h2 class="text-5xl font-bold leading-none text-grey-800">
          Jane Doe Edit Page
        </h2>
        <div class="coverflow-hidden divide-y divide-grey-300">
          <!-- Main 3 column grid -->
          <div
            class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8"
          >
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-6 lg:col-span-2">
              <div
                class="overflow-hidden shadow-3 rounded-lg bg-white border border-grey-300"
              >
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4 class="text-lg font-bold text-grey-800 leading-none">
                      Media
                    </h4>
                    <p class="text-lg text-grey-900 leading-tight font-medium">
                      This customer does not have<br />
                      any content yet.
                    </p>
                  </div>

                  <div class="mt-7">
                    <Button @click="consoleClick" :btn-primary="true"
                      >Add Media</Button
                    >
                  </div>
                </div>
              </div>

              <div
                class="overflow-hidden shadow-3 rounded-lg bg-white hidden flex-1 sm:flex justify-center items-center border border-grey-300"
              >
                <div class="p-4 sm:p-8 space-y-3 sm:pt-6 flex-1">
                  <div class="flex items-center relative">
                    <h4 class="text-lg font-bold text-gray-900 leading-none">
                      PMU Forms
                    </h4>

                    <Button
                      @click="consoleClick"
                      :btn-no-border="true"
                      :btn-primary="false"
                      class="text-blue hover:text-grey-800 ml-auto md:px-3 -mr-3 text-xl w-auto bg-transparent shadow-none"
                      >Add custom form</Button
                    >
                  </div>
                  <div class="flex gap-2 md:gap-5">
                    <div class="w-full flex-1">
                      <div class="relative">
                        <div
                          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                          >
                          <MagnifyingGlassIcon
                            class="h-4 w-4 text-grey-900"
                            aria-hidden="true"
                          />
                        </div>
                        <Input
                          id="search"
                          type="search"
                          label-text=""
                          name="search"
                          v-model="password"
                          placeholder="Search forms"
                          inputClasses="pl-10 border-peach-500"
                        />
                      </div>
                    </div>
                    <div class="sm:flex-none flex">
                      <Button
                        :btn-no-border="true"
                        :btn-primary="false"
                        class="mt-1 border-grey-700 hover:border-peach-500"
                        >Browse</Button
                      >
                    </div>
                  </div>
                  <!-- PMU Form Lists -->
                  <div class="pt-3 space-y-4">
                    <table class="divide-y divide-grey-300 border-b border-grey-300 w-full">
                      <tr>
                        <th
                          class="font-medium text-gray-900 text-left pb-2"
                          col-span="2"
                        >
                          Forms
                        </th>
                      </tr>
                      <tr>
                        <td
                          class="py-2 text-lg text-grey-900 leading-tight font-medium"
                        >
                          Pre and Post Care Agreement Version 01
                        </td>
                        <td class="text-right py-2">
                          <button
                            type="button"
                            class="rounded hover:bg-red-100 hover:text-red text-grey-900 p-2 ease-in-out duration-300"
                             
                          >
                            <span class="sr-only">Close</span>
                            <XMarkIcon class="block h-5 w-5 " />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td
                          class="py-2 text-lg text-grey-900 leading-tight font-medium"
                        >
                          Disclosure and Consent for Intradermal Cosmetic
                          Procedure
                        </td>
                        <td class="text-right py-2">
                          <button
                            type="button"
                            class="rounded hover:bg-red-100 hover:text-red text-grey-900 p-2 ease-in-out duration-300"
                            
                          >
                            <span class="sr-only">Close</span>
                            <XMarkIcon class="block h-5 w-5 " />
                          </button>
                        </td>
                      </tr>
                    </table>
                   <div class="flex justify-end"><Button @click="pmuFormList = true" :btn-primary="true">Send PMU Forms</Button></div>
                  </div>
                </div>
              </div>
              <div
                class="overflow-hidden shadow-3 rounded-lg bg-white flex-1 flex justify-center items-center border border-grey-300"
              >
                <div class="p-4 sm:p-8 space-y-6 flex-1">
                  <div class="flex">
                    <p class="text-lg font-bold text-gray-900 leading-none">
                      PMU Form Timeline
                    </p>
                  </div>

                  <div class="flow-root">
                    <ul
                      role="list"
                      class="space-y-10 relative after:absolute after:z-0 after:top-0 after:left-2 after:h-[calc(100%-20px)] after:border-dashed after:border-peach-500 after:border-l"
                    >
                      <li
                        v-for="activityItem in activity"
                        :key="activityItem.id"
                        class="flex gap-x-3 relative"
                      >
                        <div
                          class="flex h-4 w-4 items-center justify-center rounded-full bg-peach-500 ring-8 ring-white"
                        ></div>
                        <div class="text-lg text-gray-500 leading-none">
                          <span
                            class="text-xs block font-medium pb-1.5 text-grey-700 leading-none"
                            >{{ activityItem.date }}</span
                          >
                          <span class="font-medium text-gray-900">{{
                            activityItem.store_name
                              ? activityItem.store_name
                              : activityItem.cust_name
                          }}</span>
                          {{ ' ' }}
                          <template v-if="activityItem.store_name !== ''">
                            sent
                          </template>
                          <template v-else> signed </template>
                          {{ ' ' }}
                          <span class="font-medium text-gray-900">{{
                            activityItem.form_name
                          }}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flex">
                <Button
                  @click="deleteCustomerDailog = true"
                  :btn-danger="true"
                  :btn-primary="false"
                  class="bg-transparent sm:px-6"
                  >Delete Customer</Button
                >
              </div>
            </div>

            <!-- Right column -->
            <div class="grid grid-cols-1 gap-6 pb-12 sm:pb-0">
              <div class="overflow-hidden shadow-3 rounded-lg bg-white">
                <div class="p-4 px-8 space-y-2">
                  <div class="flex items-center relative">
                    <h4 class="text-lg font-bold text-gray-900 leading-none">
                      Customer
                    </h4>
                    <Button
                      @click="editCustomerDailog = true"
                      :btn-no-border="true"
                      :btn-primary="false"
                      class="text-blue hover:text-grey-800 md:px-3 ml-auto -mr-3 text-xl w-auto bg-transparent shadow-none"
                      >Edit</Button
                    >
                  </div>
                  <div class="customer-details">
                    <p class="text-xl text-gray-500">
                      Julia Barneby<br />
                      (888) 376-7160<br />
                      juliabarneby@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden shadow-3 rounded-lg bg-white">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4 class="text-lg font-bold text-grey-800 leading-none">
                      Notes
                    </h4>
                    <p class="text-lg text-grey-900 leading-tight">
                      No notes about this customer
                    </p>
                  </div>

                  <div class="mt-7 flex gap-2">
                    <Button @click="addNoteDailog = true" :btn-primary="true"
                      >Add Notes</Button
                    >
                    <Button
                      @click="allNotesDailog = true"
                      :btn-no-border="true"
                      :btn-primary="false"
                      class="xs:px-4"
                      >All Notes</Button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Dialog -->
  <!-- Add Note dailog -->
  <DialogPopup :open-dialog="addNoteDailog" @closeModal="addNoteDailog = false">
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
        Add note
      </DialogTitle>

      <form action="#" method="POST">
        <div class="space-y-6">
          <div class="space-y-1">
            <Textarea
              name="text-note"
              rows="4"
              id="textNote"
              label-text="Note"
              placeholder="I am being treated for, or was in the past for the following conditions (Please include allergies, especially to dye, pigment, or numbing agent.)"
            />
          </div>
          <div class="flex justify-start gap-x-3">
            <Button
              @click="addNoteDailog = false"
              type="submit"
              class="w-auto sm:px-6"
              :btn-primary="true"
              >Save</Button
            >
            <Button
              @click="addNoteDailog = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
          </div>
        </div>
      </form>
    </div>
  </DialogPopup>

  <!-- All Notes dailog -->
  <DialogPopup
    :open-dialog="allNotesDailog"
    @closeModal="allNotesDailog = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
        All notes
      </DialogTitle>

      <div class="mt-6 flow-root">
        <ul role="list" class="-my-5 divide-y divide-gray-200">
          <li class="py-5">
            <div class="relative flex gap-5 justify-between">
              <div class="max-w-sm" @click="editNoteDailog = true">
                <p
                  class="text-lg text-grey-900 font-medium line-clamp-2 cursor-pointer"
                >
                  I am being treated for, or was in the past for the following
                  conditions (Please include allergies, especially to dye,
                  pigment, or numbing agent.)
                </p>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300"
                >
                  <trashIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </li>
          <li class="py-5">
            <div class="relative flex gap-5 justify-between">
              <div class="max-w-sm">
                <p class="text-lg text-grey-900 font-medium line-clamp-2">
                  Note text about cool new brows note text about cool new browse
                </p>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300"
                >
                  <trashIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </li>

          <li class="py-5">
            <div class="relative flex gap-5 justify-between">
              <div class="max-w-sm">
                <p class="text-lg text-grey-900 font-medium line-clamp-2">
                  This customer was the best customer ever need to give her
                  discount next time
                </p>
              </div>
              <div class="flex items-center">
                <button
                  type="button"
                  class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300"
                >
                  <trashIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </DialogPopup>

  <!-- Edit Note dailog -->
  <DialogPopup
    :open-dialog="editNoteDailog"
    @closeModal="editNoteDailog = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
      <div class="space-y-3">
        <button
          type="button"
          @click="editNoteDailog = false"
          class="flex items-center gap-1 font-medium"
        >
          <ArrowLeft class="w-4 h-4" /><span>All notes</span>
        </button>
        <DialogTitle
          as="h3"
          class="flex-1 text-5xl font-bold leading-none text-grey-800"
        >
          Edit note
        </DialogTitle>
      </div>
      <form action="#" method="POST">
        <div class="space-y-6">
          <div class="space-y-1">
            <Textarea
              name="text-note"
              rows="4"
              id="textNote"
              label-text="Note"
              placeholder="I am being treated for, or was in the past for the following conditions (Please include allergies, especially to dye, pigment, or numbing agent.)"
            />
          </div>
          <div class="flex justify-start gap-x-3">
            <Button
              @click="editNoteDailog = false"
              type="submit"
              class="w-auto sm:px-8"
              :btn-primary="true"
              >Save</Button
            >
            <Button
              @click="editNoteDailog = false"
              class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
          </div>
        </div>
      </form>
    </div>
  </DialogPopup>

  <!-- Edit customer -->
  <DialogPopup
    :open-dialog="editCustomerDailog"
    @closeModal="editCustomerDailog = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:450px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
        Edit Customer
      </DialogTitle>

      <form action="#" method="POST">
        <div class="space-y-6">
          <div class="sm:overflow-hidden sm:rounded-md space-y-3">
            <div class="flex flex-col gap-3 xs:grid grid-cols-2">
            <Input
              class=""
              id="firstName"
              type="text"
              label-text="First Name"
              :on-change="handleInput"
              autocomplete="firstName"
              placeholder="Julia"
            />
            <Input
              class=""
              id="lastName"
              type="text"
              label-text="Last Name"
              :on-change="handleInput"
              autocomplete="lastName"
              placeholder="Barneby"
            />
          </div>
            <Input
              class=""
              id="phone"
              type="text"
              label-text="Phone"
              :on-change="handleInput"
              autocomplete="phone"
              placeholder="(888) 376-7160"
            />
            <Input
              class=""
              id="email"
              type="email"
              label-text="Email"
              :on-change="handleInput"
              autocomplete="email"
              placeholder="juliabarneby@gmail.com"
            />
          </div>

          <div class="flex justify-start gap-x-3">
            <Button
              @click="editCustomerDailog = false"
              type="submit"
              class="w-auto sm:px-8"
              :btn-primary="true"
              >Save</Button
            >
            <Button
              @click="editCustomerDailog = false"
              class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
          </div>
        </div>
      </form>
    </div>
  </DialogPopup>

  <!-- Delete customer -->
  <DialogPopup
    :open-dialog="deleteCustomerDailog"
    @closeModal="deleteCustomerDailog = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:390px`">
      <div class="mx-auto text-center">
        <component
          :is="RemoveProfile"
          class="block h-16 w-16 text-grey-900 mx-auto"
          aria-hidden="true"
        />
      </div>
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800 text-center"
      >
        Delete Customer
      </DialogTitle>
      <div class="space-y-6 text-center">
        <div class="customer-details">
          <p>Are you sure you want to delete</p>
          <p class="font-bold">Customer Name?</p>
        </div>
        <div class="flex justify-center gap-x-3">
          <Button
            @click="deleteCustomerDailog = false"
            class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
            type="button"
            :btn-outline="true"
            :btn-primary="false"
            >Cancel</Button
          >
          <Button
            @click="deleteCustomerDailog = false"
            class="w-auto sm:px-8"
            type="button"
            :btn-danger="true"
            :btn-primary="false"
            >Yes, delete</Button
          >
        </div>
      </div>
    </div>
  </DialogPopup>


 <!-- Select PMU Forms -->
 <DialogPopup
    :open-dialog="pmuFormList"
    @closeModal="pmuFormList = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
      All PMU Forms
      </DialogTitle>

      <div class="relative">
                        <div
                          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                          >
                          <MagnifyingGlassIcon
                            class="h-4 w-4 text-grey-900"
                            aria-hidden="true"
                          />
                        </div>
                        <Input
                          id="search"
                          type="search"
                          label-text=""
                          name="search"
                          v-model="password"
                          placeholder="Search PMU forms"
                          inputClasses="pl-10 border-peach-500"
                        />
                      </div>

      <div class="mt-6 -mx-6">
         <ul class="divide-y divide-grey-300 border-b border-grey-300">
          <li class="px-6 py-3"><CheckboxRadio inputClasses="rounded" id="pmu-form-1" labelClasses="font-semibold" checked="checked" type="checkbox" name="pmu-form-1"
                      label-text="Pre and Post Care Agreement Version 01" /></li>
          <li class="px-6 py-3"><CheckboxRadio inputClasses="rounded" id="pmu-form-2" labelClasses="font-semibold" type="checkbox" name="pmu-form-2"
                      label-text="Pre and Post Care Agreement Version 01.1" /></li>
          <li class="px-6 py-3"><CheckboxRadio inputClasses="rounded" id="pmu-form-3" labelClasses="font-semibold" checked="checked" type="checkbox" name="pmu-form-3"
                      label-text="Form brows privacy" /></li>
          <li class="px-6 py-3"><CheckboxRadio inputClasses="rounded" id="pmu-form-4" labelClasses="font-semibold" type="checkbox" name="pmu-form-4"
                      label-text="Disclosure and Consent for Intradermal Cosmetic Procedure" /></li>
           
         </ul>
      </div>
<div class="flex justify-between items-center flex-wrap gap-2">
  <p class="text-sm text-grey-700">2 PMU Forms selected</p>
      <div class="flex justify-start gap-x-3">
        <Button
              @click="pmuFormList = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
            <Button
              @click="sandPmuForm = true ; pmuFormList = false "
              type="submit"
              class="w-auto sm:px-6"
              :btn-primary="true"
              >Add</Button
            >
           
          </div>
        </div>
    </div>
  </DialogPopup>

 <!-- Send PMU Form -->
 <DialogPopup
    :open-dialog="sandPmuForm"
    @closeModal="sandPmuForm = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:700px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
      Send PMU Form
      </DialogTitle>

      <form action="#" method="POST">
        <div class="space-y-6">
          <div class="sm:overflow-hidden sm:rounded-md space-y-3">
            <div class="flex flex-col gap-3 xs:grid grid-cols-2">
            <Input
              class=""
              id="to"
              type="email"
              label-text="To"
              :on-change="handleInput"
              autocomplete="Email"
              placeholder="paulchrisluke@gmail.com"
            />
            <Input
              class=""
              id="from"
              type="email"
              label-text="From"
              :on-change="handleInput"
              autocomplete="email"
              placeholder="juliabarneby@gmail.com"
            />
          </div>
            <Input
              class=""
              id="subject"
              type="text"
              label-text="Subject"
              :on-change="handleInput" 
              placeholder="PMU Forms"
            />

            <Textarea
              name="sandPMUForm"
              rows="4"
              id="sandPMUForm"
              label-text="Custom message"
              placeholder="please sign these forms"   />

             
          </div>

          <div class="flex justify-end gap-x-3">
            <Button
              @click="sandPmuForm = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
            <Button
             @click="reviewPmuForm = true ; sandPmuForm = false "
              type="button"
              class="w-auto sm:px-6"
              :btn-primary="true"
              >Review</Button
            >
          
          </div>
        </div>
      </form>
    </div>
  </DialogPopup>

   <!-- Review PMU Form -->
 <DialogPopup
    :open-dialog="reviewPmuForm"
    @closeModal="reviewPmuForm = false"
  >
    <div class="space-y-6 relative max-w-full" :style="`width:700px`">
      <DialogTitle
        as="h3"
        class="flex-1 text-5xl font-bold leading-none text-grey-800"
      >
      Send PMU Form
      </DialogTitle>

      <form action="#" method="POST">
        <div class="space-y-6">
          <div class="sm:overflow-hidden sm:rounded-md space-y-3">
            <table class="w-full text-sm">
              <tr class="border-b border-grey-300">
                <th class="py-2 font-semibold text-grey-800">From:</th>
                <td class="py-2 text-grey-800">paulchrisluke@gmail.com</td>
              </tr>
              <tr class="border-b border-grey-300">
                <th class="py-2 font-semibold text-grey-800">To:</th>
                <td class="py-2 text-grey-800">juliabarneby@gmail.com</td>
              </tr>
              <tr class="border-b border-grey-300">
                <th class="py-2 font-semibold text-grey-800">Subject:</th>
                <td class="py-2 text-grey-800">PMU Forms</td>
              </tr>
              <tr class="border-b border-grey-300">
                <th class="py-2 font-semibold text-grey-800">Custom message:</th>
                <td class="py-2 text-grey-800">please sign these forms</td>
              </tr>
            </table>

            <div class="border border-grey-300 max-h-110 overflow-auto on-hover-scroll rounded">
              <div class="relative flex justify-center items-center">
            <img class="h-auto object-cover" :src="uploadedPdf" alt="" />
            </div>
            </div>


          </div>
          <div class="flex justify-between items-center flex-wrap gap-2">
            <Button
              @click="sandPmuForm = true ; reviewPmuForm = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Back</Button
            >
          <div class="flex justify-end gap-x-3">
            <Button
              @click="reviewPmuForm = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
            <Button
              @click="reviewPmuForm = false"
              type="button"
              class="w-auto sm:px-6"
              :btn-primary="true"
              >Send PMU Form</Button
            >
          
          </div>
          </div>
        </div>
      </form>
    </div>
  </DialogPopup>



</template>

<script setup>
import { ref, reactive } from 'vue';
import DialogPopup from '@/components/DialogPopup.vue';
import RemoveProfile from '@/assets/icons/RemoveProfile.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import trashIcon from '@/assets/icons/trash.vue';
import ArrowLeft from '@/assets/icons/ArrowLeft.vue';
import XMarkIcon from '@/assets/icons/XMarkIcon.vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Textarea from '@/components/Textarea.vue';
import CheckboxRadio from '@/components/CheckboxRadio.vue';
import { DialogTitle } from '@headlessui/vue';
import uploadedPdf from '@/assets/Pre_and_Post_Care_Agreement.png';
const addNoteDailog = ref(false);
const allNotesDailog = ref(false);
const pmuFormList = ref(false);
const sandPmuForm = ref(false);
const reviewPmuForm = ref(false);
const editNoteDailog = ref(false);
const editCustomerDailog = ref(false);
const deleteCustomerDailog = ref(false);

const activity = [
  {
    id: 1,
    date: 'October 29, 2022, 2:34 PM',
    store_name: '',
    cust_name: 'Customer name 1',
    form_name: 'Form name',
  },
  {
    id: 2,
    date: 'October 17, 2022, 1:34 PM',
    store_name: 'Store name 2',
    cust_name: 'Customer name 2',
    form_name: 'Form name 2',
  },
];

function consoleClick() {
  console.log('Button clicked');
}
</script>
