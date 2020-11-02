<template>
  <div>
    <p>{{ gethelloContent }} World!</p>
    <el-button @click="changeStore">store 测试</el-button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      greeting: 'xxxx',
    };
  },
  methods: {
    changeStore() {
      this.$store.commit('helloStore/increment')
    }
  },
  computed: {
    gethelloContent() {
      return this.$store.state.helloStore.helloContent
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>