import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Savage Spider-Man",
    author: "Joe Kelly",
    category: ["Superhero", "Horror", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
    newprice: 329,
    originalPrice: 500,
    rating: 4.5,
    description:
      "Spider-Man has gone from “Friendly Neigborhood” to “Terrifying Jungle.” Peter Parker has been mutated by horrible villains and is being hunted by one of Marvel's greatest villains: Baron Zemo. But Peter's fighting back, and he's taken over a tribe of monstrous victims like him. And the power they wield? It's going to be awfully hard to be responsible.",
  },
  {
    _id: uuid(),
    name: "Ghost Rider",
    author: "Benjamin Percy",
    category: ["Superhero", "Horror", "Science Fiction"],
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
    newprice: 429,
    originalPrice: 550,
    rating: 4,
    description:
      "The FBI assigns a team to investigate a recent surge in supernatural activity. A darkness is rising, and their hunt for answers puts them on a collision course with a mysterious, vengeful motorcyclist. Who is this so-called Ghost Rider, and what does he want? They follow rumors. They follow wreckage. And they discover the dark secrets of a roadside motel.",
  },
  {
    _id: uuid(),
    name: "Pluto",
    author: "Naoki Urasawa",
    category: ["Manga", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
    newprice: 249,
    originalPrice: 380,
    rating: 3.9,
    description:
      "Pluto follows the Europol robot detective Gesicht in his attempts to solve the case of a string of robot and human deaths around the world where all the victims have objects shoved into or positioned by their heads, imitating horns. The case becomes more puzzling when evidence suggests a robot is responsible for the murders, which would make it the first time a robot has killed a human in eight years. All seven of the great robots of the world, the most scientifically advanced which have the potential to become weapons of mass destruction, seem to be the killer's targets, and the murdered humans are connected to preserving the International Robot Laws which grant robots equal rights.",
  },
  {
    _id: uuid(),
    name: "BATMAN '89",
    author: "Sam Hamm",
    category: ["Superhero", "Horror", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
    newprice: 829,
    originalPrice: 1000,
    rating: 4.8,
    description:
      "Step back into the Gotham of Tim Burton seminal classic Batman movies! Batman 89 brings in screenwriter Sam Hamm (Batman, Batman Returns) and artist Joe Quinones (Dial H for Hero) to pull on a number of threads left dangling by the prolific director. Gotham becomes torn in two as citizens dressed as Batman and The Joker duke it out in the streets. As D.A. Harvey Dent tries to keep the city together, he targets the one problem tearing it apart: BATMAN! And he will get Bruce Waynes help in taking down the Dark Knight.",
  },
  {
    _id: uuid(),
    name: "The Inferior Five",
    author: "Joe Orlando",
    category: ["Superhero", "Humor"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
    newprice: 229,
    originalPrice: 400,
    rating: 3.8,
    description:
      "The Inferior Five are the progeny and heirs of the Freedom Brigade, a team of costumed adventurers of an alternate earth, Earth-Twelve, from before the Crisis on Infinite Earths. After the Brigade retired, they pressed their children into following their legacy using their gifts and powers, a task they only followed halfheartedly.",
  },
  {
    _id: uuid(),
    name: "One Punch-Man ",
    author: "One",
    category: ["Manga", "Superhero", "Humor"],
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
    newprice: 149,
    originalPrice: 280,
    rating: 2.8,
    description:
      "On a supercontinent Earth, powerful monsters and villains wreak havoc in the cities. In response, the millionaire Agoni creates the Hero Association, which employs superheroes to fight evil. Saitama, an unassociated hero, hails from City Z and performs heroic deeds as a hobby. He has trained himself to the point of being able to defeat any enemy with a single punch, but his unmatched strength has left him with an overwhelming sense of boredom. Saitama becomes a reluctant mentor to Genos, a cyborg seeking revenge against another cyborg who killed his family and destroyed his hometown, after saving him from a monster.",
  },
  {
    _id: uuid(),
    name: "Infidel",
    author: "Pornsak Pichetshote",
    category: ["Horror"],
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
    newprice: 309,
    originalPrice: 400,
    rating: 2.9,
    description:
      "A haunted house story for the 21st century, INFIDEL follows an American Muslim woman and her multi-racial neighbors who move into a building haunted by entities that feed off xenophobia.  Aisha, along with her fiancée, Tom, and stepdaughter, Kris, has moved into a building that was devastated by an accidental bomb explosion. The building is haunted by what happened there, as are the people who live there now, both because of the deaths and the way the incident has been discussed in public. But there's something more to the haunting.",
  },
  {
    _id: uuid(),
    name: "Cyanide & Happiness",
    author: "Kris Wilson",
    category: ["Humor"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/9/50/623b2dbd2579d/clean.jpg",
    newprice: 209,
    originalPrice: 300,
    rating: 1.9,
    description:
      "Introducing the first real, tangible, ignitable collection of the hit online comic Cyanide & Happiness, featuring a selection of your favorite comics and thirty brand-new strips. From the minds of Kris, Rob, Matt, and Dave comes a barrage of irreverent entertainment sure to keep you amused until the day you die.",
  },
  {
    _id: uuid(),
    name: "Captain Marvel",
    author: "Kelly Thompson",
    category: ["Humor"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
    newprice: 428,
    originalPrice: 600,
    rating: 3.4,
    description:
      "HE STARS THEY WERE MEANT TO BE! After the brutal fight in Last of the Marvels, Carol Danvers deserves a break - and so does fellow Marvel Monica Rambeau. But with loose on Earth, the heroes have no time to breathe. There's no telling what this new force in the Universe will do next. A perfect jumping-on point in the longest Captain Marvel run yet!.",
  },
  {
    _id: uuid(),
    name: "Miles Morales: Spiderman",
    author: "Saladin Ahmed",
    category: ["Superhero", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
    newprice: 309,
    originalPrice: 550,
    rating: 2.7,
    description:
      "MILLIONS OF MILES FROM HOME! MILES and SHIFT are LOST IN THE MULTIVERSE, and thanks to the Assessor--it could be a one-way trip! Miles will risk everything to find his SHHH SPOILERS!",
  },
  {
    _id: uuid(),
    name: "Captain America",
    author: "Nick Spencer",
    category: ["Superhero", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
    newprice: 409,
    originalPrice: 550,
    rating: 4.7,
    description:
      "In the wake of Maria Hill's court-martial, who will become the new head of S.H.I.E.L.D.? The answer will electrify you!.",
  },
  {
    _id: uuid(),
    name: "Superman",
    author: "George Perez",
    category: ["Superhero", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
    newprice: 400,
    originalPrice: 550,
    rating: 4.2,
    description:
      "Superman finds himself beset as a TV reporter at the new Daily Planet makes a case that Superman brings Metropolis more harm than good, while a vicious new foe attacks those nearest and dearest to Clark Kent! Who are all these new villains attacking Metropolis lately, and what deadly secret connects them? Superman's not going to like the answer!.",
  },
  {
    _id: uuid(),
    name: "Robin",
    author: "Adam Beechen",
    category: ["Superhero", "Science Fiction"],
    imgUrl:
      "https://raw.githubusercontent.com/Nishant-96/Robyn-Reads/dev/Images-Ecom/product%20Image.jpg",
    newprice: 380,
    originalPrice: 400,
    rating: 2.1,
    description:
      "The mystery of who framed Robin is solved, the true fate of Batgirl is revealed, and Robin receives an offer he may not live to refuse!",
  },
  {
    _id: uuid(),
    name: "Green Lantern",
    author: "Gill Kane",
    category: ["Superhero"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/a/50/589deadf64259/clean.jpg",
    newprice: 380,
    originalPrice: 600,
    rating: 3.1,
    description:
      "Hal Jordan’s life was changed twice by crashing aircraft. The first time was when he witnessed the death of his father, pilot Martin Jordan. The second was when, as an adult and trained pilot himself, he was summoned to the crashed wreckage of a spaceship belonging to an alien named Abin Sur. Abin explained that he was a member of the Green Lantern Corps, an organization of beings from across the cosmos, armed with power rings fueled by the green energy of all willpower in the universe. Upon his death, Abin entrusted his ring and duties as the Green Lantern of Earth’s space sector to Hal Jordan.",
  },
  {
    _id: uuid(),
    name: "Wytches",
    author: "Scott Snyder",
    category: ["Horror"],
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81HOHp3nwWL.jpg",
    newprice: 290,
    originalPrice: 300,
    rating: 4.1,
    description:
      "When a young family relocates to a small New England town to try to give their daughter Sailor a second chance after a bad hand in their hometown, they find that they've traded in one evil for another. They've moved into a town where the locals barter living people to mysterious entities living at the edge of town (and out the corner of your eye) in exchange for better health and better fortunes. These 'Wytches,' as they're called, feed on the greed of humanity to turn people against one another - and as Jock's terrifying art aptly shows, they aren't afraid to get their own hands (and teeth) dirty from time to time.",
  },
  {
    _id: uuid(),
    name: "Thor",
    author: "Dony Cates",
    category: ["Superhero", "Science Fiction"],
    imgUrl:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/d0/60464e1695be7/clean.jpg",
    newprice: 450,
    originalPrice: 500,
    rating: 3.9,
    description:
      "PREY PART FIVE OF SIX! A vengeful Donald Blake, Thor's enchanted ax, Jarnbjorn, and the World Tree - not a good combination! With Thor still nowhere to be found, Blake is about to finish what he started: the end of Asgard! Meanwhile, Valkyrie manages to track down the long-absent Odin, but he is not the same All-Father he once was. Can Odin rise to the occasion and help save his son and Asgard? And who will help Lady Sif and the others in Dimension Blood? Surprises abound as the gods face the fight of their eternal lives in the penultimate chapter of Prey!",
  },
];
