USE mryx;
CREATE TABLE mryx_baojianjiu(
	bjj_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	img_url VARCHAR(255),
	price DECIMAL(18,2),
	j_type INT
);
INSERT INTO mryx_baojianjiu VALUES(null,'致中和 家饮五加皮酒整箱装500ml*12瓶 百年草本调养 家饮 五加皮',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu01.jpg",145.00,2);
INSERT INTO mryx_baojianjiu VALUES(null,'致中和牌五加皮酒 500ml/瓶 家饮 中华老字号 每天喝一点儿',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu02.jpg",14.90,2);
INSERT INTO mryx_baojianjiu VALUES(null,'致中和中华老字号保健字五加皮酒500ml*2瓶年货礼盒 致中和 五加皮 精美礼盒',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu03.jpg",75.00,2);
INSERT INTO mryx_baojianjiu VALUES(null,'椰岛牌鹿龟酒 500ml/瓶*7瓶套餐保健酒 老字号保健酒 抗疲劳免疫调节',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu04.jpg",248.00,2);
INSERT INTO mryx_baojianjiu VALUES(null,'椰岛牌鹿龟酒 500ml/瓶*2瓶 老字号保健酒礼盒装 抗疲劳 免疫调节',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu05.jpg",138.00,2);
INSERT INTO mryx_baojianjiu VALUES(null,'致中和 老底子五加皮酒坛装 500ml/坛*4坛保健酒礼盒装黄酒药酒',"http://172.163.8.212:3000/img/jiuyin/baojianjiu/baojianjiu06.jpg",265.00,2);
