# Code 101 (HTML, CSS & JavaScript)

This is a simple training document and group of files that will help 'noobs' get started with writing code. It has a focus on HTML, CSS and JavaScript.

The training files are broken down into two core folders `training-files` and `complete files`. The complete files folder contains all the working and completed code so you can see what the project should look like when you have completed the training. The training files folder contains the same basic code with parts missing, this is so you can work through the code, fill in the gaps and learn how the code works.

## Getting Started

## Training Aims

## What is HTML

## What is CSS

## What is JavaScript

## Training Tasks

There are three simple training tasks. Two are focussed on JavaScript and one on CSS, both of which make use of HTML.

### Task One: Add a Page Title

The first task requires you to edit the file `training-files/scripts/title.js`. The aim of the task is to add a title to the webpage by adding text to the `H1` element in the HTML.

```
<h1 id="blog-title"></h1>
```

The first step is to define what our title will be. We do this by editing the value that is assigned to the `title` variable in the JavaScript code. This will define what text will appear on the webpage.

```
var title = 'Set the title to what you want';
```

Next we need to select the HTML element we want to add the title text to. In this case it's the `blog-title` element referenced above and we achieve this by using the `getElementById` method available in JavaScript.

```
var titleElement = document.getElementById('blog-title');
```

Finally we need to assign the title we defined to the HTML element. We do this by assigning our `title` variable to the `titleElement` attribute `innerHTML` property.

```
titleElement.innerHTML = title;
```

And we're done. Save your file and when you refresh your HTML page you will now see the title you defined appear on the web page.

### Task Two: Add the Blog Posts

### Task Three: Style the Page

## Further Reading and Useful Resources

## Author

Rob Waller
[@RobDWaller](https://twitter.com/RobDWaller)
