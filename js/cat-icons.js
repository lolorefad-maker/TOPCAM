// أيقونات الأقسام — رسم خطي أسود (SVG) مرسوم خصيصاً لـ TOP CAM
window.TC_ICONS = (function () {
  const w = (body) => `<svg class="tc-ico" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  return {
    cameras: w('<path d="M4 10.5h5l2.2-3.5h9.6l2.2 3.5h5v15H4z"/><circle cx="16" cy="17.5" r="5.2"/><circle cx="16" cy="17.5" r="2.4"/><path d="M24.5 13.5h1.5"/>'),
    lenses: w('<rect x="8" y="4" width="16" height="5" rx="1"/><rect x="9" y="9" width="14" height="15"/><path d="M9 13h14M9 20h14M11.5 13v7M14.5 13v7M17.5 13v7M20.5 13v7"/><rect x="10.5" y="24" width="11" height="4" rx="1"/>'),
    lighting: w('<rect x="10" y="5" width="12" height="8" rx="1"/><path d="M12 8.5h8M10 13l1.5 3h9L22 13"/><rect x="12" y="16" width="8" height="11" rx="1"/><path d="M14.5 19h3M14.5 22h3M5 4.5l2.5 2M27 4.5l-2.5 2M4 9h3M28 9h-3"/>'),
    audio: w('<circle cx="21" cy="10" r="5.5"/><path d="M17.2 14 6 25.2a1.6 1.6 0 0 0 2.3 2.3L19.5 16.3"/><path d="M18.5 6.5l5 5M17 9.5l3.5 3.5"/>'),
    video: w('<rect x="4" y="6" width="24" height="15" rx="1.5"/><path d="M13 11v5l4.5-2.5z"/><path d="M12 26h8M16 21v5"/>'),
    gimbals: w('<rect x="16" y="4" width="10" height="7" rx="1"/><circle cx="21" cy="7.5" r="1.8"/><path d="M14 7.5h2M14 7.5v6h-4v4"/><circle cx="10" cy="19" r="2"/><path d="M10 21v8M8 29h4"/>'),
    cages: w('<rect x="4" y="8" width="24" height="17" rx="1.5"/><rect x="8" y="12" width="16" height="9" rx="1"/><circle cx="16" cy="16.5" r="2.4"/><path d="M11 5h10v3M4 13h-1v7h1M28 13h1v7h-1"/>'),
    tripods: w('<rect x="11" y="3" width="10" height="5" rx="1"/><path d="M16 8v5M13 13h6M16 13v15M16 13 7 28M16 13l9 15M21 5.5h4"/>'),
    batteries: w('<rect x="3" y="10" width="23" height="12" rx="2"/><path d="M26 14h3v4h-3"/><path d="M7.5 14v4M12 14v4M16.5 14v4"/>'),
    bags: w('<path d="M11 8V6.5A2.5 2.5 0 0 1 13.5 4h5A2.5 2.5 0 0 1 21 6.5V8"/><path d="M8 8h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"/><path d="M10 15h12v6H10zM16 15v2"/>'),
    memory: w('<path d="M9 4h11l5 5v17a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M11 4v5M14.5 4v5M18 4v5"/><rect x="11" y="16" width="10" height="8" rx="1"/>'),
    accessories: w('<rect x="8" y="11" width="16" height="10" rx="1.5"/><path d="M11 11V5h10v6M11 21v6h10v-6M24 14h2v4h-2"/><circle cx="19.5" cy="16" r="1"/>'),
    mobile: w('<rect x="9" y="3" width="14" height="26" rx="2.5"/><path d="M14 6h4M15 25.5h2"/>'),
    all: w('<rect x="5" y="5" width="9" height="9" rx="1.5"/><rect x="18" y="5" width="9" height="9" rx="1.5"/><rect x="5" y="18" width="9" height="9" rx="1.5"/><rect x="18" y="18" width="9" height="9" rx="1.5"/>'),
  };
})();
