Behind the Scenes
=================

Before we go on to build something more meaningful, I think it's important to understand what just happened.

First things first: the template appeared on the screen, in the web page, as if it was normal HTML. We say that the template was **rendered**.

Probably an odd thing you noticed is that the HTML from the template appeared after the "Waiting..." line, even though it's placed before in the HTML source.

In fact, where you put the Handlebars template is irrelevant: later we'll learn how to tell Ember where to output our markup. Since we didn't, the whole thing was just appended to the existing page.

Moreover, we didn't even tell Ember which template to display, but since there was only one it seems pretty easy to predict was would happen, does it? Which begs the question...

What would happen if we define two templates?
