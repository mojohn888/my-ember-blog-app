import Ember from 'ember';

export function formatDate(params) {
  return moment(params[0]).fromNow();
}

export default Ember.Helper.helper(formatDate);
