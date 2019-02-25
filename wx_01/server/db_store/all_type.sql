#p_type指大类下划分的小类
#pro_type指整体的所属大类

USE mryx;
CREATE TABLE mryx_type(
	id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(25),
  pro_type INT,
  p_type INT
);

#百货
insert into mryx_type values(null,'洗衣液',1,1);
insert into mryx_type values(null,'牙膏',1,2);
insert into mryx_type values(null,'牙刷',1,3);
insert into mryx_type values(null,'洗发水',1,4);

#暖心火锅
insert into mryx_type values(null,'自热火锅',2,1);
insert into mryx_type values(null,'自助火锅',2,2);
insert into mryx_type values(null,'自煮火锅',2,3);

#所有的酒
insert into mryx_type values(null,'白酒',3,1);
insert into mryx_type values(null,'保健酒',3,2);
insert into mryx_type values(null,'黄酒',3,3);
insert into mryx_type values(null,'啤酒',3,4);
insert into mryx_type values(null,'葡萄酒',3,5);
insert into mryx_type values(null,'洋酒',3,6);

#粮油
insert into mryx_type values(null,'鸡精',4,1);
insert into mryx_type values(null,'食用油',4,2);
insert into mryx_type values(null,'酱油',4,3);
insert into mryx_type values(null,'大米',4,4);

#零食
insert into mryx_type values(null,'三只松鼠',5,1);
insert into mryx_type values(null,'巧克力',5,2);
insert into mryx_type values(null,'膨化食品',5,3);
insert into mryx_type values(null,'糖果',5,4);

#乳品
insert into mryx_type values(null,'酸奶',6,1);
insert into mryx_type values(null,'原味奶',6,2);
insert into mryx_type values(null,'儿童酸奶',6,3);
insert into mryx_type values(null,'营养酸奶',6,4);

#蔬菜
insert into mryx_type values(null,'紫薯',7,1);
insert into mryx_type values(null,'土豆',7,2);
insert into mryx_type values(null,'南瓜',7,3);
insert into mryx_type values(null,'山药',7,4);
insert into mryx_type values(null,'玉米',7,5);

#水产
insert into mryx_type values(null,'三文鱼',8,1);
insert into mryx_type values(null,'带鱼',8,2);
insert into mryx_type values(null,'红虾',8,3);
insert into mryx_type values(null,'贝类',8,4);
insert into mryx_type values(null,'八爪鱼',8,5);

#水果
insert into mryx_type values(null,'榴莲',9,1);
insert into mryx_type values(null,'火龙果',9,2);
insert into mryx_type values(null,'奇异果',9,3);
insert into mryx_type values(null,'苹果',9,4);
insert into mryx_type values(null,'橙子',9,5);
insert into mryx_type values(null,'柚子',9,6);

#熟食
insert into mryx_type values(null,'鸡腿',10,1);
insert into mryx_type values(null,'周黑鸭',10,2);
insert into mryx_type values(null,'良品铺子',10,3);
insert into mryx_type values(null,'牛肉条',10,4);

#速食
insert into mryx_type values(null,'刀削面',11,1);
insert into mryx_type values(null,'拉面',11,2);
insert into mryx_type values(null,'酸辣粉',11,3);
insert into mryx_type values(null,'手抓饼',11,4);
insert into mryx_type values(null,'方便面',11,5);

#早餐
insert into mryx_type values(null,'燕麦片',12,1);
insert into mryx_type values(null,'糕点',12,2);
insert into mryx_type values(null,'三只松鼠',12,3);
insert into mryx_type values(null,'江中猴菇',12,4);