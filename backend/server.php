<?php

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Start output buffering to prevent mixed content issues
ob_start();

// Allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    http_response_code(204);
    exit();
}

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "professional-crunches";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check for DB connection errors
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed: " . $conn->connect_error]));
}

// Capture raw POST data for debugging
$debug_log = ["status" => "debug"];

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $debug_log["received_data"] = $_POST; // Log incoming data

    if (empty($_POST)) {
        die(json_encode(["status" => "error", "message" => "No data received. Check if frontend sends data correctly."]));
    }

    // Required fields
    $requiredFields = ["name", "email", "phone", "dob", "qualification"];
    foreach ($requiredFields as $field) {
        if (empty($_POST[$field])) {
            die(json_encode(["status" => "error", "message" => "Missing required field: $field"]));
        }
    }

    // Sanitize input data
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $dob = $conn->real_escape_string($_POST['dob']);
    $qualification = $conn->real_escape_string($_POST['qualification']);

    // Handle File Uploads
    function uploadFile($fileKey, $targetDir)
    {
        global $debug_log; // Log errors

        if (!isset($_FILES[$fileKey]) || $_FILES[$fileKey]['error'] !== UPLOAD_ERR_OK) {
            $debug_log["file_upload_error"][$fileKey] = "File not uploaded.";
            return null;
        }

        // Check file type
        $allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
        if (!in_array($_FILES[$fileKey]['type'], $allowedTypes)) {
            $debug_log["file_upload_error"][$fileKey] = "Invalid file type";
            return null;
        }

        // Ensure directory exists
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
        }

        $fileName = time() . "_" . basename($_FILES[$fileKey]['name']);
        $filePath = $targetDir . $fileName;

        if (move_uploaded_file($_FILES[$fileKey]['tmp_name'], $filePath)) {
            return $filePath;
        }
        $debug_log["file_upload_error"][$fileKey] = "Move failed";
        return null;
    }

    $targetDir = "uploads/";
    $resume = uploadFile('resume', $targetDir);
    $aadhar = uploadFile('aadhar', $targetDir);
    $marksheet = uploadFile('marksheet', $targetDir);
    $photo = uploadFile('photo', $targetDir);

    // Prepare SQL statement
    $sql = "INSERT INTO users (name, email, phone, dob, qualification, resume, aadhar, marksheet, photo) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        die(json_encode(["status" => "error", "message" => "SQL prepare failed: " . $conn->error]));
    }

    // Bind parameters
    $stmt->bind_param("sssssssss", $name, $email, $phone, $dob, $qualification, $resume, $aadhar, $marksheet, $photo);

    // Execute query
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Data stored successfully"]);
    } else {
        die(json_encode(["status" => "error", "message" => "Failed to store data: " . $stmt->error]));
    }

    $stmt->close();
}

$conn->close();

// Log debugging information
file_put_contents("debug.log", json_encode($debug_log, JSON_PRETTY_PRINT));

exit();
?>
