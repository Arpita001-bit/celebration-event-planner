// Comprehensive Cultural and Ritual Presets & Guidelines
export const CULTURAL_PRESETS = {
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
