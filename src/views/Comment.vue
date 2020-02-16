<template>
	<div id="comments">
		<h1><img src="../assets/images/fanhui.png" @click="gotolink()"><span>20</span>条评论</h1>
		<h2><span>10</span>条长评</h2>
		<div id="long" class="main" v-for="(item,index) in long" :key="index">
			<img :src="item.avatar" width="25%"/>
			<p>{{item.author}}</p>
			<p>{{item.content}}</p>
		</div>
		<h2><span>10</span>条短评</h2>
		<div id="long" class="main" v-for="(item,index) in short" :key="index">
			<img :src="item.avatar" width="25%"/>
			<p>{{item.author}}</p>
			<p>{{item.content}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.axios.get("story/4232852/long-comments").then(res =>{
				this.long =res.data.comments;
			});
			this.axios.get("story/4232852/short-comments").then(res =>{
				this.short =res.data.comments;
			});
		},methods:{
		gotolink(){
		    this.$router.replace('/detalis')
		  }
		},
	}
</script>

<style scoped>
	#comments{padding:1rem 0;}
	h1{text-align: center;font-size:1.2rem;}
	h1 img{width:6%;float:left;}
	h2{font-size:1rem;text-indent:0.5rem;}
	#long{overflow: hidden;padding:0.5rem 0;border-bottom:1px solid #eee;}
	#long img{width:12%;border-radius:100%;float:left;}
	#long p{float:right;width:85%;margin:0;font-size:0.75rem;line-height:1.2rem;}
</style>
