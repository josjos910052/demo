$(function(){
    $allInput=$('#info_content tr input:disabled');
    $btn_modify=$('#btn_modify');
    state()
    $btn_modify.on('click',function(){
        $allInput.each(function(){
            $(this).attr('disabled',false);
        }).css({
            backgroundColor: 'rgb(105, 99, 99)'
        });
        
        
        $('#goTime').hide();
        $('#state').attr('rowspan',1);
        $('#state_sel').show();
        $('#state_result').hide();
        
        $btn_ok="<input id='ok' type='button' value='提交'>";
        $btn_reset="<input id='reset' type='reset' value='重設'>";
        
        $(this).after($btn_reset).after($btn_ok).hide();
        $('#no').show();
        
        $('#ok').on('click',function(){
            $('#check').show();
            });
        $('#cancel').on('click',function(){
            $('#check').hide();
        });
        
        $('#no').on('click',function(){
            $allInput.each(function(){
                $(this).attr('disabled',true);
            }).css({
                backgroundColor: 'black'
            });


            $('#goTime').show();
            $('#state').attr('rowspan',2);
            $('#state_sel').hide();
            $('#state_result').show();
            
            $btn_modify.show();
            $('#ok').remove();
            $('#reset').remove();
            $('#no').hide();
            state();
        });
        
    });
    
   
    $('#div_cancel').on('click',function(e){
        e.stopPropagation();        
    });
});

function state(){
    state_value=$('#state_result').html();
    isGone=$('#state_sel [name="isGone"]').val();
    
    if("離職"==state_value){
        $('#state_sel [value="true"]').attr('checked',true);
    }else{
        $('#state').attr('rowspan',1);
        $('#goTime').hide();
    }
    
    
}

