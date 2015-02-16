define([],
    function() {

        return {
            "token_name"        :   "campusca_token",
            "cookie_username"   :   "username",
            "hash"              :   "#",
            "activate_res"      :   "http://localhost:5454/activate",
            "login_res"         :   "http://localhost:5454/login",
            "logout_res"        :   "http://localhost:5454/logout",
            "register_res"      :   "http://localhost:5454/register",
            "user_res"          :   "http://localhost:5454/user",
            "error"             :   {
                "bad_token" : "bad_token",
                "wrong_username_or_password" : "wrong_username_or_password",
                "not_activated" : "not_activated",
                "not_found"     : "not_found",
                "validation_failed" : "validation_failed"
            },
            "info"              :   {
                "success" : "success",
                "activate_success" : "activate_success",
                "register_success" : "register_success"
            }
        };

    }
);