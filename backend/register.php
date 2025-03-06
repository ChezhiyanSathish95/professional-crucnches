<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}   

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    // Validate input
    if (!isset($input['name']) || !isset($input['email']) || !isset($input['comment'])) {
        echo json_encode(['status' => 'error', 'message' => 'Invalid input data']);
        exit();
    }

    $name = $input['name'];
    $email = $input['email'];
    $comment = $input['comment'];

    // Database credentials
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'mealmaven';

    // Connect to the database
    $conn = new mysqli($host, $user, $password, $dbname);

    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]);
        exit();
    }

    // Insert comment
    $stmt = $conn->prepare("INSERT INTO comments (name, email, comment) VALUES (?, ?, ?)");
    if (!$stmt) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to prepare statement']);
        exit();
    }

    $stmt->bind_param("sss", $name, $email, $comment);

    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Comment added successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to add comment: ' . $stmt->error]);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
?>