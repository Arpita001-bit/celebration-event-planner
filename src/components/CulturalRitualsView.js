import { CULTURAL_PRESETS } from '../data/culturalPresets.js';
import { ICONS } from '../utils/svgIcons.js';

// Cultural and Sacred Ritual Intelligence Component (No emojis, editorial elegance)
export function renderCulturalRitualsView(event, state) {
  const selectedPresetId = state.selectedCulturalTab || event.culturalPresetId || 'hindu_vedic';
  const preset = CULTURAL_PRESETS[selectedPresetId] || CULTURAL_PRESETS.hindu_vedic;

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.flame}
              <span>Sacred Protocol & Cultural Intelligence</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Tradition & Sacred Ceremonies
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
              Authentic ritual oversight across major global traditions. Enforces astrological muhurat windows, sacred samagri inventories, and dietary isolation.
            </p>
          </div>

          <!-- Cultural Switcher Tabs -->
          <div class="flex items-center gap-2 flex-wrap">
            ${Object.keys(CULTURAL_PRESETS).map(key => {
              const p = CULTURAL_PRESETS[key];
              const isActive = p.id === selectedPresetId;
              return `
                <button data-cultural-select="${p.id}" class="text-xs px-3.5 py-2 rounded-lg font-medium transition-all ${
                  isActive 
                    ? 'bg-neutral-100 text-neutral-950 font-semibold shadow-sm' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800'
                }">
                  ${p.name.split(' ')[0]}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Tradition Details -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Ceremonies Stream -->
        <div class="lg:col-span-2 space-y-6">
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8">
            <div class="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <h2 class="text-lg font-serif font-normal text-neutral-100">${preset.name}</h2>
                <p class="text-xs text-neutral-400 mt-0.5">${preset.description}</p>
              </div>
              <span class="text-xs font-mono text-neutral-400">${(preset.rituals || []).length} Prescribed Ceremonies</span>
            </div>

            <div class="space-y-4">
              ${(preset.rituals || []).map((rit, idx) => `
                <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all space-y-3">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="flex items-center gap-3">
                      <span class="w-6 h-6 rounded-md bg-neutral-800 border border-neutral-700/80 text-neutral-300 text-xs font-mono flex items-center justify-center shrink-0">
                        ${String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 class="text-base font-serif font-normal text-neutral-100">${rit.name}</h3>
                    </div>
                    <span class="text-xs font-mono text-neutral-400 px-3 py-1 rounded bg-neutral-950 border border-neutral-800 self-start sm:self-auto">
                      ${rit.timing}
                    </span>
                  </div>

                  <p class="text-xs text-neutral-300 leading-relaxed pl-9">
                    <strong class="text-neutral-400 font-medium">Significance:</strong> ${rit.significance}
                  </p>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-400 pl-9 pt-3 border-t border-neutral-800/80">
                    <div>
                      <strong class="text-neutral-300 font-medium">Prescribed Attire:</strong> ${rit.attire}
                    </div>
                    <div>
                      <strong class="text-neutral-300 font-medium">Dietary Protocol:</strong> ${rit.dietary}
                    </div>
                  </div>

                  ${rit.contingency ? `
                    <div class="ml-9 p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-neutral-300 leading-relaxed">
                      <strong class="text-[#c5a880] uppercase tracking-wider text-[10px] block mb-1">Contingency Directive</strong>
                      ${rit.contingency}
                    </div>
                  ` : ''}

                  <!-- Sacred Items Checklist -->
                  <div class="ml-9 pt-2">
                    <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider mb-2">Mandatory Sacred Items:</div>
                    <div class="flex flex-wrap gap-2">
                      ${(rit.items || []).map(item => `
                        <span class="px-2.5 py-1 rounded bg-neutral-950 text-neutral-300 text-[11px] border border-neutral-800 flex items-center gap-1.5 font-sans">
                          <span class="text-[#739678]">${ICONS.check}</span>
                          <span>${item}</span>
                        </span>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Sidebar Directives -->
        <div class="space-y-6">
          <!-- Dietary Sanctity -->
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Dietary Sanctity & Segregation</span>
            </div>
            <div class="space-y-2.5">
              ${(preset.dietaryRules || []).map(rule => `
                <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
                  <span class="text-[#739678] mt-0.5 shrink-0">${ICONS.check}</span>
                  <span>${rule}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Auspicious Considerations -->
          <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 space-y-4">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.sparkles}
              <span>Auspicious Muhurat Protocols</span>
            </div>
            <div class="space-y-2.5">
              ${(preset.keyAuspiciousConsiderations || []).map(item => `
                <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-2.5">
                  <span class="text-[#c5a880] mt-0.5 shrink-0">${ICONS.chevronDown}</span>
                  <span>${item}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Synchronization CTA -->
          <div class="p-6 rounded-xl bg-neutral-900 border border-neutral-800 space-y-3">
            <div class="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Synchronize Protocol</div>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Inject these ceremony windows, ritual durations, and dietary rules directly into this celebration's active Run-of-Show.
            </p>
            <button data-apply-preset="${preset.id}" class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center justify-center gap-2">
              <span>Apply to Run of Show</span>
              ${ICONS.arrowRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
