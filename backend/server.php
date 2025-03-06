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
    
    // Database credentials
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $dbname = 'professional-crunches';

    // Connect to the database
    $conn = new mysqli($host, $user, $password, $dbname);
    if ($conn->connect_error) {
        echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $conn->connect_error]);
        exit();
    }
    
    // Retrieve form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $dob = $_POST['dob'] ?? '';
    $qualification = $_POST['qualification'] ?? '';
    $competencies = $_POST['competencies'] ?? '';
    $experience = $_POST['experience'] ?? '';
    $city = $_POST['city'] ?? '';
    $state = $_POST['state'] ?? '';
    $address = $_POST['address'] ?? '';
    $referral = $_POST['referral'] ?? '';
    $languages = $_POST['languages'] ?? '';
    $computerskills = $_POST['computerskills'] ?? '';
    $native = $_POST['native'] ?? '';
    $laptop = $_POST['laptop'] ?? '';
    $bike = $_POST['bike'] ?? '';
    
    // Handle file uploads
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    
    function uploadFile($fileKey, $uploadDir) {
        if (!empty($_FILES[$fileKey]['name'])) {
            $fileName = basename($_FILES[$fileKey]['name']);
            $targetPath = $uploadDir . $fileName;
            if (move_uploaded_file($_FILES[$fileKey]['tmp_name'], $targetPath)) {
                return $targetPath;
            }
        }
        return null;
    }
    
    $resume = uploadFile('resume', $uploadDir);
    $marksheet = uploadFile('marksheet', $uploadDir);
    $aadhar = uploadFile('aadhar', $uploadDir);
    $photo = uploadFile('photo', $uploadDir);
    
    // Insert into database
    $stmt = $conn->prepare("INSERT INTO registrations (name, email, phone, dob, qualification, competencies, experience, city, state, address, referral, languages, computerskills, native, laptop, bike, resume, marksheet, aadhar, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if (!$stmt) {
        echo json_encode(['status' => 'error', 'message' => 'Failed to prepare statement']);
        exit();
    }
    
    $stmt->bind_param("ssssssssssssssssssss", $name, $email, $phone, $dob, $qualification, $competencies, $experience, $city, $state, $address, $referral, $languages, $computerskills, $native, $laptop, $bike, $resume, $marksheet, $aadhar, $photo);
    
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Registration successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Failed to register: ' . $stmt->error]);
    }
    
    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}
