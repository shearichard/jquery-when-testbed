$( document ).ready(function() {
    console.log('V0');
    testWhenThen();
});
testWhenThen = function(){
    var url = 'http://requestb.in/ukxas0uk'
    arrJqxhr = $.get(url)
                    .done(function(objIndicators, textStatus, jqXHR) {
                        $.each( processedObjIndicators, function( key, value ) {
                            console.log( key + ": " + value.id_tag );
                        });
                    })
                    .fail(function() {
                        console.log( "populateCurrentlySelectedIndicators : .fail fired" );
                        console.log( "Error while fetching currently selected indicators." );
                        alert(".fail within populateCurrentlySelectedIndicators: Please report this error");
                    })
                    .always(function() {
                        console.log( "populateCurrentlySelectedIndicators : .always fired" );
                    });

}
