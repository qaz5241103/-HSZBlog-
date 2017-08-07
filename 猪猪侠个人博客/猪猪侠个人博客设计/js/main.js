
window.onload=function(){
	//控制忠显隐
	var zhong=document.getElementsByClassName('zhong')[0];
	var yin=document.getElementsByClassName('yin')[0];
	setTimeout(function(){
		zhong.style.opacity="1";
		yin.style.opacity="1";
	},4000);
	//控制忠结束
	
	//进入点击事件
	var yin=document.getElementsByClassName('yin')[0];
	var donghua=document.getElementsByClassName('donghua')[0];
	var donghua2=document.getElementsByClassName("donghua2")[0];
	var body=document.getElementsByTagName('body');
	yin.onclick=function(){
		donghua.style.opacity="0";
		donghua.style.width="0";
		donghua.style.height="0";
		donghua2.style.opacity="1";
		donghua2.style.width="100%";
		donghua2.style.height="100%";
		setTimeout(rotate,5000);
	}
	
	//设置book旋转
    function rotate(){
    	var mybook=document.getElementsByClassName("mybook")[0];
	    var book=document.getElementsByClassName("book");
	    var mybookh=mybook.offsetHeight;
		for(var i=0;i<book.length;i++){
			book[i].style.height=mybookh+'px';
			var random=Math.floor((Math.random()*10+1)-5);
			book[i].style.transform="rotateZ("+random+"deg)";
	    }
	}
	
	
	
}
