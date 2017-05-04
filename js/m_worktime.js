$(function(){
    
    $('#m_wt_search_select').change(function(){
        var value=$(this).val();
        if(value=='week'){
            $('#m_wt_week_input').show();
            $('#m_wt_search_em').hide();
        }else{
            $('#m_wt_week_input').hide();
            $('#m_wt_search_em').show();
        }
    });
    
    $('#m_wt_result_title div:last').on('click',function(){
       var $all_checkbox=$('.m_wt_li_span input');
        
        
        if($(this).html()=='全選'){
            $all_checkbox.prop('checked',true);
            $(this).html('全部取消');
        }else{
            $all_checkbox.prop('checked',false);
            $(this).html('全選');
        }
    });
    
});