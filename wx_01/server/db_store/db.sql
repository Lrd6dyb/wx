SET NAMES UTF8;
DROP DATABASE IF EXISTS mryx;
CREATE DATABASE mryx CHARSET=UTF8;
USE mryx;


#2:创建表 mryx_home_carousel
#技巧1:库名;表名;列表;全英文小写字母
CREATE TABLE mryx_home_carousel(
  img_id INT PRIMARY KEY AUTO_INCREMENT,
  ctime DATETIME,
  img_url VARCHAR(255)
);
INSERT INTO mryx_home_carousel VALUES(null,now(),"/img/home_carousel/banner1.jpg");
INSERT INTO mryx_home_carousel VALUES(null,now(),"/img/home_carousel/banner2.jpg");
INSERT INTO mryx_home_carousel VALUES(null,now(),"/img/home_carousel/banner3.jpg");
INSERT INTO mryx_home_carousel VALUES(null,now(),"/img/home_carousel/banner4.jpg");
INSERT INTO mryx_home_carousel VALUES(null,now(),"/img/home_carousel/banner5.jpg");

