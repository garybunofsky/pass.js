#Pass.js
*Very simple parameter passing.*  
'pass.js' is a way to pass url parameters to a form fields via JavaScript. Great for tracking where your leads are coming from. In other words, it pulls strings from a url and places them as field values.


##Usage
1. Include the javascript in your documents '<footer>'
```html
<footer>
  <script type="text/javascript" src="pass.js"></script>
</footer>
```

2. Set the 'id' of your field. Also set this id in pass.js.
```javascript
  document.getElementById('your-id').value = getParameter('campaign');
```

3. Finally you will want to specify the string you are parsing for.
```javascript
  document.getElementById('your-id').value = getParameter('your-string');
```


Full example:
```html
<!-- In your footer -->
<script type="text/javascript" src="pass.js"></script>

<!-- In your form-->
<input id="your-id" name="your-id" type="text"/>
```

```javascript
<!-- In your pass.js file-->
document.getElementById('your-id').value = getParameter('your-string');
```

##License
Pass.js is licensed under the [MIT license](http://opensource.org/licenses/MIT)).
