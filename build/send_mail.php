
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
    $queryUrl = 'https://gpro.bitrix24.ru/rest/40/fg5wdecoksfchwgx/crm.lead.add.json';
    $idToDel = $_POST["formData"];
    $queryData = '';
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
     switch ($arrRequest['form-name']) {
      case 'callback':
//       $mail->Subject = 'Лендинг КП - заказать звонок"';
//       $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
//       $mail->send();
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - заказать звонок',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
       case 'know-default':
//           $mail->Subject = 'Лендинг КП - узнать, сколько клиентов я получу';
//           $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
//           $mail->send();
//           echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - узнать, сколько клиентов я получу',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
           break;
         case 'know-result':
//             $mail->Subject = 'Лендинг КП - иконки на экране гарантии';
//             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
//             $mail->send();
//             echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - иконки на экране гарантии',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
       case 'contract-order':
//           $mail->Subject = 'Лендинг КП - скачать пример договора';
//           $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
//           $mail->send();
//           echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['phone'],
                     "NAME" => $arrRequest['phone'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - скачать пример договора',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
       case 'work-plan-order':
//           $mail->Subject = 'Лендинг КП - план работ на 2 месяца';
//           $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
//           $mail->send();
//           echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['phone'],
                     "NAME" => $arrRequest['phone'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - план работ на 2 месяца',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
         case 'report-order':
//             $mail->Subject = 'Лендинг КП - пример нашего отчёта';
//             $mail->Body = '<div><p>Электронная почта клиента: '.$arrRequest['email'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
//             $mail->send();
//             echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['phone'],
                     "NAME" => $arrRequest['phone'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - пример нашего отчёта',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;

         case 'know-bottom':
//             $mail->Subject = 'Лендинг КП - получить персональное предложение';
//             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
//             $mail->send();
//           echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - получить персональное предложение',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
         case 'consultation-experts':
//             $mail->Subject = 'Лендинг КП - получить консультацию экспертов';
//             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p><p>Комментарий: '.$arrRequest['comment'].'</p></div>';
//             $mail->send();
//             echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - получить консультацию экспертов',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
         case 'gift-audit':
//             $mail->Subject = 'Лендинг КП - Акция "Бесплатный аудит"';
//             $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
//             $mail->send();
//             echo json_encode(["response" => true]);
             $queryData = http_build_query(array(
                 'fields' => array(
                     "TITLE" => $arrRequest['name'],
                     "NAME" => $arrRequest['name'],
                     "LAST_NAME" => '',
                     "STATUS_ID" => "NEW",
                     "OPENED" => "Y",
                     "ASSIGNED_BY_ID" => 9, //ответсвтенный
                     "PHONE" => array(array("VALUE" => $arrRequest['phone'], "VALUE_TYPE" => "WORK" )),
                     "EMAIL" => array(array("VALUE" => $arrRequest['email'], "VALUE_TYPE" => "WORK" )),
                     "UF_CRM_1444898239" => $arrRequest['comment'], // комментарий /ЯМ
                     "UF_CRM_1511193954" => 'Лендинг_Комплексное_продвижение',//Источник_поле
                     "UF_CRM_1511945936" => 'Лендинг КП - Акция "Бесплатный аудит"',//Дополнительно об источнике(лендинг)

                 ),
                 'params' => array("REGISTER_SONET_EVENT" => "Y")
             ));
             break;
     }
    } else {
     echo json_encode(["response" => false]);
    }

    if ($queryData) {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_POST => 1,
            CURLOPT_HEADER => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL => $queryUrl,
            CURLOPT_POSTFIELDS => $queryData,
        ));
        if (curl_exec($curl)) {
            echo json_encode(["response" => true]);
            curl_close($curl);
        }



    }
}
?>