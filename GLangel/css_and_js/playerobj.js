////////////////////////プレーヤーオブジェクト/////////////////////////////
var player=new Object();
	//プレーヤー画像
	player.image=new Object();
		//////shotエフェクト//////
		//表示エフェクト数
		player.shot_N=100;
		//ショット配列オブジェクト
		player.shot=new Array(player.shot_N);
		for(var j=0;j<player.shot_N;j++){
			player.shot[j]=new Object();
				//エフェクトの時間発展オブジェクト
				player.shot[j].move=new Object();
		}
