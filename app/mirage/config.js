export default function() {
  this.get('/rentals', function() {
    return {
      data: [{
        type: "rentals",
        id: 1,
        attributes: {
          title: "Grand Old Mansion",
          owner: "Veruca Salt",
          city: "San Francisco",
          type: "Estate",
          bedrooms: 15,
          image: "assets/images/Crane_estate_(5).jpg"
        }
      }, {
        type: "rentals",
        id: 2,
        attributes: {
          title: "Urban Living",
          owner: "Mike Teavee",
          city: "Seattle",
          type: "Condo",
          bedrooms: 1,
          image: "assets/images/Alfonso_13_Highrise_Tegucigalpa.jpg"
        }
      }, {
        type: "rentals",
        id: 3,
        attributes: {
          title: "Downtown Charm",
          owner: "Violet Beauregarde",
          city: "Portland",
          type: "Apartment",
          bedrooms: 3,
          image: "assets/images/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
        }
      }]
    }
  });

  this.get('/posts', function() {
    return {
      data: [{
        type: "posts",
        id: 1,
        attributes: {
          title: "Day Six",
          author: "Dracula",
          date: "12/20/2015",
          body: "A cool merging of monster talent here; Forrest J. Ackerman writes a script that Boris Karloff reads with Verne Langdon & Milt Larsen producing! This LP is a collection of synopses for the classic Universal films that Karloff figured in so largely, and mixed in with his narration are sound bites and musical cues from Dracula, Frankenstein, The Mummy, The Bride of Frankenstein, The Son of Frankenstein, The Wolf Man, and The House of Frankenstein; all of which mustve blown the collective minds of monster kids dwelling in the pre-video-on-demand days of 1967."
        }
      }, {
        type: "posts",
        id: 2,
        attributes: {
          title: "Dracula by Tha",
          author: "Dracula",
          date: "12/21/2015",
          body: "Tha career began in his early life in 1970 in the children magazine Patufet by Bruguera where there happens to be responsible for inking the pencils of unforgettable designers and Ibáñez, Raf (Sir Tim O´Theo), Escobar (Zipi y Zape) o Martz-Schmidt (El Profesor Cataplasma)."
        }
      }, {
        type: "posts",
        id: 3,
        attributes: {
          title: "Lugosi Wines",
          author: "Dracula",
          date: "12/22/2015",
          body: "Bela Lugosi created his unique characterization of Count Dracula on the Broadway stage in 1927 and brought it to the screen in 1931. One of the first members of the Screen Actors Guild, he was a true American film pioneer. Although Count Dracula never “drank” wine, Bela Lugosi, the man, had impeccable taste in wines."
        }
      }]
    }
  });

}
