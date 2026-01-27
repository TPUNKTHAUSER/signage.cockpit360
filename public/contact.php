<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit();
}

// Validate required fields
$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$company = trim($data['company'] ?? '');
$phone = trim($data['phone'] ?? '');
$locale = $data['locale'] ?? 'de';

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit();
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
$company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
$phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');

// Email configuration
$to = 'signage@cockpit360.de';
$subject = "Neue Anfrage von {$name} | cockpit360 Signage";

// Build email content
$emailContent = "
<html>
<head>
    <meta charset='UTF-8'>
</head>
<body>
    <h2>Neue Kontaktanfrage / New Contact Request</h2>
    <table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
        <tr>
            <td style='padding: 8px; border: 1px solid #ddd; font-weight: bold;'>Name</td>
            <td style='padding: 8px; border: 1px solid #ddd;'>{$name}</td>
        </tr>
        <tr>
            <td style='padding: 8px; border: 1px solid #ddd; font-weight: bold;'>E-Mail</td>
            <td style='padding: 8px; border: 1px solid #ddd;'>{$email}</td>
        </tr>";

if (!empty($company)) {
    $emailContent .= "
        <tr>
            <td style='padding: 8px; border: 1px solid #ddd; font-weight: bold;'>Firma / Company</td>
            <td style='padding: 8px; border: 1px solid #ddd;'>{$company}</td>
        </tr>";
}

if (!empty($phone)) {
    $emailContent .= "
        <tr>
            <td style='padding: 8px; border: 1px solid #ddd; font-weight: bold;'>Telefon / Phone</td>
            <td style='padding: 8px; border: 1px solid #ddd;'>{$phone}</td>
        </tr>";
}

$langDisplay = $locale === 'de' ? 'Deutsch' : 'English';
$emailContent .= "
        <tr>
            <td style='padding: 8px; border: 1px solid #ddd; font-weight: bold;'>Sprache / Language</td>
            <td style='padding: 8px; border: 1px solid #ddd;'>{$langDisplay}</td>
        </tr>
    </table>
    <h3 style='margin-top: 20px;'>Nachricht / Message:</h3>
    <p style='background: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;'>{$message}</p>
</body>
</html>";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: Signage Contact <noreply@cockpit360.de>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

// Send email
$success = mail($to, $subject, $emailContent, implode("\r\n", $headers));

if ($success) {
    $responseMessage = $locale === 'de'
        ? 'Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.'
        : 'Thank you for your message! We will get back to you as soon as possible.';

    echo json_encode([
        'success' => true,
        'message' => $responseMessage
    ]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
