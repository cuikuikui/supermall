<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goods" 
    :goods-item="item" 
    :key="index">
    </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type:Array,
      default(){
        return []
      }
    }
  },
  created () {
    // console.log(this.goods)
  }
}
  
</script>
<style>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: var(--color-background);
    padding: 2px;
  }
</style>