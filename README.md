Datefield for jQuery
================

A simple, cross-browser date entry control that doesn't suck. **Requires moment.js**.

Why use it over a date picker?
-------------

1. Date pickers [are not always the right solution](http://ux.stackexchange.com/questions/49741/when-and-why-should-date-pickers-be-used)
2. Most date pickers have ambitious requirements (e.g. jQuery UI, 100 lines of CSS...)
3. No extra styles required, 
	
How to use it:
-------------

1. Load jQuery, jquery.datefield.js and moment.js in your page
2. Create an input: `<input class='date' type='text'>`
3. Apply the .datepicker() function to this element: `$('input.date').datepicker()`

Some notes:
-------------

This plugin favors simplicity over customization options, as it was meant to be used in an internal project. That being said, the file is  
