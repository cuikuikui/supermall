<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物节</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control 
      class="tab-control" 
      @tabClick="tabClick" 
      :titles="['流行', '新款', '精选']"  
    ></tab-control>
    <goods-list :goods="goods[currentType].list"></goods-list>
  </div>
</template>

<script>
// 导入的子组件
import HomeSwiper from "./childCompents/HomeSwiper";
import HomeRecommendView from "./childCompents/HomeRecommendView";
import HomeFeature from "./childCompents/HomeFeature";

// 导入的公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList"
// 导入的公共方法 由于不是export default导出的所以要加大括号
import { getHomeMultidata, getHomeGoods } from "network/home";


export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list: [],
        }
      },
      currentType:'pop'
    };
  },
  components: {
    HomeSwiper,
    HomeRecommendView,
    HomeFeature,
    GoodsList,

    NavBar,
    TabControl
  },
  methods: {
    /**
     *2 、事件监听方法
     */
  tabClick(index){
    // switch (index){
    //   case 0:
    //     this.currentType = "pop"
    //     break
    //   case 1:
    //     this.currentType = "new"
    //     break
    //   case 2:
    //     this.currentType = "sell"
    //     break
    // }
    this.currentType=Object.keys(this.goods)[index]
    console.log(index)
  },
    /*
      1、网络请求相关方法
    */
    // 1  请求多个数据
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // 这里指的是将res的的地址赋值给result,因为result是组件里的变量所以不会被销毁，
        // 但是res在函数执行完后会被出栈销毁
        // console.log(res)
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 2 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        // ...是es6语法，将list的中的每一个item取出来
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page +=1
      });
    },
  },
  created() {
    // 1  请求多个数据
    this.getHomeMultidata();
    // 2 请求商品数据
    this.getHomeGoods("pop")
    // console.log("pop")
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
};
</script>

<style>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
