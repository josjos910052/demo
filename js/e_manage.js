$(function(){
    
    if($('#em_modify').find('#em_modify_content').length==0){
                $.get('員工修改.html',function(data){
                     $("#em_modify").html(data);
                });
                
                 $('head').append( $('<link rel="stylesheet" type="text/css" href="css/em_modify.css">'));
                
                $.getScript('js/em_modify.js');
            }
    
    
    $('#em_ul li').on('click',function(){
        var id=$(this).attr('id');
        if(!$(this).hasClass('em_li_sel')){
            $(this).addClass('em_li_sel').siblings().removeClass('em_li_sel');
        }
        var $add=$('#em_add'),
            $modify=$('#em_modify');
        if(id=='em_tab1'){            
            $modify.show().siblings().hide();
        }else{
            if($modify.find('#em_add_content').length==0){
                console.log("載入修改");
                $.get('員工新增.html',function(data){
                     $("#em_add").html(data);
                });
                
                 $('head').append( $('<link rel="stylesheet" type="text/css" href="css/em_add.css">'));
                
                $.getScript('js/em_add.js');
            }
            
            $add.show().siblings().hide();
        }
    })
});