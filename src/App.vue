<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex justify-between items-center bg-slate-800 h-14 px-5">
    <div class="text-xl leading-none text-slate-400">
      Phonebook
    </div>
  </div>
  <div class="">
    <RouterView />
  </div>
</template>

<style></style>
