<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-shrink-0 bg-white py-1.5 shadow relative z-30">
      <div class="mx-auto w-full max-w-8xl px-2 sm:px-4 lg:px-5 lg:pr-14">
        <router-link
          to="/home"
          class="relative px-2 sm:px-0 flex h-16 items-center justify-between"
        >
          <img src="../assets/logo.png" alt="image" class="mx-auto" />
        </router-link>
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center py-8 relative">
      <div class="flex flex-col justify-center items-center max-w-sm mx-auto w-full px-3 sm:px-4 gap-6">
        <div class="bg-white p-5 rounded-lg sm:p-8 border border-grey-500 shadow-3 w-full">
          <form class="space-y-4" action="#" method="POST">
            <div class="flex flex-col space-y-3">
              <h2 class="text-start text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-none ">Forgot Password <Icon source={List} /></h2>
            <p class="text-start text-base font-normal text-gray-500 leading-snug">Enter your registered email address to receive password reset instructions.</p>
            </div>
            <div class="flex flex-col space-y-4">
              <div class="block">
                <label for="email" class="block text-sm font-normal text-grey-900 text-start">Email</label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-400 shadow-sm focus:border-peach focus:outline-none focus:ring-peach sm:text-sm invalid:bg-red/5 invalid:border-red peer" />
                <p class="text-red text-xs peer-invalid:block hidden pt-0.5"><b>Error:</b> Invalid email</p>
              </div>
              </div>
              <div class="flex items-center justify-between">
              <div class="flex items-center">
                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Reset password</button>
              </div>
            </div>  
            </div>
          </form>
        </div>
        <div class="text-center w-full">
          <router-link to="/login" class="text-base inline-flex font-medium text-blue hover:text-peach-4 transition-all ease-in-out duration-300">Back to login</router-link>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { List, Icon } from '@ownego/polaris-vue';
export default {
  name: 'ForgotPassword',
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg-gray : #DFDFDF;
.bg-gray {
  background-color: $bg-gray;
}
.forgot-password-wrapper {
  background: $bg-gray;
}
</style>
