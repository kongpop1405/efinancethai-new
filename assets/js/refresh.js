const isDarkMode = () => document.body.classList.contains('dark-theme');

const getIconSrcByTheme = () =>
    isDarkMode() ?
    'assets/img/home-efinance/refresh.svg' // dark mode
    :
    'assets/img/home-efinance/refresh-w.svg'; // light mode

const setupRefreshIcons = () => {
    document.querySelectorAll('.refresh-btn').forEach((btn) => {
        const icon = btn.querySelector('.icon-refresh');

        // ตั้งค่าตามธีมตอนโหลด
        icon.src = getIconSrcByTheme();

        // Hover = สีฟ้า
        btn.addEventListener('mouseenter', () => {
            icon.src = 'assets/img/home-efinance/refresh.svg';
        });

        // Mouseleave = กลับตามธีมปัจจุบัน
        btn.addEventListener('mouseleave', () => {
            icon.src = getIconSrcByTheme();
        });

        // Click = หมุน
        btn.addEventListener('click', () => {
            icon.classList.add('spin');
            setTimeout(() => icon.classList.remove('spin'), 700);
        });
    });
};

// ✅ เรียกตอนโหลด
setupRefreshIcons();

// ✅ เฝ้าดูการเปลี่ยน class ของ <body> (ธีมเปลี่ยน)
const observer = new MutationObserver(() => {
    document.querySelectorAll('.icon-refresh').forEach((icon) => {
        icon.src = getIconSrcByTheme();
    });
});

// ✅ เริ่มสังเกต dark/light mode
observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
});