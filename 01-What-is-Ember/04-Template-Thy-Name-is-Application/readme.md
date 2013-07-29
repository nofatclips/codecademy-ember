Template, thy name is Application
=================================

So, the last template was the one that made it to the screen. But what actually happened is a little tad more complex than this.

Every template has a name. If you don't define one, Ember.js will give it the default name, which is `application`. To specify your own name, add a `data-template-name` tag to the `<script>` tag opening the template:

    <script type="text/x-handlebars" data-template-name="your-own-name">
        some markup here
    </script>

What happened, then, is that our first template was saved with a name of `application`. Our second template was also saved with a name of `application`, overwriting the first one. So we actually ended up with a single template, which is the one shown on the screen! But then again: why does anything shows at all?

That's because (again, by default) when the application starts Ember looks for a template called (surprise, surprise!) `application` and displays it on the screen.

This is a common pattern in Ember: if elements are aptly named following a certain convention, you don't need to specify which one to use. In this case we didn't need to configure which template to show at startup. You can always override these defaults, but why would you do that?

To put it in buzzwords: Ember relies on **convention over configuration**. And you should too.

(Oh, in the previous excercise we supposed that the template was rendered because it was the only one available, but now we know better: if we had only one template, but its name is not `application`, then it won't be rendered by default. Nothing will be rendered, in fact, unless we explicitly configure Ember to do so!)
