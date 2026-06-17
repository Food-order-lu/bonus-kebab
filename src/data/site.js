// ============================================================
//  Coordonnées & liens du restaurant — ÉDITE ICI.
//  Un seul endroit pour tout changer (tél, adresse, réseaux, commande).
// ============================================================
export const site = {
  name: 'Bonus Kebab',
  legalName: 'Bonus Kebab', // raison sociale exacte si différente
  address: '41 Grand-Rue, 9240 Diekirch',
  addressLines: ['41 Grand-Rue', 'L-9240 Diekirch'],
  phone: '+352 621 622 035',
  phoneHref: 'tel:+352621622035',
  email: '', // ← à compléter (ex: contact@bonuskebab.lu)

  // Liens de commande / réservation
  orderUrl: '#commande',          // ← placeholder GloriaFood (à brancher plus tard)
  reserveUrl: '#commande',        // ← idem
  woltUrl: 'https://wolt.com/en/lux/luxembourg-south/restaurant/bonus-kebab', // ⚠️ vérifier que c'est bien Diekirch

  // Réseaux sociaux
  instagram: 'https://www.instagram.com/bonuskebapide/?hl=en',
  facebook: 'https://www.facebook.com/p/Bonus-Kebap-100067846020631/',

  // Avis
  googleReviewsUrl: 'https://www.google.com/maps/search/Bonus+Kebap+Diekirch',
  tripadvisorUrl: 'https://www.tripadvisor.com/Restaurant_Review-g190343-d26612650-Reviews-Bonus_Kebap-Diekirch_Diekirch_District.html',

  // Google Maps embed (chargé seulement après consentement cookies)
  mapEmbedUrl: 'https://www.google.com/maps?q=41+Grand-Rue+9240+Diekirch&output=embed',
};

// Quelques avis pour l'encart "Ils nous adorent" (modifiables / à remplacer par de vrais avis)
export const reviews = [
  { author: 'Client Google', rating: 5, text: { fr: 'Kebab délicieux et portions généreuses, service rapide et souriant !', de: 'Leckerer Kebab, großzügige Portionen, schneller und freundlicher Service!', en: 'Delicious kebab, generous portions, fast and friendly service!' } },
  { author: 'Client Google', rating: 5, text: { fr: 'Les meilleures pizzas de Diekirch, toujours fraîches. Je recommande !', de: 'Die besten Pizzen in Diekirch, immer frisch. Sehr zu empfehlen!', en: 'The best pizzas in Diekirch, always fresh. Highly recommend!' } },
  { author: 'Client Google', rating: 5, text: { fr: 'Accueil chaleureux et produits de qualité. Always fresh taste, c\'est vrai !', de: 'Herzlicher Empfang und Qualitätsprodukte. Always fresh taste stimmt!', en: 'Warm welcome and quality products. Always fresh taste, it\'s true!' } },
];
