import { useState } from "react";

export default function App() {
  // Mendefinisikan komponen App
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // untuk menambahkan item ke daftar
    setItems((items) => [...items, item]);
  }

  return (
    <div className="app">
      <Logo /> {/* Memanggil komponen Logo */}
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats /> {/* Memanggil komponen Stats */}
    </div>
  );
}

function Logo() {
  // function menampilkan logo
  return <h1> ✈️ jalan abangkuhh 🔥</h1>; // menampilkan logo
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // Fungsi untuk  submit form
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Mau bawa apa yaa 🤔</h3> {/* deskripsi yg ada di web */}
      <h3>Jangan Lupa di Ceklist Ya 😁</h3> {/* deskripsi untuk memastikan barang */}
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {" "}
        {/* menampilkan input select dari 1 - 20 */}
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Barang yang dibawa" value={description} onChange={(e) => setDescription(e.target.value)} /> {/* input untuk memberikan barang */}
      <button>Bawa</button> {/* Tombol untuk menambahkan barang */}
    </form>
  );
  {
  }
}

function PackingList({ items }) {
  // Komponen untuk menampilkan daftar barang yang dibawa
  return (
    <div className="list">
      {" "}
      <ul>
        {" "}
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>{" "}
    </div>
  );
  {
  }
}

function Item({ item }) {
  return (
    <li>
      {" "}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description} {/* Menampilkan jumlah dan deskripsi item */}
      </span>
      <button className="x-button">{/* Tombol untuk menghapus item */}❌</button>
    </li>
  );
  {
  }
}

function Stats() {
  // Komponen untuk menampilkan statistik
  return (
    <footer className="stats">
      {" "}
      <em>🙅🏾 Kamu tidak memiliki daftar barang yg dibawa, dan sudah packing 0 barang (0%)</em> {/* Menampilkan pesan statistik */}
    </footer>
  );
  {
  }
}
