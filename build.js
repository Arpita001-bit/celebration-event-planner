import fs from 'fs';
import path from 'path';

const files = [
  'src/utils/svgIcons.js',
  'src/data/culturalPresets.js',
  'src/data/initialEvents.js',
  'src/utils/speech.js',
  'src/utils/exportUtils.js',
  'src/utils/aiEngine.js',
  'src/components/Navbar.js',
  'src/components/CockpitView.js',
  'src/components/CulturalRitualsView.js',
  'src/components/StrategyTimelineView.js',
  'src/components/BudgetFinancesView.js',
  'src/components/VenuesVendorsView.js',
  'src/components/GuestsRsvpView.js',
  'src/components/RunOfShowView.js',
  'src/components/LiveOperationsView.js',
  'src/components/MarketingThemesView.js',
  'src/components/EmergencyContingencyView.js',
  'src/components/PostEventAuditView.js',
  'src/components/AgentActivityView.js',
  'src/components/AIPlannerModal.js',
  'src/components/AIChatDrawer.js',
  'src/app.js'
];

let bundleCode = '(function() {\n';

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  // Remove import statements
  content = content.replace(/^import\s+.*?;?\s*$/gm, '');
  // Remove export keywords while preserving function/const/let/var
  content = content.replace(/^export\s+(const|function|let|var)\s+/gm, '$1 ');
  content = content.replace(/^export\s+default\s+/gm, '');
  bundleCode += '\n// --- File: ' + f + ' ---\n' + content + '\n';
}

bundleCode += '\nif (document.readyState === "loading") {\n  document.addEventListener("DOMContentLoaded", renderApp);\n} else {\n  renderApp();\n}\n';
bundleCode += '})();';

fs.writeFileSync('standalone.js', bundleCode);

const html = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Celestial — Private Event Atelier & Operating System</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
              serif: ['"Playfair Display"', 'Georgia', 'serif'],
              mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
              gold: {
                DEFAULT: '#c5a880',
                light: '#dfc8a7',
                dark: '#8a7556',
              },
              noir: {
                950: '#090a0c',
                900: '#0c0d0f',
                800: '#111215',
                700: '#181a1e',
              }
            }
          }
        }
      };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"></script>
    <style>
      body {
        background-color: #090a0c;
        color: #f3f4f6;
        letter-spacing: -0.01em;
      }
      ::-webkit-scrollbar { width: 5px; height: 5px; }
      ::-webkit-scrollbar-track { background: #0c0d0f; }
      ::-webkit-scrollbar-thumb { background: #26282d; border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: #3b3d45; }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      @media print {
        header, footer, #ai-chat-drawer, #ai-planner-modal, button { display: none !important; }
        body { background: white !important; color: black !important; }
      }
    </style>
  </head>
  <body class="bg-[#090a0c] text-neutral-100 font-sans antialiased selection:bg-[#c5a880] selection:text-neutral-950 min-h-screen">
    <div id="root"></div>
    <script>
${bundleCode}
    </script>
  </body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('✓ Build Complete: standalone.js and index.html generated with luxury editorial aesthetic!');
