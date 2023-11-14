<script setup>
import NewsSwiper from '../components/NewsSwiper.vue'
import DanteSwiper from '../components/DanteSwiper.vue'
import { useDataStore } from '../stores/data.js'
import { useIsActiveStore } from '../stores/isActive'
import { storeToRefs } from 'pinia'
const isActiveStore = useIsActiveStore()
const { navActive } = isActiveStore
const dataStore = useDataStore()
const { newsData, danteData } = storeToRefs(dataStore)
</script>

<template>
  <main>
    <div class="banner"></div>
    <h2 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">台灣的明天，喵先鋪路！<br>為喵星人，護台灣！</h2>
    <section class="slogan">
      <div class="container">
        <div class="name" data-aos="fade-right" data-aos-duration="1000">
          <h3>喵立翰<br><span>MIAO LI-HAN</span></h3>
          <h4>立法委員候選人</h4>
        </div>
        <div class="content" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="2000">
          <h5>主張</h5>
          <hr align="left">
          <p>我堅信，藉由推動更完善的貓咪福利和相關政策，更是間接地投資於台灣的未來。畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。</p>
          <p>因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</p>
        </div>
      </div>
    </section>
    <section class="news" data-aos="zoom-in-up" data-aos-duration="1000">
      <div class="container">
        <h4 class="none-m">最新消息</h4>
        <RouterLink to="/news" class="more-btn none-m" @click="navActive('news')">
          MORE
          <span class="material-icons material-symbols-outlined">arrow_right</span>
        </RouterLink>
      </div>
      <div class="content">
        <div class="triangle"></div>
        <h4 class="show-m">最新消息</h4>
        <NewsSwiper :card-item="newsData"></NewsSwiper>
        <RouterLink to="/news" class="more-btn show-m" @click="navActive('news')">
          MORE
          <span class="material-icons material-symbols-outlined">arrow_right</span>
        </RouterLink>
      </div>
    </section>
    <section class="policy">
      <div class="container">
        <h4>政策議題</h4>
        <ul>
          <li data-aos="flip-right" data-aos-duration="1000">
            <img src="../img/icon1.png" alt="icon1">
            <p>為毛孩子謀福利！<br>推動寵物醫療保障方案</p>
          </li>
          <li data-aos="flip-right" data-aos-duration="1000" data-aos-delay="500">
            <img src="../img/icon2.png" alt="icon2">
            <p>打造休閒天堂！<br>推廣寵物休閒與娛樂場所</p>
          </li>
          <li data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1000">
            <img src="../img/icon3.png" alt="icon3">
            <p>推廣寵物飼養教育<br>讓愛更加專業</p>
          </li>
        </ul>
        <RouterLink to="/policy" class="more-btn" @click="navActive('policy')">
          MORE
          <span class="material-icons material-symbols-outlined">arrow_right</span>
        </RouterLink>
      </div>
    </section>
    <section class="donate">
      <div class="title">
        <h4>您的小筆捐款<br>是每隻毛孩<span>未來的大大動力！</span></h4>
        <p>目前小額贊助總金額：987,655,873</p>
      </div>
      <div class="list">
        <DanteSwiper :dante-item="danteData"></DanteSwiper>
      </div>
      <RouterLink to="/dante" class="default-btn" @click="navActive('dante')">
        前往捐款
        <span class="material-icons material-symbols-outlined">arrow_right</span>
      </RouterLink>
    </section>
    <section class="form">
      <div class="container">
        <div class="title">
          <img class="none-m" src="../img/Line-l.png" alt="線條-左">
          <div class="text">
            <h4>您的聲音，<span>我們的行動！</span></h4>
            <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。<br>無論大小事，我都誠摯希望聽到您的建議。<br>分享您的想法，一同為我們的未來打造更美好！</p>
          </div>
          <img class="none-m" src="../img/Line-r.png" alt="線條-右">
        </div>
        <form id="form" data-aos="flip-left" data-aos-duration="2000">
          <label for="name" class="name">姓名</label>
          <input type="text" id="name" name="name" placeholder="請輸入中文或英文姓名"><br>
          <label for="mail" class="mail">E-mail</label>
          <input type="text" id="mail" name="mail" placeholder="請輸入E-mail帳戶"><br>
          <label for="phone" class="phone">手機</label>
          <input type="tel" id="phone" name="phone" placeholder="請輸入十位數字"><br>
          <label for="msg" class="msg">建言</label>
          <textarea name="message" id="msg" cols="30" rows="10" placeholder="請留下您的建言"></textarea><br>
          <button type="submit" class="default-btn">
            送出
            <span class="material-icons material-symbols-outlined">arrow_right</span>
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 1090px;
  background: url(../img/home-bg.png) center;
}

