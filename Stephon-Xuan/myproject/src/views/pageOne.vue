<template>
  <div class="hello">
    {{msg}}
    <br/>
    <h2>两种路由跳转写法：</h2>
    <ul>
      <li>
         1、在视图中使用router-link,:to="{name:'pageTwo',params或者query:{id: 3}}
        <br/>
        <router-link :to="{name:'pageTwo',query:{id: 3}}">我要去pageTwo</router-link>
      </li>

      <li>
           2、在script中,可以这样做:this.$router.push({name: 'Blog', params或者query: {id: 3}})
           <br/>
        <p @click="toPageThree" class="nav">我要去pageTwo</p>
      </li>
    </ul>
    <p>
      注意：
      query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，
      前者在浏览器地址栏中显示参数，后者则不显示
    </p>

    <h2>嵌套路由</h2>
    <A/>
  </div>
</template>

<script>
import {A,B} from "@/components/";
export default {
  name: 'PageOne',
  data () {
    return {
      msg: 'I am pageOne!'
    }
  },
  components:{A,B},
  methods:{
      toPageThree :function(){
          this.$router.push({name: 'pageTwo', params: {id: 4}})
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
  display: block;
  margin: 10px 10px;
  /* border: #42b983 1px solid; */
}
a {
  color: #42b983;
}
.nav{
   color: #42b983;
}
</style>
