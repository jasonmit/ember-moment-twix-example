import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
	foo: Ember.computed({
		get() {
			return moment("1/25/1982 9:30 AM").twix("1/25/1982 1:30 PM").simpleFormat("h:m");
		}
	})
});
