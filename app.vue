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
  },

  script: [
    {
      src: 'https://cdn.botpress.cloud/webchat/v1/inject.js',
      tagPosition: 'bodyOpen',
    },
    {
      src: 'https://mediafiles.botpress.cloud/a37309ac-79c3-44b3-9154-69aee989ed27/webchat/config.js',
      tagPosition: 'bodyOpen',
      defer: true,
    }
  ]
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
