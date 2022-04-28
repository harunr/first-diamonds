/* Enabling support for new HTML5 tags for IE6, IE7 and IE8 */
if(navigator.appName == 'Microsoft Internet Explorer' ){
	if( ( navigator.userAgent.indexOf('MSIE 6.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 7.0') >= 0 ) || ( navigator.userAgent.indexOf('MSIE 8.0') >= 0 ) ){
		document.createElement('header')
		document.createElement('nav')
		document.createElement('section')
		document.createElement('aside')
		document.createElement('footer')
		document.createElement('article')
		document.createElement('hgroup')
		document.createElement('figure')
		document.createElement('figcaption')
	}
}


;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
        
        
        $('.main-nav > ul > li').find('>ul').parent().addClass('hasSubitem')
        $('.main-nav > ul > li > ul > li').find('>ul').parent().addClass('hassubSubitem')
        
        if($(window).width() < 768){
            $('#phone-nav').click(function(){
                $('.nav-wrap').slideToggle()
                $('.main-nav > ul > li.hasSubitem').find('>ul').slideUp()
                $('.main-nav > ul > li > ul > li.hassubSubitem').find('>ul').slideUp()
            })

            

            $('.main-nav > ul > li.hasSubitem > a').click(function(e){
                e.preventDefault()

                if($(this).parent().find('>ul').is(':visible')){
                    $(this).parent().find('>ul').slideUp()
                }
                else{
                    $('.main-nav > ul > li.hasSubitem > ul:visible').slideUp()
                    $(this).parent().find('>ul').slideDown()  
                }

            })

            $('.main-nav > ul > li > ul > li.hassubSubitem > a').click(function(e){
                e.preventDefault()
                if($(this).parent().find('>ul').is(':visible')){
                    $(this).parent().find('>ul').slideUp()
                }
                else{
                    $('.main-nav > ul > li > ul > li.hassubSubitem > ul:visible').slideUp()
                    $(this).parent().find('>ul').slideDown()
                }



            })

        }
        
      if( ( $(window).width() < 1025 ) && ( $(window).width() > 767 ) ){
            
            $('.main-nav > ul > li.hasSubitem > a').click(function(e){
                e.preventDefault()
            })
            
        }
        
    
        if($('.loose-stone-led').length){
            $('body').addClass('loose-stone-page-body')
        }
    
        if($('.home-page-content').length){
            $('body').addClass('home-page-body')
        }
    
        if($('.catalogue-content-section').length){
            $('body').addClass('catalogue-page-body')
        }
        
        if($('.classique-content').length){
            $('body').addClass('classique-page-body')
        }
        
        
        
        
        
      if($(window).width() < 768){
          $('.widget-content').hide();
          $('.footer-widget span.widget-heading').click(function(){
              $('.footer-widget span.widget-heading').removeClass('active')
              $(this).addClass('active')
              $('.footer-widget').find('.widget-content:visible').slideUp()

              if($(this).parent().find('.widget-content:visible').length){
                  $(this).parent().find('.widget-content').slideUp()
                  $(this).removeClass('active')
              }
              else{
                  $(this).parent().find('.widget-content').slideDown()
                  $(this).addClass('active')
              }

          })
      }
        

        $('.tab-wrap #tabs > li').eq(0).addClass('active')
        $('#tab-content-wrap > .tab-content').hide()
        $('#tab-content-wrap > .tab-content').eq(0).show()

        $('.tab-wrap #tabs > li').each(function(i){

            $(this).click(function(){

                if( $(this).hasClass("active") ) return false

                else{
                    $('.tab-wrap #tabs > li').removeClass('active')
                    $(this).addClass('active')
                    $('#tab-content-wrap > .tab-content').hide()
                    $('#tab-content-wrap > .tab-content').eq(i).show()
                }
            })
        });



        // Catalogue tab
        $('#catalogue-tab-wrap #tabs > li').eq(0).addClass('active')
        
        $('#catalogue-tab-wrap #tabs > li').each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false

                else{
                    $('#catalogue-tab-wrap #tabs > li').removeClass('active')
                    $(this).addClass('active')
                    $('#collection-tab-content-wrap > .collection-catagory-slider').hide()
                    $('#collection-tab-content-wrap > .collection-catagory-slider').eq(i).show()
                }
            })
        });


        if($('.contact-wrap').length){
            $('body').addClass('contact-page-body')
        }
        
        
        $("#products-item-wrap a.quick-view").each(function(i){
            var id = $(this).attr('href')
            $(this).on('click', function(e){

                e.preventDefault()
                e.stopPropagation()
                    
                $('html,body').stop('true, true').animate({
                    scrollTop: $('body').offset() - 0
                })
                $('#catalogue-modal-section').fadeIn()
                
                $('#catalogue-modal-section div.modal-inner').css({
                    'left' : -999999,
                    'opacity' : 0
                })
                
                $(id).css({
                    "left" : 0
                }).animate({
                    "opacity" : 1
                }, 500)
            })

        });

        $('#close-btn').click(function(){
            $('#catalogue-modal-section').fadeOut()
            
            $('#catalogue-modal-section div.modal-inner').css({
                'left' : -999999,
                'opacity' : 0
            })
        })
        
        
        $('.carousel-wrap').each(function(){
            var totalLength = $(this).find('div.carousel-item').length
            
            if(totalLength <= 4 ){
                $(this).find('.slick-prev').hide()
                $(this).find('.slick-next').hide()
            }
            
            else{
                $(this).find('.slick-prev').show()
                $(this).find('.slick-next').show()
            }
        })
        
        
        if($('#collection-catagory-section').length){
            $('.carousel-wrap').slick({
                dots: false,
                infinite: false,
                speed: 400,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: false,
                            dots: false,
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });

            $('.carousel-wrap').append('<div id="nextClickFix"></div>')
        }

        
        $('.main-nav ul li').mouseenter(function(){
            $(this).find('div.collection-catagory-section').parent().addClass('dropdown')
        })
        
        $('.main-nav ul li').mouseleave(function(){
            $(this).find('div.collection-catagory-section').parent().removeClass('dropdown')
        })
        
            
        
        
	})// End ready function.

	$(window).load(function(){
        // Begin common slider
        if ( $('div.slider-wrap').length == 0 ) return false

        $('div.slider-wrap').flexslider({
            animation:"fade",
            slideshow: false,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            manualControls: "#slider-nav-wrap .slider-nav .nav-icon",
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })	

    })

    $(window).load(function(){
        // Begin common slider
        if ( $('div.shape-slider-wrap').length == 0 ) return false

        $('div.shape-slider-wrap').flexslider({
            animation:"slide",
            slideshow: false,
            directionNav: true,
            controlNav:false,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            manualControls: "#slider-nav-wrap .slider-nav .nav-icon",
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })

    })


})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})