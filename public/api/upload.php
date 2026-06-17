<?php
require __DIR__ . '/config.php';
require_auth();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_FILES['photo'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Aucun fichier reçu']);
  exit;
}

[$name, $err] = save_uploaded_image($_FILES['photo'], GALLERY_DIR);
if ($err) { http_response_code(400); echo json_encode(['error' => $err]); exit; }

$alt = trim($_POST['alt'] ?? '') ?: 'Photo';
$g = read_gallery();
array_unshift($g['images'], ['src' => GALLERY_URL . '/' . $name, 'alt' => $alt]);
write_gallery($g);

echo json_encode(['ok' => true, 'image' => ['src' => GALLERY_URL . '/' . $name, 'alt' => $alt]]);
