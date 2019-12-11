<template>
  <div class="postSerach">
    <div class="serach">
      <input type="text" placeholder="请输入想去的地方,比如：'广州'">
      <i class="el-icon-search" />
    </div>
    <div class="serachtuijian">
      <span>推荐：</span>
      <a href="#">北京</a>
      <a href="#">上海</a>
      <a href="#">广州</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
	.postSerach {
		width: 100%;
		.serach{
			width: 100%;
			position: relative;
			color:rgb(255, 165, 0);
			margin-bottom: 5px;
			>i{
				position: absolute;
				top: 5px;
				right: 10px;
				font-size:28px;
			}
			input {
				width: 100%;
			padding-left: 20px;
				display: block;
				outline: none;
				border:none;
				border: 3px solid rgb(255, 165, 0);
				height: 40px;
				box-sizing: border-box;
			}
		}
		.serachtuijian{
			a {
				&:hover {
					color:rgb(255, 165, 0);
					text-decoration: underline;
				}
			}
		}
	}
</style>
