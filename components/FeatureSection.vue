<script setup>
defineProps({
  feature: { type: Object, required: true},
})

</script>
<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {{ feature.title }}
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              {{ feature.description }}
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="item in feature.features" :key="item.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="item.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ item.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">
                  {{ item.description }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <img :src="feature.image" alt="Product screenshot" class="lg:mt-[6rem] w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[47rem] md:-ml-4 lg:-ml-0">
      </div>
    </div>
  </div>
</template>
