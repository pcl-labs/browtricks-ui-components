<template>
  <div class="relative flex flex-col flex-1 w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12 flex flex-col">
      <div
        class="mb-7 pt-3 md:pt-0 md:pb-7 border-b border-solid border-gray-300"
      >
        <h2 class="flex-1 text-5xl font-bold leading-none text-grey-800 mb-5">
          Settings
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Team Name
                </h3>
                <p class="mt-1 text-xl text-grey-900">
                  The team's name and owner information.
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
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Team Address
                </h3>
                <p class="mt-1 text-xl text-grey-900">Add team address</p>
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
      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Add Team Member
                </h3>
                <p class="mt-1 text-xl text-grey-900">
                  Add a new team member to your team, allowing them to
                  collaborate with you.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="relative">
                      <Input id="email" type="email" label-text="Email" name="email" 
                          placeholder="Enter email" inputClasses=" " />
                      
                    </div>
                    <h3 class="text-grey-800 font-bold pt-4">Role</h3>
                    

                    <div class="space-y-0.5">
                      <CheckboxRadio id="administrator" inputClasses="rounded-full" labelClasses="font-semibold" type="radio" name="role"
                      label-text="Administrator" />
                      <p class="block text-sm text-grey-800 pl-8">Administrator users can perform any action.</p>
                    </div>
                    
                    <div class="space-y-0.5">
                      <CheckboxRadio id="editor" inputClasses="rounded-full" labelClasses="font-semibold" type="radio" name="role"
                      label-text="Editor" />
                      <p class="block text-sm text-grey-800 pl-8">Editor users have the ability to read, create, and
                          update.</p>
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

      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Connected Socials
                </h3>
                <p class="mt-1 text-xl text-grey-900">
                  Manage and remove your connected accounts.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="space-y-2">
                      <h3 class="text-lg font-bold text-grey-800">
                        Your connected accounts.
                      </h3>
                      <p class="text-xl text-grey-900">
                        You are free to connect any social accounts to your
                        profile and may remove any connected accounts at any
                        time. If you feel any of your connected accounts have
                        been compromised, you should disconnect them immediately
                        and change your password.
                      </p>
                    </div>

                    <div class="relative">
                      <table class="w-full">
                        <tr>
                          <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <GoogleLogo class="w-5" />
                              </div>
                              <div class="space-y-1">
                                <h3 class="font-bold text-grey-800">Google</h3>
                                <p class="text-gray-500 leadiing-none">
                                  Not connected.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="text-right">
                           

                            <Button class="w-auto sm:px-4" type="button" :btn-outline="true" :btn-primary="false">Connect</Button>

                          </td>
                        </tr>

                        <tr>
                          <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <FacebookLogo class="w-5" />
                              </div>
                              <div class="space-y-1">
                                <h3 class="font-bold text-grey-800">
                                  Facebook
                                </h3>
                                <p class="text-gray-500 leadiing-none">
                                  Not connected.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="text-right">
                            <Button class="w-auto sm:px-4" type="button" :btn-outline="true" :btn-primary="false">Connect</Button>

                          </td>
                        </tr>

                        <tr>
                          <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <TwitterLogo class="w-5" />
                              </div>
                              <div class="space-y-1">
                                <h3 class="font-bold text-grey-800">Twitter</h3>
                                <p class="text-gray-500 leadiing-none">
                                  Connected 1 day ago.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="text-right">
                            <p class="text-gray-500 leadiing-none">
                              Use Avatar as Profile Photo
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <InstagramLogo class="w-5" />
                              </div>
                              <div class="space-y-1">
                                <h3 class="font-bold text-grey-800">
                                  Instagram
                                </h3>
                                <p class="text-gray-500 leadiing-none">
                                  Not connected.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="text-right">
                            <Button class="w-auto sm:px-4" type="button" :btn-outline="true" :btn-primary="false">Connect</Button>

                          </td>
                        </tr>

                        <tr>
                          <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <TiktokLogo class="w-5" />
                              </div>
                              <div class="space-y-1">
                                <h3 class="font-bold text-grey-800">Tiktok</h3>
                                <p class="text-gray-500 leadiing-none">
                                  Not connected.
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="text-right">
                            <Button class="w-auto sm:px-4" type="button" :btn-outline="true" :btn-primary="false">Connect</Button>

                            
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-7 pb-7 border-b border-solid border-gray-300">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Create API Token
                </h3>
                <p class="mt-1 text-xl text-grey-900">
                  API tokens aloow third-party services to authentificate with
                  our application on your behalf.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="relative">
                      <Input id="number" type="text" label-text="Name" name="search" 
                          placeholder="4356789765234" inputClasses=" " />
                       
                    </div>
                    <div class="space-y-4">
                     

                      <CheckboxRadio id="create" inputClasses="rounded" type="checkbox" name="create"
                      label-text="Create" />

                      <CheckboxRadio id="read" inputClasses="rounded" type="checkbox" name="read"
                      label-text="Read" />

                      <CheckboxRadio id="delete" inputClasses="rounded" type="checkbox" name="delete"
                      label-text="Delete" />

                      <CheckboxRadio id="update" inputClasses="rounded" type="checkbox" name="update"
                      label-text="Update" />

 
                    </div>
                    <div class="flex justify-end items-center mt-3">
                     
                      <Button @click="editNoteDailog = false" type="submit" class="w-auto sm:px-6"  :btn-primary="true">Create</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="">
        <div class="coverflow-hidden divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Delete Team
                </h3>
                <p class="mt-1 text-xl text-grey-900">
                  Permanently delete this team.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg border border-grey-300 bg-white">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="space-y-2">
                      <p class="text-xl text-grey-900">
                        Once a team is deleted, all of its resources and data
                        will be permanently deleted. Before deleting this team,
                        please download any data or information regarding this
                        team that you wish to retain.
                      </p>
                    </div>

                    <div class="flex items-center mt-3 justify-start">                       
                      <Button @click="deleteCustomerDailog = true" :btn-danger="true" :btn-primary="false" class="bg-transparent sm:px-6"> Delete Team</Button>
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
import GoogleLogo from '@/assets/icons/GoogleLogo.vue';
import FacebookLogo from '@/assets/icons/FacebookLogo.vue';
import TwitterLogo from '@/assets/icons/TwitterLogo.vue';
import InstagramLogo from '@/assets/icons/InstagramLogo.vue';
import TiktokLogo from '@/assets/icons/TiktokLogo.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import CheckboxRadio from '@/components/CheckboxRadio.vue';
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
