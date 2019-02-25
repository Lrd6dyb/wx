USE mryx;
CREATE TABLE mryx_shop_cart(
	sp_id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(255),
	num INT,
	price DECIMAL(18,2),
  pro_id INT,
  img_url VARCHAR(255),
	u_id INT
);