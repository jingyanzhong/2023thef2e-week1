<template>
    <swiper data-aos="fade-up" data-aos-duration="1500" :pagination="{
        clickable: true,
    }" :slidesPerView="3" :spaceBetween="24" :breakpoints="breakpoints" :modules="modules" class="danteSwiper">
        <swiper-slide v-for="(item, index) in danteItem" :key="index">
            <h5>{{ item.title }}</h5>
            <div class="content">
                <div class="money">
                    <p>NT${{ item.money }}</p>
                    <p>每次捐款金額</p>
                </div>
                <div class="people">
                    <p>{{ item.people }}</p>
                    <p>贊助人數</p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script setup>
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper/modules'
const modules = ref([Pagination])
const breakpoints = ref({
  0: {
    slidesPerView: 1,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 24
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 24
  }
})

const props = defineProps(['danteItem'])
console.log(props.danteItem)
</script>

<style lang="scss" scoped>
.danteSwiper {
    padding-bottom: 50px;
    .swiper-slide {
        background: rgba(200, 115, 54, 1);
        color: #fff;
        border-radius: 12px 12px 0 0;
        padding: 20px;

        h5 {
            font-size: 28px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 24px;
        }

        .content {
            display: flex;
            justify-content: space-between;
            padding: 24px 38px;
            text-align: center;

            p {
                text-wrap: nowrap;
                font-size: 48px;
                font-weight: bold;
                margin-bottom: 16px;

                &:nth-last-child(1) {
                    font-size: 14px;
                    font-weight: bold;
                }
            }
        }
    }
}
@media (max-width: 767px) {
    .danteSwiper {
    .swiper-slide {
        padding: 16px;
        .content {
            padding: 8px;

            p {
                font-size: 36px;
            }
        }
    }
}
}
</style>
