<script setup lang="ts">
const msg = ref('home page.')
</script>

<template>
  <main text-pink>
    {{ msg }}<el-tag>好</el-tag>
    <HelloWorld />
  </main>
</template>
