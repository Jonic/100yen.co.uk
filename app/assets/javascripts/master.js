
//  Global variables - probably shouldn't do this, but what the hey..
var head,
    body;

//  --  Big function to wrap it all in to protect vars and that.. Is this a
//      closure? Is that what they are? I'll have to look into that.
(function ($, window, document, undefined) {

    if (typeof $ === 'undefined') {
        //  Oh Em Gee - jQuery isn't available - abort!
        return;
    }

    //  --  Instantiate just ONE jQuery object, use this to find other elements
    //      rather than creating a new jQuery object for each selector
    $.root = new $.prototype.init(document);

    //  --  Make Rocket Go Now
    $.root.ready(function () {

        //  Define head and body elements
        head = $.root.find('head');
        body = $.root.find('body');

        //  Add "js" class to body for styling
        body.addClass('js');

        //  Invoke plugins, yo -> body.find('#element').functionName();

    });

    //  --  Define custom jQuery plugins
    (function () {



    }());

}(jQuery, this, this.document));
//  --  Fix up; look sharp!
