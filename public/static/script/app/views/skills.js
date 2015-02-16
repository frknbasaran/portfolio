define(['jquery',
        'backbone',
        'util/constants',
        'text!template/skills.html',
        'jquery.cookie'],
    function($, Backbone, constants, skillsT) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function(){
                $('.container').html(skillsT);
                $('html').i18n();
            }
        });

    }
);