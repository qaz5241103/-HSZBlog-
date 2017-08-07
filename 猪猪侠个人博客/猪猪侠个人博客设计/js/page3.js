window.onload=function(){
	var mybook=document.getElementsByClassName("mybook")[0];
	var book=document.getElementsByClassName("book");
	var mybookh=mybook.offsetHeight;
	function rotate(){
    	var mybook=document.getElementsByClassName("mybook")[0];
	    var book=document.getElementsByClassName("book");
	    var mybookh=mybook.offsetHeight;
		for(var i=0;i<book.length;i++){
			book[i].style.height=mybookh+'px';
			var random=Math.floor((Math.random()*4+1)-2);
			book[i].style.transform="rotateZ("+random+"deg)";
	    }
	}
	setTimeout(rotate,100);
}
