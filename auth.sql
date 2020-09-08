/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : auth

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2020-09-08 16:30:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for co_menu
-- ----------------------------
DROP TABLE IF EXISTS `co_menu`;
CREATE TABLE `co_menu` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '名称',
  `url` varchar(50) NOT NULL DEFAULT '' COMMENT '链接地址',
  `pid` int(5) NOT NULL DEFAULT '0' COMMENT '父ID',
  `is_all` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否所有人都能访问 0 不能  1能',
  `is_url` tinyint(1) NOT NULL DEFAULT '1' COMMENT '类型：1：目录，2：菜单，3：链接',
  `sort` float(10,2) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='后台菜单表';

-- ----------------------------
-- Records of co_menu
-- ----------------------------
INSERT INTO `co_menu` VALUES ('1', 'roleadd', '/admin/role/add', '0', '0', '1', null);

-- ----------------------------
-- Table structure for co_role
-- ----------------------------
DROP TABLE IF EXISTS `co_role`;
CREATE TABLE `co_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '角色名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of co_role
-- ----------------------------
INSERT INTO `co_role` VALUES ('1', '修罗');

-- ----------------------------
-- Table structure for co_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `co_role_menu`;
CREATE TABLE `co_role_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '角色id',
  `menu_id` int(11) NOT NULL DEFAULT '0' COMMENT '菜单id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='角色权限表';

-- ----------------------------
-- Records of co_role_menu
-- ----------------------------
INSERT INTO `co_role_menu` VALUES ('1', '1', '2');

-- ----------------------------
-- Table structure for co_user
-- ----------------------------
DROP TABLE IF EXISTS `co_user`;
CREATE TABLE `co_user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL DEFAULT '0' COMMENT '用户名',
  `salt` char(8) DEFAULT NULL COMMENT '密码盐',
  `password` char(64) DEFAULT NULL COMMENT '密码)密码=hash_hmac(''sha256'',''password'', ''salt'')'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of co_user
-- ----------------------------
INSERT INTO `co_user` VALUES ('1', 'admin', '11111111', 'f46e99eb250dd389624bdb4ff804d6aed5f0c9c621009c3374b859a029cec222');
INSERT INTO `co_user` VALUES ('2', 'ru', '11111111', 'f46e99eb250dd389624bdb4ff804d6aed5f0c9c621009c3374b859a029cec222');

-- ----------------------------
-- Table structure for co_user_role
-- ----------------------------
DROP TABLE IF EXISTS `co_user_role`;
CREATE TABLE `co_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0' COMMENT '用户id',
  `role_id` int(11) NOT NULL DEFAULT '0' COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='用户-角色表';

-- ----------------------------
-- Records of co_user_role
-- ----------------------------
INSERT INTO `co_user_role` VALUES ('2', '2', '1');
