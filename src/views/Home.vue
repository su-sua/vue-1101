<template>
  <div class="home">
	<wipper :items="wipperlist"></wipper>
	<div class="ph">
		<div  v-for="item in mishop">
			<router-link :to="`/detail/${item.id}`">
				<phone :phoneinfo="item"></phone>
			</router-link>
			
		</div>
		
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Wipper from '@/components/Wipper.vue'
import Phone from '@/components/Phone.vue'
export default {
  name: 'home',
  components: {
		Wipper,
		Phone
  },
  data(){
	  return{
		  wipperlist:[
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b642c13442fc0ca455394f34e59a22b3.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/30bb7101afd301b77d8558bf43dff8b0.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c6d5f1c4b27a244efe1433a411069f35.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
			  "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4f5e5eb570bd8c932c41d111ecb4838.jpg?w=2452&h=920",
		  ],
		  mishop:[
			  {
				   id:101,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"小米9 Pro 5G",
				  content:"5G双卡全网通，骁龙855Plus",
				  price:3699
			  },
			  {
				   id:102,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"小米9 Pro 5G",
				  content:"5000mAh超长续航",
				  price:799
			  },
			  {
				   id:103,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"Redmi Note 8 Pro",
				  content:"6400万全场景四摄",
				  price:1399
			  },
			  {
				   id:104,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"Redmi Note 8",
				  content:"千元4800万四摄",
				  price:999
			  },
			  {
				   id:105,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"Redmi K20 Pro 尊享版",
				  content:"4800万拍照千元机",
				  price:1099
			  },
			  {
				   id:106,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"Redmi Note 7",
				  content:"5G双卡全网通，骁龙855Plus",
				  price:3699
			  },
			  {
				   id:107,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:"Redmi 7",
				  content:"4000mAh超长续航",
				  price:899
			  },
			  {
				   id:108,
				  imgs:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg?thumb=1&w=200&h=200&f=webp&q=90",
				  typenum:" Redmi 7A",
				  content:"小巧大电量 持久流畅",
				  price:899
			  }
		  ]
	  }
  }
}
</script>
<style>
.home{
	width: 1000px;
	margin: 0 auto;
	background-color: white;
}
.ph{
	display: flex;
	flex-wrap: wrap;
	justify-content:  space-around;
}
</style>
