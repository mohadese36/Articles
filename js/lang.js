// const translations = {
//     fa: {},
//     en: {}
// };

// const titles = {
//     fa: {
//         creativity: 'خلاقیت',
//         uiEngineer: 'مهندس رابط کاربری',
//         seniorFrontendEngineer: 'مهندس ارشد فرانت‌اند',
//         webDevelopment: 'توسعه وب',
//         ai: 'هوش مصنوعی',
//         frontendDevelopment: 'توسعه فرانت‌اند'
//     },
//     en: {
//         creativity: 'Creativity',
//         uiEngineer: 'UI Engineer',
//         seniorFrontendEngineer: 'Senior Frontend Engineer',
//         webDevelopment: 'Web Development',
//         ai: 'Artificial Intelligence',
//         frontendDevelopment: 'Frontend Development'
//     }
// };

// async function loadTranslations(lang) {
//     try {
//         const response = await fetch(`lang/${lang}.json`);
//         const data = await response.json();
//         translations[lang] = data;  // ذخیره داده‌ها در ترجمه‌ها
//     } catch (error) {
//         console.error('Error loading translations:', error);
//     }
// }

// function updatePageContent(lang) {
//     const data = translations[lang];

//     for (const section in data) {
//         for (const key in data[section]) {
//             const elementId = `${section}_${key}`;
//             const element = document.getElementById(elementId);
//             if (element) {
//                 if (element.tagName === 'INPUT' && element.type === 'email') {
//                     element.placeholder = data[section][key];
//                 } else {
//                     element.innerHTML = data[section][key];
//                 }
//             }
//         }
//     }
// }

// function updateTitles(lang) {
//     const titleElements = document.getElementsByTagName('title');
//     for (let i = 0; i < titleElements.length; i++) {
//         const titleElement = titleElements[i];
//         const titleKey = titleElement.getAttribute('data-title-key');
//         if (titleKey && titles[lang][titleKey]) {
//             titleElement.textContent = titles[lang][titleKey];
//         }
//     }
// }


// async function setLanguage(lang) {
//     await loadTranslations(lang);
//     updatePageContent(lang);
//     updateTitles(lang);
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
//     localStorage.setItem('selectedLanguage', lang);

//     if (lang === 'fa') {
//         document.body.classList.add('rtl');
//     } else {
//         document.body.classList.remove('rtl');
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const urlParams = new URLSearchParams(window.location.search);
//     let lang = urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'en';

//     // اگر lang در URL نبود، مقدار مناسب را تنظیم کرده و صفحه را ریدایرکت کن
//     if (!urlParams.get('lang')) {
//         const userLang = navigator.language || navigator.userLanguage;
//         lang = userLang.startsWith('fa') ? 'fa' : 'en';

//         // اضافه کردن lang به URL و ریدایرکت
//         urlParams.set('lang', lang);
//         window.location.replace(window.location.pathname + '?' + urlParams.toString());
//     } else {
//         setLanguage(lang);
//     }

//     // تنظیم متن دکمه تغییر زبان
//     const languageSwitcher = document.getElementById('change-language2');
//     if (languageSwitcher) {
//         const languageSwitcherButton = languageSwitcher.querySelector('button');
//         if (languageSwitcherButton) {
//             languageSwitcherButton.textContent = lang === 'fa' ? 'English' : 'Persian';

//             languageSwitcher.addEventListener('click', () => {
//                 const newLang = lang === 'fa' ? 'en' : 'fa';
//                 urlParams.set('lang', newLang);
//                 window.location.replace(window.location.pathname + '?' + urlParams.toString());
//             });
//         }
//     }

//     // اضافه کردن پارامتر زبان به همه لینک‌ها
//     const links = document.querySelectorAll('a');
//     links.forEach(link => {
//         if (link.href) {
//             const url = new URL(link.href, window.location.origin);
//             url.searchParams.set('lang', lang);
//             link.href = url.toString();
//         }
//     });
// });


// //////////////////////
// // document.addEventListener('DOMContentLoaded', () => {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const lang = urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'en';
// //     setLanguage(lang);

// //     // تنظیم متن دکمه تغییر زبان
// //     const languageSwitcher = document.getElementById('change-language2');
// //     const languageSwitcherButton = languageSwitcher.querySelector('button');
// //     languageSwitcherButton.textContent = lang === 'fa' ? 'English' : 'Persian';

// //     languageSwitcher.addEventListener('click', () => {
// //         const newLang = document.documentElement.lang === 'fa' ? 'en' : 'fa';
// //         setLanguage(newLang);
// //         languageSwitcherButton.textContent = newLang === 'fa' ? 'English' : 'Persian';
// //     });

// //     // اضافه کردن پارامتر زبان به همه لینک‌ها
// //     const links = document.querySelectorAll('a');
// //     links.forEach(link => {
// //         const url = new URL(link.href);
// //         url.searchParams.set('lang', lang);
// //         link.href = url.toString();
// //     });
// // });

// // اضافه کردن رویداد کلیک به لینک‌ها برای حفظ زبان انتخاب شده
// document.addEventListener('click', (event) => {
//     if (event.target.tagName === 'A' && event.target.href) {
//         const currentLang = localStorage.getItem('selectedLanguage') || 'en';
//         const url = new URL(event.target.href);
//         url.searchParams.set('lang', currentLang);
//         event.target.href = url.toString();
//     }
// });


////////////////////////////////////////////////////////////////////////

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

// دریافت زبان فعلی کاربر
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem('selectedLanguage') || 'en';
}

async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        const data = await response.json();
        translations[lang] = data;
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
    const titleElement = document.querySelector('title');
    const titleKey = titleElement.getAttribute('data-title-key');
    if (titleKey && titles[lang][titleKey]) {
        titleElement.textContent = titles[lang][titleKey];
    }
}

// تنظیم زبان صفحه
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

// اجرای تنظیمات زبان در هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let lang = getCurrentLanguage();

    // اگر زبان در URL نیست، زبان پیش‌فرض را تنظیم کرده و به URL اضافه کنید
    if (!urlParams.has('lang')) {
        lang = navigator.language.startsWith('fa') ? 'fa' : 'en';
        urlParams.set('lang', lang);
        window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    }

    setLanguage(lang);

    // تغییر زبان از طریق دکمه
    const languageSwitcher = document.getElementById('change-language2');
    if (languageSwitcher) {
        const languageSwitcherButton = languageSwitcher.querySelector('button');
        if (languageSwitcherButton) {
            languageSwitcherButton.textContent = lang === 'fa' ? 'English' : 'Persian';

            languageSwitcher.addEventListener('click', () => {
                const newLang = lang === 'fa' ? 'en' : 'fa';
                urlParams.set('lang', newLang);
                window.location.href = `${window.location.pathname}?${urlParams}`; // اینجا href را به روز کنید
            });
        }
    }

    // اضافه کردن پارامتر زبان به همه لینک‌ها هنگام کلیک
    document.querySelectorAll('a').forEach(link => {
        const url = new URL(link.href, window.location.origin);
        if (!url.searchParams.has('lang')) {
            url.searchParams.set('lang', lang);
            link.href = url.toString(); // اضافه کردن پارامتر lang به لینک‌ها
        }
    });
});




