import { ICONS } from '../utils/svgIcons.js';

// Autonomous Agent Activity Stream, Verification & Human Gate (No emojis, editorial style)
export function renderAgentActivityView(event, state) {
  const logs = event.agentActivityLog || [];
  const pendingApprovals = logs.filter(l => l.type === 'action_required' && !l.approved);

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.bot}
              <span>Autonomous Execution & Audit</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Autonomous Activity & Governance Trail
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Autonomous reasoning logs, confidence scoring, fact-vs-assumption validation, and Human-in-the-Loop authorization checkpoints.
            </p>
          </div>

          <span class="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 self-start md:self-auto shrink-0">
            Audit State: <strong class="text-[#739678]">Immutable</strong>
          </span>
        </div>
      </div>

      <!-- Human-in-the-Loop Approval Gate -->
      ${pendingApprovals.length > 0 ? `
        <div class="rounded-2xl bg-neutral-900 border border-[#b88a44] p-8 shadow-md space-y-6">
          <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                ${ICONS.shield}
                <h2 class="text-base font-serif font-normal text-neutral-100">Human Authorization Checkpoint (${pendingApprovals.length})</h2>
              </div>
              <p class="text-xs text-neutral-400">
                In compliance with Pillar 22: The system pauses and requires explicit human consent prior to high-stakes disbursements or vendor cancellations.
              </p>
            </div>
            <span class="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-neutral-950 text-[#b88a44] border border-neutral-800">
              Pending Authorization
            </span>
          </div>

          <div class="space-y-4">
            ${pendingApprovals.map(appr => `
              <div class="p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="space-y-1">
                  <div class="flex items-center gap-3">
                    <span class="text-xs font-mono uppercase text-[#b88a44] font-semibold">${appr.category}</span>
                    <span class="text-[10px] font-mono text-neutral-500">• ${appr.timestamp}</span>
                    <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300">Confidence: ${Math.round(appr.confidence * 100)}%</span>
                  </div>
                  <div class="text-sm font-medium text-neutral-100 font-sans">${appr.summary}</div>
                </div>

                <div class="flex items-center gap-3 self-end sm:self-auto shrink-0">
                  <button data-approve-action="${appr.id}" class="text-xs font-medium px-4 py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors">
                    Authorize Action
                  </button>
                  <button data-reject-action="${appr.id}" class="text-xs font-medium px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Agent Activity Stream -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Audited Decision Trail</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Continuous verification log with assumption-vs-fact validation</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">${logs.length} Audited Events</span>
        </div>

        <div class="space-y-3">
          ${logs.map(log => {
            const isApproved = log.approved;
            const isActionReq = log.type === 'action_required';

            return `
              <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start justify-between gap-4">
                <div class="flex items-start gap-4">
                  <span class="mt-0.5 text-neutral-400 shrink-0">${ICONS.sparkles}</span>
                  <div class="space-y-1">
                    <div class="flex flex-wrap items-center gap-3">
                      <span class="text-xs font-mono text-neutral-300 font-medium">${log.category}</span>
                      <span class="text-[10px] font-mono text-neutral-500">• ${log.timestamp}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-neutral-400">
                        Confidence: ${Math.round(log.confidence * 100)}%
                      </span>
                      ${isActionReq && isApproved ? `
                        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-950 text-[#739678] border border-neutral-800">
                          Human Authorized
                        </span>
                      ` : ''}
                    </div>
                    <p class="text-xs text-neutral-300 leading-relaxed font-sans">${log.summary}</p>
                  </div>
                </div>

                <div class="shrink-0 text-right">
                  <span class="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-neutral-950 text-neutral-400 border border-neutral-800">
                    ${log.type.replace('_', ' ')}
                  </span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
