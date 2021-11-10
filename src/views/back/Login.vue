<template>
  <div class="login">
    <Alert />
    <div class="m-2">
      <router-link to="/" class="d-block text-primary text-center p-4 h3"
        >ADMIN LOGIN</router-link
      >
      <form @submit.prevent="login()">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            v-model="user.username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="user.password"
          />
        </div>
        <small>
          <a
            href="https://support.google.com/accounts/answer/41078?hl=zh-Hant&co=GENIE.Platform%3DDesktop"
            target="_blank"
          >
            Forgot Your Passowrd?
          </a>
        </small>
        <button type="submit" class="btn btn-outline-secondary my-2">
          LOGIN
        </button>
        <a
          href="https://www.facebook.com/help"
          target="_blank"
          class="fb btn mt-2"
        >
          Login with Facebook
        </a>
      </form>
    </div>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
export default {
  name: "Login",
  components: {
    Alert
  },
  data () {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login () {
      // 登入成功後跳轉至商品管理
      const vm = this;
      vm.$store.dispatch("isLoading", true);
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      vm.$http
        .post(api, vm.user)
        .then((response) => {
          if (response.data.success) {
            const token = response.data.token;
            const expired = new Date(response.data.expired);
            document.cookie = `hexToken=${token}; expires=${expired}`;
            vm.$router.push("/admin/product");
          } else {
            vm.$bus.$emit("messagePush", response.data.message, "danger");
          }
          vm.$store.dispatch("isLoading", false);
        })
        .catch((err) => {
          vm.$bus.$emit("messagePush", err, "warning");
          vm.$store.dispatch("isLoading", false);
        });
    }
  }
};
</script>
