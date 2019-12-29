<template>
  <a-modal title="Basic Modal" v-model="modal2.visible" @ok="handleOk">
    <div v-for="item in datalist" :key="item.name" class="outer">
      <div>
        <a-input placeholder="Basic usage" v-model="item.name" />
        <a href="">请输入</a>
      </div>
      <div>
        <a-input placeholder="Basic usage" v-model="item.value" />
        <a href="">请输入</a>
      </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        {
          name: "第一个",
          value: 111
        }
      ]
    }
  },
  props: ["modal2"],
  methods: {
    handleOk() {}
  },
  mounted() {
    setTimeout(() => {
      this.datalist = [
        { name: "111", value: 111 },
        { name: "222" },
        { name: "333", value: 333 }
      ]
    }, 1000)
  }
}
</script>

<style scoped>
.outer {
  display: flex;
}
div.outer > div {
  flex: 1;
  margin-bottom: 20px;
}
a {
  color: red;
}
</style>
