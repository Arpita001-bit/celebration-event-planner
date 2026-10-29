import { exportUtils } from '../utils/exportUtils.js';
import { ICONS } from '../utils/svgIcons.js';

// Guest & Attendee Management View (No emojis, editorial style)
export function renderGuestsRsvpView(event, state) {
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
