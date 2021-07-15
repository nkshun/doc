## mysqldumpの特定テーブルのINSERT文を1レコードずつ出力する

```
$ mysqldump -uroot -p -t --compact --skip-extended-insert db_name table_name
INSERT INTO `table_name` VALUES (1,'2016-12-25 12:06:19');
INSERT INTO `table_name` VALUES (2,'2016-12-25 12:06:22');
INSERT INTO `table_name` VALUES (3,'2016-12-25 12:06:22');
```

