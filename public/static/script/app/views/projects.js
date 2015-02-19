define(['jquery',
        'backbone',
        'underscore',
        'util/constants',
        'text!template/projects.html',
        'model/project',
        'jquery.cookie'],
    function($, Backbone, _, constants, projectsT, projectM) {

        return Backbone.View.extend({
            el: $('.container'),
            initialize: function(){
            },
            render: function(){
                
                var project = projectM.Project;
                project.name = "campusca";
                project.desc = "instant messaging service";
                project.date = "2014";
                
                

                var projectList = new projectM.Projects([project]);
                console.log(projectList);

                $(".container").html(_.template(projectsT,{projects:projectList}));
                $('html').i18n();
            }
        });

    }
);