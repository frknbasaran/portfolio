define(['backbone',
    'util/constants'],
    function(Backbone, constants) {
        
        var Experiences = New Backbone.Collection([
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"},
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"},
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"},
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"},
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"},
            {"title":"title","startDate":"startDate","endDate":"endDate","nowWorking":true,"description":"description","role":"role"}
        ]);

        return {
            Experiences: Experiences
        };

    }
);