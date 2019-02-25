#所有商品的总表

#p_type指大类下划分的小类
#pro_type指整体的所属大类
USE mryx;
CREATE TABLE mryx_product(
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	img_url VARCHAR(255),
	price DECIMAL(18,2),
  p_type INT,
	pro_type INT
);

#所有的酒
INSERT INTO mryx_product VALUES(null,'贵州茅台53度茅台迎宾酒500mlx6瓶装 整箱酒厂直供 茅台迎宾酒 日常饮用酒',"/img/jiuyin/baijiu/baijiu01.jpg",588.00,1,3);
INSERT INTO mryx_product VALUES(null,'飞天茅台酒国产白酒43度500ml酱香型白酒自营正品 飞天茅台 国货匠心 官方授权 品质保障',"/img/jiuyin/baijiu/baijiu02.jpg",999.00,1,3);
INSERT INTO mryx_product VALUES(null,'52度剑南春 浓香型500ml*2瓶酒厂直供不参加任何活动 不参与天猫超市任何优惠券活动',"/img/jiuyin/baijiu/baijiu03.jpg",99.90,1,3);
INSERT INTO mryx_product VALUES(null,'牛栏山 46度白酒二锅头500mL*12整箱（绿瓶）装 清香型 正宗牛栏山 地道北京味',"/img/jiuyin/baijiu/baijiu04.jpg",85.00,1,3);
INSERT INTO mryx_product VALUES(null,'洋河梦之蓝M3-52度500ml 绵柔口感 浓香型白酒 猫超自营 2瓶以上送1个礼袋，需多个请分开下单',"/img/jiuyin/baijiu/baijiu05.jpg",499.00,1,3);
INSERT INTO mryx_product VALUES(null,'江小白白酒清香型40度JOYYOUTH150ml*6瓶整箱高粱酒 官方正品 酒厂直营 口感纯净 回味甘甜',"/img/jiuyin/baijiu/baijiu06.jpg",119.00,1,3);
INSERT INTO mryx_product VALUES(null,'泸州老窖特曲 52度 500mL浓香型 高度 白酒 甄选好酒好货，品牌直供',"/img/jiuyin/baijiu/baijiu07.jpg",238.00,1,3);
INSERT INTO mryx_product VALUES(null,'52度五粮液股份1918珍品浓香型国产高度白酒500ml婚宴送礼用酒',"/img/jiuyin/baijiu/baijiu08.jpg",199.00,1,3);
INSERT INTO mryx_product VALUES(null,'古井贡酒年份原浆献礼50度500ml*6浓香型白酒整箱 天猫自营 百城次日达',"/img/jiuyin/baijiu/baijiu09.jpg",624.00,1,3);
INSERT INTO mryx_product VALUES(null,'汾酒集团53度一坛香珍藏1988清香白酒单瓶装 系出名门 品质保证',"/img/jiuyin/baijiu/baijiu10.jpg",78.00,1,3);
INSERT INTO mryx_product VALUES(null,'茅台赖茅传承蓝53度500ml*6酱香型白酒厂家直供 赖茅不赖 酱香型酒',"/img/jiuyin/baijiu/baijiu11.jpg",2060.00,1,3);
INSERT INTO mryx_product VALUES(null,'郎酒 郎牌郎酒 53度500ml*6瓶酱香型白酒原箱发货酒厂直供',"/img/jiuyin/baijiu/baijiu12.jpg",1068.00,1,3);

INSERT INTO mryx_product VALUES(null,'致中和 家饮五加皮酒整箱装500ml*12瓶 百年草本调养 家饮 五加皮',"/img/jiuyin/baojianjiu/baojianjiu01.jpg",145.00,2,3);
INSERT INTO mryx_product VALUES(null,'致中和牌五加皮酒 500ml/瓶 家饮 中华老字号 每天喝一点儿',"/img/jiuyin/baojianjiu/baojianjiu02.jpg",14.90,2,3);
INSERT INTO mryx_product VALUES(null,'致中和中华老字号保健字五加皮酒500ml*2瓶年货礼盒 致中和 五加皮 精美礼盒',"/img/jiuyin/baojianjiu/baojianjiu03.jpg",75.00,2,3);
INSERT INTO mryx_product VALUES(null,'椰岛牌鹿龟酒 500ml/瓶*7瓶套餐保健酒 老字号保健酒 抗疲劳免疫调节',"/img/jiuyin/baojianjiu/baojianjiu04.jpg",248.00,2,3);
INSERT INTO mryx_product VALUES(null,'椰岛牌鹿龟酒 500ml/瓶*2瓶 老字号保健酒礼盒装 抗疲劳 免疫调节',"/img/jiuyin/baojianjiu/baojianjiu05.jpg",138.00,2,3);
INSERT INTO mryx_product VALUES(null,'致中和 老底子五加皮酒坛装 500ml/坛*4坛保健酒礼盒装黄酒药酒',"/img/jiuyin/baojianjiu/baojianjiu06.jpg",265.00,2,3);

