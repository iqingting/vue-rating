<script>
  export default {
    props: {
      rateValue: {
        type: Number,
        default: 0,
      },
    },
  };
</script>

<template>
  <svg style="display: none;">
    <symbol id="star" viewBox="0 0 1024 1024">
      <path class="path1" d="M636 386.016h380l-304 226.016 100 368-306.016-220-304 220 110.016-366.016-304-228h384l122.016-368z"></path>
    </symbol>
  </svg>
  <p>
    <span>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
    </span>

    <span :style="{width: rateValue / 5 * 100 + '%'}">
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
      <svg><use xlink:href="#star"></use></svg>
    </span>
  </p>

</template>

<style scoped>
  p {
    position: relative;
    width: 50px;
    height: 12px;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    position: absolute;
    top: 0;
    display: flex;
  }
  span svg {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    fill: #d1d1d1;
  }
  span:last-child {
    overflow: hidden;
  }
  span:last-child svg {
    fill: #ff9a0d;
  }
</style>
