<template>
    <swiper :pagination="{
        clickable: true,
    }" :slidesPerView="3" :spaceBetween="24" :breakpoints="breakpoints" :modules="modules" class="newsSwiper">
        <swiper-slide v-for="(item, index) in cardItem" :key="index">
            <div class="title">
                <div class="date">
                    <div class="num" :data-num="index + 1">{{ index + 1 }}</div>
                    <p>{{ item.date }}</p>
                </div>
                <h5>{{ item.title }}<br>{{ item.title2 }}</h5>
            </div>
            <img :src="getImageUrl(item.img)" :alt="item.title">
            <p>{{ item.content }}</p>
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
  768: {
    slidesPerView: 2,
    spaceBetween: 24
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 24
  }
})

const props = defineProps(['cardItem'])
console.log(props.cardItem)

const getImageUrl = (imgSrc) => {
  const path = new URL(`/src/img/${imgSrc}`, import.meta.url).href
  return path
}
</script>

<style lang="scss" scoped>
.newsSwiper {
    padding-bottom: 30px;
}

.title {
    display: $d-flex;
    align-items: $align-center;

    .date {
        background: $primary;
        padding: 8px 25px 8px 25px;
        color: #fff;
        text-align: $text-center;
        margin-right: auto;

        .num {
            font-size: $fz-3xl;
            line-height: $line-h-xl;
            font-weight: $fw-bold;
            position: relative;
            z-index: 2;

            &::before {
                content: attr(data-num);
                position: absolute;
                z-index: -1;
                -webkit-text-stroke: 6px rgba(69, 69, 69, 1);
                text-stroke: 6px rgba(69, 69, 69, 1);
            }

        }

        p {
            padding: 0;
            margin: 0;
        }
    }
}

h5 {
    font-size: $fz-l;
    letter-spacing: $text-spacing-s;
    line-height: $line-h-m;
    text-align: end;
}

img {
    width: 100%;
}

p {
    font-size: $fz-m;
    line-height: $line-h-m;
    padding: 20px 16px;
}

@media (max-width: 768px) {
    .title {
        .date {
            padding: 8px 20px;

            .num {
                font-size: $fz-xxl;
                line-height: $line-h-l;
            }
        }
    }

    h5 {
        letter-spacing: 6px;
    }

    p {
        padding: 16px 0;
    }
}

@media (max-width: 767px) {
    .title {
        flex-direction: column;

        .date {
            margin-right: 0;
            margin-bottom: 12px;

            .num {
                font-size: 20px;
                line-height: $line-h-m;
            }

            p {
                margin: 0;
                font-size: $fz-s;
            }
        }
    }

    h5 {
        font-size: $fz-m;
        margin-bottom: 16px;
        text-align: $text-center;
    }

    p {
        padding: 0;
        margin-top: 16px;
    }
}</style>
