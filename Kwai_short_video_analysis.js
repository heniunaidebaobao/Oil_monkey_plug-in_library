// ==UserScript==
// @name         快手短视频解析
// @version      3.1
// @description  快手短视频解析
// @author       喝牛奶的宝宝
// @match        *://www.kuaishou.com/*
// @icon         data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAABAAABILAAASCwAAAAAAAAAAAAAAAAAABkn/AANJ/wAGSf8lBkn/hwZJ/9UGSf/8Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//AZJ/9UGSf+HBkn/JQNJ/wAGSf8AAAAAAAZJ/wAISf8BBkn/TQZJ/9MGSf/+Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//4GSf/TBkn/TQdJ/wEGSf8ABkn/AAZJ/04GSf/nBkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/nBkn/TgZJ/wAGSf8mBkn/0gZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BUj//wJG//8ER///BEj//wRI//8ESP//BEj//wRI//8ESP//BEj//wNG//8ER///Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/SBkn/JgZJ/4gGSf/+Bkn//wZJ//8GSf//BUj//wZJ//8NTv//BEj//wRI//8GSf//Bkn//wRI//8UU///Wof//5Cu//+Ztf//mbT//5m0//+ZtP//mbT//5m0//+YtP//d5z//y5m//8FSP//Bkn//wZJ//8GSf//Bkn//wZJ//4GSf+HBkn/1QZJ//8GSf//Bkn//wVI//8aWP//ian//73P//95nf//I17//wRH//8CRv//Hlv//63D///6/P//////////////////////////////////////////////////3uf//1GA//8FSP//Bkn//wZJ//8GSf//Bkn//wZJ/9UGSf/7Bkn//wZJ//8GSf//A0f//3qe//////////////3+///X4f//eJ3//yRf//+Orf////////P2//+uxP//mLP//5m0//+ZtP//mbT//5m0//+YtP//nbf//9jj////////3OX//y5m//8ER///Bkn//wZJ//8GSf//Bkn/+wZJ//8GSf//Bkn//wZJ//8ESP//mbT////////q8P//2+X///39///9/f//3Ob//+/z///9/f//e57//wpM//8ER///BEj//wRI//8ESP//BEj//wRI//8ER///NGv//9nj////////cpj//wJG//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wRI//+ZtP///////5+5//8jXv//e5///9fi///+/v///////+Xs//8oYv//A0f//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8ER///nbf///////+Xs///BEj//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BEj//5m0////////mLT//wJG//8ER///I17//5ay////////4en//yNe//8ESP//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wRI//+YtP///////5m0//8ESP//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8ESP//mbT///////+ZtP//BEj//wRI//8AQ///TX3///r7///i6v//JF///wRI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BEj//5m0////////mbT//wRI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wRI//+ZtP///////5ez//8BRf//HFn//2mR///T3////////+Hp//8jXv//BEj//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8ESP//mLP///////+ZtP//BEj//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BEj//5m0////////u83//26V///N2v//+/z/////////////7fL//zdt//8BRf//BEj//wRI//8ESP//BEj//wRI//8ESP//BEf//whL//+tw////////46s//8ER///Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8ESP//l7P////////+/v///f7////////j6v//l7P//9bh////////sMX//zRr//8jXv//JF///yRf//8kX///JF///yNf//8kX///apL//+/z///7/P//WYb//wJG//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wNH//9Zhf//7PH////////l7P//ka///zBo//8FSP//Yoz///P2////////6/D//+Lp///i6v//4ur//+Lq///i6v//4ur//+Pr///4+v///////6/F//8WVf//BUj//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wlL//8+cv//Z5D//zJp//8HSv//A0f//wVJ//8JS///Z5D//9Tf///2+f//+fr///j6///4+v//+Pr///j6///4+v//+Pr//+ju//+ct///IFz//wRI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wNH//8CRv//BEf//wZJ//8ER///A0f//wlL//8MTf//HVr//z1x//9Ddf//RHb//0N2//9Ac///Q3X//0t7//9GeP//K2T//wlL//8ESP//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BEj//y5m//95nf//rcP//73P//+Wsv//VYL//xFR//8ARP//Ckv//0l6//+Qrv//usz//6O8//9lj///F1b//wRH//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wlL//9hjP//3uf////////////////////////6+///r8T//zRr//+Prf//9fj///////////////////z9//+9z///MGj//wNH//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8DR///VIL///D0////////5Ov//6e///+ZtP//v9D///b4///+/v//5ez///n6///8/P//x9b//5m0//+zx///8/b///////+3yv//FlT//wVI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//BUj//xpX///I1////////9Dc//87cP//B0r//wRI//8QUf//dJr///T3/////////////564//8YVv//BEf//wtN//90mv//9/n///n7//9Tgv//Akb//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8CRv//UYD///n7///y9v//S3v//wFG//8GSf//Bkn//wVI//8JS///o7z////////v8///OW7//wJG//8GSf//BEj//xNT///K2P///////4mp//8DR///Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wJG//9slP///////8/c//8XVf//BUj//wZJ//8GSf//Bkn//wFG//9gi////////+bt//8qY///A0f//wZJ//8FSf//Dk///8PT////////lbH//wRI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Akb//2yU////////ztz//xZV//8FSP//Bkn//wZJ//8GSf//AUb//2CL///+/v///f3//2+W//8CRv//Akb//wBF//89cf//5+3///////9qkv//Akb//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8CRv//UYD///n7///y9v//S3v//wFG//8GSf//Bkn//wVI//8JS///o7z/////////////5+7//3+i//9Fd///YYz//9Dd////////2+X//ytk//8ER///Bkn//wZJ//8GSf//Bkn//wZJ//sGSf//Bkn//wZJ//8GSf//Bkn//wVI//8bWf//y9n////////P3P//O3D//wdK//8ESP//EFH//3Sa///09////P3//+vx///+/v///v7///j6///8/f///////+3y//9fiv//BEj//wZJ//8GSf//Bkn//wZJ//8GSf/7Bkn/1QZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wNH//9XhP//8PT////////k6///p7///5m0//+/0P//9vj///////+2yf//P3P//5q1///c5f//7vL//+Xs//+1yf//SXr//whK//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ/9UGSf+MBkn//gZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wlL//9nkP//4Oj////////////////////////6+///scb//ydh//8CRv//CUv//x9c//81a///KGL//w9P//8DR///Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/+Bkn/hwZJ/yYGSf/SBkn//wZJ//8GSf//Bkn//wZJ//8GSf//BUn//wVI//8uZ///e57//63D//+9z///mbX//1mG//8UU///BEf//wZJ//8GSf//BEj//wNH//8ER///BUn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ/9IGSf8mBkn/AAZJ/04GSf/nBkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wRH//8DR///CUv//w5O//8FSP//Akb//wVI//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/nBkn/TgZJ/wAGSf8ACEn/AQZJ/00GSf/TBkn//gZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/+Bkn/0wZJ/00HSf8BBkn/AAAAAAAGSf8AA0n/AAZJ/yYGSf+MBkn/1gZJ//wGSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf//Bkn//wZJ//8GSf/8Bkn/1QZJ/4gGSf8mA0n/AAZJ/wAAAAAAwAAAA4AAAAGAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAABgAAAAcAAAAM=
// @grant        GM_setClipboard
// @grant        GM_download
// ==/UserScript==

