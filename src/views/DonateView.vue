<script setup>
import danteCard from '../components/danteCard.vue'
import CardModal from '../components/CardModal.vue'
import { useDataStore } from '../stores/data.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const dataStore = useDataStore()
const { danteData } = storeToRefs(dataStore)

const danteItem = ref({})
const cardModal = ref(null)
const isShow = ref(false)
const cardItem = (item) => {
  danteItem.value = { ...item }
  openModal()
}
const openModal = () => {
  cardModal.value.showModal()
}

const closeModal = () => {
  cardModal.value.hideModal()
  isShow.value = true
}

const hideCard = () => {
  isShow.value = false
}
</script>
<template>
    <div class="donate">
        <div class="banner"></div>
        <header>
            <div class="title">
                <h2>您的小筆捐款是<br>每隻毛孩<br>未來的大大動力！</h2>
                <RouterLink to="/dante">小額捐款
                    <span class="material-icons material-symbols-outlined">arrow_right</span>
                </RouterLink>
            </div>
            <div class="badge">
                <p>987,655,873</p>
                <span>總金額</span>
            </div>
        </header>
        <main>
            <div class="container">
                <danteCard :dante-item="danteData" @dante-card="cardItem"></danteCard>
            </div>
        </main>
    </div>
    <CardModal ref="cardModal" :card-item="danteItem" @close-modal="closeModal"></CardModal>
    <div class="card thanksCard" :class="{'d-none' : !isShow}">
        <div class="card-body">
            <button type="button" class="btn-close" @click="hideCard"></button><br>
            <img src="../img/icon4.png" alt="icon4">
            <p>
                感謝您的贊助！
            </p>
            <span>您已捐款完成</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 900px;
    background: url(../img/donation-bg.png) top center no-repeat;
}

@media (max-width: 768px) {
    .banner {
        height: 550px;
        background-size: cover;
    }
}

@media (max-width: 767px) {
    .banner {
        background: url(../img/donation-bg-m.png) top center no-repeat;
        background-size: cover;
    }
}

header {
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 144px 192px 0 0;
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 338px;

    h2 {
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 16px;
        margin-bottom: 24px;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 0;
        width: 180px;
        border-radius: 50px;
        color: #fff;
        background: rgba(16, 94, 167, 1);
    }
}

.badge {
    border-radius: 8px 8px 0 0;
    background: rgba(228, 211, 204, 1);
    padding: 24px 60px;
    color: rgba(200, 115, 54, 1);

    p {
        font-size: 48px;
        font-weight: bold;
    }

    span {
        font-size: 14px;
        font-weight: bold;
    }
}

main {
    padding: 120px 0;
}

@media (max-width: 768px) {
    header {
        align-items: center;
        padding: 360px 0 0;
    }

    .title {
        order: 2;
        margin-bottom: 0;

        h2 {
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 16px;
            margin-bottom: 24px;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 0;
            width: 180px;
            border-radius: 50px;
            color: #fff;
            background: rgba(16, 94, 167, 1);
        }
    }

    .badge {
        border-radius: 8px 8px 0 0;
        padding: 16px 48px;
        margin-bottom: 60px;

        p {
            font-size: 36px;
        }
    }

    main {
        padding: 120px 0;
    }
}

@media (max-width: 767px) {
    header {
        padding: 390px 0 0;
    }

    .title {
        h2 {
            font-size: 24px;
            letter-spacing: 10px;
        }
    }

    .badge {
        padding: 8px 36px;
        margin-bottom: 36px;

        p {
            font-size: 24px;
        }
    }

    main {
        padding: 80px 0;
    }
}

.thanksCard {
    padding: 24px;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    text-align: center;
    p {
        font-size: 48px;
        font-weight: bold;
        color: rgba(200, 115, 54, 1);
        margin-top: 24px;
    }
    .btn-close {
        margin-bottom: 24px;
    }
}

@media (max-width: 767px) {
    .thanksCard {
    padding: 16px;
    img {
        max-width: 260px;
    }
    p {
        font-size: 36px;
    }
}
}
</style>
