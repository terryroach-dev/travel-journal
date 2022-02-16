import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return (
      <Card key={item.title} item={item} />
    )
  });

  return (
    <div>
      <Header />
      {cards}
      <Footer />
    </div>
    
  );
}

export default App;
