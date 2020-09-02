const brand_nav_html = "<div class='brand_nav'><div class='cont'><h1 style='display: inline-block;float:left;margin-top:13px;'><a href='//www.yangqu.com'><img src='//cdn.yangqu.com/yq/brand/logo.png' draggable='false' title='氧趣网' alt='氧趣网logo' /></a></h1><ul><li v-for='(v,k) in word' :class='{on : on==k,xl : k>2}'><a :href='url[k]' target='_blank' class='url'><h2 style='font-weight: normal;font-size:14px;'>{{v}}</h2></a></li><div class='line'></div></ul><div class='xiala'><div class='li'><div><a href='//www.yangqu.com/about/brand_zr.html' target='_blank'>商标服务</a></div><div><a href='//www.yangqu.com/about/brand_zr.html' target='_blank'>商标注册</a></div><div><a href='//www.yangqu.com/brand/brand.php?id=11' target='_blank'>初审维权</a></div><div><a href='//www.yangqu.com/brand/brand.php?id=18' target='_blank'>信息变更</a></div><div><a href='//www.yangqu.com/brand/brand.php?id=25' target='_blank'>商标异议</a></div><div class='divider'></div></div><div class='li'><div><a href='//www.yangqu.com/about/zhuanli.html' target='_blank'>专利服务</a></div><div><a href='//www.yangqu.com/brand.php?id=101' target='_blank'>外观专利申请</a></div><div><a href='//www.yangqu.com/brand.php?id=102' target='_blank'>实用新型专利申请</a></div><div><a href='//www.yangqu.com/brand.php?id=103' target='_blank'>发明专利申请</a></div></div><div class='li'><div><a href='//www.yangqu.com/about/copy_right2.html' target='_blank'>版权服务</a></div><div><a href='//www.yangqu.com/brand.php?id=1001' target='_blank'>计算机软件著作权</a></div><div><a href='//www.yangqu.com/brand.php?id=1002' target='_blank'>美术作品著作权</a></div><div><a href='//www.yangqu.com/brand.php?id=1003' target='_blank'>文字作品著作权</a></div><div><a href='//www.yangqu.com/brand.php?id=1004' target='_blank'>音乐作品著作权</a></div><div><a href='//www.yangqu.com/brand.php?id=1005' target='_blank'>摄影作品著作权</a></div><div><a href='//www.yangqu.com/brand.php?id=1006' target='_blank'>影视著作权</a></div></div></div><a href='//www.yangqu.com/member/' class='photo'><img :src='info[0]' /></a><div class='log-res'><a href='//www.yangqu.com/member/login.php' v-if='is_login'>登录</a><a v-if='is_login'>/</a><a href='//www.yangqu.com/member/register.php' v-if='is_login'>注册</a><div v-if='info[1]'>{{info[1]}}</div></div><div class='focus'>关注公众号</div><div class='search'><input type='text' placeholder='搜索' data-active-placeholder='输入你要搜索的关键字' /><div class='icon'></div></div></div></div>";



   
		
export const brandNav = Vue.extend({
	template:brand_nav_html,
	props:['on'],
	data:function(){
		return {
			word: ['首页', '商标转让', '商标分类', '商标服务', '专利服务','版权服务'],
			url: ['//www.yangqu.com/', '//www.yangqu.com/brand/search-htm-page-1.html', '//www.yangqu.com/brand/fenlei.php', '//www.yangqu.com/about/brand_zr.html', '//www.yangqu.com/about/zhuanli.html', '//www.yangqu.com/about/copy_right2.html'],
			is_login:true,
			info:[
        '//cdn.yangqu.com/yq/op/img/kfwb/defult.png'
      ]
		}
	},
	mounted: function(){
   if(document.body.clientWidth<1680){
    $('.brand_nav .cont').css({'width':'1200px'});
    $('.search').css({'width':'200px'});
  }
  $('.search .icon').click(function(){
    let v = $('.search input').val();
 
     window.open('//www.yangqu.com/brand/search-htm-page-1-title-'+v+'.html');
});
$(".search input").keypress(function (e) {
    if (e.which == 13) {
        $('.search .icon').click();
    }
});
		axios.get('/images/is_login.php').then(result=>{
			if (result.data != '0') {
				this.info = result.data;
				this.is_login = false;
			} else {
				if($('#is_login').val() == '0'){
					var arr = [];
					arr[0] = $('#info1').val();
					arr[1] = $('#info2').val();
					this.info = arr
					this.is_login = false;
          console.log(1);
				}else{
					this.info[0] = '//cdn.yangqu.com/yq/op/img/kfwb/defult.png';
					this.is_login = true;
     
				}
			}
		}
    
		);
    $('.xiala .li div').hover(function(){
		
		$(this).siblings().eq(0).addClass('aon');
	},function(){
		$(this).siblings().eq(0).removeClass('aon');
	});
	
	$('.xl').hover(function(){
		$(this).parent('ul').siblings('.xiala').css({height:'155px','border':'1px solid #f5f5f5'})
	},function(){
		$(this).parent('ul').siblings('.xiala').css({height:'0px','border':'0px'})
	});
	
	$('.xiala').hover(function(){
		$(this).css({height:'155px','border':'1px solid #f5f5f5'})
	},function(){
		$(this).css({height:'0px','border':'0px'})
	});
	},
	methods:{
		
	}
})


const dynamic_html = "<div class='dynamic'><div class='word'>交易动态：</div><div class='swiper-container deal-dynamic'><div class='swiper-wrapper'><div class='swiper-slide' v-for='v in dynamicWord'>{{v}}</div></div></div></div>";

   
export const dynamic = Vue.extend({
	template:dynamic_html,
	props:['dynamicWord'],
	mounted: function(){
		setTimeout(function(){
			var deal_dynamic = new Swiper('.deal-dynamic', {
			      direction: 'vertical',
				  autoplay: {
				  	delay: 2000,
				  	stopOnLastSlide: false,
				  	disableOnInteraction: false,
				  },
				  loop: true,
			});
		},1000);
		
	},
	methods:{
		
	}
})






