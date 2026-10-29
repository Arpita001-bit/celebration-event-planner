// Master initial events pre-configured with full operational data
export const INITIAL_EVENTS = [
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
