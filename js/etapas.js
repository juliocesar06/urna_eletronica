let etapas = [
  {
    titulo: "VEREADOR",
    numeros: 5,
    candidatos: [
      {
        numero: 38111,
        nome: "Fulano de Tal",
        partido: "ABC",
        fotos: [{ url: "38111.jpg", legenda: "Vereador" }],
      },
      {
        numero: 77222,
        nome: "Beltrano de Tal",
        partido: "DEFG",
        fotos: [{ url: "77222.jpg", legenda: "Vereador" }],
      },
    ],
  },
  {
    titulo: "PREFEITO",
    numeros: 2,
    candidatos: [
      {
        numero: 99,
        nome: "Ciclano",
        vice: "Cic",
        partido: "ABC",
        fotos: [
          { url: "38111.jpg", legenda: "Vereador" },
          {
            url: "72222.jpg",
            legenda: "Vice-Prefeito",
          },
        ],
      },
    ],
  },
  {
    titulo: "PREFEITO",
    numeros: 2,
    candidatos: [
      {
        numero: 99,
        nome: "Fulano",
        vice: "Ful",
        partido: "DEFG",
        fotos: [
          { url: "72222.jpg", legenda: "Prefeito" },
          {
            url: "38111.jpg",
            legenda: "Vice-Prefeito",
          },
        ],
      },
    ],
  },
];
alert(etapas[1].titulo);
