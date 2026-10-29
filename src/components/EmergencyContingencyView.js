import { ICONS } from '../utils/svgIcons.js';

// Emergency, Contingency & Weather Shield Component (No emojis, editorial style)
export function renderEmergencyContingencyView(event, state) {
  const emg = event.contingencyEmergency || {
    weatherBackupPlan: 'Rain-resistant indoor facility on standby.',
    powerFailover: 'Dual generators with automatic transfer switch.',
    medicalPlan: 'Paramedics on-site.',
    emergencyContacts: []
  };

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.shield}
              <span>Safety & Risk Safeguards</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Emergency & Contingency Protocols
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Weather fallback contracts, dual 100kVA power auto-switchovers, life-safety triage, and direct authority lines.
            </p>
          </div>
        </div>
      </div>

      <!-- Human Escalation Boundary Notice -->
      <div class="p-6 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 leading-relaxed flex items-start gap-3.5">
        <span class="text-neutral-400 mt-0.5 shrink-0">${ICONS.alertTriangle}</span>
        <div>
          <strong class="text-neutral-100 block mb-0.5">Life-Safety Operational Standard:</strong>
          Celestial strictly defers medical, structural, and security events to certified human first responders and civic authorities. The system surfaces immediate telephony dispatch connections rather than improvising simulated autonomous responses.
        </div>
      </div>

      <!-- Core Contingency Pillars -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Weather Contingency -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.shield}
              <span>Weather Contingency</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.weatherBackupPlan}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Mobilization SLA:</strong> 45-minute transition to covered pagodas.
            </div>
          </div>
          <button id="btn-trigger-weather-failover" class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 transition-colors">
            Simulate Weather Failover
          </button>
        </div>

        <!-- Power & AV Failover -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.activity}
              <span>Grid & Power Failover</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.powerFailover}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Switchover Time:</strong> 10-second ATS auto-transfer prevents blackout.
            </div>
          </div>
          <button class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 cursor-default">
            Circuits Verified
          </button>
        </div>

        <!-- Medical & Triage -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <div class="flex items-center gap-2 pb-3 border-b border-neutral-800 text-xs font-semibold text-neutral-200 uppercase tracking-wider">
              ${ICONS.users}
              <span>Medical & Triage</span>
            </div>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              ${emg.medicalPlan}
            </p>
            <div class="p-3.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-neutral-300 font-sans">
              <strong>Equipment:</strong> Defibrillator (AED) and certified on-site triage nurse.
            </div>
          </div>
          <button class="w-full text-xs font-medium py-2.5 rounded-lg bg-neutral-900 text-neutral-400 border border-neutral-800 cursor-default">
            First Aid Kit On-Site
          </button>
        </div>
      </div>

      <!-- Emergency Contact Directory -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Direct Emergency Response Dispatch</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Direct communication channels for hospital, police, and security leads</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Emergency Hotlines</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${(emg.emergencyContacts || []).map(c => `
            <div class="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between space-y-3">
              <div>
                <div class="text-[9px] font-mono uppercase text-neutral-500 mb-1">Service Entity</div>
                <h3 class="text-sm font-medium text-neutral-100">${c.service}</h3>
                <div class="text-xs font-mono text-neutral-300 mt-2">${c.contact}</div>
              </div>
              <a href="tel:${c.contact.split('/')[0].trim()}" class="inline-block text-center text-xs font-medium py-2 rounded-lg bg-neutral-100 hover:bg-white text-neutral-950 transition-colors">
                Connect Directly
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
