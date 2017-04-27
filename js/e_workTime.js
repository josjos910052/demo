$(function(){
    $date=$('#wt_input_month');
    
    make($date);
    totalTime();
    $('#wt_input_month').change(function(){
        make($(this));
        
        //讀取資料
        
        //計算總工時
        totalTime();
        
        //圖形變化
    });
    $('#wt_n_month').on('click',function(){
        var $d=$('#wt_input_month');
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
        make($d);
        totalTime();
    });
    $('#wt_p_month').on('click',function(){
        var $d=$('#wt_input_month');
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
        make($d);
        totalTime();
    });
    
});


//輸出月曆日期
function make($date){
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
                backgroundColor:'rgba(107, 105, 118, 0.33)',
                color:'rgba(124, 137, 123, 0.7)'
            });    
        }else if(index<end_date+start_day){
            $(this).text(now_date++).css({
                backgroundColor:'rgba(107, 105, 118, 0.63)',
                color:'rgb(42, 184, 196)'
            });    
        }else{
            $(this).text(n_date++).css({
                backgroundColor:'rgba(107, 105, 118, 0.33)',
                color:'rgba(124, 137, 123, 0.7)'
            });    
        }
        
    });   
    
}


//計算總時
function totalTime(){
    var $tr=$('#wt_data table tr');
    
    $tr.each(function(index){
       if(index!=0){
           var $result=$(this).find('td').last(),
               $date=$(this).find('.date');
           
           var total_normal=$result.find('span').eq(0),
               total_overTime=$result.find('span').eq(1);
           var NTime=0,
               OTime=0;
           $date.each(function(i){
              var $label=$(this).find('label');
               var normal=$label.eq(1).find('span').text(),
               overTime=$label.eq(2).find('span').text();
              
               if(normal.length==0){
                   normal=0;
               }
               if(overTime.length==0){
                   overTime=0;
               }
                
               NTime+=parseInt(normal);
               OTime+=parseInt(overTime);
                             
               timeColor($(this),normal,overTime);
               
               
           });
           total_normal.text(NTime);
           total_overTime.text(OTime);
           NTime=0,
           OTime=0;
       }
        
    });
}

//每日工時圖案&文字
function timeColor($date,normal,overTime){
    var $label=$date.find('label');
    
    var day_totalTime=parseInt(normal)+parseInt(overTime);
    
    if(parseInt(normal)!=0){                       
        $label.eq(1).show();   
        $label.eq(3).show();
    }else{    
        $label.eq(1).hide();
        $label.eq(3).hide();
    }
    
    if(parseInt(overTime)!=0){  
        $label.eq(2).show();
        if(parseInt(normal)!=0){
            $date
        }
    }else{                     
        $label.eq(2).hide();                  
    }
    
    $label.eq(0).css({          
        height: (day_totalTime/12*75)+'%'              
    });   
    
}

