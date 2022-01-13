$('#navbar-collapse').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
});

//Unstack menu when not collapsed
$('#navbar-collapse').on('hide.bs.collapse', function() {
    $('.nav-pills').removeClass('nav-stacked');
});