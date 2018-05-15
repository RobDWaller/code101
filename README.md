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

```
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

**Note** It may be slightly confusing that we have styled the blog posts by selecting `<p>` elements as none exist in the HTML markup. We though added `<p>` elements to the page when we added the blog posts using JavaScript.

## Further Reading and Useful Resources

## Author

Rob Waller
[@RobDWaller](https://twitter.com/RobDWaller)
