var outerBox = document.querySelector("#outers");
var outers = [...document.querySelectorAll("#outers > li")];
var innerBox = document.querySelector("#inners");
var inners = [...document.querySelectorAll("#inners > li")];

outerBox.onmouseover = function(){
	for( let i = 0 ; i < outers.length ; i ++ ){
		switch( i ){
			case 0:
			case 1:
			case 2:
			case 3:
				outers[i].style.transform = `rotateY( ${ ( i + 1 ) * 90 }deg ) scaleX(2) scaleY(2) translateZ(200px)`;
				outers[i].style.opacity = `.7`;
			break;
		}
	}
	for( let i = 0 ; i < inners.length ; i ++ ){
		switch( i ){
			case 0:
			case 1:
			case 2:
			case 3:
				inners[i].style.opacity = `1`;
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
				outers[i].style.opacity = `.15`;
			break;
		}
	}
	for( let i = 0 ; i < inners.length ; i ++ ){
		switch( i ){
			case 0:
			case 1:
			case 2:
			case 3:
				inners[i].style.opacity = `.9`;
			break;
		}
	}
}