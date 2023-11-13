<script setup>
import { useIsActiveStore } from '../stores/isActive'
const isActiveStore = useIsActiveStore()
const { navActive } = isActiveStore
</script>

<template>
    <footer class="footer">
        <ul>
            <li @click="navActive('/')">
                <RouterLink to="/">首頁</RouterLink>
            </li>
            <li @click="navActive('news')">
                <RouterLink to="/news">最新活動</RouterLink>
            </li>
            <li @click="navActive('policy')">
                <RouterLink to="/policy">政策議題</RouterLink>
            </li>
            <li @click="navActive('dante')">
                <RouterLink to="/dante">小額捐款</RouterLink>
            </li>
        </ul>
        <hr>
        <p>
            <span class="material-icons material-symbols-outlined">location_on</span>
            喵星區，毛茸茸大道88號，喵喵大樓3樓
        </p>
        <p>
            <span class="material-icons material-symbols-outlined">mail</span>
            meowoffice@linmeow.tw
        </p>
        <p>
            <span class="material-icons material-symbols-outlined">call</span>
            (02) 888-5678
        </p>
        <p>© 2023 喵立翰 版權所有。</p>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    background: #fff;
    padding: 40px 0;
    text-align: $text-center;

    ul {
        display: $d-flex;
        justify-content: $justify-center;
        padding: 0 0 24px 0;
        margin-bottom: 0;
    }

    hr {
        width: 38%;
        border-bottom: 1px dotted $gray;
        margin: 0 auto;
        margin-bottom: 24px;
    }

    a {
        display: block;
        font-size: 20px;
        color: $gray;
        letter-spacing: $text-spacing-m;
        margin: 0 30px;
        transition: all .5s;

        &:hover {
            color: $secondary;
        }
    }

    p {
        line-height: $line-h-m;
        display: $d-flex;
        align-items: $align-center;
        justify-content: $justify-center;
        font-size: $fz-m;
        margin-bottom: 0;
        span {
            padding-right: 8px;
        }

        &:nth-last-child(1) {
            font-size: $fz-s;
            margin-top: 24px;
        }
    }
}

@media (max-width: 768px) {
    .footer {
        margin: 0 -20px;

        hr {
            width: 75%;
        }

        a {
            font-size: $fz-l;
            letter-spacing: 10px;
            margin: 0 24px;
        }
    }
}

@media (max-width: 767px) {
    .footer {
        ul {
            padding: 0 0 12px 0;
        }

        a {
            font-size: $fz-m;
            letter-spacing: 0;
            margin: 0 6px;
        }

        hr {
            margin-bottom: 12px;
        }
    }
}
</style>
