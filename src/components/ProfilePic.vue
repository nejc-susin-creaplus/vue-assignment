<template>
  <div class="h-8 w-8 rounded-full bg-slate-400 text-slate-100 text-sm font-light text-center leading-8">
    {{ initials }}
  </div>
</template>

<script>
export default {
  name: 'ProfilePic',
  props: {
    initials: String,
  },
};
</script>

<style scoped>

</style>
