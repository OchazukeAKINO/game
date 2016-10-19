////////////////////////////////////////////////////////////////////
// 入力系統関数
////////////////////////////////////////////////////////////////////
///////////////////キー入力フラグ関数////////////////////////////////
var right_flag=false;
var left_flag=false;
var up_flag=false;
var down_flag=false;
//var shot_start_flag=false;
function funcKey(evt){
	if(game.control_flag){
		evt = (evt) ? evt : ((event) ? event : null);
		//左・右・下・上
		if( evt.keyCode == 37 )  left_flag=true;
		if( evt.keyCode == 39 )  right_flag=true;
		if( evt.keyCode == 40 )  down_flag=true;
		if( evt.keyCode == 38 )  up_flag=true;
		//ショット
		if( (evt.keyCode == 90) && (game.playerSHtimer<1)) {
			//ショット開始
			player.shot_start=true;
		}
	}
}

///////////////////キーフラグクリア関数////////////////////////////////
function funcKeyclear(evt){
	if(game.control_flag){
		evt = (evt) ? evt : ((event) ? event : null);
		//左・右・下・上
		if( evt.keyCode == 37 )  left_flag=false;
		if( evt.keyCode == 39 )  right_flag=false;
		if( evt.keyCode == 40 )  down_flag=false;
		if( evt.keyCode == 38 )  up_flag=false;
		//ショット
		if(evt.keyCode == 90)  player.shot_start=false;
	}
}

///////////////////ショット停止関数////////////////////////////////
function shot_terminal(obj){
	obj.x=-100;
	obj.y=-100;
	obj.move.flag=false;
	obj.move.x=0;
	obj.move.y=0;
	obj.move.vx=0;
	obj.move.vy=0;
}
////////////////////////////////////////////////////////////////////
// 判定処理系関数
////////////////////////////////////////////////////////////////////
///////////////////範囲内判定関数////////////////////////////////
//x,y:座標
//xmax,xmin：規定範囲の横幅xmax,xmin
//ymax,ymin：規定範囲の縦幅ymax,ymin
function In_range(x,y,xmax,xmin,ymax,ymin){
	var judge=true;
	judge*=(x<xmax)	//横幅maxより小さい
	judge*=(x>xmin)	//横幅minより大きい
	judge*=(y<ymax)	//縦幅maxより小さい
	judge*=(y>ymin)	//縦幅minより大きい
	return judge;
}

////////////////////////////////////////////////////////////////////
// 描写系統関数
////////////////////////////////////////////////////////////////////
///////////////////背景描写関数////////////////////////////////
var imageData
function backgound(width,height) {
	backcontext.restore();
  	// ImageDataの画像をシフト
  	var imgd = imageData.data;
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			var current_index = (j * width + i) * 4; 
			var next_index = ((j+1) * width + i) * 4;
			if((j+1)==height)	next_index=(width + i) * 4;
			if(!j){
  				var R=imgd[current_index] 
    				var G=imgd[current_index+1] 
    				var B=imgd[current_index+2]
    				var A=imgd[current_index+3];
    				var nR=imgd[next_index] 
    				var nG=imgd[next_index+1] 
    				var nB=imgd[next_index+2] 
    				var nA=imgd[next_index+3] 
    				imgd[next_index]=R;
    				imgd[next_index+1]=G;
    				imgd[next_index+2]=B;
    				imgd[next_index+3]=A;
    			}
    			else{
    				R=nR;
    				G=nG; 
    				B=nB;
    				A=nA;
    				nR=imgd[next_index] 
    				nG=imgd[next_index+1] 
    				nB=imgd[next_index+2] 
    				nA=imgd[next_index+3] 
    				imgd[next_index]=R;
    				imgd[next_index+1]=G;
    				imgd[next_index+2]=B;
    				imgd[next_index+3]=A;
    			}
    		}
    	}
  	// 変更した内容をcanvasに戻す
  	backcontext.putImageData(imageData, 0, 0);
  	imageData = backcontext.getImageData(0,0,width,height);
};
///////////////////機体グラフィック描写関数////////////////////////////////
function drawbody(bodyobj) {
	context.globalAlpha=bodyobj.alpha;	//透明度
	context.drawImage(bodyobj.image,bodyobj.x,bodyobj.y);   //canvas要素への出力
}
///////////////////ショットグラフィック描写関数////////////////////////////////
function drawshot(shotobj) {
	//形状
	context.beginPath();                  //パスの開始
	context.arc(shotobj.x+shotobj.move.x,shotobj.y+shotobj.move.y, shotobj.R, 0, 2 * Math.PI);//円のパスを設定
	context.closePath();                  //パスを終了する
	//塗り・線幅
	context.strokeStyle = shotobj.linecolor; 			//線色を指定
	context.lineWidth = shotobj.R / 10;   //線幅を指定
	context.stroke();                				//線を引く
	context.fillStyle = shotobj.color;      				//塗りつぶし色を指定
	context.globalAlpha=shotobj.alpha;					//透明度
	context.fill();                  					//塗りつぶす
}
///////////////////キャラ静止モーション変更関数////////////////////////////////
//imagearray モーション画像を格納した配列
//time ループのフレームカウント数
function charamotion(imagearray,time) {
	var i=Math.floor(time/10)%imagearray.length;
	return imagearray[i];
}
///////////////////ゲームステータス描写関数////////////////////////////////
function statusdisplay() {
	//kill score
	context.globalAlpha=1;
	context.fillStyle = "white";      //塗りつぶし色を指定
	context.font="20px 'Monotype Corsiva'";
	context.textAlign="left";
	context.fillText("Kill Score："+game.score.killscore,game.width+5,game.height/4);
	//HP
	context.globalAlpha=1;
	context.fillStyle = "white";      //塗りつぶし色を指定
	context.font="20px 'Monotype Corsiva'";
	context.textAlign="left";
	context.fillText("Life",game.width+5,game.height/4+30);
	//HPゲージ
	HPcontext.beginPath();		//パス設定開始
	HPcontext.moveTo(game.width+45,game.height/4+25);//始点
	HPcontext.lineTo(game.width+45+120*player.HP/3,game.height/4+25);//終点
	HPcontext.closePath();		//パス設定終了
	HPcontext.storokeStyle="red";		//線色
	HPcontext.lineWidth=10;			//線幅の指定
	HPcontext.stroke();				//線を引く
	HPcontext.fillStyle ="red";  			//塗りつぶし色
	HPcontext.globalAlpha=0.9			//透明度
	HPcontext.fill();                  			//塗りつぶす
}

