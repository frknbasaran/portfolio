define(['jquery',
        'backbone',
        'util/constants',
        'text!template/experiences.html',
        'jquery.cookie'],
    function($, Backbone, constants, experiencesT) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function(){
                $('.container').html(experiencesT);
                $('html').i18n();
            }
        });

    }
);