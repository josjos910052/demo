$(function(){
    $date=$('#hd_input_month');
    hd_make($date);
    
    $('#hd_input_month').change(function(){
        hd_make($(this));
        
    });
    
    $('#hd_n_month').on('click',function(){
        var $d=$('#hd_input_month');
       var date= $d.val();
        var d=date.split('-');
        var year=d[0],month=d[1];
        month++;
        if(month==13){
            year++;
            month=1;
        }
        if(month<10){
            month="0"+month;
        }
        $d.val(year+'-'+month);
        hd_make($d);
    });
    $('#hd_p_month').on('click',function(){
        var $d=$('#hd_input_month');
       var date= $d.val();
        var d=date.split('-');
        var year=d[0],month=d[1];
        month--;
        if(month==0){
            year--;
            month=12;
        }
        if(month<10){
            month="0"+month;
        }
        $d.val(year+'-'+month);
        hd_make($d);
    });
    
    $('#tab2').on('click',function(){
        if(!$(this).hasClass('sel_tab')){
            $(this).addClass('sel_tab').siblings().removeClass('sel_tab');
            
            $.get('年度假日.html',function(data){
                    $('#hd_year').html(data);
            });
            $('head').append( $('<link rel="stylesheet" type="text/css" href="css/y_holiday.css">'));
            $.getScript('js/y_holiday.js');
        };
        //顯示年度假日填寫
        $('#hd_year_info').stop().fadeIn(300).show(0);
            $('#hd_content').css({
                backgroundColor:'#777777'
        });
        
           //關閉年度假日填寫
        
    });
    
    
    //假日填寫
    $('.hd_modify').on('click',function(){
       var date=$(this).attr('date');
        $('#hd_modify_cover_div').stop().fadeIn(500).show().find('#hd_modify_date_span').html(date);
      
        $('#hd_modify_cover_div,#hd_cancel').on('click',function(){
             $('#hd_modify_cover_div').stop().fadeOut(500).hide(1);
        });
        
    });
    
    
 
    
    $('#hd_year,#hd_modify_div').on('click',function(e){
        e.stopPropagation();        
    });
    
    
});

//輸出月曆日期
function hd_make($date){
    var d=new Date(),p_d=new Date(),n_d=new Date();
    d.setTime(Date.parse($date.val()));
    p_d.setTime(Date.parse($date.val()));
    n_d.setTime(Date.parse($date.val()));
    n_d.setMonth((d.getMonth()+1)%12);
    
    var year=d.getFullYear(),
        month=d.getMonth()+1,
        start_day=d.getDay();
    
    n_d.setDate(0);
    end_date=n_d.getDate();
    
    var p_date,
        now_date=1,
        n_date=1;
    
    if(start_day!=0){
        p_d.setDate(-(d.getDay()-1));
        p_date=p_d.getDate();
    }

    var tr=$('#hd_date table tr');
    while((end_date+start_day)>((tr.length-1)*7)){
        
        var $last_tr=$('#hd_date table tr:last');
        var clone=$last_tr.clone();
        $last_tr.after(clone);
        
        tr=$('#hd_date table tr');
    }
    while((end_date+start_day)<=((tr.length-2)*7)){
        var $last_tr=$('#hd_date table tr:last');
        $last_tr.remove();
        tr=$('#hd_date table tr');
    }
    
    var m_day=$('.hd_day_td');
    
    m_day.each(function(index){
        var $span=$(this).find('span');
        if(index<start_day){
            $(this).find('input').attr('date',year+'-'+(month-1)+'-'+p_date);
            $span.text(p_date++).css({                
                color:'rgba(145, 152, 144, 0.62)'
            });    
        }else if(index<end_date+start_day){
            $(this).find('input').attr('date',year+'-'+month+'-'+now_date);
            $span.text(now_date++).css({
                color:'rgba(42, 184, 196, 0.24)'
            });    
        }else{
            $(this).find('input').attr('date',year+'-'+(month+1)+'-'+n_date);
            $span.text(n_date++).css({
                color:'rgba(124, 137, 123, 0.7)'
            });    
        }
        
    });   
    btn_hover($('.hd_day_td'));
}

function btn_hover($td){
    $td.hover(
        
        function(){
            $(this).find('.hd_modify').show().stop().animate({right:0.1+'rem'},100);
        },function(){
        
            $(this).find('.hd_modify').stop().animate({right:-2.1+'rem'},300,function(){
                 $(this).hide();
            });
    });
}



