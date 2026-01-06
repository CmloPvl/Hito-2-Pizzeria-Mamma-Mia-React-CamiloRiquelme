const Profile = () => {
  const user = {
    name: "Camilo Riquelme",
    email: "camilo@email.com",
    role: "Cliente frecuente",
    favoritePizza: "Pepperoni",
    orders: 12,
    memberSince: "Enero 2025",
    address: "Santiago, Chile",
    status: "Activo",
  };

  return (
    <main className="container my-5">
      <div className="card bg-light shadow-lg mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">

          {/* Header perfil */}
          <div className="d-flex align-items-center gap-4 mb-4">
            {/* Imagen simulada */}
            <div
              className="rounded-circle bg-secondary d-flex align-items-center justify-content-center"
              style={{ width: "120px", height: "120px" }}
              aria-label="Imagen de perfil del usuario"
            >
              <span className="text-light fs-1">🍕</span>
            </div>

            <div>
              <h3 className="mb-1">{user.name}</h3>
              <p className="mb-0 text-muted">{user.role}</p>
              <span className="badge bg-success mt-2">{user.status}</span>
            </div>
          </div>

          {/* Información */}
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Email:</strong> {user.email}
            </li>
            <li className="list-group-item">
              <strong>Dirección:</strong> {user.address}
            </li>
            <li className="list-group-item">
              <strong>Pizza favorita:</strong> {user.favoritePizza}
            </li>
            <li className="list-group-item">
              <strong>Pedidos realizados:</strong> {user.orders}
            </li>
            <li className="list-group-item">
              <strong>Miembro desde:</strong> {user.memberSince}
            </li>
          </ul>

          {/* Acciones */}
          <div className="d-flex gap-3">
            <button className="btn btn-dark w-100">
              Editar perfil
            </button>

            <button className="btn btn-outline-danger w-100">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
