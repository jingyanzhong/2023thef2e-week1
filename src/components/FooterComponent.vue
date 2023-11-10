<template>
    <footer class="footer">
        <ul>
            <li>
                <RouterLink to="/">首頁</RouterLink>
            </li>
            <li>
                <RouterLink to="/news">最新活動</RouterLink>
            </li>
            <li>
                <RouterLink to="/policy">政策議題</RouterLink>
            </li>
            <li>
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
    text-align: center;

    ul {
        display: flex;
        justify-content: center;
        padding: 0 0 24px 0;
        margin-bottom: 0;
    }

    hr {
        width: 38%;
        border-bottom: 1px dotted rgba(69, 69, 69, 1);
        margin: 0 auto;
        margin-bottom: 24px;
    }

    a {
        display: block;
        font-size: 20px;
        color: rgba(69, 69, 69, 1);
        letter-spacing: 16px;
        margin: 0 30px;
        transition: all .5s;

        &:hover {
            color: rgba(16, 94, 167, 1);
        }
    }

    p {
        line-height: 1.8;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin-bottom: 0;
        span {
            padding-right: 8px;
        }

        &:nth-last-child(1) {
            font-size: 14px;
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
            font-size: 18px;
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
            font-size: 16px;
            letter-spacing: 0;
            margin: 0 6px;
        }

        hr {
            margin-bottom: 12px;
        }
    }
}
</style>
