<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-shrink-0 bg-white py-1.5 shadow relative z-30">
      <div class="mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-5 lg:pr-14">
        <router-link
          to="/home"
          class="relative px-2 sm:px-0 flex h-16 items-center justify-between"
        >
          <img :src="logo" alt="image" class="mx-auto" />
        </router-link>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center pt-4 xs:py-8 relative">
      <div
        class="flex flex-col justify-center items-center max-w-sm mx-auto w-full xs:px-3 sm:px-4 gap-6"
      >
        <h2
          class="text-center text-13 font-semibold tracking-tight leading-none text-black uppercase"
        >
          LOGIN WITH
        </h2>
        <div
          class="flex flex-col xs:grid xs:grid-cols-3 gap-2 w-full max-w-64 xs:max-w-none"
        >
          <Button type="button" @click="consoleClick" :btn-primary="true" class="flex-row"
            ><AppleIcon class="w-5" /><span>Apple</span></Button
          >

          <Button type="button" @click="consoleClick" :btn-primary="true" class="flex-row">
            <GoogleIcon class="w-5" /><span>Google</span></Button
          >

          <Button type="button" @click="consoleClick" :btn-primary="true" class="flex-row">
            <FacebookIcon class="w-5" /><span>Facebook</span></Button
          >
        </div>
        <div class="relative w-full">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full h-px bg-grey-300"></div>
          </div>
          <div class="relative flex justify-center text-lg">
            <span class="bg-grey-200 px-4 text-grey-900 font-bold">OR</span>
          </div>
        </div>
        <div
          class="bg-white p-5 xs:rounded-lg sm:p-8 border-y xs:border border-grey-500 shadow-3 w-full"
        >
          <form class="space-y-6" action="#" method="POST">
            <Input
              id="email"
              type="email"
              label-text="Username"
              v-model="email"
              :on-change="handleInput"
              autocomplete="username"
            />            

            <div class="relative">
              <Input
                id="password"
                v-bind:type="[showPassword ? 'text' : 'password']"
                label-text="Password"
                v-model="password"
                :on-change="handleInput"
                autocomplete="Password"
                inputClasses="pr-10"
              />
              <button
                type="button"
                class="absolute top-5 right-0 py-4 px-4 text-grey-900"
                @click="showPassword = !showPassword"
              >
                <Eye v-if="!showPassword" class="w-5" />
                <EyeOff v-else class="w-5" />
              </button>
            </div>


            <div class="flex flex-wrap gap-2 items-center justify-between">
              <div class="flex items-center w-full xs:w-auto">
                <!-- This is for emit method -->
                  <Button @click="consoleClick" :btn-primary="true" class="">Login</Button>
              </div>

              <div class="text-lg text-grey-900 font-normal">
                <span>Don’t have an account?</span>
                <router-link
                  to="/signup"
                  class="text-xl inline-flex font-medium text-blue hover:text-peach-300 transition-all ease-in-out duration-300 ml-2"
                  >Sign Up</router-link
                >
              </div>
            </div>
          </form>
        </div>
        <div class="text-center w-full">
          <router-link
            to="/forgot-password"
            class="text-xl inline-flex font-medium text-blue hover:text-peach-300 transition-all ease-in-out duration-300"
            >Forgot password?</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/logo-browtricks.png';
import AppleIcon from '@/assets/icons/Apple.vue';
import GoogleIcon from '@/assets/icons/Google.vue';
import FacebookIcon from '@/assets/icons/Facebook.vue';
import Button from '@/components/Button.vue';
import Input from '@/components/Input.vue';
import Eye from '@/assets/icons/Eye.vue';
import EyeOff from '@/assets/icons/EyeOff.vue';

function consoleClick() {
  console.log('Button clicked');
}

// Test input change
const email = ref('');
function handleInput(e) {
  e.preventDefault();
  console.log('input value:', e.target.value);
}

const showPassword = ref(false); 

</script>
