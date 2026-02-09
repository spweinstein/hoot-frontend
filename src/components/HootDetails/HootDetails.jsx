import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import * as hootService from "../../services/hootService";
import CommentForm from "../CommentForm/CommentForm";

const HootDetails = () => {
  const [hoot, setHoot] = useState(null);
  const { hootId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoot = async () => {
      const hootData = await hootService.show(hootId);
      setHoot(hootData);
    };
    fetchHoot();
  }, [hootId]);

  const handleAddComment = async (commentFormData) => {
    const newComment = await hootService.createComment(hootId, commentFormData);
    setHoot({ ...hoot, comments: [...hoot.comments, newComment] });
  };
  const handleDelete = () => {
    hootService.deleteHoot(hootId);
    navigate("/hoots");
  };

  if (!hoot) return <main>Loading...</main>;

  return (
    <main>
      <section>
        <header>
          <p>{hoot.category.toUpperCase()}</p>
          <h1>{hoot.title}</h1>
          <p>
            {`${hoot.author.username} posted on
            ${new Date(hoot.createdAt).toLocaleDateString()}`}
          </p>
        </header>
        <p>{hoot.text}</p>
      </section>
      <section>
        <h2>Comments</h2>
        <CommentForm handleAddComment={handleAddComment} />

        {!hoot.comments.length && <p>There are no comments.</p>}

        {hoot.comments.map((comment) => (
          <article key={comment._id}>
            <header>
              <p>
                {`${comment.author.username} posted on
                ${new Date(comment.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{comment.text}</p>
          </article>
        ))}
      </section>
      <section>
        <h3>Actions</h3>
        <Link to={`/hoots/${hootId}/edit`}>Edit</Link>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </main>
  );
};

export default HootDetails;
