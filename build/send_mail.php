
<?php
require ('./phpmailer/PHPMailerAutoload.php');

 $mail = new PHPMailer;
 $mail -> isSMTP();
 $mail->Host = 'smtp.mail.ru';
 $mail->SMTPAuth = true;
 $mail->Username = 'pashebor@mail.ru';
 $mail->Password = 'ltvmzyjd90';
 $mail->SMTPSecure = 'ssl';
 $mail->Port = '465';
 $mail->CharSet = 'UTF-8';

 $mail->From = 'pashebor@mail.ru';
 $mail->FromName = 'Генератор продаж';
 $mail->addAddress('pashebor@gmail.com', 'Генератор продаж');
 $mail->addAddress('info@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('pm@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('vip@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('ac@salesgenerator.pro', 'Генератор продаж');
 $mail->addAddress('salesgenerates@mail.ru', 'Генератор продаж');
 $mail->addAddress('sd@salesgenerator.pro', 'Генератор продаж');
 $mail->isHtml(true);


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
     switch ($arrRequest['form-name']) {
      case 'callback':
       $mail->Subject = 'Лендинг КП - заказать звонок"';
       $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
       case 'know-default':
           $mail->Subject = 'Лендинг КП - узнать, сколько клиентов я получу';
           $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
           $mail->send();
           echo json_encode(["response" => true]);
           break;
         case 'know-result':
             $mail->Subject = 'Лендинг КП - иконки на экране гарантии';
             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
             $mail->send();
             echo json_encode(["response" => true]);
             break;
       case 'contract-order':
           $mail->Subject = 'Лендинг КП - скачать пример договора';
           $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
           $mail->send();
           echo json_encode(["response" => true]);
             break;
       case 'work-plan-order':
           $mail->Subject = 'Лендинг КП - план работ на 2 месяца';
           $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
           $mail->send();
           echo json_encode(["response" => true]);
             break;
         case 'report-order':
             $mail->Subject = 'Лендинг КП - пример нашего отчёта';
             $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
             $mail->send();
             echo json_encode(["response" => true]);
             break;
         case 'know-bottom':
             $mail->Subject = 'Лендинг КП - получить персональное предложение';
             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
             $mail->send();
           echo json_encode(["response" => true]);
             break;
     }
    } else {
     echo json_encode(["response" => false]);
    }
}
?>