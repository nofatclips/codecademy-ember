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

function templateWhoseNameIsNot(name) {
    for (templateName in Ember.TEMPLATES) {
        if (templateName !== name) return templateName;
    }
    return false;
}

var otherTemplate = templateWhoseNameIsNot("application");
if (!otherTemplate) {
    return "You have an application template, but I can't seem to find the other one. What name did you gave it?"
}

var rxTemplateName = /data-template-name\s*=\s*"(.*)"/;
var rxTemplateHelper = new RegExp ("{{\\s*template\\s*\"" + otherTemplate + "\"\\s*}}")
console.log(rxTemplateHelper);

var rxTemplate = new RegExp("<script.*x-handlebars[\\s\\S]*?</script>", "g");
var templates = code['index.html'].match(rxTemplate);
var passed = false;
templates.forEach(function(template) {
    var thisTemplate = template.match(rxTemplateName);
    if (thisTemplate && thisTemplate[1] === otherTemplate) return;
    if (template.match(rxTemplateHelper)) passed = true;
});

if (!passed) {
    return "Have you added the {{template \"" + otherTemplate + "\"}} helper to your application?";
}

return true;
