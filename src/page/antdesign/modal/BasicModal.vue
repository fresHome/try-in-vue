<template>
  <div>
    <a-modal title="Basic Modal" v-model="modalData.visible" @ok="handleOk">
      <p>窗口</p>
      <a-form :form="form">
        <a-form-item v-for="k in form.getFieldValue('keys')" :key="k">
          <a-input
            v-decorator="[
              `names[${k}]`,
              {
                validateTrigger: ['change', 'blur'],
                preserve: true,
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message:
                      'Please input passenger\'s name or delete this field.'
                  }
                ]
              }
            ]"
            placeholder="passenger name"
            style="width: 60%; margin-right: 8px"
          />
        </a-form-item>
        <a-form-item></a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ["modalData"],
  beforeCreate() {
    this.form = this.$form.createForm(this)
    this.form.getFieldDecorator("keys", {
      initialValue: [0, 1, 2],
      preserve: true
    })

    const pp = new Promise(function(resolve, reject) {
      // ... some code
      console.log("p1")
      setTimeout(() => {
        console.log("setTimeout1")
        resolve([0, 1, 2])
        console.log("setTimeout2")
      }, 1000)
      console.log("p2")
    })

    const aa = async () => {
      console.log(111)
      await pp
      console.log(222)
    }
    aa()
  },
  created() {
    console.log("modal created")
    console.log(this.modalData)
  },
  mounted() {
    console.log("modal mounted")
    console.log(this.modalData)
  },
  methods: {
    handleOk(e) {
      console.log(e)
      this.modalData.visible = false
    }
  }
}
</script>

<style></style>
