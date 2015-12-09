export default Ember.Controller.extend({
  showDracula: false,
  dracula: '/assets/images/Dracula.jpg',
  actions: {
    imageShow() {
      this.set('showDracula', true);
    },
    imageHide() {
      this.set('showDracula', false);
    }
  }
});
