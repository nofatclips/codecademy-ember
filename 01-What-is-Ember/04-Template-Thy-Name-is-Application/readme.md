Template, thy name is Application
=================================

So, the last template was the one that made it to the screen. But what actually happened is a little tad more complex than this.

Every template has a name. If you don't define one, Ember.js will give it the default name, which is `application`. To specify your own name, add a `template-name` data tag to the `<script>` tag opening the template:

    <script type="text/x-handlebars" data-template-name="your-own-name">
        some markup here
    </script>

Also (again, by default) when the application starts, Ember looks for a template called (surprise, surprise!) `application` and displays it on the screen.

This is a common pattern in Ember: if elements are aptly named following a certain convention, you don't need to specify which one to use. In this case we didn't need to configure which template to show at startup. You can always override this defaults, but why would you do that?

To put it in buzzwords: Ember relies on **convention over configuration**.
