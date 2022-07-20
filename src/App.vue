<template>
  <div class="app">
    <MyHeader />
    <MyMain 
    
    :list="list"
    />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyMain from "./components/MyMain.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  data(){
    return {
      list:[]
    }
  },
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  },
  mounted(){
    this.$bus.$on('getBname',(Bnane) => {
      // console.log(Bnane);
      // console.log(this.list.filter((ele) => ele.bookname == Bnane));
      this.list = this.list.filter((ele) => ele.bookname == Bnane)
    })
  },
  beforeDestroy(){
    this.$bus.$off('getBname')
  
  },
  created(){
    this.$axios({
      url:"/api/getbooks"
    }).then((res) => {
      // console.log(res.data.data);
      this.list = res.data.data
      
    })
  }

};
</script>

<style>
.app {
  margin: 0 30px 0 30px;
  background-color: rgb(247, 243, 243);
}
</style>