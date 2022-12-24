<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 p-4 md:p-5 xl:px-14 xl:py-12">
      <div class="space-y-6">
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
          Jane Doe Edit Page
        </h2>
        <div class="coverflow-hidden  divide-y divide-grey-300">
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-6 lg:col-span-2">
              <div class="overflow-hidden shadow-3 rounded-lg bg-white">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex flex-col space-y-2.5">
                    <h4 class="text-lg font-bold text-grey-800 leading-none">
                      Media
                    </h4>
                    <p class="text-sm text-grey-900 leading-tight font-medium">
                      This customer does not have<br />
                      any content yet.
                    </p>
                  </div>

                  <div class="mt-7">
                    <Button @emitclick="consoleClick" :btn-primary="true">Add Media</Button>

                  </div>
                </div>
              </div>
             
              <div class="overflow-hidden shadow-3 rounded-lg bg-white hidden sm:block">
                <div class="p-4 sm:p-8 space-y-3 sm:pt-6">
                  <div class="flex items-center relative">
                    <h4 class="text-lg font-bold text-gray-900 leading-none">
                      PMU Forms
                    </h4>

                    <Button @emitclick="consoleClick" :btn-no-border="true" :btn-primary="false"
                      class=" text-blue hover:text-grey-800 ml-auto md:px-3 -mr-3 text-base w-auto bg-transparent shadow-none">Add custom
                      form</Button>

                  </div>
                  <div class="flex gap-2 md:gap-5">
                    <div class="w-full flex-1">
                      <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <MagnifyingGlassIcon class="h-4 w-4 text-grey-900" aria-hidden="true" />
                        </div>
                        <Input id="search" type="search" label-text="" name="search" v-model="password"
                          placeholder="Search forms" inputClasses="pl-10 border-peach" />
                      </div>
                    </div>
                    <div class="sm:flex-none flex">

                      <Button :btn-no-border="true" :btn-primary="false" class="mt-1 border-grey-700 hover:border-peach">Browse</Button>

                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-hidden shadow-3 rounded-lg bg-white">
                <div class="p-4 sm:p-8 space-y-6">
                  <div class="flex">
                    <p class="text-lg font-bold text-gray-900 leading-none">
                      PMU Form Timeline
                    </p>
                  </div>

                  <div class="flow-root">
                    <ul role="list"
                      class="space-y-10 relative after:absolute after:z-0 after:top-0 after:left-2 after:h-[calc(100%-20px)] after:border-dashed after:border-peach after:border-l">
                      <li v-for="(activityItem) in activity" :key="activityItem.id" class="flex gap-x-3 relative">
                        <div class="flex h-4 w-4 items-center justify-center rounded-full bg-peach ring-8 ring-white">
                        </div>
                        <div class="text-sm text-gray-500 leading-none">
                          <span
                            class="text-xs block font-medium pb-1.5 text-grey-700 leading-none">{{ activityItem.date }}</span>
                          <span class="font-medium text-gray-900">{{ activityItem.store_name ? activityItem.store_name :
                              activityItem.cust_name
                          }}</span>
                          {{ ' ' }}
                          <template v-if="activityItem.store_name !== ''">
                            sent
                          </template>
                          <template v-else>
                            signed
                          </template>
                          {{ ' ' }}
                          <span class="font-medium text-gray-900">{{ activityItem.form_name }}</span>
                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="flex">
                <Button @click="deleteCustomerDailog = true" :btn-danger="true" :btn-primary="false" class="bg-transparent sm:px-6">Delete Customer</Button>
              </div>
            </div>


            <!-- Right column -->
            <div class="grid grid-cols-1 gap-6 pb-12 sm:pb-0">
              <div class="overflow-hidden shadow-3 rounded-lg bg-white">
                <div class="p-4 px-8 space-y-2">

                  <div class="flex items-center  relative">
                    <h4 class="text-lg font-bold text-gray-900 leading-none">
                      Customer
                    </h4>
                    <Button @click="editCustomerDailog = true" :btn-no-border="true" :btn-primary="false"
                      class="text-blue hover:text-grey-800 md:px-3 ml-auto -mr-3 text-base w-auto bg-transparent shadow-none">Edit</Button>
                  </div>
                  <div class="customer-details">
                    <p class="text-base text-gray-500">
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
                    <p class="text-sm text-grey-900 leading-tight">
                      No notes about this customer
                    </p>
                  </div>

                  <div class="mt-7 flex gap-2">
                    <Button @click="addNoteDailog = true" :btn-primary="true">Add Notes</Button>
                    <Button @click="allNotesDailog = true" :btn-no-border="true" :btn-primary="false" class="xs:px-4">All Notes</Button>

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
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Add note
      </DialogTitle>
     
        <form action="#" method="POST"> 
          <div class="space-y-6">
          <div class="space-y-1">
            <Textarea name="text-note" rows="4" id="textNote" label-text="Note" placeholder="I am being treated for, or was in the past for the following conditions (Please include allergies, especially to dye, pigment, or numbing agent.)" />
 
          </div>
          <div class="flex justify-start gap-x-3">
          <Button @click="addNoteDailog = false" type="submit" class="w-auto sm:px-6"  :btn-primary="true">Save</Button>
          <Button @click="addNoteDailog = false" class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50" type="button" :btn-outline="true" :btn-primary="false"  >Cancel</Button>
        </div>
      </div>
        </form>
       
      
    </div>
  </DialogPopup>

  <!-- All Notes dailog -->
  <DialogPopup :open-dialog="allNotesDailog" @closeModal="allNotesDailog = false">
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
     
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        All notes
      </DialogTitle>
      
      <div class="mt-6 flow-root">
    <ul role="list" class="-my-5 divide-y divide-gray-200">
      <li class="py-5">
        <div class="relative flex gap-5 justify-between">
          <div class="max-w-sm"  @click="editNoteDailog = true">
          <p class="text-sm text-grey-900 font-medium line-clamp-2 cursor-pointer">I am being treated for, or was in the past for the following conditions (Please include allergies, especially to dye, pigment, or numbing agent.)</p>
          </div>
          <div class="flex items-center">
          <button type="button" class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300">
            <trashIcon class="w-5 h-5" />
          </button>
        </div>
        </div>
      </li>  
      <li class="py-5">
        <div class="relative flex gap-5 justify-between">
          <div class="max-w-sm" >
          <p class="text-sm text-grey-900 font-medium line-clamp-2">Note text about cool new brows note text about cool new browse</p>
          </div>
          <div class="flex items-center">
          <button type="button" class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300">
            <trashIcon class="w-5 h-5" />
          </button>
        </div>
        </div>
      </li> 
      
      <li class="py-5">
        <div class="relative flex gap-5 justify-between">
          <div class="max-w-sm">
          <p class="text-sm text-grey-900 font-medium line-clamp-2">This customer was the best customer ever need to give her discount next time</p>
        </div>
          <div class="flex items-center">
          <button type="button" class="text-red p-2 rounded hover:bg-red-50 ease-in-out duration-300">
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
  <DialogPopup :open-dialog="editNoteDailog" @closeModal="editNoteDailog = false">
    <div class="space-y-6 relative max-w-full" :style="`width:600px`">
      <div class="space-y-3">
      <button type="button"  @click="editNoteDailog = false" class="flex items-center gap-1 font-medium"><ArrowLeft class="w-4 h-4" /><span>All notes</span></button>
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Edit note
      </DialogTitle>
    </div>
        <form action="#" method="POST">
          <div class="space-y-6">
          <div class="space-y-1">
            <Textarea name="text-note" rows="4" id="textNote" label-text="Note" placeholder="I am being treated for, or was in the past for the following conditions (Please include allergies, especially to dye, pigment, or numbing agent.)" />
 
          </div>
          <div class="flex justify-start gap-x-3">
          <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-8"  :btn-primary="true">Save</Button>
          <Button @click="editNoteDailog = false" class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50" type="button" :btn-outline="true" :btn-primary="false"  >Cancel</Button>
       </div>
      </div>
        </form>
         
      
    </div>
  </DialogPopup>

  <!-- Edit customer -->
  <DialogPopup :open-dialog="editCustomerDailog" @closeModal="editCustomerDailog = false">
    <div class="space-y-6 relative max-w-full" :style="`width:390px`">
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800">
        Edit Customer
      </DialogTitle>
             
          <form action="#" method="POST">
            <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput"
                autocomplete="phone" placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput"
                autocomplete="email" placeholder="juliabarneby@gmail.com" />
            </div>       
     
        <div class="flex justify-start gap-x-3">
          <Button @click="editCustomerDailog = false" type="submit" class="w-auto sm:px-8"  :btn-primary="true">Save</Button>
          <Button @click="editCustomerDailog = false" class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50" type="button" :btn-outline="true" :btn-primary="false"  >Cancel</Button>
        </div>
       </div>
  
   </form>
        </div>   
     
  </DialogPopup>

  <!-- Delete customer -->
  <DialogPopup :open-dialog="deleteCustomerDailog" @closeModal="deleteCustomerDailog = false">

    <div class="space-y-6 relative max-w-full" :style="`width:390px`">
      <div class="mx-auto text-center">
        <component :is="RemoveProfile" class="block h-16 w-16 text-grey-900 mx-auto" aria-hidden="true" />
      </div>
      <DialogTitle as="h3" class="flex-1 text-2.5xl font-bold leading-none text-grey-800 text-center">
        Delete Customer
      </DialogTitle>
      <div class="space-y-6 text-center">
        <div class="customer-details">
          <p>Are you sure you want to delete</p>
          <p class="font-bold">Customer Name?</p>
        </div>
        <div class="flex justify-center gap-x-3">
          <Button @click="deleteCustomerDailog = false" class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50" type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
          <Button @click="deleteCustomerDailog = false" class="w-auto sm:px-8 " type="button" :btn-danger="true" :btn-primary="false"  >Yes,
            delete</Button>
        </div>
      </div>
    </div>
  </DialogPopup>
</template>

<script setup>
import { ref, reactive } from 'vue';
import DialogPopup from '@/components/layout/DialogPopup.vue';
import RemoveProfile from '@/assets/icons/RemoveProfile.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import trashIcon from '@/assets/icons/trash.vue';
import ArrowLeft from '@/assets/icons/ArrowLeft.vue';
import Input from '@/components/layout/Input.vue';
import Button from '@/components/layout/Button.vue';
import Textarea from '@/components/layout/Textarea.vue';
import { DialogTitle } from '@headlessui/vue';

const addNoteDailog = ref(false);
const allNotesDailog = ref(false);
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
