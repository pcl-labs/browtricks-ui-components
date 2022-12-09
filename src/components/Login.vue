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
            <svg class="w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M11.4987 0C10.6457 0.0589997 9.64869 0.604996 9.06769 1.31599C8.5377 1.96099 8.1017 2.91898 8.2717 3.84998C9.20369 3.87898 10.1667 3.31998 10.7247 2.59698C11.2467 1.92399 11.6417 0.971994 11.4987 0Z"
              />
              <path
                d="M14.8715 5.36908C14.0525 4.34209 12.9015 3.74609 11.8145 3.74609C10.3795 3.74609 9.77255 4.43309 8.77555 4.43309C7.74756 4.43309 6.96656 3.74809 5.72557 3.74809C4.50658 3.74809 3.20858 4.49309 2.38559 5.76708C1.2286 7.56107 1.4266 10.9341 3.30158 13.807C3.97258 14.835 4.86857 15.991 6.04057 16.001C7.08356 16.011 7.37756 15.332 8.79055 15.325C10.2035 15.317 10.4715 16.01 11.5125 15.999C12.6855 15.99 13.6305 14.709 14.3015 13.681C14.7825 12.944 14.9615 12.573 15.3345 11.741C12.6215 10.7081 12.1865 6.85008 14.8715 5.36908Z"
              />
            </svg>
            <span class="ml-2 hidden xs:block">Apple</span>
          </button>
          <button
            type="button"
            class="inline-flex w-full uppercase justify-center items-center rounded-md border border-peach bg-peach py-3 px-3 h-full text-13 font-semibold text-grey-800 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300"
          >
            <svg
              class="w-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M0 8C0 3.5888 3.5888 0 8 0C9.78156 0 11.4678 0.573181 12.8765 1.6576L11.0174 4.07253C10.1464 3.40206 9.10301 3.04762 8 3.04762C5.26926 3.04762 3.04762 5.26926 3.04762 8C3.04762 10.7307 5.26926 12.9524 8 12.9524C10.1994 12.9524 12.0684 11.5114 12.7125 9.52381H8V6.47619H16V8C16 12.4112 12.4112 16 8 16C3.5888 16 0 12.4112 0 8Z"
              />
            </svg>
            <span class="ml-2 hidden xs:block">Google</span>
          </button>
          <button
            type="button"
            class="inline-flex w-full uppercase justify-center items-center rounded-md border border-peach bg-peach py-3 px-3 h-full text-13 font-semibold text-grey-800 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300"
          >
            <svg class="w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.23896 16V8.70218H11.6875L12.0549 5.85725H9.23896V4.04118C9.23896 3.21776 9.46667 2.65661 10.6488 2.65661L12.154 2.65599V0.111384C11.8937 0.0775563 11.0002 0 9.96017 0C7.78849 0 6.30172 1.32557 6.30172 3.75942V5.85725H3.8457V8.70218H6.30172V16H9.23896Z"
              /></svg
            ><span class="ml-2 hidden xs:block">Facebook</span>
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
                  required=""
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
                  required=""
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
                  class="flex w-full justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-15 font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
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

<script>
export default {
  name: "LoginAccount",
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$bg-gray: #dfdfdf;
.bg-gray {
  background-color: $bg-gray;
}
.login-account-wrapper {
  background: $bg-gray;
}
</style>
