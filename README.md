# Code 101 (HTML, CSS & JavaScript)

This training document helps beginners learn code and has a focus on HTML, CSS and JavaScript.

The training files are broken down into two folders, `training-files` and `complete-files`. The complete files folder contains all the working, complete code so you can see what the project should look like when you complete the training. The training files folder contains the same basic code with parts missing, this is so you can work through the code, fill in the gaps and learn how the code works.

## Training Aims

This training documentation aims to give you a basic understanding of HTML, CSS and JavaScript and how they relate to each other.

You will learn:

- What HTML is and how it is structured.
- How to manipulate and add content to an HTML page using JavaScript.
- How to select HTML elements and style them using CSS.

## Getting Started

Download the latest version of the training files from the [releases page](https://github.com/RobDWaller/code101/releases) on GitHub. UnZip the file and open the outputted folders in [Atom](https://atom.io/) or another text editor.

To complete this training course you need to edit the files in the `training-files/` directory and follow the tasks below.

To begin open the `training-files/index.html` file in a browser. You just need to click on the file and it will open automatically.

Each training task requires you to make minor edits to the code and will require you to [uncomment existing code](http://www.tizag.com/javascriptT/javascriptcomment.php).

A woking version of this code can be found on [JSFiddle](https://jsfiddle.net/dg30snnq/)

## What is HTML?

Hyper Text Markup Language is a way of marking up text so it can be shared over the web. It gives text structure and allows you to add content such as imagery and video.

HTML is made up of nested elements / tags that help define structure and text hierarchy. Each tag has an opening and closing tag.

As an example here is a simple unordered list of data marked up by HTML:

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
```

It will output a bullet pointed list:

- Item One
- Item Two
- Item Three

## What is CSS?

Cascading Style Sheets allow you to style HTML markup. You can add color, font styles, structure, layout and much more.

CSS is based around selectors which allow you to select elements from within an HTML document and apply styles to them individually.

As an example the following `li` selector will turn our list items `<li>` above green.

```css
li {
    color: green;
}
```

## What is JavaScript?

JavaScript is a dynamic scripting language that allows you to apply interactivity to an HTML page.

For example the code below will add an alert box to a web page and display the message "Hello World!".

```JavaScript
alert('Hello World');
```

You can also select and manipulate HTML elements dynamically. The following code will select an `<h1 id="blog-title"></h1>` HTML element which you can then edit and change.

```javascript
document.getElementById('blog-title');
```
## Training Tasks

There are three training tasks, two are focussed on JavaScript and one on CSS. All the tasks make use of and effect HTML.

Before you begin remember to open the code in a text editor like [Atom](https://atom.io/) and the `training-files/index.html` file in a web browser such as Chrome.

### Task One: add a page title with JavaScript

The first task requires you to edit the file `training-files/scripts/title.js`. The aim is to add a title to the webpage with JavaScript by placing text inside the `H1` element contained in the `index.html` file.

```html
<h1 id="blog-title"></h1>
```

To define what our page title will be we need to assign a value to the `title` variable in the `title.js` file. Find the title variable and place some text between the quote marks and end your line with a semi-colon `;`.

```javascript
var title = 'Set the title to what you want';
```

Next we need to select the HTML element we want to add the title text to. In this case it's the `blog-title` element in the `index.html` file. The connection between the JavaScript and the HTML is made via the `id="blog-title"` attribute on the H1 element in the `index.html` file. We access the id attribute using the `getElementById()` method available in JavaScript.

```javascript
var titleElement = document.getElementById('blog-title');
```

Finally we assign the title to the HTML element. We do this by assigning our `title` variable to a `innerHTML` property on the `titleElement` variable.

```javascript
titleElement.innerHTML = title;
```

And we're done. Save your `title.js` file and when you refresh your HTML page in your browser you will now see the title text appear on the web page.

If you have any problems it will most likely relate to syntax. Check that any text you added sits within quote marks and that all your code lines end with a semi-colon.

### Task Two: add blog posts via JavaScript

Open the JavaScript file `training-files/scripts/blogs.js`. At the top of the file you will see a variable called `blopPosts`. This variable has been assigned an array of data, an array is just like a list and contains items. In this case we have a list of blogs each containing a title and an author. Our aim is to display these blog items on our web page.

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

First we grab the element from the HTML where we want to display the blog posts and assign it to a variable. Again we use the JavaScript `getElementById()` method as we did in the previous task. Notice the `id="blog-posts"` in the HTML markup we're going to reference it in our JavaScript code.

```javascript
var postsHolder = document.getElementById('blog-posts');
```

The next step is to loop through the blog posts represented by our `blogPosts` variable and assign each item to the `postsHolder` variable that refrences the `blog-posts` element.

This process involves a number of steps:

- Use the `forEach()` method available on the `blogPosts` variable to loop through the blogs.
- Create an HTML `<p>` / paragraph element to contain each blog item, see the `post` variable.
- Turn each array item in to a text element, see the `text` variable.
- Add the text element to the paragraph element using the `appendChild()` method.
- Append each `post` element to the `postHolder` element using the `appendChild()` method.

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

Once this is done you can save your code and refresh the page in your browser and you will see the blog posts appear.

### Task Three: style the page with CSS

Currently our web page has no styling applied. To style the page we need to write some CSS that applies styles to our HTML page.

On our page we have three elements to style:

- The `<h1>` blog title
- The `<h2>` posts title
- The blog posts

They are represented in the `index.html` by the following markup:

```html
<h1 id="blog-title"></h1>
<h2>Posts:</h2>
<div id="blog-posts">

</div>
```

To begin open the `training-files/style.css` file. The first step is to set the H1 element text to red and the font size to 50px.

The CSS code is made up of two parts:

- A selector which defines the element we want to style, `h1{ }`.
- Attributes that apply our styling, `color: red;`.

```css
h1 {
    color: red;
    font-size: 50px;
}
```

Once you have made the additions to your `style.css` file you can save the file and refresh your browser. You will now see the new styles applied to your blog title.

Next we want to edit the H2 element and the blog post elements.

We will do the following:

- Change the H2 element font weight
- Add padding to the left of the H2 element
- Italicise each blog post
- Set the color of each blog post to dark magenta

Again we just add some attributes to the selectors in the `style.css` file.

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

Finally save the `style.css` file and reload the browser to see the changes take effect.  

You've now completed the training, well done!! You've written some code!!

**Note:** It may be slightly confusing that we have styled the blog posts by selecting `<p>` elements as none exist in the HTML markup. We added `<p>` elements to the page when we added the blog posts using JavaScript in task two.

## Further Reading and Useful Resources

The following websites provide useful resources and further reading on code:

- [Dev.to](https://dev.to/): A community of developers sharing learnings on code.
- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript): Mozilla's amazing JavaScript coding documentation.
- [CSS Tricks](https://css-tricks.com/): Lessons and tips on writing better CSS.
- [JSFiddle](https://jsfiddle.net/): A great place to practice writing CSS, HTML, JavaScript.

## Author

If you have any questions feel free to get in touch on Twitter.

Rob Waller
[@RobDWaller](https://twitter.com/RobDWaller)
