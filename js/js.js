window.onload=function(){
	// 导航的二级菜单
	var chanpin = document.getElementById('chanp');
	var oUla = document.getElementById('ula');
	var olia = oUla .getElementsByTagName('li');

	var caidan = document.getElementById('caidan');
	var oUlb = document.getElementById('ulb');
	var olib = oUlb .getElementsByTagName('li');
	for(var i= 0;i<olia.length;i++){
		olia[i].index=i;
		olia[i].onmouseover=function(){
			for(var j=0;j<olib.length;j++){
				olia[j].className='';
				olib[j].style.opacity=0;
			}
			olib[this.index].style.opacity=1;
			olia[this.index].className='cpactive';
			fun1();

		}
	}
	//封装了两个小函数
	function fun1(){
		caidan.className='cdactive';
		caidan.style.height=229+'px';
	};
	function fun2(){
		caidan.className=' ';
		caidan.style.height=0+'px';
	}

	caidan.onmouseover=function(){
		fun1();
	}
	chanpin.onmouseout=function(){
		fun2();
	}
	caidan.onmouseout=function(){
		fun2();
	}

	// 搜索框 焦点事件
	var input = document.getElementById('input'); //框 
	var ful= document.getElementById('ful');	//隐藏的ul  需要显示
	var icon= document.getElementById('icon');	//按钮  需要边变色
	var taga= document.getElementById('taga');	//框中的字  需要隐藏
	//封装两个小函数 再调用
	function fun3(){
		input.style.borderColor='#ff6700';
		ful.style.display='block';
		icon.style.borderColor='#ff6700';
		taga.style.display='none';
	}
	function fun4(){
		input.style.borderColor='';
		ful.style.display='none';
		icon.style.borderColor='';
		taga.style.display='block';
	}
	input.onfocus=function(){
		fun3();
	}
	input.onblur=function(){
		fun4();
	}


	//轮播图
	var arightb = document.getElementById('right_b');
	var aright = document.getElementById('right_a');
	var img = aright.getElementsByTagName('a');		//图  显示隐藏
	var ulright = document.getElementById('right_ul');
	var point = ulright.getElementsByTagName('li');		//点  变化classname  和图 隐藏显示
 	var goPre = document.getElementById('goPre');		//上一页 
	var goNext = document.getElementById('goNext');		//下一页
	var index = 0;		//索引
	var time;			//定时器  用来清除定时器用
	//封装一个小函数 小圆点ClassName   图片显示隐藏
	function move(){
		for(var i =0;i<point.length;i++){
			point[i].className='';
			img[i].style.opacity=0;
		}
		point[index].className='liactive';
		img[index].style.opacity=1;
	}
	//点击事件 上一页,如果大于图的数量 index 变成0
	goNext.onclick=function(){
		index++;
		if(index>=img.length){		
			index=0;
		}
		move();
	}
	//点击事件 下一页，
	goPre.onclick=function(){
		index--;
		if(index<0){
			index=img.length-1;
		}
		move();
	}

	//原点点击事件
	for(var i=0;i<point.length;i++){
		point[i].index=i;
		point[i].onclick=function(){
			index=this.index;	//当前索引对应
			move();
		}
	}
	//定时器轮播图
	clearInterval(time);
	time = setInterval(function(){
		index++;
		if(index>=img.length){
			index=0;
		}
		move()
	},5000);

	//鼠标移入到框的范围内是 定时器失效
	arightb.onmouseover=function(){
		clearInterval(time)
	}
	//鼠标移开的时候定时器执行 
	arightb.onmouseout=function(){
		clearInterval(time);
		time = setInterval(function(){
		index++;
		if(index>=img.length){
			index=0;
		}
		move()
	},3000);
	}


	// 闪购信息 点击下一页
	var fouthc = document.getElementsByClassName('fourth_c')[0];
	var sgul = document.getElementById('sgul');
	var jiantou = document.getElementsByClassName('jiantou')[0];
	var jtspan = jiantou.getElementsByTagName('span');
	var inx=0;
	
	jtspan[0].onclick=function(){
		if(inx>=2){
			return;
		}
		jtspan[0].className='spanactive';
		jtspan[1].className=' ';
		sgul.style.left=0*978+'px';
	}
	jtspan[1].onclick=function(){
		if(inx<0){
			return;
		}
		jtspan[1].className='spanactive';
		jtspan[0].className=' ';
		sgul.style.left=-1*978+'px';
	}

	//家电 选项卡
	var jdul = document.getElementById('jd_ul');
	var jdli = jdul.getElementsByTagName('li');			//选项点击
	var jdright = document.getElementById('div2_right');
	var jddiv = jdright.getElementsByClassName('jiadian');  //选项内容
	var index;
	function fun6(){
		for(var i = 0;i<jdli.length;i++){
			jdli[i].className='';
			jddiv[i].style.opacity=0;
		}
			jdli[index].className='liactive';
			jddiv[index].style.opacity=1;
	}
		for(var i=0;i<jdli.length;i++){
			jdli[i].index=i;
			jdli[i].onmouseover=function(){
				index=this.index;	        //当前索引对应
				fun6();
		}
	}



	//智能 选项卡
	var znul = document.getElementById('zn_ul');
	var znli = znul.getElementsByTagName('li');			//选项点击
	var znright = document.getElementById('zn_right');
	var zndiv = znright.getElementsByClassName('jiadian');  //选项内容
	var index;
	function fun7(){
		for(var i = 0;i<znli.length;i++){
			znli[i].className='';
			zndiv[i].style.opacity=0;
		}
			znli[index].className='liactive';
			zndiv[index].style.opacity=1;
	}
		for(var i=0;i<znli.length;i++){
			znli[i].index=i;
			znli[i].onmouseover=function(){
				index=this.index;	        //当前索引对应
				fun7();
		}
	}

	//搭配  选项卡
	var dpul = document.getElementById('dp_ul');
	var dpli = dpul.getElementsByTagName('li');			//选项点击
	var dpright = document.getElementById('dp_right');
	var dpdiv = dpright.getElementsByClassName('jiadian');  //选项内容
	var index;
	function fun8(){
		for(var i = 0;i<dpli.length;i++){
			dpli[i].className='';
			dpdiv[i].style.opacity=0;
		}
			dpli[index].className='liactive';
			dpdiv[index].style.opacity=1;
	}
		for(var i=0;i<dpli.length;i++){
			dpli[i].index=i;
			dpli[i].onmouseover=function(){
				index=this.index;	        //当前索引对应
				fun8();
		}
	}

	//配件  选项卡
	var pjul = document.getElementById('pj_ul');
	var pjli = pjul.getElementsByTagName('li');			//选项点击
	var pjright = document.getElementById('pj_right');
	var pjdiv = pjright.getElementsByClassName('jiadian');  //选项内容
	var index;
	function fun9(){
		for(var i = 0;i<pjli.length;i++){
			pjli[i].className='';
			pjdiv[i].style.opacity=0;
		}
			pjli[index].className='liactive';
			pjdiv[index].style.opacity=1;
	}
		for(var i=0;i<pjli.length;i++){
			pjli[i].index=i;
			pjli[i].onmouseover=function(){
				index=this.index;	        //当前索引对应
				fun9();
		}
	}

	//周边  选项卡
	var zbul = document.getElementById('zb_ul');
	var zbli = zbul.getElementsByTagName('li');			//选项点击
	var zbright = document.getElementById('zb_right');
	var zbdiv = zbright.getElementsByClassName('jiadian');  //选项内容
	var index;
	function fun10(){
		for(var i = 0;i<zbli.length;i++){
			zbli[i].className='';
			zbdiv[i].style.opacity=0;
		}
			zbli[index].className='liactive';
			zbdiv[index].style.opacity=1;
	}
		for(var i=0;i<zbli.length;i++){
			zbli[i].index=i;
			zbli[i].onmouseover=function(){
				index=this.index;	        //当前索引对应
				fun10();
		}
	}

	//为你推荐  点击下一页
	var tjdiv = document.getElementsByClassName('tj_div')[0];
	var tjul = document.getElementsByClassName('tj_ul')[0];
	var tj = document.getElementsByClassName('jiantou')[1];
	var tjspan = tj.getElementsByTagName('span');
	var inx=0;
	
	tjspan[0].onclick=function(){
		if(inx>=2){
			return;
		}
		tjspan[0].className='spanactive';
		tjspan[1].className=' ';
		tjul.style.left=0*1226+'px';
	}
	tjspan[1].onclick=function(){
		if(inx<0){
			return;
		}
		tjspan[1].className='spanactive';
		tjspan[0].className=' ';
		tjul.style.left=-1*1226+'px';
	}

	//内容 第一个轮播图
	// var nrbox1 = document.getElementsByClassName('nrbox1');
	var boxa = document.getElementById('boxa');				//ul
	var nrli = boxa.getElementsByTagName('li');				//每页
	// var boxa2 = document.getElementById('boxa2');				
	var spana = document.getElementById('spana');		//左
	var spanb = document.getElementById('spanb');		//右
	var boxb = document.getElementById('boxb'); 
	var nrpoint = boxb.getElementsByTagName('li');				//点
	var nows=0;
		function fun11(){
			for(var i = 0;i<nrpoint.length;i++){
				nrpoint[i].className='';
			}
			nrpoint[nows].className='nractive';
			boxa.style.left=-nows*296+'px';
		}
		//上一页下一页
		spanb.onclick=function(){
			nows++;
			if(nows>=nrli.length){
				  // nows=0;
				  nows=nrli.length-1;		
			}
			fun11();
		}
		spana.onclick=function(){
			nows--;
			if(nows<0){
				// nows=oSpan.length-1;
				nows=0;
			}
			fun11();
		}
		//圆点
		for(var i = 0;i<nrpoint.length;i++){
			nrpoint[i].nows=i;
			nrpoint[i].onclick=function(){
				nows=this.nows;
				fun11();
			}
		}

		//内容第二个轮播图 
		var boxc = document.getElementById('boxc');				//ul
		var nrlib = boxc.getElementsByTagName('li');				//每页
		var spanc = document.getElementById('spanc');		//左
		var spand = document.getElementById('spand');		//右
		var boxd = document.getElementById('boxd'); 
		var nrpointb = boxd.getElementsByTagName('li');	
		var nowb=0;
		function fun12(){
			for(var i = 0;i<nrpointb.length;i++){
				nrpointb[i].className='';
			}
			nrpointb[nowb].className='nractive';
			boxc.style.left=-nowb*296+'px';
		}
		//上一页下一页
		spand.onclick=function(){
			nowb++;
			if(nowb>=nrlib.length){
				  // nowb=0;
				  nowb=nrlib.length-1;		
			}
			fun12();
		}
		spanc.onclick=function(){
			nowb--;
			if(nowb<0){
				// nowb=oSpan.length-1;
				nowb=0;
			}
			fun12();
		}
		//圆点
		for(var i = 0;i<nrpointb.length;i++){
			nrpointb[i].nowb=i;
			nrpointb[i].onclick=function(){
				nowb=this.nowb;
				fun12();
			}
		}
		
		//内容第三个轮播图 
		var boxe = document.getElementById('boxe');				//ul
		var nrlic = boxe.getElementsByTagName('li');				//每页
		var spane = document.getElementById('spane');		//左
		var spanf = document.getElementById('spanf');		//右
		var boxf = document.getElementById('boxf'); 
		var nrpointc = boxf.getElementsByTagName('li');	
		var nowc=0;
		function fun13(){
			for(var i = 0;i<nrpointc.length;i++){
				nrpointc[i].className='';
			}
			nrpointc[nowc].className='nractive';
			boxe.style.left=-nowc*296+'px';
		}
		//上一页下一页
		spanf.onclick=function(){
			nowc++;
			if(nowc>=nrlic.length){
				  // nowc=0;
				  nowc=nrlic.length-1;		
			}
			fun13();
		}
		spane.onclick=function(){
			nowc--;
			if(nowc<0){
				// nowc=oSpan.length-1;
				nowc=0;
			}
			fun13();
		}
		//圆点
		for(var i = 0;i<nrpointc.length;i++){
			nrpointc[i].nowc=i;
			nrpointc[i].onclick=function(){
				nowc=this.nowc;
				fun13();
			}
		}
		//内容第四个轮播图 
		var boxi = document.getElementById('boxi');				//ul
		var nrlid = boxe.getElementsByTagName('li');				//每页
		var spani = document.getElementById('spani');		//左
		var spanj = document.getElementById('spanj');		//右
		var boxj = document.getElementById('boxj'); 
		var nrpointd = boxj.getElementsByTagName('li');	
		var nowc=0;
		function fun14(){
			for(var i = 0;i<nrpointd.length;i++){
				nrpointd[i].className='';
			}
			nrpointd[nowc].className='nractive';
			boxi.style.left=-nowc*296+'px';
		}
		//上一页下一页
		spanj.onclick=function(){
			nowc++;
			if(nowc>=nrlid.length){
				  // nowc=0;
				  nowc=nrlid.length-1;		
			}
			fun14();
		}
		spani.onclick=function(){
			nowc--;
			if(nowc<0){
				// nowc=oSpan.length-1;
				nowc=0;
			}
			fun14();
		}
		//圆点
		for(var i = 0;i<nrpointd.length;i++){
			nrpointd[i].nowc=i;
			nrpointd[i].onclick=function(){
				nowc=this.nowc;
				fun14();
			}
		}





		//视频
		var fobox1 = document.getElementById('fobox1');//显示视频按钮
		var spbox = document.getElementById('spbox'); //大 视频
		var spbox2 = document.getElementById('spbox2'); //关掉视频
		var spbox3 = document.getElementById('spbox3'); //视频按钮
		var spimg = document.getElementById('spimg'); // 图片关闭

		fobox1.onclick=function(){
			spbox.style.display='block';
		}
		spbox2.onclick=function(){
			spbox.style.display='none';
		}
		spbox3.onclick=function(){
			spimg.style.display='none';
			spbox3.style.display='none';
		}







}


