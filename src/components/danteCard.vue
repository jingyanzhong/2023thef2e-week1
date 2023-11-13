<script setup>
const props = defineProps(['danteItem'])

const emit = defineEmits(['dante-card'])
const emitItem = (item) => {
  emit('dante-card', item)
}
</script>
<template>
    <ul class="danteCard">
        <li v-for="(item, index) in danteItem" :key="index">
            <div class="title">
                <img src="../img/line-block-l.png" alt="線條-左">
                <h4>{{ item.title }}</h4>
                <img src="../img/line-block-r.png" alt="線條-右">
            </div>
            <button type="button" class="btn btn-card" @click="emitItem(item)">
                <div class="content">
                    <div class="money">
                        <p :data-num="`${item.content}`">{{ item.content }}</p>
                        <span>每次捐款金額</span>
                    </div>
                    <hr>
                    <div class="people">
                        <p :data-num="`${item.people}`">{{ item.people }}</p>
                        <span>贊助人數</span>
                    </div>
                </div>
            </button>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.danteCard {
    display: $d-flex;
    flex-wrap: wrap;
    padding: 0;

    li {
        width: calc(50% - 220px);
        display: $d-flex;
        flex-direction: column;
        align-items: $align-center;
        margin: 0 110px 80px;
    }
}

.title {
    display: $d-flex;
    margin-bottom: 24px;

    h4 {
        font-size: 28px;
        font-weight: $fw-bold;
        letter-spacing: $text-spacing-m;
        margin: 0 16px;
    }
}

.content {
    padding: 24px 50px;
    color: $primary;
    text-align: $text-center;
    border: 3px dotted $primary;
    transition: all .5s;

    hr {
        width: 318px;
        border: 2px dotted $primary;
        transition: all .5s;
    }

    &:hover {
        color: $secondary;
        border: 3px dotted $secondary;

        hr {

            border: 2px dotted $secondary;
        }
    }
}

.money,
.people {
    p {
        font-size: $fz-3xl;
        font-weight: $fw-bold;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;

        &::before {
            content: attr(data-num);
            position: absolute;
            z-index: -1;
            -webkit-text-stroke: 8px #fff;
            text-stroke: 8px #fff;
        }
    }

    span {
        font-size: $fz-s;
    }
}

@media (max-width: 768px) {
    .danteCard {
        justify-content: space-between;

        li {
            width: calc(50% - 120px);
            margin: 0 60px 80px;
        }
    }

    .title {
        h4 {
            text-wrap: nowrap;
            font-size: 20px;
            letter-spacing: $text-spacing-s;
        }
    }

    .content {
        padding: 24px;

        hr {
            width: 240px;
        }
    }

    .money,
    .people {
        p {
            font-size: $fz-xxl;
            margin-bottom: 8px;
        }
    }
}

@media (max-width: 767px) {
    .btn-card {
        width: 100%;
        padding: 0;
    }
    .danteCard {
        justify-content: start;

        li {
            width: 100%;
            margin: 0 0 36px;
        }

        .money,
        .people {
            p {
                &::before {
                    -webkit-text-stroke: 6px #fff;
                    text-stroke: 6px #fff;
                }
            }
        }
    }
}
</style>
