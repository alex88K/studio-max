$(function() {
/*--Main nav-----------------------------------*/ 

	$('.navbar-toggle').jPushMenu({ closeOnClickLink: false });
	$('.dropdown-toggle').dropdown();

/*--------------------------------------------------*/ 
	
	$('.promo-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		loop: true,
		dotsContainer: '.dots-nav',
		dotsSpeed: 800,
		dragEndSpeed: 800
	});

	$('.article-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		loop: true,
	});

	$('.comment-slider .owl-carousel').owlCarousel({
		items: 2,
		nav: true,
		navContainer: '.arr-nav',
		dots: false,
		loop: true,
		dragEndSpeed: 500,
		navSpeed: 500,
		responsive: {
			1201: {
				items: 2
			},
			0: {
				items: 1
			}
		}
	});

/*--Portfolio----------------------*/

	var $portfolio = $('.portfolio-gallery').masonry({
		itemSelector: '.portfolio-item',
		columnWidth: '',
		isAnimated: true
	});

	var $portfolioInner = $('.portfolio-gallery--inner').masonry({
		itemSelector: '.portfolio-item',
		columnWidth: 1,
		isAnimated: true
	});

	$portfolio.imagesLoaded().progress( function() {
		$portfolio.masonry('layout');
	});

	$portfolioInner.imagesLoaded().progress( function() {
		$portfolio.masonry('layout');
	});

	$('[data-fancybox]').fancybox();

/*--Animation-------------------*/

	window.sr = ScrollReveal();
	sr.reveal('.reveal-anim', { duration: 700 });
	sr.reveal('.reveal-left', { duration: 700, origin: 'left', distance: '100px' });
	sr.reveal('.reveal-right', { duration: 700, origin: 'right', distance: '100px' });
});

/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */
(function($) {
	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
		/* add class to the body.*/
		
		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';
			
			if($(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.jPushMenuBtn').not($(this)).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickOutside) {
			$(document).click(function() {
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$(document).on('click touchstart', function(){
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$('.cbp-spmenu,.toggle-menu').click(function(e){
				e.stopPropagation();
			});

			$('.cbp-spmenu,.toggle-menu').on('click touchstart', function(e){
				e.stopPropagation();
			});
		}

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);
