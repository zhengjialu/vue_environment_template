<template>
  <p>{{ greeting }} World!</p>
</template>

<script>
// import io from './io'

module.exports = {
  data: function() {
    return {
      greeting: "Hello"
    };
  },
  methods: {
    // async testIo() {
    //   try {
    //     const {content} = await io.testIo({
    //       ':id': 11,
    //     })
    //     this.content = content.name
    //   } catch(e) {
    //     this.$message.error(e.message)
    //   }
    // }
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>