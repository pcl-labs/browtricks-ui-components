<template>
    <div class="relative flex flex-col flex-1 w-full">
      <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12 flex flex-col">
         <!-- Team owner -->
        <div class="mb-7 pt-3 md:pt-0 md:pb-7 border-b border-solid border-grey-300" >
          <h2 class="flex-1 text-5xl font-bold leading-none text-grey-800 mb-5">
            Settings
          </h2>
          <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-semibold leading-6 text-grey-800">
                    User Name
                  </h3>
                  <p class="mt-1 text-xl text-grey-900">
                    Your name and information
                  </p>
                </div>
              </div>
              <div class="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div class="shadow-3 rounded-lg overflow-hidden border border-grey-300 bg-white">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                      <div class="space-y-3">
                        <h6
                          for="company-website"
                          class="block text-lg text-grey-800 font-medium"
                        >
                          Team Owner
                        </h6>
                        <div class="flex items-center">
                          <img
                            src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=56&h=56&q=80"
                            class="rounded-full"
                          />
                          <div class="ml-2">
                            <h5 class="font-bold text-grey-800 text-lg">Koko</h5>
                            <p class="text-lg font-medium text-grey-800">
                              design.mailboxx@gmail.com
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="">
                        <Input id="team-name" type="text" label-text="Team name" name="team-name" 
                            placeholder="Team name" inputClasses=" " />   
                      </div>
                      <div class="flex items-center justify-end mt-3">                       
                        <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6"  :btn-primary="true">Save</Button>
                      </div>  
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Phone number -->
        <div class="mb-7 pb-7 border-b border-solid border-grey-300">
          <div class="coverflow-hidden divide-y divide-grey-300">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-semibold leading-6 text-grey-800">
                    Phone Number
                  </h3>
                  <p class="mt-1 text-xl text-grey-900">
                    Verify your phone number to receive PMU forms via SMS
                  </p>
                </div>
              </div>
              <div class="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                      <div class="relative">
                        <Input id="phone" type="email" label-text="Phone number" name="phone" 
                            placeholder="4356789765234" inputClasses=" " />
                      </div>
                      <div class="flex items-center justify-end mt-3">                       
                        <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6"  :btn-primary="true">Add</Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Team address -->
        <div class="mb-7 pb-7 border-b border-solid border-grey-300">
          <div class="coverflow-hidden divide-y divide-grey-300">
            <div class="md:grid md:grid-cols-3 md:gap-6">
              <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                  <h3 class="text-lg font-semibold leading-6 text-grey-800">
                    Address
                  </h3>
                  <p class="mt-1 text-xl text-grey-900">Add your address</p>  
                </div>
              </div>
              <div class="mt-5 md:col-span-2 md:mt-0">
                <form action="#" method="POST">
                  <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                      <div class="relative">
                        <Input id="Address" type="text" label-text="Address" name="Address" 
                            placeholder="Address" inputClasses=" " />
                        
                      </div>
  
                      <div class="relative">
                        <Input id="city" type="text" label-text="City" name="city" 
                            placeholder="City" inputClasses=" " />
                        
                      </div>
  
                      <div class="relative">
                        <Input id="cuntry" type="text" label-text="Country" name="country" 
                            placeholder="Country" inputClasses=" " />
                       
                      </div>
                      <div class="relative">
                        <Input id="postcode" type="text" label-text="ZIP/Postcode" name="postcode" 
                            placeholder="ZIP/Postcode" inputClasses="w-40" />
                         
                      </div>
  
  
                      <div class="flex items-center justify-end mt-3">                       
                        <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6"  :btn-primary="true">Save</Button>
                      </div>
   
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Button from '@/components/Button.vue';
  import Input from '@/components/Input.vue';  
  const roles = [
    {
      id: '1',
      name: 'Administrator',
      active: 'false',
      description: 'Administrator users can perform any action.',
    },
    {
      id: '2',
      name: 'Editor',
      active: 'true',
      description: 'Editor users have the ability to read, create, and update.',
    },
  ];
  
  const socials = [
    {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner',
      imageUrl:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Floyd Miles',
      handle: 'floydmiles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Selman',
      handle: 'emilyselman',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Kristin Watson',
      handle: 'kristinwatson',
      imageUrl:
        'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];
  </script>
  