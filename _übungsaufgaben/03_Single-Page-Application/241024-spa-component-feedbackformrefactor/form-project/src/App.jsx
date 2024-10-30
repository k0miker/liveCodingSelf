import "./App.css";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you!");
    e.target.reset();
  }

  return (
    <main>
      <h1>Lead registration</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="NAME" required />
        <div className="flex">
          <input type="tel" name="tel" placeholder="PHONE" required />
          <select name="type" required>
            <option value="">TYPE</option>
            <option value="PROSPECT">PROSPECT</option>
            <option value="INTERNAL">INTERNAL</option>
            <option value="DIRECT">DIRECT</option>
          </select>
        </div>
        <input name="email" type="email" placeholder="EMAIL ADDRESS" />
        <input name="code" type="number" placeholder="CODE" />
        <button>Submit</button>
      </form>
    </main>
  );
}

export default App;
