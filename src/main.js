import Alpine from 'alpinejs'
window.Alpine = Alpine;

Alpine.store('langSwitcher', {
    lang: 'de',
    texts: null,
    loading: true,

    // Method to load the texts from JSON
    async loadTexts() {
        try {
            // Load the texts
            const response = await fetch('/lang/texts.json');

            // Check if the response is ok
            if (!response.ok) throw new Error('Error loading texts');

            // Store the texts
            this.texts = await response.json();

            // Set loading to false to show the main content
            this.loading = false;
        }
        catch (error) {
            console.error("Error loading texts:", error);
            this.texts = {};
        }
    },

    // Method to switch the language
    // Parameter: lang - the language to switch to
    switchLang(lang) {
        if (lang === this.lang) return;
        console.log("switchLang to " + lang)
        this.lang = lang;
    }
});

// Read the texts at startup
await Alpine.store('langSwitcher').loadTexts();

Alpine.start();