const brand_show_html = "<div class='brand-show cont' :style='{height:high}'><div class='mtitle' :style='{backgroundImage:module(micon)}'>{{mtitle}}</div><a href='//www.yangqu.com/brand/search-htm-page-1.html' target='_blank' class='more' v-if='ismore'>查看更多</a><div class='clear'></div><div class='typeselect' v-if='istypeselect'><div class='clear'></div><div class='prev' @click='typeprev'></div><div class='over'><ul ref='typeselecthover'><li v-for='(v,k) in typeList'><div class='li' :class='{on: k * v.length + kk === checkType}' v-for='(vv,kk) in v' @click='switchtype(k,kk);'>{{vv}}</div></li></ul></div><div class='next' @click='typenext'></div></div><div class='clear'></div><div class='swiper-container brand-swiper swiper-no-swiping' ref='brand_swiper' :class='{pad : brandList.length==0}'><div class='swiper-wrapper'><div class='swiper-slide' v-for='v in brandListType'><ul><li class='brand-card' ref='brand_card' @click='unfold(kk)' v-if='v' v-for='(vv,kk) in v' :key='kk' :style='brandCardPosition(kk)'><div class='fixed-top'><div class='type'>{{vv.catname}}</div><div class='close' @click.stop='close(kk)'></div><div class='cover' :style='{backgroundImage:brandCover(vv.thumb)}'></div><div class='price'><span>￥</span> {{vv.price/10000}}<span>万</span></div></div><p>商标信息</p><div class='number'>商标编号： {{vv.regnumber}}</div><div class='group'>类似群组： {{vv.xcatid}}</div><div class='scope'>适用范围： {{vv.note1}}</div><div class='state'>商标状态：R标已注册</div><div class='district'>所属地区：中国内地</div><div class='service-info'><div class='qr-code'></div><div class='name'>商标顾问：曹鹏辉</div><div class='qq'>QQ：1234567891</div><div class='tell'>TELL：12345678910</div></div><a :href='brandUrl(vv.id)' target='_blank' class='view-info'>查看详情</a><div class='scroll'><div class='scroll-inner'></div></div></li></ul></div></div><!-- 分页器 --><div class='swiper-pagination'></div><!-- 翻页器 --><div class='swiper-button-next'></div><div class='swiper-button-prev'></div></div><ol><div class='li' v-for='(v,k) in advert'><a :href='advertUrl[k]' target='_blank'><img :src='v' alt=''></a></div><div class='li'><div class='l' ref='buttonNext' @click='buttonNext'></div><div class='r' ref='buttonPrev' @click='buttonPrev'></div></div></ol></div>";



