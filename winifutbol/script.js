const predicciones = [
  // Mundial de Clubes 2025 - Octavos de Final
  {
    partido: "Palmeiras vs Botafogo",
    fecha: "Sábado 28 junio, 11:00",
    prediccion: "Gana Palmeiras 2-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/FYQGj2h.png",
    analisis: "Palmeiras tiene buen ritmo y experiencia en torneos internacionales.",
    estadisticas: { posesion: "58% - 42%", remates: "14 - 9", xg: "2.1 | 1.0" }
  },
  {
    partido: "Benfica vs Chelsea",
    fecha: "Sábado 28 junio, 15:00",
    prediccion: "Gana Chelsea 3-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/xt9xBqB.png",
    analisis: "Chelsea llega fuerte con su defensa sólida y contragolpe.",
    estadisticas: { posesion: "60% - 40%", remates: "16 - 8", xg: "2.5 | 1.1" }
  },
  {
    partido: "PSG vs Inter Miami",
    fecha: "Domingo 29 junio, 11:00",
    prediccion: "Gana PSG 3-0",
    resultado: "Por jugarse",
    confianza: "Muy alta",
    imagen: "https://i.imgur.com/OArv6w7.png",
    analisis: "PSG con su plantilla estelar y experiencia domina el juego.",
    estadisticas: { posesion: "65% - 35%", remates: "18 - 6", xg: "3.3 | 0.7" }
  },
  {
    partido: "Flamengo vs Bayern Munich",
    fecha: "Domingo 29 junio, 15:00",
    prediccion: "Gana Bayern Munich 2-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/mLHfJuG.png",
    analisis: "Bayern mantiene su estilo agresivo, Flamengo con garra sudamericana.",
    estadisticas: { posesion: "55% - 45%", remates: "14 - 10", xg: "2.2 | 1.8" }
  },
  {
    partido: "Inter de Milán vs Fluminense",
    fecha: "Lunes 30 junio, 14:00",
    prediccion: "Gana Inter de Milán 2-0",
    resultado: "Por jugarse",
    confianza: "Media",
    imagen: "https://i.imgur.com/0neNT6G.png",
    analisis: "Inter tiene solidez defensiva, Fluminense busca sorprender.",
    estadisticas: { posesion: "53% - 47%", remates: "13 - 9", xg: "1.8 | 1.1" }
  },
  {
    partido: "Manchester City vs Al Hilal",
    fecha: "Lunes 30 junio, 20:00",
    prediccion: "Gana Manchester City 4-0",
    resultado: "Por jugarse",
    confianza: "Muy alta",
    imagen: "https://i.imgur.com/t3ajC4m.png",
    analisis: "City domina en todo momento con control total del balón.",
    estadisticas: { posesion: "72% - 28%", remates: "21 - 5", xg: "3.8 | 0.4" }
  },
  {
    partido: "Borussia Dortmund vs Monterrey",
    fecha: "Martes 1 julio, 14:00",
    prediccion: "Gana Borussia Dortmund 3-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/RQGz75O.png",
    analisis: "Dortmund con ataque rápido, Monterrey intenta defender y salir rápido.",
    estadisticas: { posesion: "60% - 40%", remates: "17 - 9", xg: "2.7 | 1.0" }
  },
  {
    partido: "Real Madrid vs Juventus",
    fecha: "Martes 1 julio, 20:00",
    prediccion: "Gana Real Madrid 3-2",
    resultado: "Por jugarse",
    confianza: "Media",
    imagen: "https://i.imgur.com/1LPXPLJ.png",
    analisis: "Madrid tiene más experiencia en partidos decisivos, Juventus presiona pero sufre en el cierre.",
    estadisticas: { posesion: "55% - 45%", remates: "12 - 10", xg: "2.5 | 1.8" }
  },

  // Copa Oro 2025 - Cuartos de Final
  {
    partido: "Panamá vs Honduras",
    fecha: "Sábado 28 junio, 17:15",
    prediccion: "Gana Panamá 2-0",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/Jc0KqAV.png",
    analisis: "Panamá fue líder invicto y tiene mejor balance defensivo.",
    estadisticas: { posesion: "61% - 39%", remates: "11 - 6", xg: "1.9 | 0.7" }
  },
  {
    partido: "México vs Arabia Saudita",
    fecha: "Sábado 28 junio, 20:15",
    prediccion: "Gana México 3-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/U6j1J0z.png",
    analisis: "México es favorito con mejor defensa y ataque dinámico.",
    estadisticas: { posesion: "62% - 38%", remates: "16 - 6", xg: "2.3 | 0.9" }
  },
  {
    partido: "Canadá vs Guatemala",
    fecha: "Domingo 29 junio, 14:00",
    prediccion: "Gana Canadá 2-0",
    resultado: "Por jugarse",
    confianza: "Media",
    imagen: "https://i.imgur.com/5DPFIeG.png",
    analisis: "Canadá con buen equipo y ritmo ofensivo superior.",
    estadisticas: { posesion: "63% - 37%", remates: "14 - 7", xg: "2.0 | 0.6" }
  },
  {
    partido: "Estados Unidos vs Costa Rica",
    fecha: "Domingo 29 junio, 17:00",
    prediccion: "Gana Estados Unidos 3-1",
    resultado: "Por jugarse",
    confianza: "Alta",
    imagen: "https://i.imgur.com/Mb54GRH.png",
    analisis: "Estados Unidos con amplio dominio y eficacia en ataque.",
    estadisticas: { posesion: "65% - 35%", remates: "18 - 8", xg: "3.1 | 0.9" }
  }
];

function mostrarAnalisis(index) {
  const analisis = document.getElementById(`analisis-${index}`);
  if (analisis) {
    analisis.style.display = analisis.style.display === "none" ? "block" : "none";
  }
}

function calcularAciertos() {
  const total = predicciones.length;
  let aciertos = 0;

  predicciones.forEach(p => {
    const real = p.resultado.toLowerCase();
    if (real !== "por jugarse" && real.includes(p.prediccion.split(" ")[2].toLowerCase())) {
      aciertos++;
    }
  });

  const porcentaje = ((aciertos / total) * 100).toFixed(1);
  const resumen = document.createElement("div");
  resumen.className = "resumen-aciertos";
  resumen.innerHTML = `
    <h3>📊 Resumen</h3>
    <p><strong>Aciertos:</strong> ${aciertos} de ${total}</p>
    <p><strong>Efectividad:</strong> ${porcentaje}%</p>
  `;

  document.querySelector("main").appendChild(resumen);
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("predicciones-list");

  container.innerHTML = predicciones.map((p, i) => `
    <div class="card" onclick="mostrarAnalisis(${i})">
      <img src="${p.imagen}" alt="Logo del partido ${p.partido}" />
      <h3>${p.partido}</h3>
      <p><strong>Fecha:</strong> ${p.fecha}</p>
      <p><strong>Predicción:</strong> ${p.prediccion}</p>
      <p><strong>Resultado:</strong> ${p.resultado}</p>
      <p><strong>Confianza:</strong> ${p.confianza}</p>
      <div id="analisis-${i}" class="analisis" style="display:none;">
        <p><em>${p.analisis}</em></p>
        <table class="tabla-estadisticas">
          <tr><td><strong>Posesión</strong></td><td>${p.estadisticas.posesion}</td></tr>
          <tr><td><strong>Remates</strong></td><td>${p.estadisticas.remates}</td></tr>
          <tr><td><strong>xG</strong></td><td>${p.estadisticas.xg}</td></tr>
        </table>
      </div>
    </div>
  `).join("");

  calcularAciertos();
});
