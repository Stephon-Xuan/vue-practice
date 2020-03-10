<template>
  <div class="hello">
    {{msg}}
    
    <div v-if='this.$route.params.id'>
        我的id是用params传的id:{{this.$route.params.id}}
    </div>
    <div v-if='this.$route.query.id'>
        我的是用query传的id:{{this.$route.query.id}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageTwo',
  data () {
    return {
      msg: 'I am pageTwo!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
