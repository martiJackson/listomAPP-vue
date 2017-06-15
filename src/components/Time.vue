<template>
	<div id="app" class="timeOut">
	<h2 class="blur"></h2>
	<div class="changePosition">
		<div class="up none">
			<div id="contain">
				<canvas id="cav" height="200" width="1500"></canvas>
			</div>
			<p id="moveBlock">
				<span id="block1" class="block1">A</span>
				<span id="block2" class="block2">B</span>
			</p>
			<p class="time"><span class="time1">00:00</span><span class="time2">23:59</span></p>
		</div>
		<div class="changeDate">
			<el-button type="primary" class="yes">前一天</el-button>
			<el-button type="primary" class="tom">后一天</el-button>
			</div>
	</div>
	<div class="sport">
		<div class="main2">
			<canvas id="cav2" height="200" width="17280"></canvas>			
			
			<div class="move" style="visibility:hidden">
				<div class="mark mar">mark</div>
				<div class="mark2 mar">mark2</div>
				<span class="spana span">a</span>
				<span class="spanb span">b</span>
			</div>
		</div>
	<p class="onTime"><span class="star">00:00:00</span><span class="end">01:00:00</span></p>
	<div class="changeDate">
	<el-button type="primary" class="yes">前一天</el-button>
	<el-button type="primary" class="tom">后一天</el-button>
	</div>		
	</div>
	
	
</div>
</template>
<style type="text/css">
	.timeOut{
		position: relative;
	}
	.changePosition{
		position:absolute;
	}
	#contain{
		height:2rem;
		width:15rem;
		border:2px solid #20a0ff;
		overflow: hidden;
		position: relative;
		border-radius:5px;
	}
	#cav{
		position: absolute;
		top:0;
		left:0;
		transform-origin:left; 
	}
	#moveBlock{
		height:.2rem;
		width:15rem;
		border:2px solid #20a0ff;
		position: relative;
		border-radius:8px;
	}
	#moveBlock>span{
		background:#20a0ff;
		border-color:#20a0ff;
		position: absolute;
		width:.4rem;
		height:100%;
		color: #FFF;
		text-align: center;
		border-radius:4px;
		cursor:pointer;
	}
	#block1{
		left:0;
		top:0;
	}
	#block2{
		right:0;
		top:0;
	}
	.time{
		width:15rem;
		position:relative;
	}
	.time>span{
		position: absolute;
	}
	.time1{
		left:0;
		top:0;
	}
	.time2{
		right:0;
		top:0;
	}
	.move{
		height:.2rem;
		width:15rem;
		background:green;
		border:1px solid;
		position: relative;
	}
	.span{
		display: inline-block;
		width:.2rem;
		height:.3rem;
		background:blue;
		position:absolute;
		top:0;
	}
	.mar{
		position: absolute;
		top:0;
		background:gray;
		height:.2rem;
		width:1rem;
		text-align: center;
	}
	.mark,.spana{
		left:0;
	}
	.mark2,.spanb{
		right:0;
	}
	.onTime{
		width:15rem;
		display: flex;
		justify-content: space-between;
		border:2px solid #20a0ff;
		border-radius:5px;
	}
	.main2{
		width:15rem;
		overflow: hidden;
		height:2rem;
		position: relative;
		border:2px solid #20a0ff;
		border-radius:5px;
	}
	#cav2{
		position:absolute;
		left:0;
		top:0;
		height:2rem;
	}
	.sport{
		width:15rem;
		top:.5rem;
		height:3rem;
	}
	.changeDate{
		margin-top:.2rem;
		display: flex;
		justify-content: space-around;
	}
	.changeDate>span{
		height:20px;
		width:.75rem;
		background:#168bd9;
		color: #fff;
		text-align: center;
		border-radius: 5px;
		cursor: pointer;
	}
	.none{
		visibility: hidden;
	}
