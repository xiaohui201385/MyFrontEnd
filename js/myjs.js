$('#treeMenu').on('click', 'a', function() {
    $('#treeMenu li.active').removeClass('active');
    $(this).closest('li').addClass('active');
});