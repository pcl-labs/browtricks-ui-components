<template>
  <label for="myfile" class="">
    <span
      class="inline-flex w-full justify-center items-center rounded-md border border-peach bg-peach py-1 px-2 h-full text-xs font-semibold text-grey-800/70 shadow-sm hover:bg-peach-2 hover:border-peach-2 ease-in-out duration-300 cursor-pointer"
    >
      <span v-if="value">{{ value.name }}</span>
      <span v-else>Upload File </span>
    </span>
    <input
      id="myfile"
      name="myfile"
      type="file"
      class="invisible sr-only"
      @change="handleFileChange"
    />
  </label>
</template>

<script>
export default {
  props: {
    value: File,
  },

  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0]);
    },
  },
};
</script>