</style>
<script>
export default{
  data () {
    return { 
    	value:[0,10]
    }  
  },
  mounted:function(){
	this.canv1();
	this.canv2();
	$(".changeDate>button").eq(0).on("click",function(){
		$(".up").removeClass("none");
		$(".sport").addClass("none");
	})
	$(".changeDate>button").eq(1).on("click",function(){
		$(".up").addClass("none");
		$(".sport").removeClass("none");
	})
		},
		methods:{
			 formatTooltip(val) {
			 	console.log(this.value)
		        return val / 100;		       
		      },
			 canv1(){
		  		var cav=document.getElementById('cav');
				var cavs=cav.getContext("2d");
				var w=1,x=0,scale='';
				var a=1;
				var blockL1=$("#block1").offset().left;
				var blockL2=$("#block2").offset().left;
				var blur=$(".blur").width("3.5rem");
				var canvas=$(".blur").width()+1;
				console.log(canvas)
			// 移动模块
			time($("#block1"))
			time($("#block2"))
			function time(obj){
					obj.mousedown(function(e){
						var ev=e||event;
						var page1=ev.pageX;
						var blockL=obj.offset().left;
						var change=page1-blockL;
						var blockWidth=$("#block1").width();
						document.onmousemove=function(e){
							var ev=e||event;
							e.preventDefault(); //阻止默认事件
							// ev.stopPropagation()
							var newPage=ev.pageX;					
							var newBlockL=$("#block1").offset().left;
							var newBlockL2=$("#block2").offset().left;
							var moveX=newPage-change-canvas;
							var moveBlock=$("#moveBlock").width()-blockWidth;
							var distance=newBlockL2-newBlockL; //两个滑块之间的距离
							var scale=moveBlock/distance;
							var translate=-(newBlockL-canvas);
							var num=24*60*60-1;
							var numBlock1=newBlockL-blockL1-(canvas-blockL1);
							var numBlock2=moveBlock-(moveBlock-newBlockL2+canvas);

							function number(obj1,obj2){
								var nums=obj2/moveBlock*num;
								var h=nums%3600;						
								var hour=(nums-h)/3600;						
								var m=h%60;
								var minute=(h-m)/60;						
								var second=m.toFixed(0);
								if(hour<10){
									hour="0"+hour
								}
								if(minute<10){
									minute="0"+minute
								}
								if(second<10){
									second="0"+second
								}
								var str=hour+":"+minute+":"+second
								obj1.text(str)
							}
							number($(".time1"),numBlock1);
							number($(".time2"),numBlock2);
						// 限制滑块移动的位置
							if(obj.hasClass("block1")){
								if(moveX<0){
										moveX=0
									}else if(moveX>moveBlock){
										moveX=moveBlock
									}
								if(moveX>newBlockL2-canvas-blockWidth){
									moveX=newBlockL2-canvas-blockWidth;
								}

								// 滑块移动时canvas移动到指定的位置
								$("#cav").css("transform","scale("+scale+",1)"+" "+"translateX("+translate+"px"+")");

								}
								else if(obj.hasClass("block2")){
									if(moveX<0){
											moveX=blockWidth
										}else if(moveX>moveBlock){
											moveX=moveBlock
										}
									if(moveX<newBlockL-canvas+blockWidth){
										moveX=newBlockL-canvas+blockWidth;						
									}
									$("#cav").css("transform","scale("+scale+",1)"+" "+"translateX("+translate+"px"+")");
								}
								obj.css("left",moveX+"px"); 
							}		
						document.onmouseup=function(){
							document.onmousemove="";
							document.onmouseup=""
						}
					})
				}	
					for(var i=0;i<288;i++){				
						cavs.save()
						cavs.fillStyle="red";
						cavs.fillRect(x,0,w,200)
						cavs.restore();
						x+=2
					}
					for(var i=0;i<280;i++){
						
						cavs.save()
						cavs.fillStyle="yellow";
						cavs.fillRect(x,0,w,200)
						cavs.restore()
						x+=2
					}
					for(var i=0;i<280;i++){
						
						cavs.save()
						cavs.fillStyle="blue";
						cavs.fillRect(x,0,w,200)
						cavs.restore()
						x+=2
					}
					for(var i=0;i<280;i++){
						
						cavs.save()
						cavs.fillStyle="green";
						cavs.fillRect(x,0,w,200)
						cavs.restore()
						x+=2
					}
		  	},

		   canv2(){
				var cav=document.getElementById('cav2');
				var cavs=cav.getContext("2d");
				var w=2,y=0,timer='',z=5;
				var aSL=$(".spana").offset().left;
				var bSL=$(".spanb").offset().left;
				var moveLeft=$(".move").offset().left;			
						// 画布				
							timer=setInterval(function(){
								var blur=parseInt($(".main2").innerWidth());								
								y+=10;
								var color="red"
								cavs.save()	
								if(y%blur==0&& y/blur>0){
									$("#cav2").css("left",-blur*(y/blur));
								}
								cavs.fillStyle=color;
								cavs.fillRect(y,0,w,200)
								
							},5000)	
							cavs.restore()	

						var timer=setInterval(function(){
							var date=new Date();
							var hour=date.getHours();
							var minute=date.getMinutes();
							var second=date.getSeconds();
							var hours=0,minutes=0,seconds=0;
							if(hour<10){
								hour="0"+hour
							}
							if(minute<10){
								minute="0"+minute
							}
							if(second<10){
								second="0"+second
							}
							var str=hour+":"+minute+":"+second
							$(".end").text(str)
						},1000)
				}
		  }

	}
</script>
