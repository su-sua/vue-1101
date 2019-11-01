<template>
  <div class="home">
	  <div class="cat">
		 <div class="dog">1</div>
		 <div class="dog">2</div>
		 <div class="dog">3</div>
		 <div class="dog">4</div>
		 <div class="dog">5</div>
		 <div class="dog">6</div>
		 <div class="dog">7</div>
		 <div class="dog">8</div>
		 <div class="dog">9</div>
		 <div class="dog">10</div>
	  </div>
  </div>
</template>

<script>
export default {


}
</script>
<style>
.cat{
	display: flex;
	/* row水平排列  不换行   row-reverse反排列*/
	flex-direction: row;
	/* column垂直排列   column-reverse反排列 */
	/* flex-direction:  column-reverse; */
	/* wrap自动换行  nowrap不换行*/
	flex-wrap: wrap;
	/* column 垂直排列  */
	/* flex-flow: column; */
	/* row水平排列  不换行 */
	/* flex-flow: row; */
	/* center水平居中  flex-end结尾开头排序  flex-start开头排序*/
	/* justify-content: center; */
	/* justify-content:  flex-end; */
	/* justify-content:  flex-start; */
	/*  space-around自动分割相同的距离，中间是两边的二倍 */
	/* justify-content:  space-around; */
	/* space-between中间均匀分割  中间比两边大 */
	/* justify-content:  space-between; */
	/* auto自动向左排序 */
	/* align-items: auto; */

}
.dog{
		width: 100px;
		height: 100px;
		background-color: red;
		margin: 15px;
	}

</style>
