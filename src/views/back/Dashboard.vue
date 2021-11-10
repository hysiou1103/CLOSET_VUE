<template>
  <div class="dashboard">
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/img/loading.gif" />
      </template>
    </loading>
    <nav class="navbar navbar-light bg-light sticky-top flex-md-nowrap py-2">
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"
        >CLOSET 後臺管理系統</a
      >
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="logOut()">登出</a>
        </li>
      </ul>
    </nav>
    <Alert/>
    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block sidebar collapse"
        >
          <div class="sidebar-sticky pt-3">
            <h6
              class="
                sidebar-heading
                d-flex
                justify-content-between
                align-items-center
                px-3
                mt-4
                mb-1
                text-muted
              "
            >
              <span>管理員功能</span>
              <a class="d-flex align-items-center text-muted" href="#"></a>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="product" class="nav-link">
                  <i class="fas fa-box"></i>
                  產品列表
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="order" class="nav-link">
                  <i class="fas fa-copy"></i>
                  訂單管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="coupon" class="nav-link">
                  <i class="fas fa-ticket-alt"></i>
                  優惠券管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">
                  <i class="fas fa-store-alt"></i>
                  回到賣場
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
export default {
  components: {
    Alert
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      this.$http
        .post(api)
        .then((response) => {
          if (response.data.success) {
            document.cookie = "hexToken=; expires=; path=/";
            this.$router.push("/login");
          }
        })
        .catch((err) => {
          this.$bus.$emit("messagePush", err, "warning");
        });
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    }
  },
  created () {
    const myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = myCookie;
  }
};
</script>
