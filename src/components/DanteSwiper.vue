<template>
    <swiper data-aos="fade-up" data-aos-duration="1500" :pagination="{
        clickable: true,
    }" :slidesPerView="3" :spaceBetween="24" :breakpoints="breakpoints" :modules="modules" class="danteSwiper">
        <swiper-slide v-for="(item, index) in danteItem" :key="index">
            <h5>{{ item.title }}</h5>
            <div class="content">
                <div class="money">
                    <p :data-num="`NT$${item.money}`">NT${{ item.money }}</p>
                    <p>每次捐款金額</p>
                </div>
                <div class="people">
                    <p :data-num="`${item.people}`">{{ item.people }}</p>
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
        background: $primary;
        color: #fff;
        border-radius: 12px 12px 0 0;
        padding: 20px;

        h5 {
            font-size: 28px;
            font-weight: $fw-bold;
            text-align: $text-center;
            margin-bottom: 24px;
        }

        .content {
            display: $d-flex;
            justify-content: space-between;
            padding: 24px 38px;
            text-align: $text-center;

            p {
                text-wrap: nowrap;
                font-size: $fz-3xl;
                font-weight: $fw-black;
                margin-bottom: 16px;
                position: relative;
                color: $primary;

                &::before {
                    content: attr(data-num);
                    position: absolute;
                    z-index: -1;
                    -webkit-text-stroke: 6px #fff;
                    text-stroke: 6px #fff;
                }

                &:nth-last-child(1) {
                    font-size: $fz-s;
                    font-weight: $fw-bold;
                    color: #fff;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .danteSwiper {
        .swiper-slide {
            padding: 16px;

            h5 {
                font-size: 20px;
                font-weight: 400;
                letter-spacing: $text-spacing-m;
                line-height: $line-h-m;
                text-indent: 28px;
                margin-bottom: 20px;
            }

            .content {
                padding: 8px;

                p {
                    font-size: $fz-xxl;
                }
            }
        }
    }
}
</style>
