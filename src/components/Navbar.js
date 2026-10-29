import { ICONS } from '../utils/svgIcons.js';

// Refined Luxury Atelier Navigation Bar (No emojis, subtle elegance, generous breathing room)
export function renderNavbar(state) {
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
