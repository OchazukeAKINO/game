////////////////////////////////////////////////////////////////////
// ステージ固有処理
////////////////////////////////////////////////////////////////////
//プレーヤー入場演出
function entrystage(){
	if(time==0){
		player.x=game.width/2-player.width/2;
		player.y=game.height-player.height;
	}
	else if(time<50)	player.y--;
	else if(time<60){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("S      ",game.width/2,game.height/2);
	}
	else if(time<70){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("St     ",game.width/2,game.height/2);
	}
	else if(time<80){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Sta   ",game.width/2,game.height/2);
	}
	else if(time<90){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Stag  ",game.width/2,game.height/2);
	}
	else if(time<100){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Stage ",game.width/2,game.height/2);
	}
	else if(time<110){
		context.globalAlpha=0.5;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="30px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Stage1",game.width/2,game.height/2);
	}
	else if(time<130){
		context.globalAlpha=1;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="40px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Stage1",game.width/2,game.height/2);
	}
	else if(time<140){
		context.globalAlpha=0.3;
		context.fillStyle = "yellow";      //塗りつぶし色を指定
		context.font="40px 'Monotype Corsiva'";
		context.textAlign="center";
		context.fillText("Stage1",game.width/2,game.height/2);
	}
	else	game.control_flag=true;		//操作可能フラグ
}

