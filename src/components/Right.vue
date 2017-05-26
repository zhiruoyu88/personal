<template>
	<div class="right">
		<div class="search item">
			<input v-on:keyup.enter="searchInfo" v-model="keywords" placeholder="请输入您要搜索的关键词" type="text">	
			<i @click="searchInfo()" class="search-icon"></i>	
		</div>
		<div class="tags item">
			<el-button type="info"><span>漫<i class="el-icon-star-off"></i>生活</span></el-button>
			<el-button type="info"><span>学无止境</span></el-button>
			<el-button type="info"><span>碎言碎语</span></el-button>
		</div>
	</div>
</template>

<script>
	import {getUser} from '../service/getData'
	export default {
		name: 'Right',
		data () {
			return {
				keywords:'',
				userInfo:null
			}
		},
		methods: {
			searchInfo:()=>{
				console.log('search')
			}
		}
	}
</script>

<style scoped> 
	.right {
		float:right;
		width:300px;
	}
	.item {
		border-radius: 5px;
		background-color: #fff;
		margin-bottom: 15px;
	}
	.search {
		padding:15px 10px;
		position: relative;
	}
	.tags {
		padding:8px 10px;
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