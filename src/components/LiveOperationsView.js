import { ICONS } from '../utils/svgIcons.js';

// Real-time Event-Day Operations Command Center (No emojis, editorial style)
export function renderLiveOperationsView(event, state) {
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
