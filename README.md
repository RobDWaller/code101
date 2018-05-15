# Code 101 (HTML, CSS & JavaScript)

This is a simple training document and group of files that will help 'noobs' get started with writing code. It has a focus on HTML, CSS and JavaScript.

The training files are broken down into two core folders `training-files` and `complete files`. The complete files folder contains all the working and completed code so you can see what the project should look like when you have completed the training. The training files folder contains the same basic code with parts missing, this is so you can work through the code, fill in the gaps and learn how the code works.

## Training Aims

This training documentation aims to give you a very basic understanding of HTML, CSS and JavaScript and how they relate to each other.

You will learn:

- What HTML looks like and how it is structured.
- How to manipulate and add content to an HTML page using JavaScript.
- How to select HTML elements and style them using CSS.

## Getting Started

To complete this training course you need to edit the files in the `training-files/` directory and follow the tasks below.

Each training task requires you to make minor edits to the code and will require you to uncomment existing code.

The completed files for comparison can be found in the `complete-files` directory. These files are for reference, do not touch them.

A woking version of this code can be found on [JSFiddle](https://jsfiddle.net/dg30snnq/)

## What is HTML

Hyper Text Markup Language is a way of marking up text so it can be shared over the web. It gives text structure and allows you to add additional content such as imagery and video.

HTML is made up of nested elements / tags that help define structure and text hierarchy. Each tag has an opening and closing tag.

As an example here is a simple unordered list of data:

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
```

## What is CSS

Cascading Style Sheets allow you to style HTML markup. They allow you to add color, font styles, structure, layout and many more styles.

CSS is based around selectors which allow you to select elements from within an HTML document and apply styles to them individually.

As an example the following selector would turn our list items above green.

```css
li {
    color: green;
}
```

## What is JavaScript

JavaScript is a dynamic scripting language that allows us to apply interactivity to an HTML page.

For example the following code would add an alert box to the web page that display the message "Hello World!".

```JavaScript
alert('Hello World');
```

## Training Tasks

There are three simple training tasks. Two are focussed on JavaScript and one on CSS, both of which make use of HTML.

### Task One: Add a Page Title

The first task requires you to edit the file `training-files/scripts/title.js`. The aim of the task is to add a title to the webpage by adding text to the `H1` element in the HTML.

```html
<h1 id="blog-title"></h1>
```

The first step is to define what our title will be. We do this by editing the value that is assigned to the `title` variable in the JavaScript code. This will define what text will appear on the webpage.

```javascript
var title = 'Set the title to what you want';
```

Next we need to select the HTML element we want to add the title text to. In this case it's the `blog-title` element referenced above and we achieve this by using the `getElementById` method available in JavaScript.

```javascript
var titleElement = document.getElementById('blog-title');
```

Finally we need to assign the title we defined to the HTML element. We do this by assigning our `title` variable to the `titleElement` attribute `innerHTML` property.

```javascript
titleElement.innerHTML = title;
```

And we're done. Save your file and when you refresh your HTML page you will now see the title you defined appear on the web page.

### Task Two: Add the Blog Posts

Open the file `training-files/scripts/blogs.js`. In this task we are going to add some blog posts to our web page which will involve looping through an array and adding each array item to the page.

Our blogs array is made up of a list of objects that contain titles and authors.

```javascript
var blogPosts = [
    {
        'title': 'Hello World',
        'author': 'John'
    },
    {
        'title': 'Foo Bar',
        'author': 'Chris'
    },
    {
        'title': 'Car Park',
        'author': 'James'
    }
];
```

First we need to grab the element from the HTML where we want to display the blog posts and assign it to a variable. Again we use the JavaScript `getElementById()` method.

```javascript
var postsHolder = document.getElementById('blog-posts');
```

The next step is to loop through the blog posts and assign them to our selected element. This involves a few steps:

- Use the `forEach()` method to loop through the blogs.
- Create a `<p>` / paragraph element to contain each blog element.
- Turn the array items in to text elements.
- Add the text element to the paragraph element.
- Append each paragraph element to the holder element we chose.

```javascript
blogPosts.forEach((item) => {

    // Create a new paragraph element
    let post = document.createElement('p');

    // Create a text element containing the text we want
    let text = document.createTextNode(item.title + ': By ' + item.author);

    // Add the text element to the paragraph element
    post.appendChild(text);

    // Add the post to the posts holder element
    postsHolder.appendChild(post);
});
```

Once this is done you can save your code and refresh the page you should see the blog posts appear.

### Task Three: Style the Page

Currently our web page has no styling applied. To style the page we need to write some CSS that applies styles to our HTML page.

On our page we have three elements to style:

- The `<h1>` blog title
- The `<h2>` posts title
- The blog posts

```html
<h1 id="blog-title"></h1>
<h2>Posts:</h2>
<div id="blog-posts">

</div>
```

To begin open the `training-files/style.css` file. The first step is to set the H1 element text to red and the font size to 50px.

The code is made up of two parts:

- A selector which defines the element we want to sytle.
- Attributes that apply our styling.

```css
h1 {
    color: red;
    font-size: 50px;
}
```

If you save this file and refresh the page you'll see the stylings applied.

Next we want to edit the H2 element and the blog post elements.

We will do the following:

- Change the H2 element font weight
- Add padding to the left of the H2 element
- Italicise each blog post
- Set the color of each blog post to dark magenta

```css
h2 {
    font-weight: normal;
    padding-left: 30px;
}

p {
    font-style: italic;
    color: darkmagenta;
}
```

Again save the file and reload your web page and they styles will have taken effect.

**Note:** It may be slightly confusing that we have styled the blog posts by selecting `<p>` elements as none exist in the HTML markup. We though added `<p>` elements to the page when we added the blog posts using JavaScript.

## Further Reading and Useful Resources

The following websites provide useful resources and further reading on code:

- [Dev.to](https://dev.to/): A community of developers sharing learnings on code.
- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript): Mozilla's amazing JavaScript coding documentation.
- [CSS Tricks](https://css-tricks.com/): Lessons and tips on writing better CSS.
- [JSFiddle](https://jsfiddle.net/): A great place to practice writing CSS, HTML, JavaScript.

## Author

Rob Waller
[@RobDWaller](https://twitter.com/RobDWaller)
