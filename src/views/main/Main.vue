<template>
	<div v-if="!isLoading" class="container">
		<navbar></navbar>
		<div class="main">
			<list></list>
			<right></right>
			<div class="clear"></div>
		</div>
	</div>
	<div  v-else>
		<loading></loading>
	</div>
</template>

<script>
	import List from '../../components/List'
	import Right from '../../components/Right'
	import navbar from '../../components/navbar'
	import loading from '../../components/loading'

	export default {
		name: 'main',
		data(){
			return {
				isLoading:false
			}
		},
		components: {
			list: List,
			right: Right,
			navbar: navbar,
			loading: loading
		},
		watch: {
		  '$route': function () {
		    var self = this
		    self.isLoading = true
		    self.getData().then(function () {
		      self.isLoading = false
		    })
		  }
		},
		methods:{
			getData:new Promise(function(resolve,reject){
				setTimeout(function(){
					resolve()
				},1000);
			})
		}
	}
</script>

<style scoped>
	.main {
		width:1190px;
		margin:20px auto 0;
	}	
	.clear{
		clear:both;
	}
</style>