export const brandShow = Vue.extend({
	template:brand_show_html,
	props:['mtitle','micon','brandtype','ismore','advert','advertUrl','istypeselect','high'],
	data : function(){
		return{
			brandList : [],
			brandListType : [],
			typeList : [],
			checkType: 0,
			typeCnt : 0,
			typePage : 0,
      index:'',
		}
	},
	created:function(){
		axios.get('//www.yangqu.com/images/get_brand.php?token='+this.brandtype)
		.then(result=>{
		
			if(this.brandtype == 'select'){
				this.brandList = result.data;
				this.brandListType = result.data[0];
				this.typeList = result.data[45];
			}else{

				this.brandListType = result.data;
			}
		})
		// .catch(()=>{throw new Error('服务器异常')});
	},
	mounted:function(){
		this.typeList[0] = ['01类-化学原料','02类-涂料油漆','03类-日化用品','04类-燃料油脂','05类-医药品','06类-五金金属','07类-机械设备']
		// $(this.$refs.typeselecthover).children('li').children('a').hover(function(){
			
		// 	let u = $(this).parent('li').siblings('.underline');
		// 	let t = $(this).parent('li');
		// 	let index = t.index();
		// 	let zw = t.width();
		// 	let cw = t.children('a').width();
		// 	let l = (zw -cw)/2 + 20 + 147 * index;
		// 	u.css({
		// 		left:l+'px',
		// 		width:cw+'px',
		// 	});
		// },function(){
		// 	let u = $(this).parent('li').siblings('.underline');
		// 	let t = $(this).parent('li').siblings('.on');
		// 	let index = t.index();
		// 	let zw = t.width();
		// 	let cw = t.children('a').width();
		// 	let l = (zw -cw)/2 + 20 + 147 * index;
		// 	u.css({
		// 		left:l+'px',
		// 		width:cw+'px',
		// 	});
		// });

		var t = this
		setTimeout(function(){
			$(t.$refs.typeselecthover).hover(function(){
				let u = $(this).children('.underline');
				let t = $(this).children('.on');
				let index = t.index();
				let zw = t.width();
				let cw = t.children('a').width();
				let l = (zw -cw)/2 + 20 + 147 * index;
				u.css({
					left:l+'px',
					width:cw+'px',
				});
			});
		},10000)
		
		
		
		/*$(this.$refs.brand_card).children('.scroll').children('.scroll-inner').mousedown(function(e){
			scrFlag = true;
			e = event || e;
			var t = $(this);
			var p = $(this).parent().parent();
			var positionDiv = t.offset().top;
			var pe = e.pageY 
			
			$(document).mousemove(function(e){
				e = event || e;
				if(parseInt(t.css('top')) == 10 && parseInt(e.pageY - pe)<0){
					flag = false;
					p.children('.fixed-top').css({'height':'320px'});
					p.children('.fixed-top').children('.cover').css({'height':'207px','border':'1px solid #f5f5f5'})
					p.children('p').css({'margin-top':'320px'});
					return  false;
				}
				var y =  e.pageY - positionDiv + parseInt(t.css('top'));
				var top = y/((p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)/(74+p.children('.group').height()+p.children('.scope').height()));
				var scrTop = (e.pageY - positionDiv)/((p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)/(74+p.children('.group').height()+p.children('.scope').height()));
				if(top <10){
					return false;
				}
				if(top>(p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)){
					return false;
				}
				p.animate({'scrollTop':scrTop},0);
				t.css({'top':top+'px'});
			});
			$(document).mouseup(function(){
				$(document).off('mousemove');
				scrFlag = false;
			});
	   });*/
	   
	 
		
		
	},
	methods:{
		
		typeselectclick : function(index){
			// let u = $(this.$refs.typeselecthover).parent('li').siblings('.underline');
			// let t = $(this.$refs.typeselecthover).parent('li');
	
			// let zw = t.width();
			// let cw = t.children('a').width();
			// let l = (zw -cw)/2 + 20 + 147 * index;
			// u.css({
			// 	left:l+'px',
			// 	width:cw+'px',
			// });
		},
		
	typeprev : function(){
			if(this.typePage==0){return;}
			$(this.$refs.typeselecthover).css({'margin-left':++this.typePage*1140+'px'});
     
      if(this.typePage == 0){
				$('.prev').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle.svg)'});
			}else{
				$('.prev').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle-color.svg)'});
			}
			if(this.typePage < -5){
				$('.next').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle.svg)'});
			}else{
				$('.next').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle-color.svg)'});
			}
		},
		typenext : function(){
			if(this.typePage<-5){return;}
			$(this.$refs.typeselecthover).css({'margin-left':--this.typePage*1140+'px'});
      if(this.typePage == 0){
				$('.prev').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle.svg)'});
			}else{
				$('.prev').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle-color.svg)'});
			}
			if(this.typePage < -5){
				$('.next').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle.svg)'});
			}else{
				$('.next').css({'background-image':'url(//cdn.yangqu.com/yq/brand/triangle-color.svg)'});
			}
		},
		switchtype : function(k,kk){
			this.brandListType = this.brandList[k*7+kk];
			this.checkType = k*7 +kk;
		},
		close : function(index){
      if(!index)return;
			let t = $(this.$refs.brand_card);
			let b = $(this.$refs.brand_swiper)
			t.animate({'scrollTop':0},0);
			t.css({
				'width':'226.8px',
				'height':'167px',
				'z-index':'1',
				'box-shadow':'none',
				'transform':'translateX(0px) translateY(0px)',
				'border-radius':'0px',
				'overflow-y':'hidden',
			});
			b.css({
				'z-index':'1'
			})
			if(index > 4){
				t.eq(index).css({
					top : '167px'
				});
			}
			t.children('.fixed-top').children('.cover').css({
				'width':'226.8px',
				'height':'165px',
				'top':'0px',
        'border':'none'
			});
      t.children('.fixed-top').children('.type').hide();
			t.children('.fixed-top').children('.close').hide();
			t.children('.scroll').hide();
		},
		unfold : function(index){

			let t = $(this.$refs.brand_card).eq(index);
			let b = $(this.$refs.brand_swiper)
    	this.close(this.index);
      this.index = index;
			if(t.width() == 290){
				return;
			}
      for(let i=0;;i++){
       if($(this.$refs.brand_card).eq(i).width() >= '289'){
          break;
        }
        if(i >= 10){
          break;
        }
      }
			
			t.css({
				'width':'290px',
				'height':'410px',
				'z-index':'2',
				'box-shadow':'rgba(0, 0, 0, 0.2) 0px 8px 16px 0px',
				'transform':'translateX(-30px) translateY(-30px)',
				'border-radius':'6px',
				'overflow-y':'scroll',
			});
			if(index>4){
				t.css({
					top : '0px'
				});
			}
			b.css({
				'z-index':'3'
			})
			// alert(1)
			t.children('.fixed-top').children('.cover').css({
				'width':'248px',
				// 'height':'207px',
				'top':'52px',
        'border':'1px solid #f5f5f5'
			});
      	t.children('.fixed-top').children('.type').show();
			t.children('.fixed-top').children('.close').show();
			t.children('.scroll').show();
		},
		buttonNext : function(){
			let t = $(this.$refs.buttonNext);
			t.parent().parent().siblings().children('.swiper-button-prev').click();
		},
		buttonPrev:function(){
			let t = $(this.$refs.buttonPrev);
			t.parent().parent().siblings().children('.swiper-button-next').click();
		}
	},
	computed:{
		brandCover () {
			return function(newVal){
				return 'url('+newVal+')';
			} 
		},
		brandCardPosition(){
			return function(index){
				let style = {};
				if(index<5){
					style['top'] = '0px'
					style['left'] = index*228+'px'
					if(index==0){
						style['border-radius'] = '6px 0px 0px 0px'
					}
					if(index==4){
						style['border-radius'] = '0px 6px 0px 0px'
					}
					
				}else{
					style['top'] = '168px'
					style['left'] = (index-5)*228+'px'
					if(index==5){
						style['border-radius'] = '0px 0px 0px 6px'
					}
					if(index==9){
						style['border-radius'] = '0px 0px 6px 0px'
					}
				}
				return style;
			}
		},
		brandUrl(){
			return function(newVal){
				return '//www.yangqu.com/brand/show.php?itemid='+newVal;
			}
		},
		module(){
			return function(newVal){
				return 'url('+newVal+')';
			}
		}
	},
	watch:{
		brandListType(newVal){
			if(newVal.length != 0){
				setTimeout(function(){
					new Swiper('.brand-swiper', {
						autoplay: {
							delay: 301100,
							stopOnLastSlide: false,
							disableOnInteraction: false,
						},
						loop: true,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					});
				},3000);
				setTimeout(function(){
					new Swiper('.type-swiper', {
						autoplay: {
							delay: 301100,
							stopOnLastSlide: false,
							disableOnInteraction: false,
						},
						loop: true,
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					});
				},1000);
			}
			var flag;
			var scrFlag;
		var t = this;
			setTimeout(function(){
				$(t.$refs.brand_card).scroll(function(){
				
					let t = $(this);
					let top = t.scrollTop();
					if(!flag){
						top = 2;
						t.animate({'scrollTop':top},0);
						setTimeout(function(){
							flag = true
						},500);
					}
					t.children('.fixed-top').css({'top':top+'px'});
					if(top>1){
						t.children('.fixed-top').css({'height':'120px'});
						t.children('.fixed-top').children('.cover').css({'height':'0px','border':'none'})
						t.children('p').css({'margin-top':'140px'});
					}else if(top == 1){
						flag = false;
						t.children('.fixed-top').css({'height':'320px'});
						t.children('.fixed-top').children('.cover').css({'height':'207px','border':'1px solid #f5f5f5'})
						t.children('p').css({'margin-top':'320px'});
					}else{
						flag = false;
						t.children('.fixed-top').css({'height':'320px'});
						t.children('.fixed-top').children('.cover').css({'height':'165px','border':'1px solid #f5f5f5'})
						t.children('p').css({'margin-top':'320px'});
					}
					t.children('.scroll').css({'top':top+60+'px'});
					let scrTop = (
					t.children('.scroll').height()-t.children('.scroll').children('.scroll-inner').height()-10)/(74+t.children('.group').height()+t.children('.scope').height())*top;
					if(scrTop<10)scrTop=10;
					if(!scrTop<(t.children('.scroll').height()-t.children('.scroll').children('.scroll-inner').height()-10 && !scrFlag)){
						t.children('.scroll').children('.scroll-inner').css({'top':scrTop+'px'});
					}
				});
        $(t.$refs.brand_card).children('.scroll').children('.scroll-inner').mousedown(function(e){
						scrFlag = true;
						e = event || e;
						var t = $(this);
						var p = $(this).parent().parent();
						var positionDiv = t.offset().top;
						var pe = e.pageY 
						
						$(document).mousemove(function(e){
							e = event || e;
							if(parseInt(t.css('top')) == 10 && parseInt(e.pageY - pe)<0){
								flag = false;
								p.children('.fixed-top').css({'height':'320px'});
								p.children('.fixed-top').children('.cover').css({'height':'207px','border':'1px solid #f5f5f5'})
								p.children('p').css({'margin-top':'320px'});
								return  false;
							}
							var y =  e.pageY - positionDiv + parseInt(t.css('top'));
							var top = y/((p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)/(74+p.children('.group').height()+p.children('.scope').height()));
							var scrTop = (e.pageY - positionDiv)/((p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)/(74+p.children('.group').height()+p.children('.scope').height()));
							if(top <10){
								return false;
							}
							if(top>(p.children('.scroll').height()-p.children('.scroll').children('.scroll-inner').height()-10)){
								return false;
							}
							p.animate({'scrollTop':scrTop},0);
							t.css({'top':top+'px'});
						});
						$(document).mouseup(function(){
							$(document).off('mousemove');
							scrFlag = false;
						});
			});
			},1000);
		}
	}
})


