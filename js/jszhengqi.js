window.onload=function(){
	// 背景导航
	var obga = document.getElementsByClassName('bg_nav_a1')[0];
	var obgul2 = document.getElementsByClassName('bg_nav_ul2')[0];
	obga.onmouseover=function(){
		obgul2.style.display='block';
	}
	obga.onmouseout=function(){
		obgul2.style.display='none';
	}
	obgul2.onmouseover=function(){
		obgul2.style.display='block';
	}
	obgul2.onmouseout=function(){
		obgul2.style.display='none';
	}



	//背景 轮播图
	 var obox3= document.getElementsByClassName('box3')[0];
	 var oul1 = document.getElementsByClassName('box3_ul1')[0];
	 var oli1 = oul1.getElementsByTagName('li');
	 var oul2 = document.getElementsByClassName('box3_ul2')[0];
	 var oli2 = oul2.getElementsByTagName('li');
	 var timer;
	 var index=0;
	 function move(){
	 	for(var i = 0;i<oli2.length;i++){
	 		oli2[i].className='';
	 		oli1[i].style.opacity='0';
	 	}
	 	oli2[index].className='liactive';
		oli1[index].style.opacity='1'
	 }
	 for(var i= 0;i<oli2.length;i++){
			oli2[i].index=i;
			oli2[i].onclick=function(){
				index=this.index;
				move();
			}
		}

		clearInterval(timer);
		timer=setInterval(function(){
			index++;
			if(index>=oli1.length){
				index=0;
			}
			move();

		},3000);

		obox3.onmouseover=function(){
			clearInterval(timer);
		}
		obox3.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(function(){
			index++;
			if(index>=oli1.length){
				index=0;
			}
			move();

		},3000);

		}
}