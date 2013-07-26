$expect(".ember-application").to.exist(
    "Check your JavaScript! I can't seem to find an Ember application running."
);

var rx = new RegExp("text/x-handlebars", "g");
var numTemplates = code['index.html'].match(rx).length;
if (numTemplates<2) {
    return "The HTML code should contain two Handlebars templates.";
}

var rx = new RegExp("data-template-name", "g");
var namedTemplates = code['index.html'].match(rx);
if (!namedTemplates) {
    return "Have you added a data-template-name tag to one of the templates.";
}

if (!Ember.TEMPLATES.application) {
    return "I can't find an application template anymore: make sure to add a name only to one of the templates.";
}

function existsTemplateWhoseNameIsNot(name) {
    for (templateName in Ember.TEMPLATES) {
        if (templateName !== name) return true;
    }
    return false;
}

if (!existsTemplateWhoseNameIsNot("application")) {
    return "You have an application template, but I can't seem to find the other one. What name did you gave it?"
}

return true;
