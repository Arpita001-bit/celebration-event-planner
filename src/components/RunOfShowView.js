import { exportUtils } from '../utils/exportUtils.js';
import { ICONS } from '../utils/svgIcons.js';

// Minute-by-Minute Run of Show & Delay Cascade Simulator (No emojis, editorial style)
export function renderRunOfShowView(event, state) {
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
