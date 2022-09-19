<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps<{
  title: string
  src: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center mb-2">
    <img :src="withBase(src)" :title="title">
    <span class="mt-1 text-sm text-center">{{ title }}</span>
  </div>
</template>
