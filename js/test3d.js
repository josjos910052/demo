 var nowAngle,space,
        camera;
$(function(){
    space=$('#view'),camera=$('#content');    
    nowAngle=parseInt(space.attr('nowangle'));
    
    $('.option').on('click',function(){
        var which=$(this).attr('id')[6];
            
         r(parseInt(which)+1);
        space.attr('nowangle',nowAngle);
    });
    
     $('.goback').on('click',function(){
        b();
    });
    $('#head_turnLeft').on('click',function(e){
         turnL60(500);
        e.stopPropagation();
    });
    $('#head_turnRight').on('click',function(e){
        turnR60(500);
         e.stopPropagation();
    });
    $('#head').on('click',function(){
         b();
    });
    
    
    //個人訊息
    $('#option1').on('click',function(e){
       $('#label_cancel_personInfo').stop().fadeIn(500).show(1); 
        $('#personInfo').stop().show();
        if($('#p_info').length==0){
            
             $.get('個人資料.html',function(data){
                 $("#info").html(data);
            });
             $('head').append( $('<link rel="stylesheet" type="text/css" href="css/person_info.css">'));
        }
       // getPersonInfo("abc");
        $.getScript('js/person_info.js');
    });
    
    //查詢工時
    $('#option3').on('click',function(){
        
        
        //找不到，代表第一次，寫進
        if($('#worktime').length==0){
            $.get('查詢工時.html',function(data){
                 $("#box4").html(data);
            });
            $('head').append( $('<link rel="stylesheet" type="text/css" href="css/e_workTime.css">'));
            $.getScript('js/e_workTime.js');
        }
        turnR180(500);
        
    });
    
    
    
    
});




function r(w){
    var time=500;
    switch(w){
        
        case 3:
            turnR120(time);
            break;
        
        case 5:
            turnL120(time);
            break;
        case 6:
            turnL60(time);
            break;
    }
}

function b(){
    goMenu(500);    
}

function rot(start,end,time){
    //至造新元素   
    var d=(end-start);
    $({deg: start}).animate({deg: start+(d/2)},{
        //動畫時間        
        duration:time/2,
        step:function(now) {
            var angle=(d/2);
            var now2=(now-start)*15/angle;
            if(now2>0)
                now2=-now2;
            space.css({
                '-webkit-transform': 'rotateX('+now2+'deg) rotateY('+now+'deg)'
            });
        },
        easing:'linear'
        
    }).animate({deg: end},{
        //動畫時間        
        duration:time/2,
        step:function(now) {
            var angle=(d/2);
            var now2=(now-(start+angle))*15/angle;
            if(now2<0)
                now2=-now2;
            space.css({
                '-webkit-transform': 'rotateX('+(-15+now2)+'deg) rotateY(' + now + 'deg)'
            });
        },
        easing:'linear'
        
    });
}

function turnR60(time){
    rot(nowAngle,nowAngle-60,time);
    addClassLong(time);
    nowAngle-=60;
    if(nowAngle<-180){
        nowAngle+=360;
    }
    space.attr('nowangle',nowAngle);
}
function turnL60(time){
    addClassLong(time);
    rot(nowAngle,nowAngle+60,time);
    nowAngle+=60;
    if(nowAngle>120){
        nowAngle-=360;
    }
    space.attr('nowangle',nowAngle);
}
function turnR120(time){
    addClassLong(time);
    rot(nowAngle,nowAngle-120,time);
    nowAngle-=120;
    if(nowAngle<-180){
        nowAngle+=360;
    }
    space.attr('nowangle',nowAngle);
    
}
function turnL120(time){
    addClassLong(time);
    rot(nowAngle,nowAngle+120,time);
    nowAngle+=120
    if(nowAngle>120){
        nowAngle-=360;
    }
    space.attr('nowangle',nowAngle);
}
function turnR180(time){
    addClassLong(time);
    rot(nowAngle,nowAngle-180,time);
    nowAngle-=180;
    if(nowAngle<-180){
        nowAngle+=360;
    }
    space.attr('nowangle',nowAngle);
}



function goMenu(time){
    if(nowAngle==0)
        return;
    addClassLong(time);
    rot(nowAngle,0,time);
    nowAngle=0;
    space.attr('nowangle',nowAngle);
}

function addClassLong(time){
    if(!camera.hasClass('long')){
        camera.addClass('long');
    }
    
    var t=setTimeout(function(){
        camera.removeClass('long');
    },time);
}
