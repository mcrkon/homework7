var BASE_URL = 'https://pacific-meadow-64112.herokuapp.com/data-api/mcrkon';
var collection = 'mcrkon';

$('#create-submit').on( 'click', handleCreateForm );
$('#read-list').on( 'click', handleReadList );
$('#read-submit').on( 'click', handleReadForm );
$('#update-submit').on( 'click', handleUpdateForm );
$('#delete-submit').on( 'click', handleDeleteForm );

function reportResponse( response ) {
    $('#response').text( JSON.stringify( response, null, 4 ) );
}


function handleCreateForm( evt ) {
    evt.preventDefault( );
    var name = $('#create-name').val();
    var age = $('#create-age').val();
    var person = {
        name: name,
        age: age
    };
    createPerson( person );

  function createPerson( person ) {
    clearReport( );
    $.ajax( BASE_URL + collection,
    {
        method: 'POST',
        data: person,
        success: reportResponse,
        error: reportAjaxError
    } );
}
  
  function getPerson( id ) {
    clearReport( );
    $.ajax( BASE_URL + collection + '/' + id,
    {
        method: 'GET',
        success: reportResponse,
        error: reportAjaxError
    } );
}
  function deletePerson( id ) {
    clearReport( );
    $.ajax( BASE_URL + collection + '/' + id,
    {
        method: 'DELETE',
        success: reportResponse,
        error: reportAjaxError
    } );
}