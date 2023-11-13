<script setup>
const props = defineProps(['cardItem'])
console.log(props.cardItem)

const getImageUrl = (imgSrc) => {
  const path = new URL(`/src/img/${imgSrc}`, import.meta.url).href
  return path
}
</script>
<template>
    <li v-for="(item, index) in cardItem" :key="index">
        <div class="title">
            <div class="date">
                <div class="num" :data-num="index + 1">{{ index + 1 }}</div>
                <p>{{ item.date }}</p>
            </div>
            <h5>{{ item.title }} <br> {{ item.title2 }}</h5>
        </div>
        <img :src="getImageUrl(item.img)" :alt="item.title">
        <p>{{ item.content }}</p>
    </li>
</template>
<style lang="scss" scoped>
li {
    width: calc(33.3333% - 24px);
    margin: 0 12px 24px;
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
            font-weight: $fw-bold;
            line-height: 56px;
            position: relative;
            z-index: 2;

            &::before {
                content: attr(data-num);
                position: absolute;
                z-index: -1;
                -webkit-text-stroke: 6px $gray;
                text-stroke: 6px $gray;
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
    line-height: $line-h-m;
    letter-spacing: $text-spacing-s;
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
    li {
        width: calc(50% - 24px);
    }

    p {
        padding: 16px 8px;
    }
}

@media (max-width: 767px) {
    .title {
        flex-direction: column;
        align-items: $align-center;
        margin-bottom: 12px;

        .date {
            margin-right: 0;
            margin-bottom: 16px;
            padding: 8px 16px;

            .num {
                font-size: 20px;
                line-height: $line-h-m;
            }
        }
    }

    li {
        width: 100%;
        margin: 0 0 24px;
    }

    p {
        padding: 16px 0;
    }

    h5 {
        text-align: $text-center;
    }
}</style>
