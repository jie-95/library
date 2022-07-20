<template>
  <div>
    <input type="text" required placeholder="书名" v-model="bookname" /><br />

    <input type="text" required placeholder="作者" v-model="author" /><br />

    <input
      type="text"
      required
      placeholder="出版社"
      v-model="publisher"
    /><br />
    <button class="btn" @click="addBook">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    addBook() {
      if (!this.bookname || !this.author || !this.publisher) return;
      this.$axios({
        method: "POST",
        url: "/api/addbook",
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        },
      }).then((res) => {
        const { msg, status } = res.data;
        alert(msg, status);
        
        // 添加成功
        if (status === 201) {
          this.$bus.$emit("request");
          this.bookname = "";
          this.author = "";
          this.publisher = "";
        }
      });
       
    },
  },
};
</script>

<style  scoped>
input {
  margin: 10px 0 10px 30px;
}
.btn {
  background-color: skyblue;
  margin-right: 60px;
}
</style>



