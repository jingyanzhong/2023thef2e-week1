<script setup>
import 'bootstrap/js/dist/collapse'
import { useIsActiveStore } from '../stores/isActive'
import { storeToRefs } from 'pinia'
const isActiveStore = useIsActiveStore()
const { isActive } = storeToRefs(isActiveStore)
const hiddenNav = (active) => {
  document.getElementById('navbarNav').classList.remove('show')
  isActive.value = active
}
</script>

<template>
    <nav class="navbar navbar-expand-lg menu" data-aos="fade-down" data-aos-duration="1000">
        <div class="container">
            <button class="navbar-toggler mobile-list" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <h1>
                <RouterLink class="navbar-brand" to="/" @click="hiddenNav('/')">喵立翰</RouterLink>
            </h1>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item" @click="hiddenNav('news')">
                        <RouterLink class="nav-link" to="/news" :class="{ 'active' : isActive === 'news' }">最新活動</RouterLink>
                    </li>
                    <li class="nav-item" @click="hiddenNav('policy')">
                        <RouterLink class="nav-link" to="/policy" :class="{ 'active' : isActive === 'policy' }">政策議題</RouterLink>
                    </li>
                    <li class="nav-item" @click="hiddenNav('dante')">
                        <RouterLink class="nav-link" to="/dante" :class="{ 'active' : isActive === 'dante' }">小額捐款</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="Navbox"></div>
</template>

<style lang="scss" scoped>
.menu {
    padding: 17px 0;
  h1 {
      a {
      display: block;
      background: url(../img/logo.png);
      width: 163px;
      height: 66px;
      overflow: hidden;
      text-wrap: nowrap;
      text-indent: 101%;
    }
  }

  a {
    font-size: $fz-xl;
    color: $gray;
    letter-spacing: $text-spacing-s;
    margin-left: 24px;
    transition: all .5s;

    &:hover,
    &.active {
      color: $secondary !important;
    }
  }
}

@media (max-width: 768px) {
  .Navbox {
    height: 94px;
  }
    .mobile-list {
        width: 35px;
        height: 35px;
        border-radius: 30px;
        background: #fff;
        padding: 0;
        .navbar-toggler-icon {
            width: 25px;
            height: 25px;
        }
    }
  .menu {
    position: absolute;
    left: 0;
    right: 0;
    padding: 17px 20px;
    z-index: 4;
    h1 {
        margin: 0 auto;
        padding-bottom: 20px;
      a {
        height: 60px;
        background-size: contain;
        background-repeat: no-repeat;
      }
    }
    a {
      margin-left: 0;
    }
    #navbarNav {
      margin: 0 -32px;
      background: #fff;
      padding: 20px;
    }
    li {
      text-align: $text-center;
      margin-bottom: 14px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
