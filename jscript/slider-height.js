setCarouselHeight('#carouselExampleIndicators');

function setCarouselHeight(id)
{
    var slideHeight = [];
    $(id+' .carousel-item').each(function()
                        {
        // add all slide heights to an array
        slideHeight.push($(this).height());
    });

    // find the tallest item
    max = Math.max.apply(null, slideHeight);

    // set the slide's height
    $(id+' .content').each(function()
                                    {
        $(this).css('height',max + 20 +'px');
    });
}