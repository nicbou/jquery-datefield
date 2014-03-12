Datefield for jQuery
================

A simple, cross-browser date entry control that doesn't suck. **Requires moment.js**. Tested in Internet Explorer 8 and above.

Why use it over a date picker?
-------------

1. Date pickers [are not always the right solution](http://ux.stackexchange.com/questions/49741/when-and-why-should-date-pickers-be-used)
2. Most date pickers have ambitious requirements (e.g. jQuery UI, 100 lines of CSS, etc), but this one only requires moment.js
3. No extra styles required. A `.valid` and `.invalid` class is added to your input.
4. Uber simple markup. The only extra markup is the `<span class='hint'>` appended to the input field.
	
How to use it:
-------------

1. Load jQuery, jquery.datefield.js and moment.js in your page
2. Create an input: `<input class='date' type='text'>`
3. Apply the .datepicker() function to this element: `$('input.date').datepicker()`

Some notes:
-------------

This plugin favors simplicity over customization, as it was meant to be used in an internal project. The file is under 100 lines long and should be fairly easy to edit if you want to change the format, localization or markup.
