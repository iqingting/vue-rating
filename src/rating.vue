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
        starArr: [1, 2, 3, 4, 5],
        singleSize: 12,
      };
    },
    computed: {
      starSize() {
        return {
          width: this.singleSize + 'px',
          height: this.singleSize + 'px',
        };
      },
      containerSize() {
        return {
          width: this.singleSize * 5 + 'px',
          height: this.singleSize + 'px',
        };
      },
    },
    ready() {
      var viewport = document.querySelector('meta[name="viewport"]');
      if (viewport) {
        const viewportScale = viewport.content.match(/initial-scale=(\d?\.?\d?)/)[1];
        this.singleSize *= 1 / parseFloat(viewportScale);
      }
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
    <p :style="containerSize">
      <span>
        <svg :style="starSize" v-for="star in starArr"><use xlink:href="#star"></use></svg>
      </span>

      <span :style="{width: rateValue / 5 * 100 + '%'}">
        <svg :style="starSize" v-for="star in starArr"><use xlink:href="#star"></use></svg>
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
    width: 60px;
    height: 12px;
    white-space: nowrap;
  }
  span {
    position: absolute;
    top: 0;
    display: flex;
  }
  span svg {
    width: 12px;
    height: 12px;
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
