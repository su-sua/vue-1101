<template>
	<div class="logout">
		<div>
			<button @click="logout">登出</button>
		</div>
	</div>
</template>
	
<script>
	export default{
		methods:{
			logout(){
				this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:`post`,                                 
					withCredentials:true,
					data:`dopost=exit`
					
				}).then((res)=>{
					console.log(res.data)
					if(res.data.status==1){
						this.$store.commit("setlog",false);
						this.$router.push("/")
					}
				})
			}
		}
	}
	
</script>

<style>
</style>
