<template>
	<div class="jokes">
		<h1>笑话页面</h1>
		<div v-for="item in joks">
			<div class="butt" v-if="item.title">
				<h2>{{item.title}}</h2>
				<p>{{item.summary}}</p>	
			</div>
		</div>
		<button :disabled="flag" class="many" @click="getmore">加载更多</button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			//为了让两个字符串拼接
			joks:[]	,
			page:1,
			flag:true
		}
	},
	created(){
		this.getjokes();
	},
	methods:{
		getjokes(){
			this.flag=true;
			this.$http({
				method:'get',
				url:`http://biger.applinzi.com/duan/list.php?page=${this.page}`,
			}).then(res=>{
				console.log(res.data.result)
				// this.joks=res.data.result;
				this.joks=this.joks.concat(res.data.result);
				this.flag=false;
			})
		},
		getmore(){
			this.page++;
			this.getjokes(this.page)
		}
	}
	
}
</script>

<style scoped lang="less">
.jokes{
	width: 1200px;
	margin: 0 auto;
	.butt{
		border-bottom: 2px dotted gray;
	}
}
.many{
	width: 100%;		
	height: 50px;
	margin-bottom: 20px;
	margin-top: 30px;
}
</style>
	