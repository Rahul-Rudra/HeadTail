import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="m-2">
        <Link to="/">Back to home</Link>
      </div>
      <div className="m-2 fs-6 card border border-2">
        <p className="p-2">
          Richard McClintock, a Latin scholar from Hampden-Sydney College, is
          credited with discovering the source behind the ubiquitous filler
          text. In seeing a sample of lorem ipsum, his interest was piqued by
          consectetur—a genuine, albeit rare, Latin word. Consulting a Latin
          dictionary led McClintock to a passage from De Finibus Bonorum et
          Malorum (“On the Extremes of Good and Evil”), a first-century B.C.
          text from the Roman philosopher Cicero.
        </p>
      </div>
    </>
  );
}

export default About;
