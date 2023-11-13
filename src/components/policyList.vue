<script setup>
const props = defineProps(['policyList'])
</script>
<template>
    <ul class="policyList">
        <li v-for="(item, index) in policyList" :key="index">
            <div class="title">
                <p class="num" :data-num="`${index + 1}`">{{ index + 1 }}</p>
                <h3>{{ item.title1 }}<br>{{ item.title2 }}</h3>
            </div>
            <hr>
            <div class="text">
                <ol>
                    <li>
                        {{ item.content1 }}
                    </li>
                    <li>
                        {{ item.content2 }}
                    </li>
                    <li>
                        {{ item.content3 }}
                    </li>
                </ol>
            </div>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.policy {
    .policyList {
        padding: 0;

        &>li {
            display: $d-flex;
            align-items: $align-center;
            margin-bottom: 50px;

            .title {
                width: 529px;
                display: $d-flex;
                align-items: $align-center;
                margin-right: auto;

                p {
                    position: relative;
                    z-index: 1;

                    &::before {
                        content: attr(data-num);
                        position: absolute;
                        z-index: -1;
                        -webkit-text-stroke: 6px $gray;
                        text-stroke: 6px $gray;
                    }
                }
            }

            .num {
                width: 86px;
                height: 86px;
                font-size: $fz-3xl;
                font-weight: $fw-bold;
                line-height: 86px;
                color: #fff;
                text-align: $text-center;
                background: $primary;
            }

            h3 {
                text-align: $text-center;
                font-size: $fz-l;
                letter-spacing: 10px;
                margin: 0 auto;
            }

            hr {
                height: 86px;
                border: 2px dotted $primary;
                margin: 0 48px 0 24px;
            }

            .text {
                width: 686px;

                ol {
                    padding: 0;

                    li {
                        font-size: $fz-m;
                    }
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .policy {
        .policyList {
            &>li {
                .title {
                    width: 50%;
                }

                .num {
                    width: 60px;
                    height: 60px;
                    font-size: $fz-xxl;
                    line-height: 60px;
                    margin-right: 8px;
                }

                h3 {
                    letter-spacing: $text-spacing-xs;
                }

                hr {
                    height: 120px;
                    margin: 0 48px 0 8px;
                }

                .text {
                    width: 50%;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .policy {
        .policyList {
            &>li {
                flex-direction: column;

                .title {
                    width: 100%;
                    margin-bottom: 12px;
                }

                h3 {
                    letter-spacing: $text-spacing-s;
                }

                hr {
                    display: none;
                }

                .text {
                    width: 100%;

                    ol {
                        margin-left: 20px;
                    }
                }
                .num {
                    font-size: 20px;
                    line-height: 60px;
                }
            }
        }
    }
}</style>
