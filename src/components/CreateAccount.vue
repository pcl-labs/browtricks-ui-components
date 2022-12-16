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
          class="text-center text-sm font-semibold tracking-tight leading-none text-black uppercase"
        >
          Signup WITH
        </h2>
        <div
          class="flex flex-col xs:grid xs:grid-cols-3 gap-2 w-full max-w-64 xs:max-w-none"
        >
          <Button type="button" :on-click="consoleClick" class="flex-row"
            ><AppleIcon class="w-5" /><span>Apple</span></Button
          >

          <Button type="button" :on-click="consoleClick" class="flex-row">
            <GoogleIcon class="w-5" /><span>Google</span></Button
          >

          <Button type="button" :on-click="consoleClick" class="flex-row">
            <FacebookIcon class="w-5" /><span>Facebook</span></Button
          >
        </div>
        <div class="relative w-full">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full h-px bg-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-grey-200 px-4 text-gray-900 font-bold">OR</span>
          </div>
        </div>
        <div
          class="bg-white p-5 xs:rounded-lg sm:p-8 border-y xs:border border-grey-500 shadow-3 w-full"
        >
          <h2
            class="text-start text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 pb-5"
          >
            Create an Account
          </h2>
          <form class="space-y-6" action="#" method="POST">
            <Input
              id="first-name"
              type="text"
              label-text="First Name"
              v-model="firstName"
              :on-change="handleInput"
              autocomplete="First Name"
            />
            <Input
              id="last-name"
              type="text"
              label-text="Last Name"
              v-model="lastName"
              :on-change="handleInput"
              autocomplete="Last Name"
            />

            <div class="space-y-1">
              <label class="lblock text-sm font-normal text-grey-900 text-start"
                >Phone Number</label
              >
              <div class="relative mt-1 rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <label for="country" class="sr-only">Country</label>
                  <select
                    id="country"
                    name="country"
                    autocomplete="country"
                    class="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach text-sm invalid:bg-red/5 invalid:border-red"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                </div>
                <input
                  type="tel"
                  autocomplete="Phone"
                  class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 pl-14 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach text-sm invalid:bg-red/5 invalid:border-red peer"
                />
                <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
                  <b>Error:</b> Invalid or incorrect Username Invalid or
                  incorrect password
                </p>
              </div>
            </div>

            <Input
              id="email-address"
              type="email"
              label-text="Email address"
              v-model="email"
              :on-change="handleInput"
              autocomplete="Email"
            />
            <Input
              id="username"
              type="text"
              label-text="Username"
              v-model="username"
              :on-change="handleInput"
              autocomplete="Username"
            />
            <div class="relative">
              <Input
                id="password"
                v-bind:type="[showPassword ? 'text' : 'password']"
                label-text="Password"
                v-model="password"
                :on-change="handleInput"
                autocomplete="Password"
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
            <div class="relative">
              <Input
                id="repeat-password"
                v-bind:type="[showPasswordRptr ? 'text' : 'password']"
                label-text="Repeat Password"
                v-model="email"
                :on-change="handleInput"
                autocomplete="password"
              />
              <button
                type="button"
                class="absolute top-5 right-0 py-4 px-4 text-grey-900"
                @click="showPasswordRptr = !showPasswordRptr"
              >
                <Eye v-if="!showPasswordRptr" class="w-5" />
                <EyeOff v-else class="w-5" />
              </button>
            </div>

            <div
              class="flex flex-wrap gap-2 items-center justify-center xs:justify-between"
            >
              <div class="flex items-center w-full xs:w-auto">
                <!-- This is for emit method -->
                <Button type="submit" @emitclick="consoleClick">
                  Let's get started</Button
                >
              </div>

              <div class="text-sm text-grey-900 font-normal">
                <span>Already have an account?</span>
                <router-link
                  to="/login"
                  class="text-base inline-flex font-medium text-blue hover:text-peach-4 transition-all ease-in-out duration-300 ml-2"
                  >Login</router-link
                >
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '../assets/logo-browtricks.png';
import AppleIcon from '@/assets/icons/Apple.vue';
import GoogleIcon from '@/assets/icons/Google.vue';
import FacebookIcon from '@/assets/icons/Facebook.vue';
import Eye from '@/assets/icons/Eye.vue';
import EyeOff from '@/assets/icons/EyeOff.vue';
import Button from './layout/Button.vue';
import Input from './layout/Input.vue';

const showPassword = ref(false);
const showPasswordRptr = ref(false);
</script>
