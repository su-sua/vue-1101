<template>
	<div class="phone">
		<img :src="phoneinfo.imgs" alt="">	
		<h3>{{phoneinfo.typenum}}</h3>
		<p>{{phoneinfo.content}}</p>
		<span>{{phoneinfo.price}}</span> 
	</div>
</template>

<script>
export default{
	props:["phoneinfo"]
}
</script>

<style>
.phone{
	width: 200px;
	text-align: center;
	margin: 10px;
	background-color:white;
	padding-bottom: 10px;
}
.phone img{
	width: 100%;
}
</style>
