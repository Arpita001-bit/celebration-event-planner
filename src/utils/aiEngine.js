import { CULTURAL_PRESETS } from '../data/culturalPresets.js';

// GenAI Reasoning, Planning, Delay Cascades, and Negotiation Engine
export const aiEngine = {
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
