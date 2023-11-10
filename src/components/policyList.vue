<script setup>
const props = defineProps(['policyList'])
console.log(props.policyList)
</script>
<template>
    <ul class="policyList">
        <li v-for="(item, index) in policyList" :key="index">
            <div class="title">
                <p class="num">{{ index + 1 }}</p>
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
            display: flex;
            align-items: center;
            margin-bottom: 50px;

            .title {
                width: 529px;
                display: flex;
                align-items: center;
                margin-right: auto;
            }

            .num {
                width: 86px;
                height: 86px;
                font-size: 48px;
                font-weight: bold;
                line-height: 86px;
                color: #fff;
                text-align: center;
                background: rgba(200, 115, 54, 1);
            }

            h3 {
                text-align: center;
                font-size: 18px;
                letter-spacing: 10px;
                margin: 0 auto;
            }

            hr {
                height: 86px;
                border: 2px dotted rgba(200, 115, 54, 1);
                margin: 0 48px 0 24px;
            }

            .text {
                width: 686px;
                ol {
                    padding: 0;
                    li {
                        font-size: 16px;
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
                    font-size: 36px;
                    line-height: 60px;
                    margin-right: 8px;
                }

                h3 {
                    letter-spacing: 4px;
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
                    letter-spacing: 6px;
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
            }
        }
    }
}</style>
