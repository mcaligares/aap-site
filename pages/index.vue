<script setup lang="ts">
import config from '../content/config'

useSeoMeta({
  titleTemplate: '',
  title: config.title,
  ogTitle: config.title,
  description: config.description,
  ogDescription: config.description
})
</script>

<template>
  <div v-if="config">
    <HeroSection />
    <FeatureSection v-for="(feature, index) in config.sections" :key="index" :feature="feature" />
    <ChooseSection :features="config.features" />
  </div>
</template>
