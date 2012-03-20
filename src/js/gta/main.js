var ENTS = {},
	W = 500,
	H = 400,
	HW = W / 2,
	HH = H / 2,
	me,
	LAST,
	CURRENT;

function initSprites() {
	SPRITES = {
		pavement: [0, 0],
		road_h: [0, 1, 1, 2],
		road_v: [1, 0, 2, 1],
		road_c1: [1, 1],
		road_c2: [2, 1],
		road_c3: [2, 2],
		road_c4: [1, 2],

		house1_nw: [3, 0],
		house1_n: [4, 0],
		house1_ne: [5, 0],
		house1_mw: [3, 1],
		house1_m: [4, 1],
		house1_me: [5, 1],
		house1_sw: [3, 2],
		house1_s: [4, 2],
		house1_se: [5, 2],

		house2_nw: [3, 3],
		house2_n: [4, 3],
		house2_ne: [5, 3],
		house2_mw: [3, 4],
		house2_m: [4, 4],
		house2_me: [5, 4],
		house2_sw: [3, 5],
		house2_s: [4, 5],
		house2_se: [5, 5],

		car_player: [0, 3, 1, 2],
		car_npc: [1, 3, 1, 2],
		car_cop: [2, 3, 1, 2],

		player: [0, 5],
		npc: [1, 5],
		cop: [2, 5]
	};

	Crafty.sprite(32, "media/crafty/gta/sprites.png", SPRITES);
}

