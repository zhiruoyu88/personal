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

	export default {
		name: 'main',
		components: {
			list: List,
			right: Right,
			navbar: navbar
		}
	}
</script>

<style noscope>
	.main {
		width:1190px;
		margin:20px auto 0;
	}	
	.clear{
		clear:both;
	}
</style>