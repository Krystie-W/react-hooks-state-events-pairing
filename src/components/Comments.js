function Comments({ comments, commentStatus }) {
  
    return (
      <div>
        {commentStatus && 
          <>
          <h2>{comments.length} Comments</h2>
          {comments.map((item) => (
            <>
              <h3 key={item.id}>{item.user}</h3>
              <p>{item.comment}</p>
            </>
          ))}
        </>
        }
      </div>
    )
}
  
  
  export default Comments;