MAP = {'0,0':'house1_me','0,1':'house1_me','0,2':'house1_me','0,3':'house1_me','0,4':'house1_me','0,5':'house1_me','0,6':'house1_me','0,7':'house1_me','0,8':'house1_me','0,9':'house1_me','0,10':'house1_me','0,11':'house1_me','0,12':'house1_me','0,13':'house1_me','0,14':'house1_me','0,15':'house1_me','0,16':'house1_me','0,17':'house1_me','0,18':'house1_me','0,19':'house1_me','0,20':'house1_me','0,21':'house1_me','0,22':'house1_me','0,23':'house1_me','1,0':'house2_sw','2,0':'house2_s','3,0':'house2_s','4,0':'house2_s','5,0':'house2_s','6,0':'house2_s','7,0':'house2_s','8,0':'house2_se','9,0':'house1_sw','10,0':'house1_se','13,0':'house1_se','12,0':'house1_s','14,0':'house1_sw','15,0':'house1_s','16,0':'house1_s','17,0':'house1_s','18,0':'house1_s','19,0':'house1_s','20,0':'house1_s','22,0':'house1_s','21,0':'house1_s','23,0':'house1_se','24,0':'house1_sw','11,0':'house1_sw','25,0':'house1_s','26,0':'house1_s','27,0':'house1_s','28,0':'house1_s','29,0':'house1_se','30,0':'house2_sw','31,0':'house2_s','32,0':'house2_se','33,0':'house1_sw','40,0':'house1_sw','43,0':'house1_sw','47,0':'house1_sw','39,0':'house1_se','44,0':'house1_se','42,0':'house1_se','52,0':'house1_se','34,0':'house1_s','35,0':'house1_s','37,0':'house1_s','36,0':'house1_s','38,0':'house1_s','41,0':'house1_s','45,0':'house1_sw','46,0':'house1_se','51,0':'house1_s','50,0':'house1_s','49,0':'house1_s','48,0':'house1_s','52,1':'house2_mw','52,2':'house2_mw','52,3':'house2_mw','52,4':'house2_mw','52,5':'house2_mw','52,6':'house2_mw','52,7':'house2_mw','52,8':'house2_mw','52,9':'house2_mw','52,10':'house2_mw','52,11':'house2_mw','52,12':'house2_mw','52,13':'house2_mw','52,14':'house2_mw','52,15':'house2_mw','52,16':'house2_mw','52,17':'house2_mw','52,18':'house2_mw','52,19':'house2_mw','52,20':'house2_mw','52,21':'house2_mw','52,22':'house2_mw','52,23':'house2_sw','51,23':'house1_ne','50,23':'house1_n','49,23':'house1_n','48,23':'house1_n','47,23':'house1_n','30,23':'house1_n','29,23':'house1_n','27,23':'house1_n','28,23':'house1_n','2,23':'house2_n','3,23':'house2_n','4,23':'house2_n','11,23':'house2_n','12,23':'house2_n','18,23':'house2_n','39,23':'house2_n','38,23':'house2_n','37,23':'house2_n','1,23':'house2_nw','5,23':'house2_ne','13,23':'house2_ne','19,23':'house2_ne','40,23':'house2_ne','10,23':'house2_nw','17,23':'house2_nw','36,23':'house2_nw','20,23':'house2_nw','14,23':'house2_nw','6,23':'house2_nw','9,23':'house2_ne','16,23':'house2_ne','25,23':'house2_ne','7,23':'house2_n','8,23':'house2_n','15,23':'house2_n','22,23':'house2_n','21,23':'house2_n','23,23':'house2_n','24,23':'house2_n','26,23':'house1_nw','41,23':'house1_nw','35,23':'house1_ne','31,23':'house1_n','32,23':'house1_n','33,23':'house1_n','34,23':'house1_n','42,23':'house1_n','43,23':'house1_n','44,23':'house1_n','45,23':'house1_n','46,23':'house1_n','1,1':'pavement','1,2':'pavement','1,3':'pavement','1,4':'pavement','1,5':'pavement','1,6':'pavement','1,7':'pavement','1,9':'pavement','1,8':'pavement','1,10':'pavement','1,11':'pavement','1,12':'pavement','1,13':'pavement','1,14':'pavement','1,15':'pavement','1,16':'pavement','1,17':'pavement','1,18':'pavement','1,19':'pavement','1,20':'pavement','1,21':'pavement','1,22':'pavement','2,22':'pavement','3,22':'pavement','4,22':'pavement','5,22':'pavement','6,22':'pavement','7,22':'pavement','8,22':'pavement','10,22':'pavement','9,22':'pavement','11,22':'pavement','12,22':'pavement','13,22':'pavement','14,22':'pavement','15,22':'pavement','16,22':'pavement','17,22':'pavement','18,22':'pavement','19,22':'pavement','20,22':'pavement','21,22':'pavement','22,22':'pavement','23,22':'pavement','24,22':'pavement','25,22':'pavement','26,22':'pavement','27,22':'pavement','28,22':'pavement','30,22':'pavement','29,22':'pavement','31,22':'pavement','34,22':'pavement','32,22':'pavement','33,22':'pavement','35,22':'pavement','36,22':'pavement','37,22':'pavement','39,22':'pavement','38,22':'pavement','40,22':'pavement','41,22':'pavement','42,22':'pavement','43,22':'pavement','44,22':'pavement','45,22':'pavement','46,22':'pavement','47,22':'pavement','48,22':'pavement','49,22':'pavement','50,22':'pavement','51,22':'pavement','51,21':'pavement','51,20':'pavement','51,19':'pavement','51,18':'pavement','51,17':'pavement','51,16':'pavement','51,15':'pavement','51,14':'pavement','51,13':'pavement','51,12':'pavement','51,11':'pavement','51,10':'pavement','51,9':'pavement','51,8':'pavement','51,7':'pavement','51,6':'pavement','51,5':'pavement','51,4':'pavement','51,3':'pavement','51,2':'pavement','51,1':'pavement','2,1':'pavement','3,1':'pavement','4,1':'pavement','5,1':'pavement','6,1':'pavement','7,1':'pavement','8,1':'pavement','9,1':'pavement','10,1':'pavement','11,1':'pavement','12,1':'pavement','13,1':'pavement','14,1':'pavement','15,1':'pavement','16,1':'pavement','17,1':'pavement','18,1':'pavement','19,1':'pavement','20,1':'pavement','21,1':'pavement','22,1':'pavement','23,1':'pavement','24,1':'pavement','25,1':'pavement','26,1':'pavement','27,1':'pavement','28,1':'pavement','30,1':'pavement','29,1':'pavement','32,1':'pavement','31,1':'pavement','33,1':'pavement','35,1':'pavement','34,1':'pavement','37,1':'pavement','36,1':'pavement','38,1':'pavement','39,1':'pavement','40,1':'pavement','41,1':'pavement','42,1':'pavement','43,1':'pavement','44,1':'pavement','45,1':'pavement','46,1':'pavement','47,1':'pavement','48,1':'pavement','49,1':'pavement','50,1':'pavement','2,10':'pavement','3,10':'pavement','4,10':'pavement','6,10':'pavement','5,10':'pavement','7,10':'pavement','9,10':'pavement','8,10':'pavement','4,4':'pavement','4,5':'pavement','4,6':'pavement','4,7':'pavement','5,7':'pavement','7,7':'pavement','5,4':'pavement','6,4':'pavement','7,4':'pavement','6,7':'pavement','8,7':'pavement','9,7':'pavement','11,7':'pavement','10,7':'pavement','8,4':'pavement','10,4':'pavement','11,4':'pavement','9,4':'pavement','12,4':'pavement','13,4':'pavement','13,5':'pavement','13,7':'pavement','12,7':'pavement','13,6':'pavement','16,4':'pavement','17,4':'pavement','16,5':'pavement','16,6':'pavement','16,7':'pavement','16,10':'pavement','10,10':'pavement','11,10':'pavement','13,10':'pavement','12,10':'pavement','13,11':'pavement','13,12':'pavement','13,13':'pavement','13,14':'pavement','13,15':'pavement','12,15':'pavement','11,15':'pavement','10,15':'pavement','9,15':'pavement','7,15':'pavement','8,15':'pavement','6,15':'pavement','5,15':'pavement','4,15':'pavement','4,14':'pavement','4,13':'pavement','4,18':'pavement','6,18':'pavement','5,18':'pavement','8,18':'pavement','7,18':'pavement','9,18':'pavement','10,18':'pavement','11,18':'pavement','12,18':'pavement','13,18':'pavement','16,18':'pavement','16,15':'pavement','16,14':'pavement','16,11':'pavement','17,11':'pavement','19,11':'pavement','18,11':'pavement','17,10':'pavement','19,10':'pavement','18,10':'pavement','17,14':'pavement','19,14':'pavement','18,14':'pavement','17,15':'pavement','18,15':'pavement','19,15':'pavement','4,19':'pavement','5,19':'pavement','6,19':'pavement','7,19':'pavement','8,19':'pavement','9,19':'pavement','10,19':'pavement','11,19':'pavement','12,19':'pavement','13,19':'pavement','16,19':'pavement','17,18':'pavement','19,18':'pavement','18,18':'pavement','17,19':'pavement','19,19':'pavement','18,19':'pavement','17,7':'pavement','19,7':'pavement','18,7':'pavement','18,4':'pavement','20,4':'pavement','19,4':'pavement','21,4':'pavement','23,4':'pavement','22,4':'pavement','20,7':'pavement','21,7':'pavement','22,7':'pavement','23,7':'pavement','22,10':'pavement','22,11':'pavement','23,10':'pavement','22,14':'pavement','22,15':'pavement','22,18':'pavement','22,19':'pavement','23,18':'pavement','24,18':'pavement','23,19':'pavement','25,19':'pavement','24,19':'pavement','25,18':'pavement','23,15':'pavement','25,15':'pavement','24,15':'pavement','23,14':'pavement','24,14':'pavement','25,14':'pavement','23,11':'pavement','24,11':'pavement','25,11':'pavement','25,10':'pavement','24,10':'pavement','24,7':'pavement','25,7':'pavement','24,4':'pavement','25,4':'pavement','25,5':'pavement','25,6':'pavement','28,4':'pavement','28,5':'pavement','28,6':'pavement','28,7':'pavement','28,8':'pavement','28,9':'pavement','28,10':'pavement','28,11':'pavement','30,11':'pavement','29,11':'pavement','29,4':'pavement','31,4':'pavement','30,4':'pavement','33,4':'pavement','32,4':'pavement','33,5':'pavement','33,6':'pavement','33,7':'pavement','34,8':'pavement','33,8':'pavement','35,8':'pavement','36,8':'pavement','38,8':'pavement','37,8':'pavement','36,2':'pavement','36,3':'pavement','36,4':'pavement','36,5':'pavement','37,5':'pavement','39,5':'pavement','38,5':'pavement','40,5':'pavement','41,5':'pavement','41,4':'pavement','41,2':'pavement','41,3':'pavement','28,14':'pavement','28,15':'pavement','28,16':'pavement','28,17':'pavement','28,18':'pavement','28,19':'pavement','29,14':'pavement','31,14':'pavement','30,14':'pavement','32,14':'pavement','32,15':'pavement','32,16':'pavement','32,17':'pavement','32,18':'pavement','32,19':'pavement','31,19':'pavement','30,19':'pavement','29,19':'pavement','35,14':'pavement','35,17':'pavement','35,15':'pavement','35,16':'pavement','35,19':'pavement','35,18':'pavement','36,19':'pavement','37,19':'pavement','38,19':'pavement','39,19':'pavement','41,19':'pavement','40,19':'pavement','32,11':'pavement','31,11':'pavement','35,11':'pavement','37,11':'pavement','36,11':'pavement','38,11':'pavement','40,8':'pavement','39,8':'pavement','42,8':'pavement','41,8':'pavement','43,8':'pavement','44,8':'pavement','44,7':'pavement','44,6':'pavement','44,5':'pavement','44,4':'pavement','47,4':'pavement','47,5':'pavement','48,6':'pavement','47,6':'pavement','47,7':'pavement','47,8':'pavement','48,8':'pavement','48,7':'pavement','48,5':'pavement','48,4':'pavement','39,11':'pavement','40,11':'pavement','41,11':'pavement','42,11':'pavement','43,11':'pavement','44,11':'pavement','47,11':'pavement','48,11':'pavement','38,14':'pavement','37,14':'pavement','36,14':'pavement','39,14':'pavement','41,14':'pavement','40,14':'pavement','44,14':'pavement','44,15':'pavement','44,16':'pavement','44,17':'pavement','44,18':'pavement','44,19':'pavement','47,14':'pavement','47,16':'pavement','47,15':'pavement','47,17':'pavement','47,18':'pavement','47,19':'pavement','48,19':'pavement','48,17':'pavement','48,15':'pavement','48,14':'pavement','48,16':'pavement','48,18':'pavement','4,2':'road_h','5,2':'road_h','6,2':'road_h','7,2':'road_h','8,2':'road_h','9,2':'road_h','10,2':'road_h','11,2':'road_h','12,2':'road_h','13,2':'road_h','16,2':'road_h','17,2':'road_h','18,2':'road_h','19,2':'road_h','20,2':'road_h','21,2':'road_h','22,2':'road_h','23,2':'road_h','24,2':'road_h','25,2':'road_h','28,2':'road_h','29,2':'road_h','30,2':'road_h','31,2':'road_h','32,2':'road_h','33,2':'road_h','44,2':'road_h','47,2':'road_h','48,2':'road_h','35,9':'road_h','36,9':'road_h','37,9':'road_h','38,9':'road_h','39,9':'road_h','40,9':'road_h','41,9':'road_h','42,9':'road_h','43,9':'road_h','44,9':'road_h','35,12':'road_h','36,12':'road_h','37,12':'road_h','38,12':'road_h','39,12':'road_h','40,12':'road_h','41,12':'road_h','42,12':'road_h','43,12':'road_h','44,12':'road_h','28,12':'road_h','29,12':'road_h','30,12':'road_h','31,12':'road_h','32,12':'road_h','22,12':'road_h','23,12':'road_h','24,12':'road_h','25,12':'road_h','16,12':'road_h','17,12':'road_h','18,12':'road_h','19,12':'road_h','16,8':'road_h','17,8':'road_h','18,8':'road_h','19,8':'road_h','22,8':'road_h','23,8':'road_h','24,8':'road_h','25,8':'road_h','16,16':'road_h','17,16':'road_h','18,16':'road_h','19,16':'road_h','22,16':'road_h','23,16':'road_h','24,16':'road_h','25,16':'road_h','16,20':'road_h','17,20':'road_h','18,20':'road_h','19,20':'road_h','22,20':'road_h','23,20':'road_h','24,20':'road_h','25,20':'road_h','28,20':'road_h','29,20':'road_h','30,20':'road_h','31,20':'road_h','32,20':'road_h','35,20':'road_h','36,20':'road_h','37,20':'road_h','38,20':'road_h','39,20':'road_h','40,20':'road_h','41,20':'road_h','44,20':'road_h','47,20':'road_h','48,20':'road_h','47,12':'road_h','48,12':'road_h','47,9':'road_h','48,9':'road_h','36,6':'road_h','37,6':'road_h','38,6':'road_h','39,6':'road_h','40,6':'road_h','41,6':'road_h','4,8':'road_h','5,8':'road_h','6,8':'road_h','8,8':'road_h','7,8':'road_h','9,8':'road_h','11,8':'road_h','10,8':'road_h','12,8':'road_h','13,8':'road_h','4,16':'road_h','5,16':'road_h','6,16':'road_h','7,16':'road_h','8,16':'road_h','9,16':'road_h','10,16':'road_h','11,16':'road_h','12,16':'road_h','13,16':'road_h','4,20':'road_h','5,20':'road_h','6,20':'road_h','7,20':'road_h','8,20':'road_h','9,20':'road_h','10,20':'road_h','11,20':'road_h','12,20':'road_h','13,20':'road_h','2,4':'road_v','2,6':'road_v','14,4':'road_v','14,5':'road_v','14,6':'road_v','14,7':'road_v','14,10':'road_v','14,11':'road_v','14,14':'road_v','14,15':'road_v','14,18':'road_v','14,19':'road_v','2,19':'road_v','2,18':'road_v','2,15':'road_v','2,14':'road_v','2,13':'road_v','26,4':'road_v','26,5':'road_v','26,6':'road_v','26,7':'road_v','26,10':'road_v','26,11':'road_v','26,14':'road_v','26,15':'road_v','26,18':'road_v','26,19':'road_v','33,19':'road_v','33,18':'road_v','33,17':'road_v','33,16':'road_v','33,15':'road_v','33,14':'road_v','34,5':'road_v','34,4':'road_v','42,5':'road_v','42,4':'road_v','45,4':'road_v','45,5':'road_v','45,6':'road_v','45,7':'road_v','45,8':'road_v','45,11':'road_v','45,14':'road_v','45,15':'road_v','45,16':'road_v','45,17':'road_v','45,18':'road_v','45,19':'road_v','42,19':'road_v','42,18':'road_v','42,17':'road_v','42,16':'road_v','42,15':'road_v','42,14':'road_v','49,14':'road_v','49,15':'road_v','49,16':'road_v','49,17':'road_v','49,18':'road_v','49,19':'road_v','49,11':'road_v','49,8':'road_v','49,7':'road_v','49,6':'road_v','49,5':'road_v','49,4':'road_v','2,2':'road_c1','3,2':'road_c2','3,3':'road_c3','2,3':'road_c4','14,3':'road_c4','15,3':'road_c3','15,2':'road_c2','14,2':'road_c1','26,2':'road_c1','34,2':'road_c1','26,8':'road_c1','26,12':'road_c1','20,8':'road_c1','20,12':'road_c1','20,16':'road_c1','20,20':'road_c1','14,20':'road_c1','2,20':'road_c1','2,16':'road_c1','2,11':'road_c1','14,12':'road_c1','14,8':'road_c1','26,16':'road_c1','26,20':'road_c1','33,20':'road_c1','42,20':'road_c1','45,20':'road_c1','49,20':'road_c1','45,12':'road_c1','45,9':'road_c1','42,6':'road_c1','42,2':'road_c1','45,2':'road_c1','49,2':'road_c1','34,6':'road_c1','49,9':'road_c1','49,12':'road_c1','33,12':'road_c1','15,8':'road_c2','21,8':'road_c2','27,2':'road_c2','35,2':'road_c2','35,6':'road_c2','43,2':'road_c2','46,2':'road_c2','50,2':'road_c2','43,6':'road_c2','46,9':'road_c2','50,9':'road_c2','50,12':'road_c2','46,12':'road_c2','46,20':'road_c2','50,20':'road_c2','43,20':'road_c2','34,20':'road_c2','27,20':'road_c2','27,16':'road_c2','21,16':'road_c2','21,20':'road_c2','21,12':'road_c2','27,12':'road_c2','34,12':'road_c2','15,12':'road_c2','15,20':'road_c2','3,20':'road_c2','3,16':'road_c2','3,11':'road_c2','14,16':'road_c1','15,9':'road_c3','15,13':'road_c3','15,17':'road_c3','15,21':'road_c3','21,21':'road_c3','21,17':'road_c3','21,13':'road_c3','21,9':'road_c3','27,3':'road_c3','35,3':'road_c3','35,7':'road_c3','43,7':'road_c3','43,3':'road_c3','46,3':'road_c3','50,3':'road_c3','50,10':'road_c3','46,10':'road_c3','46,13':'road_c3','50,13':'road_c3','50,21':'road_c3','46,21':'road_c3','43,21':'road_c3','34,21':'road_c3','34,13':'road_c3','27,13':'road_c3','27,17':'road_c3','27,21':'road_c3','3,17':'road_c3','3,21':'road_c3','3,12':'road_c3','2,12':'road_c4','2,17':'road_c4','2,21':'road_c4','14,21':'road_c4','14,17':'road_c4','14,13':'road_c4','14,9':'road_c4','20,9':'road_c4','26,9':'road_c4','26,3':'road_c4','34,3':'road_c4','34,7':'road_c4','42,3':'road_c4','42,7':'road_c4','45,3':'road_c4','49,3':'road_c4','45,10':'road_c4','49,10':'road_c4','45,13':'road_c4','49,13':'road_c4','45,21':'road_c4','49,21':'road_c4','42,21':'road_c4','33,21':'road_c4','26,21':'road_c4','26,17':'road_c4','33,13':'road_c4','26,13':'road_c4','20,13':'road_c4','20,17':'road_c4','20,21':'road_c4','2,9':'road_c4','3,9':'road_c3','3,8':'road_c2','15,16':'road_c2','27,8':'road_c2','34,9':'road_c2','33,9':'road_c1','2,8':'road_c1','27,9':'road_c3','34,10':'road_c3','33,10':'road_c4','33,11':'road_v','20,14':'road_v','20,15':'road_v','20,18':'road_v','20,19':'road_v','20,10':'road_v','20,11':'road_v','4,11':'road_h','5,5':'house1_nw','6,5':'house1_n','7,5':'house1_n','8,5':'house1_n','9,5':'house1_n','10,5':'house1_n','11,5':'house1_n','12,5':'house1_ne','12,6':'house1_se','11,6':'house1_s','10,6':'house1_s','9,6':'house1_s','8,6':'house1_s','7,6':'house1_s','6,6':'house1_s','5,6':'house1_sw','17,5':'house2_nw','18,5':'house2_n','19,5':'house2_n','20,5':'house2_n','21,5':'house2_n','22,5':'house2_n','23,5':'house2_n','24,5':'house2_ne','24,6':'house2_se','22,6':'house2_s','17,6':'house2_sw','19,6':'house2_s','18,6':'house2_s','20,6':'house2_s','21,6':'house2_s','23,6':'house2_s','2,5':'road_v','5,11':'house1_nw','6,11':'house1_n','7,11':'house1_n','8,11':'house1_n','9,11':'house1_n','10,11':'house1_n','11,11':'house1_n','12,11':'house1_ne','12,12':'house1_me','12,13':'house1_me','5,14':'house1_sw','12,14':'house1_se','6,14':'house1_s','7,14':'house1_s','8,14':'house1_s','9,14':'house1_s','10,14':'house1_s','11,14':'house1_s','11,12':'house1_m','11,13':'house1_m','10,13':'house1_m','10,12':'house1_m','9,12':'house1_m','9,13':'house1_m','8,12':'house1_m','8,13':'house1_m','7,12':'house1_m','7,13':'house1_m','6,12':'house1_m','6,13':'house1_m','5,12':'house1_mw','5,13':'house1_mw','30,15':'house2_n','29,15':'house2_nw','31,15':'house2_ne','29,16':'house2_mw','29,17':'house2_mw','30,16':'house2_m','30,17':'house2_m','31,16':'house2_me','31,17':'house2_me','30,18':'house2_s','29,18':'house2_sw','31,18':'house2_se','40,4':'house2_se','37,4':'house2_sw','37,2':'house2_nw','40,2':'house2_ne','38,2':'house2_n','39,2':'house2_n','38,4':'house2_s','39,4':'house2_s','37,3':'house2_mw','40,3':'house2_me','38,3':'house2_m','39,3':'house2_m','2,7':'road_v','29,5':'house1_nw','32,5':'house1_ne','29,10':'house1_sw','32,10':'house1_se','29,9':'house1_mw','29,8':'house1_mw','29,7':'house1_mw','29,6':'house1_mw','32,9':'house1_me','32,8':'house1_me','32,7':'house1_me','32,6':'house1_me','30,5':'house1_n','31,5':'house1_n','30,10':'house1_s','31,10':'house1_s','30,6':'house1_m','31,6':'house1_m','31,7':'house1_m','30,7':'house1_m','30,8':'house1_m','31,8':'house1_m','31,9':'house1_m','30,9':'house1_m','37,16':'house1_m','37,17':'house1_m','38,17':'house1_m','38,16':'house1_m','39,16':'house1_m','39,17':'house1_m','40,16':'house1_m','40,17':'house1_m','37,15':'house1_n','38,15':'house1_n','39,15':'house1_n','40,15':'house1_n','37,18':'house1_s','38,18':'house1_s','39,18':'house1_s','40,18':'house1_s','41,18':'house1_se','36,18':'house1_sw','36,16':'house1_mw','36,17':'house1_mw','41,16':'house1_me','41,17':'house1_me','41,15':'house1_ne','36,15':'house1_nw'};


