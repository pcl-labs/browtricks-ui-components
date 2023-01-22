<template>
 

      
        
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
          
    

</template>

<script setup>
import { ref, reactive } from 'vue';
import Button from '@/components/Button.vue'; 
import { DialogTitle } from '@headlessui/vue';
import uploadedPdf from '@/assets/Pre_and_Post_Care_Agreement.png';


  </script>
 