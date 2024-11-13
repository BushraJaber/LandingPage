// استدعاء العناصر من DOM
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
const scrollToTopButton = document.getElementById('scrollToTop');

// إنشاء عناصر التنقل ديناميكياً لكل قسم
sections.forEach((section) => {
    const listItem = document.createElement('li');
    const sectionId = section.getAttribute('id');
    const sectionName = section.getAttribute('data-nav');

    listItem.innerHTML = `<a href="#${sectionId}" class="menu__link">${sectionName}</a>`;
    
    listItem.addEventListener('click', (event) => {
        event.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });

    navbarList.appendChild(listItem);
});

// تحديث حالة القسم النشط عند التمرير
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const navItem = navbarList.querySelector(`[href="#${section.id}"]`);

        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add('active');
            navItem.classList.add('active');
        } else {
            section.classList.remove('active');
            navItem.classList.remove('active');
        }
    });

    // إظهار زر العودة للأعلى عند التمرير لأسفل
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// التمرير للأعلى عند النقر على الزر
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// تحديث حالة القسم النشط عند التمرير
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        // تحقق من إذا كان القسم في الجزء المرئي من الشاشة
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            section.classList.add('active'); // إضافة الفئة النشطة
        } else {
            section.classList.remove('active'); // إزالة الفئة النشطة
        }
    });

    // إظهار زر العودة للأعلى عند التمرير لأسفل
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
