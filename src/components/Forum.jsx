import { useState, useEffect } from 'react';
import PostCard from './PostCard';
import { db } from '../firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  getDocs,
  doc,
  deleteDoc
} from 'firebase/firestore';

const ForumPage = () => {
  const [view, setView] = useState('posts');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [posts, setPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(postList);
    });
    return () => unsubscribe();
  }, []);

  const handleSave = (post) => {
    const alreadySaved = savedPosts.find(p => p.id === post.id);
    if (alreadySaved) {
      setSavedPosts(savedPosts.filter(p => p.id !== post.id));
    } else {
      setSavedPosts([...savedPosts, post]);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'posts'), {
        title: title,
        description: desc,
        anonymous: anonymous,
        user: anonymous ? 'Anonymous' : 'User',
        createdAt: new Date()
      });
      alert('✅ Post created!');
    } catch (error) {
      console.error('❌ Error adding post:', error);
      alert('Failed to create post.');
    }

    setTitle('');
    setDesc('');
    setAnonymous(false);
    setView('posts');
  };

  const handleOpenDetail = async (post) => {
    setSelectedPost(post);
    setView('detail');
    fetchComments(post.id);
  };

  const fetchComments = async (postId) => {
    const snapshot = await getDocs(collection(db, 'posts', postId, 'comments'));
    const commentList = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setComments(commentList);
  };

  const handleAddComment = async () => {
    if (!commentText || !selectedPost) return;
    await addDoc(collection(db, 'posts', selectedPost.id, 'comments'), {
      text: commentText,
      createdAt: new Date()
    });
    setCommentText('');
    fetchComments(selectedPost.id);
  };

  const handleDeleteComment = async (commentId) => {
    const ref = doc(db, 'posts', selectedPost.id, 'comments', commentId);
    await deleteDoc(ref);
    fetchComments(selectedPost.id);
  };

  return (
    <div className="forum-container">
      
      <div className="forum-sidebar">
        <button onClick={() => setView('create')}>Create Post</button>
        <button onClick={() => setView('saved')}>Saved Post</button>
        <button onClick={() => setView('posts')}>Back to Forum</button>
      </div>

      <div className="forum-main">
        {view === 'posts' && (
          <>
            <h2>Community Forum</h2>
 

            {posts.map(post => (
              <PostCard
                key={post.id}
                user={post.user}
                content={post.description}
                isSaved={savedPosts.some(p => p.id === post.id)}
                onSave={() => handleSave(post)}
                onComment={() => handleOpenDetail(post)}
              />
            ))}
          </>
        )}

        {view === 'create' && (
          <>
            <h2>Create Post</h2>
            <form onSubmit={handleCreate} className="create-post-form">
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Description:</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={5}
                  required
                />
              </div>

        

              <button type="submit" className="publish-btn">Publish</button>
            </form>
</>

        )}

        {view === 'saved' && (
          <>
            <h2>Saved Posts</h2>
            {savedPosts.map(post => (
              <PostCard
                key={post.id}
                user={post.user}
                content={post.description}
                isSaved={true}
                onSave={() => handleSave(post)}
                onComment={() => handleOpenDetail(post)}
              />
            ))}
          </>
        )}

        {view === 'detail' && selectedPost && (
  <>
    <div className="post-detail-section">
      <h2 className="post-title">{selectedPost.title}</h2>
      <p className="post-description">{selectedPost.description}</p>
    </div>

    <div className="comment-block">
      <h3>Comments</h3>

      <div className="comment-list">
        {comments.map((comment, index) => (
          <div className="comment-item" key={comment.id}>
            <span>💬 {comment.text}</span>
            <button
              onClick={() => handleDeleteComment(comment.id)}
              className="delete-comment-btn"
            >
              ❌
            </button>
          </div>
        ))}
      </div>

      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
        rows={3}
        style={{ marginTop: '1rem' }}
      />
      <br />
      <button onClick={handleAddComment} style={{ marginTop: '0.5rem' }}>Post Comment</button>
    </div>
  </>
)}
      </div>
    </div>
  );
};

export default ForumPage;
