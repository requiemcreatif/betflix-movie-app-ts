const movieItems = [
  {
    id: 1,
    keyId: "deadpool",
    name: "Deadpool",
    description:
      "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelrated healing powers, adopting the alter ego Deadpool.",
    genres: ["action", "adventure", "comedy"],
    rate: "8.6",
    length: "1hr 48mins",
    img: "https://xl.movieposterdb.com/15_12/2014/1431045/xl_1431045_f149e984.jpg",
  },
  {
    id: 2,
    keyId: "we-are-the-millers",
    name: "We're the Millers",
    description:
      "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    genres: ["adventure", "comedy", "crime"],
    rate: "7.0",
    length: "1hr 50mins",
    img: "https://xl.movieposterdb.com/13_08/2013/1723121/xl_1723121_fbbda16e.jpg",
  },
  {
    id: 3,
    keyId: "straight-outta-compton",
    name: "Straight Outta Compton",
    description:
      "The group NWA emerges from the mean streets of Compton in Los Angeles, California, in the mid-1980s and revolutionizes Hip Hop culture with their music and tales about life in the hood.",
    genres: ["biography", "drama", "history"],
    rate: "8.0",
    length: "2hr 27mins",
    img: "https://xl.movieposterdb.com/15_09/2015/1398426/xl_1398426_f59a7e43.jpg",
  },
  {
    id: 4,
    keyId: "gridiron-gang",
    name: "Gridiron Gang",
    description:
      "Teenagers at a juvenile detention center, under the leadership of their counselor, gain self-esteem by playing football together.",
    genres: ["crime", "drama", "sport"],
    rate: "6.9",
    length: "2hr 5mins",
    img: "https://xl.movieposterdb.com/06_08/2006/0421206/xl_126297_0421206_77cff979.jpg",
  },
  {
    id: 5,
    keyId: "american-gangster",
    name: "American Gangster",
    description:
      "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
    genres: ["biography", "crime", "drama"],
    rate: "7.8",
    length: "2hr 37mins",
    img: "https://xl.movieposterdb.com/07_10/2007/765429/xl_765429_346d5870.jpg",
  },
  {
    id: 6,
    keyId: "gangster-squad",
    name: "Gangster Squad",
    description:
      "It's 1949 Los Angeles, the city is run by gangsters and a malicious mobster, MickeyId Cohen. Determined to end the corruption, John O'Mara assembles a team of cops, ready to take down the ruthless leader and restore peace to the city.",
    genres: ["action", "crime", "drama"],
    rate: "6.8",
    length: "1hr 53mins",
    img: "https://xl.movieposterdb.com/13_04/2013/1321870/xl_1321870_8c9a3075.jpg?",
  },
  {
    id: 7,
    keyId: "now-you-see-me",
    name: "Now You See Me",
    description:
      "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
    genres: ["crime", "mystery", "thriller"],
    rate: "7.3",
    length: "1hr 55mins",
    img: "https://xl.movieposterdb.com/13_03/2013/1670345/xl_1670345_a15fb3ce.jpg",
  },
  {
    id: 8,
    keyId: "jurassic-world",
    name: "Jurassic World",
    description:
      "A new theme park is built on the original site of Jurassic Park. Everything is going well until the park's newest attraction--a genetically modified giant stealth killing machine--escapes containment and goes on a killing spree.",
    genres: ["action", "adventure", "scifi"],
    rate: "7.1",
    length: "2hr 4mins",
    img: "https://xl.movieposterdb.com/15_12/2015/369610/xl_369610_68d17f2b.jpg",
  },
  {
    id: 9,
    keyId: "mission-impossible-rogue-nation",
    name: "M-I: Rogue Nation",
    description:
      "Ethan and team take on their most impossible mission yet, eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
    genres: ["action", "adventure", "thriller"],
    rate: "7.5",
    length: "2hr 11mins",
    img: "https://xl.movieposterdb.com/15_05/2015/2381249/xl_2381249_8f979f56.jpg",
  },
  {
    id: 10,
    keyId: "the-man-from-uncle",
    name: "The Man from U.N.C.L.E.",
    description:
      "In the early 1960s, CIA agent Napoleon Solo and KGB operative Illya Kuryakin participate in a joint mission against a mysterious criminal organization, which is working to proliferate nuclear weapons.",
    genres: ["action", "adventure", "thriller"],
    rate: "7.3",
    length: "1hr 56mins",
    img: "https://xl.movieposterdb.com/15_02/2015/1638355/xl_1638355_9964b844.jpg",
  },
  {
    id: 11,
    keyId: "spectre",
    name: "Spectre",
    description:
      "A cryptic message from Bond's past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    genres: ["action", "adventure", "thriller"],
    rate: "6.9",
    length: "2hr 28mins",
    img: "https://xl.movieposterdb.com/15_09/2015/2379713/xl_2379713_82d498f6.jpg?",
  },
  {
    id: 12,
    keyId: "legend",
    name: "Legend",
    description:
      "The film tells the story of the identical twin gangsters Reggie and Ronnie Kray, two of the most notorious criminals in British history, and their organised crime empire in the East End of London during the 1960s.",
    genres: ["biography", "crime", "drama"],
    rate: "7.0",
    length: "2hr 28mins",
    img: "https://xl.movieposterdb.com/15_08/2015/3569230/xl_3569230_059f51f4.jpg",
  },
  {
    id: 13,
    keyId: "southpaw",
    name: "Southpaw",
    description:
      "Boxer Billy Hope turns to trainer Tick Wills to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
    genres: ["action", "drama", "sport"],
    rate: "7.5",
    length: "2hr 4mins",
    img: "https://xl.movieposterdb.com/15_06/2015/1798684/xl_1798684_2a34e48e.jpg?",
  },
  {
    id: 14,
    keyId: "bridge-of-spies",
    name: "Bridge of Spies",
    description:
      "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
    genres: ["biography", "drama", "thriller"],
    rate: "7.7",
    length: "2hr 22mins",
    img: "https://xl.movieposterdb.com/22_06/2015/3682448/xl_3682448_2d0a7527.jpg",
  },
  {
    id: 15,
    keyId: "ant-man",
    name: "Ant-Man",
    description:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    genres: ["action", "adventure", "scifi"],
    rate: "7.4",
    length: "1hr 57mins",
    img: "https://xl.movieposterdb.com/15_05/2015/478970/xl_478970_97cc34db.jpg?",
  },
  {
    id: 16,
    keyId: "fast-and-furious-7",
    name: "Fast & Furious 7",
    description:
      "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    genres: ["action", "crime", "thriller"],
    rate: "7.3",
    length: "2hr 17mins",
    img: "https://xl.movieposterdb.com/14_10/2014/2820852/xl_2820852_73c8be89.jpg?",
  },
  {
    id: 17,
    keyId: "tracers",
    name: "Tracers",
    description:
      "Wanted by the Chinese mafia, a New York City bike messenger escapes into the world of parkour after meeting a beautiful stranger.",
    genres: ["action", "crime", "drama"],
    rate: "5.6",
    length: "1hr 34mins",
    img: "https://xl.movieposterdb.com/14_12/2014/2401097/xl_2401097_de6bfcee.jpg",
  },
  {
    id: 18,
    keyId: "running-scared",
    name: "Running Scared",
    description:
      "A low-ranking thug is entrusted by his crime boss to dispose of a gun that killed corrupt cops, but things get out of control when the gun ends up in wrong hands.",
    genres: ["action", "crime", "drama"],
    rate: "7.4",
    length: "2hr 2mins",
    img: "https://xl.movieposterdb.com/06_07/2005/0404390/xl_120241_0404390_37711930.jpg",
  },
  {
    id: 19,
    keyId: "the-hangover",
    name: "The Hangover",
    description:
      "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    genres: ["comedy"],
    rate: "7.8",
    length: "1hr 40mins",
    img: "https://xl.movieposterdb.com/09_05/2009/1119646/xl_1119646_ffb1b0c5.jpg",
  },
  {
    id: 20,
    keyId: "project-x",
    name: "Project X",
    description:
      "3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.",
    genres: ["comedy", "crime"],
    rate: "6.7",
    length: "1hr 28mins",
    img: "https://xl.movieposterdb.com/12_10/2012/1636826/xl_1636826_5a6a23c4.jpg",
  },
  {
    id: 21,
    keyId: "the-dark-knight",
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    genres: ["action", "crime", "drama"],
    rate: "9.0",
    length: "2hr 32mins",
    img: "https://xl.movieposterdb.com/08_05/2008/468569/xl_468569_4f6eb903.jpg",
  },

  {
    id: 23,
    keyId: "the-matrix",
    name: "The Matrix",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genres: ["action", "scifi"],
    rate: "8.7",
    length: "2hr 16mins",
    img: "https://xl.movieposterdb.com/06_11/1999/0133093/xl_145384_0133093_fd241228.jpg",
  },
  {
    id: 24,
    keyId: "bad-boys",
    name: "Bad Boys",
    description:
      "Two hip detectives protect a murder witness while investigating a case of stolen heroin.",
    genres: ["action", "comedy", "crime"],
    rate: "6.8",
    length: "1hr 59mins",
    img: "https://xl.movieposterdb.com/08_01/1995/112442/xl_112442_7e35495b.jpg",
  },
];

export default movieItems;
