/**
 * Update date picker element
 * Used for static & dynamic added elements (when clone)
 */
function rwmb_update_date_picker()
{
	var $ = jQuery;

	$( '.rwmb-date' ).each( function()
	{
		var $this = $( this ),
			options = $this.data( 'options' );

		$this.siblings( '.ui-datepicker-append' ).remove();         // Remove appended text
		$this.removeClass( 'hasDatepicker' ).attr( 'id', '' ).datepicker( options );
	} );
}

jQuery( function( $ )
{
	$.datepicker.setDefaults( $.datepicker.regional[RWMB_Datepicker.lang] );
	rwmb_update_date_picker();
} );
