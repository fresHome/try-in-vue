<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <basicModal :modalData="modalData" v-if="modalData.visible"></basicModal>

    <a-button type="primary" @click="showModal2">Open Modal2</a-button>
    <Modal2 :modal2="modal2" v-if="modal2.visible"></Modal2>
  </div>
</template>

<script>
import basicModal from "./modal/BasicModal"
import Modal2 from "./modal/Modal2"
export default {
  name: "AntDesign",
  data() {
    return {
      modalData: {
        visible: false
      },
      modal2: {
        visible: false,
        data: []
      }
    }
  },
  methods: {
    showModal() {
      setTimeout(() => {
        this.modalData.visible = !this.modalData.visible
      }, 2000)
    },
    showModal2() {
      this.modal2.visible = true
    }
  },
  components: {
    basicModal,
    Modal2
  }
}
</script>

<style></style>
