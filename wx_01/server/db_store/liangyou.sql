USE mryx;
CREATE TABLE mryx_product(
	ly_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	img_url VARCHAR(255),
	price DECIMAL(18,2),
  p_type INT,
	pro_type INT
);
INSERT INTO mryx_product VALUES(null,'金龙鱼 苏北大米软香稻 10kg 绵软香醇 江南味道 射阳大米 热销爆款',"http://172.163.8.212:3000/img/liangyou/liangyou01.jpg",54.80,null,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 盘锦大米 蟹稻共生10kg 东北大米 人气爆款 蟹稻共生 晶莹饱满 热销爆款',"http://172.163.8.212:3000/img/liangyou/liangyou02.jpg",59.90,null,4);
INSERT INTO mryx_product VALUES(null,'雪龙瑞斯 2018年新米上市 五常稻花香米5KG 五常东北大米 新米稻花香 实时监控 安全可追溯',"http://172.163.8.212:3000/img/liangyou/liangyou03.jpg",55.00,null,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 葵花籽清香型食用调和油5L/桶 人气爆款 含葵花籽油 价格实惠 新老包装 随机发货',"http://172.163.8.212:3000/img/liangyou/liangyou04.jpg",39.80,null,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 非转基因黄金比例食用调和油5L 食用油 新老包装 随机发货 营养丰富 非转基因',"http://172.163.8.212:3000/img/liangyou/liangyou05.jpg",69.80,null,4);
INSERT INTO mryx_product VALUES(null,'多力葵花籽油4L+5珍宝4L 超值组合食用油 认证升级 新老包装交替 非转基因',"http://172.163.8.212:3000/img/liangyou/liangyou06.jpg",105.90,null,4);
INSERT INTO mryx_product VALUES(null,'【千禾_零添加】酱油180天1.8L*2生抽+窖醋3年500ml厨房调味组合 好酱油零添加 生抽调味品 佐餐食用',"http://172.163.8.212:3000/img/liangyou/liangyou07.jpg",56.80,null,4);
INSERT INTO mryx_product VALUES(null,'李锦记薄盐生抽1750*2+味蚝鲜蚝油680薄盐酱油蚝油 囤货首选 少盐健康 鲜香浓郁',"http://172.163.8.212:3000/img/liangyou/liangyou08.jpg",39.90,null,4);
INSERT INTO mryx_product VALUES(null,'太太乐99度味精1000g 厨房调味品 家庭烹饪厨房',"http://172.163.8.212:3000/img/liangyou/liangyou09.jpg",19.80,null,4);
INSERT INTO mryx_product VALUES(null,'太太乐鸡精100g 调味品调味料 替代味精 三鲜鸡精',"http://172.163.8.212:3000/img/liangyou/liangyou10.jpg",4.90,null,4);