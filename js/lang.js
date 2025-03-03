const translations = {
    fa: {},
    en: {}
};

const titles = {
    fa: {
        creativity: 'خلاقیت',
        uiEngineer: 'مهندس رابط کاربری',
        seniorFrontendEngineer: 'مهندس ارشد فرانت‌اند',
        webDevelopment: 'توسعه وب',
        ai: 'هوش مصنوعی',
        frontendDevelopment: 'توسعه فرانت‌اند'
    },
    en: {
        creativity: 'Creativity',
        uiEngineer: 'UI Engineer',
        seniorFrontendEngineer: 'Senior Frontend Engineer',
        webDevelopment: 'Web Development',
        ai: 'Artificial Intelligence',
        frontendDevelopment: 'Frontend Development'
    }
};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        const data = await response.json();
        translations[lang] = data;  // ذخیره داده‌ها در ترجمه‌ها
        // console.log(`Translations for ${lang}:`, translations[lang]);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function updatePageContent(lang) {
    const data = translations[lang];
    // console.log(`Updating page content for ${lang}:`, data);

    for (const section in data) {
        for (const key in data[section]) {
            const elementId = `${section}_${key}`;  
            const element = document.getElementById(elementId);
            if (element) {
                // console.log(`Updating element with ID ${elementId} to:`, data[section][key]);
                if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = data[section][key];
                } else {
                    element.innerHTML = data[section][key];
                }
            } 
            // else {
            //     console.warn(`Element with ID ${elementId} not found`);
            // }
        }
    }
}

function updateTitles(lang) {
    const titleElements = document.getElementsByTagName('title');
    for (let i = 0; i < titleElements.length; i++) {
        const titleElement = titleElements[i];
        const titleKey = titleElement.getAttribute('data-title-key');
        if (titleKey && titles[lang][titleKey]) {
            titleElement.textContent = titles[lang][titleKey];
        }
    }
}

async function setLanguage(lang) {
    await loadTranslations(lang);
    // console.log('Loaded translations:', translations[lang]); 
    updatePageContent(lang);
    updateTitles(lang);  // اضافه کردن این خط برای به‌روزرسانی تایتل‌ها
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLanguage', lang);  // ذخیره زبان انتخاب شده در لوکال استورج

    if (lang === 'fa') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage');  // بازیابی زبان ذخیره شده از لوکال استورج
    const defaultLang = savedLang || 'en';  // اگر زبان ذخیره شده وجود نداشت، زبان پیش‌فرض را انگلیسی قرار می‌دهیم
    setLanguage(defaultLang);

    // تنظیم متن دکمه تغییر زبان
    const languageSwitcher = document.getElementById('change-language2');
    const languageSwitcherButton = languageSwitcher.querySelector('button');
    languageSwitcherButton.textContent = defaultLang === 'fa' ? 'English' : 'Persian';

    languageSwitcher.addEventListener('click', () => {
        const newLang = document.documentElement.lang === 'fa' ? 'en' : 'fa';
        setLanguage(newLang);
        languageSwitcherButton.textContent = newLang === 'fa' ? 'English' : 'Persian';
    });
});

// اضافه کردن رویداد کلیک به لینک‌ها برای حفظ زبان انتخاب شده
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        const url = new URL(event.target.href);
        url.searchParams.set('lang', currentLang);  // اضافه کردن پارامتر زبان به URL
        event.target.href = url.toString();
    }
});

////////////////////تایتل


