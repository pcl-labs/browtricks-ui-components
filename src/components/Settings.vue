<template>
  <div class="flex-1 relative flex flex-col w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div
        class="mb-7 pt-3 md:pt-0 md:pb-7 border-b border-solid border-gray-300"
      >
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 mb-5">
          Settings
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Team Name
                </h3>
                <p class="mt-1 text-md text-grey-900">
                  The team's name and owner information.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="space-y-3">
                      <h6
                        for="company-website"
                        class="block text-sm text-grey-800 font-medium"
                      >
                        Team Owner
                      </h6>
                      <div class="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=56&h=56&q=80"
                          class="rounded-full"
                        />
                        <div class="ml-2">
                          <h5 class="font-bold text-grey-800 text-sm">Koko</h5>
                          <p class="text-sm font-medium text-grey-800">
                            design.mailboxx@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="">
                      <label
                        for="team-name"
                        class="block text-sm font-medium text-grey-800"
                        >Team name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="team-name"
                          id="team-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="koko team"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please choose your team name
                      </p>
                    </div>
                    <div class="flex items-center mt-3">
                      <button
                        type="submit"
                        class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
                      >
                        Save
                      </button>
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
                  Team Address
                </h3>
                <p class="mt-1 text-md text-grey-900">Add team address</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="relative">
                      <label
                        for="team-name"
                        class="block text-sm font-medium text-grey-800"
                        >Address</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="team-name"
                          id="team-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="Address"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        Please fill your address
                      </p>
                    </div>

                    <div class="relative">
                      <label
                        for="team-name"
                        class="block text-sm font-medium text-grey-800"
                        >City</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="team-name"
                          id="team-name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          placeholder="City"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        City
                      </p>
                    </div>

                    <div class="relative">
                      <label
                        for="team-name"
                        class="block text-sm font-medium text-grey-800"
                        >Country</label
                      >
                      <div class="mt-1">
                        <select
                          name="team-name"
                          id="team-name"
                          class="block w-full rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                        >
                          <option>United States</option>
                        </select>
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        City
                      </p>
                    </div>
                    <div class="relative">
                      <label
                        for="team-name"
                        class="block text-sm font-medium text-grey-800"
                        >ZIP/Postcode</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="team-name"
                          id="team-name"
                          class="block appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer w-40"
                          required
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block"
                        id="team-description"
                      >
                        City
                      </p>
                    </div>

                    <div class="flex items-center mt-3">
                      <button
                        type="submit"
                        class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
                      >
                        Save
                      </button>
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
                  Add Team Member
                </h3>
                <p class="mt-1 text-md text-grey-900">
                  Add a new team member to your team, allowing them to
                  collaborate with you.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="relative">
                      <label
                        for="Email"
                        class="block text-sm font-medium text-grey-800"
                        >Email</label
                      >
                      <div class="mt-1">
                        <input
                          type="Email"
                          name="Email"
                          id="Email"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          required
                        />
                      </div>
                      <p
                        class="mt-2 text-xs text-gray-900 invalid:text-red peer-required:text-red"
                        id="team-description"
                      >
                        Please provide the email address of the person you would
                        like to add to this team.
                      </p>
                    </div>
                    <h3 class="text-grey-800 font-bold pt-4">Role</h3>
                    <div class="relative flex gap-3 items-start">
                      <input
                        type="radio"
                        name="role"
                        id="administrator"
                        class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800"
                      />
                      <label
                        for="administrator"
                        class="block text-sm text-grey-800"
                      >
                        <b class="block font-semibold">Administrator</b>
                        <span>Administrator users can perform any action.</span>
                      </label>
                    </div>
                    <div class="relative flex gap-3 items-start">
                      <input
                        type="radio"
                        name="role"
                        id="editor"
                        class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800"
                      />
                      <label for="editor" class="block text-sm text-grey-800">
                        <b class="block font-semibold">Editor</b>
                        <span
                          >Editor users have the ability to read, create, and
                          update.</span
                        >
                      </label>
                    </div>

                    <div class="flex items-center mt-3">
                      <button
                        type="submit"
                        class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
                      >
                        Add
                      </button>
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
                  Connected Socials
                </h3>
                <p class="mt-1 text-md text-grey-900">
                  Manage and remove your connected accounts.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="space-y-2">
                      <h3 class="text-sm font-bold text-grey-800">
                        Your connected accounts.
                      </h3>
                      <p class="text-md text-grey-900">
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
                            <button
                              type="button"
                              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
                            >
                              Connect
                            </button>
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
                            <button
                              type="button"
                              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
                            >
                              Connect
                            </button>
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
                            <button
                              type="button"
                              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
                            >
                              Connect
                            </button>
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
                            <button
                              type="button"
                              class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach"
                            >
                              Connect
                            </button>
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
                <p class="mt-1 text-md text-grey-900">
                  API tokens aloow third-party services to authentificate with
                  our application on your behalf.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="relative">
                      <label
                        for="name"
                        class="block text-sm font-medium text-grey-800"
                        >Name</label
                      >
                      <div class="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer"
                          required
                          placeholder="4356789765234"
                        />
                      </div>
                      <p
                        class="hidden mt-2 text-xs text-red peer-required:block peer-invalid:block"
                        id="team-description"
                      >
                        4356789765234
                      </p>
                    </div>
                    <div class="space-y-4">
                      <div class="relative flex gap-3 items-start">
                        <input
                          type="checkbox"
                          id="create"
                          class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach"
                        />
                        <label
                          for="create"
                          class="block text-sm text-grey-800 flex-1"
                        >
                          Create
                        </label>
                      </div>
                      <div class="relative flex gap-3 items-start">
                        <input
                          type="checkbox"
                          id="read"
                          class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach"
                        />
                        <label
                          for="read"
                          class="block text-sm text-grey-800 flex-1"
                        >
                          Read
                        </label>
                      </div>
                      <div class="relative flex gap-3 items-start">
                        <input
                          type="checkbox"
                          id="delete"
                          class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach"
                        />
                        <label
                          for="delete"
                          class="block text-sm text-grey-800 flex-1"
                        >
                          Delete
                        </label>
                      </div>
                      <div class="relative flex gap-3 items-start">
                        <input
                          type="checkbox"
                          id="update"
                          class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach"
                        />
                        <label
                          for="update"
                          class="block text-sm text-grey-800 flex-1"
                        >
                          Update
                        </label>
                      </div>
                    </div>
                    <div class="flex items-center mt-3">
                      <button
                        type="submit"
                        class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-7 pb-7">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">
                  Delete Team
                </h3>
                <p class="mt-1 text-md text-grey-900">
                  Permanently delete this team.
                </p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">
                    <div class="space-y-2">
                      <p class="text-md text-grey-900">
                        Once a team is deleted, all of its resources and data
                        will be permanently deleted. Before deleting this team,
                        please download any data or information regarding this
                        team that you wish to retain.
                      </p>
                    </div>

                    <div class="flex items-center mt-3 justify-start">
                      <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-36 text-center py-2 text-base font-medium text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300"
                      >
                        Delete Team
                      </button>
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
import GoogleLogo from "@/assets/icons/GoogleLogo.vue";
import FacebookLogo from "@/assets/icons/FacebookLogo.vue";
import TwitterLogo from "@/assets/icons/TwitterLogo.vue";
import InstagramLogo from "@/assets/icons/InstagramLogo.vue";
import TiktokLogo from "@/assets/icons/TiktokLogo.vue";

const roles = [
  {
    id: "1",
    name: "Administrator",
    active: "false",
    description: "Administrator users can perform any action.",
  },
  {
    id: "2",
    name: "Editor",
    active: "true",
    description: "Editor users have the ability to read, create, and update.",
  },
];

const socials = [
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    handle: "emilyselman",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristin Watson",
    handle: "kristinwatson",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
</script>
