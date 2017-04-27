<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
$username=$_POST['deposit'];
$age=$_POST['recharge'];
echo "你的名字：{$username},年龄：{$age}";