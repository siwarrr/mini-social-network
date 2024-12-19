import React, { createContext, useState, useContext, useEffect } from "react";
import { db } from '../services/firebase';

const PostsContext = createContext();

export const PostsProvieder = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('posts').onSnapshot((snapshot) => {
            const fetchedPosts = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setPosts(fetchedPosts);
        });

        return () => unsubscribe();
    }, []);

    const createPost = (post) => db.collection('posts').add(post);

    const addLike = (postId) => {
        const postRef = db.collection('posts').doc(postId);
        postRef.update({ likes: firebase.firestore.FieldValue.increment(1) });
    };

    const addComment = (postId, comment) => {
        const postRef = db.collection('posts').doc(postId);
        postRef.update({
            comments: firebase.firestore.FieldValue.arrayUnion(comment),
        });
    };

    return (
        <PostsContext.Provider value={{ posts, createPost, addLike, addComment }}>
            {children}
        </PostsContext.Provider>
    );

};

export const usePosts = () => useContext(PostsContext);