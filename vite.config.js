import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function autoInjectReactGlobals() {
  const filePattern = /\\src\\.*\\\d{2,}-.+\.(проблема|решение)\.(jsx|tsx)$/i;
  const posixPattern = /\/src\/.*\/\d{2,}-.+\.(проблема|решение)\.(jsx|tsx)$/i;
  return {
    name: 'course-auto-inject-react-globals',
    enforce: 'pre',
    transform(code, id) {
      if (!(id.endsWith('.jsx') || id.endsWith('.tsx'))) return null;
      const matches = filePattern.test(id) || posixPattern.test(id);
      if (!matches) return null;
      const hasReactDOMImport = /from\s+['"]react-dom\/(client|index)['"];?/m.test(code) || /import\s+\*\s+as\s+ReactDOM/m.test(code);
      const hasReactImport = /from\s+['"]react['"];?/m.test(code) || /import\s+\*\s+as\s+React/m.test(code);
      let injected = '';
      if (!hasReactImport) {
        injected += "import * as React from 'react';\n";
      }
      if (!hasReactDOMImport) {
        injected += "import * as ReactDOM from 'react-dom/client';\n";
      }
      if (!injected) return null;
      return {
        code: injected + code,
        map: null,
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), autoInjectReactGlobals()],
  server: {
    port: 5173,
    open: false,
  },
});


