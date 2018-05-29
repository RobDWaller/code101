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

Download the latest version of the training files from the [releases page](https://github.com/RobDWaller/code101/releases) on GitHub. This is the release that appears at the top of the page, click the link "Source code (zip)". UnZip the file and open the outputted folders in [Atom](https://atom.io/) or another text editor.

To complete this training course you need to edit the files in the `training-files/` directory and follow the tasks below.

To begin open the `training-files/index.html` file in a browser. You just need to click on the file and it will open automatically.

Each training task requires you to make minor edits to the code and will require you to [uncomment existing code](http://www.tizag.com/javascriptT/javascriptcomment.php).

A woking version of this code can be found on [JSFiddle](https://jsfiddle.net/dg30snnq/)

## What is Hyper Text Markup Language (HTML)?

HTML is a way of marking up text so it can be shared over the web. It gives text structure and allows you to add content such as imagery and video.

HTML is made up of nested elements that help define structure and text hierarchy. Each element is made up of an opening and closing tag.

As an example here is a simple unordered list of data marked up by HTML:

```html
<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
```

The code example will output an unordered list of items, each marked with a bullet point:

- Item One
- Item Two
- Item Three

**Note:** closing tags in HTML are marked with a forward slash `/` eg `</h1>`.

## What are Cascading Style Sheets (CSS)?

CSS allows you to style HTML markup. You can add color, font styles, structure, layout and much more.

CSS is based around selectors which allow you to select elements from within an HTML document and apply styles to them individually.

As an example the following `li` selector will turn our list items `<li>` above green.

```css
li {
    color: green;
}
```

**Note:** the Americanisation of the word "color". All code includes the American spelling of words rather than the English. Also named colors are restricted to the [following list](https://www.w3schools.com/cssref/css_colors.asp).

## What is JavaScript?

JavaScript is a dynamic scripting language that allows you to apply interactivity to an HTML page.

For example the code below will display an alert box on a web page with the message "Hello World!".

```JavaScript
alert('Hello World');
```

You can also select and manipulate HTML elements dynamically. The following code will select an H1 element based on the id attribute.

```javascript
document.getElementById('blog-header');
```

Will select:

```html
<h1 id="blog-header"></h1>
```

Once the element is selected you can change almost anything about it, what attributes it has, the values of the those attributes and the text the element contains.

**Note:** the above code will select any element that has the id attribute blog-header, eg `<p id="blog-header"></p>`.

## Training Tasks

There are three training tasks, two are focussed on JavaScript and one on CSS. All the tasks make use of and affect HTML.

Before you begin remember to open the code in a text editor like [Atom](https://atom.io/) or even Notepad, and the `training-files/index.html` file in a web browser such as Chrome.

### Task One: add a page header with JavaScript

The first task requires you to edit the file `training-files/scripts/header.js`. The aim is to add a header to the webpage with JavaScript by placing text inside the `H1` element contained in the `index.html` file.

```html
<h1 id="blog-header"></h1>
```

To define what our page header will be we need to assign a value to the `header` variable in the `header.js` file. Find the header variable and place some text between the quote marks and end your line with a semi-colon `;`.

```javascript
var header = 'Set the header to what you want';
```

Next we need to select the HTML element we want to add the header text to. In this case it's the `blog-header` element in the `index.html` file. The connection between the JavaScript and the HTML is made via the `id="blog-header"` attribute on the H1 element in the `index.html` file. We access the id attribute using the `getElementById()` method available in JavaScript.

```javascript
var headerElement = document.getElementById('blog-header');
```

Finally we assign the header to the HTML element. We do this by assigning our `header` variable to a `innerHTML` property on the `headerElement` variable.

```javascript
headerElement.innerHTML = header;
```

And we're done. Save your `header.js` file and when you refresh your HTML page in your browser you will now see the header text appear on the web page.

If you have any problems it will most likely relate to syntax. Check that any text you added sits within quote marks and that all your code lines end with a semi-colon.

### Task Two: add blog posts via JavaScript

Open the JavaScript file `training-files/scripts/blogs.js`. At the top of the file you will see a variable called `blogPosts`. This variable has been assigned an array of data. An array is just like a list and contains items. In this case we have an array of blogs each containing a title and an author. Our aim is to display these blog items on our web page.

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

The next step is to loop through the blog posts represented by our `blogPosts` variable and assign each item to the `postsHolder` variable that references the `blog-posts` element.

This process involves a number of steps:

- Use the `forEach()` method available on the `blogPosts` variable to loop through the blogs.
- Create an HTML `<p>` / paragraph element to contain each blog item, see the `post` variable in the code below.
- Turn each array item into a text element, see the `text` variable in the code below.
- Add the text element to the paragraph element using the `appendChild()` method.
- Append each `post` variable to the `postHolder` variable using the `appendChild()` method.

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

**Note:** concatenation of strings is achieved using the `+` operator, eg `'string one ' + 'string two ' + 'string three'` will create `string one string two string three`. In the above code we are concatenating three strings `item.title + ': By ' + item.author`, two of which are represented by variables.

### Task Three: style the page with CSS

Currently our web page has no styling applied. To style the page we need to write some CSS that applies styles to our HTML page.

On our page we have three elements to style:

- The `<h1>` blog header
- The `<h2>` posts title
- The blog posts

They are represented in the `index.html` by the following markup:

```html
<h1 id="blog-header"></h1>
<h2>Posts:</h2>
<div id="blog-posts">

</div>
```

To begin open the `training-files/style.css` file. The first step is to set the H1 element text to red and the font size to 50px.

The CSS code is made up of two parts:

- A selector which defines the element we want to style, `h1`. Selectors are opened and closed using curly brackets `{ }`.
- Attributes that apply our styling, `color: red;`. All attributes must be opened with a colon and closed with a semi-colon.

```css
h1 {
    color: red;
    font-size: 50px;
}
```

Once you have made the additions to your `style.css` file you can save the file and refresh your browser. You will now see the new styles applied to your blog header.

Next we want to style the H2 element and the blog post elements.

We will do the following:

- Change the H2 element font weight.
- Add padding (white space) to the left of the H2 element.
- Italicise each blog post.
- Set the color of each blog post to dark magenta.

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
