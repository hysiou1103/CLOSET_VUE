<template>
  <div class="couponWrap p-4">
    <div
      class="row frontCoupon p-2 mb-3 autoFadein"
      v-for="item in coupons"
      :key="item.code"
    >
      <div class="col-sm-3 d-flex justify-content-center align-items-center">
        <img src="@/assets/img/logo.png" width="80px" />
      </div>
      <div class="col-sm-9">
        <div class="h5 mt-2">{{ item.title }}</div>
        <small>使用期限：至{{ item.due_date }} 23:59前</small>
        <div
          class="
            ClicktoUse
            d-flex
            align-items-end
            justify-content-between
            pt-2
            mt-2
          "
        >
          <div class="h6">優惠券代碼：{{ item.code }}</div>
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click="copy(item.code)"
          >
            點擊領取 <i class="fas fa-mouse"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerCoupon",
  data () {
    return {
      coupons: [
        {
          title: "歡慶開幕! 全館8折!",
          code: "CLOSET2021",
          due_date: "2021-12-31",
          percent: 80
        },
        {
          title: "防疫優惠九五折",
          code: "COVID95OFF",
          due_date: "2021-12-31",
          percent: 95
        }
      ]
    };
  },
  methods: {
    copy (code) {
      const vm = this;
      const el = document.createElement("input");
      document.body.appendChild(el);
      el.value = code;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      vm.$bus.$emit("messagePush", "已複製代碼至剪貼簿", "success");
    }
  }
};
</script>
