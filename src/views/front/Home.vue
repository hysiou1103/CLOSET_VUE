<template>
  <div>
    <router-link to="/products">
      <Swiper class="banner preFadein swiper" :options="swiperOption">
        <SwiperSlide class="slide-1"></SwiperSlide>
        <SwiperSlide class="slide-2"></SwiperSlide>
        <SwiperSlide class="slide-3"></SwiperSlide>
        <SwiperSlide class="slide-4"></SwiperSlide>
        <div
          class="swiper-button-prev swiper-button-white"
          slot="button-prev"
        ></div>
        <div
          class="swiper-button-next swiper-button-white"
          slot="button-next"
        ></div>
      </Swiper>
    </router-link>
    <main class="container-fluid bg-light">
      <!-- 關於closet -->
      <section class="intro" id="introSec">
        <div class="row concept preFadein align-items-center">
          <div class="col-md-5 col conceptImage"></div>
          <div class="container">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-lg-10 col">
                    <h2 class="text-primary">關於我們</h2>
                    <div class="quote text-right">
                      <span>"Buy less, Choose well, Make it last."</span>
                    </div>
                    <p class="py-2 text-md-dark">
                      CLOSET
                      始終秉持著舒適、質感及環保精神，採用有機棉及天然染色原料，陪伴妳體驗生活中的大小細節。
                      無時無刻、無論是活潑、自信、幹練的妳，都能夠在這裡找到自己的風格。
                    </p>
                    <div class="text-md-left text-right">
                      <router-link
                        to="/products"
                        class="btn btn-outline-warning my-1"
                        >立即前往選購</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 編輯嚴選 -->
      <popular></popular>
    </main>
    <!-- 商場連結 -->
    <section class="productLink preFadein">
      <ul class="d-flex p-0 mb-0">
        <li>
          <a href="#" @click.prevent="goProduct('Tops')">
            <img src="@/assets/img/productLink-1.jpg" alt="productLinkPhoto" />
            <div class="link d-flex align-items-center justify-content-center">
              <div class="category">TOPS</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="goProduct('Bottoms')">
            <img src="@/assets/img/productLink-2.jpg" alt="productLinkPhoto" />
            <div class="link d-flex align-items-center justify-content-center">
              <div class="category">BOTTOMS</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="goProduct('Dress')">
            <img src="@/assets/img/productLink-3.jpg" alt="productLinkPhoto" />
            <div class="link d-flex align-items-center justify-content-center">
              <div class="category">DRESS</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" @click.prevent="goProduct('Outwear')">
            <img src="@/assets/img/productLink-4.jpg" alt="productLinkPhoto" />
            <div class="link d-flex align-items-center justify-content-center">
              <div class="category">OUTWEAR</div>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <!-- 訂閱 -->
    <section class="subscribeWrap preFadein container-fluid bg-light py-4">
      <div class="container subscribe">
        <div class="row">
          <div class="col-md-5"></div>
          <div
            class="
              col-md-7
              d-flex
              flex-column
              justify-content-center
              align-items-center align-items-md-end
              py-4
            "
          >
            <div class="content">
              <h3 class="text-center py-2">
                <i class="far fa-bell"></i> Join Us !
              </h3>
              <div class="h5">
                訂閱<span class="d-none d-md-inline-block">電子報</span
                >以取得最新商品及優惠資訊
              </div>
              <ValidationProvider rules="required|email" v-slot="{ errors, classes }">
                <div class="d-flex">
                  <input
                    type="email"
                    class="form-control mr-1"
                    name="信箱"
                    v-model="mail"
                    id="email"
                    :class="classes"
                  />
                  <button
                    class="btn btn-dark"
                    type="button"
                    @click="checkedMail"
                    :disabled="errors[0]||mail === ''"
                    :class="{'prohibit' :errors[0]||mail === ''}"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </ValidationProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 彈跳廣告 -->
    <div class="adsWrap" :class="{ 'd-none': adsClose, adsShow: adsShow }">
      <div class="ads">
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
        <div class="forth">
          <div class="closeIcon text-right">
            <a href="#" @click.prevent="adsClose = true"
              ><i class="fas fa-times"></i
            ></a>
          </div>
          <router-link to="/customer-coupon">
            <div class="container text-center">
              <h4>開幕慶!</h4>
              <p>
                即日起至2021/12/31，<br />
                結帳輸入折扣碼：CLOSET2021<br />
                不限消費金額，即享 <span>8</span> 折優惠
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import Popular from "@/components/Popular";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    Popular
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        initialSlide: 0,
        loop: true
      },
      adsShow: false,
      adsClose: false,
      mail: ""
    };
  },
  methods: {
    goProduct (val) {
      this.$router.push(`/products?cate=${val}`);
    },
    checkedMail () {
      const vm = this;
      if (vm.mail === "") {
        vm.$bus.$emit("messagePush", "請輸入您的電子信箱", "warning");
        return;
      }
      vm.$bus.$emit("messagePush", "恭喜您已成功訂閱", "success");
    }
  },
  mounted () {
    setTimeout(() => {
      this.adsShow = true;
    }, 1000);
    setTimeout(() => {
      this.adsClose = true;
    }, 6000);
    const options = {
      root: null,
      threshold: 0.1
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeIn");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    const targets = [
      document.querySelector(".banner"),
      document.querySelector(".concept"),
      document.querySelector(".popular"),
      document.querySelector(".productLink"),
      document.querySelector(".subscribeWrap")
    ];
    targets.forEach((target) => {
      observer.observe(target);
    });
  }
};
</script>
