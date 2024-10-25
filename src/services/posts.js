import { posts as data } from "../data/posts";
import {generateId} from "../utils";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return posts
}

export function getPostsByUser(userId) {
  //get all posts by userId
  return posts.filter((p) => p.userId === userId)
}

export function getPostById(id) {
  //get a single post by id
  return posts.find((p) => p.id === id)
}

export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.

}

export function updatePostTitle(id, title) {
  //update post title
  posts = posts.map((p) => {
    if (p.id === id) {
      return { ...p, title: title};
    }

    return p;
  });
}

export function updatePostBody(id, body) {
  //update post body
  posts = posts.map((p) => {
    if (p.id === id) {
      return { ...p, body: body };
    }

    return p;
  });
}

export function updatePost(id, post) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  posts = posts.map((p) => {
    if (p.id === id) {
      return { ...p, ...post };
    }
    return p;
  });
}

export function deletePostById(id) {
  //delete post by id
  posts = posts.filter(posts => posts.id !== id);
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  posts = posts.filter(posts => posts.userId !== userId);
}
