// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem{
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost extends ForumItem{
  constructor(authorName, title, text, createdOn) {
    super();
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const comment01 = new comment01('john doe','HTML',"07/26/23","happy");

// TODO: Create a new object using the BlogPost class constructor.
const BlogPost01 = new BlogPost01('john doe','HTML',"07/26/23","");
// TODO: Log both newly created BlogPost and Comment to the console.
console.log (comment01)
console.log (BlogPost01)