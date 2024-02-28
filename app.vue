<script setup lang="ts">
import config from './content/config'

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  titleTemplate: config.title,
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
