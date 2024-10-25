import { comments as data } from "../data/comments";
import {generateId} from "../utils";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  return comments.find((c) => c.id === id)
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.find((c) => c.postId === postId)
}

export function updateCommentBody(id, body) {
  //update comment body

  comments = comments.map((c) => {
    if (c.id === id) {
      return { ...c, body: body };
    }

    return c;
  });
}

export function deleteCommentById(id) {
  //delete comment by id
  comments = comments.filter(comment => comment.id !== id);
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  let id = generateId(comments)
  comments.push({...comment, id})
}


export function getAllComments() {
  // get all users
  return [...comments];
}