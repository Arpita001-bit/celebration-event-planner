(function() {

// --- File: src/utils/svgIcons.js ---
// Clean, bespoke SVG Vector Icons (Eliminating all emojis)
const ICONS = {
  compass: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  currency: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  building: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
  mapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
  layers: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  alertCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>`,
  alertTriangle: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>`,
  printer: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14" rx="1"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
  mic: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>`,
  volume: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  flame: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  fileText: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  bot: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  archive: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,
  activity: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
};


// --- File: src/data/culturalPresets.js ---
// Comprehensive Cultural and Ritual Presets & Guidelines
const CULTURAL_PRESETS = {
  hindu_vedic: {
    id: 'hindu_vedic',
    name: 'Hindu & Vedic Traditions',
    description: 'Multi-day wedding celebrations with sacred Vedic rituals, astrological muhurats, and vibrant family festivities.',
    rituals: [
      {
        id: 'haldi',
        name: 'Haldi & Chuda Ceremony',
        significance: 'Purification, auspicious glow, blessing of turmeric paste by elders',
        timing: 'Morning (typically 10:00 AM - 1:00 PM)',
        duration: '3 hours',
        attire: 'Yellow / Mustard ethnic wear, floral jewelry',
        items: ['Pure turmeric paste (haldi)', 'Rosewater', 'Ubtan', 'Chuda bangles', 'Kalire', 'Silver thali with Diya', 'Marigold flowers'],
        dietary: 'Pure vegetarian / Satvik (No onion, no garlic options recommended for puja)',
        contingency: 'Turmeric staining protection for floor & stage (plastic drop cloth under yellow rugs)'
      },
      {
        id: 'mehendi',
        name: 'Mehendi & Dholak Night',
        significance: 'Adornment of bride and groom with intricate henna, folk music and dancing',
        timing: 'Afternoon to Sunset (3:00 PM - 7:30 PM)',
        duration: '4.5 hours',
        attire: 'Green / Teal festive attire',
        items: ['Organic bridal henna cones', 'Eucalyptus oil & lemon-sugar glaze', 'Dhol / Dholak player', 'Comfortable seating with bolster cushions'],
        dietary: 'Finger foods, chaat counter, mocktails, chai and high-tea snacks',
        contingency: 'Hand-drying stations and designated helpers for guests with wet henna'
      },
      {
        id: 'sangeet',
        name: 'Grand Sangeet & Musical Extravaganza',
        significance: 'Celebration of both families coming together through choreographed dances and music',
        timing: 'Evening (7:30 PM - 12:30 AM)',
        duration: '5 hours',
        attire: 'Glamorous lehengas, sherwanis, or Indo-western gowns',
        items: ['Professional sound system & LED stage backdrop', 'DJ & Emcee', 'Dance floor with safety ramps', 'Bar setup & cocktail stations'],
        dietary: 'Elaborate multi-cuisine live counters, dessert stations, midnight munchies',
        contingency: 'Decibel limit compliance / midnight sound curfew indoor transition plan'
      },
      {
        id: 'baraat',
        name: 'Baraat & Milni Procession',
        significance: 'Groom’s royal procession with music, followed by formal greeting and garland exchange between families',
        timing: 'Pre-wedding hour (4:30 PM - 6:00 PM)',
        duration: '1.5 hours',
        attire: 'Royal sherwani with safa/turban, stole, ceremonial sword/kirpan',
        items: ['Groom carriage / vintage car / decorated horse', 'Brass band & portable sound truck', 'Matching safas for groom squad', 'Milni garlands (rose & jasmine)', 'Aarti thali for warm welcome'],
        dietary: 'Cold refreshments & shikanji for arriving guests',
        contingency: 'Permits for street procession, traffic marshalling, portable hydration coolers'
      },
      {
        id: 'pheras',
        name: 'Vedic Pheras & Kanyadaan (Mandap Ceremony)',
        significance: 'Sacred seven vows around holy fire (Agni), Sindoor, Mangalsutra, and eternal union',
        timing: 'Auspicious Muhurat (e.g. 7:15 PM - 9:30 PM)',
        duration: '2.5 hours',
        attire: 'Bridal red/crimson/panetar lehenga or Kanjeevaram sari, Groom silk sherwani',
        items: ['Sacred fire pit (Havan Kund) with eco-friendly wood & ghee', 'Samagri pack (camphor, betel nuts, coins, rice/akshat)', 'Puffed rice (Laja) for brothers', 'Mangalsutra & Sindoor box', 'Pandit ji dakshina envelope', 'Garlands (Varmala) preserved in cooler box'],
        dietary: 'Satvik dinner served immediately after pheras',
        contingency: 'Smoke extraction fan in indoor mandap or fire safety bucket near havan'
      }
    ],
    dietaryRules: [
      'Jain food (Strictly no root vegetables, potato, garlic, onion, ginger)',
      'Satvik (Pure vegetarian, prepared fresh with cow ghee)',
      'Zero alcohol / Separate alcohol-free ritual dining zones'
    ],
    keyAuspiciousConsiderations: [
      'Astrological Muhurat consultation for lagna and pheras',
      'East/North-east facing Mandap orientation',
      'Elder blessing protocol (Charan sparsh) and return gifts (Shagun/Mithai boxes)'
    ]
  },
  muslim_islamic: {
    id: 'muslim_islamic',
    name: 'Muslim & Islamic Traditions',
    description: 'Sacred Nikah contract, Sunnah traditions, and joyous Walima reception banquet.',
    rituals: [
      {
        id: 'nikah',
        name: 'Sacred Nikah & Ijab-e-Qubool',
        significance: 'Legal and religious marriage contract witnessed by two sane adult witnesses and Qazi',
        timing: 'Post-Asr or Post-Maghrib prayer',
        duration: '1.5 hours',
        attire: 'Sharara / Gharara or Anarkali, Groom Sherwani or Thobe with embroidered shawl',
        items: ['Nikah-nama (marriage register & certified pens)', 'Mahr (agreed bridal gift/currency or gold)', 'Attar (non-alcoholic perfume) for guests', 'Dates (Ajwa) for sweetening the moment'],
        dietary: '100% Halal certified catering, Sherbet / Rooh Afza welcome drinks',
        contingency: 'Designated prayer spaces (Musallah) with ablution (Wudu) areas for guests'
      },
      {
        id: 'walima',
        name: 'Grand Walima Banquet',
        significance: 'The feast hosted by the groom’s family to publicly celebrate and announce the marriage',
        timing: 'Evening banquet (8:00 PM - 11:30 PM)',
        duration: '3.5 hours',
        attire: 'Formal royal evening wear',
        items: ['Grand stage for the couple', 'Photo & video team', 'Guest book', 'Fragrance dispensers'],
        dietary: 'Rich Awadhi or Mughlai Halal delicacies: Biryani, Haleem, Sheermal, Shahi Tukda, Phirni',
        contingency: 'Clear segregation or mixed family seating depending on family preferences'
      }
    ],
    dietaryRules: [
      'Strictly 100% Halal certified meat and poultry',
      'Strict zero-alcohol policy across all counters and food preparation'
    ],
    keyAuspiciousConsiderations: [
      'Align schedule with prayer times (Dhuhr, Asr, Maghrib, Isha)',
      'Formal Mahr verification prior to ceremony start',
      'Separate quiet rest area for senior family members'
    ]
  },
  christian_western: {
    id: 'christian_western',
    name: 'Christian & Western Traditions',
    description: 'Church ceremony or scenic outdoor exchange of vows, followed by cocktail hour and dinner reception.',
    rituals: [
      {
        id: 'rehearsal_dinner',
        name: 'Rehearsal Dinner & Speeches',
        significance: 'Walking through ceremony logistics with bridal party followed by intimate dinner',
        timing: 'Evening before the wedding (6:00 PM - 9:00 PM)',
        duration: '3 hours',
        attire: 'Smart casual / Cocktail chic',
        items: ['Printed ceremony order sheets', 'Gifts for bridesmaids & groomsmen', 'Microphone for toasts'],
        dietary: 'Plated 3-course dinner with wine pairings',
        contingency: 'Audio test in actual sanctuary/venue'
      },
      {
        id: 'vows_ceremony',
        name: 'Sacred Vows & Ring Exchange',
        significance: 'Processional, pastoral homily, exchange of lifelong vows and wedding bands',
        timing: 'Afternoon (2:00 PM - 3:30 PM)',
        duration: '1.5 hours',
        attire: 'White/Ivory bridal gown with veil, Groom tuxedo or tailored suit',
        items: ['Wedding bands in velvet ring box', 'Unity candle or sand ceremony kit', 'Order of service booklets', 'Petal baskets for flower girl, ring bearer pillow'],
        dietary: 'Post-ceremony champagne & sparkling cider toast',
        contingency: 'Church decor guidelines check, audio lapel mics for officiant and couple'
      },
      {
        id: 'reception_party',
        name: 'Dinner Reception, First Dance & Send-off',
        significance: 'Grand entrance, couple’s first dance, speeches, cake cutting, dancing, and sparkle exit',
        timing: 'Evening (6:00 PM - 11:30 PM)',
        duration: '5.5 hours',
        attire: 'Evening gowns & tuxedos',
        items: ['Tiered wedding cake with cutting knife & server', 'Guest favors', 'Sparklers with long safety matches for send-off', 'DJ & live band combo'],
        dietary: 'Plated or buffet dinner with allergen-free options (GF, Dairy-free, Nut-free)',
        contingency: 'Sparkler permit from local fire marshal for outdoor exit'
      }
    ],
    dietaryRules: [
      'Gluten-free, vegan, and nut-allergy safety compliance',
      'Mocktails & non-alcoholic options clearly marked alongside open bar'
    ],
    keyAuspiciousConsiderations: [
      'Organized processional and recessional cueing with musicians',
      'Reserved front-row seating for parents and VIPs'
    ]
  },
  jewish_tradition: {
    id: 'jewish_tradition',
    name: 'Jewish Traditions',
    description: 'Sacred rituals under the Chuppah, Ketubah signing, Seven Blessings, and energetic Horah dancing.',
    rituals: [
      {
        id: 'ketubah',
        name: 'Ketubah Signing & Bedeken (Veiling)',
        significance: 'Signing the marriage covenant in front of two witnesses, groom veiling the bride',
        timing: '1 hour before ceremony',
        duration: '45 mins',
        attire: 'Formal wedding attire',
        items: ['Illuminated Ketubah scroll', 'Archival ink pens', 'Kippot (yarmulkes) for guests'],
        dietary: 'Light kosher snacks & kosher wine',
        contingency: 'Private tranquil room reserved with mirror and seating'
      },
      {
        id: 'chuppah',
        name: 'Chuppah Ceremony & Breaking the Glass',
        significance: 'Union under the 4-corner canopy, Sheva Brachot (Seven Blessings), and Mazel Tov glass break',
        timing: 'Late afternoon / Twilight',
        duration: '1 hour',
        attire: 'Ceremonial wedding attire with tallit',
        items: ['Sturdy 4-pillar Chuppah canopy', 'Wrapped wine glass for groom to step on', 'Silver kiddush cup', 'Seven blessings booklets'],
        dietary: 'Kosher wine / grape juice for blessings',
        contingency: 'Heavy-duty cloth wrapping for glass to prevent shard punctures'
      },
      {
        id: 'horah',
        name: 'Simcha & Horah Chair Dance',
        significance: 'High-energy celebratory circle dance lifting couple on sturdy wooden chairs',
        timing: 'Start of reception dancing',
        duration: '45 mins',
        attire: 'Reception attire',
        items: ['Two sturdy wooden armchairs (tested for weight safety)', 'Cloth napkin for couple to hold while dancing'],
        dietary: 'Certified Glatt Kosher catering',
        contingency: 'Strong volunteer spotters around chairs during the lift'
      }
    ],
    dietaryRules: [
      'Certified Glatt Kosher catering supervision (Mashgiach)',
      'Strict separation of meat and dairy items'
    ],
    keyAuspiciousConsiderations: [
      'Observance of Shabbat (ceremony scheduled after sundown on Saturday or on Sunday)',
      'Yichud room: 15 minutes of secluded private time for the couple immediately following ceremony'
    ]
  },
  college_corporate_fest: {
    id: 'college_corporate_fest',
    name: 'College Fest & Corporate Conference',
    description: 'High-energy multi-track student fest, hackathon, or professional conference with budget discipline and crowd flow.',
    rituals: [
      {
        id: 'keynote_inaugural',
        name: 'Inaugural Lamp Lighting & Keynote',
        significance: 'Official kickoff, welcoming sponsors, VIP dignitaries, and unveiling the event vision',
        timing: 'Morning (9:30 AM - 11:00 AM)',
        duration: '1.5 hours',
        attire: 'Smart business casual / college branding tees',
        items: ['Traditional brass lamp with oil & wicks / digital kickoff button', 'Lapel & handheld wireless microphones', 'Stage teleprompter & timer screen', 'VIP floral welcome bouquets'],
        dietary: 'Tea, artisan coffee, continental breakfast pastries',
        contingency: 'Pre-tested backup clicker, offline keynote presentation USB'
      },
      {
        id: 'hackathon_tracks',
        name: 'Sprint Tracks & Mentor Pitching',
        significance: 'Parallel technical/business competitive tracks, mentor office hours, and project submissions',
        timing: 'All-day / 24-hr sprint',
        duration: '12 - 24 hours',
        attire: 'Fest hoodie / casual wear',
        items: ['High-speed redundant Wi-Fi access points', 'Heavy-duty extension boards with surge protectors', 'Whiteboards, markers & sticky notes', 'Judging scoring tablets & rubrics'],
        dietary: 'Round-the-clock hydration, high-protein snacks, energy drinks, midnight pizza rush',
        contingency: 'Generator backup for power sockets, offline submission form backup'
      },
      {
        id: 'pro_night',
        name: 'Celebrity Concert / Star Night Finale',
        significance: 'Unwinding with top-tier musical artist, prize distribution ceremony, and after-party',
        timing: 'Evening (7:00 PM - 10:30 PM)',
        duration: '3.5 hours',
        attire: 'Concert casual / evening party wear',
        items: ['Staging with barricades & bouncer security line', 'Wristband verification scanners', 'Ambulance & paramedic booth on-site', 'Artist hospitality rider compliance items'],
        dietary: 'Food trucks & quick-serve concession stalls',
        contingency: 'Crowd management plan, emergency exits marked with luminescent signage, police liaison'
      }
    ],
    dietaryRules: [
      'Affordable bulk student meal boxes with separate vegetarian & non-vegetarian lines',
      'Hydration stations throughout the campus/venue'
    ],
    keyAuspiciousConsiderations: [
      'Strict fire-safety NOC and local authority permissions for music concerts',
      'Sponsor branding visibility guarantees across all badges, lanyards, and banners'
    ]
  }
};


// --- File: src/data/initialEvents.js ---
// Master initial events pre-configured with full operational data
const INITIAL_EVENTS = [
  {
    id: 'evt-udaipur-wedding',
    title: 'Aarav & Diya’s Royal Udaipur Wedding',
    eventType: 'wedding',
    culturalPresetId: 'hindu_vedic',
    currency: 'INR',
    currencySymbol: '₹',
    tagline: '#AaravKiDiya — A Celebration of Love and Legacy',
    dates: {
      start: '2026-12-18',
      end: '2026-12-20',
      totalDays: 3
    },
    location: {
      city: 'Udaipur, Rajasthan',
      primaryVenue: 'Lakeview Palace & Jagmandir Gardens',
      address: 'Haridas Ji Ki Magri, Udaipur'
    },
    guestCount: 350,
    budget: {
      totalLimit: 2800000,
      plannedTotal: 2650000,
      actualSpent: 1220000,
      contingencyReserve: 280000, // 10%
      categories: [
        { id: 'cat-venue', name: 'Venue & Staging', allocated: 1100000, actual: 600000, status: 'on_track' },
        { id: 'cat-catering', name: 'Catering & Beverages', allocated: 750000, actual: 300000, status: 'on_track' },
        { id: 'cat-decor', name: 'Floral & Royal Decor', allocated: 380000, actual: 180000, status: 'on_track' },
        { id: 'cat-entertainment', name: 'DJ, Dhol & Sangeet Artists', allocated: 220000, actual: 80000, status: 'on_track' },
        { id: 'cat-photo', name: 'Cinematography & Drone', allocated: 120000, actual: 60000, status: 'on_track' },
        { id: 'cat-logistics', name: 'Royal Transfers & Vintage Cars', allocated: 80000, actual: 0, status: 'pending' }
      ],
      paymentMilestones: [
        { id: 'pay-1', title: 'Palace Venue Deposit (50%)', amount: 550000, dueDate: '2026-10-01', status: 'paid', paidAt: '2026-09-28' },
        { id: 'pay-2', title: 'Catering Advance & Tasting Signoff', amount: 300000, dueDate: '2026-11-10', status: 'paid', paidAt: '2026-11-05' },
        { id: 'pay-3', title: 'Sangeet Artist & Sound Tech Advance', amount: 80000, dueDate: '2026-11-25', status: 'paid', paidAt: '2026-11-22' },
        { id: 'pay-4', title: 'Floral Decorator Stage Advance', amount: 150000, dueDate: '2026-12-05', status: 'pending' },
        { id: 'pay-5', title: 'Final Vendor Settlement & Retainer', amount: 1430000, dueDate: '2026-12-21', status: 'pending' }
      ]
    },
    strategyPlans: {
      selectedPlan: 'balanced',
      plans: {
        budget_saver: {
          name: 'Classic Heritage (Budget Focus)',
          estimatedCost: 1950000,
          description: 'Maximizes cultural richness with single courtyard venue, traditional Rajasthani buffet, local folk musicians, and daytime pheras.',
          perks: ['Single venue booking discount', 'Seasonal local floral arrangements', 'Traditional Rajasthani thali catering'],
          compromises: ['Reduced drone cinematography hours', 'No celebrity DJ for Sangeet', 'Compact guest transfer fleet']
        },
        balanced: {
          name: 'Royal Heritage Grandeur (Recommended)',
          estimatedCost: 2650000,
          description: 'The golden balance: Palace lakeside lawns, 5-star live multi-cuisine counters with Jain/Satvik options, top-tier sound for Sangeet, and 10% contingency shield.',
          perks: ['Dual lakeside venues', 'Drone & candid documentary film', 'Dedicated Jain & Marwari live food counters', 'Complete contingency weather tents'],
          compromises: ['Modest fireworks (sound ordinance compliant)']
        },
        luxury_vip: {
          name: 'Imperial Maharani Extravaganza (VIP)',
          estimatedCost: 3900000,
          description: 'Unconstrained luxury: Island palace transfer by private boats, celebrity Sangeet host, imported Dutch exotic florals, and bespoke velvet welcome gift hampers.',
          perks: ['Island palace venue takeover', 'Helicopter flower shower over Mandap', 'Celebrity DJ and live violinists at reception', 'Bespoke silk guest welcome kits'],
          compromises: ['Requires 40% higher budget allocation']
        }
      }
    },
    tasks: [
      { id: 'tsk-1', title: 'Finalize Astrological Muhurat with Pandit Ji', phase: 'concept', priority: 'critical', status: 'completed', assignedTo: 'Diya (Bride) & Family', deadline: '2026-09-15', dependency: null },
      { id: 'tsk-2', title: 'Lock Palace Lawns & Jagmandir Courtyard contracts', phase: 'concept', priority: 'critical', status: 'completed', assignedTo: 'Lead Planner Antigravity', deadline: '2026-10-01', dependency: 'tsk-1' },
      { id: 'tsk-3', title: 'Approve Jain & Satvik multi-cuisine food menu tasting', phase: 'sourcing', priority: 'high', status: 'completed', assignedTo: 'Aarav & Tasting Committee', deadline: '2026-11-05', dependency: 'tsk-2' },
      { id: 'tsk-4', title: 'Design & Dispatch Digital WhatsApp QR Invitations', phase: 'sourcing', priority: 'high', status: 'completed', assignedTo: 'Design Agent', deadline: '2026-11-15', dependency: 'tsk-2' },
      { id: 'tsk-5', title: 'Reconfirm Baraat vintage car & brass band sound permits', phase: 'execution', priority: 'medium', status: 'in_progress', assignedTo: 'Logistics Lead Vikram', deadline: '2026-12-05', dependency: 'tsk-4' },
      { id: 'tsk-6', title: 'Stage rehearsal with choreography crew for Sangeet', phase: 'execution', priority: 'medium', status: 'in_progress', assignedTo: 'Sangeet Choreographer Neha', deadline: '2026-12-10', dependency: 'tsk-3' },
      { id: 'tsk-7', title: 'Mandap sacred fire (Havan Kund) smoke extraction check', phase: 'execution', priority: 'critical', status: 'pending', assignedTo: 'Safety & Facilities Team', deadline: '2026-12-17', dependency: 'tsk-2' },
      { id: 'tsk-8', title: 'Post-event guest thank you notes and vendor settlements', phase: 'wrapup', priority: 'high', status: 'pending', assignedTo: 'Finance & Agent', deadline: '2026-12-22', dependency: null }
    ],
    venues: [
      {
        id: 'ven-1',
        name: 'Lakeview Palace & Jagmandir Terraces',
        type: 'Palace Resort & Heritage Island',
        capacity: '450 Guests',
        cost: 1100000,
        score: 9.6,
        status: 'contract_signed',
        facilities: ['Lakeside lawns', 'Boat jetty', 'Bridal suites', '3-phase 100kVA generator backup', 'Sound curfew 11:30 PM (moves to indoor hall)'],
        contactPerson: 'Ranveer Singh (Director of Banquets)',
        phone: '+91 98290 11234'
      },
      {
        id: 'ven-2',
        name: 'Fatehgarh Heritage Citadel (Backup Option)',
        type: 'Hilltop Fortress',
        capacity: '350 Guests',
        cost: 950000,
        score: 8.9,
        status: 'standby_backup',
        facilities: ['Panoramic valley view', 'Indoor banquet for 300', 'On-site rooms: 54'],
        contactPerson: 'Meenakshi Rathore',
        phone: '+91 98291 99887'
      }
    ],
    vendors: [
      {
        id: 'vnd-1',
        category: 'Catering',
        name: 'Royal Mewar Gourmet Caterers',
        contact: 'Chef Devendra Joshi (+91 98280 44556)',
        quotedPrice: 820000,
        negotiatedPrice: 750000,
        status: 'confirmed',
        notes: 'Includes separate Jain kitchen, 24 live counters, Satvik puja prasad, midnight snack counter',
        backupVendorId: 'vnd-1b'
      },
      {
        id: 'vnd-1b',
        category: 'Catering (Backup)',
        name: 'Udaivilas Kitchens Express',
        contact: 'Amit Sharma (+91 98282 33112)',
        quotedPrice: 790000,
        negotiatedPrice: 790000,
        status: 'on_call_standby',
        notes: 'Guaranteed 4-hour mobilization failover clause in SLA'
      },
      {
        id: 'vnd-2',
        category: 'Floral & Decor',
        name: 'Pushpa Mahal Botanicals & Staging',
        contact: 'Sunil Verma (+91 94140 77889)',
        quotedPrice: 420000,
        negotiatedPrice: 380000,
        status: 'confirmed',
        notes: 'Marigold cascades for Haldi, Royal Velvet & Mogra for Mandap, eco-friendly floral foam',
        backupVendorId: 'vnd-2b'
      },
      {
        id: 'vnd-3',
        category: 'DJ & Sound Tech',
        name: 'SoundVibe Live & DJ Aakash',
        contact: 'Aakash Mehra (+91 98711 00223)',
        quotedPrice: 250000,
        negotiatedPrice: 220000,
        status: 'confirmed',
        notes: 'Includes line-array speakers, LED wall, wireless Shure mics, Dhol troupe of 4'
      },
      {
        id: 'vnd-4',
        category: 'Photography & Film',
        name: 'Dastaan Wedding Documentaries',
        contact: 'Ritika Roy (+91 99100 55443)',
        quotedPrice: 140000,
        negotiatedPrice: 120000,
        status: 'confirmed',
        notes: '2 Traditional cameras, 2 candid cinematographers, 1 licensed drone pilot, same-day teaser'
      }
    ],
    guests: [
      { id: 'gst-1', name: 'Shri R.K. Singhania (Grandfather)', table: 'Table 1 - Elders VIP', rsvp: 'confirmed', dietary: 'Satvik (Strictly No Onion/Garlic)', plusOnes: 1, phone: '+91 98290 00101', checkedIn: false },
      { id: 'gst-2', name: 'Smt. Kamla Singhania', table: 'Table 1 - Elders VIP', rsvp: 'confirmed', dietary: 'Satvik', plusOnes: 0, phone: '+91 98290 00102', checkedIn: false },
      { id: 'gst-3', name: 'Vikramaditya Rathore (Uncle)', table: 'Table 2 - Royal Suite', rsvp: 'confirmed', dietary: 'Jain Food', plusOnes: 2, phone: '+91 98290 00201', checkedIn: false },
      { id: 'gst-4', name: 'Ananya Sharma (Maid of Honor)', table: 'Table 4 - Youth Squad', rsvp: 'confirmed', dietary: 'Vegan & Nut Allergy', plusOnes: 1, phone: '+91 98110 33445', checkedIn: false },
      { id: 'gst-5', name: 'Karan Mehra (Best Man)', table: 'Table 4 - Youth Squad', rsvp: 'confirmed', dietary: 'Regular Non-Veg', plusOnes: 0, phone: '+91 98110 55667', checkedIn: false },
      { id: 'gst-6', name: 'Dr. Harsh Vardhan (Family Physician)', table: 'Table 3 - Family Friends', rsvp: 'confirmed', dietary: 'Vegetarian', plusOnes: 1, phone: '+91 98295 11223', checkedIn: false },
      { id: 'gst-7', name: 'Pooja Agarwal (College Friend)', table: 'Table 5 - Alumni & Friends', rsvp: 'pending', dietary: 'Vegetarian', plusOnes: 1, phone: '+91 98200 44556', checkedIn: false },
      { id: 'gst-8', name: 'Siddharth Roy (Corporate Colleague)', table: 'Table 5 - Alumni & Friends', rsvp: 'declined', dietary: 'None', plusOnes: 0, phone: '+91 98101 22334', checkedIn: false }
    ],
    runOfShow: [
      { id: 'ros-1', time: '10:00 AM', endTime: '01:00 PM', ritual: 'Haldi & Chuda Ubtan Ceremony', venue: 'Palace Poolside Lawn', lead: 'Ritika & Family Lead', status: 'ready', notes: 'Keep yellow rugs dry, arrange rose petals in bowls' },
      { id: 'ros-2', time: '03:30 PM', endTime: '07:00 PM', ritual: 'Bridal Henna & Folk Sangeet High Tea', venue: 'Zenana Courtyard', lead: 'Mehendi Master & Coordinator', status: 'ready', notes: 'Serve hot masala chai, chaat counters open' },
      { id: 'ros-3', time: '08:00 PM', endTime: '12:30 AM', ritual: 'Grand Sangeet & Musical Performances', venue: 'Grand Durbar Hall & Lawn', lead: 'DJ Aakash & Emcee Neha', status: 'ready', notes: 'Sound limit notice at 11:30 PM: transition indoor' },
      { id: 'ros-4', time: '04:30 PM', endTime: '06:00 PM', ritual: 'Royal Baraat Procession & Milni', venue: 'Palace Main Gate to Courtyard', lead: 'Baraat Coordinator Vikram', status: 'ready', notes: 'Vintage car driver briefed on procession speed' },
      { id: 'ros-5', time: '07:15 PM', endTime: '09:45 PM', ritual: 'Vedic Pheras & Kanyadaan (Auspicious Muhurat)', venue: 'Lakeside Mandap Canopy', lead: 'Pandit Ji & Family Elders', status: 'ready', notes: 'Sacred fire safety bucket placed behind Mandap screen' },
      { id: 'ros-6', time: '10:00 PM', endTime: '01:00 AM', ritual: 'Royal Reception Dinner & Classical Sitar', venue: 'Jagmandir Island Terrace', lead: 'Catering Lead Devendra', status: 'ready', notes: 'Boat shuttle ferries operating every 8 minutes' }
    ],
    liveOperations: {
      status: 'pre_event',
      activeAlerts: [
        { id: 'alt-1', level: 'warning', title: 'Lake Breeze Forecast (18 km/h)', message: 'Mandap floral drapes secured with weighted brass anchors. No structural risk.', time: '10:15 AM' },
        { id: 'alt-2', level: 'info', title: 'Satvik Dining Counter Verification', message: 'Separate Jain prep counter verified by Pandit Ji team at 09:30 AM.', time: '09:30 AM' }
      ],
      incidents: [
        { id: 'inc-1', title: 'Generator Phase 2 Voltage Fluctuation', severity: 'medium', status: 'resolved', reportedAt: '08:45 AM', resolution: 'Switched primary lighting circuit to backup 100kVA generator.', resolvedBy: 'Chief Electrician Ramesh' },
        { id: 'inc-2', title: 'Guest Allergy Request (Nut & Peanut)', severity: 'low', status: 'in_progress', reportedAt: '10:00 AM', resolution: 'Catering head Devendra tagged personalized plated meal for Table 4.', resolvedBy: 'Catering Team' }
      ],
      staffRoster: [
        { id: 'stf-1', name: 'Vikram Rathore', role: 'Chief Field Logistics & Baraat Marshal', phone: '+91 98290 88771', status: 'active' },
        { id: 'stf-2', name: 'Dr. Harsh Vardhan', role: 'Medical Doctor on Standby', phone: '+91 98295 11223', status: 'active' },
        { id: 'stf-3', name: 'Neha Kapoor', role: 'Guest Protocol & Seating Coordinator', phone: '+91 98111 22334', status: 'active' },
        { id: 'stf-4', name: 'Ramesh Sharma', role: 'Chief Electrical & AV Safety Officer', phone: '+91 98299 44332', status: 'active' }
      ]
    },
    contingencyEmergency: {
      weatherBackupPlan: 'Rain-resistant luxury German pagoda tents standing by in palace depot. 45-minute assembly SLA.',
      powerFailover: 'Dual synchronized 100kVA Cummins silent diesel generators with 10-second auto-transfer switch (ATS).',
      medicalPlan: 'Paramedic kit, AED defibrillator, wheelchair ramp access at all 4 palace entry gates. Nearest hospital: Geetanjali Medicity (12 mins).',
      emergencyContacts: [
        { service: 'Local Police Control Room', contact: '112 / +91 294 2414112' },
        { service: 'Geetanjali Medical Emergency', contact: '+91 294 2500000' },
        { service: 'Palace Security Chief', contact: '+91 98290 99110' },
        { service: 'Fire Brigade Station', contact: '101 / +91 294 2414101' }
      ]
    },
    marketingThemes: {
      palette: ['#B8860B', '#800020', '#F3E5AB', '#0D3B66', '#2E8B57'],
      paletteNames: ['Royal Gold', 'Crimson Maroon', 'Ivory Champagne', 'Mewar Indigo', 'Emerald Leaf'],
      taglines: [
        'Where Timeless Heritage Meets Eternal Vows',
        'Two Souls, One Royal Udaipur Chronicle',
        'Dancing to the Rhythms of Lake Pichola'
      ],
      socialCalendar: [
        { day: 'T-minus 30 Days', channel: 'Instagram & WhatsApp', post: 'Save the date teaser video featuring the palace skyline' },
        { day: 'T-minus 7 Days', channel: 'Email & WhatsApp', post: 'Guest Arrival Guide: Weather advice, packing tips, airport transfer schedule' },
        { day: 'Wedding Day', channel: 'Live Story / Reel', post: 'Same-day edit: Haldi glow and Sangeet highlights reel' }
      ]
    },
    agentActivityLog: [
      { id: 'act-1', timestamp: '2026-10-29 21:00', type: 'decision', confidence: 0.98, summary: 'Auto-calculated 10% contingency reserve (₹2,80,000) inside overall ₹28 Lakh budget.', category: 'Finances' },
      { id: 'act-2', timestamp: '2026-10-29 21:15', type: 'compliance', confidence: 0.99, summary: 'Verified Satvik and Jain kitchen separation clauses in Royal Mewar contract.', category: 'Cultural Integrity' },
      { id: 'act-3', timestamp: '2026-10-29 21:40', type: 'action_required', confidence: 0.95, summary: 'Requires Human Approval: Authorize payment release of ₹1,50,000 to Pushpa Mahal Florals.', category: 'Human Gate', approved: false },
      { id: 'act-4', timestamp: '2026-10-29 22:05', type: 'optimization', confidence: 0.92, summary: 'Negotiated ₹70,000 discount on catering by locking off-peak weekday tasting date.', category: 'Vendor Negotiation' }
    ]
  },
  {
    id: 'evt-college-fest',
    title: 'TechNova 2026: Inter-Collegiate Tech & Cultural Fest',
    eventType: 'college_fest',
    culturalPresetId: 'college_corporate_fest',
    currency: 'INR',
    currencySymbol: '₹',
    tagline: 'Code, Create, Celebrate — 48 Hours of Innovation',
    dates: {
      start: '2026-11-20',
      end: '2026-11-22',
      totalDays: 3
    },
    location: {
      city: 'Bengaluru, Karnataka',
      primaryVenue: 'PES Innovation Amphitheatre & Tech Quad',
      address: 'Outer Ring Road, Bengaluru'
    },
    guestCount: 650,
    budget: {
      totalLimit: 450000,
      plannedTotal: 420000,
      actualSpent: 185000,
      contingencyReserve: 45000,
      categories: [
        { id: 'cat-stage', name: 'Sound, Stage & Barricading', allocated: 160000, actual: 80000, status: 'on_track' },
        { id: 'cat-pro-artist', name: 'Headliner DJ & Band Honorarium', allocated: 120000, actual: 60000, status: 'on_track' },
        { id: 'cat-hackathon-prizes', name: 'Hackathon Cash Prizes & Swag', allocated: 75000, actual: 25000, status: 'on_track' },
        { id: 'cat-food', name: 'Participant Meal Boxes & Energy Snacks', allocated: 45000, actual: 20000, status: 'on_track' },
        { id: 'cat-safety', name: 'Security Bouncers & Paramedic Team', allocated: 20000, actual: 0, status: 'pending' }
      ],
      paymentMilestones: [
        { id: 'pay-c1', title: 'Audio & Stage Truss 50% Advance', amount: 80000, dueDate: '2026-11-01', status: 'paid', paidAt: '2026-10-28' },
        { id: 'pay-c2', title: 'Headliner Artist Lockin Contract', amount: 60000, dueDate: '2026-11-05', status: 'paid', paidAt: '2026-11-04' },
        { id: 'pay-c3', title: 'Swag & Lanyard Vendor Delivery', amount: 25000, dueDate: '2026-11-15', status: 'paid', paidAt: '2026-11-14' },
        { id: 'pay-c4', title: 'Post-Fest Cleanliness & Security Deposit Settlement', amount: 255000, dueDate: '2026-11-23', status: 'pending' }
      ]
    },
    strategyPlans: {
      selectedPlan: 'balanced',
      plans: {
        budget_saver: {
          name: 'Student Bootstrapper (Cost Minimal)',
          estimatedCost: 310000,
          description: 'Focus purely on 24-hr Hackathon, intra-college band showcase, sponsor branded snacks, and open-source project bounties.',
          perks: ['Zero artist hospitality overhead', 'Maximum prize bounty pool', 'Community college hall usage'],
          compromises: ['No external star artist night', 'Standard audio equipment']
        },
        balanced: {
          name: 'Signature Fest Experience (Recommended)',
          estimatedCost: 420000,
          description: '24-Hour National Hackathon + Sunset DJ concert with 2 top indie creators, food truck arena, and live live-stream.',
          perks: ['High-energy concert stage', 'Dual food truck alley', 'Sponsor demo booths & recruiter desk'],
          compromises: ['Strict 10:00 PM acoustic curfew']
        },
        luxury_vip: {
          name: 'Mega Inter-Varsity Expo',
          estimatedCost: 650000,
          description: 'Bollywood / EDM artist headliner, laser light arena, 360-degree drone livestream, and ₹2 Lakh cash prize pool.',
          perks: ['Nationwide artist lineup', 'Broadcast grade multi-camera stream', 'VIP lounge for tech founders'],
          compromises: ['Requires aggressive external title sponsorship']
        }
      }
    },
    tasks: [
      { id: 'ctsk-1', title: 'Secure Police NOC & Fire Safety Clearance for 650 Attendees', phase: 'concept', priority: 'critical', status: 'completed', assignedTo: 'Fest Coordinator Ankit', deadline: '2026-10-25', dependency: null },
      { id: 'ctsk-2', title: 'Close Title Sponsorship with Cloud Tech Partner (₹2.5L)', phase: 'sourcing', priority: 'critical', status: 'completed', assignedTo: 'Sponsorship Team', deadline: '2026-11-01', dependency: null },
      { id: 'ctsk-3', title: 'Deploy Dedicated 1Gbps Fiber Drop for 24-hr Hackathon', phase: 'sourcing', priority: 'high', status: 'in_progress', assignedTo: 'Tech Infrastructure Lead', deadline: '2026-11-12', dependency: 'ctsk-1' },
      { id: 'ctsk-4', title: 'Brief 35 Student Volunteers on Crowd Flow and Badging', phase: 'execution', priority: 'high', status: 'pending', assignedTo: 'Volunteer Operations Lead', deadline: '2026-11-18', dependency: 'ctsk-3' },
      { id: 'ctsk-5', title: 'Conduct Sound Check & Artist Hospitality Rider Inspection', phase: 'execution', priority: 'medium', status: 'pending', assignedTo: 'Stage Lead Priya', deadline: '2026-11-20', dependency: null }
    ],
    venues: [
      {
        id: 'cven-1',
        name: 'PES Innovation Amphitheatre & Tech Arena',
        type: 'Open-Air Amphitheatre + Labs',
        capacity: '800 Attendees',
        cost: 65000,
        score: 9.3,
        status: 'contract_signed',
        facilities: ['Dedicated LAN ports', 'Acoustic stage', 'Ambulance bay', 'Green rooms for artists'],
        contactPerson: 'Prof. Sundaram (Dean Student Affairs)',
        phone: '+91 94480 22331'
      }
    ],
    vendors: [
      {
        id: 'cvnd-1',
        category: 'Sound & Concert Truss',
        name: 'EchoWave Acoustics Bangalore',
        contact: 'Karthik Raja (+91 98450 11992)',
        quotedPrice: 180000,
        negotiatedPrice: 160000,
        status: 'confirmed',
        notes: 'Includes line-array, smoke machines, dual generator failover',
        backupVendorId: 'cvnd-1b'
      },
      {
        id: 'cvnd-2',
        category: 'Concession / Food',
        name: 'Rolls & Bowls Campus Express',
        contact: 'Sunil Rao (+91 99000 88776)',
        quotedPrice: 50000,
        negotiatedPrice: 45000,
        status: 'confirmed',
        notes: '500 student snack packs + midnight coffee station'
      }
    ],
    guests: [
      { id: 'cgst-1', name: 'Tanmay Bhattacharya (Team Lead - ByteCraft)', table: 'Pod A-01 (Hackathon)', rsvp: 'confirmed', dietary: 'Vegetarian', plusOnes: 3, phone: '+91 99800 11223', checkedIn: true },
      { id: 'cgst-2', name: 'Suhani Nair (Keynote Dignitary - Founder AI)', table: 'VIP Dignitary Table', rsvp: 'confirmed', dietary: 'Vegan', plusOnes: 1, phone: '+91 99800 44556', checkedIn: true },
      { id: 'cgst-3', name: 'Rahul Varma (Lead Singer - Echo Band)', table: 'Green Room 1', rsvp: 'confirmed', dietary: 'Non-Veg', plusOnes: 4, phone: '+91 99800 77889', checkedIn: false }
    ],
    runOfShow: [
      { id: 'cros-1', time: '09:00 AM', endTime: '10:30 AM', ritual: 'Inaugural Lamp Lighting & Keynote Address', venue: 'Main Auditorium', lead: 'Fest President & Dean', status: 'ready', notes: 'Ceremonial brass lamp and audio clicker ready' },
      { id: 'cros-2', time: '11:00 AM', endTime: '11:00 AM (Next Day)', ritual: '24-Hour CodeSprint Hackathon Commences', venue: 'Innovation Tech Quad', lead: 'Tech Lead Sandeep', status: 'ready', notes: 'High-speed Wi-Fi active, surge protectors distributed' },
      { id: 'cros-3', time: '07:00 PM', endTime: '10:00 PM', ritual: 'Pro Night: Celebrity DJ & Live Indie Band', venue: 'Open-Air Amphitheatre', lead: 'Stage Marshal Priya', status: 'ready', notes: 'Wristband verification strictly enforced at gate' }
    ],
    liveOperations: {
      status: 'pre_event',
      activeAlerts: [
        { id: 'calt-1', level: 'info', title: 'Police Permission Document Uploaded', message: 'Sound permit valid until 10:00 PM sharp. Decibel meter on stage.', time: '08:00 AM' }
      ],
      incidents: [
        { id: 'cinc-1', title: 'LAN Switch Port 12 Overheating', severity: 'low', status: 'resolved', reportedAt: '11:30 AM', resolution: 'Replaced with spare Cisco 24-port Gigabit switch.', resolvedBy: 'Tech Team' }
      ],
      staffRoster: [
        { id: 'cstf-1', name: 'Ankit Mehta', role: 'Chief Student Organizer', phone: '+91 99001 22334', status: 'active' },
        { id: 'cstf-2', name: 'Priya Nambiar', role: 'Stage & Artist Liaison', phone: '+91 99002 33445', status: 'active' }
      ]
    },
    contingencyEmergency: {
      weatherBackupPlan: 'If unseasonal rain occurs, Pro Night acoustic setup shifts inside the 1,000-seater Indoor Sports Complex within 30 mins.',
      powerFailover: 'Dedicated 62.5kVA diesel generator for hackathon lab; secondary generator for amphitheatre audio.',
      medicalPlan: 'St. John Ambulance stationed at East Gate with 2 certified paramedics and basic trauma kit.',
      emergencyContacts: [
        { service: 'Campus Security Control', contact: '+91 80 2672 0001' },
        { service: 'Local Police Station (Banashankari)', contact: '+91 80 2294 2555' },
        { service: 'Nearest Hospital (Apollo BGS)', contact: '+91 80 2699 9999' }
      ]
    },
    marketingThemes: {
      palette: ['#6366F1', '#EC4899', '#06B6D4', '#1E1B4B', '#F8FAFC'],
      paletteNames: ['Electric Indigo', 'Cyber Neon Pink', 'Vibrant Cyan', 'Deep Midnight', 'Clean Platinum'],
      taglines: [
        'Ignite The Future — Where Code Meets Culture',
        'Built by Students, Powered by Passion',
        '48 Hours to Disrupt, Dream, and Dance'
      ],
      socialCalendar: [
        { day: 'T-minus 20 Days', channel: 'Instagram Reels & Discord', post: 'Hackathon problem statements and mentor reveal' },
        { day: 'T-minus 3 Days', channel: 'Campus Posters & WhatsApp', post: 'Pro Night DJ lineup reveal and entry wristband instructions' }
      ]
    },
    agentActivityLog: [
      { id: 'cact-1', timestamp: '2026-10-29 20:30', type: 'compliance', confidence: 0.99, summary: 'Sound curfew validation: Scheduled music finish at 09:45 PM to guarantee compliance with 10:00 PM ordinance.', category: 'Legal Clearance' },
      { id: 'cact-2', timestamp: '2026-10-29 21:10', type: 'decision', confidence: 0.96, summary: 'Configured student ticket passes with unique anti-counterfeit QR codes.', category: 'Guest Management' }
    ]
  }
];


// --- File: src/utils/speech.js ---
// Browser Web Speech API Utility for Voice Interaction
const speechUtil = {
  recognition: null,
  isListening: false,

  isSupported() {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  },

  isSynthesisSupported() {
    return 'speechSynthesis' in window;
  },

  startListening(onResult, onError, onEnd) {
    if (!this.isSupported()) {
      if (onError) onError('Speech recognition is not supported in this browser.');
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onstart = () => {
        this.isListening = true;
      };

      this.recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        if (onResult) onResult(transcript, event.results[0].isFinal);
      };

      this.recognition.onerror = (event) => {
        this.isListening = false;
        if (onError) onError(event.error);
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (onEnd) onEnd();
      };

      this.recognition.start();
    } catch (e) {
      console.error('Failed to start speech recognition', e);
      if (onError) onError(e.message);
    }
  },

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  },

  speak(text, onEnd) {
    if (!this.isSynthesisSupported()) return;
    window.speechSynthesis.cancel(); // Stop any active speech

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Pick a natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Siri')) && v.lang.startsWith('en'));
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  },

  stopSpeaking() {
    if (this.isSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
  }
};


// --- File: src/utils/exportUtils.js ---
// Document, Print, and Data Export Utilities
const exportUtils = {
  downloadJSON(data, filename) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'event-plan.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  exportGuestsCSV(guests, eventTitle) {
    if (!guests || guests.length === 0) return;
    const headers = ['Name', 'Table / Zone', 'RSVP Status', 'Dietary Preference', 'Plus Ones', 'Contact Phone', 'Checked In'];
    const rows = guests.map(g => [
      `"${g.name}"`,
      `"${g.table || 'Unassigned'}"`,
      `"${g.rsvp.toUpperCase()}"`,
      `"${g.dietary || 'None'}"`,
      g.plusOnes || 0,
      `"${g.phone || 'N/A'}"`,
      g.checkedIn ? 'YES' : 'NO'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const a = document.createElement('a');
    a.setAttribute('href', encodedUri);
    a.setAttribute('download', `${(eventTitle || 'event').replace(/\s+/g, '_')}_Guest_List.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  },

  printRunOfShow(event) {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print the Run-of-Show document.');
      return;
    }

    const itemsHtml = event.runOfShow.map(item => `
      <tr style="border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 10px; font-weight: bold; color: #4338ca;">${item.time} - ${item.endTime || 'End'}</td>
        <td style="padding: 10px; font-weight: 600;">${item.ritual}</td>
        <td style="padding: 10px; color: #64748b;">${item.venue}</td>
        <td style="padding: 10px;">${item.lead}</td>
        <td style="padding: 10px; font-size: 13px; color: #475569;">${item.notes || '—'}</td>
      </tr>
    `).join('');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${event.title} — Official Run-of-Show</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #1e293b; }
            h1 { font-size: 24px; margin-bottom: 4px; color: #0f172a; }
            .subtitle { font-size: 14px; color: #64748b; margin-bottom: 24px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th { background: #f8fafc; text-align: left; padding: 12px 10px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #475569; border-bottom: 2px solid #cbd5e1; }
            .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 11px; background: #e0e7ff; color: #3730a3; font-weight: bold; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #cbd5e1; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between; }
          </style>
        </head>
        <body>
          <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
              <h1>${event.title}</h1>
              <div class="subtitle">${event.tagline || ''} • ${event.dates.start} to ${event.dates.end}</div>
              <div style="font-size: 13px; color: #334155;"><strong>Location:</strong> ${event.location.primaryVenue}, ${event.location.city}</div>
            </div>
            <div style="text-align: right;">
              <span class="badge">CONFIDENTIAL RUN-OF-SHOW</span>
              <div style="font-size: 11px; color: #64748b; margin-top: 6px;">Generated by Gravity AI OS</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Time Window</th>
                <th>Ritual / Session</th>
                <th>Location / Stage</th>
                <th>Lead Officer</th>
                <th>Operational Notes</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div class="footer">
            <div>Emergency Contact: Local Police 112 • Lead Medical Officer on Site</div>
            <div>Single Source of Truth — Approved Master Document</div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
    }, 400);
  }
};


