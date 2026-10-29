import { ICONS } from '../utils/svgIcons.js';

// Strategy, Multi-Plan Tiers & Master Timeline View (Elegant, De-cluttered, No Emojis)
export function renderStrategyTimelineView(event, state) {
  const plans = event.strategyPlans?.plans || {};
  const currentPlan = event.strategyPlans?.selectedPlan || 'balanced';
  const sym = event.currencySymbol || '₹';

  const phases = [
    { id: 'concept', label: 'Phase 1: Concept & Approvals' },
    { id: 'sourcing', label: 'Phase 2: Sourcing & Contracts' },
    { id: 'execution', label: 'Phase 3: Event Day Execution' },
    { id: 'wrapup', label: 'Phase 4: Post-Event Wrap-up' }
  ];

  return `
    <div class="space-y-10">
      <!-- Strategy Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.calendar}
              <span>Master Execution Architecture</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Event Planning & Strategy Suite
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Phased milestone tracking, task dependencies, and 3-tier strategic scenario evaluations.
            </p>
          </div>

          <button id="btn-add-task-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2 self-start md:self-auto shrink-0">
            ${ICONS.plus}
            <span>Add Milestone</span>
          </button>
        </div>
      </div>

      <!-- 3 Strategic Execution Tiers -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Strategic Tier Models</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Evaluate capital allocation and guest experience trade-offs</p>
          </div>
          <span class="text-xs font-mono text-neutral-400 uppercase">Active: <strong class="text-neutral-100">${currentPlan}</strong></span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${[
            { key: 'budget_saver', name: plans.budget_saver?.name || 'Curated Heritage', cost: plans.budget_saver?.estimatedCost, tag: 'Value Focus' },
            { key: 'balanced', name: plans.balanced?.name || 'Signature Grandeur', cost: plans.balanced?.estimatedCost, tag: 'Recommended', isRecommended: true },
            { key: 'luxury_vip', name: plans.luxury_vip?.name || 'Imperial VIP Showcase', cost: plans.luxury_vip?.estimatedCost, tag: 'Bespoke Luxury' }
          ].map(tier => {
            const planData = plans[tier.key] || {};
            const isSelected = currentPlan === tier.key;

            return `
              <div class="rounded-xl border p-6 flex flex-col justify-between transition-all ${
                isSelected 
                  ? 'bg-neutral-900 border-[#c5a880]/80 shadow-md ring-1 ring-[#c5a880]/30' 
                  : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700'
              }">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-neutral-800 text-neutral-300">
                      ${tier.tag}
                    </span>
                    ${isSelected ? `<span class="text-[11px] text-[#c5a880] font-mono">Selected Model</span>` : ''}
                  </div>

                  <div>
                    <h3 class="text-base font-serif font-normal text-neutral-100 mb-1">${tier.name}</h3>
                    <div class="text-2xl font-serif text-[#c5a880]">
                      ${sym}${(tier.cost || 0).toLocaleString('en-IN')}
                    </div>
                  </div>

                  <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                    ${planData.description || 'Comprehensive execution model.'}
                  </p>

                  <div class="space-y-2 pt-2 border-t border-neutral-800/80">
                    <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Perks:</div>
                    ${(planData.perks || []).map(p => `
                      <div class="flex items-start gap-2 text-xs text-neutral-300">
                        <span class="text-[#739678] mt-0.5 shrink-0">${ICONS.check}</span>
                        <span>${p}</span>
                      </div>
                    `).join('')}
                  </div>

                  ${(planData.compromises || []).length > 0 ? `
                    <div class="space-y-2 pt-2 border-t border-neutral-800/80">
                      <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Trade-off Notes:</div>
                      ${planData.compromises.map(c => `
                        <div class="flex items-start gap-2 text-xs text-neutral-400">
                          <span class="text-[#b88a44] mt-0.5 shrink-0">${ICONS.alertTriangle}</span>
                          <span>${c}</span>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>

                <button data-select-plan="${tier.key}" class="w-full mt-6 text-xs font-medium py-2.5 rounded-lg transition-colors ${
                  isSelected 
                    ? 'bg-neutral-800 text-neutral-200 cursor-default' 
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800'
                }">
                  ${isSelected ? 'Active Model' : `Select ${tier.name.split(' ')[0]}`}
                </button>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Phased Master Tasks Timeline -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-8">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Chronological Phase Schedule</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Step-by-step accountability ledger with task dependencies</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${event.tasks.length} Tracked Tasks</span>
        </div>

        <div class="space-y-8">
          ${phases.map(phase => {
            const phaseTasks = event.tasks.filter(t => t.phase === phase.id);
            if (phaseTasks.length === 0) return '';

            return `
              <div class="space-y-3">
                <div class="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 pb-2 border-b border-neutral-800/80 flex items-center justify-between">
                  <span>${phase.label}</span>
                  <span class="font-mono text-neutral-500 font-normal">(${phaseTasks.length} Milestones)</span>
                </div>

                <div class="grid grid-cols-1 gap-3">
                  ${phaseTasks.map(t => {
                    const isCompleted = t.status === 'completed';

                    return `
                      <div class="p-4 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isCompleted 
                          ? 'bg-neutral-950/40 border-neutral-900 opacity-60' 
                          : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                      }">
                        <div class="flex items-start gap-3.5">
                          <button data-task-toggle="${t.id}" class="mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                            isCompleted 
                              ? 'bg-[#739678] border-[#739678] text-neutral-950' 
                              : 'border-neutral-700 bg-neutral-950 hover:border-neutral-500'
                          }">
                            ${isCompleted ? ICONS.check : ''}
                          </button>
                          <div class="space-y-1">
                            <div class="flex flex-wrap items-center gap-2">
                              <span class="text-sm font-medium ${isCompleted ? 'line-through text-neutral-500' : 'text-neutral-100'}">
                                ${t.title}
                              </span>
                              <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded ${
                                t.priority === 'critical' ? 'bg-neutral-900 text-[#b88a44] border border-neutral-800' :
                                'bg-neutral-900 text-neutral-400 border border-neutral-800'
                              }">
                                ${t.priority}
                              </span>
                            </div>
                            <div class="text-xs text-neutral-400 flex flex-wrap gap-4 font-sans">
                              <span>Assigned: <strong class="text-neutral-300">${t.assignedTo}</strong></span>
                              <span>Target: ${t.deadline}</span>
                            </div>
                          </div>
                        </div>

                        <div class="self-end sm:self-auto shrink-0">
                          <button data-task-toggle="${t.id}" class="text-xs font-medium px-3.5 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
                            ${isCompleted ? 'Reopen' : 'Mark Done'}
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
