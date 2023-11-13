<script setup>
import Card from '../components/NewsCard.vue'
import { useDataStore } from '../stores/data.js'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
const dataStore = useDataStore()
const { newsData } = storeToRefs(dataStore)

// filter
const keyword = ref(null)
const filterData = computed(() => {
  if (keyword.value == null) {
    return newsData.value
  } else {
    return newsData.value.filter((item) => {
      return (item.title.match(keyword.value) || item.title2.match(keyword.value))
    })
  }
})
</script>
<template>
    <section class="news">
        <div class="banner"></div>
        <header>
            <div class="title">
                <h2>最新消息</h2>
                <input type="search" name="search" id="search" placeholder="請輸入關鍵字" v-model="keyword"><br>
                <input type="date" class="date">
            </div>
            <div class="badge">
                <ul>
                    <li>
                        <p data-num="1">1</p>
                        <p>分享</p>
                    </li>
                    <li>
                        <p data-num="2">2</p>
                        <p>收藏</p>
                    </li>
                    <li>
                        <p data-num="8">8</p>
                        <p>人數</p>
                    </li>
                </ul>
            </div>
        </header>
        <div class="content">
            <div class="container">
                <ul class="newsCard">
                    <Card :card-item="filterData"></Card>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 900px;
    background: url(../img/news-bg.png) center top no-repeat;
    background-size: cover;
}

@media (max-width: 768px) {
    .banner {
        height: 600px;
    }
}

@media (max-width: 767px) {
    .banner {
        height: 416px;
    }
}

header {
    display: $d-flex;
    flex-direction: column;
    align-items: end;
    padding: 232px 192px 0 0;
}

.title {
    max-width: 414px;
    text-align: $text-center;
    padding-bottom: 248px;

    h2 {
        font-size: $fz-3xl;
        font-weight: $fw-bold;
        letter-spacing: $text-spacing-m;
        margin-bottom: 24px;
    }

    #search {
        width: 414px;
        max-width: 414px;
        padding: 8px 20px;
        border-radius: 50px;
        border: 1px solid $gray;
        margin-bottom: 24px;
    }

    .date {
        width: 414px;
        max-width: 414px;
        padding: 8px 20px;
        border-radius: 50px;
        border: 1px solid $gray;
    }
}

@media (max-width: 768px) {
    header {
        align-items: $align-center;
        padding: 390px 0 0;
    }

    .title {
        order: 2;
        margin-top: 48px;
        padding-bottom: 48px;
    }
}

@media (max-width: 767px) {
    header {
        padding: 260px 0 0;
    }

    .title {
        width: 100%;
        margin-top: 24px;
        padding-bottom: 24px;

        h2 {
            font-size: $fz-l;
        }

        #search {
            width: 100%;
            max-width: 350px;
            font-size: $fz-m;
            margin-bottom: 12px;
            background: transparent;
        }

        .date {
            width: 100%;
            max-width: 350px;
            font-size: $fz-m;
            background: transparent;
        }
    }
}

.badge {
    padding: 0;

    ul {
        display: $d-flex;
        padding: 0;
    }

    li {
        padding: 12px 80px;
        border-radius: 8px 8px 0 0;
        background: rgba(228, 211, 204, 1);
        margin-left: 24px;
        text-align: $text-center;

        p {
            font-size: $fz-3xl;
            font-weight: $fw-bold;
            color: $primary;
            position: relative;
            z-index: 1;

            &:nth-last-child(1) {
                font-size: $fz-s;
            }

            &::before {
                content: attr(data-num);
                position: absolute;
                z-index: -1;
                -webkit-text-stroke: 8px #fff;
                text-stroke: 8px #fff;
            }
        }
    }
}

@media (max-width: 768px) {
    .badge {
        padding-right: 0;

        li {
            padding: 12px 60px;
            margin: 0 12px;
        }
    }
}

@media (max-width: 767px) {
    .badge {
        li {
            padding: 6px 36px;

            p {
                font-size: 20px;
                line-height: $line-h-m;
                margin: 0;
                &::before {
                -webkit-text-stroke: 6px #fff;
                text-stroke: 6px #fff;
            }
            }
        }
    }
}

.content {
    .container {
        padding: 120px 0;
    }

    .newsCard {
        display: $d-flex;
        flex-wrap: wrap;
        padding-left: 0;
    }
}

@media (max-width: 768px) {
    .content {
        .container {
            padding: 60px 0;
        }
    }
}
</style>
