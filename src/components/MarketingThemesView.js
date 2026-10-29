import { ICONS } from '../utils/svgIcons.js';

// Marketing, Themes & Moodboard Component (No emojis, editorial style)
export function renderMarketingThemesView(event, state) {
  const mkt = event.marketingThemes || {
    palette: ['#0b0c0e', '#c5a880', '#e2e4e9', '#5e8363', '#1e2025'],
    paletteNames: ['Obsidian Noir', 'Antique Champagne', 'Warm Silver', 'Sage Laurel', 'Deep Slate'],
    taglines: ['A Celebration of Love and Legacy', 'Moments Made Timeless'],
    socialCalendar: []
  };

  return `
    <div class="space-y-10">
      <!-- Header -->
      <div class="rounded-2xl bg-[#111215] border border-neutral-800 p-8 shadow-sm">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c5a880]">
              ${ICONS.palette}
              <span>Atelier Identity & Outreach</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-serif text-neutral-100 font-normal">
              Identity, Aesthetics & Sponsorship
            </h1>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">
              Harmonized color palettes, official editorial taglines, 30-day promotional calendar, and sponsor packages.
            </p>
          </div>
        </div>
      </div>

      <!-- Color Palette Swatches -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Harmonized Palette & Swatches</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Atmospheric palette applied across stationery, florals, and lighting</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Atelier Palette</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-4">
          ${mkt.palette.map((hex, idx) => `
            <div class="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/80 flex flex-col">
              <div class="h-24 w-full" style="background-color: ${hex}"></div>
              <div class="p-3.5 space-y-0.5">
                <div class="text-xs font-medium text-neutral-200 truncate">${mkt.paletteNames[idx] || `Tone ${idx + 1}`}</div>
                <div class="text-[10px] font-mono text-neutral-500 uppercase">${hex}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Taglines & Calendar -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Taglines -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Official Brand Statements</h2>
          </div>

          <div class="space-y-3">
            ${mkt.taglines.map(tag => `
              <div class="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex items-center justify-between text-xs text-neutral-200">
                <span class="font-serif italic text-neutral-300">"${tag}"</span>
                <button data-copy-text="${tag}" class="text-[10px] px-2.5 py-1 rounded bg-neutral-800 text-neutral-300 hover:text-white">
                  Copy
                </button>
              </div>
            `).join('')}
          </div>

          <div class="p-4 rounded-lg bg-neutral-900/40 border border-neutral-800 text-xs">
            <div class="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider mb-1">Campaign Hashtag:</div>
            <div class="font-mono text-neutral-100 text-sm font-semibold">${event.tagline?.match(/#[A-Za-z0-9_]+/)?.[0] || '#Celebration2026'}</div>
          </div>
        </div>

        <!-- Social Calendar -->
        <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
          <div class="flex items-center gap-2 pb-4 border-b border-neutral-800">
            <h2 class="text-lg font-serif font-normal text-neutral-100">Countdown Broadcast Schedule</h2>
          </div>

          <div class="space-y-3">
            ${(mkt.socialCalendar || []).map(post => `
              <div class="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs space-y-1">
                <div class="flex items-center justify-between text-[11px]">
                  <span class="font-mono text-[#c5a880]">${post.day}</span>
                  <span class="text-neutral-500 font-sans">${post.channel}</span>
                </div>
                <div class="text-neutral-300 font-sans leading-relaxed">${post.post}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Sponsorship Tier Packages -->
      <div class="bg-[#111215] border border-neutral-800 rounded-xl p-8 space-y-6">
        <div class="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <h2 class="text-lg font-serif font-normal text-neutral-100">Sponsorship & Patron Tiers</h2>
            <p class="text-xs text-neutral-400 mt-0.5">Commercial benefits, signage placements, and patron credentials</p>
          </div>
          <span class="text-xs font-mono text-neutral-400">Pillar 12</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Principal Patron</div>
            <div class="text-xl font-serif text-[#c5a880]">₹2,50,000 / $3,000</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Main stage prominent identity</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Keynote introductory address (15m)</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Private VIP hospitality pod (4 seats)</li>
            </ul>
          </div>

          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Associate Partner</div>
            <div class="text-xl font-serif text-neutral-200">₹1,00,000 / $1,200</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Exhibition presence in grand gallery</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Inserts in digital guest dossiers</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> 2 Complimentary VIP credentials</li>
            </ul>
          </div>

          <div class="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div class="font-serif text-base text-neutral-100">Hospitality Partner</div>
            <div class="text-xl font-serif text-neutral-300">In-Kind / ₹50,000</div>
            <ul class="space-y-2 text-neutral-400 text-xs pt-2 border-t border-neutral-800/80">
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Exclusive glassware & dining branding</li>
              <li class="flex items-center gap-2"><span class="text-[#739678]">${ICONS.check}</span> Curated tasting station</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}
