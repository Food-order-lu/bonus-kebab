// ============================================================
//  CARTE — contenu de DÉMONSTRATION.
//  À REMPLACER par la vraie carte (scan fourni par le client),
//  avec plats, prix et allergènes plat par plat.
//  `name` peut être une string (identique dans toutes les langues) ou
//  un objet { fr, de, en }. `allergens` = liste de codes (ex: 1,7,...).
// ============================================================
export const menu = [
  {
    cat: 'kebabs',
    items: [
      { name: 'Döner Kebab', desc: { fr: 'Pain pita, viande, salade, sauce', de: 'Pita, Fleisch, Salat, Soße', en: 'Pita, meat, salad, sauce' }, price: '6,50 €' },
      { name: 'Dürüm', desc: { fr: 'Galette roulée, viande, crudités', de: 'Gerollter Wrap, Fleisch, Gemüse', en: 'Rolled wrap, meat, veggies' }, price: '7,00 €' },
      { name: 'Assiette Kebab', desc: { fr: 'Viande, frites, salade, sauce', de: 'Fleisch, Pommes, Salat, Soße', en: 'Meat, fries, salad, sauce' }, price: '11,00 €' },
    ],
  },
  {
    cat: 'pizzas',
    items: [
      { name: 'Margherita', desc: { fr: 'Tomate, mozzarella, basilic', de: 'Tomate, Mozzarella, Basilikum', en: 'Tomato, mozzarella, basil' }, price: '8,50 €' },
      { name: 'Bonus Spéciale', desc: { fr: 'Viande kebab, oignons, poivrons', de: 'Kebabfleisch, Zwiebeln, Paprika', en: 'Kebab meat, onions, peppers' }, price: '11,50 €' },
      { name: 'Calzone', desc: { fr: 'Pizza fermée, jambon, champignons', de: 'Gefüllte Pizza, Schinken, Pilze', en: 'Folded pizza, ham, mushrooms' }, price: '10,50 €' },
    ],
  },
  {
    cat: 'snacks',
    items: [
      { name: 'Frites', desc: { fr: 'Portion maison', de: 'Hausgemachte Portion', en: 'Homemade portion' }, price: '3,00 €' },
      { name: 'Nuggets (6)', desc: { fr: 'Servis avec sauce', de: 'Mit Soße serviert', en: 'Served with sauce' }, price: '5,00 €' },
    ],
  },
  {
    cat: 'drinks',
    items: [
      { name: 'Soft 33cl', desc: { fr: 'Coca, Fanta, Sprite…', de: 'Coca, Fanta, Sprite…', en: 'Coke, Fanta, Sprite…' }, price: '2,50 €' },
      { name: 'Eau 50cl', desc: { fr: 'Plate ou gazeuse', de: 'Still oder sprudelnd', en: 'Still or sparkling' }, price: '2,00 €' },
    ],
  },
  {
    cat: 'desserts',
    items: [
      { name: 'Tiramisu', desc: { fr: 'Fait maison', de: 'Hausgemacht', en: 'Homemade' }, price: '4,00 €' },
      { name: 'Baklava', desc: { fr: 'Pâtisserie orientale', de: 'Orientalisches Gebäck', en: 'Oriental pastry' }, price: '3,50 €' },
    ],
  },
];

// Petit utilitaire : renvoie la valeur dans la langue voulue (gère string ou {fr,de,en})
export function tr(value, lang) {
  if (value == null) return '';
  return typeof value === 'string' ? value : (value[lang] ?? value.fr ?? '');
}
