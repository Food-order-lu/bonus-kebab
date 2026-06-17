<?php
// ⚙️ Configuration du back-office Bonus Kebab. À PERSONNALISER avant la mise en ligne.

// Mot de passe administrateur.
// DÉMO/INITIAL : mot de passe en clair ci-dessous.
// PRODUCTION (recommandé) : remplace-le par un hash bcrypt généré sur Hostinger avec :
//   php -r "echo password_hash('TON_MOT_DE_PASSE', PASSWORD_DEFAULT);"
// Colle le résultat (commence par $2y$...) ici — le code détecte automatiquement le hash.
const ADMIN_PASSWORD = 'CHANGE_ME_AVANT_MISE_EN_LIGNE';

// --- Galerie -------------------------------------------------
const GALLERY_DIR  = __DIR__ . '/../gallery';            // dossier des photos
const GALLERY_JSON = __DIR__ . '/../data/gallery.json';  // registre des photos
const GALLERY_URL  = '/gallery';                         // URL publique

// --- Menu de la semaine (une image) --------------------------
const MENU_DIR   = __DIR__ . '/../menu';                 // dossier de l'image du menu
const MENU_JSON  = __DIR__ . '/../data/weekly-menu.json'; // registre du menu
const MENU_URL   = '/menu';                              // URL publique

// Types d'images autorisés + taille max (5 Mo)
const ALLOWED_EXT = ['jpg', 'jpeg', 'png', 'webp', 'avif'];
const MAX_BYTES    = 5 * 1024 * 1024;

session_start();
function require_auth() {
  if (empty($_SESSION['admin'])) {
    http_response_code(401);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Non authentifié']);
    exit;
  }
}
function read_json($path, $fallback) {
  if (!file_exists($path)) return $fallback;
  $data = json_decode(file_get_contents($path), true);
  return is_array($data) ? $data : $fallback;
}
function write_json($path, $data) {
  if (!is_dir(dirname($path))) mkdir(dirname($path), 0755, true);
  file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE));
}
function read_gallery() {
  $d = read_json(GALLERY_JSON, ['images' => []]);
  return isset($d['images']) ? $d : ['images' => []];
}
function write_gallery($data) { write_json(GALLERY_JSON, $data); }

// Sauvegarde sécurisée d'un fichier image uploadé dans $dir, renvoie le nom de fichier.
function save_uploaded_image($file, $dir) {
  if ($file['error'] !== UPLOAD_ERR_OK) return [null, 'Erreur upload'];
  if ($file['size'] > MAX_BYTES)        return [null, 'Fichier trop volumineux (max 5 Mo)'];
  $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
  if (!in_array($ext, ALLOWED_EXT))     return [null, 'Format non autorisé'];
  if (@getimagesize($file['tmp_name']) === false) return [null, 'Fichier image invalide'];
  if (!is_dir($dir)) mkdir($dir, 0755, true);
  $base = preg_replace('/[^a-z0-9-]/', '-', strtolower(pathinfo($file['name'], PATHINFO_FILENAME)));
  $name = $base . '-' . substr(md5(uniqid('', true)), 0, 8) . '.' . $ext;
  if (!move_uploaded_file($file['tmp_name'], $dir . '/' . $name)) return [null, "Impossible d'enregistrer le fichier"];
  return [$name, null];
}
