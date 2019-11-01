<template>
	<div class="wipper" @mouseenter="stop" @mouseleave="resume">
		<div v-for="(item,index) in items" v-show="currentindex==index">
			<img :src="item" alt="">
		</div>
		<div class="point"  v-for="(item,index) in items" @click="currentindex=index">
			<span ></span>
		</div>
	</div>
</template>

<script>
export default{
	props:["items"],
	data(){
		return{
			currentindex:0,
			playing:true,
		}
	},
	created(){
		this.play()
	},
	methods:{
		play(){
			setInterval(()=>{
				if(this.playing){
					this.currentindex++;
					if(this.currentindex>=this.items.length){
						this.currentindex=0;
					}
				}
				
			},1000)
		},
		stop(){
			this.playing=false;
		},
		resume(){
			this.playing=true;
		}
	}
}
</script>

<style lang="less">
	.wipper{
		img{
			width: 100%;
		}
	}
	.point{
		display: inline-block;
		width: 10px;
		height: 10px;
		border: 5px solid #0090DA;
		border-radius:10px;
		margin: 10px;
		position: relative;
		top: -50px;
	}
</style>
