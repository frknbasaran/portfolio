define(['jquery',
        'backbone',
        'i18next',
        'jquery.cookie',
        'moment'],
    function($,Backbone,i18n) {

        return Backbone.View.extend({
            el: $('html'),
            initialize: function(){
            },
            render: function(){

            },
            events: {
                "click #lang_tr" : "tr",
                "click #lang_en" : "en"
            },
            tr: function() {
                i18n.setLng('tr', {fixLng:true}, function(tr) {});
                moment.lang('tr');
                $("html").i18n();
            },
            en: function() {
                i18n.setLng('en', {fixLng:true}, function(en) {});
                moment.lang('en');
                $("html").i18n();
            }
        });

    }
);