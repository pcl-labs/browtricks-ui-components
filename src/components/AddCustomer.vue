<template>
  <div class="relative flex flex-col min-h-screen w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div class="mb-7 pt-3 md:pt-0">
        <h2 class="flex-1 text-5xl font-bold leading-none text-grey-800 pb-10">
          Add Customer
        </h2>
        <div class="coverflow-hidden divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-7">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-bold leading-6 text-grey-800">
                  Add contact information
                </h3>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <Input id="firstName" type="text" label-text="First Name" :on-change="handleInput"
                      autocomplete="firstName" placeholder="Julia" />
                    <Input id="lastName" type="text" label-text="Last Name" :on-change="handleInput"
                      autocomplete="lastName" placeholder="Barneby" />
                    <Input id="phone" type="text" label-text="Phone" :on-change="handleInput" autocomplete="phone"
                      placeholder="(888) 376-7160" />
                    <Input id="email" type="email" label-text="Email" :on-change="handleInput" autocomplete="email"
                      placeholder="juliabarneby@gmail.com" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-7 pt-7">
            <div class="md:col-span-1">
              <div class="relative">
                <h3 class="text-lg font-bold leading-6 text-grey-800">
                  Add a note
                </h3>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="overflow-hidden shadow-3 rounded-lg">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <Textarea name="text-note" rows="4" id="textNote" label-text="Note" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="pt-7 flex items-center mt-3">
            <Button @click="consoleClick" class="sm:min-w-40 " :btn-primary="true">Add customer</Button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
import Textarea from '@/components/Textarea.vue';

function consoleClick() {
  console.log('Button clicked');
}
</script>
