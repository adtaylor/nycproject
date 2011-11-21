$(function(){
            var wrap = $(".bg");
			$("#wrap").wrapInner("<table cellspacing='0'><tr>");
			wrap.wrap("<td>");
            
            $(window).bind('resize' , function () {
                var w = $(window).width()
                  , h = $(window).height();
                  
                
                wrap.width(w);
            }).trigger('resize');
		});