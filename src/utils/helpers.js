let register = function(Handlebars) {
    let helpers = {
        sum: function(a, b) {
            return a + b;
        },
        sub: function(a, b) {
            return a - b;
        }
    };

    if (Handlebars && typeof Handlebars.registerHelper === 'function') {
        // register helpers
        for (let prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        // just return helpers object if we can't register helpers here
        return helpers;
    }

};

module.exports.register = register;
module.exports.helpers = register(null);
