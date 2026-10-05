import type { AllatAdat } from "../type/animal";

export const allatok: AllatAdat[] = [
  {
    nev: "Szimba",
    faj: "Oroszlán",
    kor: 8,
    suly: 190,
    veszelyeztetett: true,
    kedvencEtelek: ["marhahús", "csirkehús"],
  },
  {
    nev: "Lili",
    faj: "Elefánt",
    kor: 12,
    suly: 3200,
    veszelyeztetett: false,
    kedvencEtelek: ["fű", "levelek", "gyümölcsök"],
  },
  {
    nev: "Beni",
    faj: "Zsiráf",
    kor: 6,
    suly: 850,
    veszelyeztetett: true,
    kedvencEtelek: ["levelek", "ágak"],
  },
  {
    nev: "Pötyi",
    faj: "Panda",
    kor: 5,
    suly: 95,
    veszelyeztetett: true,
    kedvencEtelek: ["bambusz", "sárgarépa"],
  },
  {
    nev: "Csőrike",
    faj: "Pingvin",
    kor: 4,
    suly: 28,
    veszelyeztetett: false,
    kedvencEtelek: ["hal", "krill"],
  },
];

export const elohelyek = [
  "Afrikai szavanna",
  "Ázsiai esőerdő",
  "Dél-amerikai őserdő",
  "Sarki vidék",
  "Ausztráliai területek",
];

export const taplalkozasok = [
  "Növényevő",
  "Húsevő",
  "Mindenevő",
  "Gyümölcsevő",
  "Rovarokkal táplálkozó",
];