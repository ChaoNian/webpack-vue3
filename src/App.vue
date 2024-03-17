<template>
  <div>
    手撸webpack配置 vue3 项目
    开始了
{{ name }}
  </div>
</template>

<script setup lang="ts">
import '@/assets/index.css'
import { ref } from "vue";
const name= ref('测试')
</script>

<style scoped> 

</style>