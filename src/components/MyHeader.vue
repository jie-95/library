<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      placeholder="请输入要搜索的书名，按下回车键开始"
      aria-describedby="basic-addon1"
      @keyup.enter="enterFn()"
      v-model="Bname"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Bname: "",
    };
  },
  methods: {
    enterFn() {
    //   console.log(this.Bname);
      //非空校验
      if (!this.Bname.trim()) {
        this.Bname = ""
        return alert("请输入书名");
      }
      this.$bus.$emit("getBname", this.Bname)

    },
  },
};
</script>

<style>
</style>