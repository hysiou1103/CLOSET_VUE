<template>
  <div class="home">
    <loading :active.sync="isLoading">
      <template slot="default">
        <img src="@/assets/img/loading.gif" alt="loadingPhoto" />
      </template>
    </loading>
    <WebHeader />
    <Alert />
    <router-view></router-view>
    <GoTop />
    <WebFooter />
  </div>
</template>

<script>
import WebHeader from "@/components/Nav";
import WebFooter from "@/components/Footer";
import Alert from "@/components/Alert";
import GoTop from "@/components/GoTop";
export default {
  name: "Front",
  components: {
    WebHeader,
    Alert,
    WebFooter,
    GoTop
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading;
    }
  }
};
</script>
