$(function () {
	var svgDoc = false;
	var board = new Vivus( 'board', { type: 'async', duration: 150, start: 'autostart' }, function () {
		var a = document.getElementById( 'board' );
		svgDoc = a.contentDocument;
		$( svgDoc ).find( 'g > path, g > polygon' )
		.velocity( { properties: { fillOpacity: '.65', cursor: 'pointer' }, options: { duration: 500 } } )
		.mouseenter( function () {
			$( this ).velocity( { properties: { fill: '#e22' }, options: { duration: 150 } } );
		} )
		.mouseleave( function () {
			$( this ).velocity( { properties: { fill: '#fff' }, options: { duration: 150 } } );
		} );
	} );
} );