window.onload = function() {

	Crafty.load(["media/crafty/gta/sprites.png"], function() {
		initSprites();
		init();
	});

	function init() {
		Crafty.init(500, 400);
		Crafty.canvas.init();
		initMap();

		me = Crafty.e("2D, Canvas, player, Keyboard, Collision")
		.origin("center")
		.attr({x: 100, y: 100, _active: true})
		.collision(new Crafty.polygon([[1,19],[2,14],[9,14],[13,9],[22,10],[24,14],[31,15],[30,21],[2,20]]))
		.bind("EnterFrame", function(e) {
			if(!this._active) return;

			var angle = this._rotation * (Math.PI / 180),
				vx = Math.sin(angle),
				vy = -Math.cos(angle);

			if(this.isDown(Crafty.keys.W) || this.isDown(Crafty.keys.UP_ARROW)) {
				this.x += vx * 1.5;
				this.y += vy * 1.5;
			} else if(this.isDown(Crafty.keys.S) || this.isDown(Crafty.keys.DOWN_ARROW)) {
				this.x += -vx * 1.5;
				this.y += -vy * 1.5;
			}

			//check for collision with houses
			var collision = this.hit("Solid"),
				item;

			if(collision) {
				item = collision[0];

				this.x += Math.ceil(item.normal.x * -item.overlap);
				this.y += Math.ceil(item.normal.y * -item.overlap);
			}

		}).bind("KeyDown", function(e) {
			if(e.keyCode === Crafty.keys.ENTER || e.keyCode === Crafty.keys.F) {

				var search = this.mbr(),
					results = Crafty.map.search({
						_x: search._x - 20,
						_y: search._y - 20,
						_w: search._w + 20,
						_h: search._h + 20,
					}, true),
					i = 0, l = results.length;

				//loop over entities search for the first car
				for(;i < l;++i) {
					if(results[i].has("Car")) {
						CURRENT = results[i];
						results[i]._active = true;
						this._active = false;
						this.visible = false;
						LAST = e.timeStamp;

						break;
					}
				}
			}
		});

		CURRENT = me;

		Crafty.addEvent(this, "mousemove", function(e) {
			var pos = Crafty.DOM.translate(e.clientX, e.clientY);
			me.rotation = ~~(Math.atan2(pos.y - me._y, pos.x - me._x) * (180 / Math.PI)) + 90;
		});

		car = Crafty.e("2D, Canvas, car_player, Car").attr({x: 500, y: 200});

		//Global viewport scrolling
		Crafty.bind("EnterFrame", function() {
			if(!CURRENT) return;

			//position of the viewport
			var vpx = (CURRENT._x - HW),
				vpy = (CURRENT._y - HH);

			//Max x in map * 32 - Crafty.viewport.width = 1164
			if(vpx > 0 && vpx < 1196) {
				Crafty.viewport.x = -vpx;
			}

			if(vpy > 0 && vpy < 368) {
				Crafty.viewport.y = -vpy;
			}
		});
	};

	Crafty.c("Car", {
		_speed: 0,
		_active: false,
		_maxSpeed: 8,
		_handling: 0.8,
		_acceleration: 0.15,

		init: function() {
			this.addComponent("Keyboard, Solid, Collision").origin("center");
			this.collision(new Crafty.polygon([[2,12],[7,5],[16,2],[27,7],[30,13],[29,42],[29,56],[24,65],[7,64],[1,56],[3,39],[2,20]]));

			this.bind("EnterFrame", function() {
				if(!this._active) return;
				var slide = 0;

				//forward
				if(this.isDown(Crafty.keys.W)) {
					this._speed += this._acceleration;
				}

				//decay speed
				this._speed = this._speed * 0.98;

				//reverse
				if(this.isDown(Crafty.keys.S)) {
					this._speed -= this._acceleration;
				}

				//handbrake
				if(this.isDown(Crafty.keys.SPACE)) {
					this._speed -= this._speed / 20;
					if(this._speed > this._maxSpeed / 2) slide = this._speed * 0.8;
				}

				//turning
				if(this.isDown(Crafty.keys.A)) {
					this.rotation -= this._speed * this._handling + slide;
				}

				if(this.isDown(Crafty.keys.D)) {
					this.rotation += this._speed * this._handling + slide;
				}

				//cap the values of the car
				if(this._speed > this._maxSpeed) {
					this._speed = this._maxSpeed;
				}
				if(this._speed < -2) {
					this._speed = -2;
				}

				this.x += Math.sin(this._rotation * Math.PI / 180) * this._speed;
				this.y += Math.cos(this._rotation * Math.PI / 180) * -this._speed;

				//check for collision with houses
				var collision = this.hit("Solid"),
					item, diff, length,
					normal = {x: 0, y: 0};

				if(collision) {
					item = collision[0];

					normal.x = Math.sin(this._rotation * Math.PI / 180);
					normal.y = Math.cos(this._rotation * Math.PI / 180);
					diff = Math.sqrt(Math.pow(Math.abs(normal.x - item.normal.x), 2) * Math.pow(Math.abs(normal.y - item.normal.y), 2));

					//slow down based on the difference between directions
					this._speed = diff;

					this.x += Math.ceil(item.normal.x * -item.overlap);
					this.y += Math.ceil(item.normal.y * -item.overlap);

				}
			}).bind("KeyDown", function(e) {
				//already processed this key event
				if(LAST === e.timeStamp || !this._active) return;

				if(e.keyCode === Crafty.keys.F || e.keyCode === Crafty.keys.ENTER) {

					if(Math.abs(this._speed) < 1) {
						this._active = false;

						me.visible = true;
						me._active = true;
						me.x = this._x;
						me.y = this._y;
						CURRENT = me;
					}
				}
			});
		}
	});
};



function initMap() {
	for(var obj in MAP) {
		var pos = obj.split(",");
		ENTS[obj] = Crafty.e("2D, Canvas, "+MAP[obj]).attr({x: pos[0] * 32, y: pos[1] * 32});

		//make houses solid
		if(MAP[obj].substr(0, 5) === "house") {
			ENTS[obj].addComponent("Solid, Collision").collision();
		}
	}
}


