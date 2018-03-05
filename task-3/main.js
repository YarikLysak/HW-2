const article = $('.article');
const nav = $('.navigation');
const topBtn = $('#myBtn');
const nav_height = nav.outerHeight();

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    const cur_pos = $(this).scrollTop();

    //btn-top
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.css('display', 'block');
    } else {
        topBtn.css('display', 'none');
    }

    //active article
    article.each(function() {
        const top = $(this).offset().top - nav_height - 40;
        const bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('is-active');
            article.removeClass('is-active');
            console.log($(this));
            $(this).addClass('is-active');
            nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('is-active');
        }
    });
}

topBtn.click(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
