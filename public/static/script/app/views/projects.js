define(['jquery',
        'backbone',
        'util/constants',
        'text!template/projects.html',
        'jquery.cookie'],
    function($, Backbone, constants, projectsT) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function(){
                $('.container').html(projectsT);
                $('html').i18n();
            }
        });

    }
);