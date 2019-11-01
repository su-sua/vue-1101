<template>
	<div class="regist">
		<h2>注册页面</h2>
		<br>
		账号: <input type="text" v-model="user.name">
		<br>
		密码: <input type="password" v-model="user.pwd1">
		<br>
		重复密码: <input type="password" v-model="user.pwd2">
		<br>
		邮件	:  <input type="email" v-model="user.email">
		<br>
		<button type="primary" @click="regist">注册</button>
	</div>
	
</template>

<script>
export default{
	data(){
		return{
			user:{
				name:'',
				pwd1:'',
				pwd2:'',
				email:'',
				
				
			}
		}
	},
		methods:{
			regist(){
				if(this.user.name==""||this.user.pwd1==""||this.user.pwd2==""||this.user.pwd1=="")
				{
					alert("所有数据都必填")
				}
				else if(this.user.pwd1!=this.user.pwd2)
				{
					alert("密码不一致")
				}
				else{
					this.$http({
						url:'http://www.520mg.com/member/reg_new2.php',
						method:'post',
						data:`userid=${this.user.name}&userpwd=${this.user.pwd1}&email=${this.user.email}`
						

					}).then(res=>{
						if(res.data.status==1){
							console.log(res.data);
							this.$router.push('/login')
						}
						else{
							
						}
						
					}).catch(err=>{
						
					})
				}
			}
		}
}
</script>

<style>
</style>
