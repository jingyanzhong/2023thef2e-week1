<script setup>
import { onMounted, watch, ref } from 'vue'
import Modal from 'bootstrap/js/dist/modal'
const modal = ref(null)
const cardModalRef = ref(null)
const showModal = () => {
  modal.value.show()
}
const hideModal = () => {
  modal.value.hide()
}
onMounted(() => {
  modal.value = new Modal(cardModalRef.value)
})
defineExpose({
  showModal, hideModal
})

// props
const props = defineProps({
  cardItem: {
    type: Object,
    default () { return {} }
  }
})

const result = ref({})
watch(() => props.cardItem, (newItem) => {
  result.value = newItem
})

// emit
const emit = defineEmits(['close-modal'])
const closeModal = () => {
  emit('close-modal')
}
</script>
<template>
    <!-- Modal -->
    <div class="modal fade" ref="cardModalRef">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ result.title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="name" class="name">姓名</label><br>
                    <input type="text" name="name" id="name" placeholder="請輸入您的大名"><br>
                    <label for="CID">身份證字號</label><br>
                    <input type="text" name="CID" id="CID" placeholder="請輸入您的身分證字號"><br>
                    <label for="phone" class="phone">手機</label><br>
                    <input type="number" name="phone" id="phone"><br>
                    <label for="birthday" class="birthday">生日</label><br>
                    <input type="date" name="birthday" id="birthday"><br>
                    <label for="money" class="money">贊助金額</label><br>
                    <input type="number" name="money" id="money" :value="result.money"><br>
                    <label for="card">信用卡號</label><br>
                    <input type="number" name="card" id="card">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click="closeModal">確認捐款</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-body {
    label {
        margin-bottom: 8px;
    }
    input {
        width: 100%;
        margin-bottom: 16px;
        padding: 8px;
        border-radius: 10px;
        border: 1px solid $gray;
    }
}
</style>
