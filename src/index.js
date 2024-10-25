//Call all functions inside services and log updated value/s
import * as userService from "./services/users";
import * as commentService from "./services/comments";
import * as postService from "./services/posts";
//==================================================================================================

console.log("Comment Service")
console.log("Comments: ")
console.log(commentService.getAllComments())
console.log("Getting comment with an Id of 4: ", commentService.getCommentById(4))
console.log("Getting comment with a post Id of 256: ", commentService.getCommentsByPostId(256))
console.log("Updating comment with an Id 4 with a new body 'new comment body': ")
commentService.updateCommentBody(4, "new comment body")
console.log("New Id 4 comment: ", commentService.getCommentById(4))  
console.log("Deleting comment with Id of 1")
commentService.deleteCommentById(1)
console.log("New comment list:")
console.log(commentService.getAllComments())

console.log("Adding comment to the end of the array")
console.log("after addComment:")
let comment =  {
    postId: 9,
    name: "aaaaaaaaaaa",
    email: "bbbbbbbbbbbbbbbb",
    body: "cccccccccccccccccccccccccccccc",
}
commentService.addComment(comment)
console.log(commentService.getAllComments())

//==================================================================================================

console.log("Post Service")
console.log("Posts:")
console.log(postService.getPosts());
console.log("Getting posts with a user Id of 1: ", postService.getPostsByUser(1))
console.log("Getting post with an id of 50: ", postService.getPostById(50))
let newPost = 
{
    userId: 2,
    title: "New Post",
    body: "New Body"
}
console.log("Adding a new post at the start of the array")
postService.addPost(newPost)
console.log("After adding: ", postService.getPosts())
console.log("Updating the post id 1 with new Title")
postService.updatePostTitle(1, "Updated Title");
console.log("After updating: ", postService.getPostById(1))
console.log("Updating the post id 1 with new body")
postService.updatePostBody(1, "Updated Body");
console.log("After updating: ", postService.getPostById(1))  
let updatedPost =
{
    title: "Updated Title",
    body: "Updated Body",
}
console.log("Updating the newly created post with new body and title")
postService.updatePost(100001, updatedPost);
console.log("After updating: ", postService.getPostById(100001))  
console.log("Deleting the post with id 1")
postService.deletePostById(1)
console.log("after deletion: ", postService.getPosts())
console.log("Deleting all posts with user id 1")
postService.deletePostsByUserId(1)
console.log("After deletion: ", postService.getPosts())

//==================================================================================================

console.log("User service")
console.log("Users: ", userService.getAllUsers())
console.log("Getting user with id of 1: ", userService.getUserById(1))
console.log("updating user id 1 with new email roger")
userService.updateUser(1, { email: "roger@77.com" });
console.log("After update: ", userService.getUserById(1))
console.log("Adding a new user at the start of the array")
userService.addUser(
    {
        name: "Derek Bautista",
        username: "Derek",
        email: "derek@77.biz",
        address: {
          street: "apollo",
          suite: "blk 112",
          city: "Makati City",
          zipcode: "1111",
          geo: {
            lat: "-3.14",
            lng: "3.14",
          },
        },
        phone: "123456789"
    }
)
console.log("After adding: ", userService.getAllUsers())
//==================================================================================================
