////////////////////////////////////////////////////////////////////
// 移動関数
////////////////////////////////////////////////////////////////////
///////////////////指定座標移動////////////////////////////////
//obj：機体のオブジェクト
//targetx,targety：目標地点の座標x.y
//サブ関数
function _pointMV(obj,targetx,targety){
	var vx =(Number((targetx-obj.x) > 0)-Number((targetx-obj.x) <0));
	var vy =(Number((targety-obj.y) > 0)-Number((targety-obj.y) <0));
	obj.x+=vx;
	obj.y+=vy;
}
//main関数
//speed：移動速度
//game：ゲームイベントオブジェクト
function pointMV(obj,targetx,targety,speed){
	//繰り返しによってスピードをつくる
	for(var i=0;i<speed;i++){
		_pointMV(obj,targetx,targety);
		//出現フラグ
		if(In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height))	obj.show_flag=true;
		//範囲外にいけば撃破処理
		if(!In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height)&&obj.show_flag)	killenemy(obj);
	}
}
///////////////////直線移動(※8方向のみ)////////////////////////////////
//obj：機体のオブジェクト
//initX,initY：初期座標x.y
//finX,finY：最終座標x.y
//サブ関数
function _lineMV(obj,initX,initY,finX,finY){
	var vx =(Number((finX-initX) > 0)-Number((finX-initX) <0));
	var vy =(Number((finY-initY) > 0)-Number((finY-initY) <0));
	obj.x+=vx;
	obj.y+=vy;
}
//main関数
//speed：移動速度
//game：ゲームイベントオブジェクト
function lineMV(obj,initX,initY,finX,finY,speed){
	if(obj.x==-100&&obj.y==-100){
		obj.x=initX;
		obj.y=initY;
	}
	//繰り返しによってスピードをつくる
	for(var i=0;i<speed;i++){
		_lineMV(obj,initX,initY,finX,finY);
		//出現フラグ
		if(In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height))	obj.show_flag=true;
		//範囲外にいけば撃破処理
		if(!In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height)&&obj.show_flag)	killenemy(obj);
	}
}

///////////////////X放物型移動(右→左)////////////////////////////////
//obj：機体のオブジェクト
//initX：初期座標x
//finY：最終座標y
//サブ関数
function _parabolaXrightMV(obj,initX,finY){
	//前駆移動
	if(obj.y<0)		pointMV(obj,initX,0,1);
	//移動処理
	else{
		obj.x--;
		obj.y=Math.sqrt(1-(obj.x/initX))*finY;
	}
}
//main関数
//speed：移動速度
function parabolaXrightMV(obj,initX,finY,speed){
	//初期化
	if((obj.x==-100)&&(obj.y==-100)){
		obj.x=initX;
		obj.y=-obj.height;
	}
	for(var i=0;i<speed;i++){
		_parabolaXrightMV(obj,initX,finY);
		//出現フラグ
		if(In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height))	obj.show_flag=true;
		//範囲外にいけば撃破処理
		if(!In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height)&&obj.show_flag)	killenemy(obj);
	}
}
///////////////////X放物型移動(左→右)////////////////////////////////
//obj：機体のオブジェクト
//initX：初期座標x
//finY：最終座標y
//サブ関数
function _parabolaXleftMV(obj,initX,finY){
	//前駆移動
	if(obj.y<0)		pointMV(obj,initX,0,1);
	//移動処理
	else{
		obj.x++;
		obj.y=Math.sqrt((obj.x-initX)/(game.width-initX))*finY;
	}
}
//main関数
//speed：移動速度
function parabolaXleftMV(obj,initX,finY,speed){
	//初期化
	if((obj.x==-100)&&(obj.y==-100)){
		obj.x=initX;
		obj.y=-obj.height;
	}
	for(var i=0;i<speed;i++){
		_parabolaXleftMV(obj,initX,finY);
		//出現フラグ
		if(In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height))	obj.show_flag=true;
		//範囲外にいけば撃破処理
		if(!In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height)&&obj.show_flag)	killenemy(obj);
	}
}

///////////////////円移動////////////////////////////////
//bodyobj：bodyオブジェクト
//moveR：移動半径
//initx,inity:初期位置
//centerX,centerY:円中心座標
//speedW:円移動速度
//CW:時計回りフラグ ※false条件で反時計回り
function circleMV(obj,moveR,initx,inity,centerX,centerY,speedW,CW){
	//初期化
	if(obj.initdeg==-1){
		obj.initdeg=Math.atan2(inity-centerY,initx-centerX)/Math.PI*180;
	}
	//角度変位
	if(CW)	obj.SHdegdelta+=speedW;
	else		obj.SHdegdelta-=speedW;
	//円移動
	obj.x=moveR*Math.cos((obj.initdeg+obj.SHdegdelta) * (Math.PI / 180))+centerX;
	obj.y=moveR*Math.sin( (obj.initdeg+obj.SHdegdelta) * (Math.PI / 180))+centerY;
	//出現フラグ
	if(In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height))	obj.show_flag=true;
	//範囲外にいけば撃破処理
	if(!In_range(obj.x,obj.y,game.width+obj.image.width,-obj.image.width,game.height+obj.image.height,-obj.image.height)&&obj.show_flag)	killenemy(obj);

}