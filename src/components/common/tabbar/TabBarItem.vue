<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'blue'
      }
    },
    created: function () {
      // console.log(this.isActive+'---------------------------------------------')
    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.path)   //es6语法
        // return this.$route.path.indexOf(this.path)!=-1
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    data(){
      return {
        // isActive:false
      }
    },
    methods:{
      itemClick(){
        // console.log(this.isActive+'---------------------------------------------')
        // console.log(this.path+'---------------------------------------------')
        this.$router.replace(this.path).catch(err=>{})
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width:24px;
    height:24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .tab-bar-item .active{
    color: #1C90F3;
  }
</style>
