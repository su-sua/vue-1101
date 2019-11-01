<template>
	<div class="center">
		个人中心
		<h3>{{user.M_UserName}}</h3>
		<h3>{{user.M_Honor}}</h3>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user:{}
			}
		},
		created() {
			this.getUserInfo();
		},
		methods:{
			getUserInfo(){
				 this.$http({
					url:'http://www.520mg.com/member/ajax_login.php	',
					method:'get',
					withCredentials:true,				
				 }).then(res=>{
					 console.log(res.data);
					 this.user=res.data;
				 })
			}
		}
	}
</script>	

<style>
</style>
