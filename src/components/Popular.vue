<template>
  <section class="popular preFadein pt-2 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col selected">
          <div class="h2 text-primary pt-2">編輯嚴選</div>
          <p class="py-2">
            本週由小編精心挑選出下列特價品，在這個艱難的時刻，<br />
            依然堅持品質，並用最實際的行動，與您一起度過。
          </p>
        </div>
        <div class="col-md-8 col pt-md-5">
          <Swiper class="swiper" :options="swiperOption">
            <SwiperSlide
              class="pupolarItems"
              v-for="item in products"
              :key="item.id"
            >
              <div class="card">
                <div class="img">
                  <router-link
                    :to="{
                      name: 'productDetail',
                      params: { productId: `${item.id}` },
                    }"
                  >
                    <img
                      :src="item.imageUrl"
                      class="card-img-top"
                      alt="product photo"
                    />
                    <button type="button" class="btn btn-outline-light">
                      More
                    </button>
                  </router-link>
                </div>

                <div class="text-primary p-2">
                  <router-link
                    class="productTitle"
                    :to="{
                      name: 'productDetail',
                      params: { productId: `${item.id}` },
                    }"
                  >
                    {{ item.title }}
                  </router-link>
                </div>
                <div class="text-primary px-2 py-1">
                  <p>{{ item.price | currency }}元</p>
                </div>
              </div>
            </SwiperSlide>
            <div
              class="swiper-button-prev swiper-button-white"
              slot="button-prev"
            ></div>
            <div
              class="swiper-button-next swiper-button-white"
              slot="button-next"
            ></div>
          </Swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "Popular",
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15
          }
        }
      },
      products: []
    };
  },
  methods: {
    getPopularProduct () {
      // 只篩選出有特價的商品
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`;
      vm.$http
        .get(api)
        .then((response) => {
          if (response.data.success) {
            vm.products = response.data.products.filter(
              (item) => item.origin_price && item.is_enabled
            );
          }
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
        });
    }
  },
  created () {
    const vm = this;
    vm.getPopularProduct();
  }
};
</script>
