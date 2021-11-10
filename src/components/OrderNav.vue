<template>
  <div class="mb-4">
    <ul class="nav orderNav justify-content-around" @click.prevent>
      <li class="nav-item">
        <a class="nav-link" href="#">訂單建立</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">確認付款</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">訂單完成</a>
      </li>
    </ul>
    <div class="progress">
      <div
        class="progress-bar bg-warning"
        role="progressbar"
        :style="{ width: progress + '%' }"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderNav",
  props: ["progress"]
};
</script>
