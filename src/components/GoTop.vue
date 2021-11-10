<template>
    <div class="text-right">
        <a href="#" class="goTop p-4 preFadein" @click.prevent="scrollTop"><i class="far fa-arrow-alt-circle-up"></i></a>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'GoTop',
  methods: {
    scrollTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted () {
    $(window).scroll(function () {
      const height = $(window).scrollTop()
      if (height > 100) {
        $('.goTop').addClass('fadeIn')
      } else {
        $('.goTop').removeClass('fadeIn')
      }
    })
  }
}
</script>
