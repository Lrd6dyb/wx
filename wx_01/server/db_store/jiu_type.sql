USE mryx;
CREATE TABLE mryx_jiu_type(
	jt_id INT PRIMARY KEY AUTO_INCREMENT,
	j_type VARCHAR(255),
	all_id INT
);

insert into mryx_jiu_type values(null,'白酒',1);
insert into mryx_jiu_type values(null,'保健酒',2);
insert into mryx_jiu_type values(null,'黄酒',3);
insert into mryx_jiu_type values(null,'啤酒',4);
insert into mryx_jiu_type values(null,'葡萄酒',5);
insert into mryx_jiu_type values(null,'洋酒',6);