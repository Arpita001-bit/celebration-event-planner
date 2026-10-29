import { ICONS } from '../utils/svgIcons.js';

// Post-Event Management, Wrap-Up & Audit View (No emojis, editorial style)
export function renderPostEventAuditView(event, state) {
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
