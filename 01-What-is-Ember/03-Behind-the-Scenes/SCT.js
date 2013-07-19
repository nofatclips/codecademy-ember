$expect(".ember-application").to.exist(
    "Check your JavaScript! I can't seem to find an Ember application running."
);

var rx = new RegExp("text/x-handlebars", "g");
var numTemplates = code['index.html'].match(rx).length;
if (numTemplates<2) {
    return "The HTML code should contain two Handlebars templates.";
}

rx = new RegExp("Hello Codecademian, and Welcome to Ember", "g");
var numTemplates = code['index.html'].match(rx).length;
if (numTemplates>1) {
    return "Please, don't copy and paste: use a different markup for your template.";
}
