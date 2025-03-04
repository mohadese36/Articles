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
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function updatePageContent(lang) {
    const data = translations[lang];

    for (const section in data) {
        for (const key in data[section]) {
            const elementId = `${section}_${key}`;
            const element = document.getElementById(elementId);
            if (element) {
                if (element.tagName === 'INPUT' && element.type === 'email') {
                    element.placeholder = data[section][key];
                } else {
                    element.innerHTML = data[section][key];
                }
            }
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
    updatePageContent(lang);
    updateTitles(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLanguage', lang);

    if (lang === 'fa') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'en';

    // بررسی مقدار زبان مرورگر
    const userLang = navigator.language || navigator.userLanguage;
    if (!urlParams.get('lang') && userLang.startsWith('fa')) {
        lang = 'fa';
        window.location.search = `?lang=fa`; // اضافه کردن پارامتر `lang=fa` به URL
    }

    setLanguage(lang);
});


// اضافه کردن رویداد کلیک به لینک‌ها برای حفظ زبان انتخاب شده
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        const url = new URL(event.target.href);
        url.searchParams.set('lang', currentLang);
        event.target.href = url.toString();
    }
});