INSERT INTO mryx_product VALUES(null,'古越龙山绍兴黄酒清醇三年500ml*12瓶花雕酒整箱糯米酒泡阿胶 厂家直供，线下标品、经典款',"/img/jiuyin/huangjiu/huangjiu01.jpg",128.00,3,3);
INSERT INTO mryx_product VALUES(null,'古越龙山绍兴黄酒清醇三年500ml*6瓶装花雕酒礼盒装糯米酒泡阿胶 古越龙山 厂家直销 热销产品 品质保证',"/img/jiuyin/huangjiu/huangjiu02.jpg",65.00,3,3);
INSERT INTO mryx_product VALUES(null,'古越龙山绍兴黄酒 库藏金五年500ml*6瓶礼盒整箱 花雕酒 厂方直销 线下标品 自饮佳品 送礼优选',"/img/jiuyin/huangjiu/huangjiu03.jpg",129.00,3,3);
INSERT INTO mryx_product VALUES(null,'会稽山绍兴黄酒纯正五年500ml*8瓶整箱装花雕加饭酒 会稽山 八瓶装',"/img/jiuyin/huangjiu/huangjiu04.jpg",170.00,3,3);
INSERT INTO mryx_product VALUES(null,'第2箱半价塔牌绍兴花雕手工黄酒清醇三年500ml*6瓶箱装礼盒泡阿胶',"/img/jiuyin/huangjiu/huangjiu05.jpg",64.00,3,3);
INSERT INTO mryx_product VALUES(null,'咸亨绍兴黄酒 御雕半甜型老酒500ml*12瓶整箱糯米酒花雕酒 12瓶大包装',"/img/jiuyin/huangjiu/huangjiu06.jpg",259.00,3,3);
INSERT INTO mryx_product VALUES(null,'绍兴花雕黄酒会稽山宋法纯正三年1斤装8瓶整箱礼盒装 会稽山 宋法原造',"/img/jiuyin/huangjiu/huangjiu07.jpg",85.00,3,3);
INSERT INTO mryx_product VALUES(null,'和酒 金色年华五年陈 500ml*6/整箱 海派黄酒老酒 和酒 金色年华 5年陈 黄酒',"/img/jiuyin/huangjiu/huangjiu08.jpg",148.00,3,3);
INSERT INTO mryx_product VALUES(null,'塔牌375ml*6瓶牡丹丽春箱装礼盒八年陈酿特型手工冬酿绍兴黄酒 添加枸杞龙眼 中华老字号 酒厂直供',"/img/jiuyin/huangjiu/huangjiu09.jpg",168.00,3,3);
INSERT INTO mryx_product VALUES(null,'女儿红绍兴黄酒 珍藏冬酿3L老酒6斤大坛装糯米花雕酒 厂方直销 送礼自饮 6斤大坛装',"/img/jiuyin/huangjiu/huangjiu10.jpg",208.00,3,3);
INSERT INTO mryx_product VALUES(null,'会稽山纯正绍兴黄酒保质期五年1斤装5瓶整箱装花雕酒礼盒装 会稽山 宋法原造',"/img/jiuyin/huangjiu/huangjiu11.jpg",45.00,3,3);
INSERT INTO mryx_product VALUES(null,'石库门 红标 500ml*6/整箱 海派黄酒上海老酒 石库门 红标 黄酒',"/img/jiuyin/huangjiu/huangjiu12.jpg",117.00,3,3);

INSERT INTO mryx_product VALUES(null,'Corona/科罗娜啤酒墨西哥进口330ml*24瓶整箱礼盒装 畅饮北美百年风情',"/img/jiuyin/pijiu/pijiu01.jpg",178.00,4,3);
INSERT INTO mryx_product VALUES(null,'Budweiser/百威啤酒小麦醇正拉罐500ml*18听整箱礼盒装 原包装、世界杯定制包装随机发货',"/img/jiuyin/pijiu/pijiu02.jpg",109.00,4,3);
INSERT INTO mryx_product VALUES(null,'Budweiser/百威啤酒经典美式拉格600ml*12瓶整箱礼盒装',"/img/jiuyin/pijiu/pijiu03.jpg",79.00,4,3);
INSERT INTO mryx_product VALUES(null,'Harbin/哈尔滨啤酒小麦王拉罐500ml*18听整箱礼盒装 凝聚麦香精华',"/img/jiuyin/pijiu/pijiu04.jpg",56.90,4,3);
INSERT INTO mryx_product VALUES(null,'【第2件半价】Budweiser/百威金尊啤酒500ml*12瓶 礼盒装',"/img/jiuyin/pijiu/pijiu05.jpg",168.00,4,3);
INSERT INTO mryx_product VALUES(null,'瓦伦丁德国原装进口小麦啤酒500ml*24整箱装麦香浓郁 优质原料 纯麦芽酿制 泡沫丰富持久',"/img/jiuyin/pijiu/pijiu06.jpg",119.00,4,3);
INSERT INTO mryx_product VALUES(null,'Budweiser/百威啤酒小麦纯生拉罐330ml*24听整箱礼盒装',"/img/jiuyin/pijiu/pijiu07.jpg",129.00,4,3);
INSERT INTO mryx_product VALUES(null,'青岛啤酒 冰醇易拉罐500ml*12/听青岛整箱大罐装 青岛啤酒 冰醇整箱 大罐装',"/img/jiuyin/pijiu/pijiu08.jpg",38.80,4,3);
INSERT INTO mryx_product VALUES(null,'Harbin/哈尔滨啤酒冰爽拉罐330ml*24听整箱礼盒装 击溃酷热冰爽一夏',"/img/jiuyin/pijiu/pijiu09.jpg",47.90,4,3);
INSERT INTO mryx_product VALUES(null,'喜力Heineken拉罐啤酒500ml*24罐/箱 分享装 整箱装 泡沫细腻 清新爽口',"/img/jiuyin/pijiu/pijiu10.jpg",149.00,4,3);
INSERT INTO mryx_product VALUES(null,'爱士堡德国进口小麦啤酒整箱500ml*24聚会必备 德国进口啤酒 泡沫饱满 口味醇厚',"/img/jiuyin/pijiu/pijiu11.jpg",109.00,4,3);
INSERT INTO mryx_product VALUES(null,'Asahi/朝日啤酒 超爽系列 罐装 500ml*24罐/箱 日式 【超爽系列 品质啤酒】',"/img/jiuyin/pijiu/pijiu12.jpg",148.00,4,3);

