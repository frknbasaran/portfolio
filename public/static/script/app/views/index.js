define(['jquery',
        'backbone',
        'util/constants',
        'text!template/index.html',
        'jquery.cookie'],
    function($, Backbone, constants, indexT) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function(){
                $(".container").html(indexT);
                $("html").i18n();
            }
        });

    }
);