<template>
  <div class="page-hello">
    <p>{{ gethelloContent }} World! {{ greeting }}</p>
    <el-button @click="changeStore"> store 测试 </el-button>
    <el-button @click="testIo"> IO 测试 </el-button>
  </div>
</template>

<script>
  import io from './io'

  export default {
    data: function () {
      return {
        greeting: 'xxxx',
      }
    },
    computed: {
      gethelloContent() {
        return this.$store.state.helloStore.helloContent
      },
    },
    methods: {
      changeStore() {
        this.$store.commit('helloStore/increment')
      },
      async testIo() {
        try {
          const { content } = await io.testIo({
            ':id': 11,
          })

          this.greeting = content.name
        } catch (e) {
          this.$message.error(e.message)
        }
      },
    },
  }
</script>

<style src="./hello.styl"></style>
