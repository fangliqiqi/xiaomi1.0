window.onload=function(){
	// 导航的二级菜单
	var chanpin = document.getElementById('chanp');
	var oUla = document.getElementById('ula');
	var olia = oUla .getElementsByTagName('li');

	var caidan = document.getElementById('caidan');
	var oUlb = document.getElementById('ulb');
	var olib = oUlb .getElementsByTagName('li');
	for(var i= 0;i<3;i++){
		olia[i].index=i;
		olia[i].onmouseover=function(){
			for(var j=0;j<3;j++){
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
	// 头部背景 轮播图
	var oBgbox = document.getElementsByClassName('mi_bg')[0];
	var oBgul1 = document.getElementsByClassName('bg_ul1')[0];
	var oBgli1 = oBgul1.getElementsByTagName('li');  //图
	var oBgul2 = document.getElementsByClassName('bg_ul2')[0];
	var oBgli2 = oBgul2.getElementsByTagName('li');  //亮的按钮
	var time1;
	var indexa = 0;
	function bgfun(){
		for(var i = 0;i<oBgli2.length;i++){
			oBgli2[i].className='';
			oBgli1[i].style.opacity=0;
		}
			oBgli2[indexa].className='bgactive';
			oBgli1[indexa].style.opacity=1;
	}
	// 按钮点击
	for(var i = 0;i<oBgli2.length;i++){
		oBgli2[i].indexa=i;
		oBgli2[i].onclick=function(){
			indexa=this.indexa;
			bgfun();
		}
	}
	//定时器 
	clearInterval(time1);
	time1 = setInterval(function(){
		indexa++;
		if(indexa>=oBgli1.length){
			indexa=0;
		}
		bgfun()
	},5000);
	
	oBgbox.onmouseover=function(){
		clearInterval(time1);
	}
	oBgbox.onmouseout=function(){
		clearInterval(time1);
	time1 = setInterval(function(){
		indexa++;
		if(indexa>=oBgli1.length){
			indexa=0;
		}
		bgfun()
	},5000);
	}

	//超轻四曲面轮播图
	var oBox2 = document.getElementsByClassName('box2')[0];
	var oBox2ul1 = document.getElementsByClassName('box2_ul1')[0];
	var oBox2li1 = oBox2ul1.getElementsByTagName('li');
	var oBox2ul2 = document.getElementsByClassName('box2_ul2')[0];
	var oBox2li2 = oBox2ul2.getElementsByTagName('li');
	var oGopre = document.getElementsByClassName('gopre')[0];
	var oGonext = document.getElementsByClassName('gonext')[0];
	var time2;
	var index2 = 0;
	function siqu(){
		for(var i = 0;i<oBox2li2.length;i++){
			oBox2li2[i].className='';
			oBox2li1[i].style.opacity=0;
		}
			oBox2li2[index2].className='active';
			oBox2li1[index2].style.opacity=1;	
	}
	for(var i = 0;i<oBox2li2.length;i++){
		oBox2li2[i].index2=i;
		oBox2li2[i].onclick=function(){
			index2=this.index2;
			siqu()
		}
	}
	oGopre.onclick=function(){
		index2--;
		if(index2<0){
			index2=oBox2li2.length-1;
		}
		siqu();
	}
	oGonext.onclick=function(){
		index2++;
		if(index2>=oBox2li2.length){
			index2=0;
		}
		siqu()
	}

	clearInterval(time2);
	time2=setInterval(function(){
		index2++;
		if(index2>=oBox2li2.length){
			index2=0;
		}
		siqu()
	},3000)

	oBox2.onmouseover=function(){
		clearInterval(time2)
	}
	oBox2.onmouseout=function(){	
		clearInterval(time2);
		time2=setInterval(function(){
			index2++;
			if(index2>=oBox2li2.length){
				index2=0;
			}
			siqu()
		},3000)
	}

	//小米8 AI变焦双摄拍摄 轮播图
	var oAi = document.getElementsByClassName('ai');
	var oAiul1 = document.getElementsByClassName('ai_ul1')[0];
	var oAili1 = oAiul1.getElementsByTagName('li');
	var oAiul2 = document.getElementsByClassName('ai_ul2')[0];
	var oAili2 = oAiul2.getElementsByTagName('li');
	var oAipre = document.getElementsByClassName('ai_pre')[0];
	var oAinext = document.getElementsByClassName('ai_nest')[0];
	var index3 = 0;
	function ai(){
		for(var i = 0;i<oAili2.length;i++){
			oAili2[i].className='';
		}	

			oAili2[index3].className='active';
			oAiul1.style.left=-index3*970+'px';	
	}
	for(var i = 0;i<oAili2.length;i++){
		oAili2[i].index3=i;
		oAili2[i].onclick=function(){
			index3++;
			if(index3>=oAili2.length){
				  index3=0;	  
			}
			index3=this.index3;
			ai()
		}
	}
	oAinext.onclick=function(){
			index3++;
			if(index3>=oAili2.length){
				  index3=0;
				  // index=oAili2.length-1;		
			}
			ai()
		}
	oAipre.onclick=function(){
			index3--;
			if(index3<0){
				index3=oAili2.length-1;
				// index=0;
			}
			ai();
		}
	// 小米8 光效 轮播图
	var ogxul1 = document.getElementsByClassName('gx_ul1')[0];
	var ogxli1 = ogxul1.getElementsByTagName('li');
	var ogxul2 = document.getElementsByClassName('gx_ul2')[0];
	var ogxli2 = ogxul2.getElementsByTagName('li');
	var ogxpre = document.getElementsByClassName('gx_pre')[0];
	var ogxnext = document.getElementsByClassName('gx_next')[0];
	 var timer;
	 var index4 = 0;

	function gx(){
		for(var i = 0;i<ogxli2.length;i++){
			ogxli2[i].className='';
			ogxli1[i].style.opacity=0;
		}
			ogxli2[index4].className='gxactive';
			ogxli1[index4].style.opacity=1;	
	}
	for(var i = 0;i<ogxli2.length;i++){
		ogxli2[i].index4=i;
		ogxli2[i].onclick=function(){
			index4=this.index4;
			gx()
		}
	}
	ogxpre.onclick=function(){
		index4--;
		if(index4<0){
			index4=ogxli2.length-1;
		}
		gx();
	}
	ogxnext.onclick=function(){
		index4++;
		if(index4>=ogxli2.length){
			index4=0;
		}
		gx()
	}

	clearInterval(timer);
	timer=setInterval(function(){
		index4++;
		if(index4>=ogxli2.length){
			index4=0;
		}
		gx()
	},3000)

	ogxul1.onmouseover=function(){
		clearInterval(timer)
	}
	ogxul1.onmouseout=function(){	
		clearInterval(timer);
		timer=setInterval(function(){
			index4++;
			if(index4>=ogxli2.length){
				index4=0;
			}
			gx()
		},3000)
	}


}













