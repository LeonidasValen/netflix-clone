// Suponiendo que fetchMovies se encarga de obtener los datos de películas
export async function fetchMovies() {
  // Simulando una llamada a una API asíncrona
  return new Promise((resolve) => {
    // Aquí podrías hacer una llamada a tu API real, pero en este caso, solo simularemos datos
    setTimeout(() => {
      // Devolvemos el arreglo de películas
      resolve(movies);
    }, 1000); // Simulando un retardo de 1 segundo
  });
}

const movies = [
    {
      title: "God of War",
      duration: "2h 14min",
      age: "+16",
      year: "2005",
      categories: ["Acción", "Aventura", "Fantasía"],
      coverImage: "./img/godofwar.png",
      description: "God of War es una franquicia de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment"
    },
    {
      title: "The Matrix",
      duration: "2h 16min",
      age: "+16",
      year: "1999",
      categories: ["Acción", "Ciencia ficción"],
      coverImage: "./img/matrix.jpg",
      description: "Un experto en computadoras descubre que su mundo es una simulación total creada con maliciosas intenciones por parte de la ciberinteligencia."
    },
    {
      title: "Alien",
      duration: "1h 57m",
      age: "+16",
      year: "1979",
      categories: ["Acción", "Ciencia ficción", "Suspenso"],
      coverImage: "./img/alien.jpg",
      description: "La tripulación de la nave espacial Nostromo atiende una señal de auxilio y, sin saberlo, sube a bordo una letal forma de vida extraterrestre."
    },
    {
      title: "Jurassic Park",
      duration: "2h 7min",
      age: "+13",
      year: "1993 ",
      categories: ["Aventura", "Ciencia ficción", "Suspenso"],
      coverImage: "./img/jurassicpark.jpg",
      description: "Tres expertos y otras personas son invitados a un parque de diversiones, donde se encuentran dinosaurios creados en base al ADN."
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      duration: "2h 58min",
      age: "+13",
      year:"2002",
      categories: ["Aventura", "Fantasía"],
      coverImage: "./img/lotr.jpg",
      description: "Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único, capaz de otorgar un poder ilimitado al que la posea, con la finalidad de destruirlo. Sin embargo, fuerzas malignas muy poderosas quieren arrebatárselo."
    },
    {
      title: "Kung Fu Panda",
      duration: "1h 34m",
      age: "+7",
      year:"2008",
      categories: ["Animacion", "Comedia"],
      coverImage: "./img/kungfupanda.jpg",
      description: "El panda Po trabaja en la tienda de fideos de su familia y sueña en convertirse en un maestro del kung-fu. Su sueño se hace una realidad cuando es inesperadamente elegido para cumplir una antigua profecía y debe estudiar artes marciales con sus ídolos, los Cinco Furiosos. Po necesitará toda la sabiduría, fortaleza y habilidades para poder proteger a su gente de Tai Lung, un maldito leopardo de nieve."
    },
    {
      title: "Forrest Gump",
      duration: "2h 22min",
      age: "+13",
      year: "1994",
      categories: ["Drama", "Romance"],
      coverImage: "./img/forrestgump.jpg",
      description: "Forrest Gump, un joven sureño, tenaz e inocente, es protagonista de acontecimientos cruciales en la historia de los Estados Unidos."
    },
    {
      title: "The Dark Knight",
      duration: "2h 32min",
      age: "+13",
      year: "2008",
      categories: ["Acción", "Crimen", "Drama"],
      coverImage: "./img/batman.jpg",
      description: "Batman tiene que mantener el equilibrio entre el heroísmo y el vigilantismo para pelear contra un vil criminal conocido como el Guasón, que pretende sumir Ciudad Gótica en la anarquía.",
    },
    {
      title: "Avatar",
      duration: "2h 42min",
      age: "+13",
      year: "2010",
      categories: ["Acción", "Aventura", "Fantasía"],
      coverImage: "./img/avatar.jpeg",
      description: "En un exuberante planeta llamado Pandora viven los Na'vi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos/Na'vi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Na'vi. "
    },
    {
      title: "John Wick",
      duration: "1h 41m",
      age: "+16",
      year: "2015",
      categories: ["Acción", "Polícial", "Suspenso"],
      coverImage: "./img/Johnwick.jpeg",
      description:"La ciudad de Nueva York se llena de balas cuando John Wick, un exasesino a sueldo, regresa de su retiro para enfrentar a los mafiosos rusos, liderados por Viggo Tarasov, que destruyeron todo aquello que él amaba y pusieron precio a su cabeza."
    },
    {
      title: "Blade Runner",
      duration: "1h 57m",
      age: "+16",
      year:"2017",
      categories: ["Fantacia", "Drama"],
      coverImage: "./img/bladerruner.jpg",
      description: "En el año 2049 el oficial K, un nuevo replicante de la policía de Los Ángeles, emprende la búsqueda del replicante Rick Deckard, desaparecido 30 años antes. K piensa que en Deckard reside la clave que podría permitir salvar a la sociedad del caos en el que está inmersa."
    },
    {
      title: "Shrek",
      duration: "1h 30m",
      age: "+7",
      year:"2001",
      categories: ["Fantacia", "Animacion"],
      coverImage: "./img/shrek.jpg",
      description: "Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas. Todos fueron expulsados de sus reinos por el malvado Lord Farquaad. Decidido a salvar su hogar, Shrek hace un trato con Farquaad y se prepara para rescatar a la princesa Fiona, quien será la esposa de Farquaad."
    },
    {
      title: "Shrek 2",
      duration: "1h 45m",
      age: "+7",
      year: "2004",
      categories: ["Fantacia", "Animacion"],
      coverImage: "./img/shrek2.jpg",
      description: "En esta ocasión, Shrek debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros.",
    },
    {
      title: "Supercool",
      duration: "1h 45m",
      age: "+7",
      year: "2007",
      categories: ["Comedia", "Adolescente"],
      coverImage: "./img/supercool.jpeg",
      description:"Seth y Evan, dos estudiantes inadaptados de preparatoria, tienen grandes esperanzas en su fiesta de graduación: los jóvenes se sienten retados por la sociedad y planean divertirse a lo grande y conseguir chicas hermosas para finalmente poder integrarse con sus compañeros. Sin embargo, la ansiedad por la separación y dos aburridos policías complican la misión de la pareja.",
    },
    {
      title: "Rango",
      duration: "1h 47m",
      age: "+7",
      year:"2007",
      categories: ["Comedia", "Animacion", "Wéstern"],
      coverImage: "./img/rango.jpg",
      description:"Rango es un camaleón que lleva toda su vida viviendo como mascota en un terrario. Sin embargo, un buen día, mientras transportan su terrario, el recipiente se cae del auto en medio del desierto y acaba en un pueblo salvaje donde lo nombran alguacil."
    },
    {
      title: "Gladiador",
      duration: "2h 35m",
      age: "+16",
      year:"2000",
      categories: ["Acción", "Aventura", "Violento"],
      coverImage: "./img/gladiador.jpeg",
      description: "Máximo, general romano, desea volver a casa, pero el emperador Marco Aurelio quiere que herede el imperio. Esto hace que Cómodo ordene matar a su familia. Máximo escapa de la muerte y regresa a Roma como gladiador para vengar la muerte de su familia.",
    },
    {
      title: "Pollitos en Fuga",
      duration: "1h 24m",
      age: "+7",
      year:"2000",
      categories: ["Comedia", "Drama", "Aventura"],
      coverImage: "./img/pollitos.jpg",
      description: "Esta divertida aventura hecha con las técnicas stop-motion y claymation cuenta la historia de un gallo americano que se enamora de una hermosa gallina en una granja británica. La pareja decide huir de la granja, pero ellos primero tienen que enfrentarse a la malvada granjera quien intenta mantenerlos bajo control. Los pollos deciden intentar un escape para no terminar convertidos en pasteles de carne de pollo."
    },
    {
      title: "Terminator",
      duration: "1h 47m",
      age: "+16",
      year:"1985 ",
      categories: ["Acción", "Ciencia ficción", "Aventura"],
      coverImage: "./img/terminator.jpg",
      description: "Un asesino cibernético del futuro es enviado a Los Ángeles, para matar a la mujer que procreará a un líder."
    },
  ];