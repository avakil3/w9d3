const ApiUtil = require("./api_util.js");

class FollowToggle {
	constructor(el){
		this.el = $(el);
		this.userId = this.el.data('user-id');
		this.followState = this.el.data('initial-follow-state');
		this.render();
		this.el.on('click', (e) => {
			e.preventDefault();
			this.handleClick.bind(this)();
		})
	}

	render() {
		if (this.followState === 'unfollowed') {
			this.el.text('Follow!');
		} else {
			this.el.text("Unfollow!");
		}
		this.el.prop('disabled', false);
	}

	handleClick() {
		// debugger
		this.el.prop('disabled', true);
		if (this.followState === 'unfollowed') {
			this.followState = 'followed';
			// debugger
			ApiUtil.newFollow(this.userId)
				.then(this.render.bind(this));
		} else {
			this.followState = 'unfollowed';
			ApiUtil.deleteFollow(this.userId)
				.then(this.render.bind(this));
		}

	}
}



module.exports = FollowToggle;