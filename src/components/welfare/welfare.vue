<template>
  <div class="welfare" v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoading" infinite-scroll-distance="10">
    <div class="welfare-center">
      <figure v-show="leftData.length > 0" v-for="(item,key,index) in leftData" :key="key">
        <img class="bg-box" :src="item.url">
      </figure>
    </div>
    <div class="welfare-center">
      <figure v-show="rightData.length > 0" v-for="(item,key,index) in rightData" :key="key">
        <img class="bg-box" :src="item.url">
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: 'v-welfare',
  data() {
    return {
      response: {
        "error": false,
        "results": [
          {
            "_id": "59b0d757421aa901bcb7dc0c",
            "createdAt": "2017-09-07T13:21:27.937Z",
            "desc": "9-7",
            "publishedAt": "2017-09-07T13:25:26.977Z",
            "source": "chrome",
            "type": "\u798f\u5229",
            "url": "http://ww1.sinaimg.cn/large/610dc034ly1fjaxhky81vj20u00u0ta1.jpg",
            "used": true,
            "who": "daimajia"
          },
          {
            "_id": "599f7362421aa901c85e5fc2",
            "createdAt": "2017-08-25T08:46:26.461Z",
            "desc": "8-25",
            "publishedAt": "2017-09-06T12:18:11.687Z",
            "source": "chrome",
            "type": "\u798f\u5229",
            "url": "https://ws1.sinaimg.cn/large/610dc034ly1fivohbbwlqj20u011idmx.jpg",
            "used": true,
            "who": "daimajia"
          },
          {
            "_id": "59aca203421aa901c1c0a8d8",
            "createdAt": "2017-09-04T08:44:51.44Z",
            "desc": "09-04",
            "publishedAt": "2017-09-05T11:29:05.240Z",
            "source": "chrome",
            "type": "\u798f\u5229",
            "url": "https://ws1.sinaimg.cn/large/610dc034ly1fj78mpyvubj20u011idjg.jpg",
            "used": true,
            "who": "dmj"
          }]
      },
      page: 1,
      leftData: [],
      rightData: [],
      isLoading: false,
    }
  },
  components: {

  },
  created() {
    // this.getTestData();
    // this.loadTop();
  },
  methods: {

    /**
     * 测试数据
     */
    getTestData() {
      console.log('created');
      console.log(this.response.results);
      this.list = this.response.results;
    },

    /**
     * 首次加载
     */
    loadTop() {
      this.$store.commit('UPDATE_LOADING_STATE', true);
      this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`).then((response) => {
        let left = response.body.results.filter((data, i) => {
          return (i + 1) % 2 === 1;
        });
        let right = response.body.results.filter((data, i) => {
          return (i + 1) % 2 !== 1;
        });

        this.leftData = this.leftData.concat(left);
        this.rightData = this.rightData.concat(right);
        // this.$store.commit('UPDATE_LOADING_STATE', false);
        this.$nextTick(() => {
          this.$store.commit('UPDATE_LOADING_STATE', false);
        });
      });
    },

    /**
     * 下拉加载更多
     */
    loadMore() {
      this.page++;
      this.loadTop();
    }
  }
}
</script>
<style lang="less" scoped>
.welfare {
  display: flex;
  .welfare-center {
    width: 50%;
    column-width: 200px;
    column-gap: 15px;
    max-width: 1100px;
    figure {
      width: 95%;
      background: #fefefe;
      border: 2px solid #fcfcfc;
      box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
      margin: 0 2px 15px;
      display: inline-block;
      column-break-inside: avoid;
      z-index: 11;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>
