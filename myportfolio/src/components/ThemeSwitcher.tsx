import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type Theme = 'brutalist' | 'gradient' | 'neoTokyo' | 'editorial' | 'depth' | 'default';

interface ThemeSwitcherProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const themes = [
  { id: 'default' as Theme, name: 'Current (Mint)' },
  { id: 'brutalist' as Theme, name: 'Brutalist Minimal' },
  { id: 'gradient' as Theme, name: 'Gradient Mesh' },
  { id: 'neoTokyo' as Theme, name: 'Neo-Tokyo Tech' },
  { id: 'editorial' as Theme, name: 'Editorial Magazine' },
  { id: 'depth' as Theme, name: '3D Depth' },
];

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const currentThemeName = themes.find(t => t.id === currentTheme)?.name || 'Theme';

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-primary-500 text-white rounded-lg font-medium shadow-lg hover:bg-primary-600 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {currentThemeName} ▼
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-dark-900 border border-dark-700 rounded-lg shadow-xl overflow-hidden min-w-[200px]"
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 transition-colors ${
                  currentTheme === theme.id
                    ? 'bg-primary-500 text-white'
                    : 'text-dark-100 hover:bg-dark-800'
                }`}
              >
                {theme.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
