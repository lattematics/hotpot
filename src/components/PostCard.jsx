const PostCard = ({ user, content, isSaved, onSave, onComment }) => {
  return (
    <div className="post-card">
      <div className="user-info">
        <div className="avatar" />
        <div className="username">{user}</div>
      </div>
      <p
        className="post-content"
        style={{
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}
      >
        {content}
      </p>
      <div className="post-actions">
        <span onClick={onComment} style={{ cursor: 'pointer', marginRight: '1rem' }}>💬</span>
        <span
          onClick={onSave}
          style={{
            cursor: 'pointer',
            color: isSaved ? '#8a2be2' : 'gray',
            fontWeight: isSaved ? 'bold' : 'normal'
          }}
        >
          {isSaved ? '✅ Saved' : '📩 Save'}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
