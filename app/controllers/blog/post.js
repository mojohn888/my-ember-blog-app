import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: false,

    actions: {

        edit() {
            this.set('isEditing', true);
        },

        doneEditing() {
            this.set('isEditing', false);
        }
    }
});
