var outerBox = document.querySelector("#outers");
var outers = [...document.querySelectorAll("#outers > li")];

outerBox.onmouseover = function(){
	for( let i = 0 ; i < outers.length ; i ++ ){
		switch( i ){
			case 0:
			case 1:
			case 2:
			case 3:
				outers[i].style.transform = `rotateY( ${ ( i + 1 ) * 90 }deg ) scaleX(2) scaleY(2) translateZ(200px)`
			break;
		}
	}
}

outerBox.onmouseout = function(){
	for( let i = 0 ; i < outers.length ; i ++ ){
		switch( i ){
			case 0:
			case 1:
			case 2:
			case 3:
				outers[i].style.transform = `rotateY( ${ ( i + 1 ) * 90 }deg ) translateZ(100px)`
			break;
		}
	}
}