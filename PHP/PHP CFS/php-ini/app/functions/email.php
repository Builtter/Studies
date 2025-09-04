<?php


/**
 * Envia um email com as informa es recebidas.
 * Usar credenciais de teste de https://mailtrap.io/
 * @param array $data
 *   Um array com as informa es do email a ser enviado.
 *   As chaves do array devem ser:
 *   - quem: Quem esta  enviando o email.
 *   - para: Para quem o email est  sendo enviado.
 *   - assunto: O assunto do email.
 *   - mensagem: A mensagem do email.
 * @return boolean
 *   True se o email for enviado com sucesso, False caso contr rio.
 */
function send(array $data){
    $email = new PHPMailer\PHPMailer\PHPMailer;
    $email->CharSet = 'UTF-8';
    $email->SMTPSecure = 'PLAIN'; //ssl ou PLAIN;
    $email->isSMTP();
    $email->Host = 'sandbox.smtp.mailtrap.io';
    $email->Port = 465;
    $email->SMTPAuth = true;
    $email->Username = '79a272793976a9';
    $email->Password = 'd9656aa44eda46';
    $email->isHTML(true);
    $email->setFrom('email@dominio.com');
    $email->FromName = $data['quem'];
    $email->addAddress($data['para']);
    $email->Body = $data['mensagem'];
    $email->Subject = $data['assunto'];
    $email->AltBody = 'Para ver esse email tenha certeza de estar vendo em um programa que aceita ver HTML.';
    $email->MsgHTML($data['mensagem']);

    return $email->send();
}

