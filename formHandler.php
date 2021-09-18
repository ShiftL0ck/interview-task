<?php
  $good = $_POST['good'];
  $phone = $_POST['phone'];
  $name = $_POST['name'];
  $email_to = $_POST['email'];
  
	$email_subject = "Сделан заказ.";
	$email_body = "Вы сделали заказ: $good\nНа имя: $name\nВаш телефон: $phone\nВаша почта: $email_to";

  mail($email_to, $email_subject, $email_body);
?>