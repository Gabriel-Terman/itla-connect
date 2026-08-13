import { darLike } from "../services/postService";

function formatearFecha(fecha) {
  if (!fecha) return "Enviando...";
  // Firestore entrega un Timestamp; toDate() lo convierte a fecha de JS.
  if (typeof fecha.toDate === "function") {
    return fecha.toDate().toLocaleString("es-DO", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return "";
}

function PostCard({ post }) {
  if (!post) return null;

  const { id, autor, contenido, categoria, fecha, likes } = post;

  return (
    <div className="post-card">
      <div className="post-card-header">
        <h3>{autor || "Usuario"}</h3>
        {categoria && <span className="post-card-categoria">{categoria}</span>}
      </div>

      <p>{contenido}</p>

      <small>{formatearFecha(fecha)}</small>

      <div className="post-card-footer">
        <button className="post-card-like-btn" onClick={() => darLike(id)}>
          👍 Me gusta ({likes || 0})
        </button>
      </div>
    </div>
  );
}

export default PostCard;
