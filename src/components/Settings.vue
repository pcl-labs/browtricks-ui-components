<template>
  <div class="flex-1 relative flex flex-col w-full">
    <div class="flex-1 p-3 md:p-5 xl:px-14 xl:py-12">
      <div class="mb-7 pt-3 md:pt-0 md:pb-7 border-b border-solid border-gray-300">
        <h2 class="flex-1 text-2.5xl font-bold leading-none text-grey-800 mb-5">
          Settings
        </h2>
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Team Name</h3>
                <p class="mt-1 text-md text-grey-900">The team's name and owner information.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">                   
                       <div class="space-y-3">
                        <h6 for="company-website" class="block text-sm text-grey-800 font-medium">Team Owner</h6>
                        <div class="flex items-center">
                          <img src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=56&h=56&q=80" class="rounded-full" />
                          <div class="ml-2">
                            <h5 class="font-bold text-grey-800 text-sm">Koko</h5>
                            <p class="text-sm font-medium text-grey-800">design.mailboxx@gmail.com</p>
                          </div>
                        </div>
                      </div>
                        <div class="">
                          <label for="team-name" class="block text-sm font-medium text-grey-800">Team name</label>
                          <div class="mt-1">
                            <input type="text" name="team-name" id="team-name" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer" placeholder="koko team" required  />
                          </div>
                          <p class="hidden mt-2 text-xs text-red peer-required:block" id="team-description">Please choose your team name</p>
                        </div>
                        <div class="flex items-center mt-3">
                          <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Save</button>
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
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Team Address</h3>
                <p class="mt-1 text-md text-grey-900">Add team address</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
                  <div class="space-y-6 bg-white px-4 py-5 sm:p-10">                   
                       
                        <div class="relative">
                          <label for="team-name" class="block text-sm font-medium text-grey-800">Address</label>
                          <div class="mt-1">
                            <input type="text" name="team-name" id="team-name" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer" placeholder="Address" required  />
                          </div>
                          <p class="hidden mt-2 text-xs text-red peer-required:block" id="team-description">Please fill your address</p>
                        </div>

                        <div class="relative">
                          <label for="team-name" class="block text-sm font-medium text-grey-800">City</label>
                          <div class="mt-1">
                            <input type="text" name="team-name" id="team-name" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer" placeholder="City" required  />
                          </div>
                          <p class="hidden mt-2 text-xs text-red peer-required:block" id="team-description">City</p>
                        </div>


                        <div class="relative">
                          <label for="team-name" class="block text-sm font-medium text-grey-800">Country</label>
                          <div class="mt-1">
                            <select name="team-name" id="team-name" class="block w-full rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer">
                              <option>United States</option>
                            </select>
                          </div>
                          <p class="hidden mt-2 text-xs text-red peer-required:block" id="team-description">City</p>
                        </div>
                        <div class="relative">
                          <label for="team-name" class="block text-sm font-medium text-grey-800">ZIP/Postcode</label>
                          <div class="mt-1">
                            <input type="text" name="team-name" id="team-name" class="block  appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer w-40" required  />
                          </div>
                          <p class="hidden mt-2 text-xs text-red peer-required:block" id="team-description">City</p>
                        </div>


                        <div class="flex items-center mt-3">
                          <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Save</button>
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
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Add Team Member</h3>
                <p class="mt-1 text-md text-grey-900">Add a new team member to your team, allowing them to collaborate with you.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
              
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">                   
                       
                       <div class="relative">
                         <label for="Email" class="block text-sm font-medium text-grey-800">Email</label>
                         <div class="mt-1">
                           <input type="Email" name="Email" id="Email" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer" required  />
                         </div>
                         <p class="mt-2 text-xs text-gray-900 invalid:text-red peer-required:text-red " id="team-description">Please provide the email address of the person you would like to add to this team.</p>
                       </div>
                      <h3 class="text-grey-800 font-bold pt-4">Role</h3>
                       <div class="relative flex gap-3 items-start">
                        <input type="radio" name="role" id="administrator" class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800" /> 
                         <label for="administrator" class="block text-sm  text-grey-800">
                          <b class="block font-semibold">Administrator</b>
                          <span>Administrator users can perform any action.</span>
                        </label>                         
                       </div> 
                       <div class="relative flex gap-3 items-start">
                        <input type="radio" name="role" id="editor" class="relative top-1 text-grey-800 shadow-md border-grey-800 focus:ring-grey-800" /> 
                         <label for="editor" class="block text-sm  text-grey-800">
                          <b class="block font-semibold">Editor</b>
                          <span>Editor users have the ability to read, create, and update.</span>
                        </label>                         
                       </div>                    

                       <div class="flex items-center mt-3">
                         <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Add</button>
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
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Connected Socials</h3>
                <p class="mt-1 text-md text-grey-900">Manage and remove your connected accounts.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
              
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">  
                      <div class="space-y-2">
                        <h3 class="text-sm font-bold text-grey-800">Your connected accounts.</h3>
                        <p class="text-md text-grey-900">You are free to connect any social accounts to your profile and may remove any connected accounts at any time. If you feel any of your connected accounts have been compromised, you should disconnect them immediately and change your password.</p>
                      </div>                 
                       
                      <div class="relative">
                        <table class="w-full">
                          <tr>
                            <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <svg class="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_921_7260)">
                                    <path d="M3.54594 9.66893L2.989 11.7481L0.953406 11.7911C0.345063 10.6628 0 9.3718 0 7.99993C0 6.67333 0.322625 5.42233 0.8945 4.3208H0.894938L2.70719 4.65305L3.50106 6.45443C3.33491 6.93883 3.24434 7.45883 3.24434 7.99993C3.24441 8.58718 3.35078 9.14983 3.54594 9.66893Z" fill="#FBBB00"/>
                                    <path d="M15.8601 7C15.952 7.48394 15.9999 7.98372 15.9999 8.4945C15.9999 9.06725 15.9397 9.62594 15.825 10.1648C15.4355 11.9987 14.4179 13.6 13.0083 14.7332L13.0078 14.7327L10.7252 14.6163L10.4022 12.5996C11.3375 12.051 12.0685 11.1925 12.4536 10.1648H8.17578V7H12.516H15.8601Z" fill="#518EF8"/>
                                    <path d="M13.0076 14.2382L13.0081 14.2386C11.6371 15.3406 9.89553 15.9999 7.99972 15.9999C4.95312 15.9999 2.30434 14.2971 0.953125 11.7911L3.54566 9.66895C4.22125 11.472 5.96059 12.7555 7.99972 12.7555C8.87619 12.7555 9.69731 12.5186 10.4019 12.105L13.0076 14.2382Z" fill="#28B446"/>
                                    <path d="M13.1064 1.84175L10.5148 3.9635C9.78553 3.50769 8.92353 3.24437 8.00003 3.24437C5.91475 3.24437 4.14288 4.58678 3.50113 6.4545L0.894969 4.32088H0.894531C2.22597 1.75384 4.90816 0 8.00003 0C9.94112 0 11.7209 0.691437 13.1064 1.84175Z" fill="#F14336"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_921_7260">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>

                              </div>
                              <div class="space-y-1">
                              <h3 class="font-bold text-grey-800">Google</h3>
                              <p class="text-gray-500 leadiing-none">Not connected.</p>
                            </div>
                            </div>
                          </td>
                          <td class="text-right"><button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">Connect</button></td>
                        </tr>

                        <tr>
                            <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <svg class="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_921_7271)">
                                    <path d="M16 8C16 11.9931 13.0744 15.3028 9.25 15.9028V10.3125H11.1141L11.4688 8H9.25V6.49937C9.25 5.86656 9.56 5.25 10.5538 5.25H11.5625V3.28125C11.5625 3.28125 10.6469 3.125 9.77156 3.125C7.94438 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C2.92563 15.3028 0 11.9931 0 8C0 3.58187 3.58187 0 8 0C12.4181 0 16 3.58187 16 8Z" fill="#1877F2"/>
                                    <path d="M11.1141 10.3125L11.4688 8H9.25V6.49934C9.25 5.86669 9.55994 5.25 10.5537 5.25H11.5625V3.28125C11.5625 3.28125 10.647 3.125 9.77172 3.125C7.94434 3.125 6.75 4.2325 6.75 6.2375V8H4.71875V10.3125H6.75V15.9028C7.15731 15.9667 7.57475 16 8 16C8.42525 16 8.84269 15.9667 9.25 15.9028V10.3125H11.1141Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_921_7271">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>


                              </div>
                              <div class="space-y-1">
                              <h3 class="font-bold text-grey-800">Facebook</h3>
                              <p class="text-gray-500 leadiing-none">Not connected.</p>
                            </div>
                            </div>
                          </td>
                          <td class="text-right"><button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">Connect</button></td>
                        </tr>

                        <tr>
                            <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <svg class="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                
                                    <g clip-path="url(#clip0_921_7279)">
                                    <path d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z" fill="#03A9F4"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_921_7279">
                                    <rect width="16" height="16" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>



                              </div>
                              <div class="space-y-1">
                              <h3 class="font-bold text-grey-800">Twitter</h3>
                              <p class="text-gray-500 leadiing-none">Connected 1 day ago.</p>
                            </div>
                            </div>
                          </td>
                          <td class="text-right"><p class="text-gray-500 leadiing-none">Use Avatar as Profile Photo</p></td>
                        </tr>

                        <tr>
                            <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <svg class="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">                                  
                                  <g clip-path="url(#clip0_921_7288)">
                                  <path d="M15.9519 4.70166C15.913 3.8501 15.7777 3.26856 15.58 2.75977C15.3792 2.22595 15.0642 1.74243 14.6572 1.34277C14.2577 0.935791 13.774 0.620728 13.2402 0.4198C12.7313 0.222168 12.1499 0.0870361 11.2983 0.0483399C10.4452 0.00927734 10.1726 0 8 0C5.82739 0 5.55481 0.00927734 4.70166 0.0480957C3.8501 0.0870361 3.26868 0.22229 2.75977 0.420044C2.22595 0.62085 1.74243 0.935791 1.34277 1.34277C0.935791 1.74231 0.620728 2.22583 0.4198 2.75964C0.222168 3.26856 0.0870361 3.8501 0.0483398 4.70154C0.00927734 5.55481 0 5.82727 0 7.99988C0 10.1726 0.00927734 10.4452 0.0483398 11.2983C0.0871582 12.1498 0.222412 12.7313 0.420166 13.2402C0.620972 13.7739 0.935913 14.2576 1.3429 14.6571C1.74243 15.0641 2.22607 15.379 2.75989 15.5798C3.26868 15.7777 3.85022 15.9128 4.70178 15.9518C5.55505 15.9907 5.82751 15.9999 8.00012 15.9999C10.1727 15.9999 10.4453 15.9907 11.2985 15.9518C12.15 15.9128 12.7314 15.7777 13.2404 15.5798C14.3149 15.1643 15.1644 14.3148 15.58 13.2402C15.7778 12.7313 15.913 12.1498 15.9519 11.2983C15.9907 10.4451 16 10.1726 16 8C16 5.82727 15.9907 5.55481 15.9519 4.70166ZM14.5118 11.2328C14.4763 12.0128 14.3459 12.4364 14.2365 12.7183C13.9673 13.416 13.4159 13.9674 12.7181 14.2366C12.4363 14.3461 12.0127 14.4764 11.2327 14.512C10.3893 14.5505 10.1362 14.5586 8 14.5586C5.86365 14.5586 5.61072 14.5505 4.76721 14.512C3.9873 14.4764 3.56372 14.3461 3.28174 14.2366C2.93433 14.1083 2.62 13.9038 2.36194 13.6381C2.09619 13.38 1.89172 13.0658 1.76343 12.7183C1.65393 12.4364 1.52356 12.0128 1.48804 11.2328C1.44958 10.3893 1.44141 10.1362 1.44141 8.00012C1.44141 5.86389 1.44958 5.61096 1.48804 4.76733C1.52368 3.98731 1.65393 3.56372 1.76343 3.28186C1.89172 2.93433 2.09631 2.62 2.36194 2.36194C2.62 2.09619 2.93433 1.89172 3.28186 1.76355C3.56372 1.65393 3.9873 1.52368 4.76733 1.48804C5.61084 1.44959 5.86389 1.44141 8 1.44141H7.99988C10.136 1.44141 10.389 1.44959 11.2327 1.48816C12.0127 1.52368 12.4362 1.65405 12.7181 1.76355C13.0656 1.89185 13.3799 2.09631 13.6379 2.36194C13.9037 2.62 14.1082 2.93433 14.2363 3.28186C14.3459 3.56372 14.4763 3.98731 14.5118 4.76733C14.5503 5.61084 14.5585 5.86389 14.5585 8C14.5585 10.1362 14.5504 10.3892 14.5118 11.2328Z" fill="url(#paint0_linear_921_7288)"/>
                                  <path d="M7.99866 3.89185C5.72986 3.89185 3.89062 5.7312 3.89062 8C3.89062 10.2688 5.72986 12.108 7.99866 12.108C10.2676 12.108 12.1068 10.2688 12.1068 8C12.1068 5.7312 10.2676 3.89185 7.99866 3.89185ZM7.99866 10.6666C6.526 10.6665 5.33203 9.47266 5.33215 7.99988C5.33215 6.52722 6.526 5.33325 7.99878 5.33325C9.47156 5.33337 10.6654 6.52722 10.6654 7.99988C10.6654 9.47266 9.47144 10.6666 7.99866 10.6666Z" fill="url(#paint1_linear_921_7288)"/>
                                  <path d="M13.2325 3.72961C13.2325 4.25977 12.8027 4.68958 12.2726 4.68958C11.7423 4.68958 11.3125 4.25977 11.3125 3.72961C11.3125 3.19934 11.7423 2.76953 12.2726 2.76953C12.8027 2.76953 13.2325 3.19934 13.2325 3.72961Z" fill="url(#paint2_linear_921_7288)"/>
                                  </g>
                                  <defs>
                                  <linearGradient id="paint0_linear_921_7288" x1="1.34269" y1="14.6572" x2="14.6573" y2="1.34256" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FFD600"/>
                                  <stop offset="0.5" stop-color="#FF0100"/>
                                  <stop offset="1" stop-color="#D800B9"/>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_921_7288" x1="5.09387" y1="10.9048" x2="10.9036" y2="5.09509" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#FF6400"/>
                                  <stop offset="0.5" stop-color="#FF0100"/>
                                  <stop offset="1" stop-color="#FD0056"/>
                                  </linearGradient>
                                  <linearGradient id="paint2_linear_921_7288" x1="11.5937" y1="4.40836" x2="12.9513" y2="3.05075" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#F30072"/>
                                  <stop offset="1" stop-color="#E50097"/>
                                  </linearGradient>
                                  <clipPath id="clip0_921_7288">
                                  <rect width="16" height="16" fill="white"/>
                                  </clipPath>
                                  </defs>
                                  </svg>




                              </div>
                              <div class="space-y-1">
                              <h3 class="font-bold text-grey-800">Instagram</h3>
                              <p class="text-gray-500 leadiing-none">Not connected.</p>
                            </div>
                            </div>
                          </td>
                          <td class="text-right"><button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">Connect</button></td>
                        </tr>

                        <tr>
                            <td class="py-2">
                            <div class="relative pl-10">
                              <div class="absolute left-0 top-1">
                                <svg class="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">         
                                    <path d="M5.68932 8.29365C4.42057 8.29365 3.39557 9.31865 3.41432 10.5749C3.42682 11.3812 3.87057 12.0812 4.52369 12.4718C4.30182 12.1312 4.17057 11.728 4.16432 11.2937C4.14557 10.0374 5.17057 9.0124 6.43932 9.0124C6.68932 9.0124 6.92994 9.05303 7.15494 9.1249V6.60928C6.92057 6.5749 6.67994 6.55615 6.43932 6.55615C6.42682 6.55615 6.41744 6.55615 6.40494 6.55615V8.40615C6.17994 8.33428 5.93932 8.29365 5.68932 8.29365Z" fill="#F00044"/>
                                    <path d="M11.1727 0.75H11.1539H10.5039C10.6914 1.69063 11.2195 2.50937 11.957 3.06562C11.4727 2.425 11.1789 1.625 11.1727 0.75Z" fill="#F00044"/>
                                    <path d="M14.9984 4.57803C14.7516 4.57803 14.5141 4.55303 14.2797 4.50928V6.3124C13.4297 6.3124 12.6047 6.14678 11.8297 5.81553C11.3297 5.60303 10.8641 5.33115 10.4359 5.00303L10.4484 10.5624C10.4422 11.8124 9.94844 12.9843 9.05469 13.8687C8.32656 14.5874 7.40469 15.0468 6.40469 15.1937C6.17031 15.228 5.92969 15.2468 5.68906 15.2468C4.62031 15.2468 3.60156 14.8999 2.77344 14.2593C2.86719 14.3718 2.96719 14.4812 3.07656 14.5874C3.97656 15.4749 5.17031 15.9655 6.44219 15.9655C6.68281 15.9655 6.92344 15.9468 7.15781 15.9124C8.15781 15.7655 9.07969 15.3062 9.80781 14.5874C10.7016 13.703 11.1953 12.5312 11.2016 11.2812L11.1547 5.72178C11.5797 6.0499 12.0453 6.3249 12.5484 6.53428C13.3266 6.8624 14.1516 7.03115 14.9984 7.03115" fill="#F00044"/>
                                    <path d="M3.0672 7.94053C3.95783 7.05615 5.1422 6.56553 6.4047 6.55615V5.89053C6.17033 5.85615 5.9297 5.8374 5.68908 5.8374C4.41408 5.8374 3.2172 6.32803 2.3172 7.22178C1.43283 8.0999 0.926577 9.2999 0.929702 10.5468C0.929702 11.803 1.42658 12.9812 2.32345 13.8718C2.4672 14.0124 2.61408 14.1437 2.77033 14.2624C2.06408 13.4218 1.6797 12.3718 1.67658 11.2655C1.6797 10.0187 2.18283 8.81865 3.0672 7.94053Z" fill="#08FFF9"/>
                                    <path d="M14.2797 4.50942V3.84067H14.2734C13.4047 3.84067 12.6047 3.55317 11.9609 3.06567C12.5203 3.80317 13.3391 4.32817 14.2797 4.50942Z" fill="#08FFF9"/>
                                    <path d="M6.31094 13.5063C6.60781 13.5219 6.89219 13.4813 7.15469 13.3969C8.06094 13.1 8.71406 12.2562 8.71406 11.2625L8.71719 7.54375V0.75H10.5047C10.4578 0.515625 10.4328 0.278125 10.4297 0.03125H7.96719V6.82188L7.96406 10.5406C7.96406 11.5344 7.31094 12.3781 6.40469 12.675C6.14219 12.7625 5.85781 12.8031 5.56094 12.7844C5.18281 12.7625 4.82969 12.65 4.52344 12.4688C4.90781 13.0625 5.56406 13.4656 6.31094 13.5063Z" fill="#08FFF9"/>
                                    <path d="M6.4047 15.1938C7.4047 15.0469 8.32658 14.5875 9.0547 13.8687C9.94845 12.9844 10.4422 11.8125 10.4485 10.5625L10.436 5.00313C10.861 5.33125 11.3266 5.60625 11.8297 5.81563C12.6078 6.14375 13.4328 6.3125 14.2797 6.3125V4.50938C13.3391 4.32812 12.5203 3.80312 11.961 3.06562C11.2235 2.50937 10.6922 1.69063 10.5078 0.75H8.7172V7.54063L8.71408 11.2594C8.71408 12.2531 8.06095 13.0969 7.1547 13.3938C6.8922 13.4812 6.60783 13.5219 6.31095 13.5031C5.56095 13.4625 4.90783 13.0594 4.52345 12.4688C3.87033 12.0813 3.42658 11.3781 3.41408 10.5719C3.39533 9.31562 4.42033 8.29062 5.68908 8.29062C5.93908 8.29062 6.1797 8.33125 6.4047 8.40312V6.55312C5.1422 6.5625 3.95783 7.05312 3.0672 7.9375C2.18283 8.81563 1.67658 10.0156 1.6797 11.2594C1.6797 12.3656 2.06408 13.4156 2.77345 14.2563C3.6047 14.8969 4.62033 15.2437 5.68908 15.2437C5.9297 15.2469 6.17033 15.2281 6.4047 15.1938Z" fill="black"/>
                                    </svg>





                              </div>
                              <div class="space-y-1">
                              <h3 class="font-bold text-grey-800">Tiktok</h3>
                              <p class="text-gray-500 leadiing-none">Not connected.</p>
                            </div>
                            </div>
                          </td>
                          <td class="text-right"><button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-grey-800 shadow-sm hover:bg-peach focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300 hover:border-peach">Connect</button></td>
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
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Create API Token</h3>
                <p class="mt-1 text-md text-grey-900">API tokens aloow third-party services to
                  authentificate with our application on your
                  behalf.</p>
                </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
              
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">                   
                       
                       <div class="relative">
                         <label for="name" class="block text-sm font-medium text-grey-800">Name</label>
                         <div class="mt-1">
                           <input type="text" name="name" id="name" class="block w-full appearance-none rounded-md border bg-transparent border-grey-300 px-3 py-3 placeholder-grey-800 shadow-sm font-medium focus:border-peach focus:outline-none focus:ring-peach sm:text-sm peer" required placeholder="4356789765234"  />
                         </div>
                         <p class="hidden mt-2 text-xs text-red peer-required:block peer-invalid:block" id="team-description">4356789765234</p>
                       </div>
                      <div class="space-y-4">
                       <div class="relative flex gap-3 items-start">
                        <input type="checkbox" id="create" class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach" /> 
                         <label for="create" class="block text-sm  text-grey-800 flex-1">
                           Create                           
                        </label>                         
                       </div> 
                       <div class="relative flex gap-3 items-start">
                        <input type="checkbox"   id="read" class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach" /> 
                         <label for="read" class="block text-sm  text-grey-800 flex-1">
                          Read                           
                        </label>                         
                       </div>  
                       <div class="relative flex gap-3 items-start">
                        <input type="checkbox"   id="delete" class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach" /> 
                         <label for="delete" class="block text-sm  text-grey-800 flex-1">
                          Delete                           
                        </label>                         
                       </div>  
                       <div class="relative flex gap-3 items-start">
                        <input type="checkbox"   id="update" class="relative top-1 text-peach rounded shadow-md border-pearch focus:ring-peach" /> 
                         <label for="update" class="block text-sm  text-grey-800 flex-1">
                          Update                           
                        </label>                         
                       </div>                   
                      </div>
                       <div class="flex items-center mt-3">
                         <button type="submit" class="ml-auto flex justify-center rounded-md border border-transparent bg-peach py-2 px-4 text-base font-semibold text-black shadow-sm hover:bg-peach-2 focus:outline-none focus:ring-2 focus:ring-peach focus:ring-offset-2 ease-in-out duration-300">Create</button>
                       </div>                                        
                
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div class="mb-7 pb-7 ">
        <div class="coverflow-hidden rounded-xl divide-y divide-grey-300">
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-semibold leading-6 text-grey-800">Delete Team</h3>
                <p class="mt-1 text-md text-grey-900">Permanently delete this team.</p>
              </div>
            </div>
            <div class="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div class="shadow sm:overflow-hidden sm:rounded-md">
              
                    <div class="space-y-6 bg-white px-4 py-5 sm:p-10">  
                      <div class="space-y-2"> 
                        <p class="text-md text-grey-900">Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain.</p>
                      </div>                 
                       
                      <div class="flex items-center mt-3  justify-start">

                        <button type="button" class="inline-flex items-center justify-center rounded-md border border-red bg-white px-4 w-36 text-center py-2 text-base font-medium text-red shadow-sm hover:bg-red hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2 ease-in-out duration-300">Delete Team</button>

                         
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