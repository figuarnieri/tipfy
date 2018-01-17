# Tipfy - Simple Tooltip ES 6
A Javascript library ES6, without a dependency of jQuery, Zepto, and etc... Very simple to install and use. With only 4kb code (JS + CSS)
## Install / Usage
### Add script file
```html
<script src="https://cdn.rawgit.com/figuarnieri/tipfy/master/tipfy.min.js"></script>
or
<script src="path/js/tipfy.min.js"></script>
```
### Add style file
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/figuarnieri/tipfy/master/tipfy.css">
or
<link rel="stylesheet" href="path/js/tipfy.css">
```
### HTML _(by class or attribute)_
Insert a selector in class tag
```html
<i class="fa fa-user" data-tipfy="User Settings" aria-hidden="true" aria-label="User Settings"></i>
or
<i class="fa fa-user tooltip-by-class" aria-hidden="true" aria-label="User Settings"></i>
```
### Javascript Simple _(by attribute)_
```html
<script>
  new Tipfy('[data-tipfy]');
</script>
or
<script>
  new Tipfy('.tooltip-by-class');
</script>
```
## Data attributes _[data-*]_
If necessary, you could add attributes in the tag, to configure your tooltips options

### data-tipfy
Attribute to add text in your tooltip or HTML Element
```html
<i data-tipfy="Simple Text"></i>
```
```html
<i data-tipfy=".select-class"></i>
```
### data-tipfy-side
Attribute to add direction side in your tooltip
* _\[data-tipfy-side="top"\]_ (default)
* _\[data-tipfy-side="bottom"\]_
* _\[data-tipfy-side="right"\]_
* _\[data-tipfy-side="left"\]_
```html
<i data-tipfy="Simple Text" data-tipfy-side="right"></i>
```
### data-tipfy-class
Attribute to add one or more custom class
```html
<i data-tipfy="Simple Text" data-tipfy-class="select-class-custom"></i>
```
### data-tipfy-text
Add data-tipfy-text attribute to get raw text, if your tooltip text is a selector css
```html
<i data-tipfy=".select-class" data-tipfy-text=""></i>
```

## Source
[Github](https://github.com/figuarnieri/tipfy) | [Example](https://figuarnieri.github.io/tipfy/) | [@figuarnieri](https://twitter.com/figuarnieri)

## License
The MIT License
Copyright 2018 © [Filipe Guarnieri](https://figuarnieri.github.io/)