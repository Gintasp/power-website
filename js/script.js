//toggle menu on small screens
$('.burger').on('click',function(){
    $('.menu-small').toggleClass('visible');
    $('.hero-heading').toggleClass('absolute');
});

//define menu scrolling function;
function scroll(from, to){
    $(from).on('click',function(){
        $('html, body').animate({
            scrollTop: $(to).offset().top
        })
    })
};

//scroll to elements
scroll('#about','.about');
scroll('#services','.service');
scroll('#projects','.projects');
scroll('#testimonials','.testimonial');
scroll('#team','.team');
scroll('#blog','.blog');
scroll('#contacts','.contact');