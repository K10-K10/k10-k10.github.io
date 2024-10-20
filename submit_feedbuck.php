<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $feedback = htmlspecialchars($_POST['feedback']);

    // メール内容
    $to = "keito.tottori@gmail.com";
    $subject = "新しい感想が届きました";
    $message = "名前: " . $name . "\n感想: " . $feedback;
    $headers = "From: webmaster@example.com";

    // メール送信
    mail($to, $subject, $message, $headers);

    // 感謝メッセージを表示
    echo "感想を送信しました！ありがとうございました。";
}
?>
