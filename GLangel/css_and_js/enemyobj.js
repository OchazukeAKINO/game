////////////////////////敵機オブジェクト/////////////////////////////
//出現敵機数
var enemy_N=100;	//表示敵機数
//配列オブジェクト化
enemy=new Array(enemy_N);
for(var i=0;i<enemy_N;i++){
	//敵配列オブジェクト
	enemy[i]=new Object();
	enemy[i].image=new Object();
	//////shotエフェクト//////
	//表示エフェクト数
	enemy[i].shot_N=100;
	//ショット配列オブジェクト
	enemy[i].shot=new Array(enemy[i].shot_N);
	for(var j=0;j<enemy[i].shot_N;j++){
		enemy[i].shot[j]=new Object();
		//エフェクトの時間発展オブジェクト
		enemy[i].shot[j].move=new Object();
	}
}
