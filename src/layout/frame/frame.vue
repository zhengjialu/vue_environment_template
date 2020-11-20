<template>
  <div class="frame">
    <el-container>
      <el-header>
        <frame-nav />
      </el-header>
      <el-main>
        <p v-if="invalidRoute">没有匹配到页面</p>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import FrameNav from './nav.vue'

  export default {
    components: { FrameNav },
    computed: {
      invalidRoute() {
        return !this.$route.matched || this.$route.matched.length === 0
      },
    },
  }
</script>

<style src="./frame.styl"></style>
