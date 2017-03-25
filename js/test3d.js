 var nowAngle,space=$('#view'),
        camera=$('#content');
$(function(){
    nowAngle=parseInt($('#content').attr('nowangle'));
    space=$('#view');
    camera=$('#content');
    
//    $('#go2').on('click',function(){
//        r30();
//        $('#content').attr('nowangle',nowAngle);
//        
//    });
    
    
    
    $('.option').on('click',function(){
        var which=$(this).attr('id')[6];
       
//		Rotate(parseInt(which)+1);
         r(parseInt(which)+1);
        $('#content').attr('nowangle',nowAngle);
    });
     $('.goback').on('click',function(){
        var which=$(this).attr('id')[6];
//        console.log(which+" -- "+parseInt(which));
//		GoBack(parseInt(which)+1);
         b(parseInt(which));
         $('#content').attr('nowangle',nowAngle);
    });
    
});


function Rotate(which){
    var space=$('#view'),
        camera=$('#content'),
        timer;
    
    switch(which){
        case 2:
            space.removeClass('back2').addClass('go2');
            camera.addClass('long');
            break;
        case 3:
            space.removeClass('back3').addClass('go3');
            camera.addClass('long');
            
            break;
        case 4:
            space.removeClass('back4').addClass('go4');
            camera.addClass('long');
            
            break;
        
        case 5:
            space.removeClass('back5').addClass('go5');
            camera.addClass('long');
            
            break;
        
        case 6:
            space.removeClass('back6').addClass('go6');
            camera.addClass('long');
            
            break;
        
            
    }
    timer=setTimeout(function(){
      camera.removeClass('long');
    },3000);
}

function GoBack(which){
    var space=$('#view'),
        camera=$('#content');
    
    switch(which){
        case 2:
            space.removeClass('go2').addClass('back2');
            camera.addClass('long');
            break;
        case 3:
            space.addClass('back3').removeClass('go3');
            camera.addClass('long');
            
            break;
        case 4:
            space.addClass('back4').removeClass('go4');
            camera.addClass('long');
            
            break;
        
        case 5:
            space.addClass('back5').removeClass('go5');
            camera.addClass('long');
            
            break;
        
        case 6:
            space.addClass('back6').removeClass('go6');
            camera.addClass('long');
            
            break;
        
            
    }
    timer=setTimeout(function(){
      camera.removeClass('long');
    },3000);
}


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
    
    camera.addClass('long');
    
   
    space.addClass(str);
    var t=setTimeout(function(){
         space.css({
        
        "transform":"rotateY(" +nowAngle+ "deg)"}).removeClass(str);
    },2400);    
    if(camera.hasClass('long')){
        camera.removeClass('long');
        
        }
   
    
}

function b(w){
    
    nowAngle%=360;
    nowAngle+=(60*(w-1));

//    if(w<5)//2 3 4 
//        nowAngle+=(60*(w-1));
//    else{// 5 6
//        nowAngle+=(60*(w-1));
//       // nowAngle=-nowAngle;
//    }
        
    
    
    var str='back'+w;
    
    console.log(nowAngle+'  str:'+str);
    
    camera.addClass('long');
    
    
    space.addClass(str);
    var t=setTimeout(function(){
         space.css({
        
        "transform":"rotateY(" +nowAngle+ "deg)"}).removeClass(str);
    },2400);    
    if(camera.hasClass('long')){
        camera.removeClass('long');
        
        }
 
    
}

