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
      <div
          class="bg-white p-5 xs:rounded-lg sm:p-8  border-y xs:border border-grey-500 shadow-3 w-full"
        >
          <form class="space-y-4" action="#" method="POST">
            <div class="flex flex-col space-y-3">
              <h2
                class="text-start text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-none"
              >
                Forgot Password
              </h2>
              <p
                class="text-start text-base font-normal text-gray-500 leading-snug"
              >
                Enter your registered email address to receive password reset
                instructions.
              </p>
            </div>
            <div class="flex flex-col space-y-4">


              <Input id="email" type="email" label-text="Email" v-model="email" :on-change="handleInput" autocomplete="Email"/>


            
              <div class="flex items-center justify-between">
                <div class="flex items-center">

                  <Button type="submit" :on-click="consoleClick"> Reset password</Button>
 
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="text-center w-full">
          <router-link
            to="/login"
            class="text-base inline-flex font-medium text-blue hover:text-peach-4 transition-all ease-in-out duration-300"
            >Back to login</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "@/assets/logo-browtricks.png";
import Button from '@/components/layout/Button.vue';
import Input from '@/components/layout/Input.vue';
</script>
