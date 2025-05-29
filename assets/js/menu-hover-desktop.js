$(window).on("load resize", function() {
    let closeTimer;

    if (window.innerWidth >= 1194) {
        $('.dropdown-2').hover(
            function() {
                clearTimeout(closeTimer);

                // ปิดเมนูอื่นทั้งหมดก่อน
                $('.dropdown-2').not(this).removeClass('show')
                    .find('.dropdown-toggle').attr('aria-expanded', 'false')
                    .end().find('.dropdownMenu').removeClass('show');

                // เปิดเมนูใหม่ที่ hover
                $(this).addClass('show');
                $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
                $(this).find('.dropdownMenu').addClass('show');
            },
            function() {
                const $dropdown = $(this);
                closeTimer = setTimeout(function() {
                    $dropdown.removeClass('show');
                    $dropdown.find('.dropdown-toggle').attr('aria-expanded', 'false');
                    $dropdown.find('.dropdownMenu').removeClass('show');
                }, 400); // ปิดเมนูช้าลง 400ms
            }
        );

        // ✅ เพิ่มส่วนนี้ให้ลิงก์ทำงาน
        $('.dropdown-2 .dropdown-toggle').off('click').on('click', function(e) {
            const href = $(this).attr('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });

    } else {
        // ปิดการทำงานของ hover ถ้าหน้าจอเล็กกว่า 1194px
        $('.dropdown-2').off('mouseenter mouseleave');
        $('.dropdown-2').removeClass('show')
            .find('.dropdown-toggle').attr('aria-expanded', 'false')
            .end().find('.dropdownMenu').removeClass('show');
    }
});