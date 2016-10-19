////////////////////////////////////////////////////////////////////
// shotモーション関数
////////////////////////////////////////////////////////////////////
///////////////////角度指定shot////////////////////////////////
//obj：ショットのオブジェクト
//bodyobj：機体オブシェクト
//deg：発射角度（deg）※単位円上(x=1,y=0)を0として時計回り
//サブ関数
function _angleSH(obj,deg){
	if(obj.move.vx==0&&obj.move.vy==0){
		obj.move.vx =Math.cos(deg * (Math.PI / 180));
		obj.move.vy =Math.sin(deg * (Math.PI / 180));
		if(In_range(obj.x,obj.y,game.width,0,game.height,0))	sound("shot",true);
	}
	obj.move.x+=obj.move.vx;
	obj.move.y+=obj.move.vy;
}
//main関数
//speed：移動速度
function angleSH(obj,deg,speed){
	//繰り返しによってスピードをつくる
	for(var i=0;i<speed;i++)	_angleSH(obj,deg);
}

//音なしバージョン
function _angleSH_S(obj,deg){
	if(obj.move.vx==0&&obj.move.vy==0){
		obj.move.vx =Math.cos(deg * (Math.PI / 180));
		obj.move.vy =Math.sin(deg * (Math.PI / 180));
	}
	obj.move.x+=obj.move.vx;
	obj.move.y+=obj.move.vy;
}
function angleSH_S(obj,deg,speed){
	//繰り返しによってスピードをつくる
	for(var i=0;i<speed;i++)	_angleSH_S(obj,deg);
}

//音なしPI計算バージョン
function _angleSH_SP(obj,deg){
	if(obj.move.vx==0&&obj.move.vy==0){
		obj.move.vx =Math.cos(deg);
		obj.move.vy =Math.sin(deg);
	}
	obj.move.x+=obj.move.vx;
	obj.move.y+=obj.move.vy;
}
function angleSH_SP(obj,deg,speed){
	//繰り返しによってスピードをつくる
	for(var i=0;i<speed;i++)	_angleSH_SP(obj,deg);
}
///////////////////結界shot////////////////////////////////
//obj：bodyオブジェクト
//shotmax：出現ショット数
//shotR：半径
//deg：shot角度単位
//サブ関数
function _barrierSH(bodyobj,shotmax,shotR){
	var deg=360/shotmax;
	for(var i=0;i<shotmax;i++){
		bodyobj.shot[i].move.flag=true;
		bodyobj.shot[i].move.x=shotR*Math.cos((i*deg+bodyobj.SHdegdelta) * (Math.PI / 180));
		bodyobj.shot[i].move.y=shotR*Math.sin( (i*deg+bodyobj.SHdegdelta) * (Math.PI / 180));
	}
}
//main関数
//speedW：回転速度
function barrierSH(bodyobj,shotmax,shotR,speedW){
	for(var i=0;i<shotmax;i++){
		bodyobj.shot[i].x=bodyobj.x+bodyobj.width/2;
		bodyobj.shot[i].y=bodyobj.y+bodyobj.height/2;
	}
	bodyobj.SHdegdelta+=speedW;
	_barrierSH(bodyobj,shotmax,shotR);
}