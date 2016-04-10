<script>
  export default {
    props: {
      rateValue: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        zoomValue: 1,
      };
    },
    ready() {
      const viewportScale = document.querySelector('meta[name="viewport"]').content.match(/initial-scale=(\d+\.?\d+)/)[1];
      this.zoomValue = 1 / parseFloat(viewportScale);
    },
  };
</script>

<template>
  <div :style="{zoom: zoomValue}">
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
  </div>
</template>

<style scoped>
  div {
    display: inline-block;
    vertical-align: middle;
  }
  p {
    position: relative;
    margin: 0;
    width: 50px;
    height: 12px;
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
