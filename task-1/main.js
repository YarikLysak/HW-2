const $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
const gridItem = $('.grid-item');
let filters = {};

// filter items on button click
$('.filters').on('click', 'button', function() {
    let $this = $(this);
    // get group key
    let $buttonGroup = $this.parents('.filter-button-group');
    let filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    let filterValue = concatValues( filters );

    $grid.isotope({ filter: filterValue });
});

// flatten object by concatting values
function concatValues( obj ) {
    let value = '';
    for (let prop in obj) {
        value += obj[prop];
    }
    return value;
}
$('.filter-button-group').each( function( i, buttonGroup ) {
    const $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});
