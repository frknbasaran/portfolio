define(['jquery',
        'backbone',
        'underscore',
        'i18next',
        'view/index',
        'view/experiences',
        'view/projects',
        'view/about',
        'view/skills',
        'text!template/common/error.html'],
    function($, Backbone, _, i18n, IndexView, ExperienceView, ProjectsView, AboutView, SkillsView, errorTemplate) {

        var indexView       = new IndexView(),
            experienceView  = new ExperienceView(),
            projectsView    = new ProjectsView(),
            aboutView       = new AboutView(),
            skillsView      = new SkillsView();
            

        return Backbone.Router.extend({
            routes: {
                ''                  :   'index',
                'experiences'       :   'experiences',
                'projects'          :   'projects',
                'about'             :   'about',
                'skills'            :   'skills',
                '*path'             :   'default'
            },
            index: function() {
                indexView.render();
            },
            experiences: function() {
                experienceView.render();
            },
            about: function() {
                aboutView.render();
            },
            skills: function() {
                skillsView.render();
            },
            projects: function() {
                projectsView.render();
            },
            default: function() {
                $(".container").html(_.template(errorTemplate, { error:window.location, status:"URL" }));
                $("html").i18n();
            }
        });

    }
);