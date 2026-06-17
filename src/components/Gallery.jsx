// Île React — galerie avec lightbox. Récupère /data/gallery.json au runtime,
// donc les photos ajoutées via le back-office PHP apparaissent SANS rebuild.
import { useEffect, useState } from 'react';

export default function Gallery({ initial = [] }) {
  const [images, setImages] = useState(initial);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch('/data/gallery.json?_=' + Date.now())
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.images) setImages(d.images); })
      .catch(() => {});
  }, []);

  return (
    <div className="gallery">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <button key={i} className="gallery-thumb" onClick={() => setActive(i)} aria-label={img.alt}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {active !== null && images[active] && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <img src={images[active].src} alt={images[active].alt} />
          <button className="gallery-close" onClick={() => setActive(null)} aria-label="Fermer">×</button>
        </div>
      )}

      <style>{`
        .gallery-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.75rem}
        .gallery-thumb{padding:0;border:none;cursor:pointer;background:none;border-radius:12px;overflow:hidden}
        .gallery-thumb img{aspect-ratio:1;object-fit:cover;width:100%;transition:transform .2s}
        .gallery-thumb:hover img{transform:scale(1.05)}
        .gallery-lightbox{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:2rem;cursor:zoom-out}
        .gallery-lightbox img{max-width:90vw;max-height:90vh;border-radius:8px}
        .gallery-close{position:absolute;top:1rem;right:1.5rem;font-size:2.5rem;color:#fff;background:none;border:none;cursor:pointer;line-height:1}
      `}</style>
    </div>
  );
}
