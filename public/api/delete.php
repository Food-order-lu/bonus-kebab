<?php
require __DIR__ . '/config.php';
require_auth();
header('Content-Type: application/json');

$src = $_POST['src'] ?? '';
if (!$src) { http_response_code(400); echo json_encode(['error' => 'Paramètre src manquant']); exit; }

// Retire du registre
$g = read_gallery();
$before = count($g['images']);
$g['images'] = array_values(array_filter($g['images'], fn($i) => $i['src'] !== $src));
write_gallery($g);

// Supprime le fichier physique (uniquement dans le dossier galerie, sécurité)
$name = basename($src);
$path = GALLERY_DIR . '/' . $name;
if (strpos(realpath(dirname($path)) ?: '', realpath(GALLERY_DIR) ?: '#') === 0 && is_file($path)) {
  @unlink($path);
}

echo json_encode(['ok' => true, 'removed' => $before - count($g['images'])]);
