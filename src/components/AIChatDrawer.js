import { ICONS } from '../utils/svgIcons.js';

// Conversational AI Copilot Drawer & Voice Assistant (No emojis, editorial style)
export function renderAIChatDrawer(state) {
  const messages = state.chatMessages || [];

  return `
    <!-- AI Assistant Sliding Drawer -->
    <div id="ai-chat-drawer" class="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] bg-[#0c0d0f]/95 backdrop-blur-xl border-l border-neutral-800 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${state.isChatOpen ? 'translate-x-0' : 'translate-x-full'}">
      <!-- Drawer Header -->
      <div class="h-20 px-6 border-b border-neutral-800 flex items-center justify-between gap-4 bg-[#090a0c]">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-700/80 flex items-center justify-center text-[#c5a880]">
            ${ICONS.bot}
          </div>
          <div>
            <div class="font-serif text-sm text-neutral-100 font-normal">Antigravity Copilot</div>
            <div class="text-[10px] text-neutral-400 font-sans tracking-wide">Continuous Event Operating System</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Voice Output Toggle -->
          <button id="btn-toggle-voice-output" class="text-xs p-2 rounded-lg ${state.voiceOutputEnabled ? 'bg-neutral-800 text-[#c5a880] border border-neutral-700' : 'bg-neutral-900 text-neutral-500 border border-neutral-800'} transition-colors" title="Toggle Speech Readout">
            ${ICONS.volume}
          </button>
          <button id="btn-close-ai-chat" class="text-neutral-400 hover:text-white text-xs font-mono p-2">
            Close
          </button>
        </div>
      </div>

      <!-- Quick Action Prompt Chips -->
      <div class="px-6 py-2.5 bg-[#090a0c]/60 border-b border-neutral-800/80 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs font-sans">
        ${[
          'Find a caterer under ₹1 Lakh',
          'What if performer is 30m late?',
          'Suggest Jain & Satvik menu',
          '3-tier plan trade-offs',
          'Check weather contingency'
        ].map(chip => `
          <button data-quick-chat="${chip}" class="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 border border-neutral-800 whitespace-nowrap transition-colors text-[11px]">
            ${chip}
          </button>
        `).join('')}
      </div>

      <!-- Messages Scroll Container -->
      <div id="chat-messages-container" class="flex-1 overflow-y-auto p-6 space-y-4 text-xs font-sans leading-relaxed">
        ${messages.map(msg => `
          <div class="flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}">
            <div class="max-w-[88%] rounded-xl p-4 ${
              msg.role === 'user' 
                ? 'bg-neutral-100 text-neutral-950 font-medium' 
                : 'bg-neutral-900 border border-neutral-800 text-neutral-200'
            }">
              ${msg.text}
              ${msg.actionTrigger ? `
                <div class="mt-3 pt-3 border-t border-neutral-800">
                  <button data-action-pill="${msg.actionTrigger}" class="text-xs font-medium text-[#c5a880] hover:text-white flex items-center gap-1.5">
                    <span>${msg.actionTriggerLabel || 'Proceed'}</span>
                    ${ICONS.arrowRight}
                  </button>
                </div>
              ` : ''}
            </div>
            <span class="text-[9px] font-mono text-neutral-500 mt-1 px-1">${msg.time || ''}</span>
          </div>
        `).join('')}
      </div>

      <!-- Input Bar -->
      <div class="p-4 border-t border-neutral-800 bg-[#090a0c]">
        <div class="flex items-center gap-2">
          <input type="text" id="chat-input-field" placeholder="Instruct, inquire, or speak..." class="flex-1 bg-neutral-900 text-xs text-neutral-100 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-[#c5a880] placeholder-neutral-500 font-sans">
          
          <!-- Mic -->
          <button id="btn-voice-mic" class="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-300 transition-colors ${state.isListening ? 'border-[#c5a880] text-[#c5a880] animate-pulse' : ''}" title="Voice Command">
            ${ICONS.mic}
          </button>

          <!-- Submit -->
          <button id="btn-send-chat" class="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-white text-neutral-950 flex items-center justify-center transition-colors">
            ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    </div>
  `;
}
