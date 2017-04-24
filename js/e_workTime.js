$(function(){
    $date=$('#wt_input_month');
    
    
    m($date);
    $('#wt_input_month').change(function(){
         m($(this));
        alert($(this).val());
    });
    $('#wt_n_monthuu').on('click',function(){
        var $d=$('#wt_input_month');
       var date= $d.val();
        alert(date);
        var d=date.split(/[/-:]/);
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
        m($d);
    });
    $('#wt_p_monthuu').on('click',function(){
        var $d=$('#wt_input_month');
       var date= $d.val();
        var d=date.split(/[/-:]/);
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
        m($d);
    });
    
});

function m($date){
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

    var tr=$('#wt_data table tr');
    while((end_date+start_day)>((tr.length-1)*7)){
        
        var $last_tr=$('#wt_data table tr:last');
        var clone=$last_tr.clone();
        $last_tr.after(clone);
        
        tr=$('#wt_data table tr');
    }
    while((end_date+start_day)<=((tr.length-2)*7)){
        var $last_tr=$('#wt_data table tr:last');
        $last_tr.remove();
        tr=$('#wt_data table tr');
    }
    
    var m_span=$('.date').find('span:first');
    
    m_span.each(function(index){
        if(index<start_day){
            $(this).text(p_date++).css({
                color:'rgb(124, 137, 123)'
            });    
        }else if(index<end_date+start_day){
            $(this).text(now_date++).css({
                color:'rgb(68, 165, 60)'
            });    
        }else{
            $(this).text(n_date++).css({
                color:'rgb(124, 137, 123)'
            });    
        }
        
    });   
    
}

function totalTime(){
    var $tr=$('#wt_data table tr'),
        date=$('.date');
    
    $tr.each(function(index){
        var total=0,f_total=0;
        
       if(index==0)
           continue;
        
        var d=$(this).find('.date');
        d.each(function(i){
            total+=$(this).find('span').eq(0).text();
        });
        $(this).last().find('span').eq(0).text(total);
    });
}