const service_list_html = "<div class='service-list cont'><div class='mtitle'>金牌顾问<span>氧趣网为您提供专业知识产权顾问，专属客服全程一对一服务</span></div><div class='clear'></div><ul><li v-for='v in serviceData' @mouseover='seover' @mouseleave='seleave' ref='service_card'><div class='photo' :style='img(v.img[0])'></div><div class='nameCH'>{{v.name[0]}}</div><div class='company'>{{v.gongsi[0]}}</div><div class='desc'>{{v.swqj[0]}}</div><div class='qr-code' :style='img(v.img_qrcode[0])'></div><div class='tall'>{{v.mobile[0]}}</div><a :href='qqservice(v.qq[0])' class='service'>联系我吧</a></li></ul></div>";


export const serviceList = Vue.extend({
	template:service_list_html,
	data : function(){
		return {
			serviceData : []
		}
	},
	created : function(){
		axios.get('//www.yangqu.com/images/qqchange_sb.php')
		.then(result=>{
		
		
			
			this.serviceData = result.data.slice(0,8);
			
			
			
		})
		// .catch(()=>{throw new Error('服务器异常')});
	},
	mounted: function(){
		
	},
	methods:{
		seover : function(){
			let t = $(this.$refs.service_card)
			t.children().css({
				'transition':'all 0.5s 0.3s'
			});
		},
		seleave : function(){
			let t = $(this.$refs.service_card)
			t.children().css({
				'transition':'all 0.5s'
			});
		}
	},
	computed:{
		img(){
			return function(newVal){
				return 'background-image:url('+newVal+')'
			}
		},
		qqservice(){
			return function(newVal){
				return 'javascript:return_first_qq_with_insert('+newVal+')';
			}
		},
		namespell(){
			return function(newVal){
				return demos(newVal);
			}
		}
	}
})




const after_sales_html = "<div class='after-sales cont' v-if='afterSalesList.length != 0'><div class='mtitle'>售后采访<span>每一位顾客的满意度，都是我们一直追求的目标</span></div><a href='//www.yangqu.com/news/sales_list.php' target='_blank' class='more'>查看更多</a><div class='clear'></div><div class='left'><div class='cover' :style='img(afterSalesone.brandimg)'></div><div class='title'>{{afterSalesone.title}}</div><div class='date'>{{date(afterSalesone.addtime)}}期</div><div class='views'>{{afterSalesone.hits}}</div><div class='trading-type'><p>{{afterSalesone.caget}}</p><p>交易类型</p></div><div class='trading-place'><p>{{afterSalesone.diqu}}</p><p>交易地点</p></div><a :href='afterSalesone.linkurl' target='_blank' class='view-info'>查看详情</a></div><div class='right'><div class='li' v-for='v in afterSalesList'><div class='cover' :style='img(v.brandimg)'></div><div class='icon'></div><div class='date'>{{date(v.addtime)}}期</div><div class='title'>{{v.title}}</div><a :href='v.linkurl' target='_blank' class='view-info'>查看详情</a></div></div></div>";



