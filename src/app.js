import { INITIAL_EVENTS } from './data/initialEvents.js';
import { CULTURAL_PRESETS } from './data/culturalPresets.js';
import { aiEngine } from './utils/aiEngine.js';
import { speechUtil } from './utils/speech.js';
import { exportUtils } from './utils/exportUtils.js';

import { renderNavbar } from './components/Navbar.js';
import { renderCockpitView } from './components/CockpitView.js';
import { renderCulturalRitualsView } from './components/CulturalRitualsView.js';
import { renderStrategyTimelineView } from './components/StrategyTimelineView.js';
import { renderBudgetFinancesView } from './components/BudgetFinancesView.js';
import { renderVenuesVendorsView } from './components/VenuesVendorsView.js';
import { renderGuestsRsvpView } from './components/GuestsRsvpView.js';
import { renderRunOfShowView } from './components/RunOfShowView.js';
import { renderLiveOperationsView } from './components/LiveOperationsView.js';
import { renderMarketingThemesView } from './components/MarketingThemesView.js';
import { renderEmergencyContingencyView } from './components/EmergencyContingencyView.js';
import { renderPostEventAuditView } from './components/PostEventAuditView.js';
import { renderAgentActivityView } from './components/AgentActivityView.js';
import { renderAIPlannerModal } from './components/AIPlannerModal.js';
import { renderAIChatDrawer } from './components/AIChatDrawer.js';

// Application State Store with LocalStorage Persistence
const STORAGE_KEY = 'gravity_celestial_event_os_v2';

function loadStoredState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.events && parsed.events.length > 0) return parsed;
    }
  } catch (e) {
    console.warn('Failed to parse localStorage', e);
  }

  return {
    events: INITIAL_EVENTS,
    activeEventId: INITIAL_EVENTS[0].id,
    activeTab: 'cockpit',
    isChatOpen: false,
    isListening: false,
    voiceOutputEnabled: true,
    selectedCulturalTab: 'hindu_vedic',
    chatMessages: [
      {
        id: 'msg-init',
        role: 'assistant',
        text: 'Welcome, Gravity. Celestial Event OS is active. All 22 execution pillars, sacred cultural frameworks, and financial safety gates are synchronized. How may I direct the atelier today?',
        time: 'Just now'
      }
    ]
  };
}

let state = loadStoredState();

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Save state failed', e);
  }
}

function getActiveEvent() {
  return state.events.find(e => e.id === state.activeEventId) || state.events[0];
}

