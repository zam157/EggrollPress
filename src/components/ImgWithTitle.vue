<script setup lang="ts">
defineProps<{
  title: string
  src: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center mb-2">
    <img :src="src" :title="title">
    <span class="mt-1 text-sm text-center">{{ title }}</span>
  </div>
</template>
