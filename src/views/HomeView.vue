<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';

const msg = ref('home page.')
</script>

<template>
  <main text-pink>
    {{ msg }}
    <HelloWorld />
  </main>
</template>