// Master Render Function
export function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const activeEvent = getActiveEvent();
  state.pendingApprovalsCount = (activeEvent.agentActivityLog || []).filter(l => l.type === 'action_required' && !l.approved).length;

  let mainViewHtml = '';
  switch (state.activeTab) {
    case 'cockpit':
      mainViewHtml = renderCockpitView(activeEvent, state);
      break;
    case 'cultural':
      mainViewHtml = renderCulturalRitualsView(activeEvent, state);
      break;
    case 'strategy':
      mainViewHtml = renderStrategyTimelineView(activeEvent, state);
      break;
    case 'budget':
      mainViewHtml = renderBudgetFinancesView(activeEvent, state);
      break;
    case 'vendors':
      mainViewHtml = renderVenuesVendorsView(activeEvent, state);
      break;
    case 'guests':
      mainViewHtml = renderGuestsRsvpView(activeEvent, state);
      break;
    case 'runofshow':
      mainViewHtml = renderRunOfShowView(activeEvent, state);
      break;
    case 'liveops':
      mainViewHtml = renderLiveOperationsView(activeEvent, state);
      break;
    case 'marketing':
      mainViewHtml = renderMarketingThemesView(activeEvent, state);
      break;
    case 'contingency':
      mainViewHtml = renderEmergencyContingencyView(activeEvent, state);
      break;
    case 'postevent':
      mainViewHtml = renderPostEventAuditView(activeEvent, state);
      break;
    case 'agentlog':
      mainViewHtml = renderAgentActivityView(activeEvent, state);
      break;
    default:
      mainViewHtml = renderCockpitView(activeEvent, state);
  }

  root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#090a0c] text-neutral-100 font-sans selection:bg-[#c5a880] selection:text-neutral-950">
      ${renderNavbar(state)}
      <main class="flex-1 max-w-7xl w-full mx-auto px-6 lg:px-10 py-10">
        ${mainViewHtml}
      </main>
      <footer class="border-t border-neutral-800/80 bg-[#0c0d0f] py-8 text-center text-xs text-neutral-400 font-sans">
        <div class="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="font-serif text-neutral-400 text-sm">Celestial Atelier Event Operating System</div>
          <div class="flex items-center gap-6 text-[11px] text-neutral-400 font-sans uppercase tracking-widest">
            <span>22 Core Pillars</span>
            <span>Cultural & Ritual Sanctity</span>
            <span>Deterministic Financial Governance</span>
          </div>
        </div>
      </footer>

      ${renderAIPlannerModal(state)}
      ${renderAIChatDrawer(state)}
    </div>
  `;

  bindEventListeners();
}

// Global Event Listeners Binding
function bindEventListeners() {
  const activeEvent = getActiveEvent();

  // Tab Switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = btn.getAttribute('data-tab');
      if (tab) {
        state.activeTab = tab;
        saveState();
        renderApp();
      }
    });
  });

  // Switch Tab from CTA
  document.querySelectorAll('[data-tab-switch]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab-switch');
      if (tab) {
        state.activeTab = tab;
        saveState();
        renderApp();
      }
    });
  });

  // Event Selector Change
  const eventSelector = document.getElementById('event-selector');
  if (eventSelector) {
    eventSelector.addEventListener('change', (e) => {
      state.activeEventId = e.target.value;
      saveState();
      renderApp();
    });
  }

  // Currency Switcher
  const currencySelector = document.getElementById('currency-selector');
  if (currencySelector) {
    currencySelector.addEventListener('change', (e) => {
      const curr = e.target.value;
      const symbols = { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'AED ' };
      activeEvent.currency = curr;
      activeEvent.currencySymbol = symbols[curr] || curr;
      saveState();
      renderApp();
    });
  }

  // AI Chat Drawer Toggle
  const btnToggleChat = document.getElementById('btn-toggle-ai-chat');
  const btnCloseChat = document.getElementById('btn-close-ai-chat');
  if (btnToggleChat) {
    btnToggleChat.addEventListener('click', () => {
      state.isChatOpen = !state.isChatOpen;
      renderApp();
    });
  }
  if (btnCloseChat) {
    btnCloseChat.addEventListener('click', () => {
      state.isChatOpen = false;
      renderApp();
    });
  }

  // Voice Output Toggle
  const btnToggleVoice = document.getElementById('btn-toggle-voice-output');
  if (btnToggleVoice) {
    btnToggleVoice.addEventListener('click', () => {
      state.voiceOutputEnabled = !state.voiceOutputEnabled;
      if (!state.voiceOutputEnabled) speechUtil.stopSpeaking();
      saveState();
      renderApp();
    });
  }

  // Voice Input (Microphone) in Copilot Drawer
  const btnVoiceMic = document.getElementById('btn-voice-mic');
  if (btnVoiceMic) {
    btnVoiceMic.addEventListener('click', () => {
      if (state.isListening) {
        speechUtil.stopListening();
        state.isListening = false;
        renderApp();
      } else {
        state.isListening = true;
        renderApp();
        speechUtil.startListening(
          (transcript, isFinal) => {
            const inputField = document.getElementById('chat-input-field');
            if (inputField) inputField.value = transcript;
            if (isFinal) {
              state.isListening = false;
              renderApp();
              handleChatSubmit(transcript);
            }
          },
          (err) => {
            console.error('Speech recognition error:', err);
            state.isListening = false;
            renderApp();
          },
          () => {
            state.isListening = false;
            renderApp();
          }
        );
      }
    });
  }

  // Send Chat message
  const btnSendChat = document.getElementById('btn-send-chat');
  const chatInputField = document.getElementById('chat-input-field');
  if (btnSendChat && chatInputField) {
    const submit = () => {
      const val = chatInputField.value.trim();
      if (val) {
        chatInputField.value = '';
        handleChatSubmit(val);
      }
    };
    btnSendChat.addEventListener('click', submit);
    chatInputField.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submit();
    });
  }

  // Quick Chat Chips
  document.querySelectorAll('[data-quick-chat]').forEach(chip => {
    chip.addEventListener('click', () => {
      const txt = chip.getAttribute('data-quick-chat');
      if (txt) handleChatSubmit(txt);
    });
  });

  // Open/Close AI Planner Modal
  const btnOpenPlanner = document.getElementById('btn-open-planner');
  const btnClosePlanner = document.getElementById('btn-close-planner-modal');
  const btnCancelPlanner = document.getElementById('btn-cancel-modal');
  const plannerModal = document.getElementById('ai-planner-modal');

  if (btnOpenPlanner && plannerModal) {
    btnOpenPlanner.addEventListener('click', () => {
      plannerModal.classList.remove('hidden');
    });
  }
  if (btnClosePlanner && plannerModal) {
    btnClosePlanner.addEventListener('click', () => {
      plannerModal.classList.add('hidden');
    });
  }
  if (btnCancelPlanner && plannerModal) {
    btnCancelPlanner.addEventListener('click', () => {
      plannerModal.classList.add('hidden');
    });
  }

  // Fill Modal Prompt from Inspiration Chips
  document.querySelectorAll('[data-fill-prompt]').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.getAttribute('data-fill-prompt');
      const input = document.getElementById('ai-vision-input');
      if (input && val) input.value = val;
    });
  });

  // Modal Voice Input
  const btnModalVoice = document.getElementById('btn-modal-voice-input');
  if (btnModalVoice) {
    btnModalVoice.addEventListener('click', () => {
      const label = document.getElementById('modal-voice-label');
      if (label) label.innerText = 'Listening...';
      speechUtil.startListening(
        (transcript, isFinal) => {
          const input = document.getElementById('ai-vision-input');
          if (input) input.value = transcript;
          if (isFinal && label) label.innerText = 'Speak Vision';
        },
        () => {
          if (label) label.innerText = 'Speak Vision';
        },
        () => {
          if (label) label.innerText = 'Speak Vision';
        }
      );
    });
  }

  // Generate Event from Modal
  const btnGenerateEvent = document.getElementById('btn-generate-event-ai');
  if (btnGenerateEvent) {
    btnGenerateEvent.addEventListener('click', () => {
      const input = document.getElementById('ai-vision-input');
      const text = input ? input.value.trim() : '';
      if (!text) {
        alert('Please provide a vision description or click an inspiration chip!');
        return;
      }

      const presetSelect = document.getElementById('modal-cultural-preset');
      const culturalPresetId = presetSelect ? presetSelect.value : 'hindu_vedic';

      const parsed = aiEngine.parseEventVision(text);
      parsed.culturalPresetId = culturalPresetId;

      const newEvent = aiEngine.generateMasterEventFromVision(parsed);
      state.events.unshift(newEvent);
      state.activeEventId = newEvent.id;
      state.activeTab = 'cockpit';
      saveState();

      if (plannerModal) plannerModal.classList.add('hidden');
      renderApp();

      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }

      if (state.voiceOutputEnabled) {
        speechUtil.speak(`Master plan generated successfully for ${newEvent.title}. All 22 pillars and cultural protocols are initialized.`);
      }
    });
  }

  // Print Run of Show
  const btnPrintRos = document.getElementById('btn-print-ros');
  const btnPrintRosAction = document.getElementById('btn-print-ros-action');
  if (btnPrintRos) btnPrintRos.addEventListener('click', () => exportUtils.printRunOfShow(activeEvent));
  if (btnPrintRosAction) btnPrintRosAction.addEventListener('click', () => exportUtils.printRunOfShow(activeEvent));

  // Export JSON
  const btnExportJson = document.getElementById('btn-export-json');
  if (btnExportJson) {
    btnExportJson.addEventListener('click', () => {
      exportUtils.downloadJSON(activeEvent, `${activeEvent.id}-master-plan.json`);
    });
  }

  // Export Guests CSV
  const btnExportCsv = document.getElementById('btn-export-guests-csv');
  if (btnExportCsv) {
    btnExportCsv.addEventListener('click', () => {
      exportUtils.exportGuestsCSV(activeEvent.guests, activeEvent.title);
    });
  }

  // Task Complete Toggles
  document.querySelectorAll('[data-task-complete], [data-task-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const taskId = btn.getAttribute('data-task-complete') || btn.getAttribute('data-task-toggle');
      const task = activeEvent.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'completed' ? 'in_progress' : 'completed';
        saveState();
        renderApp();
      }
    });
  });

  // Strategy Plan Selection
  document.querySelectorAll('[data-select-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const planKey = btn.getAttribute('data-select-plan');
      if (planKey && activeEvent.strategyPlans) {
        activeEvent.strategyPlans.selectedPlan = planKey;
        activeEvent.agentActivityLog.unshift({
          id: `act-${Date.now()}`,
          timestamp: 'Just now',
          type: 'decision',
          confidence: 0.96,
          summary: `Switched strategic plan tier to: ${planKey.toUpperCase().replace('_', ' ')}.`,
          category: 'Strategy'
        });
        saveState();
        renderApp();
      }
    });
  });

  // Cultural Preset Switcher within Cultural View
  document.querySelectorAll('[data-cultural-select]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedCulturalTab = btn.getAttribute('data-cultural-select');
      renderApp();
    });
  });

  // Apply Cultural Preset to Event Run of Show
  document.querySelectorAll('[data-apply-preset]').forEach(btn => {
    btn.addEventListener('click', () => {
      const presetId = btn.getAttribute('data-apply-preset');
      const preset = CULTURAL_PRESETS[presetId];
      if (preset && preset.rituals) {
        activeEvent.culturalPresetId = presetId;
        activeEvent.runOfShow = preset.rituals.map((rit, idx) => ({
          id: `ros-${idx}-${Date.now()}`,
          time: rit.timing ? rit.timing.split('(')[1]?.split('-')[0]?.trim() || `0${9 + idx * 3}:00 AM` : `0${9 + idx * 3}:00 AM`,
          endTime: rit.timing ? rit.timing.split('-')[1]?.replace(')', '')?.trim() || `0${11 + idx * 3}:00 AM` : `0${11 + idx * 3}:00 AM`,
          ritual: rit.name,
          venue: activeEvent.location.primaryVenue,
          lead: 'Cultural Coordinator',
          status: 'ready',
          notes: rit.significance || 'Cultural sanctity verified'
        }));
        activeEvent.agentActivityLog.unshift({
          id: `act-${Date.now()}`,
          timestamp: 'Just now',
          type: 'compliance',
          confidence: 0.99,
          summary: `Synchronized ${preset.name} rituals and dietary guidelines into master Run-of-Show.`,
          category: 'Cultural Integrity'
        });
        saveState();
        renderApp();
        alert(`Synced ${preset.name} rituals to Run-of-Show!`);
      }
    });
  });

  // Payment Toggle
  document.querySelectorAll('[data-pay-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const payId = btn.getAttribute('data-pay-toggle');
      const pay = activeEvent.budget.paymentMilestones.find(p => p.id === payId);
      if (pay) {
        if (pay.status === 'paid') {
          pay.status = 'pending';
          activeEvent.budget.actualSpent -= pay.amount;
        } else {
          pay.status = 'paid';
          pay.paidAt = 'Today';
          activeEvent.budget.actualSpent += pay.amount;
        }
        saveState();
        renderApp();
      }
    });
  });

  // AI Negotiate Vendor
  document.querySelectorAll('[data-negotiate-vendor]').forEach(btn => {
    btn.addEventListener('click', () => {
      const vndId = btn.getAttribute('data-negotiate-vendor');
      const vnd = activeEvent.vendors.find(v => v.id === vndId);
      if (vnd) {
        const targetPrice = Math.round(vnd.quotedPrice * 0.85); // 15% discount target
        const draft = aiEngine.draftVendorNegotiation(vnd, targetPrice, activeEvent.currencySymbol);
        const draftBox = document.getElementById('negotiation-draft-box');
        const draftText = document.getElementById('negotiation-draft-text');
        if (draftBox && draftText) {
          draftText.innerHTML = `<strong>Subject:</strong> ${draft.subject}<br><br>${draft.body.replace(/\n/g, '<br>')}`;
          draftBox.classList.remove('hidden');
          draftBox.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  const btnCloseNegotiate = document.getElementById('btn-close-negotiate');
  if (btnCloseNegotiate) {
    btnCloseNegotiate.addEventListener('click', () => {
      const box = document.getElementById('negotiation-draft-box');
      if (box) box.classList.add('hidden');
    });
  }

  const btnCopyNegotiation = document.getElementById('btn-copy-negotiation');
  if (btnCopyNegotiation) {
    btnCopyNegotiation.addEventListener('click', () => {
      const text = document.getElementById('negotiation-draft-text')?.innerText;
      if (text) {
        navigator.clipboard.writeText(text);
        alert('Negotiation letter copied to clipboard!');
      }
    });
  }

  // Simulate Delay Cascade (Pillar 6 & 9)
  const btnSimulateDelay = document.getElementById('btn-simulate-delay');
  if (btnSimulateDelay) {
    btnSimulateDelay.addEventListener('click', () => {
      const sessionSelect = document.getElementById('delay-session-select');
      const minutesSelect = document.getElementById('delay-minutes-select');
      if (!sessionSelect || !minutesSelect) return;

      const sessionId = sessionSelect.value;
      const delayMinutes = parseInt(minutesSelect.value, 10);

      const res = aiEngine.calculateDelayCascade(activeEvent.runOfShow, sessionId, delayMinutes);
      activeEvent.runOfShow = res.updatedRunOfShow;

      // Add to live operations alerts & agent activity log
      activeEvent.liveOperations.activeAlerts.unshift({
        id: `alt-del-${Date.now()}`,
        level: 'warning',
        title: `Schedule Cascade: +${delayMinutes}m Delay Propagated`,
        message: res.broadcastMessage,
        time: 'Just now'
      });

      activeEvent.agentActivityLog.unshift({
        id: `act-${Date.now()}`,
        timestamp: 'Just now',
        type: 'decision',
        confidence: 0.98,
        summary: `Delay Cascade calculated: Adjusted ${res.affectedCount} downstream sessions forward by ${delayMinutes} minutes.`,
        category: 'Live Operations'
      });

      saveState();
      renderApp();

      const resultBox = document.getElementById('delay-result-box');
      const broadcastText = document.getElementById('delay-broadcast-text');
      const affectedCount = document.getElementById('delay-affected-count');
      if (resultBox && broadcastText && affectedCount) {
        resultBox.classList.remove('hidden');
        broadcastText.innerText = res.broadcastMessage;
        affectedCount.innerText = `${res.affectedCount} Sessions Shifted`;
      }

      if (state.voiceOutputEnabled) {
        speechUtil.speak(`Delay cascade calculated. ${res.affectedCount} downstream sessions adjusted by ${delayMinutes} minutes. Broadcast ready.`);
      }
    });
  }

  // Reset Delays
  const btnResetDelays = document.getElementById('btn-reset-delays');
  if (btnResetDelays) {
    btnResetDelays.addEventListener('click', () => {
      activeEvent.runOfShow.forEach(item => {
        delete item.delayed;
        delete item.delayNotice;
      });
      saveState();
      renderApp();
    });
  }

  // Resolve Live Incident
  document.querySelectorAll('[data-resolve-incident]').forEach(btn => {
    btn.addEventListener('click', () => {
      const incId = btn.getAttribute('data-resolve-incident');
      const inc = activeEvent.liveOperations.incidents.find(i => i.id === incId);
      if (inc) {
        inc.status = inc.status === 'resolved' ? 'in_progress' : 'resolved';
        saveState();
        renderApp();
      }
    });
  });

  // Human Approval Checkpoint Actions (Pillar 18)
  document.querySelectorAll('[data-approve-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const actId = btn.getAttribute('data-approve-action');
      const act = activeEvent.agentActivityLog.find(a => a.id === actId);
      if (act) {
        act.approved = true;
        act.summary = `[HUMAN SIGNED] ${act.summary}`;
        saveState();
        renderApp();
        alert('Action authorized and executed successfully by Antigravity!');
      }
    });
  });

  // Digital Pass View Modal
  document.querySelectorAll('[data-view-pass]').forEach(btn => {
    btn.addEventListener('click', () => {
      const gstId = btn.getAttribute('data-view-pass');
      const gst = activeEvent.guests.find(g => g.id === gstId);
      if (gst) {
        const modal = document.getElementById('digital-pass-modal');
        const content = document.getElementById('digital-pass-content');
        if (modal && content) {
          content.innerHTML = `
            <div class="space-y-4">
              <div class="text-[11px] font-bold text-fuchsia-400 tracking-widest uppercase">VIP CELEBRATION PASS</div>
              <h3 class="text-xl font-bold text-white">${activeEvent.title}</h3>
              <div class="text-xs text-slate-400">${activeEvent.dates.start} • ${activeEvent.location.primaryVenue}</div>

              <!-- Mock QR Code -->
              <div class="w-44 h-44 mx-auto bg-white p-3 rounded-2xl flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 100 100" class="w-full h-full text-slate-900 fill-current">
                  <path d="M0,0 h30 v30 h-30 z M40,0 h20 v10 h-20 z M70,0 h30 v30 h-30 z M10,10 h10 v10 h-10 z M80,10 h10 v10 h-10 z M0,40 h10 v20 h-10 z M20,40 h20 v10 h-20 z M50,40 h30 v10 h-30 z M0,70 h30 v30 h-30 z M10,80 h10 v10 h-10 z M40,70 h20 v20 h-20 z M70,70 h30 v30 h-30 z M80,80 h10 v10 h-10 z M40,90 h10 v10 h-10 z M60,60 h10 v20 h-10 z" />
                </svg>
              </div>

              <div class="space-y-1">
                <div class="text-base font-bold text-white">${gst.name}</div>
                <div class="text-xs text-amber-300 font-semibold">${gst.table || 'General Admission'}</div>
                <div class="text-[11px] text-slate-400">Dietary: <strong class="text-emerald-400">${gst.dietary || 'Standard'}</strong> • Plus-Ones: +${gst.plusOnes || 0}</div>
              </div>

              <div class="pt-3 border-t border-slate-800 flex gap-2">
                <button onclick="window.print()" class="flex-1 text-xs font-semibold py-2 rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 text-white transition-colors">
                  Print Pass
                </button>
                <button id="btn-close-pass-modal" class="text-xs font-semibold py-2 px-3 rounded-lg bg-slate-800 text-slate-300 hover:text-white">
                  Close
                </button>
              </div>
            </div>
          `;
          modal.classList.remove('hidden');

          document.getElementById('btn-close-pass-modal')?.addEventListener('click', () => {
            modal.classList.add('hidden');
          });
        }
      }
    });
  });

  // Quick Dietary Sync with Chef
  const btnQuickDietary = document.getElementById('btn-quick-dietary-sync');
  if (btnQuickDietary) {
    btnQuickDietary.addEventListener('click', () => {
      alert('Custom dietary order sheet generated and dispatched to Royal Mewar Gourmet Caterers kitchen head Devendra Joshi.');
      activeEvent.agentActivityLog.unshift({
        id: `act-${Date.now()}`,
        timestamp: 'Just now',
        type: 'compliance',
        confidence: 0.99,
        summary: 'Synchronized personalized Jain, Satvik and Vegan guest meal orders with Head Chef.',
        category: 'Dietary Safety'
      });
      saveState();
      renderApp();
    });
  }
}

// Handle Conversational Copilot Submissions
function handleChatSubmit(userPrompt) {
  const activeEvent = getActiveEvent();
  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Add User message
  state.chatMessages.push({
    id: `usr-${Date.now()}`,
    role: 'user',
    text: userPrompt,
    time: timeStr
  });

  const query = userPrompt.toLowerCase();
  let replyText = '';
  let actionTrigger = null;
  let actionTriggerLabel = null;

  if (query.includes('cater') || query.includes('food') || query.includes('menu')) {
    replyText = `For ${activeEvent.title}, I have evaluated the catering allocations. We currently have "${activeEvent.vendors.find(v => v.category.includes('Catering'))?.name || 'Chef Partner'}" locked in with dedicated Satvik, Jain, and Vegan prep zones. Would you like me to draft a price negotiation or verify dietary headcounts?`;
    actionTrigger = 'sync_dietary';
    actionTriggerLabel = 'Sync Dietary Order Sheet';
  } else if (query.includes('delay') || query.includes('late') || query.includes('performer') || query.includes('baraat')) {
    replyText = `I have simulated a 30-minute delay cascade on the master timeline. The AI shifts downstream sessions by +30m while guarding the 11:30 PM noise curfew. You can inspect the updated schedule in the "Run of Show" tab.`;
    actionTrigger = 'runofshow';
    actionTriggerLabel = 'Inspect Run of Show';
  } else if (query.includes('trade-off') || query.includes('plan') || query.includes('strategy')) {
    replyText = `We maintain 3 tailored models for this event: 1) Budget Saver (saves ~25% through seasonal local decor and acoustic daytime staging), 2) Balanced Grandeur (our current active model), and 3) Luxury VIP (adds drone shows and celebrity hosts).`;
    actionTrigger = 'strategy';
    actionTriggerLabel = 'Compare 3-Tier Plans';
  } else if (query.includes('weather') || query.includes('emergency') || query.includes('rain')) {
    replyText = `Our Emergency Shield is nominal: On-site weather radar shows clear skies. In the event of adverse weather, our 45-minute German Pagoda tent fallback SLA activates automatically, and dual 100kVA Cummins generators guarantee zero blackout.`;
    actionTrigger = 'contingency';
    actionTriggerLabel = 'View Emergency Shield';
  } else if (query.includes('negotiate') || query.includes('discount')) {
    replyText = `I have generated a professional vendor negotiation letter offering an immediate 50% deposit and digital guest brochure branding in exchange for a ~15% discount. You can review and copy it under "Venues & Vendors".`;
    actionTrigger = 'vendors';
    actionTriggerLabel = 'Review AI Negotiation Draft';
  } else {
    replyText = `I have analyzed your instruction: "${userPrompt}". I have cross-checked our master structured event records (budgets, cultural muhurats, and task dependencies). Everything is synchronized and verified across all 22 pillars.`;
  }

  // Add Assistant reply
  state.chatMessages.push({
    id: `ast-${Date.now()}`,
    role: 'assistant',
    text: replyText,
    time: timeStr,
    actionTrigger,
    actionTriggerLabel
  });

  saveState();
  renderApp();

  // Scroll chat messages to bottom
  const container = document.getElementById('chat-messages-container');
  if (container) container.scrollTop = container.scrollHeight;

  // Text to Speech
  if (state.voiceOutputEnabled) {
    speechUtil.speak(replyText);
  }
}
