import { request } from './request.js'
// 以后首页就面向home.js开发
export function getHomeMultidata(){
  return request ({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type ,page){
  return request ({
    url:'/home/data',
    params: {
      type,
      page
    }
  })
}