h2 {
  font-size: $fz-3xl;
  font-weight: $fw-bold;
  color: $secondary;
  text-align: center;
  margin-top: 106px;
  margin-bottom: 357px;
}

h4 {
  font-size: 32px;
  font-weight: $fw-bold;
  letter-spacing: $text-spacing-m;
}

@media (max-width: 768px) {
  h2 {
    margin-bottom: 240px;
  }
}

@media (max-width: 767px) {
  .banner {
    height: 550px;
    background: url(../img/home-bg.png) center;
    background-size: cover;
  }

  h2 {
    font-size: $fz-l;
    letter-spacing: $text-spacing-s;
    line-height: $line-h-l;
    margin-top: 28px;
    margin-bottom: 58px;
  }

  h4 {
    font-size: $fz-xl;
    line-height: $line-h-l;
  }
}

.slogan {
  padding: 83px 0;

  .container {
    display: $d-flex;
    justify-content: $justify-center;
    align-items: $align-center;
  }

  .name {
    h3 {
      text-align: $text-center;
      font-size: $fz-3xl;
      font-weight: $fw-bold;
      font-family: 'Noto Serif TC', serif;
      line-height: $line-h-xl;
      letter-spacing: $text-spacing-m;
      text-indent: 16px;

      span {
        font-size: 20px;
        letter-spacing: $text-spacing-m;
        font-weight: 400;
        font-family: 'Noto Sans TC', sans-serif;
      }
    }

    h4 {
      text-align: $text-center;
      font-size: 20px;
      letter-spacing: $text-spacing-m;
    }
  }

  .content {
    width: 50%;
    margin-left: 320px;

    h5 {
      font-size: $fz-xl;
      letter-spacing: $text-spacing-s;
      margin-bottom: 36px;
    }

    p {
      margin-top: 36px;
    }

    hr {
      width: 50%;
      border-bottom: 2px solid rgba(69, 69, 69, 1);
    }
  }
}

@media (max-width: 768px) {
  .slogan {
    .content {
      margin-left: auto;
    }
  }
}

@media (max-width: 767px) {
  .slogan {
    padding: 83px 0 30px;

    .container {
      display: block;
    }

    .name {
      margin-bottom: 40px;

      h3 {
        font-size: $fz-xl;
        line-height: $line-h-l;
        letter-spacing: $text-spacing-l;
        text-indent: 28px;

        span {
          font-size: $fz-m;
          line-height: $line-h-m;
          letter-spacing: 0;
        }
      }

      h4 {
        font-size: $fz-m;
        font-weight: 400;
        letter-spacing: 0;
      }
    }

    .content {
      width: 100%;
      margin-left: 0;

      h5 {
        font-size: $fz-m;
        letter-spacing: 0;
        margin-bottom: 12px;
      }

      p {
        font-size: $fz-m;
        margin-top: 12px;
        line-height: $line-h-m;
      }

      hr {
        width: 70%;
      }
    }
  }
}

.news {
  padding-top: 139px;
  margin-bottom: 80px;

  .container {
    display: $d-flex;
    align-items: $align-center;
  }

  h4 {
    margin-right: auto;
    margin-left: 175px;
  }

  .content {
    position: relative;
    margin-left: 177px;
    background: #fff;
    padding: 120px 0 120px 120px;
    border-radius: 100px 0 0 100px;
  }

  .triangle {

    // height: 207px;
    &::before {
      content: '';
      display: block;
      width: 207px;
      height: 207px;
      border: solid;
      border-width: 0 104px 207px 104px;
      border-color: transparent transparent #fff transparent;
      position: absolute;
      top: -205px;
      left: 11%;
      z-index: -1;
    }
  }
}

