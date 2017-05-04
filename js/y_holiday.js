$(function(){
   $('#hd_year_info,#y_hd_cancel').on('click',function(){
            if(!$('#tab1').hasClass('sel_tab')){
                $('#tab1').addClass('sel_tab').siblings().removeClass('sel_tab');

                $('#hd_year_info').stop().fadeOut(300).hide(0);
            }
            $('#hd_content').css({
                    backgroundColor:'rgba(49, 56, 56, 0.78)'
            });
    });
    
    $('.y_hd_data_li').on('click',function(){
        $(this).toggleClass('y_hd_sel').siblings().removeClass('y_hd_sel');
        $('#y_hd_input_div').toggle();
    });
});