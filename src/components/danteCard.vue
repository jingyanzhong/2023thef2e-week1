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
            <button type="button" class="btn" @click="emitItem(item)">
                <div class="content">
                    <div class="money">
                        <p>{{ item.content }}</p>
                        <span>每次捐款金額</span>
                    </div>
                    <hr>
                    <div class="people">
                        <p>{{ item.people }}</p>
                        <span>贊助人數</span>
                    </div>
                </div>
            </button>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.danteCard {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    li {
        width: calc(50% - 220px);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 110px 80px;
    }
}

.title {
    display: flex;
    margin-bottom: 24px;

    h4 {
        font-size: 28px;
        font-weight: bold;
        letter-spacing: 16px;
        margin: 0 16px;
    }
}

.content {
    padding: 24px 50px;
    color: rgba(200, 115, 54, 1);
    text-align: center;
    border: 3px dotted rgba(200, 115, 54, 1);
    transition: all .5s;

    hr {
        width: 318px;
        border: 2px dotted rgba(200, 115, 54, 1);
        transition: all .5s;
    }

    &:hover {
        color: rgb(16, 94, 167);
        border: 3px dotted rgb(16, 94, 167);

        hr {

            border: 2px dotted rgb(16, 94, 167);
        }
    }
}

.money,
.people {
    p {
        font-size: 48px;
        font-weight: bold;
        margin-bottom: 16px;
    }

    span {
        font-size: 14px;
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
            letter-spacing: 8px;
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
            font-size: 36px;
            margin-bottom: 8px;
        }
    }
}

@media (max-width: 767px) {
    .danteCard {
        justify-content: start;
        li {
            width: 100%;
            margin: 0 0 36px;
        }
    }
}
</style>