export const afterSales = Vue.extend({
	template:after_sales_html,
	data : function(){
		return {
			afterSalesList : [],
			afterSalesone : '',
		}
	},
	created : function(){
		axios.get('//www.yangqu.com/images/get_after_sales.php?size=3')
		.then(result=>{
			
			this.afterSalesList = result.data.slice(1,3);
	
			this.afterSalesone = result.data[0];
			
      console.log(result.data);
			
			
		})
		// .catch(()=>{throw new Error('服务器异常')});
	},
	mounted: function(){
		
	},
	methods:{
		
	},
	computed:{
		img(){
			return function(newVal){
				return 'background-image:url('+newVal+')'
			}
		},
		date(){
			return function(newVal){
				return formatTime(newVal,'YMD')
			}
		}
	}
})



const news_html = "<div><!-- 微信分享弹框 --><div class='wechat-share'><div class='word1'>分享到微信</div><div class='wechat-share-close' @click='wechatShareClose' ></div><div class='wechat-share-qrcode'></div><div class='word2'>微信扫描二维码，点击右上角<img src='//cdn.yangqu.com/yq/index2020-5-15/images/share_wechat_btn.png'>按钮<br />分享给<span>好友</span>或<span>朋友圈</span></div></div><!-- 综合资讯 --><div class='integrated-information cont'><div class='mtitle'>综合资讯<span>了解最新动态发展快人一步，专业解答您的疑难问题</span></div><a href='//www.yangqu.com/news/newscenter.php' target='_blank' class='more'>查看更多</a><div class='clear'></div><div class='left'><div class='img' :style='img(newsListOne.thumb)'></div><div class='headline'>头条：<a :href='newsListOne.linkurl'>{{newsListOne.title}}</a></div><div class='collect-num'><span>{{newsListOne.hits}}</span>人收藏</div><div class='watch-num'><span>{{parseInt(newsListOne.hits*4.3)}}</span>位观众</div><div class='desc'>{{newsListOne.introduce}}</div><div class='clear'></div><div class='word'>分享</div><div class='share-url' style='cursor: pointer;' @click='getcopy(newsListOne.linkurl)'></div><a :href='qqShare(newsListOne.linkurl,newsListOne.title,newsListOne.thumb,newsListOne.introduce)' target='_blank' class='share-qq'></a><a href='javascript:;' class='share-wx' @click='wechatShare' ></a><a :href='wbShare(newsListOne.title,newsListOne.linkurl)' target='_blank' class='share-wb'></a><!-- <div class='collect-btn'>收藏吧</div> --></div><div class='right'><div class='icon'></div><div class='word-ZH'>综合资讯</div><div class='word-EN'>INFORMATION</div><ul><li v-for='(v,k) in newsList'><span>{{k+1}}</span><a :href='v.linkurl' target='_blank' class='information-title'>{{v.title}}</a></li></ul></div></div></div>";
export const news = Vue.extend({
	template:news_html,
	data : function(){
		return {
			newsList : [],
			newsListOne : '',
		}
	},
	created : function(){
		axios.get('//www.yangqu.com/images/get_news.php?size=8')
		.then(result=>{
			
			this.newsList = result.data.slice(1,8);
			this.newsListOne = result.data[0];
			
			
		})
		// .catch(()=>{throw new Error('服务器异常')});
	},
	mounted: function(){
		$('.wechat-share-qrcode').empty().qrcode({
			render:'canvas',
			text:'//www.baidu.com',
		});
	},
	methods:{
		wechatShare : function(){
			$('.wechat-share').show();
		},
		wechatShareClose : function(){
			$('.wechat-share').hide();
		},
    getcopy : function(url){
      var aux = document.createElement("input");
      aux.setAttribute("value", url);
      document.body.appendChild(aux);
      aux.select();
      document.execCommand("copy");
      document.body.removeChild(aux);
      alert('您以复制文字链接');
    }
	},
	computed:{
		img(){
			return function(newVal){
				return 'background-image:url('+newVal+')'
			}
		},
	
		date(){
			return function(newVal){
				return formatTime(newVal,'YMD')
			}
		},
		qqShare(){
			return function(url,title,cover,desc){
				return '//connect.qq.com/widget/shareqq/index.html?url='+url+'&sharesource=qzone&title='+title+'——氧趣网&pics='+cover+'&summary='+desc;
			}
		},
		wbShare(){
			return function(title,url){
				return '//v.t.sina.com.cn/share/share.php?title='+title+'——氧趣网&url='+url+'&content=utf-8';
			}
		}
	}
})






export const dynamicStyle = ".dynamic{width:404px;height:26px;border-radius:13px;background-color:#f5f5f5;margin-top:30px;margin-left:30px;float:left}.dynamic .word{font-size:14px;color:#767676;height:100%;float:left;display:flex;display:-webkit-flex;align-items:center;margin-left:20px}.dynamic .deal-dynamic{width:290px;height:100%;margin-left:0}.dynamic .deal-dynamic .swiper-slide{width:100%;height:100%!important;font-size:14px;color:#767676;line-height:1em;display:flex;display:-webkit-flex;align-items:center;padding-left:20px;background-image:url(/file/brand/index/svg/clock.svg);background-position:left center;background-repeat:no-repeat}";


