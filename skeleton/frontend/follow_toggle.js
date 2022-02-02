class FollowToggle {
	constructor(el){
		// debugger
		this.el = $(el);
		this.userId = this.el.data('user-id');
		this.followState = this.el.data('initial-follow-state'); 
		this.render();
		this.el.on('click',this.handleClick.bind(this))
		// this.handleClick().then(this.render);
	}

	render() {
		if (this.followState === 'unfollowed') {
			this.el.text('Follow!');
		} else {
			this.el.text("Unfollow!");
		}
	}

	handleClick() {
		debugger
		this.el.on('submit', (e) => {
			e.preventDefault();
			debugger
			if (this.followState === 'unfollowed') {
				debugger
				return $.ajax({
					method: "POST",
					url: `/users/${this.userId}/follow`,
					data: {user: {user_id: this.userId}},
					dataType: 'JSON'
				})
			} else {
				return $.ajax({
					method: "DELETE",
					url: `/users/${this.userId}/follow`,
					data: {user: {user_id: this.userId}},
					dataType: 'JSON'
				})
			}
		});
	}
}



module.exports = FollowToggle;