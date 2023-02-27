( function( $ ) {	
	$(function(e) {        

        //DOM Objects
        var proSelect = $('#profile_selector')
        var userSelect = $('#usuario_login')
        var mainUsers = $('#main_users');
        
        function getProfiles() {
            var route = '/profiles';
            
            $.ajax({
                url : route,
                type : 'GET'
            }).done(function(res){
                var dataRes = res.data;
                $(proSelect).removeAttr('disabled');
                $(proSelect).empty();
                $(proSelect).append('<option value="0">Seleccione el perfil</option>');
                for(i=0;i<=dataRes.length-1;i++) {
                    var optionPro = $('<option />', { value : dataRes[i].id_perfil, text : dataRes[i].perfil });
                    $(proSelect).append(optionPro);
                }
            });
        }

        function getUsers() {
            $(userSelect).prop('disabled', true);
            var route = '/users';
            
            $.ajax({
                url : route,
                type : 'GET'
            }).done(function(res){
                var dataRes = res.data;
                $(userSelect).empty();
                $(userSelect).append('<option value="0">Seleccione el usuario</option>');
                for(i=0;i<=dataRes.length-1;i++) {
                    var optionSel = $('<option />', { style: 'display: none', class : 'usuarios perfil-'+dataRes[i].id_perfil, text : dataRes[i].usuario_login });
                    $(userSelect).append(optionSel);
                }
            });
        }

        function filterByProfile() {
            $(mainUsers).find('.usuarios').hide();
            var proID = $(proSelect).val();
            
            if(proID == '0') {
                $(userSelect).prop('disabled', true);
            } else {
                $(userSelect).prop('disabled', false);
                $(mainUsers).find('.usuarios.perfil-'+proID).show();
            }
        }

        getProfiles()
        getUsers()

        $(proSelect).on('change', function(e){ filterByProfile(); });

    });
})(jQuery);