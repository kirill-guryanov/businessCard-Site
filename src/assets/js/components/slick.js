const portfolio = $("#portfolio")

portfolio.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 2
});

$("#portfolioArrowPrev").on("click", function(event) {
    event.preventDefault()
    portfolio.slick("slickPrev")
})

$("#portfolioArrowNext").on("click", function(event) {
    event.preventDefault()
    portfolio.slick("slickNext")
})
