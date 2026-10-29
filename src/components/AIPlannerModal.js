import { CULTURAL_PRESETS } from '../data/culturalPresets.js';
import { ICONS } from '../utils/svgIcons.js';

// AI Event Planner Wizard Modal (No emojis, editorial style)
export function renderAIPlannerModal(state) {
  return `
    <div id="ai-planner-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div class="bg-[#111215] border border-neutral-800 rounded-2xl max-w-2xl w-full p-8 sm:p-10 shadow-2xl relative my-8 space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between pb-6 border-b border-neutral-800">
          <div class="space-y-1">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.sparkles}
              <span>Event Architect</span>
            </div>
            <h2 class="text-2xl font-serif text-neutral-100 font-normal">Curate a New Celebration</h2>
            <p class="text-xs text-neutral-400 font-sans">Articulate your vision in plain language — the atelier coordinates the full 22-pillar master plan.</p>
          </div>
          <button id="btn-close-planner-modal" class="text-neutral-500 hover:text-white text-sm font-mono p-2">
            Close
          </button>
        </div>

        <!-- Vision Prompt -->
        <div class="space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="block text-xs font-medium text-neutral-300 uppercase tracking-wider">Vision Narrative:</label>
              <button id="btn-modal-voice-input" class="text-xs text-[#c5a880] hover:text-[#dfc8a7] flex items-center gap-1.5 transition-colors font-sans">
                <span id="modal-voice-icon">${ICONS.mic}</span>
                <span id="modal-voice-label">Speak Narrative</span>
              </button>
            </div>
            <textarea id="ai-vision-input" rows="4" placeholder="e.g. A college tech and cultural fest that students will remember, with a strict budget of 4.5 Lakhs for 600 attendees..." class="w-full bg-neutral-950 text-xs sm:text-sm text-neutral-100 border border-neutral-800 rounded-xl p-4 focus:outline-none focus:border-[#c5a880] placeholder-neutral-600 leading-relaxed font-sans"></textarea>
          </div>

          <!-- Inspiration Templates -->
          <div class="space-y-2">
            <div class="text-[10px] uppercase font-semibold text-neutral-500 tracking-wider">Inspiration Templates:</div>
            <div class="space-y-2">
              ${[
                'College fest that students will remember with a limited budget of ₹4.5L for 600 attendees',
                'Royal 3-day destination wedding in Udaipur with Haldi, Sangeet & Vedic Pheras under ₹28L',
                'Milestone 50th Birthday Party at an organic vineyard for 80 guests with live jazz',
                'Grand Nikah and Walima banquet for 450 guests with 100% Halal catering in Hyderabad'
              ].map(prompt => `
                <button data-fill-prompt="${prompt}" class="prompt-chip w-full text-left text-xs p-3 rounded-lg bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 transition-colors truncate font-sans">
                  ${prompt}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Cultural Framework -->
          <div class="space-y-2 pt-2">
            <label class="block text-xs font-medium text-neutral-300 uppercase tracking-wider">Cultural & Ritual Framework:</label>
            <select id="modal-cultural-preset" class="w-full bg-neutral-900 text-xs text-neutral-200 border border-neutral-800 rounded-lg p-3 focus:outline-none focus:border-[#c5a880]">
              ${Object.keys(CULTURAL_PRESETS).map(k => `
                <option value="${k}">${CULTURAL_PRESETS[k].name} — ${CULTURAL_PRESETS[k].description.slice(0, 60)}...</option>
              `).join('')}
            </select>
          </div>

          <!-- Actions -->
          <div class="pt-6 border-t border-neutral-800 flex items-center justify-end gap-3">
            <button id="btn-cancel-modal" class="text-xs font-medium px-4 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 transition-colors">
              Cancel
            </button>
            <button id="btn-generate-event-ai" class="text-xs font-medium px-5 py-2.5 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors flex items-center gap-2">
              ${ICONS.sparkles}
              <span>Synthesize Master Plan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