export const afterSalesStyle = ".after-sales{height:428px}.after-sales .mtitle{background-image:url(//cdn.yangqu.com/yq/brand/index/10-1.png);}.after-sales .more{font-size:16px;line-height:1em;color:#000333;letter-spacing:1px;float:right;margin-top:30px;margin-right:30px}.after-sales .left{width:730px;height:312px;background-color:#f5f5f5;border-radius:6px;float:left;margin-left:30px;margin-top:30px;position:relative}.after-sales .left .cover{width:400px;height:282px;border-radius:6px;margin-top:16px;margin-left:16px;background-size:100%;background-repeat:no-repeat;background-position:center}.after-sales .left .title{font-size:18px;letter-spacing:1px;color:#000333;line-height:18px;position:absolute;top:40px;left:437px}.after-sales .left .date{font-size:16px;letter-spacing:1px;color:#767676;line-height:1em;position:absolute;top:74px;left:440px}.after-sales .left .views{font-size:16px;letter-spacing:1px;color:#767676;line-height:1em;position:absolute;top:74px;right:30px;padding-left:23px;background-image:url(/file/brand/index/svg/brows.svg);background-repeat:no-repeat;background-position:left center}.after-sales .left .trading-place,.after-sales .left .trading-type{width:100px;height:60px;background-color:#fff;border-radius:6px;position:absolute;top:117px;left:436px}.after-sales .left .trading-place p:first-child,.after-sales .left .trading-type p:first-child{font-size:16px;letter-spacing:1px;color:#767676;line-height:1em;width:100%;text-align:center;margin-top:12px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.after-sales .left .trading-place p:last-child,.after-sales .left .trading-type p:last-child{font-size:12px;letter-spacing:1px;color:#000333;line-height:1em;width:100%;text-align:center;margin-top:8px}.after-sales .left .trading-place{left:552px}.after-sales .left .view-info{width:98px;height:28px;background-color:#fff;border-radius:14px;font-size:12px;color:#5b8dfb;display:flex;display:-webkit-flex;justify-content:center;align-items:center;position:absolute;box-sizing:border-box;top:244px;left:436px;transition:padding-right .3s}.after-sales .left .view-info::after{display:inline-block;content:'';width:6px;height:12px;background-image:url(/file/brand/index/svg/arrow.svg);position:absolute;top:50%;right:-6px;opacity:0;transition:all .3s;transform:translateY(-50%)}.after-sales .left .view-info:hover{padding-right:6px}.after-sales .left .view-info:hover::after{right:15px;opacity:1}.after-sales .right{float:left;margin-left:20px;margin-top:10px}.after-sales .right .li{width:390px;height:146px;background-color:#f5f5f5;border-radius:6px;position:relative;margin-top:20px}.after-sales .right .li .cover{width:114px;height:114px;background-color:#fff;border-radius:6px;background-size:cover;background-repeat:no-repeat;background-position:center;margin-top:16px;margin-left:16px}.after-sales .right .li .icon{width:26px;height:26px;background-image:url(//cdn.yangqu.com/yq/brand/index/10-2.png);position:absolute;top:20px;left:150px}.after-sales .right .li .date{font-size:18px;letter-spacing:1px;color:#000333;line-height:1em;position:absolute;top:28px;left:187px}.after-sales .right .li .title{width:207px;font-size:14px;color:#767676;line-height:20px;position:absolute;top:60px;left:150px}.after-sales .right .li .view-info{font-size:12px;color:#5b8dfb;line-height:1em;position:absolute;top:113px;left:150px}.after-sales .right .li .view-info::after{display:inline-block;content:'';width:6px;height:12px;background-image:url(/file/brand/index/svg/arrow.svg);position:absolute;top:50%;right:-15px;opacity:0;transition:all .3s;transform:translateY(-50%)}.after-sales .right .li .view-info:hover::after{right:-10px;opacity:1}";



