#所有商品大类总表

USE mryx;
CREATE TABLE mryx_index_nav(
	in_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	img_url VARCHAR(255),
	pro_type INT
);

INSERT INTO mryx_index_nav VALUES(null,'百货',"/img/index_nav_icon/baihuo.jpg",1);
INSERT INTO mryx_index_nav VALUES(null,'暖心火锅',"/img/index_nav_icon/huoguo.jpg",2);
INSERT INTO mryx_index_nav VALUES(null,'酒饮',"/img/index_nav_icon/jiupin.jpg",3);
INSERT INTO mryx_index_nav VALUES(null,'粮油',"/img/index_nav_icon/liangyou.jpg",4);
INSERT INTO mryx_index_nav VALUES(null,'零食',"/img/index_nav_icon/lingshi.jpg",5);
INSERT INTO mryx_index_nav VALUES(null,'乳品',"/img/index_nav_icon/rupin.jpg",6);
INSERT INTO mryx_index_nav VALUES(null,'蔬菜',"/img/index_nav_icon/shucai.jpg",7);
INSERT INTO mryx_index_nav VALUES(null,'水产',"/img/index_nav_icon/shuichan.jpg",8);
INSERT INTO mryx_index_nav VALUES(null,'水果',"/img/index_nav_icon/shuiguo.jpg",9);
INSERT INTO mryx_index_nav VALUES(null,'熟食',"/img/index_nav_icon/shushi.jpg",10);
INSERT INTO mryx_index_nav VALUES(null,'速食',"/img/index_nav_icon/sushi.jpg",11);
INSERT INTO mryx_index_nav VALUES(null,'早餐',"/img/index_nav_icon/zaocan.jpg",12);

INSERT INTO mryx_index_nav VALUES(null,'水产',"/img/index_nav_icon/shuichan02.jpg",8);
INSERT INTO mryx_index_nav VALUES(null,'暖心火锅',"/img/index_nav_icon/huoguo02.jpg",2);
INSERT INTO mryx_index_nav VALUES(null,'粮油',"/img/index_nav_icon/liangyou02.jpg",4);
INSERT INTO mryx_index_nav VALUES(null,'乳品',"/img/index_nav_icon/rupin02.jpg",6);