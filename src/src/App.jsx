
import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <main className="app">
      <header className="header">
        <h1>MISHTIKA</h1>
        <p>ARTIFICIAL JEWELLERY AND PIERCING</p>
      </header>

      {page === "home" && (
        <section className="welcome">
          <h2>Welcome to MISHTIKA</h2>
          <p>
            Discover artificial jewellery and
            professional piercing services.
          </p>

          <div className="actions">
            <button onClick={() => setPage("piercing")}>
              Book Your Piercing
            </button>

            <button onClick={() => setPage("shop")}>
              Shop Jewellery
            </button>
          </div>
        </section>
      )}

      {page === "piercing" && (
        <section className="welcome">
          <h2>Book Your Piercing</h2>
          <p>Choose your preferred piercing service.</p>
          <div className="actions">
            <button>Ear Piercing</button>
            <button>Nose Piercing</button>
            <button>Lip Piercing</button>
            <button>Belly Piercing</button>
            <button onClick={() => setPage("home")}>
              Back to Home
            </button>
          </div>
        </section>
      )}

      {page === "shop" && (
        <section className="welcome">
          <h2>Shop Jewellery</h2>
          <p>Explore MISHTIKA jewellery collection.</p>
          <div className="actions">
            <button>View Collection</button>
            <button onClick={() => setPage("home")}>
              Back to Home
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
