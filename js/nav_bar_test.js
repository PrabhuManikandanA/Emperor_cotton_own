document.addEventListener('DOMContentLoaded', function () {
    const banners = document.querySelectorAll('.announcement-block');
    const headers = document.querySelectorAll('.nav-menu-header');

    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        banners.forEach((banner, index) => {
            if (scrollTop > lastScrollTop) {
                banner.classList.add('hidden');
            } else {
                banner.classList.remove('hidden');
            }
        });

        headers.forEach((header, index) => {
            if (scrollTop > banners[index].clientHeight) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