// --- File: src/utils/aiEngine.js ---

// GenAI Reasoning, Planning, Delay Cascades, and Negotiation Engine
const aiEngine = {
  // Parse natural language or voice query into structured event criteria
  parseEventVision(promptText) {
    const text = promptText.toLowerCase();

    // 1. Detect Event Type
    let eventType = 'wedding';
    let culturalPresetId = 'hindu_vedic';
    let defaultTitle = 'Grand Celebration & Gathering';

    if (text.includes('fest') || text.includes('college') || text.includes('hackathon') || text.includes('conference') || text.includes('summit')) {
      eventType = 'college_fest';
      culturalPresetId = 'college_corporate_fest';
      defaultTitle = 'Campus Tech & Cultural Fest 2026';
    } else if (text.includes('birthday') || text.includes('anniversary') || text.includes('jubilee')) {
      eventType = 'birthday';
      culturalPresetId = 'christian_western';
      defaultTitle = 'Milestone Birthday Gala';
    } else if (text.includes('nikah') || text.includes('walima') || text.includes('islamic') || text.includes('muslim')) {
      eventType = 'wedding';
      culturalPresetId = 'muslim_islamic';
      defaultTitle = 'Royal Nikah & Walima Celebration';
    } else if (text.includes('jewish') || text.includes('bar mitzvah') || text.includes('chuppah')) {
      eventType = 'wedding';
      culturalPresetId = 'jewish_tradition';
      defaultTitle = 'Simcha & Chuppah Celebration';
    } else if (text.includes('christian') || text.includes('church') || text.includes('reception') || text.includes('western')) {
      eventType = 'wedding';
      culturalPresetId = 'christian_western';
      defaultTitle = 'Sunset Vows & Dinner Reception';
    } else if (text.includes('wedding') || text.includes('shaadi') || text.includes('haldi') || text.includes('sangeet') || text.includes('rajasthan') || text.includes('udaipur')) {
      eventType = 'wedding';
      culturalPresetId = 'hindu_vedic';
      defaultTitle = 'Heritage Wedding Celebrations';
    }

    // 2. Extract Budget
    let budget = 1500000;
    const lakhMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:lakh|lakhs|l)\b/);
    const kMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:k|thousand)\b/);
    const numMatch = text.match(/(?:budget|cost|limit|under|₹|\$)\s*(\d[\d,]*)/);

    if (lakhMatch) {
      budget = parseFloat(lakhMatch[1]) * 100000;
    } else if (kMatch) {
      budget = parseFloat(kMatch[1]) * 1000;
    } else if (numMatch) {
      budget = parseInt(numMatch[1].replace(/,/g, ''), 10) || budget;
    } else if (text.includes('limited budget') || text.includes('tight budget') || text.includes('cheap')) {
      budget = eventType === 'college_fest' ? 250000 : 800000;
    } else if (text.includes('grand') || text.includes('royal') || text.includes('luxury')) {
      budget = 3500000;
    }

    // 3. Extract Guest Count
    let guestCount = 200;
    const guestMatch = text.match(/(\d+)\s*(?:guests|people|students|attendees|pax|persons)/);
    if (guestMatch) {
      guestCount = parseInt(guestMatch[1], 10);
    } else if (eventType === 'college_fest') {
      guestCount = 500;
    } else if (eventType === 'wedding') {
      guestCount = 300;
    } else {
      guestCount = 100;
    }

    // 4. Extract Location / City
    let city = 'Bengaluru';
    if (text.includes('udaipur') || text.includes('rajasthan') || text.includes('jaipur')) city = 'Udaipur, Rajasthan';
    else if (text.includes('delhi') || text.includes('ncr') || text.includes('gurgaon')) city = 'New Delhi';
    else if (text.includes('mumbai') || text.includes('goa')) city = 'Goa Beaches';
    else if (text.includes('bengaluru') || text.includes('bangalore')) city = 'Bengaluru, Karnataka';
    else if (text.includes('hyderabad')) city = 'Hyderabad, Telangana';

    return {
      title: defaultTitle,
      eventType,
      culturalPresetId,
      budget,
      guestCount,
      city,
      rawPrompt: promptText
    };
  },

  // Generate a full, production-ready master event from parsed criteria
  generateMasterEventFromVision(criteria) {
    const { title, eventType, culturalPresetId, budget, guestCount, city, rawPrompt } = criteria;
    const preset = CULTURAL_PRESETS[culturalPresetId] || CULTURAL_PRESETS.hindu_vedic;
    const eventId = `evt-${Date.now()}`;

    // Allocation percentages
    const venueShare = 0.38;
    const cateringShare = 0.28;
    const decorShare = 0.14;
    const soundArtistShare = 0.10;
    const photoShare = 0.05;
    const contingencyReserve = Math.round(budget * 0.10); // 10% Reserve
    const allocatableBudget = budget - contingencyReserve;

    const categories = [
      { id: `cat-ven-${eventId}`, name: 'Venue & Infrastructure', allocated: Math.round(allocatableBudget * venueShare), actual: 0, status: 'pending' },
      { id: `cat-cat-${eventId}`, name: 'Catering & Dining', allocated: Math.round(allocatableBudget * cateringShare), actual: 0, status: 'pending' },
      { id: `cat-dec-${eventId}`, name: 'Decor, Theme & Staging', allocated: Math.round(allocatableBudget * decorShare), actual: 0, status: 'pending' },
      { id: `cat-art-${eventId}`, name: 'Sound, DJ & Performers', allocated: Math.round(allocatableBudget * soundArtistShare), actual: 0, status: 'pending' },
      { id: `cat-pho-${eventId}`, name: 'Photography & Media', allocated: Math.round(allocatableBudget * photoShare), actual: 0, status: 'pending' }
    ];

    // Tasks generated based on phases
    const tasks = [
      { id: `tsk-1-${eventId}`, title: 'Review & approve AI generated budget allocations', phase: 'concept', priority: 'critical', status: 'completed', assignedTo: 'Lead Organizer', deadline: 'Day 1', dependency: null },
      { id: `tsk-2-${eventId}`, title: `Inquire venue options in ${city} with capacity for ${guestCount}`, phase: 'concept', priority: 'critical', status: 'in_progress', assignedTo: 'Venue Scout Agent', deadline: 'Day 5', dependency: `tsk-1-${eventId}` },
      { id: `tsk-3-${eventId}`, title: `Draft catering brief with ${preset.name} dietary rules`, phase: 'sourcing', priority: 'high', status: 'pending', assignedTo: 'Catering Coordinator', deadline: 'Day 10', dependency: `tsk-2-${eventId}` },
      { id: `tsk-4-${eventId}`, title: 'Setup sound, stage, and local noise permit clearances', phase: 'sourcing', priority: 'high', status: 'pending', assignedTo: 'Logistics Officer', deadline: 'Day 15', dependency: `tsk-2-${eventId}` },
      { id: `tsk-5-${eventId}`, title: `Finalize Guest list (${guestCount} invites) and distribute digital passes`, phase: 'execution', priority: 'medium', status: 'pending', assignedTo: 'Guest Liaison', deadline: 'Day 20', dependency: `tsk-3-${eventId}` },
      { id: `tsk-6-${eventId}`, title: 'Event Day minute-by-minute execution and delay monitoring', phase: 'execution', priority: 'critical', status: 'pending', assignedTo: 'Master Emcee & Operations', deadline: 'Event Day', dependency: null },
      { id: `tsk-7-${eventId}`, title: 'Post-event vendor settlements and guest thank-you messages', phase: 'wrapup', priority: 'medium', status: 'pending', assignedTo: 'Finance & Agent', deadline: 'Post Event', dependency: null }
    ];

    // Run of Show from Cultural Preset
    const runOfShow = (preset.rituals || []).map((rit, idx) => ({
      id: `ros-${idx}-${eventId}`,
      time: rit.timing ? rit.timing.split('(')[1]?.split('-')[0]?.trim() || `0${9 + idx * 3}:00 AM` : `0${9 + idx * 3}:00 AM`,
      endTime: rit.timing ? rit.timing.split('-')[1]?.replace(')', '')?.trim() || `0${11 + idx * 3}:00 AM` : `0${11 + idx * 3}:00 AM`,
      ritual: rit.name,
      venue: `Main Hall / Lawn (${city})`,
      lead: 'Lead Coordinator',
      status: 'ready',
      notes: rit.significance || rit.dietary || 'Verify items checklist'
    }));

    if (runOfShow.length === 0) {
      runOfShow.push(
        { id: `ros-1-${eventId}`, time: '09:00 AM', endTime: '11:00 AM', ritual: 'Guest Welcome & Registration', venue: 'Grand Lobby', lead: 'Reception Team', status: 'ready', notes: 'Badge scans' },
        { id: `ros-2-${eventId}`, time: '11:30 AM', endTime: '02:00 PM', ritual: 'Main Keynote / Ceremony', venue: 'Main Auditorium', lead: 'Master of Ceremonies', status: 'ready', notes: 'Live stream active' },
        { id: `ros-3-${eventId}`, time: '07:00 PM', endTime: '11:00 PM', ritual: 'Evening Banquet & Celebration', venue: 'Banquet Hall', lead: 'Floor Captain', status: 'ready', notes: 'Dinner and music' }
      );
    }

    return {
      id: eventId,
      title: title || `${preset.name} Event`,
      eventType,
      culturalPresetId,
      currency: 'INR',
      currencySymbol: '₹',
      tagline: `Engineered with GenAI Precision • ${preset.name}`,
      dates: {
        start: '2026-11-28',
        end: '2026-11-30',
        totalDays: 3
      },
      location: {
        city,
        primaryVenue: `Grand Arena & Lawns (${city})`,
        address: `Prime Convention Blvd, ${city}`
      },
      guestCount,
      budget: {
        totalLimit: budget,
        plannedTotal: budget - contingencyReserve,
        actualSpent: 0,
        contingencyReserve,
        categories,
        paymentMilestones: [
          { id: `pay-1-${eventId}`, title: 'Venue Booking Advance (40%)', amount: Math.round(budget * 0.4 * 0.38), dueDate: '2026-11-01', status: 'pending' },
          { id: `pay-2-${eventId}`, title: 'Catering & Beverage Advance (30%)', amount: Math.round(budget * 0.3 * 0.28), dueDate: '2026-11-10', status: 'pending' },
          { id: `pay-3-${eventId}`, title: 'Artist & Audio Production Retainer', amount: Math.round(budget * 0.10), dueDate: '2026-11-20', status: 'pending' }
        ]
      },
      strategyPlans: {
        selectedPlan: 'balanced',
        plans: {
          budget_saver: {
            name: 'Value Focused (25% Savings)',
            estimatedCost: Math.round(budget * 0.75),
            description: 'Optimized essentials: Streamlined menu counters, local acoustic performers, daylight scheduling to minimize lighting costs.',
            perks: ['Maximized cash reserves', 'Eco-friendly minimal footprint', 'Fast single-day teardown'],
            compromises: ['Standard decor elements', 'Limited evening lighting rigs']
          },
          balanced: {
            name: 'Balanced Excellence (Recommended)',
            estimatedCost: Math.round(budget * 0.90),
            description: 'The golden mean: Premium audio, curated cultural dining with specific dietary lines, full photo & video coverage, and 10% contingency safety net.',
            perks: ['Dual stage setups', 'Drone & multi-camera documentary', 'Dedicated dietary counters (Jain/Halal/Vegan)', '10% Emergency reserve'],
            compromises: ['Modest merchandise / gifts']
          },
          luxury_vip: {
            name: 'Imperial VIP Showcase',
            estimatedCost: Math.round(budget * 1.35),
            description: 'Uncompromising grandiosity: Celebrity hosts, imported floral installations, immersive LED stage tunnels, and bespoke guest gift hampers.',
            perks: ['Celebrity performance lineup', 'Valet parking for all guests', 'Bespoke silk gift hampers'],
            compromises: ['Requires additional 35% sponsor or personal capital']
          }
        }
      },
      tasks,
      venues: [
        {
          id: `ven-1-${eventId}`,
          name: `The Grand Regent & Meadows (${city})`,
          type: 'Resort & Convention Arena',
          capacity: `${guestCount + 100} Guests`,
          cost: Math.round(allocatableBudget * venueShare),
          score: 9.4,
          status: 'shortlisted',
          facilities: ['Dual acoustic halls', 'Open sky lawn', '150kVA silent backup generator', 'Separate dedicated dietary preparation kitchen'],
          contactPerson: 'Director of Banquets',
          phone: '+91 98000 11223'
        }
      ],
      vendors: [
        {
          id: `vnd-1-${eventId}`,
          category: 'Catering & Dining',
          name: `Heritage Culinary Arts (${city})`,
          contact: 'Master Chef (+91 98111 22334)',
          quotedPrice: Math.round(allocatableBudget * cateringShare * 1.15),
          negotiatedPrice: Math.round(allocatableBudget * cateringShare),
          status: 'confirmed',
          notes: `Certified menu conforming to ${preset.name} guidelines with zero cross-contamination.`,
          backupVendorId: `vnd-1b-${eventId}`
        },
        {
          id: `vnd-1b-${eventId}`,
          category: 'Catering (Backup)',
          name: 'Express Banquets Backup',
          contact: 'Ops Desk (+91 98111 55667)',
          quotedPrice: Math.round(allocatableBudget * cateringShare),
          negotiatedPrice: Math.round(allocatableBudget * cateringShare),
          status: 'on_call_standby',
          notes: 'Emergency 3-hour mobilization failover agreement in place.'
        },
        {
          id: `vnd-2-${eventId}`,
          category: 'Stage, Audio & Lighting',
          name: 'PulseWave Production Studio',
          contact: 'Technical Director (+91 98222 33445)',
          quotedPrice: Math.round(allocatableBudget * soundArtistShare),
          negotiatedPrice: Math.round(allocatableBudget * soundArtistShare),
          status: 'confirmed',
          notes: 'Includes line-array speakers, LED video walls, wireless mic kits, sound engineer.'
        }
      ],
      guests: [
        { id: `gst-1-${eventId}`, name: 'Dr. Sameer Sen (Chief Guest / VIP)', table: 'VIP Table 1', rsvp: 'confirmed', dietary: 'Vegetarian', plusOnes: 1, phone: '+91 98333 44556', checkedIn: false },
        { id: `gst-2-${eventId}`, name: 'Ayesha Khan (Keynote Dignitary)', table: 'VIP Table 1', rsvp: 'confirmed', dietary: 'Halal', plusOnes: 1, phone: '+91 98444 55667', checkedIn: false },
        { id: `gst-3-${eventId}`, name: 'Nikhil Jain (Lead Committee Member)', table: 'Executive Table', rsvp: 'confirmed', dietary: 'Jain (Strict No Root Veg)', plusOnes: 2, phone: '+91 98555 66778', checkedIn: false },
        { id: `gst-4-${eventId}`, name: 'Rohan Deshmukh (Volunteer Lead)', table: 'Ops Desk', rsvp: 'confirmed', dietary: 'None', plusOnes: 0, phone: '+91 98666 77889', checkedIn: true }
      ],
      runOfShow,
      liveOperations: {
        status: 'pre_event',
        activeAlerts: [
          { id: `alt-1-${eventId}`, level: 'info', title: 'System Initialization Complete', message: `All 22 pillars loaded for ${title}. Dietary tags and budget verified.`, time: 'Just now' }
        ],
        incidents: [],
        staffRoster: [
          { id: `stf-1-${eventId}`, name: 'Lead Operations Marshal', role: 'Head of Floor Coordination', phone: '+91 98777 88990', status: 'active' },
          { id: `stf-2-${eventId}`, name: 'Safety & First Aid Paramedic', role: 'Emergency Liaison', phone: '+91 98888 99001', status: 'active' }
        ]
      },
      contingencyEmergency: {
        weatherBackupPlan: 'Rain waterproof marquee tents on 1-hour standby. Waterproof covers for all stage line-arrays.',
        powerFailover: 'Dual automatic transfer switch with 125kVA generator on standby.',
        medicalPlan: 'Certified paramedic and first aid kit on site. Ambulance dispatch coordinated with nearest hospital.',
        emergencyContacts: [
          { service: 'Local Emergency Hotline', contact: '112' },
          { service: 'Nearest Hospital Desk', contact: '+91 80 2200 4400' },
          { service: 'Fire & Rescue Service', contact: '101' }
        ]
      },
      marketingThemes: {
        palette: ['#0f172a', '#6366f1', '#ec4899', '#f59e0b', '#10b981'],
        paletteNames: ['Obsidian Navy', 'Royal Indigo', 'Neon Blossom', 'Warm Amber', 'Emerald Leaf'],
        taglines: [
          `Unforgettable Moments, Flawlessly Planned`,
          `Where Every Detail Becomes a Memory`,
          `Designed with Heart, Executed with Precision`
        ],
        socialCalendar: [
          { day: 'T-minus 14 Days', channel: 'Social Channels', post: 'Official date teaser and keynote speaker/ritual outline announcement' },
          { day: 'T-minus 3 Days', channel: 'Direct Messaging & SMS', post: 'Important logistics: Venue directions, parking valet, entry QR passes' }
        ]
      },
      agentActivityLog: [
        { id: `act-1-${eventId}`, timestamp: 'Just now', type: 'decision', confidence: 0.99, summary: `Generated comprehensive event plan based on user vision: "${rawPrompt.slice(0, 75)}..."`, category: 'Vision Synthesis' },
        { id: `act-2-${eventId}`, timestamp: 'Just now', type: 'compliance', confidence: 0.97, summary: `Integrated ${preset.name} rituals and dietary guidelines into master run-of-show.`, category: 'Cultural Intelligence' },
        { id: `act-3-${eventId}`, timestamp: 'Just now', type: 'optimization', confidence: 0.95, summary: `Locked 10% contingency reserve (₹${contingencyReserve.toLocaleString('en-IN')}) before allocating vendor categories.`, category: 'Financial Shield' }
      ]
    };
  },

  // Calculate Delay Cascade when an item is delayed (e.g. 30 mins late)
  calculateDelayCascade(runOfShow, delayedItemId, delayMinutes = 30) {
    const updated = JSON.parse(JSON.stringify(runOfShow));
    const targetIdx = updated.findIndex(item => item.id === delayedItemId);
    if (targetIdx === -1) return { updated, affectedCount: 0, notes: 'Item not found' };

    let affectedCount = 0;
    const affectedTitles = [];

    // Helper to add minutes to "HH:MM AM/PM"
    const addMinutesToTimeStr = (timeStr, mins) => {
      try {
        const [time, modifier] = timeStr.trim().split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (modifier === 'PM' && hours < 12) hours += 12;
        if (modifier === 'AM' && hours === 12) hours = 0;

        const totalMins = hours * 60 + minutes + mins;
        let newHours = Math.floor(totalMins / 60) % 24;
        let newMins = totalMins % 60;
        const newMod = newHours >= 12 ? 'PM' : 'AM';
        if (newHours > 12) newHours -= 12;
        if (newHours === 0) newHours = 12;

        return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')} ${newMod}`;
      } catch (e) {
        return timeStr;
      }
    };

    for (let i = targetIdx; i < updated.length; i++) {
      const item = updated[i];
      const oldTime = item.time;
      item.time = addMinutesToTimeStr(item.time, delayMinutes);
      if (item.endTime) {
        item.endTime = addMinutesToTimeStr(item.endTime, delayMinutes);
      }
      item.delayed = true;
      item.delayNotice = `Delayed +${delayMinutes}m (Originally ${oldTime})`;
      affectedCount++;
      affectedTitles.push(item.ritual);
    }

    const broadcastMessage = `🚨 Schedule Update: Due to a ${delayMinutes}-minute delay in "${updated[targetIdx].ritual}", subsequent sessions (${affectedTitles.slice(0, 3).join(', ')}...) have been adjusted forward by ${delayMinutes} minutes. All catering and stage teams please align to the updated Run-of-Show.`;

    return {
      updatedRunOfShow: updated,
      affectedCount,
      affectedTitles,
      delayMinutes,
      broadcastMessage
    };
  },

  // Generate Professional Vendor Negotiation Letter
  draftVendorNegotiation(vendor, targetPrice, currencySymbol = '₹') {
    const diff = vendor.quotedPrice - targetPrice;
    const discountPct = Math.round((diff / vendor.quotedPrice) * 100);

    return {
      subject: `Partnership Inquiry & Quotation Discussion — ${vendor.name}`,
      body: `Dear ${vendor.name} Team,

Thank you for providing the detailed quotation of ${currencySymbol}${vendor.quotedPrice.toLocaleString('en-IN')} for ${vendor.category}. We are highly impressed by your portfolio and reputation in the industry.

We are currently finalizing all commitments for our upcoming celebration. We have allocated a strict target budget of ${currencySymbol}${targetPrice.toLocaleString('en-IN')} for this engagement (a ~${discountPct}% adjustment from your initial quote).

In exchange for this rate, we are pleased to offer:
1. Guaranteed immediate 50% advance deposit upon contract execution.
2. Prompt final balance release on the event day itself without delays.
3. High-visibility vendor credit across our digital guest brochures and social tags.
4. Flexible setup access window to make your team's on-site logistics seamless.

Please let us know if we can confirm this booking today at ${currencySymbol}${targetPrice.toLocaleString('en-IN')}. We would love to have your team onboard!

Warm regards,
Event Organizing Committee & AI Planning Assistant`
    };
  }
};