//ステージイベント
function stage(){
	
	//enemy[0]動作イベント
	if(time>600){
		if(!enemy[0].kill_flag)	lineMV(enemy[0],0-enemy[0].width,game.height/2,game.width+50,-50,4);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy0 = function(shottime,shotnum){
			if(time>shottime){
				if(!enemy[0].shot[shotnum].move.flag&&!enemy[0].kill_flag){
					enemy[0].shot[shotnum].x=enemy[0].x+enemy[0].width/2;
					enemy[0].shot[shotnum].y=enemy[0].y+enemy[0].height/2;
				}
				enemy[0].shot[shotnum].move.flag=true;
				angleSH(enemy[0].shot[shotnum],45,3);
			}
		}
		enemy0(606,0);
		enemy0(612,1);
		enemy0(618,2);
		enemy0(624,3);
		enemy0(630,4);
	}
	
	//enemy[1]動作イベント
	if(time>720){
		if(!enemy[1].kill_flag)	lineMV(enemy[1],game.width,game.width/2,-50,-50,4);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy1 = function(shottime,shotnum){
			if(time>shottime){
				if(!enemy[1].shot[shotnum].move.flag&&!enemy[1].kill_flag){
					enemy[1].shot[shotnum].x=enemy[1].x+enemy[1].width/2;
					enemy[1].shot[shotnum].y=enemy[1].y+enemy[1].height/2;
				}
				enemy[1].shot[shotnum].move.flag=true;
				angleSH(enemy[1].shot[shotnum],135,3);
			}
		}
		enemy1(726,0);
		enemy1(732,1);
		enemy1(738,2);
		enemy1(744,3);
		enemy1(750,4);
	}
	
	//enemy[2]動作イベント
	if(time>900){
		if(!enemy[2].kill_flag)	lineMV(enemy[2],0-enemy[2].width,enemy[2].height,game.width+50,enemy[2].height,4);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy2 = function(shottime,shotnum){
			if(time>shottime){
				if(!enemy[2].shot[shotnum].move.flag&&!enemy[2].kill_flag){
					enemy[2].shot[shotnum].x=enemy[2].x+enemy[2].width/2;
					enemy[2].shot[shotnum].y=enemy[2].y+enemy[2].height/2;
				}
				enemy[2].shot[shotnum].move.flag=true;
				angleSH(enemy[2].shot[shotnum],90-shotnum*10,5);
			}
		}
		enemy2(900+10,0);
		enemy2(900+30,1);
		enemy2(900+50,2);
		enemy2(900+70,3);
		enemy2(900+90,4);
	}
	
	//enemy[3]動作イベント
	if(time>1020){
		if(!enemy[3].kill_flag)	lineMV(enemy[3],game.width,enemy[3].height,-enemy[3].width,enemy[3].height,4);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy3 = function(shottime,shotnum){
			if(time>shottime){
				if(!enemy[3].shot[shotnum].move.flag&&!enemy[3].kill_flag){
					enemy[3].shot[shotnum].x=enemy[3].x+enemy[3].width/2;
					enemy[3].shot[shotnum].y=enemy[3].y+enemy[3].height/2;
				}
				enemy[3].shot[shotnum].move.flag=true;
				angleSH(enemy[3].shot[shotnum],90+shotnum*10,5);
			}
		}
		enemy3(1020+10,0);
		enemy3(1020+30,1);
		enemy3(1020+50,2);
		enemy3(1020+70,3);
		enemy3(1020+90,4);
	}
	
	//enemy[4]動作イベント
	if(time>1160){
		if(time==(1160+1))	{
			enemy[4].x=game.width/2;
		}
		if(!enemy[4].kill_flag)	pointMV(enemy[4],0,150,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy4 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[4],shotmax,shotR,speedW);		
			}
		}
		if((enemy[4].x==0)&&(enemy[4].y==150)&&(enemy[4].Bvar<2))		enemy4(0,++enemy[4].Bvar,50+enemy[4].Bvar,3);
		else if((enemy[4].x==0)&&(enemy[4].y==150))		enemy4(0,2,50+(++enemy[4].Bvar),3);
		if(enemy[4].kill_flag)	for(var i=0;i<2;i++)		shot_terminal(enemy[4].shot[i]);
	}
	
	//enemy[5]動作イベント
	if(time>1160){
		if(time==(1160+1))	{
			enemy[5].x=game.width/2;
		}
		if(!enemy[5].kill_flag)	pointMV(enemy[5],game.width-enemy[5].width,150,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy5 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[5],shotmax,shotR,speedW);		
			}
		}
		if((enemy[5].x==(game.width-enemy[5].width))&&(enemy[5].y==150)&&(enemy[5].Bvar<2))		enemy5(0,++enemy[5].Bvar,50+enemy[5].Bvar,3);
		else if((enemy[5].x==(game.width-enemy[5].width))&&(enemy[5].y==150))		enemy5(0,2,50+(++enemy[5].Bvar),3);
		if(enemy[5].kill_flag)	for(var i=0;i<2;i++)		shot_terminal(enemy[5].shot[i]);
	}
	
	//enemy[6]動作イベント
	if(time>1320){
		if(time==(1320+1))	{
			enemy[6].x=game.width/2;
		}
		if(!enemy[6].kill_flag)	pointMV(enemy[6],100,100,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy6 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[6],shotmax,shotR,speedW);		
			}
		}
		if((enemy[6].x==100)&&(enemy[6].y==100)&&(enemy[6].Bvar<4))		enemy6(0,++enemy[6].Bvar,50+enemy[6].Bvar,3);
		else if((enemy[6].x==100)&&(enemy[6].y==100))		enemy6(0,4,50+(++enemy[6].Bvar),3);
		if(enemy[6].kill_flag)	for(var i=0;i<4;i++)		shot_terminal(enemy[6].shot[i]);
	}
	
	//enemy[7]動作イベント
	if(time>1320){
		if(time==(1320+1))	{
			enemy[7].x=game.width/2;
		}
		if(!enemy[7].kill_flag)	pointMV(enemy[7],game.width-enemy[7].width-50,100,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy7 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[7],shotmax,shotR,speedW);		
			}
		}
		if((enemy[7].x==(game.width-enemy[7].width-50))&&(enemy[7].y==100)&&(enemy[7].Bvar<4))		enemy7(0,++enemy[7].Bvar,50+enemy[7].Bvar,3);
		else if((enemy[7].x==(game.width-enemy[7].width-50))&&(enemy[7].y==100))		enemy7(0,4,50+(++enemy[7].Bvar),3);
		if(enemy[7].kill_flag)	for(var i=0;i<4;i++)		shot_terminal(enemy[7].shot[i]);
	}
	
	//enemy[8]動作イベント
	if(time>1500){
		if(time==(1500+1))	{
			enemy[8].x=game.width/2;
		}
		if(!enemy[8].kill_flag)	pointMV(enemy[8],150,50,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy8 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[8],shotmax,shotR,speedW);		
			}
		}
		if((enemy[8].x==150)&&(enemy[8].y==50)&&(enemy[8].Bvar<4))		enemy8(0,++enemy[8].Bvar,50+enemy[8].Bvar,1);
		else if((enemy[8].x==150)&&(enemy[8].y==50))		enemy8(0,4,50+(++enemy[8].Bvar),1);
		if(enemy[8].kill_flag)	for(var i=0;i<4;i++)		shot_terminal(enemy[8].shot[i]);
	}
	
	//enemy[9]動作イベント
	if(time>1500){
		if(time==(1500+1))	{
			enemy[9].x=game.width/2;
		}
		if(!enemy[9].kill_flag)	pointMV(enemy[9],game.width-enemy[9].width-100,50,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy9 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[9],shotmax,shotR,speedW);		
			}
		}
		if((enemy[9].x==(game.width-enemy[9].width-100))&&(enemy[9].y==50)&&(enemy[9].Bvar<4))		enemy9(0,++enemy[9].Bvar,50+enemy[9].Bvar,5);
		else if((enemy[9].x==(game.width-enemy[9].width-100))&&(enemy[9].y==50))		enemy9(0,4,50+(++enemy[9].Bvar),5);
		if(enemy[9].kill_flag)	for(var i=0;i<4;i++)		shot_terminal(enemy[9].shot[i]);
	}

	//enemy[10]動作イベント
	if(time>1620){
		if(time==(1620+1))	{
			enemy[10].x=game.width/2;
		}
		if(!enemy[10].kill_flag)	pointMV(enemy[10],game.width/2-enemy[10].width,game.height/2,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy10 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[10],shotmax,shotR,speedW);		
			}
		}
		if((enemy[10].x==game.width/2-enemy[10].width)&&(enemy[10].y==game.height/2)&&(enemy[10].Bvar<10))		enemy10(0,++enemy[10].Bvar,50+enemy[10].Bvar,3);
		else if((enemy[10].x==game.width/2-enemy[10].width)&&(enemy[10].y==game.height/2))		enemy10(0,10,50+(++enemy[10].Bvar),5);
		if(enemy[10].kill_flag)	for(var i=0;i<10;i++)		shot_terminal(enemy[10].shot[i]);
	}
	
	//enemy[11]動作イベント
	if(time>1620){//1620
		if(time==(1620+1))	{
			enemy[11].x=game.width/2;
		}
		if(!enemy[11].kill_flag)	pointMV(enemy[11],game.width/2+enemy[11].width,game.height/2,5);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy11 = function(shottime,shotmax,shotR,speedW){
			if(time>shottime){
				barrierSH	(enemy[11],shotmax,shotR,speedW);		
			}
		}
		if((enemy[11].x==(game.width/2+enemy[11].width))&&(enemy[11].y==game.height/2)&&(enemy[11].Bvar<10))		enemy11(0,++enemy[11].Bvar,50+enemy[11].Bvar,3);
		else if((enemy[11].x==(game.width/2+enemy[11].width))&&(enemy[11].y==game.height/2))		enemy11(0,10,50+(++enemy[11].Bvar),5);
		if(enemy[11].kill_flag)	for(var i=0;i<10;i++)		shot_terminal(enemy[11].shot[i]);
	}
	
	//enemy[12]動作イベント
	if(time>2340){
		if(!enemy[12].kill_flag)	parabolaXrightMV(enemy[12],game.width,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy12 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy12(enemy[12],0,2340+20);
		enemy12(enemy[12],1,2340+26);
		enemy12(enemy[12],2,2340+32);
		enemy12(enemy[12],3,2340+38);
		enemy12(enemy[12],4,2340+44);
	}

	//enemy[13]動作イベント
	if(time>2400){
		if(!enemy[13].kill_flag)	parabolaXrightMV(enemy[13],game.width,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy13 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy13(enemy[13],0,2400+20);
		enemy13(enemy[13],1,2400+26);
		enemy13(enemy[13],2,2400+32);
		enemy13(enemy[13],3,2400+38);
		enemy13(enemy[13],4,2400+44);
	}
	
	//enemy[14]動作イベント
	if(time>2460){
		if(!enemy[14].kill_flag)	parabolaXrightMV(enemy[14],game.width,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy14 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy14(enemy[14],0,2460+20);
		enemy14(enemy[14],1,2460+26);
		enemy14(enemy[14],2,2460+32);
		enemy14(enemy[14],3,2460+38);
		enemy14(enemy[14],4,2460+44);
	}

	//enemy[15]動作イベント
	if(time>2520){
		if(!enemy[15].kill_flag)	parabolaXrightMV(enemy[15],game.width,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy15 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy15(enemy[15],0,2520+20);
		enemy15(enemy[15],1,2520+26);
		enemy15(enemy[15],2,2520+32);
		enemy15(enemy[15],3,2520+38);
		enemy15(enemy[15],4,2520+44);
	}
	
	//enemy[16]動作イベント
	if(time>2520){
		if(!enemy[16].kill_flag)	parabolaXleftMV(enemy[16],0,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy16 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy16(enemy[16],0,2520+20);
		enemy16(enemy[16],1,2520+26);
		enemy16(enemy[16],2,2520+32);
		enemy16(enemy[16],3,2520+38);
		enemy16(enemy[16],4,2520+44);
	}

	//enemy[17]動作イベント
	if(time>2640){
		if(!enemy[17].kill_flag)	parabolaXleftMV(enemy[17],0,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy17 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy17(enemy[17],0,2640+20);
		enemy17(enemy[17],1,2640+26);
		enemy17(enemy[17],2,2640+32);
		enemy17(enemy[17],3,2640+38);
		enemy17(enemy[17],4,2640+44);
	}
	
	//enemy[18]動作イベント
	if(time>2700){
		if(!enemy[18].kill_flag)	parabolaXleftMV(enemy[18],0,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy18 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy18(enemy[18],0,2700+20);
		enemy18(enemy[18],1,2700+26);
		enemy18(enemy[18],2,2700+32);
		enemy18(enemy[18],3,2700+38);
		enemy18(enemy[18],4,2700+44);
	}

	//enemy[19]動作イベント
	if(time>2760){
		if(!enemy[19].kill_flag)	parabolaXleftMV(enemy[19],0,game.height/4,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy19 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy19(enemy[19],0,2760+20);
		enemy19(enemy[19],1,2760+26);
		enemy19(enemy[19],2,2760+32);
		enemy19(enemy[19],3,2760+38);
		enemy19(enemy[19],4,2760+44);
	}
	
	//enemy[20]動作イベント
	if(time>2820){
		if(!enemy[20].kill_flag)	lineMV(enemy[20],game.width/2,-enemy[20].height,game.width/2,game.height,6);
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy20 = function(bodyobj,shotnum,shottime){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH(bodyobj.shot[shotnum],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
			}
		}
		enemy20(enemy[20],0,2820+20);
		enemy20(enemy[20],1,2820+26);
		enemy20(enemy[20],2,2820+32);
		enemy20(enemy[20],3,2820+38);
		enemy20(enemy[20],4,2820+44);
	}
	if(time>2880){
		//位置の初期化
		if(time==(2880+1))	{
			for(var i=0;i<10;i++)	{
				enemy[21+i].x=game.width/2;
				enemy[21+i].y=-enemy[21+i].height;
			}
		}
		//[shottime]フレーム目で[shotnum]番目のshot発射
		enemy2140 = function(bodyobj,shotnum,shottime,deg){
			if(time>shottime){
				if(!bodyobj.shot[shotnum].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[shotnum].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[shotnum].y=bodyobj.y+bodyobj.height/2;
				}
				bodyobj.shot[shotnum].move.flag=true;
				angleSH	(bodyobj.shot[shotnum],deg,3);		
			}
		}
		//enemy[21]動作イベント
		if(!enemy[21].kill_flag)	pointMV(enemy[21],10,enemy[21].height+10,6);
		enemy2140(enemy[21],0,2880+8,70);
		enemy2140(enemy[21],1,2880+16,60);
		enemy2140(enemy[21],2,2880+24,50);
		enemy2140(enemy[21],3,2880+32,40);
		enemy2140(enemy[21],4,2880+40,30);
		//enemy[22]動作イベント
		if(!enemy[22].kill_flag)	pointMV(enemy[22],game.width/2+enemy[22].width,2*enemy[22].height+10,6);
		enemy2140(enemy[22],0,2880+48,70);
		enemy2140(enemy[22],1,2880+56,80);
		enemy2140(enemy[22],2,2880+64,90);
		enemy2140(enemy[22],3,2880+72,100);
		enemy2140(enemy[22],4,2880+80,110);
		//enemy[23]動作イベント
		if(!enemy[23].kill_flag)	pointMV(enemy[23],game.width-2*enemy[22].width-10,enemy[22].height+10,6);
		enemy2140(enemy[23],0,2880+88,170);
		enemy2140(enemy[23],1,2880+96,160);
		enemy2140(enemy[23],2,2880+104,150);
		enemy2140(enemy[23],3,2880+112,140);
		enemy2140(enemy[23],4,2880+120,130);
		//enemy[24]動作イベント
		if(!enemy[24].kill_flag)	pointMV(enemy[24],game.width-enemy[24].width-10,enemy[24].height+10,6);
		enemy2140(enemy[24],0,2880+128,170);
		enemy2140(enemy[24],1,2880+136,160);
		enemy2140(enemy[24],2,2880+144,150);
		enemy2140(enemy[24],3,2880+152,140);
		enemy2140(enemy[24],4,2880+160,130);
		//enemy[25]動作イベント
		if(!enemy[25].kill_flag)	pointMV(enemy[25],2*enemy[25].width+10,enemy[25].height+10,6);
		enemy2140(enemy[25],0,2880+168,120);
		enemy2140(enemy[25],1,2880+176,110);
		enemy2140(enemy[25],2,2880+184,100);
		enemy2140(enemy[25],3,2880+192,90);
		enemy2140(enemy[25],4,2880+200,80);
		//enemy[26]動作イベント
		if(!enemy[26].kill_flag)	pointMV(enemy[26],enemy[26].width+10,enemy[26].height+10,6);
		enemy2140(enemy[26],0,2880+208,90);
		enemy2140(enemy[26],1,2880+216,80);
		enemy2140(enemy[26],2,2880+224,70);
		enemy2140(enemy[26],3,2880+232,60);
		enemy2140(enemy[26],4,2880+240,50);
		//enemy[27]動作イベント
		if(!enemy[27].kill_flag)	pointMV(enemy[27],game.width/2-2*enemy[27].width,2*enemy[27].height+10,6);
		enemy2140(enemy[27],0,2880+248,0);
		enemy2140(enemy[27],1,2880+256,10);
		enemy2140(enemy[27],2,2880+264,20);
		enemy2140(enemy[27],3,2880+272,30);
		enemy2140(enemy[27],4,2880+280,40);
		//enemy[28]動作イベント
		if(!enemy[28].kill_flag)	pointMV(enemy[28],game.width/2+2*enemy[28].width,2*enemy[28].height+10,6);
		enemy2140(enemy[28],0,2880+288,40);
		enemy2140(enemy[28],1,2880+296,50);
		enemy2140(enemy[28],2,2880+304,60);
		enemy2140(enemy[28],3,2880+312,70);
		enemy2140(enemy[28],4,2880+320,80);
		//enemy[29]動作イベント
		if(!enemy[29].kill_flag)	pointMV(enemy[29],game.width/2-enemy[29].width,2*enemy[29].height+10,6);
		enemy2140(enemy[29],0,2880+328,0);
		enemy2140(enemy[29],1,2880+336,340);
		enemy2140(enemy[29],2,2880+342,320);
		enemy2140(enemy[29],3,2880+350,300);
		enemy2140(enemy[29],4,2880+358,280);
		//enemy[30]動作イベント
		if(!enemy[30].kill_flag)	pointMV(enemy[30],game.width-3*enemy[30].width-10,enemy[30].height+10,6);
		enemy2140(enemy[30],0,2880+366,260);
		enemy2140(enemy[30],1,2880+374,240);
		enemy2140(enemy[30],2,2880+382,220);
		enemy2140(enemy[30],3,2880+390,200);
		enemy2140(enemy[30],4,2880+398,180);
		//enemy[21]-enemy[30]撤退
		if(time>3300)	for(var i=0;i<10;i++)		pointMV(enemy[21+i],enemy[21+i].x,-enemy[21+i].height,12);
	}
	if(time>3480){
		//位置の初期化
		if(time==(3480+1))	{
			for(var i=0;i<5;i++)	{
				enemy[31+i].x=game.width+enemy[36+i].width;
				enemy[31+i].y=-enemy[31+i].height;
			}
			for(var i=0;i<5;i++)	{
				enemy[36+i].x=-enemy[31+i].width;
				enemy[36+i].y=-enemy[36+i].height;
			}
		}
		//enemy[31]動作イベント
		if(!enemy[31].kill_flag)	pointMV(enemy[31],game.width/2+enemy[31].width,enemy[31].height/2+10,6);
		enemy2140(enemy[31],0,3480+7,180);
		enemy2140(enemy[31],1,3480+14,150);
		enemy2140(enemy[31],2,3480+21,120);
		enemy2140(enemy[31],3,3480+28,90);
		enemy2140(enemy[31],4,3480+35,60);
		//enemy[32]動作イベント
		if(!enemy[32].kill_flag)	pointMV(enemy[32],game.width/2-3*enemy[32].width,2*enemy[32].height/2+10,6);
		enemy2140(enemy[32],0,3480+42,90);
		enemy2140(enemy[32],1,3480+49,60);
		enemy2140(enemy[32],2,3480+56,30);
		enemy2140(enemy[32],3,3480+63,0);
		enemy2140(enemy[32],4,3480+70,330);
		//enemy[33]動作イベント
		if(!enemy[33].kill_flag)	pointMV(enemy[33],game.width/2-2*enemy[33].width,enemy[33].height/2+10,6);
		enemy2140(enemy[33],0,3480+77,80);
		enemy2140(enemy[33],1,3480+84,110);
		enemy2140(enemy[33],2,3480+91,140);
		enemy2140(enemy[33],3,3480+98,170);
		enemy2140(enemy[33],4,3480+105,200);
		//enemy[34]動作イベント
		if(!enemy[34].kill_flag)	pointMV(enemy[34],game.width/2-enemy[34].width,10,6);
		enemy2140(enemy[34],0,3480+112,0);
		enemy2140(enemy[34],1,3480+119,45);
		enemy2140(enemy[34],2,3480+126,90);
		enemy2140(enemy[34],3,3480+133,135);
		enemy2140(enemy[34],4,3480+140,180);
		//enemy[35]動作イベント
		if(!enemy[35].kill_flag)	pointMV(enemy[35],game.width/2+3*enemy[35].width,3*enemy[35].height/2+10,6);
		enemy2140(enemy[35],0,3480+112,90);
		enemy2140(enemy[35],1,3480+119,120);
		enemy2140(enemy[35],2,3480+126,150);
		enemy2140(enemy[35],3,3480+133,180);
		enemy2140(enemy[35],4,3480+140,210);
		//enemy[36]動作イベント
		if(!enemy[36].kill_flag)	pointMV(enemy[36],game.width/2+2*enemy[36].width,2*enemy[36].height/2+10,6);
		enemy2140(enemy[36],0,3480+147,180);
		enemy2140(enemy[36],1,3480+154,135);
		enemy2140(enemy[36],2,3480+161,90);
		enemy2140(enemy[36],3,3480+168,45);
		enemy2140(enemy[36],4,3480+175,0);
		//enemy[37]動作イベント
		if(!enemy[37].kill_flag)	pointMV(enemy[37],game.width/2,10,6);
		enemy2140(enemy[37],0,3480+182,180);
		enemy2140(enemy[37],1,3480+189,135);
		enemy2140(enemy[37],2,3480+196,90);
		enemy2140(enemy[37],3,3480+203,45);
		enemy2140(enemy[37],4,3480+210,0);
		//enemy[38]動作イベント
		if(!enemy[38].kill_flag)	pointMV(enemy[38],game.width/2-4*enemy[38].width,3*enemy[38].height/2+10,6);
		enemy2140(enemy[38],0,3480+217,120);
		enemy2140(enemy[38],1,3480+224,90);
		enemy2140(enemy[38],2,3480+231,60);
		enemy2140(enemy[38],3,3480+238,30);
		enemy2140(enemy[38],4,3480+245,0);
		//enemy[39]動作イベント
		if(!enemy[39].kill_flag)	pointMV(enemy[39],game.width/2-5*enemy[39].width,4*enemy[39].height/2+10,6);
		enemy2140(enemy[39],0,3480+252,0);
		enemy2140(enemy[39],1,3480+259,30);
		enemy2140(enemy[39],2,3480+266,60);
		enemy2140(enemy[39],3,3480+243,90);
		enemy2140(enemy[39],4,3480+280,120);
		//enemy[40]動作イベント
		if(!enemy[40].kill_flag)	pointMV(enemy[40],game.width/2+4*enemy[40].width,4*enemy[40].height/2+10,6);
		enemy2140(enemy[40],0,3480+287,90);
		enemy2140(enemy[40],1,3480+294,120);
		enemy2140(enemy[40],2,3480+301,150);
		enemy2140(enemy[40],3,3480+308,180);
		enemy2140(enemy[40],4,3480+315,210);
		//enemy[31]-enemy[40]撤退
		if(time>3840)	for(var i=0;i<10;i++)		pointMV(enemy[31+i],enemy[31+i].x,-enemy[31+i].height,12);
	}
	//enemy[41-45]動作イベント
	enemy4145=function(showtime,initSHtime,exittime,bodyobj){
		if(time>showtime){
			if(!bodyobj.kill_flag){
				//位置初期化
				if(bodyobj.x==-100&&bodyobj.y==-100){
					bodyobj.x=game.width+bodyobj.width;
					bodyobj.y=game.height/2-200;
				}
				//移動処理
				if(bodyobj.move_SW==0){
					pointMV(bodyobj,game.width/2,game.height/2-200,3);
					if(bodyobj.x==game.width/2)	bodyobj.move_SW=1;
				}
				else	if(bodyobj.move_SW==1){
					circleMV(bodyobj,200,game.width/2,game.height/2-200,game.width/2,game.height/2,1,false);
					if(time>exittime)	bodyobj.move_SW=2;
				}
				else	if(bodyobj.move_SW==2)	pointMV(bodyobj,game.width,-100,3);
			}	
			//ショット位置初期化		
			if(!bodyobj.shot[0].move.flag&&!bodyobj.kill_flag){
				bodyobj.shot[0].x=bodyobj.x+bodyobj.width/2;
				bodyobj.shot[0].y=bodyobj.y+bodyobj.height/2;
			}
			//ショット継続処理
			bodyobj.shot[0].move.flag=true;
			//ショット処理
			angleSH(bodyobj.shot[0],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
		}
	}
	for(var i=0;41+i<46;i++)	enemy4145((4080+i*15),(4080+i*15)+50,4080+1140,enemy[41+i]);
	
	//enemy[46-50]動作イベント
	enemy4650=function(showtime,initSHtime,exittime,bodyobj){
		if(time>showtime){
			if(!bodyobj.kill_flag){
				//位置初期化
				if(bodyobj.x==-100&&bodyobj.y==-100){
					bodyobj.x=0-bodyobj.width;
					bodyobj.y=game.height/2-200;
				}
				//移動処理
				if(bodyobj.move_SW==0){
					pointMV(bodyobj,game.width/2,game.height/2-200,3);
					if(bodyobj.x==game.width/2)	bodyobj.move_SW=1;
				}
				else	if(bodyobj.move_SW==1){
					circleMV(bodyobj,200,game.width/2,game.height/2-200,game.width/2,game.height/2,1,true);
					if(time>exittime)	bodyobj.move_SW=2;
				}
				else	if(bodyobj.move_SW==2)	pointMV(bodyobj,0,-100,3);
			}	
			//ショット位置初期化		
			if(!bodyobj.shot[0].move.flag&&!bodyobj.kill_flag){
				bodyobj.shot[0].x=bodyobj.x+bodyobj.width/2;
				bodyobj.shot[0].y=bodyobj.y+bodyobj.height/2;
			}
			//ショット継続処理
			bodyobj.shot[0].move.flag=true;
			//ショット処理
			angleSH(bodyobj.shot[0],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,5);	
		}
	}
	for(var i=0;46+i<51;i++)	enemy4650((4080+600+i*15),(4080+600+i*15)+50,4080+1140,enemy[46+i]);
	
	enemy5167=function(showtime,bodyobj,oriX,oriY){
		if((time<showtime)&&(time>showtime-30)){
			if(bodyobj.move_SW==0)	bodyobj.move_SW=200;
			//形状
			context.beginPath();                  //パスの開始
			context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
			context.closePath();                  //パスを終了する
			//塗り・線幅
			context.strokeStyle = "indigo"; 			//線色を指定
			context.lineWidth = 1;   //線幅を指定
			context.stroke();                				//線を引く
			context.fillStyle = "indigo";      				//塗りつぶし色を指定
			context.globalAlpha=2/bodyobj.move_SW;					//透明度
			context.fill();                  					//塗りつぶす
			if(time%2)	bodyobj.move_SW/=2;
		}
		if((time<showtime+120)&&(time>showtime+46)){
			//形状
			context.beginPath();                  //パスの開始
			context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
			context.closePath();                  //パスを終了する
			//塗り・線幅
			context.strokeStyle = "indigo"; 			//線色を指定
			context.lineWidth = 1;   //線幅を指定
			context.stroke();                				//線を引く
			context.fillStyle = "indigo";      				//塗りつぶし色を指定
			context.globalAlpha=2/bodyobj.move_SW;					//透明度
			context.fill();                  					//塗りつぶす
			if(time%2)	bodyobj.move_SW*=3;
		}
		if(time>showtime){
			if(!bodyobj.kill_flag){
				bodyobj.x=oriX-bodyobj.width/2;
				bodyobj.y=oriY-bodyobj.height/2;
			}
			for(var i=0;i<18;i++){
				//ショット位置初期化		
				if(!bodyobj.shot[i].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[i].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[i].y=bodyobj.y+bodyobj.height/2;
				}
			}
			//敵オブジェクト自体は排除するため撃破処理
			killenemy(bodyobj);
			for(var i=0;i<9;i++){
				if(i==0){
					//ショット継続処理
					bodyobj.shot[i].move.flag=true;
					//ショット処理
					angleSH(bodyobj.shot[i],i*40,2);
				}
				else{
					//ショット継続処理
					bodyobj.shot[i].move.flag=true;
					//ショット処理
					angleSH_S(bodyobj.shot[i],i*40,2);
				}
			}
			if(time>showtime+60){
				for(var i=9;i<17;i++){
					if(i==9){
						//ショット継続処理
						bodyobj.shot[i].move.flag=true;
						//ショット処理
						angleSH(bodyobj.shot[i],(i*40-340),3);
					}
					else{
						//ショット継続処理
						bodyobj.shot[i].move.flag=true;
						//ショット処理
						angleSH_S(bodyobj.shot[i],(i*40-340),3);
					}
				}
				//ショット継続処理
				bodyobj.shot[17].move.flag=true;
				//ショット処理
				angleSH(bodyobj.shot[17],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180,3);
			}
		}
	}
	//enemy[51]動作イベント
	enemy5167(5280,enemy[51],game.width*7/8,game.height/8);
	//enemy[52]動作イベント
	enemy5167(5280+60,enemy[52],game.width/4,game.height*3/8);
	//enemy[53]動作イベント
	enemy5167(5280+120,enemy[53],game.width/8,game.height/8);
	//enemy[54]動作イベント
	enemy5167(5280+180,enemy[54],game.width*5/8,game.height/8);
	//enemy[55]動作イベント
	enemy5167(5280+240,enemy[55],game.width*3/4,game.height*3/8);
	//enemy[56]動作イベント
	enemy5167(5280+300,enemy[56],game.width/2,game.height/8);
	//enemy[57]動作イベント
	enemy5167(5280+420,enemy[57],game.width*7/8,game.height/8);
	//enemy[58]動作イベント
	enemy5167(5280+420,enemy[58],game.width/4,game.height*3/8);
	//enemy[59]動作イベント
	enemy5167(5280+540,enemy[59],game.width/8,game.height/8);
	//enemy[60]動作イベント
	enemy5167(5280+540,enemy[60],game.width*5/8,game.height/8);
	//enemy[61]動作イベント
	enemy5167(5280+660,enemy[61],game.width*3/4,game.height*3/8);
	//enemy[62]動作イベント
	enemy5167(5280+660,enemy[62],game.width/2,game.height/8);
	//enemy[63]動作イベント
	enemy5167(5280+840,enemy[63],game.width*7/8,game.height/8);
	//enemy[64]動作イベント
	enemy5167(5280+840,enemy[64],game.width/4,game.height*3/8);
	//enemy[65]動作イベント
	enemy5167(5280+840,enemy[65],game.width/8,game.height/8);
	//enemy[66]動作イベント
	enemy5167(5280+1020,enemy[66],game.width*5/8,game.height/8);
	//enemy[67]動作イベント
	enemy5167(5280+1020,enemy[67],game.width*3/4,game.height*3/8);
	//enemy[68]動作イベント
	enemy5167(5280+1020,enemy[68],game.width/2,game.height/8);
	
	enemy6970=function(showtime,bodyobj,oriX,oriY){
		if((time<showtime)&&(time>showtime-30)){
			if(bodyobj.move_SW==0)	bodyobj.move_SW=200;
			//形状
			context.beginPath();                  //パスの開始
			context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
			context.closePath();                  //パスを終了する
			//塗り・線幅
			context.strokeStyle = "indigo"; 			//線色を指定
			context.lineWidth = 1;   //線幅を指定
			context.stroke();                				//線を引く
			context.fillStyle = "indigo";      				//塗りつぶし色を指定
			context.globalAlpha=2/bodyobj.move_SW;					//透明度
			context.fill();                  					//塗りつぶす
			if(time%4==0)	bodyobj.move_SW/=2;
		}
		if(time>showtime){
			//初期化処理
			if(!bodyobj.show_flag){
				//初期位置
				bodyobj.x=oriX-bodyobj.width/2;
				bodyobj.y=oriY-bodyobj.height/2;
				//パラメータの再設定
				bodyobj.HP=10;
				for(var i=0;i<9;i++){
					bodyobj.shot[i].R=4;	//ショット半径[px]
					bodyobj.shot[i].color="indigo";	//ショットの色
					bodyobj.shot[i].linecolor="indigo";	//ショットの線色
					bodyobj.shot[i].alpha=0.9;	//ショットの透明度
				}
				bodyobj.show_flag=true;	
			}
			for(var i=0;i<9;i++){
				//ショット位置初期化		
				if(!bodyobj.shot[i].move.flag&&!bodyobj.kill_flag){
					bodyobj.shot[i].x=bodyobj.x+bodyobj.width/2;
					bodyobj.shot[i].y=bodyobj.y+bodyobj.height/2;
					bodyobj.shot[i].move.flag=true;
				}
			}
			
			//ショット処理
			if(time>showtime){
				angleSH_S(bodyobj.shot[0],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180-20,7);
				angleSH(bodyobj.shot[1],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180-10,7);
				angleSH_S(bodyobj.shot[2],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180+10,7);
				if(time>showtime+5){
						angleSH_S(bodyobj.shot[3],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180-20,7);
						angleSH(bodyobj.shot[4],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180-10,7);
						angleSH_S(bodyobj.shot[5],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180+10,7);
					if(time>showtime+10){
							angleSH_S(bodyobj.shot[6],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180-20,7);
							angleSH(bodyobj.shot[7],Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x)/Math.PI*180-10,7);
							angleSH_S(bodyobj.shot[8],(Math.atan2(player.y-bodyobj.y,player.x-bodyobj.x))/Math.PI*180+10,7);
					}
				}
			}
		}
	}
	enemy6970(6480,enemy[69],game.width*3/4,game.width/4);	
	enemy6970(6480+120,enemy[70],game.width/4,game.width/4);

	enemy71=function(showtime,bodyobj,oriX,oriY){
		if((time<showtime)&&(time>showtime-30)){
			if(bodyobj.move_SW==0)	bodyobj.move_SW=200;
			//形状
			context.beginPath();                  //パスの開始
			context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
			context.closePath();                  //パスを終了する
			//塗り・線幅
			context.strokeStyle = "indigo"; 			//線色を指定
			context.lineWidth = 1;   //線幅を指定
			context.stroke();                				//線を引く
			context.fillStyle = "indigo";      				//塗りつぶし色を指定
			context.globalAlpha=2/bodyobj.move_SW;					//透明度
			context.fill();                  					//塗りつぶす
			if(time%4==0)	bodyobj.move_SW/=2;
		}
		if(time>showtime){
			//初期化処理
			if(!bodyobj.show_flag){
				//初期位置
				bodyobj.x=oriX-bodyobj.width/2;
				bodyobj.y=oriY-bodyobj.height/2;
				//パラメータの再設定
				bodyobj.HP=5;
				for(var i=0;i<2;i++){
					bodyobj.shot[i].R=0;	//ショット半径[px]
					bodyobj.Bvar=0;			//ショットとの距離半径
					bodyobj.shot[i].color="indigo";	//ショットの色
					bodyobj.shot[i].linecolor="indigo";	//ショットの線色
					bodyobj.shot[i].alpha=0.9;	//ショットの透明度
				}
				bodyobj.show_flag=true;	
			}
			//結界型ショット		
			//ショットの動的変化
			if(time<showtime+240){
				for(var i=0;i<2;i++)	bodyobj.shot[i].R+=0.1
				bodyobj.Bvar++;
				//ショットの動きを切り替えるためのトグルとして使用することとする
				bodyobj.move_SW=0
				barrierSH	(bodyobj,2,bodyobj.Bvar,1);
			}
			else if(!bodyobj.move_SW){
				bodyobj.Bvar--;
				if(bodyobj.Bvar<2*bodyobj.shot[0].R)	bodyobj.move_SW=1;
				barrierSH	(bodyobj,2,bodyobj.Bvar,2);
			}
			else	if(bodyobj.move_SW){
				bodyobj.Bvar++;
				if(bodyobj.Bvar>238)	bodyobj.move_SW=0;
				barrierSH	(bodyobj,2,bodyobj.Bvar,2);
			}
			if(bodyobj.kill_flag)	for(var i=0;i<2;i++)		shot_terminal(bodyobj.shot[i]);
		}
	}
	enemy71(6480+300,enemy[71],game.width/2,game.height/2);
	
	enemy7274=function(showtime,bodyobj,oriX,oriY){
		//出現エフェクト
		if((time<showtime)&&(time>showtime-30)){
			if(bodyobj.move_SW==0)	bodyobj.move_SW=200;
			//形状
			context.beginPath();                  //パスの開始
			context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
			context.closePath();                  //パスを終了する
			//塗り・線幅
			context.strokeStyle = "indigo"; 			//線色を指定
			context.lineWidth = 1;   //線幅を指定
			context.stroke();                				//線を引く
			context.fillStyle = "indigo";      				//塗りつぶし色を指定
			context.globalAlpha=2/bodyobj.move_SW;					//透明度
			context.fill();                  					//塗りつぶす
			if(time%4==0)	bodyobj.move_SW/=2;
		}
		//プリレーザー音
		if(time==showtime)	sound("prelaser",true);
		//出現
		if(time>showtime){
			//初期化処理
			if(!bodyobj.show_flag){
				//初期位置
				bodyobj.x=oriX-bodyobj.width/2;
				bodyobj.y=oriY-bodyobj.height/2;
				//パラメータの再設定
				bodyobj.HP=5;
				//※色が変わらないために必要
				bodyobj.shot[0].color="indigo";	//ショットの色
				bodyobj.shot[0].linecolor="indigo";	//ショットの線色
				//ショット自体は表示しない
				bodyobj.shot[0].alpha=0;	//ショットの透明度
				bodyobj.show_flag=true;	
			}
			//レーザーショット
			//初期化
			//ショット位置初期化		
			if(!bodyobj.shot[0].move.flag&&!bodyobj.kill_flag){
				bodyobj.shot[0].x=bodyobj.x+bodyobj.width/2;
				bodyobj.shot[0].y=bodyobj.y+bodyobj.height/2;
				bodyobj.shot[0].move.flag=true;
			}
			//ショットの動的変化
			if(time<showtime+60){
				//レーザ照射角度を設定
				if(bodyobj.Langle==0)	bodyobj.Langle=Math.atan2((player.y+player.width/2)-bodyobj.y,(player.x+player.height/2)-bodyobj.x);
				//初期処理
				if(time==showtime+1){
					//ショットを動かす
					angleSH_SP(bodyobj.shot[0],bodyobj.Langle,1000);
					//レーザーショット座標決定
					bodyobj.LiX=bodyobj.shot[0].x;
					bodyobj.LiY=bodyobj.shot[0].y;
					bodyobj.LfX=bodyobj.shot[0].x+bodyobj.shot[0].move.x;
					bodyobj.LfY=bodyobj.shot[0].y+bodyobj.shot[0].move.y;
				}
				//レーザーの前描写
				//パス
				context.beginPath();
				context.moveTo(bodyobj.LiX,bodyobj.LiY);//始点
				context.lineTo(bodyobj.LfX,bodyobj.LfY);//終点
				context.closePath();
				//線の描写
				context.storokeStyle="indigo";		//線色
				context.lineWidth=bodyobj.shot[0].R;	//線幅の指定
				context.stroke();					//線を引く
				context.globalAlpha=0.5	//透明度
				context.fillStyle ="indigo";  			//塗りつぶし色
				context.fill();                  					//塗りつぶす
				//レーザー音
				if(time==showtime+50)	sound("laser",true);
			}
			else if(time<showtime+120){
				//レーザーショット
				angleSH_SP(bodyobj.shot[0],bodyobj.Langle,15);
				//内側レーザーの描写
				//パス
				context.beginPath();
				context.moveTo(bodyobj.LiX,bodyobj.LiY);//始点
				context.lineTo(bodyobj.LfX,bodyobj.LfY);//終点
				context.closePath();
				//線の描写
				context.storokeStyle="indigo";		//線色
				context.lineWidth=bodyobj.shot[0].R;	//線幅の指定
				context.stroke();					//線を引く
				context.fillStyle ="indigo";  			//塗りつぶし色
				context.globalAlpha=0.8	//透明度
				context.fill();                  					//塗りつぶす
				//外側レーザーの描写
				//パス
				context.beginPath();
				context.moveTo(bodyobj.LiX,bodyobj.LiY);//始点
				context.lineTo(bodyobj.LfX,bodyobj.LfY);//終点
				context.closePath();
				//線の描写
				context.storokeStyle="indigo";		//線色
				context.lineWidth=bodyobj.shot[0].R*4;	//線幅の指定
				context.stroke();					//線を引く
				context.fillStyle ="indigo";  			//塗りつぶし色
				context.globalAlpha=0.7	//透明度
				context.fill();                  					//塗りつぶす
			}
			if(((time<showtime+360)&&(time>showtime+120))||bodyobj.kill_flag){
				//レーザーの後描写
				//パス
				context.beginPath();
				context.moveTo(bodyobj.LiX,bodyobj.LiY);//始点
				context.lineTo(bodyobj.LfX,bodyobj.LfY);//終点
				context.closePath();
				//線の描写
				context.storokeStyle="indigo";		//線色
				if(!(time%5))	bodyobj.shot[0].R/=3;	//線幅の減少
				context.lineWidth=bodyobj.shot[0].R*4;	//線幅の指定
				context.stroke();					//線を引く
				context.fillStyle ="indigo";  			//塗りつぶし色
				context.globalAlpha=0.5	//透明度
				context.fill();                  					//塗りつぶす
				
				//敵機の消失
				killenemy(bodyobj);
				//ショット処理
				shot_terminal(bodyobj.shot[0])
				//消失のエフェクト
				//初期化
				if(bodyobj.move_SW==0)	bodyobj.move_SW=200;
				//形状
				context.beginPath();                  //パスの開始
				context.arc(oriX,oriY, bodyobj.move_SW, 0, 2 * Math.PI);//円のパスを設定
				context.closePath();                  //パスを終了する
				//塗り・線幅
				context.strokeStyle = "indigo"; 			//線色を指定
				context.lineWidth = 1;   //線幅を指定
				context.stroke();                				//線を引く
				context.fillStyle = "indigo";      				//塗りつぶし色を指定
				context.globalAlpha=2/bodyobj.move_SW;					//透明度
				context.fill();                  					//塗りつぶす
				if(time%4==0)	bodyobj.move_SW*=2;
				}
		}
	}
	enemy7274(6900,enemy[72],enemy[72].width,enemy[72].height);
	enemy7274(6900+60,enemy[73],game.width-enemy[73].width,enemy[73].height);
	enemy7274(6900+120,enemy[74],game.width-enemy[74].width,game.height-enemy[74].height);
}