INSERT INTO mryx_product VALUES(null,'澳洲进口红酒奔富洛神山庄赤霞珠干红葡萄酒整箱6支装 澳大利亚 原瓶进口',"/img/jiuyin/putaojiu/putaojiu01.jpg",256.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕特选级干红葡萄酒（圆筒）750ml*6红酒正品',"/img/jiuyin/putaojiu/putaojiu02.jpg",389.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕 红酒优选级赤霞珠 干红葡萄酒750ml*6整箱 【百年张裕 国货精品 正品保障】',"/img/jiuyin/putaojiu/putaojiu03.jpg",258.00,5,3);
INSERT INTO mryx_product VALUES(null,'澳洲原瓶进口 黄尾袋鼠 西拉半干红葡萄酒750ml*6 年份随机 口感顺滑 搭配肉类 熟红梅味 辛香料味',"/img/jiuyin/putaojiu/putaojiu04.jpg",258.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕 红酒特选级干红(圆筒)750ml*2礼盒装葡萄酒 【双支特惠 内含礼袋1 送礼佳品】',"/img/jiuyin/putaojiu/putaojiu05.jpg",118.00,5,3);
INSERT INTO mryx_product VALUES(null,'法国进口红酒 拉菲传奇波尔多红葡萄酒 AOC 750ml独家代理 ASC 进口拉菲传奇波尔多红AOC750ml',"/img/jiuyin/putaojiu/putaojiu06.jpg",89.00,5,3);
INSERT INTO mryx_product VALUES(null,'澳洲原瓶进口 黄尾袋鼠 西拉半干红葡萄酒 750ml/瓶 年份随机 口感顺滑 搭配肉类 熟红莓味 辛香料味',"/img/jiuyin/putaojiu/putaojiu07.jpg",49.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕特选级干红葡萄酒（圆筒）750ml*6红酒正品',"/img/jiuyin/putaojiu/putaojiu08.jpg",389.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕玫瑰红 甜葡萄酒红酒 葡萄酒750mL*6 整箱装',"/img/jiuyin/putaojiu/putaojiu09.jpg",188.00,5,3);
INSERT INTO mryx_product VALUES(null,'张裕红酒特选级干红葡萄酒（ 圆筒）750ml葡萄酒 百年张裕，国货精品',"/img/jiuyin/putaojiu/putaojiu10.jpg",69.00,5,3);
INSERT INTO mryx_product VALUES(null,'拉菲红酒原瓶进口智利巴斯克理德干红葡萄酒 750ml*2支 拉菲巴斯克酒庄出品 品质保证 官方正品',"/img/jiuyin/putaojiu/putaojiu11.jpg",158.00,5,3);
INSERT INTO mryx_product VALUES(null,'澳洲原装进口红酒奔富洛神山庄梅洛干红葡萄酒750ml 原装进口 澳大利亚经典',"/img/jiuyin/putaojiu/putaojiu12.jpg",66.00,5,3);

INSERT INTO mryx_product VALUES(null,'RIO伏特加鸡尾酒 锐澳微醺系列5口味 330ml*8 新微醺5口味',"/img/jiuyin/yangjiu/yangjiu01.jpg",46.00,6,3);
INSERT INTO mryx_product VALUES(null,'Chivas/芝华士12年苏格兰威士忌500ml英国进口洋酒烈酒 英国原装 进口洋酒 陈酿12年',"/img/jiuyin/yangjiu/yangjiu02.jpg",139.00,6,3);
INSERT INTO mryx_product VALUES(null,'梅乃宿梅酒720ml 日本原装进口 梅子酒青梅酒 女士果酒甜酒梅酒 日本原装进口',"/img/jiuyin/yangjiu/yangjiu03.jpg",178.00,6,3);
INSERT INTO mryx_product VALUES(null,'RIO伏特加鸡尾酒 锐澳微醺3.8度缤纷6瓶装275ml*6 RIO鸡尾酒 缤纷6瓶',"/img/jiuyin/yangjiu/yangjiu04.jpg",74.00,6,3);
INSERT INTO mryx_product VALUES(null,'【超定制】RIO微醺鸡尾酒10罐定制礼盒',"/img/jiuyin/yangjiu/yangjiu05.jpg",65.00,6,3);
INSERT INTO mryx_product VALUES(null,'CHOYA/俏雅梅酒1800ml 青梅果味酒 日式蝶矢梅酒 洋酒',"/img/jiuyin/yangjiu/yangjiu06.jpg",116.00,6,3);
INSERT INTO mryx_product VALUES(null,'韩国进口真露竹炭酒20.1VOL 360ml 韩国烧酒清酒 看韩剧喝烧酒 真露清酒 自斟自饮',"/img/jiuyin/yangjiu/yangjiu07.jpg",13.90,6,3);
INSERT INTO mryx_product VALUES(null,'Ballantines百龄坛苏格兰特醇威士忌500ml原装进口洋酒烈酒 英国原装 进口洋酒 知名产区',"/img/jiuyin/yangjiu/yangjiu08.jpg",69.00,6,3);
INSERT INTO mryx_product VALUES(null,'灰雁（Grey Goose）伏特加法国进口40度洋酒750ml 层层递进的味觉感触',"/img/jiuyin/yangjiu/yangjiu09.jpg",219.00,6,3);
INSERT INTO mryx_product VALUES(null,'CHOYA/俏雅梅酒青梅果味酒160ml*4日式蝶矢梅酒 洋酒 【新配方 更香醇 梅味可口】',"/img/jiuyin/yangjiu/yangjiu10.jpg",72.00,6,3);
INSERT INTO mryx_product VALUES(null,'RIO伏特加鸡尾酒 锐澳微醺 乳酸菌伏特加风味330ml*6 RIO微醺乳酸菌伏特加风味',"/img/jiuyin/yangjiu/yangjiu11.jpg",36.00,6,3);
INSERT INTO mryx_product VALUES(null,'CHOYA/俏雅梅酒熟成梅酒720ml日本原装进口蝶矢梅酒 洋酒 日本原装进口，适合女士的梅酒',"/img/jiuyin/yangjiu/yangjiu12.jpg",158.00,6,3);

#百年
INSERT INTO mryx_product VALUES(null,'滴露 免洗洗手液 经典松木200ml 常用装 抑菌 方便 无需水洗',"/img/baihuo/baihuo01.jpg",28.90,1,1);
INSERT INTO mryx_product VALUES(null,'【超定制】滴露 皮肤衣物家居消毒液1.8L*2+800g洗手液套装',"/img/baihuo/baihuo02.jpg",109.90,1,1);
INSERT INTO mryx_product VALUES(null,'滴露衣物消毒液 经典松木衣物除菌液3L*2 深层杀菌',"/img/baihuo/baihuo03.jpg",99.90,1,1);
INSERT INTO mryx_product VALUES(null,'潘婷洗发水/露750ml 丝质顺滑型男女士柔顺滋润家庭装正品 新老包装 随机发货',"/img/baihuo/baihuo04.jpg",39.80,4,1);
INSERT INTO mryx_product VALUES(null,'潘婷无硅油黑炭能量水洗发水300mlx2+300ml护发素+送300ml',"/img/baihuo/baihuo05.jpg",99.90,4,1);
INSERT INTO mryx_product VALUES(null,'正品进口爱茉莉紫吕控油韧发密集强韧洗发水(油性头皮)男女 400ML 深层滋养强韧秀发',"/img/baihuo/baihuo06.jpg",97.00,4,1);
INSERT INTO mryx_product VALUES(null,'汰渍洗衣粉 持久清洁净白去渍专用柠檬清新型5kg袋装 超值10斤 柠檬清新 强劲去油渍污渍',"/img/baihuo/baihuo07.jpg",39.90,1,1);
INSERT INTO mryx_product VALUES(null,'立白茶籽洗衣液2kg*2+1kg*2/箱除菌除螨一步到位',"/img/baihuo/baihuo08.jpg",99.00,1,1);
INSERT INTO mryx_product VALUES(null,'超能双离子洗衣液(焕彩新生)1.5kg+500g*8囤货整箱装',"/img/baihuo/baihuo09.jpg",59.90,1,1);
INSERT INTO mryx_product VALUES(null,'碧浪洗衣液家庭装套装清雅茉莉3kg*2+送机洗1.6kg正品 超值15斤 囤货疯抢',"/img/baihuo/baihuo10.jpg",99.90,1,1);
INSERT INTO mryx_product VALUES(null,'黑人牙膏超白茶家庭套装190g*4支美白去黄去牙渍清新茶倍健去口气 人气爆款 超值大包装760G',"/img/baihuo/baihuo11.jpg",49.90,2,1);
INSERT INTO mryx_product VALUES(null,'舒适达抗敏感牙膏4支装 劲速多效护理牙龈护理薄荷 速效抗敏 多效护理 保护牙龈 清新口气',"/img/baihuo/baihuo12.jpg",106.80,2,1);
INSERT INTO mryx_product VALUES(null,'茶花易用衣架家用阳台晒衣架凉衣架室内塑料无痕撑衣架5只装 品质生活 成人衣架 颜色随机',"/img/baihuo/baihuo13.jpg",12.90,null,1);
INSERT INTO mryx_product VALUES(null,'顺艺衣架护领衣架10只装塑料衣架防滑小领口晾晒衣架子衣服撑子',"/img/baihuo/baihuo14.jpg",15.90,null,1);
INSERT INTO mryx_product VALUES(null,'乐宜美衣架塑料晒架18夹防风多夹子晾衣架晾晒内衣裤袜晾衣夹子 颜色随机',"/img/baihuo/baihuo15.jpg",10.90,null,1);
INSERT INTO mryx_product VALUES(null,'高露洁适齿多效牙刷4支大包装 软毛含炭 去除细菌深入清洁牙缝 超值2+2装',"/img/baihuo/baihuo16.jpg",9.90,2,1);
INSERT INTO mryx_product VALUES(null,'纳美 纳米牙刷 情侣成人软毛牙刷家庭装牙刷3支新老包装颜色随机 纳美牙刷 呵护家人口腔',"/img/baihuo/baihuo17.jpg",12.90,3,1);
INSERT INTO mryx_product VALUES(null,'妙洁一次性杯子塑杯航空杯水杯茶杯100只240ml 饮料杯 胶杯 食品级PP 安全增厚',"/img/baihuo/baihuo18.jpg",9.90,null,1);
INSERT INTO mryx_product VALUES(null,'妙洁一次性杯子 纸杯大号250ml*80只装增厚商务杯 耐高温 不渗透 无荧光漂白 聚会野炊烧烤',"/img/baihuo/baihuo19.jpg",15.51,null,1);

#火锅
INSERT INTO mryx_product VALUES(null,'【海底捞】麻辣嫩牛清油香辣自煮火锅自热方便懒人即食小火锅435g',"/img/hot_pot/hot_pot01.jpg",35.90,3,2);
INSERT INTO mryx_product VALUES(null,'自嗨锅微麻微辣肥牛自热小火锅自煮方便速食即食懒人自热火锅171g',"/img/hot_pot/hot_pot02.jpg",35.80,3,2);
INSERT INTO mryx_product VALUES(null,'【海底捞】麻辣番茄牛油自热火锅自煮火锅-共4盒',"/img/hot_pot/hot_pot03.jpg",129.00,1,2);
INSERT INTO mryx_product VALUES(null,'德庄 自煮微火锅422g麻辣自热火锅方便速食小火锅麻辣烫 懒人火锅 天猫定制版颜值爆品，人气网红达人直播推荐',"/img/hot_pot/hot_pot04.jpg",29.90,2,2);
INSERT INTO mryx_product VALUES(null,'德庄麻辣微火锅430g自热火锅方便速食懒人小火锅重庆特产自煮食品 冷水冲泡，快速自热，荤素搭配，性价比高',"/img/hot_pot/hot_pot05.jpg",23.80,2,2);
INSERT INTO mryx_product VALUES(null,'【小龙坎】方便火锅麻辣牛杂懒人速食小火锅自热麻辣自煮火锅398g 麻辣小火锅',"/img/hot_pot/hot_pot06.jpg",36.80,2,2);
INSERT INTO mryx_product VALUES(null,'【下单立减5】良品铺子燃火锅210g自煮便携速食自热懒人网红火锅',"/img/hot_pot/hot_pot07.jpg",33.90,3,2);
INSERT INTO mryx_product VALUES(null,'筷时尚牛杂自热小火锅450g麻辣速食方便自煮新老包装 四川风味 麻辣鲜香 加蛋精品装 自热方便',"/img/hot_pot/hot_pot08.jpg",25.80,1,2);
INSERT INTO mryx_product VALUES(null,'柳全柳州螺蛳粉自热自煮215g懒人小微火锅柳全食品方便粉丝酸辣粉 地道柳州味 内含大螺肉',"/img/hot_pot/hot_pot09.jpg",15.80,3,2);
INSERT INTO mryx_product VALUES(null,'美好自热火锅 微辣特辣组合940g牛肉自煮方便火锅 速食懒人小火锅 ',"/img/hot_pot/hot_pot10.jpg",48.5,3,2);

#粮油
INSERT INTO mryx_product VALUES(null,'金龙鱼 苏北大米软香稻 10kg 绵软香醇 江南味道 射阳大米 热销爆款',"/img/liangyou/liangyou01.jpg",54.80,4,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 盘锦大米 蟹稻共生10kg 东北大米 人气爆款 蟹稻共生 晶莹饱满 热销爆款',"/img/liangyou/liangyou02.jpg",59.90,4,4);
INSERT INTO mryx_product VALUES(null,'雪龙瑞斯 2018年新米上市 五常稻花香米5KG 五常东北大米 新米稻花香 实时监控 安全可追溯',"/img/liangyou/liangyou03.jpg",55.00,4,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 葵花籽清香型食用调和油5L/桶 人气爆款 含葵花籽油 价格实惠 新老包装 随机发货',"/img/liangyou/liangyou04.jpg",39.80,2,4);
INSERT INTO mryx_product VALUES(null,'金龙鱼 非转基因黄金比例食用调和油5L 食用油 新老包装 随机发货 营养丰富 非转基因',"/img/liangyou/liangyou05.jpg",69.80,2,4);
INSERT INTO mryx_product VALUES(null,'多力葵花籽油4L+5珍宝4L 超值组合食用油 认证升级 新老包装交替 非转基因',"/img/liangyou/liangyou06.jpg",105.90,2,4);
INSERT INTO mryx_product VALUES(null,'【千禾_零添加】酱油180天1.8L*2生抽+窖醋3年500ml厨房调味组合 好酱油零添加 生抽调味品 佐餐食用',"/img/liangyou/liangyou07.jpg",56.80,2,4);
INSERT INTO mryx_product VALUES(null,'李锦记薄盐生抽1750*2+味蚝鲜蚝油680薄盐酱油蚝油 囤货首选 少盐健康 鲜香浓郁',"/img/liangyou/liangyou08.jpg",39.90,3,4);
INSERT INTO mryx_product VALUES(null,'李锦记薄盐生抽1750*2+味蚝鲜蚝油680薄盐酱油蚝油 囤货首选 少盐健康 鲜香浓郁',"/img/liangyou/liangyou08.jpg",39.90,3,4);
INSERT INTO mryx_product VALUES(null,'李锦记薄盐生抽1750*2+味蚝鲜蚝油680薄盐酱油蚝油 囤货首选 少盐健康 鲜香浓郁',"/img/liangyou/liangyou08.jpg",39.90,3,4);
INSERT INTO mryx_product VALUES(null,'太太乐99度味精1000g 厨房调味品 家庭烹饪厨房',"/img/liangyou/liangyou09.jpg",19.80,1,4);
INSERT INTO mryx_product VALUES(null,'太太乐鸡精100g 调味品调味料 替代味精 三鲜鸡精',"/img/liangyou/liangyou10.jpg",4.90,1,4);

#零食
INSERT INTO mryx_product VALUES(null,'大白兔 原味奶糖454g/袋 童年的味道 休闲零食 奶糖 儿童节必备小零食 今日下单 次日送达',"/img/lingshi/lingshi01.jpg",29.90,4,5);
INSERT INTO mryx_product VALUES(null,'阿尔卑斯散装硬糖1kg混合口味喜糖批发 聚会糖果',"/img/lingshi/lingshi02.jpg",43.50,4,5);
INSERT INTO mryx_product VALUES(null,'旺旺 旺仔牛奶糖 500g原味糖果零食满月婚庆休闲软糖',"/img/lingshi/lingshi03.jpg",24.10,4,5);
INSERT INTO mryx_product VALUES(null,'Dove/德芙丝滑牛奶巧克力252g碗装甜蜜糖巧休闲零食 非凡口感 入口即化 优质奶源',"/img/lingshi/lingshi04.jpg",29.90,2,5);
INSERT INTO mryx_product VALUES(null,'蜡笔小新麦丽素20g*20袋圣诞礼物巧克力豆怀旧小零食 童年回忆',"/img/lingshi/lingshi05.jpg",39.90,2,5);
INSERT INTO mryx_product VALUES(null,'Dove/德芙丝滑牛奶巧克力252g碗装甜蜜糖巧休闲零食 非凡口感 入口即化 优质奶源',"/img/lingshi/lingshi04.jpg",29.90,2,5);
INSERT INTO mryx_product VALUES(null,'蜡笔小新麦丽素20g*20袋圣诞礼物巧克力豆怀旧小零食 童年回忆',"/img/lingshi/lingshi05.jpg",39.90,2,5);
INSERT INTO mryx_product VALUES(null,'乐事无限薯片三连罐104g*3罐休闲食品零食小吃礼包膨化',"/img/lingshi/lingshi06.jpg",20.90,3,5);
INSERT INTO mryx_product VALUES(null,'三只松鼠 巨型零食大礼包抖音网红一整箱30包猪饲料',"/img/lingshi/lingshi07.jpg",180.00,1,5);
INSERT INTO mryx_product VALUES(null,'旺旺 大米饼 1kg 膨化零食 薯片饼干糕点 零食礼物',"/img/lingshi/lingshi08.jpg",39.90,3,5);
INSERT INTO mryx_product VALUES(null,'三只松鼠 开口松子218g坚果炒货东北手剥红松子 松香清新，果粒饱满',"/img/lingshi/lingshi09.jpg",24.90,1,5);
INSERT INTO mryx_product VALUES(null,'港荣蒸蛋糕整箱芝士吐司口袋小面包营养早餐零食品糕点心大礼包 蒸烤工艺 芝士蒸蛋糕',"/img/lingshi/lingshi10.jpg",39.80,3,5);
INSERT INTO mryx_product VALUES(null,'好想你红枣夹核桃仁218gx2袋新疆和田骏枣夹心 枣夹整颗核桃',"/img/lingshi/lingshi11.jpg",37.80,null,5);
INSERT INTO mryx_product VALUES(null,'三只松鼠 每日坚果750g/30天装混合坚果礼盒网红年货坚果大礼包',"/img/lingshi/lingshi12.jpg",149.00,1,5);

#乳品
INSERT INTO mryx_product VALUES(null,'明治风味酸乳(黄桃果肉)100g*4 乳品 酸奶 明治酸奶 黄桃酸奶 酸度柔和 奶味浓郁',"/img/rupin/rupin01.jpg",18.70,1,6);
INSERT INTO mryx_product VALUES(null,'蒙牛纯牛奶PURE MILK250ml*16盒 品质升级 只为点滴幸福',"/img/rupin/rupin02.jpg",36.90,2,6);
INSERT INTO mryx_product VALUES(null,'蒙牛纯牛奶250ml*16盒好牛奶自然纯四维突破纯升级 新老包装随机发货',"/img/rupin/rupin03.jpg",40.80,2,6);
INSERT INTO mryx_product VALUES(null,'蒙牛特仑苏纯牛奶250ml*16盒营养升级 专属牧场 新老包装随机发货',"/img/rupin/rupin04.jpg",68.90,2,6);
INSERT INTO mryx_product VALUES(null,'伊利 金典有机纯牛奶250ml*12盒 专属有机营养早餐纯牛奶 新老包装 交替发货 专属有机牧场',"/img/rupin/rupin05.jpg",59.90,2,6);
INSERT INTO mryx_product VALUES(null,'新西兰原装进口牛奶纽仕兰低脂纯牛奶250ml*24盒部分脱脂牛奶 牧场直供 新鲜奶源 自然放牧 自然产奶',"/img/rupin/rupin06.jpg",72.00,2,6);
INSERT INTO mryx_product VALUES(null,'德国原装进口 Arla爱氏晨曦脱脂纯牛奶200ml*24盒 始于1881 皇室御用 欧洲进口',"/img/rupin/rupin07.jpg",59.00,2,6);
INSERT INTO mryx_product VALUES(null,'维维 维他型豆奶粉 760g/袋 内含小包 营养早餐 营养早餐食品 欢乐开怀',"/img/rupin/rupin08.jpg",29.50,4,6);
INSERT INTO mryx_product VALUES(null,'新希望酸牛奶airsnow轻爱酸奶200g*12盒轻质感酸奶 轻质感酸奶 口感更清爽 不添加 防腐剂香精等',"/img/rupin/rupin09.jpg",49.90,3,6);
INSERT INTO mryx_product VALUES(null,'维维维他型豆奶粉320g+黑木崖棒斯基吮指蛋糕388g营养早餐糕点 营养早餐搭档',"/img/rupin/rupin10.jpg",49.80,4,6);
INSERT INTO mryx_product VALUES(null,'福事多醇香豆奶粉510g（30gx17小袋装）早餐速溶冲饮',"/img/rupin/rupin11.jpg",29.90,4,6);
INSERT INTO mryx_product VALUES(null,'维维豆奶粉460g+萌萌星酸奶布丁75g*2杯装',"/img/rupin/rupin12.jpg",35.90,4,6);
INSERT INTO mryx_product VALUES(null,'蒙牛真果粒礼盒装250g*24盒 四种口味一箱尽享 新老包装随机发货',"/img/rupin/rupin13.jpg",59.90,1,6);
INSERT INTO mryx_product VALUES(null,'娃哈哈 AD钙奶220g*24瓶/箱儿童含乳饮料情怀饮品新老包装随机发',"/img/rupin/rupin14.jpg",39.80,3,6);
INSERT INTO mryx_product VALUES(null,'维他奶 巧克力味250ml*16盒/箱口感顺滑新旧包装随机发货',"/img/rupin/rupin15.jpg",38.50,4,6);
INSERT INTO mryx_product VALUES(null,'娃哈哈 爽歪歪营养酸奶200g*24/箱 酸奶饮品 益生菌发酵',"/img/rupin/rupin16.jpg",49.90,3,6);
INSERT INTO mryx_product VALUES(null,'伊利 谷粒多黑谷谷物牛奶250ml*12盒 黑豆黑米谷物牛奶饮品 新老包装交替发货 醇香牛奶',"/img/rupin/rupin17.jpg",24.90,1,6);
INSERT INTO mryx_product VALUES(null,'旺旺 旺仔牛奶 乳酸菌 125ml*20盒 牛奶16+乳酸菌4',"/img/rupin/rupin18.jpg",34.50,3,6);
INSERT INTO mryx_product VALUES(null,'Jelley Brown/界界乐乳酸菌原味100ml*20瓶分享装',"/img/rupin/rupin19.jpg",52.90,3,6);
INSERT INTO mryx_product VALUES(null,'光明莫斯利安原味酸奶200g*24盒家庭装巴氏杀菌',"/img/rupin/rupin20.jpg",79.90,1,6);
INSERT INTO mryx_product VALUES(null,'伊利 安慕希原味酸奶 205g*12+4盒 营养早餐酸奶 新老包装 交替发货 甄选品质',"/img/rupin/rupin21.jpg",68.90,2,6);
INSERT INTO mryx_product VALUES(null,'光明莫斯利安2果3蔬酸牛奶红果135g*18新老包装随机发货',"/img/rupin/rupin22.jpg",49.90,2,6);
INSERT INTO mryx_product VALUES(null,'伊利安慕希风味酸奶230g*10瓶高端畅饮型发酵乳早餐酸奶 高端畅饮系列 新老包装交替发货',"/img/rupin/rupin23.jpg",76.90,1,6);
INSERT INTO mryx_product VALUES(null,'三元冰岛式酸奶200g*24盒/箱[新老包装随机发]高蛋白',"/img/rupin/rupin24.jpg",64.90,1,6);
INSERT INTO mryx_product VALUES(null,'德国进口酸奶 德亚酸牛奶200ml*15盒 营养早餐常温原味酸奶箱装 德国进口 黄金奶源带 知名荷斯坦牛',"/img/rupin/rupin25.jpg",59.90,1,6);

#蔬菜
INSERT INTO mryx_product VALUES(null,'易家菜园山东紫薯500g/包番薯 小紫薯 新鲜紫薯仔 软糯香甜 芋头之乡',"/img/shucai/shucai10.jpg",11.80,1,7);
INSERT INTO mryx_product VALUES(null,'精选富硒贝贝南瓜1.2kg 300-400g/个 新鲜蔬菜',"/img/shucai/shucai09.jpg",65.80,3,7);
INSERT INTO mryx_product VALUES(null,'易家菜园土豆500g/包 马铃薯 洋山芋 新鲜蔬菜',"/img/shucai/shucai08.jpg",33.80,4,7);
INSERT INTO mryx_product VALUES(null,'轩尧菜心500g 菜心 蔬菜 包装蔬菜 冷冻蔬菜 口感甜糯 均衡营养',"/img/shucai/shucai07.jpg",13.80,null,7);
INSERT INTO mryx_product VALUES(null,'大昌食品纯正美国杂菜200g 青豆玉米粒速冻混合蔬菜粒美式杂菜',"/img/shucai/shucai06.jpg",6.90,null,7);
INSERT INTO mryx_product VALUES(null,'胡萝卜600g 烧烤 蔬菜 辅食 新鲜蔬菜 红萝卜',"/img/shucai/shucai05.jpg",7.90,null,7);
INSERT INTO mryx_product VALUES(null,'大昌食品纯正新西兰甜青豆400g 豆类 冷冻蔬菜 包装蔬菜',"/img/shucai/shucai04.jpg",11.90,null,7);
INSERT INTO mryx_product VALUES(null,'哈东金有机速冻鲜糯玉米(白)礼盒装280g*6支 有机蔬菜 速冻蔬菜 粘糯鲜香',"/img/shucai/shucai03.jpg",4.80,5,7);
INSERT INTO mryx_product VALUES(null,'河南温县铁棍山药3kg 新鲜蔬菜 山药 温县山药 包装蔬菜 香糯爽口',"/img/shucai/shucai02.jpg",22.90,4,7);
INSERT INTO mryx_product VALUES(null,'轩尧香糯芋艿450g 芋艿 蔬菜 包装蔬菜 冷冻蔬菜 口感香糯 家常百搭',"/img/shucai/shucai01.jpg",9.90,1,7);

#水产
INSERT INTO mryx_product VALUES(null,'原膳南美白虾仁(中)250g*2 海鲜 水产 冷冻虾仁生鲜 去除虾线 急冻锁鲜',"/img/shuichan/shuichan01.jpg",45.00,3,8);
INSERT INTO mryx_product VALUES(null,'鲜美来东海带鱼600g 海鲜 水产 带鱼新鲜 鲜活 带鱼段',"/img/shuichan/shuichan02.jpg",19.80,2,8);
INSERT INTO mryx_product VALUES(null,'阿根廷红虾(L2)2kg 海鲜 水产 进口虾 红虾 整虾生鲜 大口吃虾 大大满足',"/img/shuichan/shuichan03.jpg",158.00,3,8);
INSERT INTO mryx_product VALUES(null,'獐子岛蒜蓉粉丝扇贝(速冻生制)200g(6枚装) 扇贝肉 贝类海鲜水产',"/img/shuichan/shuichan04.jpg",17.90,4,8);
INSERT INTO mryx_product VALUES(null,'越南冷冻巴沙鱼片280g 海鲜 水产 鱼片 鱼肉酸菜鱼 肉质细腻 嫩滑不老',"/img/shuichan/shuichan05.jpg",14.80,null,8);
INSERT INTO mryx_product VALUES(null,'鲜美来火锅八爪鱼200g 海鲜水产 八爪鱼 火锅食材 嚼劲十足 味道鲜美',"/img/shuichan/shuichan06.jpg",29.80,5,8);
INSERT INTO mryx_product VALUES(null,'原膳舟山白鲳(1条装)80g 鲳鱼 海鲜水产',"/img/shuichan/shuichan07.jpg",9.90,null,8);
INSERT INTO mryx_product VALUES(null,'鲜美来火锅鱿鱼须200g 火锅食材 海鲜水产 船冻鱿鱼 嚼劲十足 口感筋道',"/img/shuichan/shuichan08.jpg",29.80,5,8);
INSERT INTO mryx_product VALUES(null,'GUOLIAN国联黄花鱼(2条装)700g 黄鱼海鱼新鲜冷冻海鲜水产',"/img/shuichan/shuichan09.jpg",49.90,null,8);
INSERT INTO mryx_product VALUES(null,'智利三文鱼头(整只)300g 海鲜水产 煲汤食材 鱼肉',"/img/shuichan/shuichan10.jpg",9.90,1,8);

#水果
INSERT INTO mryx_product VALUES(null,'Zespri佳沛新西兰阳光金奇异果3.3kg原箱(27-30个)猕猴桃水果新鲜 果汁丰沛 甜蜜清爽',"/img/shuiguo/shuiguo01.jpg",189.00,3,9);
INSERT INTO mryx_product VALUES(null,'福建琯溪红心蜜柚2个约1kg/个 管溪蜜柚红肉柚子水果 酸甜',"/img/shuiguo/shuiguo02.jpg",19.90,6,9);
INSERT INTO mryx_product VALUES(null,'山东栖霞优质红富士8个约200g/个 烟台苹果水果新鲜',"/img/shuiguo/shuiguo03.jpg",32.80,4,9);
INSERT INTO mryx_product VALUES(null,'阿榴哥泰国金枕头冷冻榴莲果肉300g*3 榴莲肉 水果 榴莲果泥',"/img/shuiguo/shuiguo04.jpg",129.00,1,9);
INSERT INTO mryx_product VALUES(null,'新疆库尔勒精选香梨1kg约120g/个 梨子 新鲜水果 皮薄肉细 香味浓郁',"/img/shuiguo/shuiguo05.jpg",15.00,null,9);
INSERT INTO mryx_product VALUES(null,'SunMoon泰国金枕头冷冻榴莲果肉300g*3 金枕榴莲 榴莲果肉 果肉香浓',"/img/shuiguo/shuiguo06.jpg",119.00,1,9);
INSERT INTO mryx_product VALUES(null,'阿榴哥泰国金枕头冷冻榴莲果肉300g 榴莲肉 榴莲泥',"/img/shuiguo/shuiguo07.jpg",49.00,1,9);
INSERT INTO mryx_product VALUES(null,'以色列青柚8个约300g/个 8个装柚子水果新鲜 果肉清香果汁清甜',"/img/shuiguo/shuiguo08.jpg",69.90,6,9);
INSERT INTO mryx_product VALUES(null,'江西赣南脐橙20个约190g/个 橙子赣南脐橙 新鲜水果 当季 酸甜可口 饱满多汁',"/img/shuiguo/shuiguo09.jpg",49.90,5,9);
INSERT INTO mryx_product VALUES(null,'红小仙海南蜜宝红心火龙果2个(大果)400-600g/个 新鲜水果 红龙果 细滑水润 厚实饱满',"/img/shuiguo/shuiguo10.jpg",29.90,2,9);

#熟食
INSERT INTO mryx_product VALUES(null,'无穷烤小鸡腿6只装蜂蜜鸡翅根鸡肉鸡腿熟食卤味休闲网红零食 味道太好 蜂蜜香甜 肉质鲜嫩',"/img/shushi/shushi01.jpg",24.60,1,10);
INSERT INTO mryx_product VALUES(null,'9.90
02:标题 百草味精制猪肉脯100g 网红零食小吃靖江肉干肉铺熟食 新老包装 随机发货',"/img/shushi/shushi02.jpg",21.90,null,10);
INSERT INTO mryx_product VALUES(null,'周黑鸭 卤鸭脖215g 经典大包装 熟食卤味零食 麻辣小吃 微甜爽辣 回味久远 休闲包装 携带方便 肉质鲜香',"/img/shushi/shushi03.jpg",19.90,2,10);
INSERT INTO mryx_product VALUES(null,'周黑鸭 卤鸭舌60g 真空小包装 熟食卤味零食 麻辣小吃 2件起购 麻辣鲜香 独立包装 开袋即食 方便携带',"/img/shushi/shushi04.jpg",24.90,2,10);
INSERT INTO mryx_product VALUES(null,'良品铺子甜辣鸭掌155g卤味美食特产零食熟食小包装',"/img/shushi/shushi05.jpg",36.90,3,10);
INSERT INTO mryx_product VALUES(null,'良品铺子鸭锁骨200g甜辣味鸭肉特产美味小吃熟食零食',"/img/shushi/shushi06.jpg",29.90,3,10);
INSERT INTO mryx_product VALUES(null,'良品铺子烧烤鸭脖190g/袋真空小包装肉类零食卤味熟食',"/img/shushi/shushi07.jpg",24.90,3,10);
INSERT INTO mryx_product VALUES(null,'百草味原切牛肉条50g 牛肉干休闲零食五香味熟食小吃',"/img/shushi/shushi08.jpg",23.90,4,10);
INSERT INTO mryx_product VALUES(null,'周黑鸭 卤豆干120g 真空小包装 熟食卤味零食 麻辣小吃 麻辣鲜香 独立包装 开袋即食 方便携带',"/img/shushi/shushi09.jpg",9.90,2,10);
INSERT INTO mryx_product VALUES(null,'萨啦咪德佬烤制微辣小鸡腿鸡翅根28g特产熟食小吃休闲零食 骨肉透香 烤制 好吃到尖叫',"/img/shushi/shushi10.jpg",4.90,1,10);

#速食
INSERT INTO mryx_product VALUES(null,'安井手抓饼（葱香）900g 早餐 煎饼 方便速食',"/img/shushi/shushi01.jpg",19.90,4,11);
INSERT INTO mryx_product VALUES(null,'康师傅 大食袋红烧牛肉面 120g*5袋 方便面泡面 新老包装 更换克重 随机发货 实物为准',"/img/shushi/shushi02.jpg",12.90,5,11);
INSERT INTO mryx_product VALUES(null,'螺霸王柳州螺蛳粉280g*3特产粉丝米线方便面非火鸡面 舌尖中国 推荐美食 柳州特产 正宗螺蛳粉',"/img/shushi/shushi03.jpg",37.50,3,11);
INSERT INTO mryx_product VALUES(null,'食族人酸辣粉网红食人族麻辣爆肚粉重庆红薯粉条粉丝速食150g*3桶 网红麻辣爆肚粉丝 6包料大满足',"/img/shushi/shushi04.jpg",38.90,3,11);
INSERT INTO mryx_product VALUES(null,'统一 小浣熊系列奥尔良烤翅味干脆面 46g*30袋 整箱即食零食面',"/img/shushi/shushi05.jpg",28.80,5,11);
INSERT INTO mryx_product VALUES(null,'统一生活面 汤达人日式豚骨拉面125g*5袋 方便面泡面煮面五连包 好面汤决定 享受喝汤 一碗见底',"/img/shushi/shushi06.jpg",20.90,2,11);
INSERT INTO mryx_product VALUES(null,'【上海梅林】午餐肉罐头340g早餐火锅螺蛳粉火鸡面即食户外 中华老字号 始于1930年 回忆中的味道',"/img/shushi/shushi07.jpg",14.60,3,11);
INSERT INTO mryx_product VALUES(null,'陈克明面条老妈厨房劲道挂面900g*3麦香劲道速食面新老包装随机发 老妈厨房 900g*3',"/img/shushi/shushi08.jpg",22.90,1,11);
INSERT INTO mryx_product VALUES(null,'农心 辛拉面辣白菜8连包 组合装方便面韩国泡面 非火鸡面 筋道拉面 农心经典',"/img/shushi/shushi09.jpg",29.90,2,11);
INSERT INTO mryx_product VALUES(null,'香港寿桃非油炸台式刀削面 浓香宽面方便面挂面400g/袋6人份 浓香 爽滑 宽条 刀削面',"/img/shushi/shushi10.jpg",9.90,1,11);

#早餐
INSERT INTO mryx_product VALUES(null,'QUAKER/桂格即食原味纯燕麦片袋装1478g 营养早餐冲饮免煮代餐 桂格 燕麦麦片 营养早餐冲饮即食燕麦片',"/img/zaocan/zaocan01.jpg",19.90,1,12);
INSERT INTO mryx_product VALUES(null,'Calbee/卡乐比水果麦片700g*2进口早餐健康燕麦片两袋装 网红麦片',"/img/zaocan/zaocan02.jpg",129.00,1,12);
INSERT INTO mryx_product VALUES(null,'达利园糕点瑞士卷1500g/箱营养早餐休闲零食大礼包手撕面包整箱 夹心美味 超值大包装',"/img/zaocan/zaocan03.jpg",35.00,2,12);
INSERT INTO mryx_product VALUES(null,'家乐氏谷兰诺拉草莓490g即食小袋装谷物早餐水果麦片 记得牛奶、酸奶冷冲泡，即食哦~',"/img/zaocan/zaocan04.jpg",59.90,1,12);
INSERT INTO mryx_product VALUES(null,'维维 维他型豆奶粉 760g/袋 内含小包 营养早餐 营养早餐食品 欢乐开怀',"/img/zaocan/zaocan05.jpg",29.50,1,12);
INSERT INTO mryx_product VALUES(null,'三只松鼠 氧气吐司面包800g/整箱夹心吐司口袋手撕面包早餐点心',"/img/zaocan/zaocan06.jpg",36.90,3,12);
INSERT INTO mryx_product VALUES(null,'港荣蓝莓蒸蛋糕整箱营养早餐夹心面包糕点心休闲零食品大礼包 蓝莓果汁灌芯 蓝莓味蒸蛋糕',"/img/zaocan/zaocan07.jpg",38.20,2,12);
INSERT INTO mryx_product VALUES(null,'达利园糕点瑞士卷1500g/箱营养早餐休闲零食大礼包手撕面包整箱 夹心美味 超值大包装',"/img/zaocan/zaocan08.jpg",35.00,2,12);
INSERT INTO mryx_product VALUES(null,'江中猴姑米稀5天装 早餐食品营养即食冲饮燕麦代餐米糊 十种原料 早餐米稀',"/img/zaocan/zaocan09.jpg",58.80,4,12);
INSERT INTO mryx_product VALUES(null,'欧扎克燕麦片50%坚果水果麦片零食版750gx2袋即食营养早餐冲饮 即食早餐',"/img/zaocan/zaocan10.jpg",98.00,1,12);