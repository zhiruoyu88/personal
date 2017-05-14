<template>
	<div class="right">
		<div class="search item">
			<input v-on:keyup.enter="searchInfo" v-model="keywords" placeholder="请输入您要搜索的关键词" type="text">	
			<i @click="searchInfo()" class="search-icon"></i>	
		</div>
		<div class="item">
			
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Right',
		data () {
			return {
				keywords:''
			}
		},
		methods: {
			searchInfo: function(){
				console.log(this.keywords);
			}
		}
	}
</script>

<style noscope> 
	.right {
		float:right;
		width:300px;
	}
	.item {
		border-radius: 5px;
		background-color: #fff
	}
	.search {
		padding:15px 10px;
		position: relative;
	}
	.search input {
		border:1px solid #ddd;
		border-radius: 3px;
		outline: none;
		padding:8px 10px;
		width:80%;
		padding-right:10%;
	}
	.search input::-webkit-input-placeholder {
		font-size: 12px;
	}
	i.search-icon {
		position: absolute;
		display: inline-block;
		width:20px;
		height:20px;
		background: url(../assets/img/search-icon.png) no-repeat;
		background-size: 20px 20px;
		right:12%;
		top:22px;
		cursor: pointer;
	}
</style>