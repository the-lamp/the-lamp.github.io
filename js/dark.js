(function($) {
    "use strict"; 
  
    function siteModeToggle(siteModeVal) {
        $.removeCookie('blogdata-site-mode-cookie', {
            path: '/'
        });
        var updateVal;
        if (siteModeVal === 'defaultcolor') {
            updateVal = 'dark';
        } else {
            updateVal = 'defaultcolor';
        }
        $("#switch").removeClass(siteModeVal);
        $("#switch").addClass(updateVal);
        $('body').removeClass(siteModeVal);
        $('body').addClass(updateVal);
        var exDate = new Date();
        exDate.setTime(exDate.getTime() + (3600 * 1000));
        $.cookie('blogdata-site-mode-cookie', updateVal, {
            expires: exDate,
            path: '/'
        });
    }

    $("#switch").click(function(event) {
        event.preventDefault();
        var siteModeClass = $(this).attr('class');
        var siteModeAttr = $(this).data('skin-mode');  

        if ($(this).hasClass(siteModeAttr)) {
            siteModeToggle(siteModeAttr);
        } else {
            siteModeToggle(siteModeClass);
        }
    });
  
})(jQuery);