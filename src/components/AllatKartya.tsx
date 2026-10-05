import type { AllatAdat } from "../type/animal";

type AllatKartyaProps = {
  allat: AllatAdat;
  muvelet: () => void;
};

export function AllatKartya(props: AllatKartyaProps) {
  return (
    <div className="col-sm-6 col-lg-4 mb-3">
      <div className="card h-100">
        <div className="card-header">{props.allat.faj}</div>
        <div className="card-body">
          <h3 className="card-title">{props.allat.nev}</h3>
          <p>{props.allat.nev} {props.allat.kor} éves, súlya körülbelül {props.allat.suly} kg.</p>
          <p><strong>Veszélyeztetett:</strong> {props.allat.veszelyeztetett ? "Igen" : "Nem"}</p>
              <p><strong>Kedvenc ételei:</strong> {props.allat.kedvencEtelek.join(", ")}</p>
          <button className="btn btn-success" onClick={props.muvelet}>Adatok</button>
        </div>
      </div>
    </div>
  );
}
