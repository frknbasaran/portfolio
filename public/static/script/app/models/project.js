define(['backbone',
    'util/constants'],
    function(Backbone, constants) {

        var Projects = New Backbone.Collection([
            {"title":"title","date":"date","description":"description","url":"projectUrl","techs": ["nodeJs","mongoDB"]},
            {"title":"title","date":"date","description":"description","url":"projectUrl","techs": ["nodeJs","mongoDB"]},
            {"title":"title","date":"date","description":"description","url":"projectUrl","techs": ["nodeJs","mongoDB"]},
            {"title":"title","date":"date","description":"description","url":"projectUrl","techs": ["nodeJs","mongoDB"]},
            {"title":"title","date":"date","description":"description","url":"projectUrl","techs": ["nodeJs","mongoDB"]}
        ]);

        return {
            Projects: Projects
        };

    }
);