export const newsListStyle = ".integrated-information{height:400px}.integrated-information .mtitle{background-image:url(//cdn.yangqu.com/yq/brand/index/11-1.png);}.integrated-information .more{font-size:16px;line-height:1em;color:#000333;letter-spacing:1px;float:right;margin-top:30px;margin-right:30px}.integrated-information .left{width:692px;height:284px;background-color:#f5f5f5;border-radius:6px;margin-left:30px;margin-top:30px;float:left}.integrated-information .left .img{width:283px;height:199px;background-image:url(//cdn.yangqu.com/yq/brand/index/0.jpg);background-size:cover;background-repeat:no-repeat;background-position:center;border-radius:6px;margin-top:16px;margin-left:16px;float:left}.integrated-information .left .headline{font-size:20px;color:#000333;letter-spacing:1px;font-weight:700;float:left;width:350px;margin-top:30px;margin-left:20px}.integrated-information .left .headline a{display:inline;font-weight:400;color:#000333}.integrated-information .left .collect-num,.integrated-information .left .watch-num{font-size:14px;color:#767676;line-height:1em;margin-top:36px;margin-left:20px;float:left}.integrated-information .left .collect-num span,.integrated-information .left .watch-num span{font-size:30px;color:#4b84fb;letter-spacing:1px;font-weight:700}.integrated-information .left .watch-num{margin-left:28px}.integrated-information .left .desc{width:346px;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;font-size:16px;color:#767676;letter-spacing:1px;margin-top:13px;margin-left:20px;float:left}.integrated-information .left .word{font-size:14px;color:#767676;line-height:1em;margin-top:29px;margin-left:20px;float:left}.integrated-information .left .share-qq,.integrated-information .left .share-url,.integrated-information .left .share-wb,.integrated-information .left .share-wx{width:35px;height:35px;border-radius:50%;background-color:#fff;background-image:url(//op.yangqu.com/file/opsy/img/9-2.png);background-position:center;background-repeat:no-repeat;float:left;margin-top:18px;margin-left:20px}.integrated-information .left .share-qq{background-image:url(//op.yangqu.com/file/opsy/img/9-3.png)}.integrated-information .left .share-wx{background-image:url(//op.yangqu.com/file/opsy/img/9-4.png)}.integrated-information .left .share-wb{background-image:url(//op.yangqu.com/file/opsy/img/9-5.png)}.integrated-information .left .collect-btn{width:133px;height:35px;border-radius:18px;margin-top:18px;margin-left:45px;background-color:#fff;padding-left:32px;background-image:url(//cdn.yangqu.com/yq/brand/index/9-8.png);background-repeat:no-repeat;background-position:26px center;float:left;box-sizing:border-box;font-size:16px;letter-spacing:1px;color:#4b84fb;display:flex;display:-webkit-flex;justify-content:center;align-items:center;cursor:pointer}.integrated-information .right{width:428px;height:284px;margin-left:20px;margin-top:30px;border-radius:6px;background-color:#f5f5f5;float:left}.integrated-information .right .icon{width:26px;height:26px;margin-top:16px;margin-left:16px;background-image:url(//cdn.yangqu.com/yq/brand/index/11-2.png);background-repeat:no-repeat;float:left}.integrated-information .right .word-EN,.integrated-information .right .word-ZH{font-size:20px;letter-spacing:1px;color:#000333;line-height:1em;margin-top:16px;margin-left:14px;float:left;font-weight:700}.integrated-information .right .word-EN{font-size:14px;color:#767676;font-weight:400;margin-top:24px;margin-left:10px}.integrated-information .right ul{display:inline-block;width:auto;height:auto;margin-top:8px;margin-left:16px}.integrated-information .right ul li{width:380px;height:16px;margin-top:15px}.integrated-information .right ul li span{display:inline-block;width:16px;height:16px;border-radius:3px;background-color:#b5b5b5;font-size:12px;color:#fff;display:flex;display:-webkit-flex;justify-content:center;align-items:center;float:left}.integrated-information .right ul li .information-title{font-size:16px;color:#767676;letter-spacing:1px;line-height:1em;margin-left:16px;float:left;width:348px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;word-break:break-all;cursor:pointer}.integrated-information .right ul li:nth-child(1) span{background-color:#4b84fb}.integrated-information .right ul li:nth-child(2) span{background-color:#6d9bfa}.integrated-information .right ul li:nth-child(3) span{background-color:#a0bcf8}.wechat-share{width:336px;height:510px;background-color:#fff;box-shadow:0 0 10px rgba(0,0,0,.3);border:1px solid #bfbfbf;position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);z-index:111111111111111111111111;display:none}.wechat-share .word1{font-size:16px;line-height:1em;margin-top:20px;width:100%;text-align:center;padding-bottom:20px;border-bottom:1px solid #f2f2f2}.wechat-share .wechat-share-close{width:24px;height:24px;background-image:url(//cdn.yangqu.com/yq/index2020-5-15/images/close.png);background-repeat:no-repeat;background-position:center;position:absolute;top:6px;right:6px;cursor:pointer}.wechat-share .wechat-share-close:hover{background-image:url(//cdn.yangqu.com/yq/brand/br-close.png)}.wechat-share .wechat-share-qrcode{width:200px;height:200px;margin:0 auto;margin-top:80px}.wechat-share .word2{margin-top:50px;text-align:center}.wechat-share .word2 img{position:relative;top:4px}.wechat-share .word2 span{color:#4b84fb}";



