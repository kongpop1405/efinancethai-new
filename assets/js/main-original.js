$( function() {

    var wind = $(window);

    // wow = new WOW({
    //     boxClass: 'wow',
    //     animateClass: 'animated',
    //     offset: 200,
    //     mobile: false,
    //     live: false
    // });
    // wow.init();


    // -------- dark_light themes --------
    // $("#dark-icon").on("click" , function(){
    //     $("body").addClass("dark-theme");
    // })

    // $("#light-icon").on("click" , function(){
    //     $("body").removeClass("dark-theme");
    // })


    // -------- dark_light themes --------
    $(".subs").on("click" , function(){
        $(".nav-subs-card").addClass("show");
    })

    $(".nav-subs-card .cls").on("click" , function(){
        $(".nav-subs-card").removeClass("show");
    })

    // $("#toggle-icon").on("click", function() {
    //     $("body").toggleClass("dark-theme");
    //     const isDark = $("body").hasClass("dark-theme");

    //     if (isDark) {
    //         $("#dark-icon").addClass("active");
    //         $("#light-icon").removeClass("active");
    //     } else {
    //         $("#dark-icon").removeClass("active");
    //         $("#light-icon").addClass("active");
    //     }
    // });

    // $("#toggle-icon-1").on("click", function() {
    //     $("body").toggleClass("dark-theme");
    //     const isDark = $("body").hasClass("dark-theme");

    //     if (isDark) {
    //         $("#dark-icon-1").addClass("active");
    //         $("#light-icon-1").removeClass("active");
    //     } else {
    //         $("#dark-icon-1").removeClass("active");
    //         $("#light-icon-1").addClass("active");
    //     }
    // });

    // ---------- Swich Mode -----------

    // เมื่อเอกสารโหลดเสร็จ ทำการตรวจสอบ localStorage
    $(document).ready(function () {
        const isDark = localStorage.getItem("dark-theme") === "true"; // ดึงสถานะจาก localStorage
        if (isDark) {
            $("body").addClass("dark-theme");
            $("#dark-icon").addClass("active");
            $("#light-icon").removeClass("active");
            $(".dark-none").hide();  // ซ่อนข้อความ Light Mode
            $(".light-none").show(); // แสดงข้อความ Dark Mode
        } else {
            $("body").removeClass("dark-theme");
            $("#dark-icon").removeClass("active");
            $("#light-icon").addClass("active");
            $(".dark-none").show();  // แสดงข้อความ Light Mode
            $(".light-none").hide(); // ซ่อนข้อความ Dark Mode
        }
    });

    // Event สำหรับการสลับโหมด
    $("#toggle-icon").on("click", function () {
        $("body").toggleClass("dark-theme"); // สลับคลาส dark-theme
        const isDark = $("body").hasClass("dark-theme"); // ตรวจสอบว่ามี dark-theme หรือไม่

        // เปลี่ยนไอคอนตามสถานะ
        if (isDark) {
            $("#dark-icon").addClass("active");
            $("#light-icon").removeClass("active");
            $(".dark-none").hide();  // ซ่อนข้อความ Light Mode
            $(".light-none").show(); // แสดงข้อความ Dark Mode
            localStorage.setItem("dark-theme", "true"); // เก็บสถานะเป็น dark mode ใน localStorage
        } else {
            $("#dark-icon").removeClass("active");
            $("#light-icon").addClass("active");
            $(".dark-none").show();  // แสดงข้อความ Light Mode
            $(".light-none").hide(); // ซ่อนข้อความ Dark Mode
            localStorage.setItem("dark-theme", "false"); // เก็บสถานะเป็น light mode ใน localStorage
        }
    });


    // ---------- Swich Mode 1 -----------

    // เมื่อเอกสารโหลดเสร็จ ทำการตรวจสอบ localStorage
    // เมื่อเอกสารโหลดเสร็จ ทำการตรวจสอบ localStorage
    $(document).ready(function () {
        const isDark = localStorage.getItem("dark-theme") === "true"; // ดึงสถานะจาก localStorage
        if (isDark) {
            $("body").addClass("dark-theme");
            $("#dark-icon-1").addClass("active");
            $("#light-icon-1").removeClass("active");
            $(".dark-none").hide();  // ซ่อนข้อความ Light Mode
            $(".light-none").show(); // แสดงข้อความ Dark Mode
        } else {
            $("body").removeClass("dark-theme");
            $("#dark-icon-1").removeClass("active");
            $("#light-icon-1").addClass("active");
            $(".dark-none").show();  // แสดงข้อความ Light Mode
            $(".light-none").hide(); // ซ่อนข้อความ Dark Mode
        }
    });

    // Event สำหรับการสลับโหมด
    $("#toggle-icon-1").on("click", function () {
        $("body").toggleClass("dark-theme"); // สลับคลาส dark-theme
        const isDark = $("body").hasClass("dark-theme"); // ตรวจสอบว่ามี dark-theme หรือไม่

        // เปลี่ยนไอคอนตามสถานะ
        if (isDark) {
            $("#dark-icon-1").addClass("active");
            $("#light-icon-1").removeClass("active");
            $(".dark-none").hide();  // ซ่อนข้อความ Light Mode
            $(".light-none").show(); // แสดงข้อความ Dark Mode
            localStorage.setItem("dark-theme", "true"); // เก็บสถานะเป็น dark mode ใน localStorage
        } else {
            $("#dark-icon-1").removeClass("active");
            $("#light-icon-1").addClass("active");
            $(".dark-none").show();  // แสดงข้อความ Light Mode
            $(".light-none").hide(); // ซ่อนข้อความ Dark Mode
            localStorage.setItem("dark-theme", "false"); // เก็บสถานะเป็น light mode ใน localStorage
        }
    });

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // ---------- to top -----------

    wind.on("scroll", function() {

        var bodyScroll = wind.scrollTop(),
            toTop = $(".to_top")

        if (bodyScroll > 700) {

            toTop.addClass("show");

        } else {

            toTop.removeClass("show");
        }
    });
    
    $('.to_top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
        return false;
    });

/* ===============================  Preloader page  =============================== */

    // paceOptions = {
    //     ajax: true,
    //     document: true,
    //     eventLag: false
    // };

    // Pace.on('done', function () {
    //     $('#preloader').addClass("isdone");
    //     $('.loading').addClass("isdone");
    // });




    // -------- counter --------
        $('.counter').countUp({
            delay: 10,
            time: 2000
        });

        // -------- searching effect --------
        $(".search-btn-style1 , .search-btn-style2").on("click" , function(){
            $(".nav-search-style1 , .nav-search-style2").slideToggle();
            $(this).children(".sOpen-btn").fadeToggle();
            $(this).children(".sClose-btn").fadeToggle();

            $(this).children(".sOpen-btn").toggleClass("rotate-180");
        })

        // -------- searching effect --------
        $(".search-btn-style3").on("click" , function(){
            $(".nav-search-style3").slideToggle();
            $(this).children(".sOpen-btn-1").fadeToggle();
            $(this).children(".sClose-btn-1").fadeToggle();

            $(this).children(".sOpen-btn-1").toggleClass("rotate-180");
        })


    // -------- darkLight-btn --------

    $(".darkLight-btn").on("click", ".icon", function() {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".darkLight-btn-1").on("click", ".icon", function() {
        $(this).addClass("active").siblings().removeClass("active");
    })


    // -------- posts-tabs-style4 --------

    $('.tc-posts-tabs-style4 .tc-tabs-head a').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    var containerEl = document.querySelector('.tc-posts-tabs-style4 .tc-tabs-body');
    var mixer = mixitup(containerEl);

});

