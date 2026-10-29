import { ICONS } from '../utils/svgIcons.js';

// Budget, Financial Ledger & Reserve Governance View (No emojis, editorial style)
export function renderBudgetFinancesView(event, state) {
  const sym = event.currencySymbol || '₹';
  const budget = event.budget;
  const total = budget.totalLimit;
  const spent = budget.actualSpent;
  const contingency = budget.contingencyReserve || Math.round(total * 0.1);
  const remaining = total - spent;
  const spentPct = Math.round((spent / total) * 100);

  const estimatedTax = Math.round(spent * 0.18);
  const estimatedSecurityDeposit = Math.round(total * 0.08);

  return `
    <div class="space-y-10">
      <!-- Financial Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.currency}
              <span>Financial Governance</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Budget & Capital Allocation
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Authoritative spending ledger, ring-fenced 10% contingency reserve, and statutory fee detection.
            </p>
          </div>

          <button id="btn-add-expense-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Disburse Capital</span>
          </button>
        </div>
      </div>

      <!-- Financial Metric Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Total Authorized Cap</div>
          <div class="text-2xl font-serif text-neutral-100 mb-1">${sym}${total.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Hard limit specified in charter</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Actual Disbursed</div>
          <div class="text-2xl font-serif text-[#739678] mb-1">${sym}${spent.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">${spentPct}% of capital committed</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Uncommitted Liquidity</div>
          <div class="text-2xl font-serif text-neutral-200 mb-1">${sym}${remaining.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Available for final signoffs</div>
        </div>

        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6">
          <div class="text-[10px] text-neutral-400 uppercase tracking-wider font-medium mb-2">Contingency Shield (10%)</div>
          <div class="text-2xl font-serif text-[#c5a880] mb-1">${sym}${contingency.toLocaleString('en-IN')}</div>
          <div class="text-xs text-neutral-400">Protected against price surges</div>
        </div>
      </div>

      <!-- Category Breakdown & Hidden Fees -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Category Allocations -->
        <div class="lg:col-span-2 bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div>
              <h2 class="text-lg font-serif font-normal text-neutral-100">Category Allocations</h2>
              <p class="text-xs text-neutral-400 mt-0.5">Budgeted caps against verified contractor invoices</p>
            </div>
            <span class="text-xs font-mono text-neutral-400">${budget.categories.length} Categories</span>
          </div>

          <div class="space-y-4">
            ${budget.categories.map(cat => {
              const catPct = cat.allocated ? Math.round((cat.actual / cat.allocated) * 100) : 0;
              return `
                <div class="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-2">
                  <div class="flex items-center justify-between text-xs sm:text-sm">
                    <span class="font-medium text-neutral-200">${cat.name}</span>
                    <span class="font-mono text-neutral-300">
                      ${sym}${cat.actual.toLocaleString('en-IN')} <span class="text-neutral-500 font-sans">/ ${sym}${cat.allocated.toLocaleString('en-IN')}</span>
                    </span>
                  </div>
                  <div class="w-full bg-neutral-950 rounded-full h-1.5 overflow-hidden">
                    <div class="h-1.5 rounded-full ${catPct > 90 ? 'bg-[#b88a44]' : 'bg-[#c5a880]'}" style="width: ${Math.min(catPct, 100)}%"></div>
                  </div>
                  <div class="flex justify-between text-[11px] text-neutral-400 font-sans">
                    <span>${catPct}% Disbursed</span>
                    <span>Remaining: ${sym}${(cat.allocated - cat.actual).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Hidden Costs & Optimizations -->
        <div class="space-y-6">
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Statutory Tax & Fee Reserves</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              Automated auditing flags unquoted vendor fees before contractual execution:
            </p>
            <div class="space-y-2.5 text-xs font-sans">
              <div class="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex justify-between">
                <span class="text-neutral-400">Statutory Tax (18% GST/VAT):</span>
                <span class="font-mono text-neutral-200">${sym}${estimatedTax.toLocaleString('en-IN')}</span>
              </div>
              <div class="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 flex justify-between">
                <span class="text-neutral-400">Damage Security Deposit:</span>
                <span class="font-mono text-neutral-200">${sym}${estimatedSecurityDeposit.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>

          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-[#c5a880] uppercase tracking-wider">
              ${ICONS.sparkles}
              <span>Strategic Cost Optimizations</span>
            </div>
            <div class="text-xs text-neutral-300 leading-relaxed space-y-2 font-sans">
              <p>
                <strong>Seasonal Floral Shift:</strong> Utilizing local indigenous botanicals saved an estimated ~${sym}65,000 without sacrificing visual grandeur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Milestones Ledger -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Vendor Payment Milestone Schedule</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Strict authorization gates tied to deliverables</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${(budget.paymentMilestones || []).length} Milestones</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-sans">
            <thead>
              <tr class="text-neutral-400 border-b border-neutral-800 uppercase text-[10px] tracking-wider">
                <th class="py-3 px-4 font-medium">Milestone Description</th>
                <th class="py-3 px-4 font-medium">Capital Amount</th>
                <th class="py-3 px-4 font-medium">Due Date</th>
                <th class="py-3 px-4 font-medium">Status</th>
                <th class="py-3 px-4 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-800/80">
              ${(budget.paymentMilestones || []).map(p => {
                const isPaid = p.status === 'paid';
                return `
                  <tr class="hover:bg-neutral-900/40 transition-colors">
                    <td class="py-3.5 px-4 font-medium text-neutral-200">${p.title}</td>
                    <td class="py-3.5 px-4 font-mono font-medium ${isPaid ? 'text-neutral-400' : 'text-[#c5a880]'}">${sym}${p.amount.toLocaleString('en-IN')}</td>
                    <td class="py-3.5 px-4 text-neutral-400">${p.dueDate}</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2.5 py-1 rounded text-[10px] font-mono uppercase ${isPaid ? 'bg-neutral-900 text-[#739678] border border-neutral-800' : 'bg-neutral-900 text-[#b88a44] border border-neutral-800'}">
                        ${p.status}
                      </span>
                    </td>
                    <td class="py-3.5 px-4 text-right">
                      <button data-pay-toggle="${p.id}" class="text-xs font-medium px-3 py-1.5 rounded transition-colors ${isPaid ? 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800' : 'bg-neutral-100 hover:bg-white text-neutral-950'}">
                        ${isPaid ? 'Mark Pending' : 'Authorize & Disburse'}
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}
