import Card from "./components/Card";

function App() {
  const cardData = [
    {
      name: "AeroFlex Runner",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      code: 4821,
      colors: "Black/Red",
      summary:
        "Lightweight running shoe with breathable mesh and responsive cushioning for everyday training.",
      price: 89.99,
    },
    {
      name: "Urban Glide Sneaker",
      image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      code: 7394,
      colors: "All White",
      summary:
        "Minimal lifestyle sneaker offering clean design, soft foam sole, and comfortable daily wear.",
      price: 74.5,
    },
    {
      name: "PowerLift Trainer",
      image: "https://workout.eu/img/p/6/5/6/9/5/65695-thickbox_default.jpg",
      code: 6157,
      colors: "Black/Gold",
      summary:
        "Durable training sneaker with reinforced heel support and flexible outsole for gym workouts.",
      price: 95.0,
    },
    {
      name: "NovaStride Pro",
      image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de",
      code: 1286,
      colors: "Grey/Lime",
      summary:
        "Modern athletic shoe with shock absorption, lightweight structure, and stylish everyday versatility.",
      price: 101.2,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-600 p-10 flex justify-center items-center flex-wrap gap-5">
      {cardData.map((card, idx) => (
        <Card key={idx} card={card} />
      ))}
    </div>
  );
}

export default App;
