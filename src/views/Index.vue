<template>
	<div>
		<div id="index">
			<!-- <div>
			                {{ nowDate + ' ' + nowTime + ' ' + nowWeek }}
			            </div> -->
			<div class="main head">
				<h2>23<span>二月</span></h2>
				<div>{{time | moment}}</div><h1>知乎日报</h1>
				<p @click="gotolink"><img src="../assets/images/index.jpg" width="14%"/></p>
			</div>
			<!-- /head -->
			<div class="banner">	
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item,index) in topList" :key="index">
						<a :href="item.url" target="_self">
							<dl>
								<dt><img :src="item.image" width="100%"/></dt>
								<dd>{{item.title}}<span class="author">{{item.hint}}</span></dd>			
							</dl>
						</a>
					</swiper-slide>
					<div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
				</swiper>
			</div>
			<!-- /banner -->
			<div class="article main">
				<a :href="item.url" target="_self" v-for="(item,index) in todyList" :key="index">
					<dl>
						<dt><img :src="item.images" width="25%"/></dt>
						<dd>{{item.title}}</dd>
						<dd class="read">{{item.hint}}</dd>			
					</dl>
				</a>
			</div>
			<div class="article main">
				历史文章
				<a :href="item.url" target="_self" v-for="(item,index) in histroy" :key="index">
					<dl>
						<dt><img :src="item.images" width="25%"/></dt>
						<dd>{{item.title}}</dd>
						<dd class="read">{{item.hint}}</dd>			
					</dl>
				</a>
			</div>
		</div>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	mounted(){
		this.axios.get("news/latest").then(res =>{
			this.topList =res.data.top_stories;
			this.todyList = res.data.stories;
		});
		this.axios.get("news/before/20131119").then(res =>{
			this.histroy =res.data.stories;
		});
	},
	methods:{
		gotolink(){
		    this.$router.replace('/user')
		  }
		},
	data(){
			return {
					//设置属性
					swiperOption:{
							//显示分页
							pagination: {
									el:'.swiper-pagination',
									clickable:true
							},
							//切换模式  横屏或者竖屏
							// direction : 'vertical',
							//设置自动播放速度
							autoplay: {
									disableOnInteraction: false,
									delay:4000
							},
							//开启无限循环
							loop:false,
							//设置点击箭头
							paginationClickable :true,
							prevButton:'.swiper-button-prev',
							nextButton:'.swiper-button-next',
							//设置同屏显示的数量，默认为1，使用auto是随意的意思。
							slidesPerView:1,
							//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
							mousewheel:true ,
							//默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
							// freeMode:true 
						 nowTime: new Date(), // 当前时间      
						 nowDate: "",    // 当前日期
						             nowTime: "",    // 当前时间
						             nowWeek: ""     // 当前星期
					},
					topList:'',
					todyList:''
			}
	},
	components:{
			swiper,
			swiperSlide
	}
}  
</script>
<style scoped>
.banner dl{color:#fff;background: #42B983;}
.banner dd{font-size:1.4rem;padding:0.5em 2rem;height:90px;}
.banner .author{font-size:1rem;padding:0.5rem 0;display:block;}
.swiper-pagination{text-align:right;}
.article dl{padding:1.2rem 0;width:100%;height:100px;}
.article dt img{float:right;padding-left:1rem;}
.article dd{font-size:1.2rem;padding:0.2rem 0;}
.article .read{font-size:1rem;}
</style>