export const brandNavStyle = ".search {margin-left: 20px;width: 519px;height: 34px;float: left;margin-top: 13px;position: relative;}.search input {width: 100%;height: 100%;background-color: #f5f5f5;border-radius: 17px;font-size: 12px;padding-left: 15px;padding-right: 40px;box-sizing: border-box;}.search .icon {width: 16px;height: 16px;background-image: url(//www.yangqu.com/file/index/svg/search.svg);background-repeat: no-repeat;position: absolute;top: 9px;right: 16px;cursor: pointer;}.brand_nav {width: 100%;height: 60px;background-color: #fff;position: relative}.brand_nav .cont {width: 1680px;margin: 0 auto}.brand_nav .cont .xiala {padding-top: 0px;box-sizing: border-box;width: 100%;height: 0;position: absolute;top: 60px;left: 0;background-color: #fff;z-index: 2;border: 0px solid #f5f5f5;overflow: hidden;transition: height .3s}.brand_nav .cont .xiala .li {width: 1200px;height: auto;margin: 0 auto;margin-top: 30px;padding-left: 40px;box-sizing: border-box;position: relative}.brand_nav .cont .xiala .li .divider {width: 2px;height: 155px;background-color: #f5f5f5;position: absolute;top: -30px;left: 152px}.brand_nav .cont .xiala .li div {margin-right: 40px;float: left}.brand_nav .cont .xiala .li div a {color: #767676;line-height: 1em;font-size: 14px;position: relative;width: 112px;height: auto}.brand_nav .cont .xiala .li div a:hover {color: #4b84fb}.brand_nav .cont .xiala .li div:not(:nth-child(1)) a::before {content: '';display: inline-block;width: 12px;height: 12px;background-color: #f5f5f5;position: absolute;left: -21px;border-radius: 50%}.brand_nav .cont .xiala .li div:not(:nth-child(1)) a:hover::before {background-color: #4b84fb}.brand_nav .cont .xiala .li div:first-child {margin-right: 109px}.brand_nav .cont .xiala .li div:first-child a::after {content: '';display: inline-block;width: 6px;height: 12px;background-image: url(/file/brand/index/svg/arrow.svg);background-repeat: no-repeat;position: absolute;top: 50%;transform: translateY(-50%);right: -22px;opacity: 0;transition: all .3s}.brand_nav .cont .xiala .li .aon a {color: #4b84fb}.brand_nav .cont .xiala .li .aon a::after {right: -32px !important;opacity: 1 !important}.brand_nav .cont .xiala .li:not(:nth-child(1)) {margin-top: 40px}.brand_nav .cont .logo {width: 105px;height: 30px;background-image: url(//cdn.yangqu.com/yq/brand/logo.png);background-repeat: no-repeat;margin-top: 16px;float: left}.brand_nav .cont ul {display: inline-block;width: auto;height: auto;float: left;margin-left: 26px;position: relative}.brand_nav .cont ul .xl a::after {display: block;content: '';width: 9px;height: 6px;background-image: url(//www.yangqu.com/file/index/svg/drop-down-triangle.svg);transform: rotateX(-180deg);position: relative;top: 1px;left: 3px;transition: all .3s}.brand_nav .cont ul .xl a:hover:after {transform: rotateX(0)}.brand_nav .cont ul li {list-style: none;width: auto;height: 60px;float: left;}.brand_nav .cont ul li .url {width: 100%;height: 100%;padding: 0 14px;box-sizing: border-box;display: flex;display: -webkit-flex;justify-content: center;align-items: center;font-size: 14px;color: #000333;line-height: 1em;text-decoration: none}.brand_nav .cont ul li:hover .url {color: #4b84fb}.brand_nav .cont ul .on .url {color: #4b84fb}.brand_nav .cont ul .line {height: 3px;background-color: #4b84fb;border-radius: 2px;position: absolute;top: 57px;transition: all .5s}.brand_nav .cont .focus,.brand_nav .cont .industr-info {font-size: 14px;color: #000333;line-height: 1em;margin-top: 24px;margin-right: 24px;float: right;width: auto;height: auto;position: relative}.brand_nav .cont .focus::before {display: inline-block;content: '';width: 120px;height: 120px;background-image: url(//cdn.yangqu.com/yq/op/img/kfwb/code.jpg);background-repeat: no-repeat;background-size: 100% 100%;background-position: center;position: absolute;top: 40px;left: -20px;box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .2);opacity: 0;transition: all .3s;pointer-events: none;z-index: 29}.brand_nav .cont .focus:hover::before {top: 30px;opacity: 1}.brand_nav .cont .log-res {width: auto;height: auto;float: right;margin-top: 23px;margin-right: 30px;line-height: 1em}.brand_nav .cont .log-res a {width: auto;float: left;font-size: 14px;color: #000333;line-height: 1em}.brand_nav .cont .photo {width: 36px;height: 36px;float: right;border-radius: 20px;margin-top: 10px;border: 2px solid #4b84fb;overflow: hidden}.brand_nav .cont .photo img {width: 100%;height: 100%}.cont {width: 1200px;background-color: #fff;border-radius: 6px;margin: 0px auto;margin-top: 54px;}.mtitle {font-size: 26px;font-weight: bold;letter-spacing: 1px;color: #000333;line-height: 1em;height: 26px;padding-left: 43px;margin-left: 30px;margin-top: 30px;background-image: url(//cdn.yangqu.com/yq/brand/index/3-1.png);background-repeat: no-repeat;float: left;}.mtitle span {font-size: 16px;font-weight: normal;color: #767676;}";



   
export const serviceListStyle = ".service-list{height:524px}.service-list .mtitle{background-image:url(//cdn.yangqu.com/yq/brand/index/9-1.png);}.service-list ul{margin-left:10px;margin-top:10px}.service-list ul li{width:270px;height:194px;background-color:#f5f5f5;border-radius:6px;float:left;margin-left:20px;margin-top:20px;position:relative;overflow:hidden}.service-list ul li .photo{width:80px;height:80px;background-image:url(//cdn.yangqu.com/yq/brand/index/1-3.png);background-size:100% 100%;background-repeat:no-repeat;background-position:center;border-radius:50%;position:absolute;top:30px;left:30px}.service-list ul li .nameCH{font-size:20px;letter-spacing:1px;color:#000333;line-height:1em;font-weight:700;position:absolute;top:35px;left:130px;width:120px;text-align:center}.service-list ul li .nameEN{font-size:16px;letter-spacing:1px;color:#000333;line-height:1em;position:absolute;top:63px;right:20px;width:120px;text-align:center}.service-list ul li .company{background-image:url(//cdn.yangqu.com/yq/brand/index/9-2.png);font-size:16px;letter-spacing:1px;color:#000333;line-height:1em;padding-left:18px;background-image:url(//cdn.yangqu.com/yq/brand/index/9-2.png);background-position:left;background-repeat:no-repeat;position:absolute;top:92px;left:147px}.service-list ul li .desc{width:225px;font-size:14px;color:#000333;line-height:18px;margin:0 auto;position:absolute;bottom:20px;left:0;right:0;text-overflow:-o-ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.service-list ul li .qr-code{width:84px;height:84px;background-image:url(//cdn.fengxiangqu.com/userimg/tp/qrcode/_yangpeng.jpg);background-size:100%;background-repeat:no-repeat;background-position:center;position:absolute;bottom:-84px;left:20px}.service-list ul li .tall{font-size:16px;letter-spacing:1px;color:#000333;line-height:1em;padding-left:18px;background-image:url(//cdn.yangqu.com/yq/brand/index/9-3.png);background-position:left;background-repeat:no-repeat;position:absolute;top:86px;right:-132px}.service-list ul li .service{width:120px;height:26px;background-color:#4b84fb;border-radius:13px;position:absolute;top:118px;right:-128px;font-size:12px;color:#fff;display:flex;display:-webkit-flex;justify-content:center;align-items:center}.service-list ul li:hover .photo{left:-80px}.service-list ul li:hover .nameCH{top:38px;left:5px}.service-list ul li:hover .nameEN{right:-140px}.service-list ul li:hover .company{top:50px;left:150px}.service-list ul li:hover .desc{bottom:-40px}.service-list ul li:hover .qr-code{bottom:30px;left:20px}.service-list ul li:hover .tall{top:86px;right:27px}.service-list ul li:hover .service{position:absolute;top:118px;right:30px}";