(function() {
    'use strict';
	var Close_comment_ID = 0;
    var source_address;
    var sourcr_name;
    setInterval(function() {
		//判断是否在首页
		if(document.querySelector("div.rank-container")){
			if (document.querySelector("div.rank-container > h2").textContent != '牛奶改编'){
				document.querySelector("div.rank-container > h2").textContent = '牛奶改编';
				document.querySelector("div.page.rank-page").remove();
				document.querySelector("div.rank-list").remove();
				Obtaining_the_carousel_map();
			}
		}
		//判断是否有右侧个人信息div
		if(document.querySelector("div.profile-user")){
            //获取地址
            source_address = document.querySelector(".player-video").src;
            //获取名字
            sourcr_name = document.querySelector("div.short-video-info-container-detail > p").textContent;
            //轮播
			Close_Comment();
            //解析
            analysis();
		}
        //判断是否在推荐页
        if(document.querySelector("div.sidebar-item.share-btn > div > p").textContent == ' 分享 '){

            if(!document.querySelector("#to_open")){
                //获取地址
                source_address = document.querySelector("div.swiper-slide.swiper-slide-active > div > div.reco-player-container.player-area > div > div.kwai-player-container-video > video").src;
                //获取名字
                sourcr_name = document.querySelector("div.custom-plugin > div.feed-info > p").textContent;
                //获取父节点
                let parent = document.querySelector("div.kwai-player-plugin-bar.kwai-player-plugin-bar-bottom > div > div.kwai-player-plugin-bar-line > div.right");
                //添加PotPlayer节点
                let to_PotPlayer = document.createElement("div");
                to_PotPlayer.id = 'to_PotPlayer';
                to_PotPlayer.textContent = 'PotPlayer打开';
                to_PotPlayer.style = 'min-width: auto; margin-right: 38px; color: aliceblue; font-size: 12px;';
                to_PotPlayer.onclick = function(){
				    window.open('PotPlayer://' + source_address, '_self');
			    }
                parent.insertBefore(to_PotPlayer,parent.firstChild);
                //添加打开链接节点
                let to_open = document.createElement("div");
                to_open.id = 'to_open';
                to_open.textContent = '打开链接';
                to_open.style = 'min-width: auto; margin-right: 38px; color: aliceblue; font-size: 12px;';
                to_open.onclick = function(){
				    window.open(source_address, '_blank');
			    }
                parent.insertBefore(to_open,parent.firstChild);
                //添加复制链接节点
                let to_copy = document.createElement("div");
                to_copy.id = 'to_open';
                to_copy.textContent = '复制链接';
                to_copy.style = 'min-width: auto; margin-right: 38px; color: aliceblue; font-size: 12px;';
                to_copy.onclick = function(){
				    GM_setClipboard(source_address);
					toast('已复制到剪辑板');
			    }
                parent.insertBefore(to_copy,parent.firstChild);
                //添加直接下载节点
                let to_download = document.createElement("div");
                to_download.id = 'to_open';
                to_download.textContent = '直接下载';
                to_download.style = 'min-width: auto; margin-right: 38px; color: aliceblue; font-size: 12px;';
                to_download.onclick = function(){
				    GM_download(source_address,Nameredefinition(sourcr_name) + ".mp4");
			    }
                parent.insertBefore(to_download,parent.firstChild);
            }
        }
	},1000);

    //解析
    function analysis(){
        //如果没有解析按钮
		if(!document.querySelector("#jiexi")){
				let div = document.createElement("div");
				div.classList = 'right-part';
				div.id = 'jiexi';
				div.innerHTML = '<div data-v-68cd9209 data-v-09c1df08 class="follow-button short-video-follow"><div data-v-68cd9209></div>解析</div><div style="color: white;display: none;position: fixed;" id="niunai_anniu"><div id="to_download">直接下载</div><div id="to_copy">复制链接</div><div id="to_open">打开链接</div><div id="to_PotPlayer">PotPlayer打开</div></div>';
                document.querySelector("div.profile-user").append(div);
				//鼠标在视频div滚动
				document.querySelector("div.short-video-wrapper").onwheel = function(event){
					event = event || window.event;
					if(event.deltaY<0){
						document.querySelector("div.switch-item.video-switch-last").click();
					}else if(event.deltaY>0){
						document.querySelector("div.switch-item.video-switch-next").click();
					}
				}
				//鼠标进入解析div
				div.onmouseover = function(){
					document.querySelector("#niunai_anniu").style.display = 'block';
				};
				//鼠标离开解析div
				div.onmouseout = function(){
					document.querySelector("#niunai_anniu").style.display = 'none';
				};

				//鼠标进入下载div
				document.querySelector("#to_download").onmouseover = function(){
					document.querySelector("#to_download").style.color = 'red';
				};
				//鼠标离开下载div
				document.querySelector("#to_download").onmouseout = function(){
					document.querySelector("#to_download").style.color = 'white';
				};

				//鼠标进入复制div
				document.querySelector("#to_copy").onmouseover = function(){
					document.querySelector("#to_copy").style.color = 'red';
				};
				//鼠标离开复制div
				document.querySelector("#to_copy").onmouseout = function(){
					document.querySelector("#to_copy").style.color = 'white';
				};

				//鼠标进入打开div
				document.querySelector("#to_open").onmouseover = function(){
					document.querySelector("#to_open").style.color = 'red';
				};
				//鼠标离开打开div
				document.querySelector("#to_open").onmouseout = function(){
					document.querySelector("#to_open").style.color = 'white';
				};

				//鼠标进入PotPlayer div
				document.querySelector("#to_PotPlayer").onmouseover = function(){
					document.querySelector("#to_PotPlayer").style.color = 'red';
				};
				//鼠标离开PotPlayer  div
				document.querySelector("#to_PotPlayer").onmouseout = function(){
					document.querySelector("#to_PotPlayer").style.color = 'white';
				};

				//绑定下载事件
				document.querySelector("#to_download").onclick = function(){
					GM_download(source_address,Nameredefinition(sourcr_name) + ".mp4");
				}

				//绑定复制事件
				document.querySelector("#to_copy").onclick = function(){
					GM_setClipboard(source_address);
					toast('已复制到剪辑板');
				}

				//绑定打开事件
				document.querySelector("#to_open").onclick = function(){
					window.open(source_address, '_blank');
				}

				//绑定PotPlayer事件
				document.querySelector("#to_PotPlayer").onclick = function(){
					window.open('PotPlayer://' + source_address, '_self');
				}
			}
    };

	//提示
	function toast(msg,duration){

		duration=isNaN(duration)?3000:duration;

		let toastDom = document.createElement('div');

		toastDom.innerHTML = msg;

		//toastDom.style.cssText="width: 60%;min-width: 150px;opacity: 0.7;height: 30px;color: rgb(255, 255, 255);line-height: 30px;text-align: center;border-radius: 5px;position: fixed;top: 40%;left: 20%;z-index: 999999;background: rgb(0, 0, 0);font-size: 12px;";
		toastDom.style.cssText='padding:2px 15px;min-height: 36px;line-height: 36px;text-align: center;transform: translate(-50%);border-radius: 4px;color: rgb(255, 255, 255);position: fixed;top: 50%;left: 50%;z-index: 9999999;background: rgb(0, 0, 0);font-size: 16px;'

		document.body.appendChild(toastDom);

		setTimeout(function() {

			var d = 0.5;

			toastDom.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';

			toastDom.style.opacity = '0';

			setTimeout(function() { document.body.removeChild(toastDom) }, d * 1000);

		}, duration);

    };

	//去除不允许创建文件的字符
	function Nameredefinition(Name){
		let str_i = ['?', '、', '╲', '/', '*', '“', '”', '<', '>', '|','\n',':'];
		for(let i=0;i < str_i.length;i++){
			Name = Name.replace(str_i[i], '')
		}
		Name = Name.replace(' ', '')
		Name = Name.replace('  ', '')
		return Name
	};

	//关闭评论
	function Close_Comment(){
        //只有清除评论才轮播防止卡图
		if(document.querySelector("div.comment-container.vertical-comment.dark-mode")){
			document.querySelector("div.comment-container.vertical-comment.dark-mode").remove();
            Obtaining_the_carousel_map();
		}
	}

	function Obtaining_the_carousel_map(){
		var myHeaders = new Headers();
		myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.50");
		myHeaders.append("Accept", "*/*");
		myHeaders.append("Host", "heniunaidebaobao.github.io");
		myHeaders.append("Connection", "keep-alive");

		var requestOptions = {
		   method: 'GET',
		   headers: myHeaders,
		   redirect: 'follow'
		};

		fetch("https://heniunaidebaobao.github.io/Oil_monkey_plug-in_library/Carousel_map_link.json", requestOptions)
		   .then(response => response.json())
		   .then(json => Carousel_chart(json))
		   .catch(error => console.log('error', error));
	}

	//轮播图
	function Carousel_chart(json){
		if (!document.querySelector("div#niunai_Carousel_chart")){
			let temp;
			if(document.querySelector("div.profile-user")){
				console.log('div.profile-user存在');
				temp = document.querySelector("div.short-video-info-container")
			}else if(document.querySelector("div.rank-container")){
				console.log('div.rank-container存在');
				temp = document.querySelector("div.rank-container")
			}
			let div = document.createElement("div");
			div.id = 'niunai_Carousel_chart';
			div.style.width = '320px';
			div.style.height = '568px';
			temp.append(div);
			let img = document.createElement("img");
			img.src = json.Carousel_map_link[0];
			div.append(img);
			let num = 0;
			setInterval(function() {
				num++;
				if(num == json.Carousel_map_link.length){
					num = 0;
				}
				img.src = json.Carousel_map_link[num];
			},2000);
		}
	}
})();
