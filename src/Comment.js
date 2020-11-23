import React from 'react';

const Comment = ({author, waktu, content, image}) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={image} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {author}
                </a>
                <div className="metadata">
                    <span className="date">
                        {waktu}
                    </span>
                </div>
                <div className="text">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Comment;