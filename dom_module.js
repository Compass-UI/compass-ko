define(['jquery'], function(){

    var vm = {
        id: '123',
        fname: 'David',
        lname:  'Shams'
    }
    $('#id').text(vm.id);
    $('#fname').val(vm.fname);
    $('#lname').val(vm.lname);
})

