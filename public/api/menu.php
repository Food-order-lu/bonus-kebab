<?php
// Gère l'image du "Menu de la semaine" : upload/remplacement + suppression.
require __DIR__ . '/config.php';
require_auth();
header('Content-Type: application/json');

$current = read_json(MENU_JSON, ['image' => null, 'alt' => 'Menu de la semaine']);

// Suppression : POST action=clear
if (($_POST['action'] ?? '') === 'clear') {
  if (!empty($current['image'])) {
    $old = MENU_DIR . '/' . basename($current['image']);
    if (strpos(realpath(dirname($old)) ?: '', realpath(MENU_DIR) ?: '#') === 0 && is_file($old)) @unlink($old);
  }
  write_json(MENU_JSON, ['image' => null, 'alt' => 'Menu de la semaine']);
  echo json_encode(['ok' => true, 'image' => null]);
  exit;
}

// Upload/remplacement : POST photo
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || empty($_FILES['photo'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Aucun fichier reçu']);
  exit;
}

[$name, $err] = save_uploaded_image($_FILES['photo'], MENU_DIR);
if ($err) { http_response_code(400); echo json_encode(['error' => $err]); exit; }

// Supprime l'ancienne image du menu
if (!empty($current['image'])) {
  $old = MENU_DIR . '/' . basename($current['image']);
  if (strpos(realpath(dirname($old)) ?: '', realpath(MENU_DIR) ?: '#') === 0 && is_file($old)) @unlink($old);
}

$data = ['image' => MENU_URL . '/' . $name, 'alt' => trim($_POST['alt'] ?? '') ?: 'Menu de la semaine'];
write_json(MENU_JSON, $data);
echo json_encode(['ok' => true, 'image' => $data['image']]);
