<template>
	<div class="cart">
		<h1>购物车</h1>
		<div class="acrtss">
			<table cellpadding="" cellspacing="" border="">
				<tr><th>商品名</th><th>价格</th><th>数量</th></tr>
				<tr v-for="item in $store.state.goods">
					<td>{{item.title}}</td>
					<td>{{item.price}}</td>
					<td>
						<button >-</button>
						<span>{{item.num}}</span>
						<button >+</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default{
	
}
</script>

<style scoped lang="less">
.acrtss{
	display: flex;
	justify-content: center;
}


</style>
