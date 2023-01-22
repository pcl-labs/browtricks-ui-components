<template>
   <!-- Details contents -->
   <div class="overflow-hidden rounded-xl divide-y divide-grey-300 w-full">
        <div class="p-3 md:p-5 xl:px-14 xl:py-12 flex flex-col space-y-5">
          <div class="flex items-center px-3 pt-3 md:pt-0">
            <h2 class="flex-1 text-3xl sm:text-5xl font-bold leading-none text-grey-800 mr-auto">Pre and Post Care
              Agreement</h2>
          </div>
          <div class="md:grid md:grid-cols-12 gap-5 flex flex-col-reverse ">
            <div class="md:col-span-7 lg:col-span-8 xl:col-span-9">
              <div class="relative p-5 flex flex-col w-full overflow-hidden rounded-lg border border-grey-300 shadow-3 bg-white">
                <iframe
                  src="https://www.w3docs.com/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf"
                  frameborder="0" class="object-cover aspect-square w-full h-1/4"></iframe>
              </div>
              <div class="flex gap-x-3 mt-5">
                <Button type="submit" :btn-primary="true" @click="reviewPmuForm = true "   class="w-auto sm:px-6 ">
               Send PMU form</Button>
               <Button type="submit" :btn-outline="true" :btn-primary="false" class="w-auto sm:px-6 bg-white">Print</Button>
               </div>
             
            </div>
            <div class="md:col-span-5 lg:col-span-4 xl:col-span-3">
              <div class="relative p-5 flex flex-col w-full space-y-2 rounded-lg border border-grey-300 shadow-3 bg-white">
                <div class="flex items-center">
                  <h4 class="text-xl font-bold text-grey-800 leading-none">Send to customer</h4>
                  <div class="ml-auto" v-if="isSendToCustomer">
                    <Menu as="div" class="relative inline-block text-left">
                      <MenuButton
                        class="inline-flex items-center rounded-md border-0 border-grey-700 text-lg font-medium text-grey-800 shadow-0 hover:bg-peach-500 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 hover:border-peach-500"
                        :class="[
                          active
                            ? 'bg-peach-500 border-peach-500'
                            : 'border-grey-700 bg-white',
                          'block px-2 py-0.5 text-lg text-left ease-in-out duration-300 w-full',
                        ]">
                        <MoreHorizontal class="w-4" />
                      </MenuButton>
                      <transition enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-in"
                        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems
                          class="absolute right-0 w-52 z-10 mt-1 origin-top-right rounded-md bg-white shadow-3 ring-1 ring-black/5 focus:outline-none">
                          <div class="py-1">
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                            ]" @click="isEditCustomer = true">
                            Edit customer information
                            </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <button :class="[
                              active
                                ? 'bg-gray-100 text-red'
                                : 'text-red',
                              'block px-4 py-2 text-lg text-left ease-in-out duration-300 w-full',
                            ]">
                            Remove customer
                            </button>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                </div>


                <div v-if="isSendToCustomer" >
                  <ul role="list" class="divide-y divide-grey-300">
                    <li class="flex" @click="isEditCustomer = true">
                      <div class="ml-0">
                        <p class="text-sm font-semibold text-grey-900">Carla Siphron</p>
                        <p class="text-sm text-grey-700">(469) 578-8248</p>
                        <p class="text-sm text-grey-700">carlasiphron@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="relative flex-1 cursor-pointer" v-if="!isSendToCustomer">
                  <div class="relative ">
                    <div class="pointer-events-none absolute inset-y-0 top-0 left-4 flex items-center" >
                    <MagnifyingGlassIcon class="h-4 w-4 text-grey-900" aria-hidden="true" />
                    </div>
                    <Input id="search" type="text" label-text="" name="search" v-model="password" placeholder="Search for client" 
                  inputClasses="pl-10 border-peach-500 cursor-pointer"  @click="isOpenCustomers = !isOpenCustomers;" readonly />
                </div>


                <div class="absolute w-full mt-1 p-5 pb-3 flex flex-col overflow-hidden md:rounded-lg border border-grey-300 shadow-3 bg-white"
                v-if="isOpenCustomers"  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95">
                <div @click="isCreateCustomer = true; isOpenCustomers = false"
                  class="cursor-pointer rounded-md border border-transparent py-2 px-4 text-sm font-semibold text-grey-800 shadow-sm hover:bg-peach-100 focus:outline-none outline-none focus:ring-2 focus:ring-peach-500 focus:ring-offset-2 ease-in-out duration-300 inline-flex leading-none min-h-10 items-center border-peach-500 bg-transparent hover:border-peach-500 w-full">
                  <div class="flex items-center overflow-hidden">
                    <PlusCircleFill class="w-4 mr-2 shrink-0" />
                    <span class="truncate">Create a new customer</span>
                  </div>
                </div>
                <div class="max-h-80 overflow-auto on-hover-scroll -mx-5 pt-2">
                <ul role="list" class="divide-y divide-grey-300 ">
                  <li v-for="person in people" :key="person.email" @click="isSendToCustomer = true; isOpenCustomers = false" class="flex py-4 cursor-pointer hover:bg-grey-200 px-5 ease-in-out duration-300">
                    <div class="ml-0">
                      <p class="text-sm font-semibold text-grey-800">{{ person.name }}</p>
                      <p class="text-sm text-grey-700">{{ person.tel }}</p>
                      <p class="text-sm text-grey-700">{{ person.email }}</p>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
                
               
              </div>
             
             
            </div>
            </div>
          </div>
        </div>
      </div>


 <!-- Start Create customer -->
 <DialogPopup :open-dialog="isCreateCustomer" @closeModal="isCreateCustomer = false">
      <div class="space-y-6 relative max-w-full" :style="`width:390px`">
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800">
          Create customer
        </DialogTitle>

        <form action="#" method="POST">
          <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>

            <div class="flex justify-start gap-x-3">
              <Button @click="isCreateCustomer = false" type="submit" class="w-auto sm:px-8"
                :btn-primary="true">Save customer</Button>
              <Button @click="isCreateCustomer = false"
                class="w-auto sm:px-8 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
                type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </DialogPopup>
    <!-- End Create customer -->

    <!-- Start Edit customer -->
    <DialogPopup :open-dialog="isEditCustomer" @closeModal="isEditCustomer = false">
      <div class="space-y-6 relative max-w-full" :style="`width:450px`">
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800">
          Edit customer
        </DialogTitle>

        <form action="#" method="POST">
          <div class="space-y-6">
            <div class="sm:overflow-hidden sm:rounded-md space-y-3 p-1">
              <div class="flex flex-col gap-3 xs:grid grid-cols-2">
              <Input class="" id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                autocomplete="firstName" placeholder="Julia" />
              <Input class="" id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                autocomplete="lastName" placeholder="Barneby" />
              </div>
              <Input class="" id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                placeholder="(888) 376-7160" />
              <Input class="" id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                placeholder="juliabarneby@gmail.com" />
            </div>

            <div class="flex justify-end gap-x-3">
              <Button @click="isEditCustomer = false" type="submit" class="w-auto sm:px-6"
                :btn-primary="true">Done</Button>
              <Button @click="isEditCustomer = false"
                class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
                type="button" :btn-outline="true" :btn-primary="false">Cancel</Button>
            </div>
          </div>
        </form>
      </div>
    </DialogPopup>
    <!-- End Edit customer -->

    <!-- Send customer -->
    <DialogPopup :open-dialog="confirmSendPMUform" @closeModal="confirmSendPMUform = false">
      <div class="space-y-6 relative max-w-full" :style="`width:300px`">
        <div class="mx-auto text-center">
          <component :is="document" class="block h-16 w-16 text-grey-700 mx-auto" aria-hidden="true" />
        </div>
        <DialogTitle as="h3" class="flex-1 text-5xl font-bold leading-none text-grey-800 text-center">
        </DialogTitle>
        <div class="space-y-6 text-center">
          <div class="customer-details max-w-60 mx-auto">
            <p class="text-xl">Send <span class="font-bold">Pre and Post Care Agreement</span> to  <span class="font-bold">Phil Lucus?</span></p>
          </div>
          <div class="flex justify-center gap-x-3">
            <Button @click="$router.push('/pmu'), confirmSendPMUform = false" class="w-auto sm:px-6 " type="button" :btn-outline="true" :btn-primary="false">Yes, Send Forms</Button>
            <Button @click="confirmSendPMUform = false" class="w-auto sm:px-6 " type="button" :btn-danger="true" :btn-primary="false">Cancel</Button>
          </div>
        </div>
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

      
        <div class="space-y-6">
          <PmuFormPreview />
          <div class="flex justify-between items-center flex-wrap gap-2">
           
          <div class="flex justify-end gap-x-3 ml-auto">
            <Button
              @click="reviewPmuForm = false"
              class="w-auto sm:px-6 hover:text-red hover:border-red hover:bg-transparent hover:bg-red-50"
              type="button"
              :btn-outline="true"
              :btn-primary="false"
              >Cancel</Button
            >
            <Button
              @click="reviewPmuForm = false; confirmSendPMUform = true "
              type="button"
              class="w-auto sm:px-6"
              :btn-primary="true"
              >Send PMU Form</Button
            >
          
          </div>
          </div>
        </div>
   
    </div>
  </DialogPopup>


  </template>
  
 
<script setup>
import { reactive, ref } from 'vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon.vue';
import PlusCircleFill from '@/assets/icons/PlusCircleFill.vue';
import document from '@/assets/icons/document.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import MoreHorizontal from '@/assets/icons/MoreHorizontal.vue';
import DialogPopup from '@/components/DialogPopup.vue'; 
import PmuFormPreview from '@/components/PmuFormPreview.vue';
const isOpenCustomers = ref(false);
const isSendToCustomer = ref(false);
const isCreateCustomer = ref(false);
const isEditCustomer = ref(false);
const confirmSendPMUform = ref(false);
const reviewPmuForm = ref(false);
const people = [
  { id: 1, name: 'Leslie Alexander', tel: '(469) 578-8248', email: 'carlasiphron@gmail.com' },
  { id: 2, name: 'Michael Foster', tel: '(469) 578-8248', email: 'michael@gmail.com' },
  { id: 3, name: 'Dries Vincent', tel: '(469) 578-8248', email: 'dries@gmail.com' },
  { id: 4, name: 'Lindsay Walton', tel: '(469) 578-8248', email: 'lindsay@gmail.com' },
]

</script>
