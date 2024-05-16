document.addEventListener('DOMContentLoaded', function () {
    const commentList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit-comment');

    function addComment(text) {
        const newComment = document.createElement('li');
        newComment.textContent = text;
        commentList.appendChild(newComment);
    }

    submitButton.addEventListener('click', function () {
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            addComment(commentText);
            commentInput.value = '';
        }
    });

    const initialComments = ['First comment', 'Second comment', 'Third comment'];
    initialComments.forEach(comment => addComment(comment));

    function receiveCommentFromServer() {
        console.log('New comment received from server')
    }

    setInterval(receiveCommentFromServer, 30000);
    
});