@media (max-width: 768px) {
  .news {
    h4 {
      margin-left: 58px;
    }

    .content {
      margin-left: 0;
      padding: 48px;
      border-radius: 50px;
    }
  }
}

@media (max-width: 767px) {
  .news {
    padding-top: 60px;
    margin-bottom: 20px;

    h4 {
      margin: 0;
      margin-bottom: 40px;
      text-align: $text-center;
    }

    a {
      margin-top: 40px;
    }

    .show-m {
      display: $d-flex !important;
      justify-content: $justify-center;
      text-align: $align-center;
    }

    .content {
      margin: 0 -20px;
      padding: 20px;
      border-radius: 0;
    }

    .triangle {
      &::before {
        width: 60px;
        height: 60px;
        border-width: 0 30px 60px 30px;
        top: -60px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

.policy {
  margin-bottom: 80px;

  h4 {
    text-align: $text-center;
    margin-bottom: 80px;
  }

  ul {
    display: $d-flex;
    flex-wrap: wrap;
    justify-content: $justify-center;
    margin-bottom: 80px;
    padding: 0;
  }

  li {
    display: $d-flex;
    flex-direction: column;
    align-items: $align-center;
    text-align: $text-center;
    padding: 0 110px;

    img {
      display: block;
      margin-bottom: 40px;
    }
  }

  a {
    justify-content: $justify-center;
  }
}

@media (max-width: 768px) {
  .policy {
    li {
      padding: 0 16px;
    }
  }
}

@media (max-width: 767px) {
  .policy {
    h4 {
      margin-bottom: 40px;
    }

    ul {
      display: block;
      margin-bottom: 40px;
    }

    li {
      &:nth-of-type(3) {
        p {
          margin-bottom: 0;
        }
      }

      img {
        width: 100px;
        margin: 0 auto 40px;
      }

      p {
        font-size: $fz-m;
        margin-bottom: 24px;
      }
    }
  }
}

.donate {
  margin-bottom: 80px;

  .title {
    text-align: $text-center;
    margin-bottom: 80px;

    h4 {
      text-align: $text-center;
      margin-bottom: 24px;
    }
  }

  .list {
    margin-bottom: 80px;
  }

}

@media (max-width: 767px) {
  .donate {
    .title {
      margin-bottom: 40px;
    }

    h4 {
      letter-spacing: $text-spacing-xs;
      line-height: $line-h-l;

      span {
        display: block;
      }
    }

    .list {
      margin-bottom: 40px;
    }
  }
}

.form {
  margin-bottom: 80px;

  .title {
    display: $d-flex;
    justify-content: $justify-center;
    text-align: $text-center;
    margin-bottom: 64px;

    .text {
      padding: 0 160px;
    }

    p {
      line-height: $line-h-m;
    }
  }

  h4 {
    margin-bottom: 24px;
  }

  #form {
    padding: 24px 0;
    background: #fff;
    border-radius: 24px;
    border: 5px dotted $primary;
    text-align: $text-center;

    label {
      display: block;
      margin-bottom: 24px;
    }

    input {
      display: block;
      margin: 0 auto;
      width: 414px;
      padding: 8px;
      text-align: $text-center;
    }

    textarea {
      width: 414px;
      padding: 8px;
    }

    button {
      border: none;
      cursor: pointer;
      margin-top: 24px;
    }
  }
}

@media (max-width: 768px) {
  .form {
    .none-m {
      display: none;
    }

    .title {
      .text {
        padding: 0;
      }
    }
  }
}

@media (max-width: 767px) {
  .form {
    h4 {
      line-height: 34px;

      span {
        display: block;
      }
    }

    .title {
      margin-bottom: 60px;

      p {
        text-align: start;
      }
    }

    #form {
      padding: 24px;

      label {
        margin-bottom: 16px;
      }

      input {
        width: 100%;
      }

      textarea {
        width: 100%;
      }
    }
  }
}</style>
