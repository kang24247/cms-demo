<template>
  <div class="home">
    <h2>首页</h2>
    <div class="test"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {}
})
</script>
<style less scoped>
.test {
  min-height: 200px;
  width: 200px;
  background-color: #01eaad;
}
</style>
