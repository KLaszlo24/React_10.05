import { AllatKartya } from "./components/AllatKartya";
import { allatok, elohelyek, taplalkozasok } from "./data/allatok";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const handleKiir = (nev: string, kor: number) => {
    alert(`Az állat neve: ${nev}, életkora: ${kor} év`);
  };

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 kartya">
          <div className="p-5 bg-success text-white rounded">
            <h1 id="focim">🐾 Állatkert lakói</h1>
            <p className="mb-0">Téma: Állatok az állatkertben</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 kartya">
          <div className="card">
            <div className="card-header">Mit érdemes tudni az állatkerti állatokról?</div>
            <div className="card-body">
              <p>Az állatkertekben különböző földrészekről származó állatokkal találkozhatunk. Az állatokat fajuknak és természetes élőhelyüknek megfelelő körülmények között gondozzák.</p>
              <p>Az állatok életkora és testsúlya fajonként eltérhet. Táplálkozásuk is különböző: vannak <strong>növényevők</strong>, <em>húsevők</em> és mindenevők.</p>
              <p className="mb-0">Egyes állatfajok veszélyeztetettek, ezért védelmük és a természet megőrzése fontos feladat.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 kartya">
          <h2>Élőhelyek</h2>
          <ul className="list-group">
            {elohelyek.map((elohely, index) => <li className="list-group-item" key={index}>{elohely}</li>)}
          </ul>
        </div>
        <div className="col-md-4 kartya">
          <h2>Népszerű állatok</h2>
          <ol className="list-group list-group-numbered">
            {allatok.map((allat, index) => <li className="list-group-item" key={index}>{allat.faj}</li>)}
          </ol>
        </div>
        <div className="col-md-4 kartya">
          <h2>Táplálkozás</h2>
          <ol className="list-group list-group-numbered">
            {taplalkozasok.map((etkezes, index) => <li className="list-group-item" key={index}>{etkezes}</li>)}
          </ol>
        </div>
      </div>

      <div className="row">
        <div className="col-12 kartya">
          <h2>Az állatkert néhány lakója</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-success">
                <tr><th>Név</th><th>Életkor</th><th>Súly</th><th>Veszélyeztetett?</th><th>Kedvenc ételek</th></tr>
              </thead>
              <tbody>
                {allatok.map((allat, index) => (
                  <tr key={index}>
                    <td>{allat.nev}</td><td>{allat.kor} év</td><td>{allat.suly} kg</td>
                    <td>{allat.veszelyeztetett ? "Igen" : "Nem"}</td><td>{allat.kedvencEtelek.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12"><h2>Ismerd meg őket!</h2></div>
        {allatok.map((allat, index) => (
          <AllatKartya
            key={index}
            allat={allat}
            muvelet={() => handleKiir(allat.nev, allat.kor)}
          />
        ))}
      </div>

      <div className="row">
        <div className="col-12 kartya">
          <div className="card">
            <div className="card-header">Amit érdemes megjegyezni</div>
            <div className="card-body">
              <ul>
                <li>Minden állatfajnak sajátos táplálkozási igényei vannak.</li>
                <li>Az állatok életkora és testsúlya fajonként, illetve egyedenként eltérhet.</li>
                <li>A veszélyeztetett fajok védelme fontos természetvédelmi feladat.</li>
                <li>Az állatkertekben az állatok gondozása mellett az ismeretterjesztés is fontos.</li>
                <li>Egy állat adatai szöveget, számot, logikai értéket és tömböt tartalmaznak.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-3">
        <p><b>Az oldalt készítette: </b><i>Krajcz László</i></p>
        <p className="mb-0"><strong>Készítés dátuma: </strong><span className="dolt">2026.10.05</span></p>
      </footer>
    </div>
  );
}

export default App;
