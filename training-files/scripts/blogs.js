/**
 * This scripts creates a list of simple blog posts and them adds them to the
 * web page under the "Posts" title.
 *
 * @author Rob Waller <rdwaller1984@gmail.com>
 */
var blog = function () {

    // An array of blog posts with title and author
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

    // Log the blog posts array to the console.
    console.log(blogPosts);

    // Get the posts holder element from the HTML code
    //var postsHolder = document.getElementById();

    // Loop through each blog posts and add their text to the HTML page.
    blogPosts.forEach((item) => {

        // Create a new paragraph element
        //let post = document.createElement();

        // Create a text element containing the text we want
        //let text = document.createTextNode();

        // Add the text element to the paragraph element
        //post.appendChild(text);

        // Add the post to the posts holder element
        //postsHolder.appendChild(post);
    });

};