$(document).ready(function() {
    
    // --------- fav btn ---------
    $(".fav-btn").on("click" , function(){
        $(this).toggleClass("active");
    })

    // ------------ increase products -----------
    $(".qt-plus").click(function() {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
    });

    $(".qt-minus").click(function() {

        child = $(this).parent().children(".qt");

        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }

        $(this).parent().children(".full-price").addClass("minused");

    });
});

 // ---------- hover dropdown -----------
 const $dropdown = $(".dropdown");
 const $dropdownToggle = $(".dropdown-toggle");
 const $dropdownMenu = $(".dropdown-menu");
 const showClass = "show";

  
 $(window).on("load resize", function() {
   if (this.matchMedia("(min-width: 768px)").matches) {
     $dropdown.hover(
       function() {
         const $this = $(this);
         $this.addClass(showClass);
         $this.find($dropdownToggle).attr("aria-expanded", "true");
         $this.find($dropdownMenu).addClass(showClass);
       },
       function() {
         const $this = $(this);
         $this.removeClass(showClass);
         $this.find($dropdownToggle).attr("aria-expanded", "false");
         $this.find($dropdownMenu).removeClass(showClass);
       }
     );
   } else {
     $dropdown.off("mouseenter mouseleave");
   }
 });





// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-breaking-news-style1 .swiper-container', {
        spaceBetween: 8,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-slider-style1 .swiper-button-next',
            prevEl: '.tc-slider-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        // autoplay: false,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 1.2,
            },
            575: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2.2,
            },
            992: {
                slidesPerView: 3.75,
            },
            1200: {
                slidesPerView: 5.25,
            },
            1300: {
                slidesPerView: 6.25,
            }
        }
    });
    

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider4 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-slider4 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider1 .swiper-button-next',
            prevEl: '.tc-trends-news-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider3 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider3 .swiper-button-next',
            prevEl: '.tc-trends-news-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-latest-posts-slider711 .swiper-container', {
        // slidesPerView: 4,
        // spaceBetween: 15,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-latest-posts-slider711 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider711 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    // ------------ breaking-news slider -----------
    var swiper = new Swiper('.tc-google-stories-slider1 .swiper-container', {
        // slidesPerView: 4,
        // spaceBetween: 15,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-google-stories-slider1 .swiper-button-next',
            prevEl: '.tc-google-stories-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    // ------------ breaking-news slider 12 -----------
    var swiper = new Swiper('.tc-google-stories-slider12 .swiper-container', {
        // slidesPerView: 4,
        // spaceBetween: 15,å
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-google-stories-slider12 .swiper-button-next',
            prevEl: '.tc-google-stories-slider12 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-video-slider1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-video-slider1 .swiper-button-next',
            prevEl: '.tc-video-slider1 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-header-slider2 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-header-slider2 .swiper-button-next',
            prevEl: '.tc-header-slider2 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider1 -----------
    var swiper = new Swiper('.columnist-slider1 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider1 .swiper-button-next',
            prevEl: '.columnist-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ columnist slider -----------
    var swiper = new Swiper('.columnist-slider2 .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 10,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider2 .swiper-button-next',
            prevEl: '.columnist-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider2 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".tc-trends-news-slider2 .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ popular-topics slider -----------
    var swiper = new Swiper('.tc-popular-topics-slider2 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
                nextEl: '.tc-popular-topics-slider2 .swiper-button-next',
                prevEl: '.tc-popular-topics-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });
    
    // ------------ columnist slider -----------
    var swiper = new Swiper('.tc-hot-videos-slider2 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-hot-videos-slider2 .swiper-button-next',
            prevEl: '.tc-hot-videos-slider2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ home3 header slider -----------
    var swiper = new Swiper('.tc-header-slider-style3 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        speed: 1000,
        pagination: {
            el: ".tc-header-slider-style3 .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-header-slider-style3 .swiper-button-next',
            prevEl: '.tc-header-slider-style3 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ popular-categories slider -----------
    var swiper = new Swiper('.tc-popular-categories-slider3 .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-popular-categories-slider3 .swiper-button-next',
            prevEl: '.tc-popular-categories-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            }
        }
    });

    // ------------ editor’s-choice slider -----------
    var swiper = new Swiper('.tc-editors-choice-slider3 .swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-editors-choice-slider3 .swiper-button-next',
            prevEl: '.tc-editors-choice-slider3 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-latest-posts-slider3 -----------
    var swiper = new Swiper('.tc-latest-posts-slider3 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-latest-posts-slider3 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider3 .swiper-button-prev',
        },
        scrollbar: {
            el: '.tc-latest-posts-slider3 .swiper-scrollbar',
            hide: false,
            clickable: true,
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-editors-pick-slider .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 60,
        speed: 1000,
        pagination: {
            el: ".tc-editors-pick-slider .swiper-pagination",
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider5 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-style5 .swiper-button-next',
            prevEl: '.tc-breaking-news-style5 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ tc-editors-pick-slider -----------
    var swiper = new Swiper('.tc-breaking-news-slider6 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-style6 .swiper-button-next',
            prevEl: '.tc-breaking-news-style6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ home5 overlay slider -----------
    var swiper = new Swiper('.tc-post-overlay-slider5 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-post-overlay-slider5 .swiper-button-next',
            prevEl: '.tc-post-overlay-slider5 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ home5 videos slider -----------
    var swiper = new Swiper('.tc-post-videos-slider5 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-post-videos-slider5 .swiper-button-next',
            prevEl: '.tc-post-videos-slider5 .swiper-button-prev',
        },
        observer: true,
        observeParents: true,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-trends-news-slider6 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-trends-news-slider6 .swiper-button-next',
            prevEl: '.tc-trends-news-slider6 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-latest-posts-slider4 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 50,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-latest-posts-slider4 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider4 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // esg
    var swiper = new Swiper('.tc-latest-posts-slider5 .swiper-container', {
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.tc-latest-posts-slider5 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider5 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.3,
                spaceBetween: 16
            },
            575: {
                slidesPerView: 2.3,
                spaceBetween: 16
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 16
            },
            991: {
                slidesPerView: 3.5,
                spaceBetween: 16
            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },
            1300: {
                slidesPerView: 3.5,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4.5,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 5.5,
                spaceBetween: 30
            }
        }
    });

    var swiper = new Swiper('.tc-latest-posts-slider555 .swiper-container', {
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.tc-latest-posts-slider555 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider555 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false, // Disable loop
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            787: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    

    // courses
    var swiper = new Swiper('.tc-latest-posts-slider511 .swiper-container', {
        spaceBetween: 30,
        speed: 2000,
        navigation: {
            nextEl: '.tc-latest-posts-slider511 .swiper-button-next',
            prevEl: '.tc-latest-posts-slider511 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1600: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
    
    // marketfocus
    var swiper = new Swiper('.tc-breaking-news-slider45 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-slider45 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider45 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        // autoplay: false,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            575: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // คอร์สเรียนยอดนิยม
    var swiper = new Swiper('.tc-breaking-news-slider456 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-breaking-news-slider456 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider456 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        // autoplay: false,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 16,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ results-slider1 slider -----------
    var swiper = new Swiper('.results-slider1 .swiper-container', {
        // direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.results-slider1 .swiper-button-next',
            prevEl: '.results-slider1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
    });

    // ------------ tc-featured-news slider8 -----------
    var swiper = new Swiper('.tc-featured-news-slider8 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 10,
        speed: 1000,
        pagination: {
            el: ".tc-featured-news-slider8 .swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-featured-news-slider8 .swiper-button-next',
            prevEl: '.tc-featured-news-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-featured-news slider8 -----------
    var swiper = new Swiper('.tc-breaking-news-slider8 .swiper-container', {
        // slidesPerView: 3,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: ".tc-breaking-news-slider8 .swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: '.tc-breaking-news-slider8 .swiper-button-next',
            prevEl: '.tc-breaking-news-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.columnist-slider8 .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 80,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.columnist-slider8 .swiper-button-next',
            prevEl: '.columnist-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-sponsored-slider8 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-sponsored-slider8 .swiper-button-next',
            prevEl: '.tc-sponsored-slider8 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-popular-posts-blog-slider9 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-popular-posts-blog-slider9 .swiper-button-next',
            prevEl: '.tc-popular-posts-blog-slider9 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-next-prev-post-slider .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 60,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-next-prev-post-slider .swiper-button-next',
            prevEl: '.tc-next-prev-post-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            }
        }
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-single-post-slider-style1 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: '.tc-single-post-slider-style1 .swiper-pagination',
            type: 'fraction',
          },
        navigation: {
            nextEl: '.tc-single-post-slider-style1 .swiper-button-next',
            prevEl: '.tc-single-post-slider-style1 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-contact-slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        pagination: {
            el: '.tc-contact-slider .swiper-pagination',
            clickable : true,
            },
        navigation: {
            nextEl: '.tc-contact-slider .swiper-button-next',
            prevEl: '.tc-contact-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });

    // ------------ columnist slider8 -----------
    var swiper = new Swiper('.tc-breaking-news-slider2 .swiper-container', {
        // slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: true,
        loop: false,
        scrollbar: {
            el: '.tc-breaking-news-slider2 .swiper-scrollbar',
            hide: false,
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ gallery-thumbs-slider -----------
    var galleryThumbs = new Swiper('.product .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 6,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
    });
    var galleryTop = new Swiper('.product .gallery-top', {
        spaceBetween: 10,
        navigation: false,
        thumbs: {
            swiper: galleryThumbs
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.related-products-slider .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 24,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.related-products-slider .swiper-button-next',
            prevEl: '.related-products-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.tc-google-stories-slider10 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 15,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-google-stories-slider10 .swiper-button-next',
            prevEl: '.tc-google-stories-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            }
        }
    });

    // ------------ tc-about-history-slider -----------
    var swiper = new Swiper('.tc-about-history-slider .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 60,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-about-history .swiper-button-next',
            prevEl: '.tc-about-history .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ related-postes-slider -----------
    var swiper = new Swiper('.tc-trends-news-slider10 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-trends-news-slider10 .swiper-button-next',
            prevEl: '.tc-trends-news-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            480: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-header-slider10 .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-header-slider10 .swiper-button-next',
            prevEl: '.tc-header-slider10 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    // ------------ trends-news slider -----------
    var swiper = new Swiper('.tc-hot-videos-slider11 .swiper-container', {
        slidesPerView: 1,
        effect: "fade",
        spaceBetween: 0,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-hot-videos-slider11 .swiper-button-next',
            prevEl: '.tc-hot-videos-slider11 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
    });

    
});



// ------------ loader -----------
$(window).on("load", function() {
    $(".loading-page").fadeOut(1000);
});


// ------------ working in desktop -----------
if ($(window).width() > 991) {
    $('.parallaxie').parallaxie({
    });
}

// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownToggle = document.getElementById('navbarDropdown1');
//     var parentLi = dropdownToggle.parentElement;
  
//     dropdownToggle.addEventListener('click', function (e) {
//       e.preventDefault();
//       if (parentLi.classList.contains('show')) {
//         parentLi.classList.remove('show');
//         this.setAttribute('aria-expanded', 'false');
//       } else {
//         // Close any open dropdowns
//         var openDropdowns = document.querySelectorAll('.nav-item.dropdown-2.show');
//         openDropdowns.forEach(function (dropdown) {
//           dropdown.classList.remove('show');
//           dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
//         });
  
//         // Open the clicked dropdown
//         parentLi.classList.add('show');
//         this.setAttribute('aria-expanded', 'true');
//       }
//     });
  
//     // Close dropdowns if clicking outside
//     document.addEventListener('click', function (e) {
//       if (!dropdownToggle.contains(e.target) && !parentLi.contains(e.target)) {
//         parentLi.classList.remove('show');
//         dropdownToggle.setAttribute('aria-expanded', 'false');
//       }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggles = document.querySelectorAll('.nav-item.dropdown-2 .dropdown-toggle');

    dropdownToggles.forEach(function (dropdownToggle) {
        var parentLi = dropdownToggle.parentElement;

        dropdownToggle.addEventListener('click', function (e) {
            e.preventDefault();
            if (parentLi.classList.contains('show')) {
                parentLi.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
            } else {
                // Close any open dropdowns
                var openDropdowns = document.querySelectorAll('.nav-item.dropdown-2.show');
                openDropdowns.forEach(function (dropdown) {
                    dropdown.classList.remove('show');
                    dropdown.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
                });

                // Open the clicked dropdown
                parentLi.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
            }
        });

        // Close dropdowns if clicking outside
        document.addEventListener('click', function (e) {
            if (!dropdownToggle.contains(e.target) && !parentLi.contains(e.target)) {
                parentLi.classList.remove('show');
                dropdownToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            updateStockInfo();  // Call updateStockInfo after selection change
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
document.addEventListener("click", closeAllSelect);

function updateStockInfo() {
    const stockSelect = document.getElementById('stock-select').value;
    
    let status, statusClass, arrowClass, arrowDirection, price, priceChange, pricePercentChange, value, volume;
    
    switch(stockSelect) {
        case 'SET':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '1,327.95';
            priceChange = '+1.25';
            pricePercentChange = '(+0.10%)';
            value = '7,090.28';
            volume = '260,836';
            break;
        case 'SET50':
            status = 'Close';
            statusClass = 'border-danger-set';
            arrowClass = 'text-danger';
            arrowDirection = 'M8 11.25L0.205771 0H15.7942L8 11.25Z';
            price = '980.55';
            priceChange = '-0.75';
            pricePercentChange = '(-0.08%)';
            value = '5,678.34';
            volume = '200,543';
            break;
        case 'SET50FF':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '1,100.25';
            priceChange = '+0.50';
            pricePercentChange = '(+0.05%)';
            value = '6,123.45';
            volume = '250,123';
            break;
        case 'SET100':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '1,540.20';
            priceChange = '+2.50';
            pricePercentChange = '(+0.16%)';
            value = '8,345.67';
            volume = '300,456';
            break;
        case 'SET100FF':
            status = 'Close';
            statusClass = 'border-danger-set';
            arrowClass = 'text-danger';
            arrowDirection = 'M8 11.25L0.205771 0H15.7942L8 11.25Z';
            price = '1,120.75';
            priceChange = '-1.00';
            pricePercentChange = '(-0.09%)';
            value = '7,456.78';
            volume = '270,678';
            break;
        case 'sSET':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '950.65';
            priceChange = '+0.75';
            pricePercentChange = '(+0.08%)';
            value = '5,789.01';
            volume = '220,345';
            break;
        case 'SETCLMV':
            status = 'Close';
            statusClass = 'border-danger-set';
            arrowClass = 'text-danger';
            arrowDirection = 'M8 11.25L0.205771 0H15.7942L8 11.25Z';
            price = '1,210.55';
            priceChange = '-0.50';
            pricePercentChange = '(-0.04%)';
            value = '6,234.56';
            volume = '240,567';
            break;
        case 'SETHD':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '1,320.80';
            priceChange = '+1.10';
            pricePercentChange = '(+0.09%)';
            value = '7,890.12';
            volume = '280,789';
            break;
        case 'SETESG':
            status = 'Close';
            statusClass = 'border-danger-set';
            arrowClass = 'text-danger';
            arrowDirection = 'M8 11.25L0.205771 0H15.7942L8 11.25Z';
            price = '1,140.45';
            priceChange = '-0.60';
            pricePercentChange = '(-0.05%)';
            value = '5,432.10';
            volume = '230,456';
            break;
        case 'mai':
            status = 'Open';
            statusClass = 'border-success-set';
            arrowClass = 'text-success';
            arrowDirection = 'M8 0L15.7942 11.25H0.205771L8 0Z';
            price = '1,020.50';
            priceChange = '+0.80';
            pricePercentChange = '(+0.07%)';
            value = '4,567.89';
            volume = '210,123';
            break;
    }

    const statusElement = document.getElementById('status-set');
    statusElement.innerText = status;
    statusElement.className = statusClass + ' me-3';

    const arrowElement = document.getElementById('arrow-set');
    arrowElement.classList.remove('text-success', 'text-danger');
    arrowElement.classList.add(arrowClass);
    arrowElement.children[0].setAttribute('d', arrowDirection);

    const priceElement = document.getElementById('price-set');
    const priceChangeElement = document.getElementById('price-2-set');
    const pricePercentChangeElement = document.getElementById('price-3-set');

    priceElement.classList.remove('text-success', 'text-danger');
    priceChangeElement.classList.remove('text-success', 'text-danger');
    pricePercentChangeElement.classList.remove('text-success', 'text-danger');

    priceElement.classList.add(arrowClass);
    priceChangeElement.classList.add(arrowClass);
    pricePercentChangeElement.classList.add(arrowClass);

    priceElement.innerText = price;
    priceChangeElement.innerText = priceChange;
    pricePercentChangeElement.innerText = pricePercentChange;
    document.getElementById('price-4-set').innerText = value;
    document.getElementById('price-5-set').innerText = volume;
}

// Function to format date and time
function formatDate(date) {
    const days = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
    const months = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    
    const day = days[date.getDay()];
    const dateNumber = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear() + 543; // Convert to Buddhist year
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `ล่าสุด ${dateNumber} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}

// Function to update current date and time
function updateCurrentDateTime() {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    // Update both elements
    const datetimeMobileElement = document.getElementById('current-datetime-mobile');
    const datetimeDesktopElement = document.getElementById('current-datetime-desktop');

    if (datetimeMobileElement) {
        datetimeMobileElement.innerText = formattedDate;
    } else {
        console.error("Element with id 'current-datetime-mobile' not found.");
    }

    if (datetimeDesktopElement) {
        datetimeDesktopElement.innerText = formattedDate;
    } else {
        console.error("Element with id 'current-datetime-desktop' not found.");
    }
}

function toggleBackgroundColor() {
    const elements = ['price-set', 'price-2-set', 'price-3-set'];
    const body = document.body;
    const isDarkTheme = body.classList.contains('dark-theme');
    const color = isDarkTheme ? '#1C2D52' : '#d9d9d9'; // Set color based on theme

    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('background-transition'); // Add transition class
            element.style.backgroundColor = color;
            setTimeout(() => {
                element.style.backgroundColor = '';
            }, 500); // Remove background color after 1 second
        }
    });
}

function cycleDropdownOptions() {
    const selectElement = document.getElementById('stock-select');
    if (selectElement) {
        // Get the current selected index and calculate the new index
        let selectedIndex = selectElement.selectedIndex;
        selectedIndex = (selectedIndex + 1) % selectElement.options.length;
        selectElement.selectedIndex = selectedIndex;

        // Update the display for custom dropdown
        updateCustomDropdown(selectElement);

        // Dispatch a change event to ensure the dropdown updates correctly
        const event = new Event('change', { bubbles: true });
        selectElement.dispatchEvent(event);

        // Update stock info based on new selection
        updateStockInfo();
    }
}

function updateCustomDropdown(selectElement) {
    // Update the custom dropdown display
    const selectedDiv = document.querySelector('.select-selected');
    const itemsDiv = document.querySelector('.select-items');

    if (selectedDiv && itemsDiv) {
        // Update selected option
        selectedDiv.textContent = selectElement.options[selectElement.selectedIndex].text;

        // Update the selected class
        const optionDivs = itemsDiv.querySelectorAll('div');
        optionDivs.forEach(div => {
            div.classList.remove('same-as-selected');
            if (div.textContent === selectedDiv.textContent) {
                div.classList.add('same-as-selected');
            }
        });
    }
}

// Update stock info initially and every time selection changes
updateStockInfo();

// Update the current date and time on page load and every 5 seconds
updateCurrentDateTime();
setInterval(updateCurrentDateTime, 5000);

// Toggle background color with transition every 5 seconds
setInterval(toggleBackgroundColor, 5000);

// Cycle through dropdown options every 5 seconds
setInterval(cycleDropdownOptions, 5000);

$(document).ready(function () {
    $('.dropdown-toggle').dropdown();
});





  