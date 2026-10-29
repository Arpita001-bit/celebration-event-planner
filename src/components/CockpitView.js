import { ICONS } from '../utils/svgIcons.js';

// Executive Cockpit View (Spacious, Elegant, De-congested, No Emojis)
export function renderCockpitView(event, state) {
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
