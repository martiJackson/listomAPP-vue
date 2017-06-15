<style type="text/css">
	canvas {
		background-color: #FFFFFF;
	}
	.center-text {
		text-align: center;
	}
	#title {
		font-size: 20px;
		font-weight: bold;
	}
	#subtitle {
		font-size: 16px;
	}
	.content-block{
		margin-top:2rem;
	}
	.changeBtn>*{
		display:inline-block;
	}
	.changeBtn{
		text-align: center;
		margin-top:-1rem;
	}
	.newData{
		padding-bottom: 1rem;
	}
	
</style>
<template>
	<div id="app">
		<div class="content canvas">
			<p id="title" class="center-text"></p>
			<p id="subtitle" class="center-text"></p>
			<canvas id="canvas" ></canvas>
			<div id="slider"></div>
			<div class="content-block">
		        <div class="row changeBtn">
		            <div class="col-50"><a id="btn-pre-day" class="button button-big button-fill button-danger"><el-button type="success">前一天</el-button></a></div>
		            <div class="col-50"><a id="btn-next-day" class="button button-big button-fill button-success"><el-button type="warning">后一天</el-button></a></div>
		        </div>
		    </div>
		</div>
	</div>
</template>
    <script type="text/javascript">
    	var Mock = require('mockjs')
		// 初始化数据
		var data1=Mock.mock("http://timeline.cn",{
		  'data':[{"yellow":null,"green":null,"red":null}]
		});
		// 前一天数据
		var data1=Mock.mock("http://preTimeline.cn",{
		  'data':[{"yellow":null,"green":null,"red":null}]
		});
	     export default {
	            data(){
	                return {
	                    value1:'',
	                  
	                }
	            },
	            methods:{
	            	
	            },
	            mounted:function(){
	            	// var projectBaseUrl = "https://api.listome.com/app/";
					var projectBaseUrl="http://192.168.1.147/OfficeApp/"
					//数据请求的根路径
					var requestBaseUrl = "https://api.listome.com/v1/";
	            	// linked-list
	            	function ListNode(val, next) {
						this.val = val;
						this.next = next;
					}
					function LinkedList() {
						this.head = null;
						this.length = 0;
						this.createList = function(arr) {
							if(arr != null && arr.length > 0) {
								this.length = arr.length;	
								this.head = new ListNode(arr[0], null);
								var p = this.head;
								for(var i = 1; i < arr.length; i++) {
									var node = new ListNode(arr[i], null);
									p.next = node;
									p = node;
								}
							}
						}
						this.showList = function() {
							var p = this.head;
							var str = '';
							while(p != null) {
								str += p.val + ' ';
								p = p.next;
							}
							console.log(str);
						}
						this.insert = function(index, val) {
							if(this.head == null) {
								this.head = new ListNode(val, null);
							} else if(index > this.length - 1) {
								var node = new ListNode(val, null);
								var p = this.head;
								while(p.next != null) p = p.next;
								p.next = node;
							} else if(index == 0) {
								var node = new ListNode(val, null);
								node.next = this.head;
								this.head = node;
							} else {
								var p = this.head;
								for(var i = 0; i < index - 1; i++) {
									p = p.next;
								}
								var next = p.next;
								var node = new ListNode(val, null);
								p.next = node;
								node.next = next;
							}
							++this.length;
						}
						this.toArray = function() {
							var arr = [];
							var p = this.head;
							while(p != null) {
								arr.push(p.val);
								p = p.next;
							}
							return arr;
						}
					}

	                var vueThis=this
	             //获取URL参数
					function getUrlParam(name) {
					     var url=window.location.href;
					      var r=''
					      var c=[];
					      if(url.indexOf(name)==-1){
					          return null
					      }else{           
					            var search=window.location.href.split('?')[1];
					            if(search.indexOf('&')!=-1){
					                r=search.split('&');
					                for(var i=0;i<r.length;i++){
					                  for(var j=0;j<r[i].split('=').length;j++){
					                      c.push(r[i].split('=')[j])
					                  }
					            };
					            }else {
					                r=search;
					                for(var i=0;i<r.split('=').length;i++){
					                  c.push(r.split('=')[i])
					                }
					            };             
					            for(var i=0;i<c.length;i++){
					                if(c[i]==name){
					                    return decodeURIComponent(c[i+1]);
					                }                    
					            }     
					      }
					};

					//获取某一天的起始时间戳
						function getDayStartUnixTimestamp(year, month, day) {
						    var date = new Date(year + '/' + month + '/' + day);
						    return date.getTime() / 1000;
						}

						//获取当天的起始时间戳
						function getTodayStartUnixTimestamp() {
						    var now = new Date();
						    var year = now.getFullYear();
						    var month = now.getMonth() + 1;
						    var day = now.getDate();
						    return getDayStartUnixTimestamp(year, month, day);
						}

						//根据Unix时间戳获取对应的格式化时间，格式为yyyy/MM/dd
						function getDateStr(unixTime) {
						    var date = new Date(unixTime * 1000);
						    var year = date.getFullYear();
						    var month = date.getMonth() + 1;
						    var day = date.getDate();
						    var hours = date.getHours();
						    var min = date.getMinutes();
						    return year + '-' + numberProcess(month) + '-' + numberProcess(day);   
						};

						function numberProcess(n) {
						    if(n < 10) {
						        return '0' + n;
						    }
						    return '' + n;
						}


			    	var machineNumber = getUrlParam('machineNumber');
					var timelineDate = getTodayStartUnixTimestamp()+28800;
					var nowToday = getTodayStartUnixTimestamp()+28800;
			    	if(machineNumber != null && machineNumber != undefined && machineNumber != '') {
				        $('title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				        $('#title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				    }
				    var screenWidth = $(window).width()*3/4;
				    var leftRightMargin = screenWidth / 20;

				    $('#canvas').attr('width', screenWidth);
				    $('#canvas').attr('height', 300);
				    $('#slider').css('width', screenWidth - 2 * leftRightMargin);
				    $('#slider').css('margin-left', leftRightMargin);
				    $('#slider').css('margin-right', leftRightMargin);

				    $('#subtitle').text(getDateStr(timelineDate));

				    $('a#btn-pre-day').click(function() {
						timelineDate = timelineDate - 86400;
						$('title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				        $('#title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				    	$('#subtitle').text(getDateStr(timelineDate));
						if(slider != undefined) {
							slider.noUiSlider.set([0, 100]);
						}
				    	getMachineStatisticsData(timelineDate);
				    })

				    $('a#btn-next-day').click(function() {
						if(timelineDate == nowToday) {
							// $.alert('没有更多数据了');
							vueThis.$message('没有更多数据了')
							return ;
						}
						timelineDate = timelineDate + 86400;
						$('title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				        $('#title').text(machineNumber + '    ' + getDateStr(timelineDate) + '时间轴统计图');
				    	$('#subtitle').text(getDateStr(timelineDate));
						if(slider != undefined) {
							slider.noUiSlider.set([0, 100]);
						}
						alert(slider)
						getMachineStatisticsData(timelineDate);
				    })
			    	
			    	var redArr, greenArr, yellowArr;
			    	var canvas = document.getElementById('canvas');
			    	var canvasRect = canvas.getBoundingClientRect();
			    	var context = canvas.getContext('2d');

			    	var startX = leftRightMargin;
			        var startY = 80;
			        var cellHeight = 100;
			        var canvasHeight = 300;
			        var curStart;
			        var curEnd;
			        var clickedTimeline = -1;
			        var clickedObj;

			        var slider = document.getElementById('slider');
			    	var sliderPreStart = 0;
			    	var sliderPreEnd = 100;
			    	var linkedList = new LinkedList();

			    	noUiSlider.create(slider, {
						start: [0, 100],
						handles: 2,
						margin: 1,
						connect: true,
						range: {
							min: 0,
							max: 100
						},
					});
			        slider.noUiSlider.on('set', function(values, handles) {
						var start = values[0];
						var end = values[1];
						if(start !== sliderPreStart || end !== sliderPreEnd) {
							//更新
							updateChart(start, end);
							sliderPreEnd = end;
							sliderPreStart = start;
						}
					})

			    	getMachineStatisticsData(nowToday);

			    	//获取机器当天的统计数据
			    	function getMachineStatisticsData(dayStartTime) {
			    		$.ajax({
			    			type: 'POST',
			    			url: 'http://timeline.cn',
			    			data: {
								day: dayStartTime
							},
							async:false,
			    			success: function(response) {
			    					var data = JSON.parse(response).data[0];
			    					console.log(data)
			    					redArr = data.red;
			    					greenArr = data.green;
			    					yellowArr = data.yellow;
			    				
			    					showTimelineChart();
			    			},
			    			error: function(jqXHR, textStatus, errorThrown) {
			    				vueThis.$message('获取机器数据出错')
			    			}
			    		})
			    	}

			    	function showTimelineChart() {
			    		var seriesData = [];
			    		if(greenArr != null) {
					        for(var i = 0; i < greenArr.length; i++) {
					        	seriesData.push({
					        		name: '工作时间',
					        		start: greenArr[i].start,
					        		end: greenArr[i].end,
					        		data: greenArr[i].end - greenArr[i].start,
					        	})
					        }
					    }
					    if(yellowArr != null) {
					        for(var i = 0; i < yellowArr.length; i++) {
					        	seriesData.push({
					        		name: '待机时间',
					        		start: yellowArr[i].start,
					        		end: yellowArr[i].end,
					        		data: yellowArr[i].end - yellowArr[i].start,
					        	})
					        }
					    }
					    if(redArr != null) {
					        for(var i = 0; i < redArr.length; i++) {
					        	seriesData.push({
					        		name: '故障时间',
					        		start: redArr[i].start,
					        		end: redArr[i].end,
					        		data: redArr[i].end - redArr[i].start,
					        	})
					        }
					    }

						var todayStart = timelineDate;
					    var todayEnd = todayStart + 86399;

					    if(seriesData.length == 0) {
					    	//没有数据，灯的数据全部为null的情况
					    	context.fillStyle = '#888888';
					    	context.fillRect(startX, startY, (screenWidth - 2 * leftRightMargin), cellHeight);
					    	seriesData.push({
								name: '其他时间',
				        		start: todayStart,
				        		end: todayEnd,
				        		data: 86399,
					    	})
					    } else {
					    	//有数据，则将数据排序
					    	seriesData.sort(function (a, b) {
					        	if(a.start > b.start) {
					        		return 1;
					        	} else if(a.start < b.start) {
					        		return -1;
					        	}
					        	return 0;
					        });
					    }
				       
				        linkedList.createList(seriesData);
				        // var pp = linkedList.head;
				        // while(pp != null) {
				        // 	console.log('before insert: ' + JSON.stringify(pp.val));
				        // 	pp = pp.next;
				        // }

				        // console.log('-----------------------------');
				        
				        var curTime;
				        if(todayStart == nowToday) {
					    	curTime = parseInt(new Date().getTime() / 1000, 10);
					    } else {
					    	curTime = todayEnd;
					    }

				        var p = linkedList.head;
				        var index = 1;
				        if(p.val.start > todayStart) {
				        	linkedList.insert(0, {
				        		name: '其他时间',
				        		start: todayStart,
				        		end: p.val.start,
				        		data: p.val.start - todayStart,
				        	})
				        	++index;
				        }
				        while(p.next != null) {
				        	var next = p.next;
				    		if(p.val.end < next.val.start) {
				        		linkedList.insert(index, {
				        			name: '其他时间',
					        		start: p.val.end,
					        		end: next.val.start,
					        		data: next.val.start - p.val.end,
					        		insert: true		
				        		})
				        	}
				        	index++;
				        	p = p.next;
				        }
				        if(p != null && p.val.end < curTime) {
				        	linkedList.insert(index, {
				        		name: '其他时间',
				        		start: p.val.end,
				        		end: curTime,
				        		data: curTime - p.val.end,
				        		insert: true
				        	})
				        }

				        var cellWidth = (screenWidth - 2 * leftRightMargin) / (curTime - todayStart);
				        var widthHasDrawn = 0;

				        context.clearRect(0, 0, screenWidth, canvasHeight);
				        p = linkedList.head;
				        while(p) {
				        	var obj = p.val;
				        	// if(obj.insert) {
				        	// 	console.error('insert: ' + JSON.stringify(obj));
				        	// } else {
				        	// 	console.log('obj: ' + JSON.stringify(obj));
				        	// }
				        	if(obj.name == '待机时间') {
				        		context.fillStyle = '#CCCC33';
				        	} else if(obj.name == '故障时间') {
				        		context.fillStyle = '#CC0033';
				        	} else if(obj.name == '工作时间') {
				        		context.fillStyle = '#66CC99';
				        	} else {
				        		context.fillStyle = '#888888';
				        	}
				        	context.fillRect(startX + widthHasDrawn, startY, cellWidth * obj.data, cellHeight);
				        	widthHasDrawn += cellWidth * obj.data;
				        	if(widthHasDrawn > (screenWidth - 2 * leftRightMargin)) {
				        		widthHasDrawn = (screenWidth - 2 * leftRightMargin);
				        	}
				        	p = p.next;
				        }
				       
				        drawTimeLabel(todayStart, curTime);
				        curStart = todayStart;
				        curEnd = curTime;
			    	}

			    	function updateChart(start, end) {
			    		var todayStart = timelineDate;
					    var todayEnd = todayStart + 86399;
					    var curTime;
					    if(todayStart == nowToday) {
					    	curTime = parseInt(new Date().getTime() / 1000, 10);
					    } else {
					    	curTime = todayEnd;
					    }
				        start = todayStart + (start * (curTime - todayStart) / 100);
				        end = todayStart + (end * (curTime - todayStart) / 100);
				        if(end > curTime) {
				        	end = curTime;
				        }
				        var widthHasDrawn = 0;
				        var cellWidth = (screenWidth - 2 * leftRightMargin) / (end - start);
				        context.clearRect(0, 0, screenWidth, canvasHeight);
				        var p = linkedList.head;
				        while(p != null) {
				        	var obj = p.val;
				        	if(obj.name == '待机时间') {
				        		context.fillStyle = '#CCCC33';
				        	} else if(obj.name == '故障时间') {
				        		context.fillStyle = '#CC0033';
				        	} else if(obj.name == '工作时间') {
				        		context.fillStyle = '#66CC99';
				        	} else {
				        		context.fillStyle = '#888888';
				        	}
				        	var delta = 0;
				        	if(clickedTimeline >= obj.start && clickedTimeline <= obj.end) {
				        		delta = 10;
				        		clickedObj = obj;
				        	}
				        	if(obj.start >= start && obj.end <= end) {
				        		context.fillRect(startX + widthHasDrawn, startY - delta, cellWidth * obj.data, cellHeight + 2 * delta);	
				        		widthHasDrawn += cellWidth * obj.data;
				        	} else if(obj.start < start && obj.end > start) {
				        		context.fillRect(startX + widthHasDrawn, startY - delta, cellWidth * (obj.end - start), cellHeight + 2 * delta);	
				        		widthHasDrawn += cellWidth * (obj.end - start);
				        	} else if(obj.end > end && obj.start < end) {
				        		context.fillRect(startX + widthHasDrawn, startY - delta, cellWidth * (end - obj.start), cellHeight + 2 * delta);	
				        		widthHasDrawn += cellWidth * (end - obj.start);
				        	}
				        	if(widthHasDrawn > (screenWidth - 2 * leftRightMargin)) {
				        		widthHasDrawn = (screenWidth - 2 * leftRightMargin);
				        	}
				        	p = p.next;
				        }
				        drawTimeLabel(start, end);
				        curStart = start;
				        curEnd = end;
			    	}

			    	function drawTimeLabel(startTime, endTime) {
			    		context.fillStyle = '#000000';
			    		var originFont = context.font;
			    		context.font = '16px Arial';
			    		var width = context.measureText('00:00').width;
			    		if(startTime == null) {
			    			context.fillText('00:00', leftRightMargin - width / 2, 210);	
			    		} else {
			    			context.fillText(parseTime(startTime), leftRightMargin - width / 2, 210);	
			    		}    		
			    		context.fillText(parseTime(endTime), screenWidth - leftRightMargin - width / 2, 210);
			    		context.font = originFont;
			    	}

			    	function parseTime(time) {
			    		var date = new Date(time * 1000);
			    		var hour = date.getHours();
			    		var minute = date.getMinutes();
			    		if(hour < 10) {
			    			hour = '0' + hour;
			    		}
			    		if(minute < 10) {
			    			minute = '0' + minute;
			    		}
			    		var str = hour + ':' + minute;
			    		return str;
			    	}

			    	$("#canvas").click(function(event){
			    		var x = event.clientX - canvasRect.left - leftRightMargin;
			    		var y = event.clientY - canvasRect.top - 100;
			    		if(x >= 0 && x <= screenWidth - 2 * leftRightMargin && y > 0 && y < cellHeight) {
			    			//点击区域在图表里，计算点击的哪个时间块
			    			clickedTimeline = curStart + (curEnd - curStart) * (x / (screenWidth - 2 * leftRightMargin));
			    			// console.log('clicked time: ' + parseTime(clickedTimeline));
			    			updateChart(sliderPreStart, sliderPreEnd);
			    			drawHint();
			    		}
			    	})

			    	function drawHint() {
			    		if(clickedObj != null) {
			    			var originFont = context.font;
							var str = clickedObj.name + ': ' + parseTime(clickedObj.start) + '--' + parseTime(clickedObj.end);
							var timeStr = secondToFormattedTime(clickedObj.end - clickedObj.start);
							str += '(' + timeStr + ')';
							context.fillStyle = '#000000';
							context.font = '18px Arial';
							var width = context.measureText(str).width;
							context.fillText(str, (screenWidth - width) / 2, 250);
							context.font = originFont;
						}
			    	}
	            }
	        }    	
    </script>