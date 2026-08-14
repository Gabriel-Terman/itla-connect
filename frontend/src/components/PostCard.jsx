import { darLike } from "../services/postService";

function PostCard({
  id,
  likes,
  autor,
  categoria,
  contenido,
  fecha,
}) {

  const handleLike = async () => {
    try {

      await darLike(id);

    } catch (error) {

      console.error(error);

    }
  };

  const formatearFecha = (fecha) => {

    if (!fecha) return "Reciente";

    try {

      const fechaObj =
        typeof fecha === "string"
          ? new Date(fecha)
          : fecha;

      return fechaObj.toLocaleString("es-DO", {
        dateStyle: "short",
        timeStyle: "short",
      });

    } catch {
      return "Reciente";
    }
  };

  return (
    <div className="post-card">

      <div className="post-header">

        <div className="avatar">
          {autor?.charAt(0).toUpperCase()}
        </div>

        <div>

          <h3>{autor}</h3>

          <span className="categoria">
            {categoria}
          </span>

        </div>

      </div>

      <p>{contenido}</p>

      <div className="post-actions">

        <button onClick={handleLike}>
          ❤️ {likes} Me gusta
        </button>

        <button>
          💬 Comentar
        </button>

        <button>
          🔗 Compartir
        </button>

      </div>

      <small>
        {formatearFecha(fecha)}
      </small>

    </div>
  );
}

export default PostCard;