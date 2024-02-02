import "./styles.css"

function AddUsers() {
  return (
    <div className="add-user">
      <h3>Users List</h3>
      <input type="text" placeholder="Add New user" />
      <button>Add User</button>
    </div>
  );
}

export default AddUsers;
