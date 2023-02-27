( function( $ ) {	
	$(function(e) {        

        //DOM Objects
        var proSelect = $('#profile_selector')
        
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

        getProfiles()

    });
})(jQuery);