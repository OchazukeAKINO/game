////////////////////////画像の登録/////////////////////////////
//GLangelインスタンスの生成
var GLangel=new Array();
GLangel[0] = new Image();                     
GLangel[0].src = "./image/GLangelA.png";
GLangel[1] = new Image();
GLangel[1].src = "./image/GLangelB.png";  
GLangel[2] = new Image();   
GLangel[2].src = "./image/GLangelC.png";
//devilインスタンス
var devil=new Array();
devil[0] = new Image();                     
devil[0].src = "./image/devilA.png";
devil[1] = new Image();
devil[1].src = "./image/devilB.png";  
devil[2] = new Image();   
devil[2].src = "./image/devilC.png";
//blueskyインスタンス
var bluesky = new Image();         
bluesky.src = "./image/bluesky.png";    //ファイルのURL

////////////////////////音声の登録/////////////////////////////

AUDIO_LIST = {
	//データ名称:new Audio(相対Pass)
    "bgm": new Audio("./sound/bgm/bgm_musumusu_tw076.mp3"),
    "shot": new Audio("./sound/voice/shotvoice2low.mp3"),
    "laser": new Audio("./sound/voice/laservoice1.mp3"),
    "prelaser": new Audio("./sound/voice/prelaser1.mp3"),
};


////////////////////////ゲームイベント/////////////////////////////
//ゲーム画面幅
game.width=500;
game.height=500;
//スコア画面幅
game.scorewidth=200;
//操作可能フラグ
game.control_flag=false;
//ゲームオーバーフラグ
game.gameover_flag=false;
//ゲームクリアフラグ
game.gameclear_flag=false;
//タイマー
game.playerSHtimer=0
for(var i=0;i<enemy_N;i++)	game.enemySHtimer[i]=0;
//初期表示背景画像
game.backimage=bluesky;
	//ゲームスコア
	//撃破ポイント
	game.score.killscore=0;
	//撃破加算予定ポイント
	game.score.deltakillscore=0;
		
////////////////////////自機パラメーター/////////////////////////////
	
//プレーヤー画像
player.image=GLangel[0];
//プレーヤーの透明度
player.alpha=1;
//初期位置
player.x=-100;
player.y=-100;
//残ヒットポイント
player.HP=3;
//イベントタイマ
player.damageTM=0;
//ショット時間間隔
player.shot_blank=5;
//ショット出現フラグ
player.shot_start=false;
for(var j=0;j<player.shot_N;j++){
	//初期ショット位置
	player.shot[j].x=-100;
	player.shot[j].y=-100;
	//ショットの半径[px]
	player.shot[j].R=3;
	//ショットの色
	player.shot[j].color="blue";
	//ショットの線色
	player.shot[j].linecolor="#FF0000";
	//ショットの透明度
	player.shot[j].alpha=1;
		//ショット持続フラグ
		player.shot[j].move.flag=false;	
		//ショットの位置変位
		player.shot[j].move.x=0;	
		player.shot[j].move.y=0;
		//ショットの運動速度
		//※shotモーション関数の種類によって使用するかどうかは異なる
		player.shot[j].move.vx=0;	
		player.shot[j].move.vy=0;
	}	
	
////////////////////////敵機パラメーター/////////////////////////////
for(var i=0;i<enemy_N;i++){
	//敵のimage
	enemy[i].image=devil[0];
	//敵のの透明度
	enemy[i].alpha=1;
	//初期位置
	enemy[i].x=-100;
	enemy[i].y=-100;
	//残ヒットポイント
	enemy[i].HP=1;
	//追加kill score
	enemy[i].killscore=100;
	//円移動の角度
	enemy[i].MVdegdelta=0;
	//円移動の初期角度
	enemy[i].initdeg=-1;
	//イベントフラグ
	enemy[i].show_flag=false;	//出現フラグ
	enemy[i].kill_flag=false;	//撃破フラグ
	enemy[i].turn_flag=false;	//折り返し移動フラグ
	enemy[i].move_SW=0;		//移動スイッチ
	//ショット時間間隔
	enemy[i].shot_blank=0;
	//エフェクト出現フラグ
	enemy[i].shot_start=false;
	//結界shotの角度
	enemy[i].SHdegdelta=0;
	//結界shotのとき任意変数(※動的に動かす時に使用)
	enemy[i].Bvar=0;
	//レーザーショットの時の照射アングル
	enemy[i].Langle=0;
	//レーザーショットの時のレーザーエフェクトの始点座標
	enemy[i].LiX=0;
	enemy[i].LiY=0;
	//レーザーショットの時のレーザーエフェクトの終点座標
	enemy[i].LfX=0;
	enemy[i].LfY=0;
	for(var j=0;j<enemy[i].shot_N;j++){
		//エフェクト位置
		enemy[i].shot[j].x=-100;
		enemy[i].shot[j].y=-100;
		//エフェクトの半径[px]
		enemy[i].shot[j].R=3;
		//エフェクトの色
		enemy[i].shot[j].color="red";
		//エフェクトの線色
		enemy[i].shot[j].linecolor="#FF0000";
		//エフェクトの透明度
		enemy[i].shot[j].alpha=1;
				//エフェクト持続フラグ
				enemy[i].shot[j].move.flag=false;	
				//エフェクトの位置変位
				enemy[i].shot[j].move.x=0;	
				enemy[i].shot[j].move.y=0;
				//※shotモーション関数の種類によって使用するかどうかは異なる
				enemy[i].shot[j].move.vx=0;	
				enemy[i].shot[j].move.vy=0;
	}
}
