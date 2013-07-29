My <body> is a template
=======================

So, it should be clear by now that Ember is storing both our templates in some object, using their name as the key. However, only one of our templates is currently displayed. What a waste of good markup!

We'll see more interesting ways of combining multiple templates to build a page of your applications, but let's start with the simplest, which is also the best way to introduce HandleBars helpers.

A **helper** is a simple function that can be called directly from inside a HandleBars template using the "mustache" notation, that is the double curly braces:

    <script type="text/x-handlebars">
        ....
        {{helperFunction}}
        ....
    </script>

Helpers can take arguments too. You just place them in the double braces, after the helper name. No commas, no parentheses, just like this:

    {{helperFunction arg1 arg2}}

The helper we're going to use is called `template`. It allows to render a template inside another template by specifying its name as an argument.
