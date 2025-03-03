






//////////ساید بار
// document.addEventListener("DOMContentLoaded", function() {
//     const sidebar = document.querySelector(".sidebar");
//     const toggleBtn = document.querySelector(".btn");
//     const menuItems = document.querySelectorAll(".sidebar a");  // انتخاب همه آیتم‌های منو

//     // تابع تنظیم موقعیت دکمه بر اساس دایرکشن صفحه و وضعیت سایدبار
//     function updateButtonPosition() {
//         const isRTL = document.documentElement.dir === "rtl";
//         const isSidebarOpen = sidebar.classList.contains("open");

//         if (isRTL) {
//             toggleBtn.style.left = isSidebarOpen ? "250px" : "0"; // در RTL دکمه به چپ می‌چسبد
//             toggleBtn.style.right = ""; // مقدار right پاک می‌شود
//         } else {
//             toggleBtn.style.right = isSidebarOpen ? "250px" : "0"; // در LTR دکمه به راست می‌چسبد
//             toggleBtn.style.left = ""; // مقدار left پاک می‌شود
//         }
//     }

//     // تنظیم موقعیت دکمه در بارگذاری اولیه صفحه
//     updateButtonPosition();

//     // بستن سایدبار بعد از کلیک بر روی هر آیتم منو
//     menuItems.forEach(item => {
//         item.addEventListener("click", function() {
//             sidebar.classList.remove("open");  // بستن سایدبار
//             updateButtonPosition();  // به‌روزرسانی موقعیت دکمه
//         });
//     });

//     toggleBtn.addEventListener("click", function() {
//         sidebar.classList.toggle("open");
//         updateButtonPosition(); // بعد از تغییر وضعیت سایدبار، موقعیت دکمه را تنظیم کن

//         // تغییر آیکون دکمه
//         const icon = toggleBtn.querySelector("i");
//         if (sidebar.classList.contains("open")) {
//             icon.classList.replace("fa-chevron-down", "fa-chevron-up");
//         } else {
//             icon.classList.replace("fa-chevron-up", "fa-chevron-down");
//         }
//     });

//     // هر زمان که دایرکشن تغییر کرد، موقعیت دکمه اصلاح شود
//     const observer = new MutationObserver(() => {
//         updateButtonPosition();
//     });

//     observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
// });

////////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.querySelector(".btn");
    const menuItems = document.querySelectorAll(".sidebar a");  // انتخاب همه آیتم‌های منو

    // تابع تنظیم موقعیت دکمه بر اساس دایرکشن صفحه و وضعیت سایدبار
    function updateButtonPosition() {
        const isRTL = document.documentElement.dir === "rtl";
        const isSidebarOpen = sidebar.classList.contains("open");

        if (isRTL) {
            toggleBtn.style.left = isSidebarOpen ? "250px" : "0"; // در RTL دکمه به چپ می‌چسبد
            toggleBtn.style.right = ""; // مقدار right پاک می‌شود
        } else {
            toggleBtn.style.right = isSidebarOpen ? "250px" : "0"; // در LTR دکمه به راست می‌چسبد
            toggleBtn.style.left = ""; // مقدار left پاک می‌شود
        }
    }

    // تنظیم موقعیت دکمه در بارگذاری اولیه صفحه
    updateButtonPosition();

    // بستن سایدبار بعد از کلیک بر روی هر آیتم منو
    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            sidebar.classList.remove("open");  // بستن سایدبار
            updateButtonPosition();  // به‌روزرسانی موقعیت دکمه

            // تغییر آیکون دکمه به حالت اولیه
            const icon = toggleBtn.querySelector("i");
            icon.classList.replace("fa-chevron-up", "fa-chevron-down");
        });
    });

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("open");
        updateButtonPosition(); // بعد از تغییر وضعیت سایدبار، موقعیت دکمه را تنظیم کن

        // تغییر آیکون دکمه
        const icon = toggleBtn.querySelector("i");
        if (sidebar.classList.contains("open")) {
            icon.classList.replace("fa-chevron-down", "fa-chevron-up");
        } else {
            icon.classList.replace("fa-chevron-up", "fa-chevron-down");
        }
    });

    // هر زمان که دایرکشن تغییر کرد، موقعیت دکمه اصلاح شود
    const observer = new MutationObserver(() => {
        updateButtonPosition();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["dir"] });
});



// اسکرول و مخفی شدن btn

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const btn = document.querySelector(".btn");

    // تابعی برای بررسی موقعیت اسکرول و تغییر وضعیت دکمه
    function handleScroll() {
        const containerPosition = container.getBoundingClientRect(); // موقعیت کانتینر در صفحه
        const containerTop = containerPosition.top;

        // فقط در عرض صفحه کوچکتر از 768px این عملکرد فعال می‌شود
        if (window.innerWidth <= 768) {
            if (containerTop + container.offsetHeight <= 300) {
                // اگر ناحیه container کاملاً از صفحه خارج شده باشد
                btn.style.display = "none";  // دکمه مخفی می‌شود
            } else {
                // اگر ناحیه container هنوز در صفحه باشد
                btn.style.display = "flex";  // دکمه نمایش داده می‌شود
            }
        }
    }

    // فراخوانی تابع هنگام اسکرول
    window.addEventListener("scroll", handleScroll);

    // در ابتدا هم وضعیت اسکرول بررسی شود
    handleScroll();
});
























// /////////////عضویت

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const emailInput = document.getElementById('newsletter_placeholder');
    const successMessage = document.getElementById('newsletter_success_message');

    if (emailInput.value) {
        successMessage.classList.add('open');

        setTimeout(function() {
            successMessage.classList.remove('open');
        }, 3000);

        emailInput.value = ''; 
    } else {
        alert('لطفاً ایمیل خود را وارد کنید.');
    }
});
