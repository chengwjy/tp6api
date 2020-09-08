-- 菜单
CREATE TABLE `co_menu` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `url` varchar(50) NOT NULL DEFAULT '' COMMENT '链接地址',
  `pid` int(5) NOT NULL DEFAULT '0' COMMENT '父ID',
  `is_all` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否所有人都能访问; 0 不能  1能',
  `is_url` tinyint(1) NOT NULL DEFAULT 1 COMMENT '类型; 1：目录，2：菜单，3：链接',
  `sort` float(10,2) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1018 DEFAULT CHARSET=utf8 COMMENT='后台菜单表';

-- 角色表
CREATE TABLE `co_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1020 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- 用户-角色表
CREATE TABLE `co_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT 0 COMMENT '用户id',
  `role_id` int(11) NOT NULL DEFAULT 0 COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1026 DEFAULT CHARSET=utf8 COMMENT='用户-角色表';

-- 角色权限表
CREATE TABLE `co_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL DEFAULT 0 COMMENT '角色id',
  `menu_id` int(11) NOT NULL DEFAULT 0 COMMENT '菜单id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8 COMMENT='角色权限表';

-- 用户表
CREATE TABLE `co_user` (
    `id` int(11) NOT NULL,
    `username` varchar(50) NOT NULL DEFAULT 0 COMMENT '用户名',
    `salt` char(8)  COMMENT '密码盐',
    `password` char(64) COMMENT "密码)密码=hash_hmac('sha256','password', 'salt')",
)ENGINE=InnoDB AUTO_INCREMENT=1021 DEFAULT CHARSET=utf8 COMMENT='用户表';