<script setup>
const props = defineProps(['cardItem'])
console.log(props.cardItem)
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
        <img :src="`src/img/${item.img}`" :alt="item.title">
        <p>{{ item.content }}</p>
    </li>
</template>
<style lang="scss" scoped>
li {
    width: calc(33.3333% - 24px);
    margin: 0 12px 24px;
}

.title {
    display: flex;
    align-items: center;

    .date {
        background: rgba(200, 115, 54, 1);
        padding: 8px 25px 8px 25px;
        color: #fff;
        text-align: center;
        margin-right: auto;

        .num {
            font-size: 48px;
            font-weight: bold;
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
        }
    }
}

h5 {
    font-size: 18px;
    letter-spacing: 8px;
    text-align: end;
}

img {
    width: 100%;
}

p {
    line-height: 1.8;
    padding: 20px 16px;
}

@media (max-width: 768px) {
    li {
        width: calc(50% - 24px);
    }
}

@media (max-width: 767px) {
    li {
        width: 100%;
        margin: 0 12px 24px;
    }
}
</style>
