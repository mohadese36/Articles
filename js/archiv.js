
// const translations = {
//     fa: {},
//     en: {}
// };

// fetch('lang/fa.json')
//     .then(response => response.json())
//     .then(data => translations.fa = data);

// fetch('lang/en.json')
//     .then(response => response.json())
//     .then(data => translations.en = data);

// function setLanguage(lang) {
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

//     for (const section in translations[lang]) {
//         for (const key in translations[lang][section]) {
//             const element = document.getElementById(`${section}_${key}`);
//             if (element) {
//                 element.innerText = translations[lang][section][key];
//             }
//         }
//     }
// }
////////////////////////////////
// const translations = {
//     fa: {},
//     en: {}
// };

// fetch('lang/fa.json')
//     .then(response => response.json())
//     .then(data => translations.fa = data);

// fetch('lang/en.json')
//     .then(response => response.json())
//     .then(data => translations.en = data);

// function setLanguage(lang) {
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

//     for (const section in translations[lang]) {
//         for (const key in translations[lang][section]) {
//             const element = document.getElementById(`${section}_${key}`);
//             if (element) {
//                 element.innerText = translations[lang][section][key];
//             }
//         }
//     }
// }


/////////////////////




// const translations = {
//     fa: {},
//     en: {}
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

//     // بروزرسانی تمامی عناصر براساس ترجمه‌ها
//     for (const section in data) {
//         for (const key in data[section]) {
//             const elementId = `${section}_${key}`;  // فرض می‌کنیم ID‌ها به این صورت هستند
//             const element = document.getElementById(elementId);
//             if (element) {
//                 element.innerHTML = data[section][key];
//             }
//         }
//     }
// }
// function setLanguage(lang) {
//     loadTranslations(lang).then(() => {

//         document.getElementById('article_intro_intro_title').innerHTML = translations[lang].article.intro.intro_title;
//         document.getElementById('article_intro_intro_paragraph_1').innerHTML = translations[lang].article.intro.intro_paragraph_1;
//         document.getElementById('article_intro_intro_paragraph_2').innerHTML = translations[lang].article.intro.intro_paragraph_2;
//         document.documentElement.lang = lang;
//         document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

//         // برای هر بخش، تمامی کلیدها را جستجو و بروزرسانی می‌کنیم
//         for (const section in translations[lang]) {
//             for (const key in translations[lang][section]) {
//                 const elementId = `${section}_${key}`;
//                 const element = document.getElementById(elementId);
//                 if (element) {
//                     console.log(`Updating ${elementId}: ${translations[lang][section][key]}`); // اضافه کردن این خط
//                     console.log('Loaded article translations:', translations[lang].article); // اضافه کردن این خط برای بررسی بخش article

//                     element.innerHTML = translations[lang][section][key];
//                 }
//             }
//         }
//     });
// }


// // بارگذاری زبان پیش‌فرض (فارسی)
// document.addEventListener('DOMContentLoaded', () => {
//     const defaultLang = 'fa';  // زبان پیش‌فرض را فارسی قرار می‌دهیم
//     setLanguage(defaultLang);
// });





////////////////////////////

// const translations = {
//     fa: {},
//     en: {}
// };

// async function loadTranslations(lang) {
//     try {
//         const response = await fetch(`lang/${lang}.json`);
//         const data = await response.json();
//         translations[lang] = data;  // ذخیره داده‌ها در ترجمه‌ها
//         console.log(`Translations for ${lang}:`, translations[lang]);
//     } catch (error) {
//         console.error('Error loading translations:', error);
//     }
// }

// function updatePageContent(lang) {
//     const data = translations[lang];
//     console.log(`Updating page content for ${lang}:`, data);

//     for (const section in data) {
//         for (const key in data[section]) {
//             const elementId = `${section}_${key}`;  
//             const element = document.getElementById(elementId);
//             if (element) {
//                 console.log(`Updating element with ID ${elementId} to:`, data[section][key]);
//                 element.innerHTML = data[section][key];
//             } else {
//                 console.warn(`Element with ID ${elementId} not found`);
//             }
//         }
//     }
// }

// async function setLanguage(lang) {
//     await loadTranslations(lang);
//     console.log('Loaded translations:', translations[lang]); 
//     updatePageContent(lang);
//     document.documentElement.lang = lang;
//     document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const defaultLang = 'en'; 
//     setLanguage(defaultLang);
// });


////////////////////////

const translations = {
    fa: {},
    en: {}
};

