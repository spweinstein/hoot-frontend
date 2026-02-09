import { useState, useEffect } from "react";
import { getHoots } from "../../services/hootService.js";
import { Link } from "react-router";
//hoots: title, author, comments, text, category
const HootList = () => {
  const [hoots, setHoots] = useState([]);

  useEffect(() => {
    const fetchHoots = async () => {
      const data = await getHoots();
      console.log(data);
      setHoots(data);
    };

    fetchHoots();
  }, []);

  return (
    <main>
      {hoots.map((hoot) => (
        <Link key={hoot._id} to={`/hoots/${hoot._id}`}>
          <article>
            <header>
              <h2>{hoot.title}</h2>
              <p>
                {`${hoot.author.username} posted on
                ${new Date(hoot.createdAt).toLocaleDateString()}`}
              </p>
            </header>
            <p>{hoot.text}</p>
          </article>
        </Link>
      ))}
    </main>
  );
};

export default HootList;
