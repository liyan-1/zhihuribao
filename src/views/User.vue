<template>
	<div id="user">
		<h3 @click="gotolink"><img src="../assets/images/fanhui.png" width="6%"></h3>
		<h1><img src="../assets/images/index.jpg" width="20%"></h1>
		<h2>User</h2>
		<p>我的收藏</p>
		<p>消息中心</p>
		<div id="set">
			<dl>
				<dt><img src="../assets/images/night.png" @click="black"></dt>
				<dd>夜间模式</dd>
			</dl>
			<dl>
				<dt><img src="../assets/images/set.png"></dt>
				<dd>设置</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
		gotolink(){
		    this.$router.replace('/')
		  }
		},
		black(){
		    $("#user").css('backgroundColor','black')
		  }
	}
	
</script>

<style scoped>
#user{overflow: hidden;}
#user h3{padding:0.6rem;}
#user h1 img{margin:0 auto;border-radius:100%;padding:1rem 0;}
#user h2{text-align:center;padding-bottom:1.5rem}
#user p{border-top:#eee 1px solid;padding:1rem;background:url(../assets/images/right.png) no-repeat right 0.8rem center ;background-size:5%;}
#set{position:absolute;bottom:2rem;}
#set dl dt img{width:20%;margin:0 auto;padding:0.5rem 0;}
#set dl{width:50%;float:left;text-align:center;}
</style>
