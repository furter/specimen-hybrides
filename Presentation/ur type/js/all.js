<!--
jQuery(function ($) {
<!--

	function horizontalScroll(direction) {
		// breedte alle kolommen minus breedte viewport is scrollbare ruimte
		var scrollableWidth = (widthColumn*nrColumns)-$(window).width();
		// checken hoeveel er al is gescrolled
		var alreadyScrolled = scrollableWidth-(widthColumn*(currentColumn-1));
		
		if (direction=="left" && alreadyScrolled<scrollableWidth) {
			positionColumns = positionColumns - widthColumn;
			currentColumn--;
		}
		else if (direction=="right" && alreadyScrolled>0) {
			positionColumns = positionColumns + widthColumn;
			scrollableWidth - widthColumn;
			currentColumn++;
		}
		$( "#content" ).animate({
			scrollLeft: positionColumns
		}, 300);
	}

	$(document).ready(function($) {
        
        
        /**/////////////////////////////////////////////////////////////////
        /*$("img").click(function(event) {
            var topDist = $(this).offset();
            alert(topDist.top);
        });*/
 /**/////////////////////////////////////////////////////////////////
  

        
		/////////////////////////////////////////
		// edit image tags
		$('#content img').each(function() {
			// add media and image span
			$(this).wrap( "<span class='media image'></span>" );
			// image captions
			if ($(this).attr('alt')) {
				$(this).after("<span class='caption'>"+$(this).attr('alt')+"</span>");
			}
		});
		/////////////////////////////////////////
		// edit embeds
		$('#content iframe').each(function(){
            // get height from iframe
            var thisHeight = $(this).attr("height");
            // check if value is % or not, if not, add px to end
            var lastChar = thisHeight.substr(thisHeight.length - 1);
            if (lastChar!="%") {
                thisHeight = thisHeight + "px";
            }
            // add media and video-holder span
			$(this).wrap( "<span class='media'><span class='video-holder' style='padding-bottom: " + thisHeight + ";'></span></span>" );
			// video captions
			if ($(this).attr('data-alt')) {
				$(this).parent().after("<span class='caption'>"+$(this).attr('data-alt')+"</span>");
			}
		});	
		
		/////////////////////////////////////////
		// desktop version: cut & paste media to right column on project page
		//if ($( ".page-project" ).length && $(window).width() > 750 && $(".project.grid-container").outerWidth() > 640) {
		if ($( ".page-project" ).length) {
			$('#content .media').each(function(){
				$(this).clone().appendTo( '#content .media-block' );
			});	
		}
		/////////////////////////////////////////
		// add unsemantic grid classes
		$('#content .header-block').each(function(){
			$(this).addClass("grid-100");
			$(this).addClass("mobile-grid-100");
		});	
		$('#content .text-block').each(function(){
			if ( $( ".page-home" ).length ) {
				$(this).addClass("grid-100");
			}
			else {
				$(this).addClass("grid-50");
			}
			$(this).addClass("mobile-grid-100");
		});	
		/////////////////////////////////////////
		// home adjustments
		if ( $( ".page-home" ).length ) {
			var counter = 1;
			$('#content .project').each(function(){
				// give unique project class
				$(this).addClass("project"+counter);
				// add custom style to this project column
				var textColor = $(".header-block", this).attr('data-color-text');
				var bgColor = $(".header-block", this).attr('data-color-background');
				var bgImg = $(".header-block", this).attr('data-img-background');

                var styleString = "<style>";
				if (bgColor) {
                    styleString += "#content .project"+counter+" { background-color: "+ bgColor +"; } ";
                }
                    
				if (bgImg) {
                    styleString += "#content .project"+counter+" .scroll-container { background-image: url("+ bgImg +"); } ";
                }
                
				if (textColor) {
                    styleString += "#content .project"+counter+", #content .project"+counter+" a, #content .project"+counter+" a:hover { color: "+ textColor +"; } #content .project"+counter+" a, #content .project"+counter+" a:hover { border-color: "+ textColor +"; }";
                }
                styleString += "</style>";

                if (styleString != "<style></style>") {    
					$(this).prepend(styleString);
				}
				counter++;
			});
		}
		/////////////////////////////////////////
		// project custom styling
		if ( $( ".page-project" ).length ) {
			var textColor = $('#content .grid-container .header-block').attr('data-color-text');
			var bgColor = $('#content .grid-container .header-block').attr('data-color-background');
			var bgImg = $('#content .grid-container .header-block').attr('data-img-background');

            var styleString = "<style>";
            if (bgColor) {
                styleString += "body { background-color: "+ bgColor +"; } ";
            }

            if (bgImg) {
                styleString += "body { background-image: url("+ bgImg +"); } ";
            }

            if (textColor) {
                styleString += "#content .project, #content .project a, #content .project a:hover { color: "+ textColor +"; border-color: "+ textColor +"; } @media screen and (max-width: 767px) { a.arrows { color: "+ textColor +"; } }";
            }
            styleString += "</style>";

            if (styleString != "<style></style>") {    
                $('body').prepend(styleString);
            }            
		}
		/////////////////////////////////////////
		// contact toggle
		$(".btn_contact").click(function(event) {
			event.preventDefault();
			$("#content").fadeToggle(200);
			$("#footer").fadeToggle(200);
			// footer relative maken zodat de scrollbar normaal verschijnt
			if ($("#footer").css('position')=='fixed') {
				$("#footer").css('position','relative');
			}
			// of weer fixed maken zodat ie op het contentvlak verdwijnt ipv eronder
			else {
				$("#footer").css('position','fixed');
			}
			// window resize zodat de content kolommen worden herberekend
			$(window).resize();
		});
		/////////////////////////////////////////
		// home arrow navigation
		if ( $( ".page-home" ).length && $(window).width() > 767 ) {
			// get total number of colums
			window.nrColumns = $(".project").length;
			// get width of single column
			window.widthColumn = $(".project").outerWidth();
			// set current column to 1 on first load
			window.currentColumn = 1;
			// set current position to 0 on first load
			window.positionColumns = 0;
			
			$(".arrow-left").click(function(event) {
				event.preventDefault();
				horizontalScroll('left');
			});
			$(".arrow-right").click(function(event) {
				event.preventDefault();
				horizontalScroll('right');
			});
		}
		/////////////////////////////////////////
		// keyboard navigation
		$(document.documentElement).keyup(function (event) {
			// handle cursor keys
			if (event.keyCode === 37) {
				// go left
				if ( $( ".page-home" ).length && $(window).width() > 767 ) {
					horizontalScroll('left');  
				}
				else if ($( ".page-project" ).length) {
					window.location.href = $( ".arrow-left" )[0].href;
				}
			} 
			else if (event.keyCode === 39) {
				// go right
				if ( $( ".page-home" ).length && $(window).width() > 767 ) {
					horizontalScroll('right');  
				}
				else if ($( ".page-project" ).length) {
					window.location.href = $( ".arrow-right" )[0].href;
				}
			}
		});
		/////////////////////////////////////////
		// link my name        
        /*var str = "Kris Borgerink";
        var newhtml = $('#footer').html().replace(str, '<a href="http://www.krisborgerink.nl" target="_blank">' + str + '</a>');
        $('#footer').html(newhtml);     */   
	});
	
	/*$(window).bind("debouncedresize", function() {
		
	});*/
	$(window).resize(function() {
		/////////////////////////////////////////
		// home adjustments
		
		// alleen doen als contact vlak niet zichtbaar is
		if ( $("#content").is(":visible")) {
			// first reset styles to original state from stylesheet
			$(".page-home").attr('style','');
			$(".btn-overlay").attr('style','');
			$(".scroll-container").attr('style','');
			if ( $( ".page-home" ).length && $(document).width() > 767) {
				// adjust columnheights to viewport
				$(".page-home").height($(window).height()-$("#header").height());
				$(".project").each(function(){
					$(".btn-overlay",this).height($("article",this).height()+($(".scroll-container", this).innerHeight()-$(".scroll-container", this).height()));
					$(".scroll-container", this).height($(".page-home").height()-($(".scroll-container", this).innerHeight()-$(".scroll-container", this).height()));
				});
			}
		}
	});
	
	$(window).load(function() {
		/////////////////////////////////////////
		$(window).resize();
	});
//-->


	// generate links for social buttons
	$(document).ready(function(){     
		//Get the URL of this page and encode it for the url
		var share_url = encodeURIComponent(window.location);
		//Get the title of this page and encode it for the url
		var share_title  = encodeURIComponent(document.title);
		//Get the URL of the homepage and encode it for the url
		//var share_source  = encodeURIComponent(document.domain);    
	
		//function create_share_btns(){
			// facebook <a href="#">&gt;</a>
			$("a.btn_facebook").attr("href","http://www.facebook.com/share.php?u="+share_url+"&amp;title="+share_title);
			//document.write('<a href="http://www.facebook.com/share.php?u='+share_url+'&amp;title='+share_title+'" class="social">Ä—</a>');
			// twitter
			$("a.btn_twitter").attr("href","http://twitter.com/home?status="+share_title+"+"+share_url);
			//document.write('<a href="http://twitter.com/home?status='+share_title+'+'+share_url+'" class="social">Ä•</a>');    
			// linkedin
			//document.write('<a href="http://www.linkedin.com/shareArticle?mini=true&url='+share_url+'&amp;title='+share_title+'&amp;source='+share_source+'" class="social">Ä </a>');
		//}
	
		// Bind a new event to link
		$("a.btn_social").click(function(e){
			//Tell browser not to follow that link
			e.preventDefault();
			// Get URL
			var social_url = $(this).attr("href");
			//Trigger a new window, in the middle of the page
			window.open(social_url + '&', 'sharewindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
		
		});
	});
	
	
	
	
	
});
//-->
	