<template>
	<div class="container">
		<navbar></navbar>
		<div class="main">
			<list></list>
			<right></right>
			<div class="clear"></div>
		</div>
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
				isLoading:true,
				text:'hello'
			}
		},
		components: {
			list: List,
			right: Right,
			navbar: navbar,
			loading: loading,
		},
		watch: {
		  
		},
		methods:{
			
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