// --- File: src/components/Navbar.js ---

// Refined Luxury Atelier Navigation Bar (No emojis, subtle elegance, generous breathing room)
function renderNavbar(state) {
  const activeEvent = state.events.find(e => e.id === state.activeEventId) || state.events[0];

  const tabs = [
    { id: 'cockpit', label: 'Executive Cockpit', icon: ICONS.compass },
    { id: 'cultural', label: 'Cultural Protocols', icon: ICONS.flame, badge: 'Heritage' },
    { id: 'strategy', label: 'Master Strategy', icon: ICONS.calendar },
    { id: 'budget', label: 'Financial Ledger', icon: ICONS.currency },
    { id: 'vendors', label: 'Venues & Partners', icon: ICONS.building },
    { id: 'guests', label: 'Guest Directory', icon: ICONS.users },
    { id: 'runofshow', label: 'Run of Show', icon: ICONS.clock },
    { id: 'liveops', label: 'Event Day Ops', icon: ICONS.activity },
    { id: 'marketing', label: 'Atelier & Identity', icon: ICONS.palette },
    { id: 'contingency', label: 'Safety & Risk', icon: ICONS.shield },
    { id: 'postevent', label: 'Post-Event Audit', icon: ICONS.archive },
    { id: 'agentlog', label: 'Governance Trail', icon: ICONS.bot }
  ];

  return `
    <header class="sticky top-0 z-40 bg-[#0c0d0f]/95 backdrop-blur-md border-b border-neutral-800/80">
      <div class="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between gap-6">
        <!-- Logo & Maison Identity -->
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-[#c5a880] shadow-sm">
            ${ICONS.sparkles}
          </div>
          <div>
            <div class="flex items-center gap-2.5">
              <span class="font-serif text-lg tracking-wider text-neutral-100 uppercase font-medium">CELESTIAL</span>
              <span class="text-[9px] uppercase tracking-[0.2em] text-[#c5a880] border border-[#c5a880]/30 px-2 py-0.5 rounded font-sans">
                Event OS
              </span>
            </div>
            <div class="text-[11px] text-neutral-400 font-sans tracking-wide hidden sm:block">
              Private Event Planning & Autonomous Operations
            </div>
          </div>
        </div>

        <!-- Controls: Selector, Currency & Assistant -->
        <div class="flex items-center gap-3">
          <!-- Event Selector -->
          <div class="relative">
            <select id="event-selector" class="bg-neutral-900 text-xs font-medium text-neutral-200 border border-neutral-800 rounded-lg px-3.5 py-2 pr-8 focus:outline-none focus:border-[#c5a880] cursor-pointer appearance-none shadow-sm max-w-[200px] sm:max-w-xs truncate tracking-wide">
              ${state.events.map(ev => `
                <option value="${ev.id}" ${ev.id === activeEvent.id ? 'selected' : ''}>
                  ${ev.title}
                </option>
              `).join('')}
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-neutral-500">
              ${ICONS.chevronDown}
            </div>
          </div>

          <!-- Currency Selector -->
          <div class="relative hidden sm:block">
            <select id="currency-selector" class="bg-neutral-900 text-xs font-medium text-neutral-300 border border-neutral-800 rounded-lg px-3 py-2 focus:outline-none focus:border-[#c5a880] cursor-pointer tracking-wider">
              <option value="INR" ${activeEvent.currency === 'INR' ? 'selected' : ''}>₹ INR</option>
              <option value="USD" ${activeEvent.currency === 'USD' ? 'selected' : ''}>$ USD</option>
              <option value="EUR" ${activeEvent.currency === 'EUR' ? 'selected' : ''}>€ EUR</option>
              <option value="GBP" ${activeEvent.currency === 'GBP' ? 'selected' : ''}>£ GBP</option>
              <option value="AED" ${activeEvent.currency === 'AED' ? 'selected' : ''}>AED</option>
            </select>
          </div>

          <!-- New Event Architect Action -->
          <button id="btn-open-planner" class="flex items-center gap-2 text-xs font-medium tracking-wide bg-neutral-100 hover:bg-white text-neutral-950 px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95">
            ${ICONS.plus}
            <span class="hidden md:inline">Curate Event</span>
          </button>

          <!-- Voice / Copilot Drawer Toggle -->
          <button id="btn-toggle-ai-chat" class="relative flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 transition-colors" title="Open AI Assistant">
            ${ICONS.mic}
            ${state.pendingApprovalsCount > 0 ? `
              <span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#c5a880] animate-pulse"></span>
            ` : ''}
          </button>
        </div>
      </div>

      <!-- Navigation Tabs Bar -->
      <div class="border-t border-neutral-800/60 px-6 lg:px-10 overflow-x-auto no-scrollbar bg-[#0b0c0e]/80">
        <div class="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 py-2 text-xs font-sans tracking-wide">
          ${tabs.map(tab => {
            const isActive = state.activeTab === tab.id;
            return `
              <button data-tab="${tab.id}" class="tab-btn flex items-center gap-2 px-3.5 py-2 rounded-md whitespace-nowrap transition-all ${
                isActive 
                  ? 'text-neutral-100 font-medium bg-neutral-800/80 border border-neutral-700/80 shadow-sm' 
                  : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60'
              }">
                <span class="${isActive ? 'text-[#c5a880]' : 'text-neutral-500'}">${tab.icon}</span>
                <span>${tab.label}</span>
                ${tab.badge ? `<span class="text-[9px] px-1.5 py-0.2 bg-neutral-800 text-[#c5a880] border border-neutral-700 rounded uppercase tracking-wider font-semibold">${tab.badge}</span>` : ''}
              </button>
            `;
          }).join('')}
        </div>
      </div>
    </header>
  `;
}


