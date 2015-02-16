define(['jquery',
        'backbone',
        'util/constants',
        'text!template/about.html',
        'jquery.cookie'],
    function($, Backbone, constants, aboutT) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function() {
                $('.container').html(aboutT);
                $('html').i18n();
            }
        });

    }
);