////////////////////////////////////////////////////////////////////
// 音声再生系統関数
////////////////////////////////////////////////////////////////////

///////////////////音声再生関数////////////////////////////////
var sound_Label;	//関数内オブジェクトのラベル
var sound_SRC	//参照src
var sound_listcount=0;	//ラベル付けのためのカウント番号
sound_List=new Object();	//関数内オブジェクト
//datalabel：データ名称
//InterruptFlag：割り込み再生フラグ
function sound(datalabel,InterruptFlag){
	if(InterruptFlag){
		//引数のsrcをストック
		sound_SRC=AUDIO_LIST[datalabel].src;
		//関数内オブジェクト生成
		 sound_Label="label"+ sound_listcount;
		 sound_listcount++;
		 sound_List[ sound_Label]=new Audio(sound_SRC);
		// サウンド再生
		 sound_List[ sound_Label].play();
		//再生が終了したオブジェクトは解放
		 sound_List[ sound_Label].onended=function(){
			for(var key in  sound_List[ sound_Label])	delete sound_List[key];
			delete  sound_List[ sound_Label];
		}
	}
	else if(!InterruptFlag){
		// サウンド再生
		AUDIO_LIST[datalabel].play();
	}
}
////////////////////////////////////////////////////////////////////
// スコア計算系統関数
////////////////////////////////////////////////////////////////////
function killscoreadd(score){
	game.score.deltakillscore+=score;
}
function scoreanimation(gameobj){
	if(gameobj.deltakillscore<1){
		gameobj.deltakillscore=0;
	}
	else if(gameobj.killscore+gameobj.deltakillscore-50>gameobj.killscore){
		gameobj.killscore+=50;
		gameobj.deltakillscore-=50;
	}
	else if(gameobj.killscore+gameobj.deltakillscore-10>gameobj.killscore){
		gameobj.killscore+=10;
		gameobj.deltakillscore-=10;
	}
	else{
		gameobj.killscore++;
		gameobj.deltakillscore--;
	}
}
////////////////////////////////////////////////////////////////////
// ゲームイベント系関数
////////////////////////////////////////////////////////////////////
///////////////////開始待ち関数////////////////////////////////
function waitstart(){
	var width = game.width;   //横幅
	var height = game.height; //縦幅
	context.fillStyle = "white";      //塗りつぶし色を指定
	context.font="34px 'Times New Roman'";
	context.textAlign="center";
	context.fillText("GAME START",(width+game.scorewidth)/2,height/2);
	context.fillStyle = "orange";      //塗りつぶし色を指定
	context.font="20px 'Times New Roman'";
	context.textAlign="center";
	context.fillText("Click Start!",(width+game.scorewidth)/2,height/2+100);
	//クリックでloop()に入るイベントを追加
	document.documentElement.addEventListener("click", loop,false);
	//即座にloop()に入るイベントを無効にするイベントを追加
	document.documentElement.addEventListener('click', function() {
		document.documentElement.removeEventListener('click', loop, false);
	}, false);
}
///////////////////終了ループ関数////////////////////////////////
function exitloop(){
	var width = game.width;   //横幅
	var height = game.height; //縦幅
	context.clearRect(0, 0, width+game.scorewidth, height); //canvasの全領域をクリアー
	backgound(width,height);	//縦スクロールした背景画像を描写
	if(game.gameover_flag){
		//ゲームオーバー処理
		for(i=0;i<enemy_N;i++){
			if(!enemy[i].kill_flag){	
				drawbody(enemy[i]);
			}
		}
		context.fillStyle = "red";      //塗りつぶし色を指定
		context.font="34px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("GAME OVER",width/2,height/2);
	}
	if(game.gameclear_flag){
		//ゲームクリア処理
		drawbody(player);
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="34px 'Times New Roman'";
		context.textAlign="center";
		context.fillText("GAME CLEAR",width/2,height/2);
	}
	//score処理
	scoreanimation(game.score);
	scoredisplay(game);
	time++;	//時間経過
	requestAnimationFrame(exitloop);     //loop関数の呼び出し
}
////////////////////////////////////////////////////////////////////
// その他関数
////////////////////////////////////////////////////////////////////
///////////////////撃破処理関数////////////////////////////////
//obj：撃破された敵オブジェクト
function killenemy(obj){
	obj.kill_flag=true     //撃破フラグ
	obj.shot_start=false		//ショット出現フラグ
	//敵機を画面から除去
	obj.x=-100;
	obj.y=-100;
}
