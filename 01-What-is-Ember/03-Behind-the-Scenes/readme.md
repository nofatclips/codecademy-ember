[[Behind the Scenes]]

Before we go on to build something more meaningful, I think it's important to understand what just happened.

Probably the first thing you noticed is that the HTML from the template appeared after the "Waiting..." line, even though it's placed before in the HTML source.

In fact, where you put the Handlebars template is irrelevant: later we'll learn how to tell Ember where to output our markup. Since we didn't, the whole thing was just appended to the existing page.

In fact, we didn't even tell Ember which template to display, but since there was only one it was pretty easy to predict was would happen. Which begs the question...

What would happen if we define two templates?
