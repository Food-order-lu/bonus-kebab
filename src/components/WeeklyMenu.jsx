// Île React — Menu de la semaine (image). Récupère /data/weekly-menu.json au runtime,
// donc la photo mise via le back-office apparaît SANS rebuild. Se masque si aucune image.
import { useEffect, useState } from 'react';

export default function WeeklyMenu({ initial = null, emptyText = '' }) {
  const [img, setImg] = useState(initial);
  const [loaded, setLoaded] = useState(false);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    fetch('/data/weekly-menu.json?_=' + Date.now())
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { setImg(d && d.image ? d : null); setLoaded(true); })
      .catch(() => setLoaded(true));
  }, []);

  if (loaded && (!img || !img.image)) {
    return <p className="weekly-empty">{emptyText}</p>;
  }
  if (!img || !img.image) return null;

  return (
    <div className="weekly-wrap">
      <button className="weekly-imgbtn" onClick={() => setZoom(true)} aria-label="Agrandir">
        <img src={img.image} alt={img.alt || 'Menu de la semaine'} loading="lazy" />
      </button>
      {zoom && (
        <div className="weekly-zoom" role="dialog" aria-modal="true" onClick={() => setZoom(false)}>
          <img src={img.image} alt={img.alt || 'Menu de la semaine'} />
          <button className="weekly-close" onClick={() => setZoom(false)} aria-label="Fermer">×</button>
        </div>
      )}
      <style>{`
        .weekly-wrap{display:flex;justify-content:center}
        .weekly-imgbtn{padding:0;border:none;background:none;cursor:zoom-in;max-width:560px;width:100%;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.12)}
        .weekly-imgbtn img{width:100%;display:block}
        .weekly-empty{text-align:center;color:var(--color-muted)}
        .weekly-zoom{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:2rem;cursor:zoom-out}
        .weekly-zoom img{max-width:92vw;max-height:92vh;border-radius:8px}
        .weekly-close{position:absolute;top:1rem;right:1.5rem;font-size:2.5rem;color:#fff;background:none;border:none;cursor:pointer;line-height:1}
      `}</style>
    </div>
  );
}
