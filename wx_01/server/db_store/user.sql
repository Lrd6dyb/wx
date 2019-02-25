USE mryx;
CREATE TABLE mryx_user(
	u_id INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	addr VARCHAR(64),
	phone VARCHAR(16),
	vip BOOLEAN
);
INSERT INTO mryx_user VALUES(null,'','','','','true');