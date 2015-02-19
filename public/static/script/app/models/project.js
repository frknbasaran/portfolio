define(['backbone',
    'util/constants'],
    function(Backbone, constants) {

        var Project = Backbone.Model.extend({
            defaults: {
                name: 'projectName',
                desc: 'projectDescription',
                date: 'projectDate',
                tech: []
            },
            initialize: function(){
                console.log("project model initializing..");
            }
        });

        var Projects = Backbone.Collection.extend({
            model: Project
        })
            
        return {
            Projects: Projects,
            Project: Project
        };

    }
);