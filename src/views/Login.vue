<template>
	<div class="login1">
		<h1>登录页面</h1>
		用户名：<input type="text" v-model="user.name">
		<br>
		密码：<input type="password" v-model="user.pwd">
		<br>
		<button @click="log">登录</button>
	</div>
</template>

<script>
export default{
	data(){
		return{
			user:{
				name:"zzy0371",
				pwd:"zzy0371",
			}	
		}
	},
	methods:{
		log(){
			this.$http({
					url:'http://www.520mg.com/member/index_login.php',
					method:'post',
					data:`fmdo=login&dopost=login&userid=${this.user.name}&pwd=${this.user.pwd}`,
					withCredentials:true,	
				}).then(res=>{
					if(res.data.status==1){
						console.log('登录成功');
						this.$store.commit("setlog",true);
						if(this.$route.query.redirect){
							this.$router.push(this.$route.query.redirect)
						}
						else{
							this.$router.push('/')
						}
					}
					else{
						console.log('登录失败')
					}
			})
		}
		
	}
}
</script>

<style>
</style>
