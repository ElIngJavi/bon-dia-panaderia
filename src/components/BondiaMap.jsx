import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const LAT  = 32.532729595592954
const LNG  = -117.11299327058407
const LAT2 = 32.51811499967478
const LNG2 = -117.11661508587873

const WA_SVG = `<svg style="width:14px;height:14px;flex-shrink:0;" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`

export default function BondiaMap() {
  const mapRef = useRef(null)
  const instanceRef = useRef(null)

  useEffect(() => {
    if (instanceRef.current) return

    import('leaflet').then((L) => {
      const Leaflet = L.default

      const map = Leaflet.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
      })

      instanceRef.current = map

      Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map)

      const customIcon = Leaflet.divIcon({
        className: '',
        html: `<div style="width:44px;height:44px;background:#C2541A;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(194,84,26,0.55);border:3px solid white;"><span style="transform:rotate(45deg);font-family:'Playfair Display',serif;font-size:8px;font-weight:700;color:white;line-height:1.2;text-align:center;">Bon<br>dia</span></div>`,
        iconSize:    [44, 44],
        iconAnchor:  [22, 44],
        popupAnchor: [0, -52],
      })

      const denisseIcon = Leaflet.divIcon({
        className: '',
        html: `<div style="width:44px;height:44px;background:#7B4FB5;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(123,79,181,0.55);border:3px solid white;"><span style="transform:rotate(45deg);font-family:'Playfair Display',serif;font-size:7px;font-weight:700;color:white;line-height:1.2;text-align:center;">Den<br>isse</span></div>`,
        iconSize:    [44, 44],
        iconAnchor:  [22, 44],
        popupAnchor: [0, -52],
      })

      const marker = Leaflet.marker([LAT, LNG], { icon: customIcon }).addTo(map)
      marker.bindPopup(`
        <div class="bondia-popup">
          <div class="bondia-popup-header">
            <div class="bondia-popup-logo">Bon<br>dia</div>
            <div>
              <div class="bondia-popup-name">Bon Dia Panadería</div>
              <div class="bondia-popup-sub">Panadería artesanal</div>
            </div>
          </div>
          <div class="bondia-popup-body">
            <div class="bondia-popup-row">
              <svg viewBox="0 0 24 24" fill="#C2541A"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Kiosko K-4 · C.C. Playas<br>Tijuana, BC</span>
            </div>
            <div class="bondia-popup-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="#C2541A" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>Lun–Vie 10am–7pm · Sáb 10am–5pm</span>
            </div>
          </div>
          <a href="https://wa.me/526645022113" target="_blank" rel="noopener" class="bondia-popup-wa">
            ${WA_SVG}
            WhatsApp
          </a>
        </div>
      `, { maxWidth: 260, className: 'bondia-popup-wrap' })

      Leaflet.circle([LAT, LNG], {
        color: '#C2541A', fillColor: '#C2541A', fillOpacity: 0.07, radius: 70, weight: 1,
      }).addTo(map)

      const marker2 = Leaflet.marker([LAT2, LNG2], { icon: denisseIcon }).addTo(map)
      marker2.bindPopup(`
        <div class="bondia-popup">
          <div class="bondia-popup-header">
            <div class="bondia-popup-logo" style="background:#7B4FB5;">Den<br>isse</div>
            <div>
              <div class="bondia-popup-name">Panadería y Pastelería Denisse</div>
              <div class="bondia-popup-sub">Punto de venta · Bon Dia</div>
            </div>
          </div>
          <div class="bondia-popup-body">
            <div class="bondia-popup-row">
              <svg viewBox="0 0 24 24" fill="#7B4FB5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>De Las Nubes 631<br>Jardines del Sol, Playas de Tijuana</span>
            </div>
          </div>
          <a href="https://wa.me/526645022113" target="_blank" rel="noopener" class="bondia-popup-wa">
            ${WA_SVG}
            Pedir a Bon Dia
          </a>
        </div>
      `, { maxWidth: 260, className: 'bondia-popup-wrap' })

      Leaflet.circle([LAT2, LNG2], {
        color: '#7B4FB5', fillColor: '#7B4FB5', fillOpacity: 0.07, radius: 70, weight: 1,
      }).addTo(map)

      const bounds = Leaflet.latLngBounds([[LAT, LNG], [LAT2, LNG2]])
      map.fitBounds(bounds, { padding: [60, 60] })

      setTimeout(() => { marker.openPopup() }, 700)
    })

    return () => {
      if (instanceRef.current) {
        instanceRef.current.remove()
        instanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />
}
