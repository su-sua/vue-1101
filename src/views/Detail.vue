<template>
	<div class="detail">
		<span>商品：{{this.$route.params.id}}</span>
		<br>
		<img :src="good.image" alt="">
		<br>
		<button @click="reduce()">-</button> {{good.num}} <button @click="add">+</button> <button @click="addcard">购买</button>
		<br>
		<router-link :to="`/detail/${this.$route.params.id}/baby`">宝贝信息</router-link> <router-link :to="`/detail/${this.$route.params.id}/comment`">收藏</router-link>
		<router-view></router-view>
		
	</div>
</template>	

<script>
export default{
	created(){
		console.log(this.$route.params.id),
		this.good={
			id:this.$route.params.id,
			image:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg?thumb=1&w=200&h=200&f=webp&q=90",
			title:`商品：${this.$route.params.id}`,
			prcie:parseInt(Math.random()*1000),
			num:1
		}
	},
	methods:{
		addcard(){
			this.$store.commit("addtocard",{
				id:this.good.id,
				title:this.good.title,
				num:this.good.num,
				price:this.good.prcie
			})
		},
		add(){
			this.good.num++;
		},
		reduce(){
			this.good.num--;
		}
	},
	data(){
		return{
			good:null,
			
		}
	}
}
</script>

<style>
</style>
