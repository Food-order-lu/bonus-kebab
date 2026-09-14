// ============================================================
//  CARTE — chaque plat avec photo + prix.
//  ⚠️ PRIX = EXEMPLES INDICATIFS (à confirmer/remplacer par le restaurant).
//  Photos = /gallery/dXX.jpg (mêmes fichiers que la galerie).
//  `name` : string (identique toutes langues) ou { fr, de, en }.
// ============================================================
export const menu = [
  {
    cat: 'sandwich',
    items: [
      { name: 'Kebab poulet',        img: '/gallery/d05.jpg', price: '7,50 €' },
      { name: 'Kebab veau',          img: '/gallery/d06.jpg', price: '9,00 €' },
      { name: 'Brochette de poulet', img: '/gallery/d01.jpg', price: '8,50 €' },
      { name: 'Köfte',               img: '/gallery/d07.jpg', price: '7,50 €' },
      { name: 'Sucuk',               img: '/gallery/d08.jpg', price: '8,00 €' },
      { name: 'Falafel',             img: '/gallery/d03.jpg', price: '7,50 €' },
      { name: 'Hamburger',           img: '/gallery/d04.jpg', price: '7,00 €' },
      { name: 'Cheeseburger',        img: '/gallery/d02.jpg', price: '7,50 €' },
    ],
  },
  {
    cat: 'assiette',
    items: [
      { name: 'Assiette Bonus',      img: '/gallery/d09.jpg', price: '19,00 €' },
      { name: 'Kebab poulet',        img: '/gallery/d14.jpg', price: '14,50 €' },
      { name: 'Kebab veau',          img: '/gallery/d15.jpg', price: '17,00 €' },
      { name: 'Brochette de poulet', img: '/gallery/d10.jpg', price: '16,00 €' },
      { name: 'Köfte',               img: '/gallery/d16.jpg', price: '14,00 €' },
      { name: 'Sucuk',               img: '/gallery/d17.jpg', price: '15,00 €' },
      { name: 'Falafel',             img: '/gallery/d12.jpg', price: '13,00 €' },
      { name: 'Hamburger',           img: '/gallery/d13.jpg', price: '13,50 €' },
      { name: 'Cheeseburger',        img: '/gallery/d11.jpg', price: '14,50 €' },
    ],
  },
  {
    cat: 'durum',
    items: [
      { name: 'Dürüm Spécial',         img: '/gallery/d19.jpg', price: '13,50 €' },
      { name: 'Kebab poulet',          img: '/gallery/d21.jpg', price: '7,50 €' },
      { name: 'Kebab veau',            img: '/gallery/d22.jpg', price: '9,00 €' },
      { name: 'Brochette de poulet',   img: '/gallery/d18.jpg', price: '8,50 €' },
      { name: 'Köfte',                 img: '/gallery/d23.jpg', price: '7,50 €' },
      { name: 'Sucuk',                 img: '/gallery/d24.jpg', price: '8,00 €' },
      { name: 'Falafel',               img: '/gallery/d20.jpg', price: '7,50 €' },
      { name: 'Turkish Pizza poulet',  img: '/gallery/d25.jpg', price: '8,50 €' },
      { name: 'Turkish Pizza veau',    img: '/gallery/d26.jpg', price: '9,50 €' },
    ],
  },
  {
    cat: 'pizza',
    items: [
      { name: 'Pizza Bonus',         img: '/gallery/d28.jpg', price: '19,00 €' },
      { name: 'Margherita',          img: '/gallery/d35.jpg', price: '12,50 €' },
      { name: '4 Fromages',          img: '/gallery/d27.jpg', price: '15,00 €' },
      { name: 'Kebab poulet',        img: '/gallery/d32.jpg', price: '16,00 €' },
      { name: 'Kebab veau',          img: '/gallery/d33.jpg', price: '17,00 €' },
      { name: 'Poulet Grillé',       img: '/gallery/d29.jpg', price: '17,00 €' },
      { name: 'Bœuf haché',          img: '/gallery/d30.jpg', price: '17,00 €' },
      { name: 'Sucuk',               img: '/gallery/d37.jpg', price: '15,50 €' },
      { name: 'Salami',              img: '/gallery/d36.jpg', price: '15,50 €' },
      { name: 'Champignons',         img: '/gallery/d31.jpg', price: '14,00 €' },
      { name: 'Végétarienne',        img: '/gallery/d34.jpg', price: '14,00 €' },
      { name: 'Thon',                img: '/gallery/d38.jpg', price: '15,00 €' },
    ],
  },
  {
    cat: 'pide',
    items: [
      { name: 'Pide Bonus',          img: '/gallery/d39.jpg', price: '19,00 €' },
      { name: 'Kebab poulet',        img: '/gallery/d44.jpg', price: '16,00 €' },
      { name: 'Kebab veau',          img: '/gallery/d45.jpg', price: '17,00 €' },
      { name: 'Poulet Grillé',       img: '/gallery/d40.jpg', price: '17,00 €' },
      { name: 'Bœuf haché',          img: '/gallery/d41.jpg', price: '17,00 €' },
      { name: 'Sucuk',               img: '/gallery/d48.jpg', price: '15,50 €' },
      { name: 'Salami',              img: '/gallery/d47.jpg', price: '15,50 €' },
      { name: 'Fromage blanc',       img: '/gallery/d43.jpg', price: '12,50 €' },
      { name: 'Épinard',             img: '/gallery/d42.jpg', price: '13,50 €' },
      { name: 'Légumes',             img: '/gallery/d46.jpg', price: '14,00 €' },
    ],
  },
  {
    cat: 'snacks',
    items: [
      { name: 'Kebab Box poulet', img: '/gallery/d50.jpg', price: '7,50 €' },
      { name: 'Kebab Box veau',   img: '/gallery/d51.jpg', price: '9,00 €' },
      { name: 'Nuggets (7pcs)',   img: '/gallery/d52.jpg', price: '7,50 €' },
      { name: 'Frites',           img: '/gallery/d53.jpg', price: '4,00 €' },
      { name: 'Baklava',          img: '/gallery/d49.jpg', price: '3,50 €' },
    ],
  },
];

// renvoie la valeur dans la langue voulue (string ou {fr,de,en})
export function tr(value, lang) {
  if (value == null) return '';
  return typeof value === 'string' ? value : (value[lang] ?? value.fr ?? '');
}
