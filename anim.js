// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  /*{ text: "Just One Day", time: 0, translate: 'Solo Un Día' },
  { text: "Yeah (yeah)", time: 1, translate: 'Sí (sí)' },*/
  { text: "Yeah, just one day, one night", time: 3, translate: 'Sí, solo un día, una noche' },
  { text: "haruman naege sigani itdamyeon", time: 10, translate: 'Es todo lo que desearía si solo tuviera un día' },
  { text: "dalkomhan ne hyanggie chwihaeseo gonhi nan jamdeulgopa", time: 12, translate: 'Ojalá pudiera dormir tranquilo, intoxicado con tu dulce esencia' },
  { text: "ppakppakan seukejul saie gihoega itdamyeon", time: 15, translate: 'Si tuviera una oportunidad en mi apretada agenda' },
  { text: "ttaseuhago gipeun nun ane mom damgeugopa", time: 18, translate: 'Quería sentir tu calor y tus ojos profundos' },
  { text: "I like that neoui geu gilgo gin saengmeori", time: 20, translate: 'Me gusta eso, tu pelo largo y liso' },
  { text: "ollyeo mukkeul ttae-ui ajjilhan mokseon-gwa heulleonaerin janmeori", time: 22, translate: 'Tu cuello me quita el aliento, cuando pinzas tu cabello y se caen los mechones' },
  { text: "seoro gachi eodil gadeun nae haendeubaegeun ni heori", time: 25, translate: 'Dondequiera que vayamos, descanso mi mano en tu cintura' },
  { text: "Yo, ma honey Yo, ma honey", time: 28, translate: 'Oye, cariño' },
  { text: "bol ttaemada sumi makyeo myeongdong georicheoreom", time: 29, translate: 'Cada vez que te veo, me quedo sin aliento como las calles de Myungdong' },
  { text: "uriui BGMeun sumsori", time: 31, translate: 'Nuestra música de fondo es el sonido de tu respiración' },
  { text: "nae ireumeul bulleojul ttae-ui ni moksorie", time: 33, translate: 'Tu voz cuando dices mi nombre' },

  { text: "jamgyeoseo nan suyeonghagopa neoreul jom deo algopa", time: 35, translate: 'Estoy atrapado en ti, quiero nadar en ti, quiero conocerte mejor' },
  { text: "neoran mijiui supeul gipi moheomhaneun tamheomga", time: 38, translate: 'Soy como un explorador que se adentra en el gran bosque misterioso que eres tú' },
  { text: "neoran jakpume daehae gamsang-eul hae", time: 42, translate: 'Eres una obra maestra' },
  { text: "neoran jonjaega yesurinikka", time: 43.5, translate: 'Porque solo tu existencia es arte' },
  { text: "ireoke maeil nan bamsaedorok sangsang-eul hae", time: 45, translate: 'Lo imagino todas las noches, todos los días' },
  { text: "eochapi naegeneun muuimihan kkuminikka", time: 48, translate: 'Porque, de todas formas, es un sueño inalcanzable para mí' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 50, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman neowa naega sonjabeul su itdamyeon", time: 55, translate: 'Solo un día, si pudiera tomar tus manos' },

  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 60, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman (haruman)", time: 65, translate: 'Solo un día (solo un día)' },
  { text: "neowa naega hamkkehal su itdamyeon", time: 68, translate: 'Si tan solo pudiéramos estar juntos' },
  { text: "(Do it, do it, do it)", time: 71, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa haruman itgireul barae barae", time: 73, translate: 'Espero poder estar contigo solo un día' },
  { text: "(Do it, do it, do it)", time: 76, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa danduri bonaeneun party, party", time: 77.5, translate: 'Tener una fiesta, fiesta solo contigo' },
  { text: "(Do it, do it, do it)", time: 81, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa haruman itgireul barae barae", time: 82.5, translate: 'Espero poder estar contigo solo un día' },
  { text: "(Do it, do it, do it)", time: 87, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa danduri bonaeneun party, party", time: 88.5, translate: 'Tener una fiesta, fiesta solo contigo' },

  { text: "geureol su itdamyeon eolmana joeulkka", time: 91, translate: 'Hacer una fiesta, fiesta solo contigo' },
  { text: "amu dena gaseo bap meokgo yeonghwa", time: 94, translate: 'Si pudiéramos ir a cualquier parte' },
  { text: "han pyeonman bol suman itdamyeon", time: 96, translate: 'Para comer y ver una película cómodamente' },
  { text: "naran ae jeongmal mwon jisirado hal tende girl", time: 98, translate: 'Haría cualquier cosa, chica' },
  { text: "I'm sorry nae meoriga neom iseongjeogin-ga bwa", time: 102, translate: 'Lo siento, tal vez estoy siendo demasiado irracional' },
  { text: "geuraedo eonjen-ga bomyeon useojwo", time: 104.5, translate: 'Pero, aún así, si alguna vez me ves, sonríe' },
  { text: "jogeumeun ani eojjeomyeon mani nal wonmanghagetji", time: 106, translate: 'Tal vez puedas resentirme un poco o mucho' },
  { text: "ara nae kkum ttaemune neol deo baraboji motaeseo", time: 109, translate: 'Sé que te dejé atrás por mi sueño' },
  { text: "geureom naege haruman jwo kkum sogirado haruman", time: 111, translate: 'Así que dame solo un día más, incluso si es un sueño, solo un día más' },

  { text: "hyeonsireul pinggye daemyeo samkyeoya haetdeon geu sumaneun mal", time: 114, translate: 'De todas las palabras que tuve que tragar por la realidad' },
  { text: "jung-eseo ttak han madiman jedaero hal su itge", time: 117, translate: 'Elegiré una y definitivamente te la diré' },
  { text: "geurae napalkkochi pil ttae manna he-eojija kkochi jil ttae", time: 119, translate: 'Encontrémonos donde florecen los lirios y digamos adiós mientras se marchitan' },
  { text: "swipge ichyeojil geora saenggak an haetjiman", time: 122, translate: 'No creo que te olvide tan fácilmente, pero' },
  { text: "neoege nan geuraesseum joketdamyeon igijeogilkka", time: 124, translate: '¿Soy egoísta al esperar que sigas igual?' },
  { text: "neol wihaeseoramyeo ajik nan geojinmalhago isseo", time: 126, translate: 'Sigo mintiendo, diciendo que es todo para ti' },
  { text: "neon nae han-gaunde seo isseo", time: 129, translate: 'Tú estas en el centro de mi vida' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 131, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman neowa naega sonjabeul su itdamyeon", time: 136, translate: 'Solo un día, si pudiera tomar tus manos' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 141, translate: 'Solo un día, si pudiera quedarme contigo' },

  { text: "haruman haruman", time: 146, translate: 'Solo un día (solo un día)' },
  { text: "Ayy neowa naega hamkke hago itdamyeon let's go time", time: 149, translate: 'Si tú y yo estamos juntos solo un día, vamos' },
  { text: "24 hours neowa danduri", time: 152, translate: '24 horas, si pudiera estar contigo' },
  { text: "itdamyeon achimbuteo immatchum hae", time: 154, translate: 'Te daría un beso temprano en la mañana' },
  { text: "ppajil su eomneun beureonchido han ip hae", time: 157, translate: 'No puedo olvidar traer un desayuno' },
  { text: "sonjapgo neowa haetbiche mom damgeune", time: 159, translate: 'Tomaré tu mano y tomaremos el sol' },

  { text: "an kkeunnae areumdaun bamjung-e", time: 161, translate: 'Aún no ha terminado, en medio de la noche hermosa' },
  { text: "neoege gobaekae jomyeong-eun dallo hae", time: 164, translate: 'Te confesaré con la luna de testigo' },
  { text: "i su maneun ildeuri naege mareul hae", time: 166, translate: 'Todo esto solo si me dices' },
  { text: "dan haruman isseumyeon ganeunghae", time: 169.5, translate: 'Si solo fuera por un día, sería posible' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 174, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman neowa naega sonjabeul su itdamyeon", time: 179, translate: 'Solo un día, si pudiera tomar tus manos' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 184, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman (haruman)", time: 189, translate: 'Solo un día (solo un día)' },
  { text: "neowa naega hamkkehal su itdamyeon", time: 191.5, translate: 'Si tan solo pudiéramos estar juntos' },
  { text: "(Do it, do it, do it)", time: 195, translate: '(¡Hazlo, hazlo, hazlo!)' },

  { text: "neowa haruman itgireul barae barae", time: 197, translate: 'Espero poder estar contigo solo un día' },
  { text: "(Do it, do it, do it)", time: 200, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa danduri bonaeneun party, party", time: 202, translate: 'Tener una fiesta, fiesta solo contigo' },
  { text: "(Do it, do it, do it)", time: 206, translate: '(¡Hazlo, hazlo, hazlo!)' },
  { text: "neowa haruman itgireul barae barae", time: 207.5, translate: 'Espero poder estar contigo solo un día' },
  { text: "(Do it, do it, do it)", time: 210, translate: '(¡Hazlo, hazlo, hazlo!)' },

  { text: "neowa danduri bonaeneun party, party", time: 211.5, translate: 'Hacer una fiesta, fiesta solo contigo' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 215, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman neowa naega sonjabeul su itdamyeon", time: 220, translate: 'Solo un día, si pudiera tomar tus manos' },
  { text: "haruman neowa naega hamkkehal su itdamyeon", time: 224, translate: 'Solo un día, si pudiera quedarme contigo' },
  { text: "haruman (haruman)", time: 229, translate: 'Solo un día (solo un día)' },
  { text: "neowa naega hamkkehal su itdamyeon", time: 232, translate: 'Si tan solo pudiéramos estar juntos' },
  { text: "Can you please stay with me?", time: 237, translate: '¿Puedes quedarte conmigo por favor?' },



];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;

  var currentIndex = lyricsData.findIndex(
      (line, index) =>
          time >= line.time &&
          (index === lyricsData.length - 1 || time < lyricsData[index + 1].time)
  );

  if (currentIndex !== -1) {
    var currentLine = lyricsData[currentIndex];

    // Mostrar texto
    lyrics.innerHTML = `
    <div class="translation">${currentLine.translate}</div>   
    <div class="original">${currentLine.text}</div>
   
  `;

    // Fade suave
    var fadeInDuration = 0.5; // medio segundo
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 200);

function ocultarTitulo() {
  const titulo = document.querySelector(".titulo");
  const teamo = document.querySelector(".teamo");

  titulo.style.animation = "fadeOut 3s ease-in-out forwards";

  titulo.addEventListener("animationend", function () {
    titulo.style.display = "none";

    teamo.style.display = "block";
    teamo.style.animation = "fadeIn 3s ease-in-out forwards";
  });
}

// Espera 216 segundos
setTimeout(ocultarTitulo, 216000);
