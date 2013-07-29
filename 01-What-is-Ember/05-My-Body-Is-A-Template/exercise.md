Instructions
============

Inside the application (main) template, use the `template` helper to include our other template. As the only argument, pass the name of the template we want to include *as a string*.

Hint
----

The application template should look like:

    <script type="text/x-handlebars" data-template-name="application">
        <h2>Hello Codecademian, and Welcome to Ember</h2>
        {{partial "someNameHere"}}
    </script>

where `someNameHere` is the name you used in the `data-template-name` tag.