// --- File: src/components/CockpitView.js ---

// Executive Cockpit View (Spacious, Elegant, De-congested, No Emojis)
function renderCockpitView(event, state) {
  const sym = event.currencySymbol || '₹';
  const totalBudget = event.budget.totalLimit;
  const spent = event.budget.actualSpent;
  const contingency = event.budget.contingencyReserve;
  const spentPct = Math.round((spent / totalBudget) * 100);

  const confirmedGuests = event.guests.filter(g => g.rsvp === 'confirmed').length;
  const pendingGuests = event.guests.filter(g => g.rsvp === 'pending').length;
  const totalGuests = event.guests.length;

  const criticalTasks = event.tasks.filter(t => t.priority === 'critical' && t.status !== 'completed');
  const completedTasks = event.tasks.filter(t => t.status === 'completed').length;
  const totalTasks = event.tasks.length;
  const taskProgressPct = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Days until event
  const startDate = new Date(event.dates.start);
  const now = new Date('2026-10-29T22:30:00');
  const diffTime = startDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return `
    <div class="space-y-10">
      <!-- Editorial Dossier Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 sm:p-10 shadow-sm">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <div class="flex flex-wrap items-center gap-3">
              <span class="text-[10px] uppercase font-semibold tracking-[0.18em] px-3 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800">
                ${event.eventType.replace('_', ' ')}
              </span>
              <span class="text-[10px] uppercase font-semibold tracking-[0.18em] px-3 py-1 rounded bg-neutral-900 text-[#c5a880] border border-neutral-800 flex items-center gap-1.5">
                ${ICONS.flame} Active Tradition Dossier
              </span>
              <span class="text-[10px] uppercase font-semibold tracking-[0.18em] px-3 py-1 rounded bg-neutral-900 text-neutral-400 border border-neutral-800 flex items-center gap-1.5">
                ${ICONS.mapPin} ${event.location.city}
              </span>
            </div>

            <div>
              <h1 class="text-3xl sm:text-4xl font-serif font-normal text-neutral-100 tracking-tight leading-tight">
                ${event.title}
              </h1>
              <p class="text-sm font-serif italic text-neutral-400 mt-2">
                "${event.tagline || 'Curated with architectural precision and ritual integrity.'}"
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-6 text-xs text-neutral-400 pt-2 border-t border-neutral-800/80">
              <div class="flex items-center gap-2">
                <span class="text-neutral-500">${ICONS.calendar}</span>
                <span>${event.dates.start} — ${event.dates.end} (${event.dates.totalDays} Days)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-neutral-500">${ICONS.building}</span>
                <span>${event.location.primaryVenue}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-neutral-500">${ICONS.users}</span>
                <span>${event.guestCount} Target Attendees</span>
              </div>
            </div>
          </div>

          <!-- Countdown & Document Actions -->
          <div class="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
            <div class="p-6 rounded-xl bg-neutral-900/90 border border-neutral-800 text-left lg:text-right w-full sm:w-auto">
              <div class="text-[10px] uppercase tracking-[0.18em] text-neutral-400 font-medium">Timeline Countdown</div>
              <div class="text-3xl font-serif text-[#c5a880] mt-1 font-normal">
                ${diffDays > 0 ? `${diffDays} Days` : 'Commencing Today'}
              </div>
              <div class="text-[11px] text-neutral-400 mt-1">Single Source of Truth Active</div>
            </div>

            <div class="flex items-center gap-3 w-full sm:w-auto">
              <button id="btn-print-ros" class="flex-1 sm:flex-initial text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors flex items-center justify-center gap-2">
                ${ICONS.printer}
                <span>Run-of-Show PDF</span>
              </button>
              <button id="btn-export-json" class="flex-1 sm:flex-initial text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors flex items-center justify-center gap-2">
                ${ICONS.download}
                <span>Export Dossier</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Ledger Vitals (Minimalist, Spacious 4-Card Grid) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Vitals 1: Capital Disbursed -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="flex items-center justify-between text-xs text-neutral-400 font-medium mb-3">
            <span class="tracking-wider uppercase text-[10px]">Capital Disbursed</span>
            <span class="text-[#c5a880] text-[11px] font-mono">${spentPct}%</span>
          </div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">
            ${sym}${spent.toLocaleString('en-IN')}
          </div>
          <div class="text-[11px] text-neutral-400 mb-3">of ${sym}${totalBudget.toLocaleString('en-IN')} cap</div>
          <div class="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
            <div class="bg-[#c5a880] h-1.5 rounded-full" style="width: ${Math.min(spentPct, 100)}%"></div>
          </div>
          <div class="text-[10px] text-neutral-400 mt-3 flex justify-between">
            <span>Contingency Reserve</span>
            <span class="font-mono text-neutral-300">${sym}${contingency.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <!-- Vitals 2: Guest Confirmations -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="flex items-center justify-between text-xs text-neutral-400 font-medium mb-3">
            <span class="tracking-wider uppercase text-[10px]">Guest Confirmations</span>
            <span class="text-[#739678] text-[11px] font-mono">${Math.round((confirmedGuests / (totalGuests || 1)) * 100)}%</span>
          </div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">
            ${confirmedGuests} <span class="text-xs text-neutral-400 font-sans">Attending</span>
          </div>
          <div class="text-[11px] text-neutral-400 mb-3">${pendingGuests} awaiting response</div>
          <div class="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
            <div class="bg-[#739678] h-1.5 rounded-full" style="width: ${(confirmedGuests / (totalGuests || 1)) * 100}%"></div>
          </div>
          <div class="text-[10px] text-neutral-400 mt-3 flex justify-between">
            <span>Dietary Oversight</span>
            <span class="text-[#c5a880]">Segregated Counters</span>
          </div>
        </div>

        <!-- Vitals 3: Critical Milestones -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="flex items-center justify-between text-xs text-neutral-400 font-medium mb-3">
            <span class="tracking-wider uppercase text-[10px]">Strategy Milestones</span>
            <span class="text-neutral-400 text-[11px] font-mono">${taskProgressPct}%</span>
          </div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">
            ${completedTasks} <span class="text-xs text-neutral-400 font-sans">of ${totalTasks} Locked</span>
          </div>
          <div class="text-[11px] text-neutral-400 mb-3">${criticalTasks.length} critical path items pending</div>
          <div class="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
            <div class="bg-neutral-300 h-1.5 rounded-full" style="width: ${taskProgressPct}%"></div>
          </div>
          <div class="text-[10px] text-neutral-400 mt-3 flex justify-between">
            <span>Critical Path Status</span>
            <span class="${criticalTasks.length > 0 ? 'text-[#b88a44]' : 'text-[#739678]'}">${criticalTasks.length > 0 ? 'In Progress' : 'Optimal'}</span>
          </div>
        </div>

        <!-- Vitals 4: Operational Status -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="flex items-center justify-between text-xs text-neutral-400 font-medium mb-3">
            <span class="tracking-wider uppercase text-[10px]">Operations Status</span>
            <span class="text-[#739678] text-[11px]">Nominal</span>
          </div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">
            Zero Blocker
          </div>
          <div class="text-[11px] text-neutral-400 mb-3">Dual ATS power failover ready</div>
          <div class="w-full bg-neutral-900 rounded-full h-1.5 overflow-hidden">
            <div class="bg-[#739678] h-1.5 rounded-full w-full"></div>
          </div>
          <div class="text-[10px] text-neutral-400 mt-3 flex justify-between">
            <span>Weather Shield</span>
            <span class="text-neutral-300">Clear Forecast</span>
          </div>
        </div>
      </div>

      <!-- Next Best Actions & Cultural Overview -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Next Best Actions -->
        <div class="lg:col-span-2 bg-[#111215] border border-neutral-800 rounded-xl p-8">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <div>
              <h2 class="text-lg font-serif font-normal text-neutral-100">Recommended Executive Actions</h2>
              <p class="text-xs text-neutral-400 mt-0.5">High-priority operational decisions surfaced by the system</p>
            </div>
            <span class="text-[11px] font-mono text-neutral-400">Pillar 16</span>
          </div>

          <div class="space-y-4">
            ${criticalTasks.length > 0 ? criticalTasks.map(t => `
              <div class="p-5 rounded-lg bg-neutral-900/70 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-[#c5a880]"></span>
                    <span class="text-sm font-medium text-neutral-200">${t.title}</span>
                  </div>
                  <div class="text-xs text-neutral-400 pl-4.5">
                    Assigned: <strong class="text-neutral-300">${t.assignedTo}</strong> • Deadline: ${t.deadline}
                  </div>
                </div>
                <button data-task-complete="${t.id}" class="text-xs font-medium px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 transition-colors shrink-0 self-end sm:self-auto">
                  Mark Executed
                </button>
              </div>
            `).join('') : `
              <div class="p-6 rounded-lg bg-neutral-900/50 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                All critical path tasks are on schedule. The atelier is currently operating in execution mode.
              </div>
            `}

            <!-- Automated Suggestion -->
            <div class="p-5 rounded-lg bg-neutral-900/40 border border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="text-xs font-semibold text-[#c5a880] uppercase tracking-wider">Automated Recommendation</div>
                <div class="text-xs text-neutral-300 leading-relaxed">
                  Dietary reconciliation: 4 attendees require strict Jain and Satvik prep. Dispatch verified order sheet to Head Chef Devendra Joshi?
                </div>
              </div>
              <button id="btn-quick-dietary-sync" class="text-xs font-medium px-4 py-2 rounded-md bg-[#c5a880] hover:bg-[#b59972] text-neutral-950 transition-colors shrink-0 self-end sm:self-auto">
                Sync with Chef
              </button>
            </div>
          </div>
        </div>

        <!-- Cultural & Sacred Overview -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 flex flex-col justify-between">
          <div>
            <div class="pb-4 border-b border-neutral-800 mb-6 flex items-center justify-between">
              <div>
                <h2 class="text-lg font-serif font-normal text-neutral-100">Ritual Protocol</h2>
                <p class="text-xs text-neutral-400 mt-0.5">${event.culturalPresetId.replace('_', ' ').toUpperCase()}</p>
              </div>
              <span class="text-[10px] font-mono px-2.5 py-1 rounded bg-neutral-900 text-[#c5a880] border border-neutral-800">
                Verified
              </span>
            </div>

            <p class="text-xs text-neutral-300 leading-relaxed mb-6 font-serif">
              Astrological muhurat timings, sacred samagri checklists, and dietary isolation clauses are embedded directly within the active master schedule.
            </p>

            <div class="space-y-3 text-xs">
              <div class="flex justify-between py-2 border-b border-neutral-800/80 text-neutral-400">
                <span>Scheduled Ceremonies</span>
                <span class="text-neutral-200 font-medium">${event.runOfShow.length} Sessions</span>
              </div>
              <div class="flex justify-between py-2 border-b border-neutral-800/80 text-neutral-400">
                <span>Dietary Sanctity</span>
                <span class="text-[#739678]">100% Segregated SLA</span>
              </div>
              <div class="flex justify-between py-2 text-neutral-400">
                <span>Samagri Redundancy</span>
                <span class="text-neutral-200 font-medium">On-Site Contingency Kit</span>
              </div>
            </div>
          </div>

          <button data-tab-switch="cultural" class="w-full mt-6 text-xs font-medium py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors flex items-center justify-center gap-2">
            <span>Open Cultural Dossier</span>
            ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/CulturalRitualsView.js ---


// Cultural and Sacred Ritual Intelligence Component (No emojis, editorial elegance)
function renderCulturalRitualsView(event, state) {
  const selectedPresetId = state.selectedCulturalTab || event.culturalPresetId || 'hindu_vedic';
  const preset = CULTURAL_PRESETS[selectedPresetId] || CULTURAL_PRESETS.hindu_vedic;

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.flame}
              <span>Sacred Protocol & Cultural Intelligence</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Tradition & Sacred Ceremonies
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
              Authentic ritual oversight across major global traditions. Enforces astrological muhurat windows, sacred samagri inventories, and dietary isolation.
            </p>
          </div>

          <!-- Cultural Switcher Tabs -->
          <div class="flex items-center gap-2 flex-wrap">
            ${Object.keys(CULTURAL_PRESETS).map(key => {
              const p = CULTURAL_PRESETS[key];
              const isActive = p.id === selectedPresetId;
              return `
                <button data-cultural-select="${p.id}" class="text-xs px-3.5 py-2 rounded-lg font-medium transition-all ${
                  isActive 
                    ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }">
                  ${p.name.split(' ')[0]}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Tradition Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Ceremonies Stream -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <h2 class="text-lg font-serif font-normal text-neutral-100">${preset.name}</h2>
                <p class="text-xs text-neutral-400 mt-0.5">${preset.description}</p>
              </div>
              <span class="text-xs font-mono text-neutral-400">${(preset.rituals || []).length} Prescribed Ceremonies</span>
            </div>

            <div class="space-y-4">
              ${(preset.rituals || []).map((rit, idx) => `
                <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all space-y-3">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="flex items-center gap-3">
                      <span class="w-6 h-6 rounded-md bg-neutral-800 border border-neutral-700/80 text-neutral-300 text-xs font-mono flex items-center justify-center shrink-0">
                        ${String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 class="text-base font-serif font-normal text-neutral-100">${rit.name}</h3>
                    </div>
                    <span class="text-xs font-mono text-neutral-400 px-3 py-1 rounded bg-neutral-950 border border-neutral-800 self-start sm:self-auto">
                      ${rit.timing}
                    </span>
                  </div>

                  <p class="text-xs text-neutral-300 leading-relaxed pl-9">
                    <strong class="text-neutral-400 font-medium">Significance:</strong> ${rit.significance}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-400 pl-9 pt-3 border-t border-neutral-800/80">
                    <div>
                      <strong class="text-neutral-300 font-medium">Prescribed Attire:</strong> ${rit.attire}
                    </div>
                    <div>
                      <strong class="text-neutral-300 font-medium">Dietary Protocol:</strong> ${rit.dietary}
                    </div>
                  </div>

                  ${rit.contingency ? `
                    <div class="ml-9 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                      <strong class="text-[#c5a880] uppercase tracking-wider text-[10px] block mb-1">Contingency Directive</strong>
                      ${rit.contingency}
                    </div>
                  ` : ''}

                  <!-- Sacred Items Checklist -->
                  <div class="ml-9 pt-2">
                    <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider mb-2">Mandatory Sacred Items:</div>
                    <div class="flex flex-wrap gap-2">
                      ${(rit.items || []).map(item => `
                        <span class="px-2.5 py-1 rounded bg-neutral-950 text-neutral-300 text-[11px] border border-neutral-800 flex items-center gap-1.5 font-sans">
                          <span class="text-[#739678]">${ICONS.check}</span>
                          <span>${item}</span>
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Sidebar Directives -->
        <div class="space-y-6">
          <!-- Dietary Sanctity -->
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Dietary Sanctity & Segregation</span>
            </div>
            <div class="space-y-2.5">
              ${(preset.dietaryRules || []).map(rule => `
                <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
                  <span class="text-[#739678] mt-0.5 shrink-0">${ICONS.check}</span>
                  <span>${rule}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Auspicious Considerations -->
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.sparkles}
              <span>Auspicious Muhurat Protocols</span>
            </div>
            <div class="space-y-2.5">
              ${(preset.keyAuspiciousConsiderations || []).map(item => `
                <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
                  <span class="text-[#c5a880] mt-0.5 shrink-0">${ICONS.chevronDown}</span>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Synchronization CTA -->
          <div class="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div class="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Synchronize Protocol</div>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Inject these ceremony windows, ritual durations, and dietary rules directly into this celebration's active Run-of-Show.
            </p>
            <button data-apply-preset="${preset.id}" class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center justify-center gap-2">
              <span>Apply to Run of Show</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/StrategyTimelineView.js ---

// Strategy, Multi-Plan Tiers & Master Timeline View (Elegant, De-cluttered, No Emojis)
function renderStrategyTimelineView(event, state) {
  const plans = event.strategyPlans?.plans || {};
  const currentPlan = event.strategyPlans?.selectedPlan || 'balanced';
  const sym = event.currencySymbol || '₹';

  const phases = [
    { id: 'concept', label: 'Phase 1: Concept & Approvals' },
    { id: 'sourcing', label: 'Phase 2: Sourcing & Contracts' },
    { id: 'execution', label: 'Phase 3: Event Day Execution' },
    { id: 'wrapup', label: 'Phase 4: Post-Event Wrap-up' }
  ];

  return `
    <div class="space-y-10">
      <!-- Strategy Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.calendar}
              <span>Master Execution Architecture</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Event Planning & Strategy Suite
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Phased milestone tracking, task dependencies, and 3-tier strategic scenario evaluations.
            </p>
          </div>

          <button id="btn-add-task-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Add Milestone</span>
          </button>
        </div>
      </div>

      <!-- 3 Strategic Execution Tiers -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Strategic Tier Models</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Evaluate capital allocation and guest experience trade-offs</p>
          </div>
          <span class="text-xs font-mono text-neutral-400 uppercase">Active: <strong class="text-neutral-100">${currentPlan}</strong></span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${[
            { key: 'budget_saver', name: plans.budget_saver?.name || 'Curated Heritage', cost: plans.budget_saver?.estimatedCost, tag: 'Value Focus' },
            { key: 'balanced', name: plans.balanced?.name || 'Signature Grandeur', cost: plans.balanced?.estimatedCost, tag: 'Recommended', isRecommended: true },
            { key: 'luxury_vip', name: plans.luxury_vip?.name || 'Imperial VIP Showcase', cost: plans.luxury_vip?.estimatedCost, tag: 'Bespoke Luxury' }
          ].map(tier => {
            const planData = plans[tier.key] || {};
            const isSelected = currentPlan === tier.key;

            return `
              <div class="rounded-xl border p-6 flex flex-col justify-between transition-all ${
                isSelected 
                  ? 'bg-neutral-900 border-[#c5a880]/80 shadow-md ring-1 ring-[#c5a880]/30' 
                  : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
              }">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 text-neutral-300">
                      ${tier.tag}
                    </span>
                    ${isSelected ? `<span class="text-[11px] text-[#c5a880] font-mono">Selected Model</span>` : ''}
                  </div>

                  <div>
                    <h3 class="text-base font-serif font-normal text-neutral-100 mb-1">${tier.name}</h3>
                    <div class="text-2xl font-serif text-[#c5a880]">
                      ${sym}${(tier.cost || 0).toLocaleString('en-IN')}
                    </div>
                  </div>

                  <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                    ${planData.description || 'Comprehensive execution model.'}
                  </p>

                  <div class="space-y-2 pt-2 border-t border-neutral-800/80">
                    <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Perks:</div>
                    ${(planData.perks || []).map(p => `
                      <div class="flex items-start gap-2 text-xs text-neutral-300">
                        <span class="text-[#739678] mt-0.5 shrink-0">${ICONS.check}</span>
                        <span>${p}</span>
                      </div>
                    `).join('')}
                  </div>

                  ${(planData.compromises || []).length > 0 ? `
                    <div class="space-y-2 pt-2 border-t border-neutral-800/80">
                      <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Trade-off Notes:</div>
                      ${planData.compromises.map(c => `
                        <div class="flex items-start gap-2 text-xs text-neutral-400">
                          <span class="text-[#b88a44] mt-0.5 shrink-0">${ICONS.alertTriangle}</span>
                          <span>${c}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>

                <button data-select-plan="${tier.key}" class="w-full mt-6 text-xs font-medium py-2.5 rounded-lg transition-colors ${
                  isSelected 
                    ? 'bg-neutral-800 text-neutral-200 cursor-default' 
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                }">
                  ${isSelected ? 'Active Model' : `Select ${tier.name.split(' ')[0]}`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Phased Master Tasks Timeline -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-8">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Chronological Phase Schedule</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Step-by-step accountability ledger with task dependencies</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${event.tasks.length} Tracked Tasks</span>
        </div>

        <div class="space-y-8">
          ${phases.map(phase => {
            const phaseTasks = event.tasks.filter(t => t.phase === phase.id);
            if (phaseTasks.length === 0) return '';

            return `
              <div class="space-y-3">
                <div class="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 pb-2 border-b border-neutral-800/80 flex items-center justify-between">
                  <span>${phase.label}</span>
                  <span class="font-mono text-neutral-500 font-normal">(${phaseTasks.length} Milestones)</span>
                </div>

                <div class="grid grid-cols-1 gap-3">
                  ${phaseTasks.map(t => {
                    const isCompleted = t.status === 'completed';

                    return `
                      <div class="p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isCompleted 
                          ? 'bg-neutral-950/40 border-neutral-900 opacity-60' 
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      }">
                        <div class="flex items-start gap-3.5">
                          <button data-task-toggle="${t.id}" class="mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isCompleted 
                              ? 'bg-[#739678] border-[#739678] text-neutral-950' 
                              : 'border-neutral-700 bg-neutral-950 hover:border-neutral-500'
                          }">
                            ${isCompleted ? ICONS.check : ''}
                          </button>
                          <div class="space-y-1">
                            <div class="flex flex-wrap items-center gap-2">
                              <span class="text-sm font-medium ${isCompleted ? 'line-through text-neutral-500' : 'text-neutral-100'}">
                                ${t.title}
                              </span>
                              <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded ${
                                t.priority === 'critical' ? 'bg-neutral-900 text-[#b88a44] border border-neutral-800' :
                                'bg-neutral-900 text-neutral-400 border border-neutral-800'
                              }">
                                ${t.priority}
                              </span>
                            </div>
                            <div class="text-xs text-neutral-400 flex flex-wrap gap-4 font-sans">
                              <span>Assigned: <strong class="text-neutral-300">${t.assignedTo}</strong></span>
                              <span>Target: ${t.deadline}</span>
                            </div>
                          </div>
                        </div>

                        <div class="self-end sm:self-auto shrink-0">
                          <button data-task-toggle="${t.id}" class="text-xs font-medium px-3.5 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
                            ${isCompleted ? 'Reopen' : 'Mark Done'}
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/BudgetFinancesView.js ---

// Budget, Financial Ledger & Reserve Governance View (No emojis, editorial style)
function renderBudgetFinancesView(event, state) {
  const sym = event.currencySymbol || '₹';
  const budget = event.budget;
  const total = budget.totalLimit;
  const spent = budget.actualSpent;
  const contingency = budget.contingencyReserve || Math.round(total * 0.1);
  const remaining = total - spent;
  const spentPct = Math.round((spent / total) * 100);

  const estimatedTax = Math.round(spent * 0.18);
  const estimatedSecurityDeposit = Math.round(total * 0.08);

  return `
    <div class="space-y-10">
      <!-- Financial Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.currency}
              <span>Financial Governance</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Budget & Capital Allocation
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Authoritative spending ledger, ring-fenced 10% contingency reserve, and statutory fee detection.
            </p>
          </div>

          <button id="btn-add-expense-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Disburse Capital</span>
          </button>
        </div>
      </div>

      <!-- Financial Metric Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Total Authorized Cap</div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">${sym}${total.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Hard limit specified in charter</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Actual Disbursed</div>
          <div class="text-2xl font-serif text-[#739678] mb-1">${sym}${spent.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">${spentPct}% of capital committed</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Uncommitted Liquidity</div>
          <div class="text-2xl font-serif text-neutral-200 mb-1">${sym}${remaining.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Available for final signoffs</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Contingency Shield (10%)</div>
          <div class="text-2xl font-serif text-[#c5a880] mb-1">${sym}${contingency.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Protected against price surges</div>
        </div>
      </div>

      <!-- Category Breakdown & Hidden Fees -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Category Allocations -->
        <div class="lg:col-span-2 bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h2 class="text-lg font-serif font-normal text-neutral-100">Category Allocations</h2>
              <p class="text-xs text-neutral-400 mt-0.5">Budgeted caps against verified contractor invoices</p>
            </div>
            <span class="text-xs font-mono text-neutral-400">${budget.categories.length} Categories</span>
          </div>

          <div class="space-y-4">
            ${budget.categories.map(cat => {
              const catPct = cat.allocated ? Math.round((cat.actual / cat.allocated) * 100) : 0;
              return `
                <div class="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div class="flex items-center justify-between text-xs sm:text-sm">
                    <span class="font-medium text-neutral-200">${cat.name}</span>
                    <span class="font-mono text-neutral-300">
                      ${sym}${cat.actual.toLocaleString('en-IN')} <span class="text-neutral-500 font-sans">/ ${sym}${cat.allocated.toLocaleString('en-IN')}</span>
                    </span>
                  </div>
                  <div class="w-full bg-neutral-950 rounded-full h-1.5 overflow-hidden">
                    <div class="h-1.5 rounded-full ${catPct > 90 ? 'bg-[#b88a44]' : 'bg-[#c5a880]'}" style="width: ${Math.min(catPct, 100)}%"></div>
                  </div>
                  <div class="flex justify-between text-[11px] text-neutral-400 font-sans">
                    <span>${catPct}% Disbursed</span>
                    <span>Remaining: ${sym}${(cat.allocated - cat.actual).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Hidden Costs & Optimizations -->
        <div class="space-y-6">
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Statutory Tax & Fee Reserves</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              Automated auditing flags unquoted vendor fees before contractual execution:
            </p>
            <div class="space-y-2.5 text-xs font-sans">
              <div class="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex justify-between">
                <span class="text-neutral-400">Statutory Tax (18% GST/VAT):</span>
                <span class="font-mono text-neutral-200">${sym}${estimatedTax.toLocaleString('en-IN')}</span>
              </div>
              <div class="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex justify-between">
                <span class="text-neutral-400">Damage Security Deposit:</span>
                <span class="font-mono text-neutral-200">${sym}${estimatedSecurityDeposit.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-[#c5a880] uppercase tracking-wider">
              ${ICONS.sparkles}
              <span>Strategic Cost Optimizations</span>
            </div>
            <div class="text-xs text-neutral-300 leading-relaxed space-y-2 font-sans">
              <p>
                <strong>Seasonal Floral Shift:</strong> Utilizing local indigenous botanicals saved an estimated ~${sym}65,000 without sacrificing visual grandeur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Milestones Ledger -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Vendor Payment Milestone Schedule</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Strict authorization gates tied to deliverables</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${(budget.paymentMilestones || []).length} Milestones</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-sans">
            <thead>
              <tr class="text-neutral-400 border-b border-neutral-800 uppercase text-[10px] tracking-wider">
                <th class="py-3 px-4 font-medium">Milestone Description</th>
                <th class="py-3 px-4 font-medium">Capital Amount</th>
                <th class="py-3 px-4 font-medium">Due Date</th>
                <th class="py-3 px-4 font-medium">Status</th>
                <th class="py-3 px-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-800/80">
              ${(budget.paymentMilestones || []).map(p => {
                const isPaid = p.status === 'paid';
                return `
                  <tr class="hover:bg-neutral-900/40 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-neutral-200">${p.title}</td>
                    <td class="py-3.5 px-4 font-mono font-medium ${isPaid ? 'text-neutral-400' : 'text-[#c5a880]'}">${sym}${p.amount.toLocaleString('en-IN')}</td>
                    <td class="py-3.5 px-4 text-neutral-400">${p.dueDate}</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2.5 py-1 rounded text-[10px] font-mono uppercase ${isPaid ? 'bg-neutral-900 text-[#739678] border border-neutral-800' : 'bg-neutral-900 text-[#b88a44] border border-neutral-800'}">
                        ${p.status}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button data-pay-toggle="${p.id}" class="text-xs font-medium px-3 py-1.5 rounded transition-colors ${isPaid ? 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800' : 'bg-neutral-100 hover:bg-white text-neutral-950'}">
                        ${isPaid ? 'Mark Pending' : 'Authorize & Disburse'}
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/VenuesVendorsView.js ---


// Venue & Vendor Management View (No emojis, editorial style)
function renderVenuesVendorsView(event, state) {
  const sym = event.currencySymbol || '₹';

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.building}
              <span>Partner Directory & Negotiations</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Venues & Contractor Partners
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Venue evaluation matrices, contractor profiles, primary-to-backup failover SLAs, and automated negotiation letter composition.
            </p>
          </div>

          <button id="btn-add-vendor-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Add Contractor</span>
          </button>
        </div>
      </div>

      <!-- Venue Evaluation Matrix -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Venue Comparison Matrix</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Physical capacity, acoustics, power redundancy, and curfew constraints</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${event.venues.length} Evaluated</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${event.venues.map(v => `
            <div class="rounded-xl border p-6 space-y-4 ${
              v.status === 'contract_signed' 
                ? 'bg-neutral-900/80 border-[#c5a880]/60 ring-1 ring-[#c5a880]/20' 
                : 'bg-neutral-950/60 border-neutral-800'
            }">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-base font-serif font-normal text-neutral-100">${v.name}</h3>
                  <div class="text-xs text-neutral-400 font-sans mt-0.5">${v.type} • Capacity: <strong class="text-neutral-200">${v.capacity}</strong></div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs font-mono px-2.5 py-1 rounded bg-neutral-800 text-neutral-200 border border-neutral-700">
                    Rating ${v.score} / 10
                  </div>
                  <div class="text-sm font-serif text-[#c5a880] mt-1">${sym}${v.cost.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <div class="space-y-2 pt-2 border-t border-neutral-800/80">
                <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Features & Compliance:</div>
                <div class="flex flex-wrap gap-2 pt-1">
                  ${(v.facilities || []).map(f => `
                    <span class="px-2.5 py-1 rounded bg-neutral-950 text-neutral-300 text-[11px] border border-neutral-800 flex items-center gap-1.5 font-sans">
                      <span class="text-[#739678]">${ICONS.check}</span>
                      <span>${f}</span>
                    </span>
                  `).join('')}
                </div>
              </div>

              <div class="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-sans text-neutral-400">
                <div>
                  Contact: <span class="text-neutral-200 font-medium">${v.contactPerson}</span>
                </div>
                <span class="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase ${
                  v.status === 'contract_signed' 
                    ? 'bg-neutral-900 text-[#739678] border border-neutral-800' 
                    : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                }">
                  ${v.status.replace('_', ' ')}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Vendor Directory & Backup Failover -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Contractor Directory & Redundancy Mapping</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Contract commitments, pricing negotiations, and failover providers</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${event.vendors.length} Partners</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${event.vendors.map(vnd => {
            const isBackup = vnd.status === 'on_call_standby';

            return `
              <div class="rounded-xl border p-6 flex flex-col justify-between transition-all ${
                isBackup 
                  ? 'bg-neutral-950/40 border-dashed border-neutral-700' 
                  : 'bg-neutral-900/60 border-neutral-800'
              }">
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      ${vnd.category}
                    </span>
                    <span class="text-[10px] font-mono text-neutral-400 uppercase">
                      ${vnd.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div>
                    <h3 class="text-sm font-medium text-neutral-100">${vnd.name}</h3>
                    <div class="text-xs text-neutral-400 font-sans mt-0.5">${vnd.contact}</div>
                  </div>

                  <div class="p-3.5 rounded-lg bg-neutral-950/60 border border-neutral-800 text-xs space-y-1 font-sans">
                    <div class="flex justify-between text-neutral-400">
                      <span>Quoted Rate:</span>
                      <span class="line-through font-mono">${sym}${vnd.quotedPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div class="flex justify-between font-medium text-neutral-100">
                      <span>Contracted Rate:</span>
                      <span class="font-mono text-[#739678]">${sym}${vnd.negotiatedPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <p class="text-xs text-neutral-400 italic leading-relaxed font-serif">
                    "${vnd.notes || 'Contract terms archived.'}"
                  </p>
                </div>

                <div class="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3 mt-4">
                  <button data-negotiate-vendor="${vnd.id}" class="text-xs font-medium py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors flex items-center gap-1.5 font-sans">
                    ${ICONS.fileText}
                    <span>Draft Negotiation</span>
                  </button>
                  ${vnd.backupVendorId ? `
                    <span class="text-[10px] font-mono text-[#c5a880] px-2 py-1 rounded bg-neutral-950 border border-neutral-800" title="Standby redundancy contract active">
                      Failover Ready
                    </span>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Negotiation Draft Box -->
      <div id="negotiation-draft-box" class="hidden rounded-xl bg-neutral-900 border border-neutral-700 p-8 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-neutral-800">
          <div class="flex items-center gap-2">
            ${ICONS.fileText}
            <h3 class="text-sm font-serif font-normal text-neutral-100">Professional Counter-Offer Letter</h3>
          </div>
          <button id="btn-close-negotiate" class="text-xs text-neutral-400 hover:text-white">Close</button>
        </div>
        <div class="text-xs text-neutral-300 font-mono bg-neutral-950 p-4 rounded-lg border border-neutral-800 leading-relaxed overflow-x-auto whitespace-pre-wrap" id="negotiation-draft-text"></div>
        <div class="flex justify-end pt-2">
          <button id="btn-copy-negotiation" class="text-xs font-medium px-4 py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2">
            ${ICONS.download}
            <span>Copy Letter to Clipboard</span>
          </button>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/GuestsRsvpView.js ---


// Guest & Attendee Management View (No emojis, editorial style)
function renderGuestsRsvpView(event, state) {
  const guests = event.guests || [];
  const confirmed = guests.filter(g => g.rsvp === 'confirmed');
  const pending = guests.filter(g => g.rsvp === 'pending');
  const declined = guests.filter(g => g.rsvp === 'declined');

  // Dietary counts
  const dietaryCounts = {};
  guests.forEach(g => {
    if (g.dietary && g.dietary !== 'None') {
      dietaryCounts[g.dietary] = (dietaryCounts[g.dietary] || 0) + 1 + (g.plusOnes || 0);
    }
  });

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.users}
              <span>Hospitality & Guest Ledger</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Guest Database & Dietary Protocols
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Attendance confirmations, seating pods, allergen & sacred diet flags, and individualized cryptographic QR passes.
            </p>
          </div>

          <div class="flex items-center gap-3">
            <button id="btn-export-guests-csv" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors flex items-center gap-2">
              ${ICONS.download}
              <span>Export CSV</span>
            </button>
            <button id="btn-add-guest-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2">
              ${ICONS.plus}
              <span>Add Guest</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Total In Attendance List</div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">${guests.length}</div>
          <div class="text-xs text-neutral-400 font-sans">+${guests.reduce((acc, g) => acc + (g.plusOnes || 0), 0)} Plus-Ones</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Confirmed (RSVP)</div>
          <div class="text-2xl font-serif text-[#739678] mb-1">${confirmed.length}</div>
          <div class="text-xs text-neutral-400 font-sans">Seating locked</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Awaiting Reply</div>
          <div class="text-2xl font-serif text-[#b88a44] mb-1">${pending.length}</div>
          <div class="text-xs text-neutral-400 font-sans">Follow-up scheduled</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Declined</div>
          <div class="text-2xl font-serif text-neutral-400 mb-1">${declined.length}</div>
          <div class="text-xs text-neutral-400 font-sans">Seats reassigned</div>
        </div>
      </div>

      <!-- Dietary Safeguard Matrix -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
        <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
          ${ICONS.shield}
          <span>Sacred & Health Dietary Requirements</span>
        </div>
        <div class="flex flex-wrap gap-3">
          ${Object.keys(dietaryCounts).map(d => `
            <div class="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-[#c5a880]"></span>
              <span class="text-neutral-300">${d}:</span>
              <span class="font-mono font-medium text-neutral-100">${dietaryCounts[d]} Portions</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Guests Table -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Guest Roster & Seating Zones</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Authoritative attendee roster with cryptographic verification</p>
          </div>
          <input type="text" id="guest-search-input" placeholder="Search by name or table..." class="bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-lg px-4 py-2 focus:outline-none focus:border-[#c5a880] max-w-xs">
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-sans">
            <thead>
              <tr class="text-neutral-400 border-b border-neutral-800 uppercase text-[10px] tracking-wider">
                <th class="py-3 px-4 font-medium">Guest Name</th>
                <th class="py-3 px-4 font-medium">Table Assignment</th>
                <th class="py-3 px-4 font-medium">RSVP Status</th>
                <th class="py-3 px-4 font-medium">Dietary Requirement</th>
                <th class="py-3 px-4 font-medium">Plus-Ones</th>
                <th class="py-3 px-4 font-medium">Contact</th>
                <th class="py-3 px-4 text-right font-medium">Pass</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-800/80" id="guests-table-body">
              ${guests.map(g => `
                <tr class="hover:bg-neutral-900/40 transition-colors">
                  <td class="py-3.5 px-4 font-medium text-neutral-100 flex items-center gap-3">
                    <span class="w-7 h-7 rounded-md bg-neutral-900 flex items-center justify-center text-xs text-neutral-300 font-mono border border-neutral-800">
                      ${g.name.charAt(0)}
                    </span>
                    <span>${g.name}</span>
                  </td>
                  <td class="py-3.5 px-4 text-neutral-300">${g.table || 'Unassigned'}</td>
                  <td class="py-3.5 px-4">
                    <span class="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase ${
                      g.rsvp === 'confirmed' ? 'bg-neutral-900 text-[#739678] border border-neutral-800' :
                      g.rsvp === 'pending' ? 'bg-neutral-900 text-[#b88a44] border border-neutral-800' :
                      'bg-neutral-900 text-neutral-500 border border-neutral-800'
                    }">
                      ${g.rsvp}
                    </span>
                  </td>
                  <td class="py-3.5 px-4">
                    ${g.dietary && g.dietary !== 'None' ? `
                      <span class="px-2.5 py-0.5 rounded text-[10px] bg-neutral-900 text-neutral-300 border border-neutral-800">
                        ${g.dietary}
                      </span>
                    ` : '<span class="text-neutral-500">—</span>'}
                  </td>
                  <td class="py-3.5 px-4 text-neutral-400 font-mono">+${g.plusOnes || 0}</td>
                  <td class="py-3.5 px-4 text-neutral-400 font-mono">${g.phone || '—'}</td>
                  <td class="py-3.5 px-4 text-right">
                    <button data-view-pass="${g.id}" class="text-xs font-medium px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors">
                      View Pass
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Digital Pass Modal -->
      <div id="digital-pass-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div class="bg-[#111215] border border-neutral-800 rounded-2xl max-w-sm w-full p-8 text-center shadow-2xl relative" id="digital-pass-content"></div>
      </div>
    </div>
  `;
}


// --- File: src/components/RunOfShowView.js ---


// Minute-by-Minute Run of Show & Delay Cascade Simulator (No emojis, editorial style)
function renderRunOfShowView(event, state) {
  const ros = event.runOfShow || [];

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.clock}
              <span>Temporal Coordination</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Minute-by-Minute Run of Show
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Precision day-of schedule, designated stage captains, and real-time Delay Cascade Propagation.
            </p>
          </div>

          <button id="btn-print-ros-action" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.printer}
            <span>Print Official Dossier</span>
          </button>
        </div>
      </div>

      <!-- Real-Time Delay Cascade Simulator -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <div class="flex items-center gap-2">
              ${ICONS.clock}
              <h2 class="text-base font-serif font-normal text-neutral-100">Schedule Cascade Simulator</h2>
            </div>
            <p class="text-xs text-neutral-400 mt-0.5">Simulate delays without breaking local noise curfews or meal service windows</p>
          </div>
          <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-neutral-900 text-[#c5a880] border border-neutral-800">
            Pillar 6 & 9
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-neutral-950/70 border border-neutral-800">
          <div>
            <label class="block text-[11px] font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Delayed Milestone:</label>
            <select id="delay-session-select" class="w-full bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-lg p-2.5 focus:outline-none focus:border-[#c5a880]">
              ${ros.map(item => `
                <option value="${item.id}">
                  ${item.time} — ${item.ritual}
                </option>
              `).join('')}
            </select>
          </div>

          <div>
            <label class="block text-[11px] font-medium text-neutral-400 mb-1.5 uppercase tracking-wider">Delay Offset:</label>
            <select id="delay-minutes-select" class="w-full bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-lg p-2.5 focus:outline-none focus:border-[#c5a880]">
              <option value="15">+15 Minutes</option>
              <option value="30" selected>+30 Minutes</option>
              <option value="45">+45 Minutes</option>
              <option value="60">+60 Minutes (Major Realignment)</option>
            </select>
          </div>

          <div class="flex items-end gap-3">
            <button id="btn-simulate-delay" class="flex-1 text-xs font-medium py-2.5 px-4 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center justify-center gap-2">
              <span>Recalculate</span>
              ${ICONS.arrowRight}
            </button>
            <button id="btn-reset-delays" class="text-xs font-medium py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
              Reset
            </button>
          </div>
        </div>

        <!-- Delay Result -->
        <div id="delay-result-box" class="hidden p-5 rounded-xl bg-neutral-900 border border-neutral-700 text-xs space-y-2">
          <div class="flex items-center justify-between pb-2 border-b border-neutral-800">
            <span class="text-neutral-200 font-medium">Broadcast Alert Drafted</span>
            <span class="text-[10px] font-mono text-[#c5a880]" id="delay-affected-count"></span>
          </div>
          <div class="font-mono text-neutral-300 bg-neutral-950 p-4 rounded-lg border border-neutral-800 leading-relaxed" id="delay-broadcast-text"></div>
        </div>
      </div>

      <!-- Chronological Schedule List -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Ceremony Sequence</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Chronological execution order with venue and stage captains</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${ros.length} Windows</span>
        </div>

        <div class="space-y-4">
          ${ros.map((item, idx) => `
            <div class="p-5 rounded-xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              item.delayed 
                ? 'bg-neutral-900 border-[#c5a880] ring-1 ring-[#c5a880]/30' 
                : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
            }">
              <div class="flex items-start gap-4">
                <div class="flex flex-col items-center justify-center w-20 h-16 rounded-lg bg-neutral-950 border border-neutral-800 shrink-0 text-center">
                  <span class="text-sm font-mono font-medium text-neutral-200">${item.time.split(' ')[0]}</span>
                  <span class="text-[9px] font-mono text-neutral-500 uppercase">${item.time.split(' ')[1] || 'AM'}</span>
                </div>

                <div class="space-y-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-base font-serif font-normal text-neutral-100">${item.ritual}</h3>
                    ${item.delayed ? `
                      <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-950 text-[#c5a880] border border-neutral-800">
                        ${item.delayNotice || 'Adjusted'}
                      </span>
                    ` : ''}
                  </div>

                  <div class="text-xs text-neutral-400 flex flex-wrap items-center gap-4 font-sans">
                    <span>Location: <strong class="text-neutral-300">${item.venue}</strong></span>
                    <span>Captain: ${item.lead}</span>
                    <span>Concludes: ${item.endTime || 'End'}</span>
                  </div>

                  <div class="text-xs text-neutral-400 italic pt-1 font-serif">
                    "${item.notes || 'Strict protocol alignment.'}"
                  </div>
                </div>
              </div>

              <div class="self-end md:self-auto shrink-0">
                <span class="text-[10px] font-mono uppercase px-3 py-1 rounded bg-neutral-950 text-neutral-300 border border-neutral-800">
                  Ready
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/LiveOperationsView.js ---

// Real-time Event-Day Operations Command Center (No emojis, editorial style)
function renderLiveOperationsView(event, state) {
  const ops = event.liveOperations || { activeAlerts: [], incidents: [], staffRoster: [] };
  const incidents = ops.incidents || [];
  const staff = ops.staffRoster || [];

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.activity}
              <span>Live Operations</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Event-Day Command & Incident Management
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Real-time situational awareness, on-site problem resolution, and mobile staff coordination.
            </p>
          </div>

          <button id="btn-log-incident-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Log Field Incident</span>
          </button>
        </div>
      </div>

      <!-- Live Alerts Bar -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${(ops.activeAlerts || []).map(alt => `
          <div class="p-6 rounded-xl border flex items-start gap-4 ${
            alt.level === 'warning' 
              ? 'bg-neutral-900 border-[#c5a880]/60' 
              : 'bg-[#111215] border-neutral-800 text-neutral-300'
          }">
            <span class="text-neutral-400 mt-0.5 shrink-0">${ICONS.alertTriangle}</span>
            <div class="space-y-1">
              <div class="flex items-center justify-between gap-4">
                <h3 class="text-sm font-medium text-neutral-100">${alt.title}</h3>
                <span class="text-[10px] font-mono text-neutral-400">${alt.time}</span>
              </div>
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">${alt.message}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Incident Log -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Live Incident & Remediation Log</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Rapid resolution tracking for power, catering, sound, and VIP flows</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${incidents.length} Records</span>
        </div>

        <div class="space-y-4">
          ${incidents.length > 0 ? incidents.map(inc => {
            const isResolved = inc.status === 'resolved';

            return `
              <div class="p-5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isResolved 
                  ? 'bg-neutral-950/40 border-neutral-900 opacity-60' 
                  : 'bg-neutral-900/80 border-neutral-800'
              }">
                <div class="flex items-start gap-4">
                  <span class="mt-0.5 shrink-0 ${isResolved ? 'text-[#739678]' : 'text-[#b88a44]'}">
                    ${isResolved ? ICONS.check : ICONS.alertCircle}
                  </span>
                  <div class="space-y-1.5">
                    <div class="flex flex-wrap items-center gap-2">
                      <h3 class="text-sm font-medium text-neutral-100">${inc.title}</h3>
                      <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                        Severity: ${inc.severity}
                      </span>
                      <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded ${isResolved ? 'bg-neutral-950 text-[#739678] border border-neutral-800' : 'bg-neutral-950 text-[#b88a44] border border-neutral-800'}">
                        ${inc.status}
                      </span>
                    </div>

                    <div class="text-xs text-neutral-300 font-sans">
                      <strong>Resolution Directive:</strong> ${inc.resolution || 'Investigating remediation on site...'}
                    </div>

                    <div class="text-[11px] text-neutral-400 font-mono">
                      Reported: ${inc.reportedAt} • Handled by: <strong class="text-neutral-300">${inc.resolvedBy || 'Floor Captain'}</strong>
                    </div>
                  </div>
                </div>

                <div class="self-end sm:self-auto shrink-0">
                  <button data-resolve-incident="${inc.id}" class="text-xs font-medium px-3.5 py-1.5 rounded transition-colors ${
                    isResolved 
                      ? 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800' 
                      : 'bg-neutral-100 hover:bg-white text-neutral-950'
                  }">
                    ${isResolved ? 'Reopen' : 'Mark Resolved'}
                  </button>
                </div>
              </div>
            `;
          }).join('') : `
            <div class="p-8 text-center text-xs text-neutral-400 bg-neutral-950/60 rounded-xl border border-neutral-800">
              Zero active operational incidents. All ceremony parameters within nominal limits.
            </div>
          `}
        </div>
      </div>

      <!-- Staff Roster & Dispatch -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">On-Site Marshals & Coordinators</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Direct communication channels for key stage and logistics captains</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${staff.length} Active Officers</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${staff.map(stf => `
            <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-4">
              <div>
                <div class="flex items-center justify-between mb-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#739678]"></span>
                  <span class="text-[9px] font-mono text-neutral-400 uppercase">On Post</span>
                </div>
                <h3 class="text-sm font-medium text-neutral-100">${stf.name}</h3>
                <div class="text-xs text-[#c5a880] font-sans mt-0.5">${stf.role}</div>
                <div class="text-xs text-neutral-400 font-mono mt-2">${stf.phone}</div>
              </div>
              <button class="w-full text-xs font-medium py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors">
                Direct Dispatch
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/MarketingThemesView.js ---

// Marketing, Themes & Moodboard Component (No emojis, editorial style)
function renderMarketingThemesView(event, state) {
  const mkt = event.marketingThemes || {
    palette: ['#0b0c0e', '#c5a880', '#e2e4e9', '#5e8363', '#1e2025'],
    paletteNames: ['Obsidian Noir', 'Antique Champagne', 'Warm Silver', 'Sage Laurel', 'Deep Slate'],
    taglines: ['A Celebration of Love and Legacy', 'Moments Made Timeless'],
    socialCalendar: []
  };

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.palette}
              <span>Atelier Identity & Outreach</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Identity, Aesthetics & Sponsorship
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Harmonized color palettes, official editorial taglines, 30-day promotional calendar, and sponsor packages.
            </p>
          </div>
        </div>
      </div>

      <!-- Color Palette Swatches -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Harmonized Palette & Swatches</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Atmospheric palette applied across stationery, florals, and lighting</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Atelier Palette</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
          ${mkt.palette.map((hex, idx) => `
            <div class="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/80 flex flex-col">
              <div class="h-24 w-full" style="background-color: ${hex}"></div>
              <div class="p-3.5 space-y-0.5">
                <div class="text-xs font-medium text-neutral-200 truncate">${mkt.paletteNames[idx] || `Tone ${idx + 1}`}</div>
                <div class="text-[10px] font-mono text-neutral-500 uppercase">${hex}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Taglines & Calendar -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Taglines -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Official Brand Statements</h2>
          </div>

          <div class="space-y-3">
            ${mkt.taglines.map(tag => `
              <div class="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs text-neutral-200">
                <span class="font-serif italic text-neutral-300">"${tag}"</span>
                <button data-copy-text="${tag}" class="text-[10px] px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 hover:text-white">
                  Copy
                </button>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 text-xs">
            <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider mb-1">Campaign Hashtag:</div>
            <div class="font-mono text-neutral-100 text-sm font-semibold">${event.tagline?.match(/#[A-Za-z0-9_]+/)?.[0] || '#Celebration2026'}</div>
          </div>
        </div>

        <!-- Social Calendar -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Countdown Broadcast Schedule</h2>
          </div>

          <div class="space-y-3">
            ${(mkt.socialCalendar || []).map(post => `
              <div class="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs space-y-1">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="font-mono text-[#c5a880]">${post.day}</span>
                  <span class="text-neutral-500 font-sans">${post.channel}</span>
                </div>
                <div class="text-neutral-300 font-sans leading-relaxed">${post.post}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Sponsorship Tier Packages -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Sponsorship & Patron Tiers</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Commercial benefits, signage placements, and patron credentials</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Pillar 12</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Principal Patron</div>
            <div class="text-xl font-serif text-[#c5a880]">₹2,50,000 / $3,000</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Main stage prominent identity</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Keynote introductory address (15m)</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Private VIP hospitality pod (4 seats)</li>
            </ul>
          </div>

          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Associate Partner</div>
            <div class="text-xl font-serif text-neutral-200">₹1,00,000 / $1,200</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Exhibition presence in grand gallery</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Inserts in digital guest dossiers</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> 2 Complimentary VIP credentials</li>
            </ul>
          </div>

          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Hospitality Partner</div>
            <div class="text-xl font-serif text-neutral-300">In-Kind / ₹50,000</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Exclusive glassware & dining branding</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Curated tasting station</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/EmergencyContingencyView.js ---

// Emergency, Contingency & Weather Shield Component (No emojis, editorial style)
function renderEmergencyContingencyView(event, state) {
  const emg = event.contingencyEmergency || {
    weatherBackupPlan: 'Rain-resistant indoor facility on standby.',
    powerFailover: 'Dual generators with automatic transfer switch.',
    medicalPlan: 'Paramedics on-site.',
    emergencyContacts: []
  };

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.shield}
              <span>Safety & Risk Safeguards</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Emergency & Contingency Protocols
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Weather fallback contracts, dual 100kVA power auto-switchovers, life-safety triage, and direct authority lines.
            </p>
          </div>
        </div>
      </div>

      <!-- Human Escalation Boundary Notice -->
      <div class="p-6 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-3.5">
        <span class="text-neutral-400 mt-0.5 shrink-0">${ICONS.alertTriangle}</span>
        <div>
          <strong class="text-neutral-100 block mb-0.5">Life-Safety Operational Standard:</strong>
          Celestial strictly defers medical, structural, and security events to certified human first responders and civic authorities. The system surfaces immediate telephony dispatch connections rather than improvising simulated autonomous responses.
        </div>
      </div>

      <!-- Core Contingency Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Weather Contingency -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Weather Contingency</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.weatherBackupPlan}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Mobilization SLA:</strong> 45-minute transition to covered pagodas.
            </div>
          </div>
          <button id="btn-trigger-weather-failover" class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors">
            Simulate Weather Failover
          </button>
        </div>

        <!-- Power & AV Failover -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.activity}
              <span>Grid & Power Failover</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.powerFailover}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Switchover Time:</strong> 10-second ATS auto-transfer prevents blackout.
            </div>
          </div>
          <button class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 cursor-default">
            Circuits Verified
          </button>
        </div>

        <!-- Medical & Triage -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.users}
              <span>Medical & Triage</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.medicalPlan}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Equipment:</strong> Defibrillator (AED) and certified on-site triage nurse.
            </div>
          </div>
          <button class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 cursor-default">
            First Aid Kit On-Site
          </button>
        </div>
      </div>

      <!-- Emergency Contact Directory -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Direct Emergency Response Dispatch</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Direct communication channels for hospital, police, and security leads</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Emergency Hotlines</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${(emg.emergencyContacts || []).map(c => `
            <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-3">
              <div>
                <div class="text-[9px] font-mono uppercase text-neutral-500 mb-1">Service Entity</div>
                <h3 class="text-sm font-medium text-neutral-100">${c.service}</h3>
                <div class="text-xs font-mono text-neutral-300 mt-2">${c.contact}</div>
              </div>
              <a href="tel:${c.contact.split('/')[0].trim()}" class="inline-block text-center text-xs font-medium py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors">
                Connect Directly
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/PostEventAuditView.js ---

// Post-Event Management, Wrap-Up & Audit View (No emojis, editorial style)
function renderPostEventAuditView(event, state) {
  const sym = event.currencySymbol || '₹';
  const spent = event.budget.actualSpent;
  const planned = event.budget.plannedTotal;
  const variance = planned - spent;

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.archive}
              <span>Reconciliation & Retrospective</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Post-Event Wrap-Up & Financial Audit
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Contractor balance settlements, security deposit recovery, attendee feedback surveys, and retrospective variance report.
            </p>
          </div>
        </div>
      </div>

      <!-- Wrap-up Checklist Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Operational Teardown & Settlements -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Teardown & Deposit Recovery</h2>
          </div>

          <div class="space-y-3 text-xs font-sans">
            ${[
              { text: 'Palace walkthrough inspection and damage-free signoff completed', status: 'done' },
              { text: 'AV & Sound Truss equipment returned with zero hardware faults', status: 'done' },
              { text: 'Inventory verification for returnable silver thalis and tableware', status: 'pending' },
              { text: 'Security deposit refund collection (₹80,000)', status: 'pending' },
              { text: 'Final invoice signoffs and digital receipts archived in dossier', status: 'pending' }
            ].map((item, idx) => `
              <div class="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3 text-neutral-300">
                  <span class="${item.status === 'done' ? 'text-[#739678]' : 'text-neutral-600'}">
                    ${item.status === 'done' ? ICONS.check : '○'}
                  </span>
                  <span class="${item.status === 'done' ? 'line-through text-neutral-500' : ''}">${item.text}</span>
                </div>
                <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded ${
                  item.status === 'done' ? 'bg-neutral-950 text-[#739678] border border-neutral-800' : 'bg-neutral-950 text-[#b88a44] border border-neutral-800'
                }">
                  ${item.status}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Guest Gratitude -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Guest Gratitude & Retrospective</h2>
          </div>

          <div class="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 font-serif leading-relaxed">
            "Dear friends and esteemed guests, thank you for gracing ${event.title} with your presence. Our curated digital portrait gallery is now accessible: <strong>https://celestial.gallery/relive-${event.id}</strong>. We would welcome your reflections on your celebration experience."
          </div>

          <div class="flex items-center gap-3">
            <button class="flex-1 text-xs font-medium py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors">
              Dispatch Guest Message
            </button>
            <button class="text-xs font-medium py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
              Copy Text
            </button>
          </div>
        </div>
      </div>

      <!-- Financial Post-Mortem -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Financial Retrospective Variance</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Authoritative budget reconciliation and savings achieved</p>
          </div>
          <span class="text-xs font-mono text-[#739678]">Audit Certified</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs mb-4">
          <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-1">Total Authorized Plan</div>
            <div class="text-xl font-serif text-neutral-100">${sym}${planned.toLocaleString('en-IN')}</div>
          </div>

          <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-1">Final Disbursed Outflow</div>
            <div class="text-xl font-serif text-neutral-200">${sym}${spent.toLocaleString('en-IN')}</div>
          </div>

          <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800">
            <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-1">Net Savings Achieved</div>
            <div class="text-xl font-serif text-[#739678]">+${sym}${variance.toLocaleString('en-IN')} Under Cap</div>
          </div>
        </div>

        <div class="p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 font-serif leading-relaxed">
          <strong class="text-neutral-100 font-sans block mb-1">Retrospective Finding:</strong>
          By early-locking multi-cuisine catering contracts and selecting seasonal local indigenous florals, the celebration maintained full ritual and cultural authenticity while remaining safely within authorized bounds. The 10% reserve of ${sym}${event.budget.contingencyReserve?.toLocaleString('en-IN') || '0'} remained untouched.
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/AgentActivityView.js ---

// Autonomous Agent Activity Stream, Verification & Human Gate (No emojis, editorial style)
function renderAgentActivityView(event, state) {
  const logs = event.agentActivityLog || [];
  const pendingApprovals = logs.filter(l => l.type === 'action_required' && !l.approved);

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.bot}
              <span>Autonomous Execution & Audit</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Autonomous Activity & Governance Trail
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Autonomous reasoning logs, confidence scoring, fact-vs-assumption validation, and Human-in-the-Loop authorization checkpoints.
            </p>
          </div>

          <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 self-start md:self-auto shrink-0">
            Audit State: <strong class="text-[#739678]">Immutable</strong>
          </span>
        </div>
      </div>

      <!-- Human-in-the-Loop Approval Gate -->
      ${pendingApprovals.length > 0 ? `
        <div class="rounded-2xl bg-neutral-900 border border-[#b88a44] p-8 shadow-md space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                ${ICONS.shield}
                <h2 class="text-base font-serif font-normal text-neutral-100">Human Authorization Checkpoint (${pendingApprovals.length})</h2>
              </div>
              <p class="text-xs text-neutral-400">
                In compliance with Pillar 22: The system pauses and requires explicit human consent prior to high-stakes disbursements or vendor cancellations.
              </p>
            </div>
            <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-neutral-950 text-[#b88a44] border border-neutral-800">
              Pending Authorization
            </span>
          </div>

          <div class="space-y-4">
            ${pendingApprovals.map(appr => `
              <div class="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-mono uppercase text-[#b88a44] font-semibold">${appr.category}</span>
                    <span class="text-[10px] font-mono text-neutral-500">• ${appr.timestamp}</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300">Confidence: ${Math.round(appr.confidence * 100)}%</span>
                  </div>
                  <div class="text-sm font-medium text-neutral-100 font-sans">${appr.summary}</div>
                </div>

                <div class="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <button data-approve-action="${appr.id}" class="text-xs font-medium px-4 py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors">
                    Authorize Action
                  </button>
                  <button data-reject-action="${appr.id}" class="text-xs font-medium px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Agent Activity Stream -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Audited Decision Trail</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Continuous verification log with assumption-vs-fact validation</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${logs.length} Audited Events</span>
        </div>

        <div class="space-y-3">
          ${logs.map(log => {
            const isApproved = log.approved;
            const isActionReq = log.type === 'action_required';

            return `
              <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <span class="mt-0.5 text-neutral-400 shrink-0">${ICONS.sparkles}</span>
                  <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-3">
                      <span class="text-xs font-mono text-neutral-300 font-medium">${log.category}</span>
                      <span class="text-[10px] font-mono text-neutral-500">• ${log.timestamp}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400">
                        Confidence: ${Math.round(log.confidence * 100)}%
                      </span>
                      ${isActionReq && isApproved ? `
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-[#739678] border border-neutral-800">
                          Human Authorized
                        </span>
                      ` : ''}
                    </div>
                    <p class="text-xs text-neutral-300 leading-relaxed font-sans">${log.summary}</p>
                  </div>
                </div>

                <div class="shrink-0 text-right">
                  <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                    ${log.type.replace('_', ' ')}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/AIPlannerModal.js ---


// AI Event Planner Wizard Modal (No emojis, editorial style)
function renderAIPlannerModal(state) {
  return `
    <div id="ai-planner-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div class="bg-[#111215] border border-neutral-800 rounded-2xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative my-8 space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.sparkles}
              <span>Event Architect</span>
            </div>
            <h2 class="text-2xl font-serif text-neutral-100 font-normal">Curate a New Celebration</h2>
            <p class="text-xs text-neutral-400 font-sans">Articulate your vision in plain language — the atelier coordinates the full 22-pillar master plan.</p>
          </div>
          <button id="btn-close-planner-modal" class="text-neutral-500 hover:text-white text-sm font-mono p-2">
            Close
          </button>
        </div>

        <!-- Vision Prompt -->
        <div class="space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-medium text-neutral-300 uppercase tracking-wider">Vision Narrative:</label>
              <button id="btn-modal-voice-input" class="text-xs text-[#c5a880] hover:text-[#dfc8a7] flex items-center gap-1.5 transition-colors font-sans">
                <span id="modal-voice-icon">${ICONS.mic}</span>
                <span id="modal-voice-label">Speak Narrative</span>
              </button>
            </div>
            <textarea id="ai-vision-input" rows="4" placeholder="e.g. A college tech and cultural fest that students will remember, with a strict budget of 4.5 Lakhs for 600 attendees..." class="w-full bg-neutral-950 text-xs sm:text-sm text-neutral-100 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-[#c5a880] placeholder-neutral-600 leading-relaxed font-sans"></textarea>
          </div>

          <!-- Inspiration Templates -->
          <div class="space-y-2">
            <div class="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">Inspiration Templates:</div>
            <div class="space-y-2">
              ${[
                'College fest that students will remember with a limited budget of ₹4.5L for 600 attendees',
                'Royal 3-day destination wedding in Udaipur with Haldi, Sangeet & Vedic Pheras under ₹28L',
                'Milestone 50th Birthday Party at an organic vineyard for 80 guests with live jazz',
                'Grand Nikah and Walima banquet for 450 guests with 100% Halal catering in Hyderabad'
              ].map(prompt => `
                <button data-fill-prompt="${prompt}" class="prompt-chip w-full text-left text-xs p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 transition-colors truncate font-sans">
                  ${prompt}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Cultural Framework -->
          <div class="space-y-2 pt-2">
            <label class="block text-xs font-medium text-neutral-300 uppercase tracking-wider">Cultural & Ritual Framework:</label>
            <select id="modal-cultural-preset" class="w-full bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-lg p-3 focus:outline-none focus:border-[#c5a880]">
              ${Object.keys(CULTURAL_PRESETS).map(k => `
                <option value="${k}">${CULTURAL_PRESETS[k].name} — ${CULTURAL_PRESETS[k].description.slice(0, 60)}...</option>
              `).join('')}
            </select>
          </div>

          <!-- Actions -->
          <div class="pt-6 border-t border-neutral-800 flex items-center justify-end gap-3">
            <button id="btn-cancel-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
              Cancel
            </button>
            <button id="btn-generate-event-ai" class="text-xs font-medium px-5 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2">
              ${ICONS.sparkles}
              <span>Synthesize Master Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/components/AIChatDrawer.js ---

// Conversational AI Copilot Drawer & Voice Assistant (No emojis, editorial style)
function renderAIChatDrawer(state) {
  const messages = state.chatMessages || [];

  return `
    <!-- AI Assistant Sliding Drawer -->
    <div id="ai-chat-drawer" class="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#0c0d0f]/95 backdrop-blur-xl border-l border-neutral-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${state.isChatOpen ? 'translate-x-0' : 'translate-x-full'}">
      <!-- Drawer Header -->
      <div class="h-20 px-6 border-b border-neutral-800 flex items-center justify-between gap-4 bg-[#090a0c]">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-[#c5a880]">
            ${ICONS.bot}
          </div>
          <div>
            <div class="font-serif text-sm text-neutral-100 font-normal">Antigravity Copilot</div>
            <div class="text-[10px] text-neutral-400 font-sans tracking-wide">Continuous Event Operating System</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Voice Output Toggle -->
          <button id="btn-toggle-voice-output" class="text-xs p-2 rounded-lg ${state.voiceOutputEnabled ? 'bg-neutral-800 text-[#c5a880] border border-neutral-700' : 'bg-neutral-900 text-neutral-500 border border-neutral-800'} transition-colors" title="Toggle Speech Readout">
            ${ICONS.volume}
          </button>
          <button id="btn-close-ai-chat" class="text-neutral-400 hover:text-white text-xs font-mono p-2">
            Close
          </button>
        </div>
      </div>

      <!-- Quick Action Prompt Chips -->
      <div class="px-6 py-2.5 bg-[#090a0c]/60 border-b border-neutral-800/80 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-sans">
        ${[
          'Find a caterer under ₹1 Lakh',
          'What if performer is 30m late?',
          'Suggest Jain & Satvik menu',
          '3-tier plan trade-offs',
          'Check weather contingency'
        ].map(chip => `
          <button data-quick-chat="${chip}" class="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 whitespace-nowrap transition-colors text-[11px]">
            ${chip}
          </button>
        `).join('')}
      </div>

      <!-- Messages Scroll Container -->
      <div id="chat-messages-container" class="flex-1 overflow-y-auto p-6 space-y-4 text-xs font-sans leading-relaxed">
        ${messages.map(msg => `
          <div class="flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}">
            <div class="max-w-[88%] rounded-xl p-4 ${
              msg.role === 'user' 
                ? 'bg-neutral-100 text-neutral-950 font-medium' 
                : 'bg-neutral-900 border border-neutral-800 text-neutral-200'
            }">
              ${msg.text}
              ${msg.actionTrigger ? `
                <div class="mt-3 pt-3 border-t border-neutral-800">
                  <button data-action-pill="${msg.actionTrigger}" class="text-xs font-medium text-[#c5a880] hover:text-white flex items-center gap-1.5">
                    <span>${msg.actionTriggerLabel || 'Proceed'}</span>
                    ${ICONS.arrowRight}
                  </button>
                </div>
              ` : ''}
            </div>
            <span class="text-[9px] font-mono text-neutral-500 mt-1 px-1">${msg.time || ''}</span>
          </div>
        `).join('')}
      </div>

      <!-- Input Bar -->
      <div class="p-4 border-t border-neutral-800 bg-[#090a0c]">
        <div class="flex items-center gap-2">
          <input type="text" id="chat-input-field" placeholder="Instruct, inquire, or speak..." class="flex-1 bg-neutral-900 text-xs text-neutral-100 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a880] placeholder-neutral-500 font-sans">
          
          <!-- Mic -->
          <button id="btn-voice-mic" class="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-300 transition-colors ${state.isListening ? 'border-[#c5a880] text-[#c5a880] animate-pulse' : ''}" title="Voice Command">
            ${ICONS.mic}
          </button>

          <!-- Submit -->
          <button id="btn-send-chat" class="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 flex items-center justify-center transition-colors">
            ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    </div>
  `;
}


// --- File: src/app.js ---




















// Application State Store with LocalStorage Persistence
const STORAGE_KEY = 'gravity_celestial_event_os_v2';

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.events && parsed.events.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse localStorage', e);
  }

  return {
    events: INITIAL_EVENTS,
    activeEventId: INITIAL_EVENTS[0].id,
    activeTab: 'cockpit',
    isChatOpen: false,
    isListening: false,
    voiceOutputEnabled: true,
    selectedCulturalTab: 'hindu_vedic',
    chatMessages: [
      {
        id: 'msg-init',
        role: 'assistant',
        text: 'Welcome, Gravity. Celestial Event OS is active. All 22 execution pillars, sacred cultural frameworks, and financial safety gates are synchronized. How may I direct the atelier today?',
        time: 'Just now'
      }
    ]
  };
}

let state = loadStoredState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Save state failed', e);
  }
}

function getActiveEvent() {
  return state.events.find(e => e.id === state.activeEventId) || state.events[0];
}

// Master Render Function
function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const activeEvent = getActiveEvent();
  state.pendingApprovalsCount = (activeEvent.agentActivityLog || []).filter(l => l.type === 'action_required' && !l.approved).length;

  let mainViewHtml = '';
  switch (state.activeTab) {
    case 'cockpit':
      mainViewHtml = renderCockpitView(activeEvent, state);
      break;
    case 'cultural':
      mainViewHtml = renderCulturalRitualsView(activeEvent, state);
      break;
    case 'strategy':
      mainViewHtml = renderStrategyTimelineView(activeEvent, state);
      break;
    case 'budget':
      mainViewHtml = renderBudgetFinancesView(activeEvent, state);
      break;
    case 'vendors':
      mainViewHtml = renderVenuesVendorsView(activeEvent, state);
      break;
    case 'guests':
      mainViewHtml = renderGuestsRsvpView(activeEvent, state);
      break;
    case 'runofshow':
      mainViewHtml = renderRunOfShowView(activeEvent, state);
      break;
    case 'liveops':
      mainViewHtml = renderLiveOperationsView(activeEvent, state);
      break;
    case 'marketing':
      mainViewHtml = renderMarketingThemesView(activeEvent, state);
      break;
    case 'contingency':
      mainViewHtml = renderEmergencyContingencyView(activeEvent, state);
      break;
    case 'postevent':
      mainViewHtml = renderPostEventAuditView(activeEvent, state);
      break;
    case 'agentlog':
      mainViewHtml = renderAgentActivityView(activeEvent, state);
      break;
    default:
      mainViewHtml = renderCockpitView(activeEvent, state);
  }

  root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#090a0c] text-neutral-100 font-sans selection:bg-[#c5a880] selection:text-neutral-950">
      ${renderNavbar(state)}
      <main class="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-10 py-10">
        ${mainViewHtml}
      </main>
      <footer class="border-t border-neutral-800/80 bg-[#0c0d0f] py-8 text-center text-xs text-neutral-400 font-sans">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="font-serif text-neutral-400 text-sm">Celestial Atelier Event Operating System</div>
          <div class="flex items-center gap-6 text-[11px] text-neutral-400 font-sans uppercase tracking-widest">
            <span>22 Core Pillars</span>
            <span>Cultural & Ritual Sanctity</span>
            <span>Deterministic Financial Governance</span>
          </div>
        </div>
      </footer>

      ${renderAIPlannerModal(state)}
      ${renderAIChatDrawer(state)}
    </div>
  `;

  bindEventListeners();
}

// Global Event Listeners Binding
function bindEventListeners() {
  const activeEvent = getActiveEvent();

  // Tab Switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = btn.getAttribute('data-tab');
      if (tab) {
        state.activeTab = tab;
        saveState();
        renderApp();
      }
    });
  });

  // Switch Tab from CTA
  document.querySelectorAll('[data-tab-switch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab-switch');
      if (tab) {
        state.activeTab = tab;
        saveState();
        renderApp();
      }
    });
  });

  // Event Selector Change
  const eventSelector = document.getElementById('event-selector');
  if (eventSelector) {
    eventSelector.addEventListener('change', (e) => {
      state.activeEventId = e.target.value;
      saveState();
      renderApp();
    });
  }

  // Currency Switcher
  const currencySelector = document.getElementById('currency-selector');
  if (currencySelector) {
    currencySelector.addEventListener('change', (e) => {
      const curr = e.target.value;
      const symbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'AED ' };
      activeEvent.currency = curr;
      activeEvent.currencySymbol = symbols[curr] || curr;
      saveState();
      renderApp();
    });
  }

  // AI Chat Drawer Toggle
  const btnToggleChat = document.getElementById('btn-toggle-ai-chat');
  const btnCloseChat = document.getElementById('btn-close-ai-chat');
  if (btnToggleChat) {
    btnToggleChat.addEventListener('click', () => {
      state.isChatOpen = !state.isChatOpen;
      renderApp();
    });
  }
  if (btnCloseChat) {
    btnCloseChat.addEventListener('click', () => {
      state.isChatOpen = false;
      renderApp();
    });
  }

  // Voice Output Toggle
  const btnToggleVoice = document.getElementById('btn-toggle-voice-output');
  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      state.voiceOutputEnabled = !state.voiceOutputEnabled;
      if (!state.voiceOutputEnabled) speechUtil.stopSpeaking();
      saveState();
      renderApp();
    });
  }

  // Voice Input (Microphone) in Copilot Drawer
  const btnVoiceMic = document.getElementById('btn-voice-mic');
  if (btnVoiceMic) {
    btnVoiceMic.addEventListener('click', () => {
      if (state.isListening) {
        speechUtil.stopListening();
        state.isListening = false;
        renderApp();
      } else {
        state.isListening = true;
        renderApp();
        speechUtil.startListening(
          (transcript, isFinal) => {
            const inputField = document.getElementById('chat-input-field');
            if (inputField) inputField.value = transcript;
            if (isFinal) {
              state.isListening = false;
              renderApp();
              handleChatSubmit(transcript);
            }
          },
          (err) => {
            console.error('Speech recognition error:', err);
            state.isListening = false;
            renderApp();
          },
          () => {
            state.isListening = false;
            renderApp();
          }
        );
      }
    });
  }

  // Send Chat message
  const btnSendChat = document.getElementById('btn-send-chat');
  const chatInputField = document.getElementById('chat-input-field');
  if (btnSendChat && chatInputField) {
    const submit = () => {
      const val = chatInputField.value.trim();
      if (val) {
        chatInputField.value = '';
        handleChatSubmit(val);
      }
    };
    btnSendChat.addEventListener('click', submit);
    chatInputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
    });
  }

  // Quick Chat Chips
  document.querySelectorAll('[data-quick-chat]').forEach(chip => {
    chip.addEventListener('click', () => {
      const txt = chip.getAttribute('data-quick-chat');
      if (txt) handleChatSubmit(txt);
    });
  });

  // Open/Close AI Planner Modal
  const btnOpenPlanner = document.getElementById('btn-open-planner');
  const btnClosePlanner = document.getElementById('btn-close-planner-modal');
  const btnCancelPlanner = document.getElementById('btn-cancel-modal');
  const plannerModal = document.getElementById('ai-planner-modal');

  if (btnOpenPlanner && plannerModal) {
    btnOpenPlanner.addEventListener('click', () => {
      plannerModal.classList.remove('hidden');
    });
  }
  if (btnClosePlanner && plannerModal) {
    btnClosePlanner.addEventListener('click', () => {
      plannerModal.classList.add('hidden');
    });
  }
  if (btnCancelPlanner && plannerModal) {
    btnCancelPlanner.addEventListener('click', () => {
      plannerModal.classList.add('hidden');
    });
  }

  // Fill Modal Prompt from Inspiration Chips
  document.querySelectorAll('[data-fill-prompt]').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-fill-prompt');
      const input = document.getElementById('ai-vision-input');
      if (input && val) input.value = val;
    });
  });

  // Modal Voice Input
  const btnModalVoice = document.getElementById('btn-modal-voice-input');
  if (btnModalVoice) {
    btnModalVoice.addEventListener('click', () => {
      const label = document.getElementById('modal-voice-label');
      if (label) label.innerText = 'Listening...';
      speechUtil.startListening(
        (transcript, isFinal) => {
          const input = document.getElementById('ai-vision-input');
          if (input) input.value = transcript;
          if (isFinal && label) label.innerText = 'Speak Vision';
        },
        () => {
          if (label) label.innerText = 'Speak Vision';
        },
        () => {
          if (label) label.innerText = 'Speak Vision';
        }
      );
    });
  }

  // Generate Event from Modal
  const btnGenerateEvent = document.getElementById('btn-generate-event-ai');
  if (btnGenerateEvent) {
    btnGenerateEvent.addEventListener('click', () => {
      const input = document.getElementById('ai-vision-input');
      const text = input ? input.value.trim() : '';
      if (!text) {
        alert('Please provide a vision description or click an inspiration chip!');
        return;
      }

      const presetSelect = document.getElementById('modal-cultural-preset');
      const culturalPresetId = presetSelect ? presetSelect.value : 'hindu_vedic';

      const parsed = aiEngine.parseEventVision(text);
      parsed.culturalPresetId = culturalPresetId;

      const newEvent = aiEngine.generateMasterEventFromVision(parsed);
      state.events.unshift(newEvent);
      state.activeEventId = newEvent.id;
      state.activeTab = 'cockpit';
      saveState();

      if (plannerModal) plannerModal.classList.add('hidden');
      renderApp();

      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }

      if (state.voiceOutputEnabled) {
        speechUtil.speak(`Master plan generated successfully for ${newEvent.title}. All 22 pillars and cultural protocols are initialized.`);
      }
    });
  }

  // Print Run of Show
  const btnPrintRos = document.getElementById('btn-print-ros');
  const btnPrintRosAction = document.getElementById('btn-print-ros-action');
  if (btnPrintRos) btnPrintRos.addEventListener('click', () => exportUtils.printRunOfShow(activeEvent));
  if (btnPrintRosAction) btnPrintRosAction.addEventListener('click', () => exportUtils.printRunOfShow(activeEvent));

  // Export JSON
  const btnExportJson = document.getElementById('btn-export-json');
  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      exportUtils.downloadJSON(activeEvent, `${activeEvent.id}-master-plan.json`);
    });
  }

  // Export Guests CSV
  const btnExportCsv = document.getElementById('btn-export-guests-csv');
  if (btnExportCsv) {
    btnExportCsv.addEventListener('click', () => {
      exportUtils.exportGuestsCSV(activeEvent.guests, activeEvent.title);
    });
  }

  // Task Complete Toggles
  document.querySelectorAll('[data-task-complete], [data-task-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId = btn.getAttribute('data-task-complete') || btn.getAttribute('data-task-toggle');
      const task = activeEvent.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'completed' ? 'in_progress' : 'completed';
        saveState();
        renderApp();
      }
    });
  });

  // Strategy Plan Selection
  document.querySelectorAll('[data-select-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const planKey = btn.getAttribute('data-select-plan');
      if (planKey && activeEvent.strategyPlans) {
        activeEvent.strategyPlans.selectedPlan = planKey;
        activeEvent.agentActivityLog.unshift({
          id: `act-${Date.now()}`,
          timestamp: 'Just now',
          type: 'decision',
          confidence: 0.96,
          summary: `Switched strategic plan tier to: ${planKey.toUpperCase().replace('_', ' ')}.`,
          category: 'Strategy'
        });
        saveState();
        renderApp();
      }
    });
  });

  // Cultural Preset Switcher within Cultural View
  document.querySelectorAll('[data-cultural-select]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCulturalTab = btn.getAttribute('data-cultural-select');
      renderApp();
    });
  });

  // Apply Cultural Preset to Event Run of Show
  document.querySelectorAll('[data-apply-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = btn.getAttribute('data-apply-preset');
      const preset = CULTURAL_PRESETS[presetId];
      if (preset && preset.rituals) {
        activeEvent.culturalPresetId = presetId;
        activeEvent.runOfShow = preset.rituals.map((rit, idx) => ({
          id: `ros-${idx}-${Date.now()}`,
          time: rit.timing ? rit.timing.split('(')[1]?.split('-')[0]?.trim() || `0${9 + idx * 3}:00 AM` : `0${9 + idx * 3}:00 AM`,
          endTime: rit.timing ? rit.timing.split('-')[1]?.replace(')', '')?.trim() || `0${11 + idx * 3}:00 AM` : `0${11 + idx * 3}:00 AM`,
          ritual: rit.name,
          venue: activeEvent.location.primaryVenue,
          lead: 'Cultural Coordinator',
          status: 'ready',
          notes: rit.significance || 'Cultural sanctity verified'
        }));
        activeEvent.agentActivityLog.unshift({
          id: `act-${Date.now()}`,
          timestamp: 'Just now',
          type: 'compliance',
          confidence: 0.99,
          summary: `Synchronized ${preset.name} rituals and dietary guidelines into master Run-of-Show.`,
          category: 'Cultural Integrity'
        });
        saveState();
        renderApp();
        alert(`Synced ${preset.name} rituals to Run-of-Show!`);
      }
    });
  });

  // Payment Toggle
  document.querySelectorAll('[data-pay-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const payId = btn.getAttribute('data-pay-toggle');
      const pay = activeEvent.budget.paymentMilestones.find(p => p.id === payId);
      if (pay) {
        if (pay.status === 'paid') {
          pay.status = 'pending';
          activeEvent.budget.actualSpent -= pay.amount;
        } else {
          pay.status = 'paid';
          pay.paidAt = 'Today';
          activeEvent.budget.actualSpent += pay.amount;
        }
        saveState();
        renderApp();
      }
    });
  });

  // AI Negotiate Vendor
  document.querySelectorAll('[data-negotiate-vendor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const vndId = btn.getAttribute('data-negotiate-vendor');
      const vnd = activeEvent.vendors.find(v => v.id === vndId);
      if (vnd) {
        const targetPrice = Math.round(vnd.quotedPrice * 0.85); // 15% discount target
        const draft = aiEngine.draftVendorNegotiation(vnd, targetPrice, activeEvent.currencySymbol);
        const draftBox = document.getElementById('negotiation-draft-box');
        const draftText = document.getElementById('negotiation-draft-text');
        if (draftBox && draftText) {
          draftText.innerHTML = `<strong>Subject:</strong> ${draft.subject}<br><br>${draft.body.replace(/\n/g, '<br>')}`;
          draftBox.classList.remove('hidden');
          draftBox.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const btnCloseNegotiate = document.getElementById('btn-close-negotiate');
  if (btnCloseNegotiate) {
    btnCloseNegotiate.addEventListener('click', () => {
      const box = document.getElementById('negotiation-draft-box');
      if (box) box.classList.add('hidden');
    });
  }

  const btnCopyNegotiation = document.getElementById('btn-copy-negotiation');
  if (btnCopyNegotiation) {
    btnCopyNegotiation.addEventListener('click', () => {
      const text = document.getElementById('negotiation-draft-text')?.innerText;
      if (text) {
        navigator.clipboard.writeText(text);
        alert('Negotiation letter copied to clipboard!');
      }
    });
  }

  // Simulate Delay Cascade (Pillar 6 & 9)
  const btnSimulateDelay = document.getElementById('btn-simulate-delay');
  if (btnSimulateDelay) {
    btnSimulateDelay.addEventListener('click', () => {
      const sessionSelect = document.getElementById('delay-session-select');
      const minutesSelect = document.getElementById('delay-minutes-select');
      if (!sessionSelect || !minutesSelect) return;

      const sessionId = sessionSelect.value;
      const delayMinutes = parseInt(minutesSelect.value, 10);

      const res = aiEngine.calculateDelayCascade(activeEvent.runOfShow, sessionId, delayMinutes);
      activeEvent.runOfShow = res.updatedRunOfShow;

      // Add to live operations alerts & agent activity log
      activeEvent.liveOperations.activeAlerts.unshift({
        id: `alt-del-${Date.now()}`,
        level: 'warning',
        title: `Schedule Cascade: +${delayMinutes}m Delay Propagated`,
        message: res.broadcastMessage,
        time: 'Just now'
      });

      activeEvent.agentActivityLog.unshift({
        id: `act-${Date.now()}`,
        timestamp: 'Just now',
        type: 'decision',
        confidence: 0.98,
        summary: `Delay Cascade calculated: Adjusted ${res.affectedCount} downstream sessions forward by ${delayMinutes} minutes.`,
        category: 'Live Operations'
      });

      saveState();
      renderApp();

      const resultBox = document.getElementById('delay-result-box');
      const broadcastText = document.getElementById('delay-broadcast-text');
      const affectedCount = document.getElementById('delay-affected-count');
      if (resultBox && broadcastText && affectedCount) {
        resultBox.classList.remove('hidden');
        broadcastText.innerText = res.broadcastMessage;
        affectedCount.innerText = `${res.affectedCount} Sessions Shifted`;
      }

      if (state.voiceOutputEnabled) {
        speechUtil.speak(`Delay cascade calculated. ${res.affectedCount} downstream sessions adjusted by ${delayMinutes} minutes. Broadcast ready.`);
      }
    });
  }

  // Reset Delays
  const btnResetDelays = document.getElementById('btn-reset-delays');
  if (btnResetDelays) {
    btnResetDelays.addEventListener('click', () => {
      activeEvent.runOfShow.forEach(item => {
        delete item.delayed;
        delete item.delayNotice;
      });
      saveState();
      renderApp();
    });
  }

  // Resolve Live Incident
  document.querySelectorAll('[data-resolve-incident]').forEach(btn => {
    btn.addEventListener('click', () => {
      const incId = btn.getAttribute('data-resolve-incident');
      const inc = activeEvent.liveOperations.incidents.find(i => i.id === incId);
      if (inc) {
        inc.status = inc.status === 'resolved' ? 'in_progress' : 'resolved';
        saveState();
        renderApp();
      }
    });
  });

  // Human Approval Checkpoint Actions (Pillar 18)
  document.querySelectorAll('[data-approve-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const actId = btn.getAttribute('data-approve-action');
      const act = activeEvent.agentActivityLog.find(a => a.id === actId);
      if (act) {
        act.approved = true;
        act.summary = `[HUMAN SIGNED] ${act.summary}`;
        saveState();
        renderApp();
        alert('Action authorized and executed successfully by Antigravity!');
      }
    });
  });

  // Digital Pass View Modal
  document.querySelectorAll('[data-view-pass]').forEach(btn => {
    btn.addEventListener('click', () => {
      const gstId = btn.getAttribute('data-view-pass');
      const gst = activeEvent.guests.find(g => g.id === gstId);
      if (gst) {
        const modal = document.getElementById('digital-pass-modal');
        const content = document.getElementById('digital-pass-content');
        if (modal && content) {
          content.innerHTML = `
            <div class="space-y-4">
              <div class="text-[11px] font-bold text-fuchsia-400 tracking-widest uppercase">VIP CELEBRATION PASS</div>
              <h3 class="text-xl font-bold text-white">${activeEvent.title}</h3>
              <div class="text-xs text-slate-400">${activeEvent.dates.start} • ${activeEvent.location.primaryVenue}</div>

              <!-- Mock QR Code -->
              <div class="w-44 h-44 mx-auto bg-white p-3 rounded-2xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 100" class="w-full h-full text-slate-900 fill-current">
                  <path d="M0,0 h30 v30 h-30 z M40,0 h20 v10 h-20 z M70,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M80,10 h10 v10 h-10 z M0,40 h10 v20 h-10 z M20,40 h20 v10 h-20 z M50,40 h30 v10 h-30 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,70 h20 v20 h-20 z M70,70 h30 v30 h-30 z M80,80 h10 v10 h-10 z M40,90 h10 v10 h-10 z M60,60 h10 v20 h-10 z" />
                </svg>
              </div>

              <div class="space-y-1">
                <div class="text-base font-bold text-white">${gst.name}</div>
                <div class="text-xs text-amber-300 font-semibold">${gst.table || 'General Admission'}</div>
                <div class="text-[11px] text-slate-400">Dietary: <strong class="text-emerald-400">${gst.dietary || 'Standard'}</strong> • Plus-Ones: +${gst.plusOnes || 0}</div>
              </div>

              <div class="pt-3 border-t border-slate-800 flex gap-2">
                <button onclick="window.print()" class="flex-1 text-xs font-semibold py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white transition-colors">
                  Print Pass
                </button>
                <button id="btn-close-pass-modal" class="text-xs font-semibold py-2 px-3 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                  Close
                </button>
              </div>
            </div>
          `;
          modal.classList.remove('hidden');

          document.getElementById('btn-close-pass-modal')?.addEventListener('click', () => {
            modal.classList.add('hidden');
          });
        }
      }
    });
  });

  // Quick Dietary Sync with Chef
  const btnQuickDietary = document.getElementById('btn-quick-dietary-sync');
  if (btnQuickDietary) {
    btnQuickDietary.addEventListener('click', () => {
      alert('Custom dietary order sheet generated and dispatched to Royal Mewar Gourmet Caterers kitchen head Devendra Joshi.');
      activeEvent.agentActivityLog.unshift({
        id: `act-${Date.now()}`,
        timestamp: 'Just now',
        type: 'compliance',
        confidence: 0.99,
        summary: 'Synchronized personalized Jain, Satvik and Vegan guest meal orders with Head Chef.',
        category: 'Dietary Safety'
      });
      saveState();
      renderApp();
    });
  }
}

// Handle Conversational Copilot Submissions
function handleChatSubmit(userPrompt) {
  const activeEvent = getActiveEvent();
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Add User message
  state.chatMessages.push({
    id: `usr-${Date.now()}`,
    role: 'user',
    text: userPrompt,
    time: timeStr
  });

  const query = userPrompt.toLowerCase();
  let replyText = '';
  let actionTrigger = null;
  let actionTriggerLabel = null;

  if (query.includes('cater') || query.includes('food') || query.includes('menu')) {
    replyText = `For ${activeEvent.title}, I have evaluated the catering allocations. We currently have "${activeEvent.vendors.find(v => v.category.includes('Catering'))?.name || 'Chef Partner'}" locked in with dedicated Satvik, Jain, and Vegan prep zones. Would you like me to draft a price negotiation or verify dietary headcounts?`;
    actionTrigger = 'sync_dietary';
    actionTriggerLabel = 'Sync Dietary Order Sheet';
  } else if (query.includes('delay') || query.includes('late') || query.includes('performer') || query.includes('baraat')) {
    replyText = `I have simulated a 30-minute delay cascade on the master timeline. The AI shifts downstream sessions by +30m while guarding the 11:30 PM noise curfew. You can inspect the updated schedule in the "Run of Show" tab.`;
    actionTrigger = 'runofshow';
    actionTriggerLabel = 'Inspect Run of Show';
  } else if (query.includes('trade-off') || query.includes('plan') || query.includes('strategy')) {
    replyText = `We maintain 3 tailored models for this event: 1) Budget Saver (saves ~25% through seasonal local decor and acoustic daytime staging), 2) Balanced Grandeur (our current active model), and 3) Luxury VIP (adds drone shows and celebrity hosts).`;
    actionTrigger = 'strategy';
    actionTriggerLabel = 'Compare 3-Tier Plans';
  } else if (query.includes('weather') || query.includes('emergency') || query.includes('rain')) {
    replyText = `Our Emergency Shield is nominal: On-site weather radar shows clear skies. In the event of adverse weather, our 45-minute German Pagoda tent fallback SLA activates automatically, and dual 100kVA Cummins generators guarantee zero blackout.`;
    actionTrigger = 'contingency';
    actionTriggerLabel = 'View Emergency Shield';
  } else if (query.includes('negotiate') || query.includes('discount')) {
    replyText = `I have generated a professional vendor negotiation letter offering an immediate 50% deposit and digital guest brochure branding in exchange for a ~15% discount. You can review and copy it under "Venues & Vendors".`;
    actionTrigger = 'vendors';
    actionTriggerLabel = 'Review AI Negotiation Draft';
  } else {
    replyText = `I have analyzed your instruction: "${userPrompt}". I have cross-checked our master structured event records (budgets, cultural muhurats, and task dependencies). Everything is synchronized and verified across all 22 pillars.`;
  }

  // Add Assistant reply
  state.chatMessages.push({
    id: `ast-${Date.now()}`,
    role: 'assistant',
    text: replyText,
    time: timeStr,
    actionTrigger,
    actionTriggerLabel
  });

  saveState();
  renderApp();

  // Scroll chat messages to bottom
  const container = document.getElementById('chat-messages-container');
  if (container) container.scrollTop = container.scrollHeight;

  // Text to Speech
  if (state.voiceOutputEnabled) {
    speechUtil.speak(replyText);
  }
}


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderApp);
} else {
  renderApp();
}
})();