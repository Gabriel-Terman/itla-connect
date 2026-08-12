function PostCard({
  autor,
  categoria,
  contenido,
  fecha,
}) {
  return (
    <div className="post-card">

      <div className="post-header">

        <div className="avatar">
          {autor.charAt(0)}
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

        <button>❤️ Me gusta</button>

        <button>💬 Comentar</button>

        <button>🔗 Compartir</button>

      </div>

      <small>{fecha}</small>

    </div>
  );
}

export default PostCard;