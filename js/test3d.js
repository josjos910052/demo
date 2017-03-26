 var nowAngle,space,
        camera;
$(function(){
    space=$('#view'),camera=$('#content');    
    nowAngle=parseInt(space.attr('nowangle'));
    
    
    
    $('#test').on('click',function(){
        turnR60(500);
        console.log('testop');
        //alert('轉八');
    });
    
    $('.option').on('click',function(){
        var which=$(this).attr('id')[6];
            console.log('op');
         r(parseInt(which)+1);
        $('#content').attr('nowangle',nowAngle);
    });
    
     $('.goback').on('click',function(){
        var which=$(this).attr('id')[6];

         b(parseInt(which));
         $('#content').attr('nowangle',nowAngle);
    });
    
});




function r(w){
    
   nowAngle%=360;
    nowAngle-=(60*(w-1));
//    if(w<5)
//        nowAngle-=(60*(w-1));
//    else{
//        nowAngle-=(60*(w-1));
//        //nowAngle=-nowAngle;
//    }
    
    
    var str='go'+w;
    
    console.log(nowAngle+'  str:'+str);
    
   
    if(!camera.hasClass('long')){
        camera.addClass('long');
        console.log('long增加成功');
        console.log(camera.hasClass('long'));
    }
        
   
    space.addClass(str);
    var t=setTimeout(function(){
         space.css({        
            "-webkit-transform":"rotateY(" +nowAngle+ "deg)"
         }).removeClass(str);
         camera.removeClass('long');
    },500);    

   
    
}

function b(w){
    
    nowAngle=0;
    

//    if(w<5)//2 3 4 
//        nowAngle+=(60*(w-1));
//    else{// 5 6
//        nowAngle+=(60*(w-1));
//       // nowAngle=-nowAngle;
//    }
        
    
    
    var str='back'+w;
    
    console.log(nowAngle+'  str:'+str);
    
   if(!camera.hasClass('long')){
        camera.addClass('long');
        console.log('long增加成功');
        console.log(camera.hasClass('long'));
    }
    
    
    space.addClass(str);
    var t=setTimeout(function(){
         space.css({
        
        "-webkit-transform":"rotateY(" +nowAngle+ "deg)"}).removeClass(str);
        camera.removeClass('long')
    },500);    
    
}

function rot(start,end,time){
    //至造新元素   
    nowAngle+=(end-start);
    $({deg: start}).animate({deg: end},{
        //動畫時間        
        duration:time,
        step:function(now) {
            space.css({
                '-webkit-transform': 'rotateY(' + now + 'deg)'
            });
        },
        easing:'linear',
        queue:false
    });
     $('#content').attr('nowangle',nowAngle);
}

function turnR60(time){
    rot(nowAngle,nowAngle-60,time);
    addClassLong(time);
    if(nowAngle==-180){
        nowAngle=120;        
    }
    $('#content').attr('nowangle',nowAngle);
}
function turnL60(time){
    addClassLong(time);
    rot(nowAngle,nowAngle+60,time);
    if(nowAngle==120){
        nowAngle=-180;
    }
    $('#content').attr('nowangle',nowAngle);
}
function turnR120(time){
    addClassLong(time);
    rot(nowAngle,nowAngle-120,time);
    nowAngle-=120;
    if(nowAngle<-180){
        nowAngle+=360;
    }
    $('#content').attr('nowangle',nowAngle);
    
}
function turnL120(time){
    addClassLong(time);
    rot(nowAngle,nowAngle+120,time);
    nowAngle+=120
    if(nowAngle>120){
        nowAngle-=360;
    }
    $('#content').attr('nowangle',nowAngle);
}
function turnR180(time){
    addClassLong(time);
    rot(nowAngle,nowAngle-180,time);
    nowAngle-=180;
    if(nowAngle<-180){
        nowAngle+=360;
    }
    $('#content').attr('nowangle',nowAngle);
}



function goMenu(time){
    
    rot(nowAngle,0,time);
    nowAngle=0;
    $('#content').attr('nowangle',nowAngle);
}

function addClassLong(time){
    if(!camera.hasClass('long')){
        camera.addClass('long');
        //space.addClass('y_view');
        console.log('long增加成功');
        console.log(camera.hasClass('long'));
    }
    
    var t=setTimeout(function(){
        camera.removeClass('long');
        //space.removeClass('y_view');
    },time);
}






