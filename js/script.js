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
scroll('#about, #about-small','.about');
scroll('#services, #services-small','.service');
scroll('#projects, #projects-small','.projects');
scroll('#testimonials, #testimonials-small','.testimonial');
scroll('#team, #team-small','.team');
scroll('#blog, #blog-small','.blog');
scroll('#contacts, #contact-small','.contact');