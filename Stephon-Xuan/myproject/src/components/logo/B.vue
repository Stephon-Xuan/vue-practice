<template>
  <div>
     {{msg}}
  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {
      msg: ' 我是个公用组件B!'
    }
  },
  methods:{
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
