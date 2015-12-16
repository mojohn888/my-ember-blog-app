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
    };

  });



      this.get('/posts');
      this.get('/posts/:id', ['post', 'authors']);
      this.get('/authors');
      this.get('/authors/:id', ['author', 'posts']);



}
