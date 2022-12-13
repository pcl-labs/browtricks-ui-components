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
    <div class="flex-1 flex flex-col justify-center py-3 relative">
      <div
        class="flex flex-col justify-center items-center max-w-sm mx-auto w-full px-3 sm:px-4 gap-6"
      >
        <h2
          class="text-center text-13 font-semibold tracking-tight leading-none text-black uppercase"
        >
          LOGIN WITH
        </h2>
        <div class="grid grid-cols-3 gap-2 w-full max-w-64 xs:max-w-none">
          <button
            type="button"
            class="inline-flex w-full uppercase justify-center items-center rounded-md border border-peach bg-peach py-3 px-3 h-full text-13 font-semibold text-grey-800 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300"
          >
            <AppleIcon class="w-5" />
            <span class="ml-2 hidden xs:block">Apple</span>
          </button>
          <button
            type="button"
            class="inline-flex w-full uppercase justify-center items-center rounded-md border border-peach bg-peach py-3 px-3 h-full text-13 font-semibold text-grey-800 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300"
          >
            <GoogleIcon class="w-5" />
            <span class="ml-2 hidden xs:block">Google</span>
          </button>
          <button
            type="button"
            class="inline-flex w-full uppercase justify-center items-center rounded-md border border-peach bg-peach py-3 px-3 h-full text-13 font-semibold text-grey-800 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300"
          >
            <FacebookIcon class="w-5" />
            <span class="ml-2 hidden xs:block">Facebook</span>
          </button>
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
          class="bg-white p-5 rounded-lg sm:p-8 border border-grey-500 shadow-3 w-full"
        >
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label
                for="username"
                class="block text-sm font-normal text-grey-900 text-start"
                >Username</label
              >
              <div class="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autocomplete="username"
                  class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm invalid:bg-red/5 invalid:border-red peer"
                />
                <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
                  <b>Error:</b> Invalid or incorrect Username
                </p>
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-normal text-grey-900 text-start"
                >Password</label
              >
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm invalid:bg-red/5 invalid:border-red peer"
                />
                <p class="text-red text-xs peer-invalid:block hidden pt-0.5">
                  <b>Error:</b> Invalid or incorrect password
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-2 items-center justify-between">
              <div class="flex items-center w-full xs:w-auto">
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
                >
                  Login
                </button>
              </div>

              <div class="text-sm text-grey-900 font-normal">
                <span>Don’t have an account?</span>
                <router-link
                  to="/signup"
                  class="text-base inline-flex font-medium text-blue hover:text-peach-4 transition-all ease-in-out duration-300 ml-2"
                  >Sign Up</router-link
                >
              </div>
            </div>
          </form>
        </div>
        <div class="text-center w-full">
          <router-link
            to="/forgot-password"
            class="text-base inline-flex font-medium text-blue hover:text-peach-4 transition-all ease-in-out duration-300"
            >Forgot password?</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/logo-browtricks.png";
import AppleIcon from "@/assets/icons/Apple.vue";
import GoogleIcon from "@/assets/icons/Google.vue";
import FacebookIcon from "@/assets/icons/Facebook.vue";
</script>
