<?php
require __DIR__ . '/config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $pw = $_POST['password'] ?? '';
  // Détecte automatiquement : hash bcrypt ($2y$...) → password_verify, sinon comparaison en clair.
  $stored = ADMIN_PASSWORD;
  $valid = (strlen($stored) > 3 && $stored[0] === '$') ? password_verify($pw, $stored) : hash_equals($stored, $pw);
  if ($valid) {
    $_SESSION['admin'] = true;
    echo json_encode(['ok' => true]);
  } else {
    http_response_code(401);
    echo json_encode(['error' => 'Mot de passe incorrect']);
  }
  exit;
}

if (($_GET['action'] ?? '') === 'logout') {
  session_destroy();
  echo json_encode(['ok' => true]);
  exit;
}

// GET → état de session
echo json_encode(['authenticated' => !empty($_SESSION['admin'])]);
