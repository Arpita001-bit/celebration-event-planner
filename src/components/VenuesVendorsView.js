import { aiEngine } from '../utils/aiEngine.js';
import { ICONS } from '../utils/svgIcons.js';

// Venue & Vendor Management View (No emojis, editorial style)
export function renderVenuesVendorsView(event, state) {
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
