window.PORTFOLIO_BRANDS = {
  'Apple': {key:'apple', file:'apple.svg', width:14, height:17},
  'Land Rover': {key:'land-rover', file:'land-rover.svg', width:227, height:119},
  'Range Rover Velar': {key:'range-rover', file:'range-rover-slate.svg', width:191.2, height:11.1},
  'Range Rover Sport': {key:'range-rover', file:'range-rover-slate.svg', width:191.2, height:11.1},
  'FAB': {key:'fab', file:'fab.svg', width:87, height:52},
  'La Vache qui rit': {key:'la-vache-qui-rit', file:'la-vache-qui-rit-full.png', width:324, height:352},
  'Cartoon Network': {key:'cartoon-network', file:'cartoon-network.svg', width:600, height:347.5},
};
window.portfolioBrandMarkup = client => {
  const escaped = String(client).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const brand = window.PORTFOLIO_BRANDS[client];
  if (!brand) return escaped;
  return `<span class="brand-mark brand-${brand.key}"><img src="brands/${brand.file}" alt="${escaped}" width="${brand.width}" height="${brand.height}" decoding="async"></span>`;
};