async function loadTranslations(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        const data = await response.json();
        translations[lang] = data;  // ذخیره داده‌ها در ترجمه‌ها
        console.log(`Translations for ${lang}:`, translations[lang]);
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

function updatePageContent(lang) {
    const data = translations[lang];
    console.log(`Updating page content for ${lang}:`, data);

    for (const section in data) {
        for (const key in data[section]) {
            const elementId = `${section}_${key}`;  
            const element = document.getElementById(elementId);
            if (element) {
                console.log(`Updating element with ID ${elementId} to:`, data[section][key]);
                element.innerHTML = data[section][key];
            } else {
                console.warn(`Element with ID ${elementId} not found`);
            }
        }
    }
}

async function setLanguage(lang) {
    await loadTranslations(lang);
    console.log('Loaded translations:', translations[lang]); 
    updatePageContent(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem('selectedLanguage', lang);  // ذخیره زبان انتخاب شده در لوکال استورج
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage');  // بازیابی زبان ذخیره شده از لوکال استورج
    const defaultLang = savedLang || 'en';  // اگر زبان ذخیره شده وجود نداشت، زبان پیش‌فرض را انگلیسی قرار می‌دهیم
    setLanguage(defaultLang);
});

// اضافه کردن رویداد کلیک به لینک‌ها برای حفظ زبان انتخاب شده
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href) {
        const currentLang = localStorage.getItem('selectedLanguage') || 'en';
        const url = new URL(event.target.href);
        url.searchParams.set('lang', currentLang);  // اضافه کردن پارامتر زبان به URL
        event.target.href = url.toString();
    }

})    
    // اخرین کدهای من که درست بود

    // const translations = {
    //     fa: {},
    //     en: {}
    // };
    
    // async function loadTranslations(lang) {
    //     try {
    //         const response = await fetch(`lang/${lang}.json`);
    //         const data = await response.json();
    //         translations[lang] = data;  // ذخیره داده‌ها در ترجمه‌ها
    //         // console.log(`Translations for ${lang}:`, translations[lang]);
    //     } catch (error) {
    //         console.error('Error loading translations:', error);
    //     }
    // }
    
    // function updatePageContent(lang) {
    //     const data = translations[lang];
    //     // console.log(`Updating page content for ${lang}:`, data);
    
    //     for (const section in data) {
    //         for (const key in data[section]) {
    //             const elementId = `${section}_${key}`;  
    //             const element = document.getElementById(elementId);
    //             if (element) {
    //                 // console.log(`Updating element with ID ${elementId} to:`, data[section][key]);
    //                 if (element.tagName === 'INPUT' && element.type === 'email') {
    //                     element.placeholder = data[section][key];
    //                 } else {
    //                     element.innerHTML = data[section][key];
    //                 }
    //             } 
    //             // else {
    //             //     console.warn(`Element with ID ${elementId} not found`);
    //             // }
    //         }
    //     }
    // }
    
    // async function setLanguage(lang) {
    //     await loadTranslations(lang);
    //     // console.log('Loaded translations:', translations[lang]); 
    //     updatePageContent(lang);
    //     document.documentElement.lang = lang;
    //     document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    //     localStorage.setItem('selectedLanguage', lang);  // ذخیره زبان انتخاب شده در لوکال استورج
    
    //     if (lang === 'fa') {
    //         document.body.classList.add('rtl');
    //     } else {
    //         document.body.classList.remove('rtl');
    //     }
    // }
    
    // document.addEventListener('DOMContentLoaded', () => {
    //     const savedLang = localStorage.getItem('selectedLanguage');  // بازیابی زبان ذخیره شده از لوکال استورج
    //     const defaultLang = savedLang || 'en';  // اگر زبان ذخیره شده وجود نداشت، زبان پیش‌فرض را انگلیسی قرار می‌دهیم
    //     setLanguage(defaultLang);
    
    //     // تنظیم متن دکمه تغییر زبان
    //     const languageSwitcher = document.getElementById('change-language2');
    //     const languageSwitcherButton = languageSwitcher.querySelector('button');
    //     languageSwitcherButton.textContent = defaultLang === 'fa' ? 'English' : 'Persian';
    
    //     languageSwitcher.addEventListener('click', () => {
    //         const newLang = document.documentElement.lang === 'fa' ? 'en' : 'fa';
    //         setLanguage(newLang);
    //         languageSwitcherButton.textContent = newLang === 'fa' ? 'English' : 'Persian';
    //     });
    // });
    
    // // اضافه کردن رویداد کلیک به لینک‌ها برای حفظ زبان انتخاب شده
    // document.addEventListener('click', (event) => {
    //     if (event.target.tagName === 'A' && event.target.href) {
    //         const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    //         const url = new URL(event.target.href);
    //         url.searchParams.set('lang', currentLang);  // اضافه کردن پارامتر زبان به URL
    //         event.target.href = url.toString();
    //     }
    // });