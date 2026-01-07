/**
 * Theme Management System
 * Handles light/dark mode switching and persistence
 */

class ThemeManager {
    constructor() {
        this.theme = this.getStoredTheme() || this.getSystemTheme();
        this.init();
    }

    init() {
        this.applyTheme(this.theme);
        this.createThemeToggle();
    }

    getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    getStoredTheme() {
        return localStorage.getItem('afyalink-theme');
    }

    setStoredTheme(theme) {
        localStorage.setItem('afyalink-theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        this.setStoredTheme(theme);
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleButton(newTheme);
    }

    createThemeToggle() {
        // Create toggle button if it doesn't exist
        if (!document.getElementById('theme-toggle')) {
            const toggle = document.createElement('button');
            toggle.id = 'theme-toggle';
            toggle.className = 'theme-toggle-btn';
            toggle.setAttribute('aria-label', 'Toggle theme');
            toggle.innerHTML = this.getToggleIcon(this.theme);
            toggle.addEventListener('click', () => this.toggleTheme());
            
            // Add to header or create a container
            const header = document.querySelector('header') || document.body;
            if (header) {
                const container = document.createElement('div');
                container.className = 'theme-toggle-container';
                container.appendChild(toggle);
                header.appendChild(container);
            }
        } else {
            this.updateToggleButton(this.theme);
        }
    }

    updateToggleButton(theme) {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.innerHTML = this.getToggleIcon(theme);
        }
    }

    getToggleIcon(theme) {
        if (theme === 'dark') {
            return `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
            `;
        } else {
            return `
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
            `;
        }
    }
}

// Initialize theme manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.themeManager = new ThemeManager();
    });
} else {
    window.themeManager = new ThemeManager();
}

// Export for use in other modules
export default ThemeManager;

