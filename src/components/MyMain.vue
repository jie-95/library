<template>
  <table class="table table-hover">
   <thead>
    <tr>
      <td>序号</td>
      <td>书名</td>
      <td>作者</td>
      <td>出版商</td>
      <td>操作</td>
    </tr>
   </thead>
   <tbody>
    <tr
    v-for="item in list" 
    :key="item.id"
    >
      <td>{{item.id}}</td>
      <td>{{item.bookname}}</td>
      <td>{{item.author}}</td>
      <td>{{item.publisher}}</td>
      <td><a href="#" @click="delBook(item.id)">删除详情</a></td>
    </tr>
   </tbody>
  </table>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
  props:{
    list:{
      type:Array,
      default:() => ([])
    }
  },
  methods:{
    delBook(id) {
      this.$axios({
        url: "/api/delbook?id=" + id,
      }).then((res) => {
        const { msg, status } = res.data;
        alert (msg, status)
        // 删除数据成功
        if (status === 200) {
          // 更新数据
          this.$bus.$emit("request");
        }
      });
    },
  }
}
</script>

<style>
</style>


