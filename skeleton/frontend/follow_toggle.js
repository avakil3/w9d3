class FollowToggle {
	constructor(el){
		this.el = $(el);
		this.userId = el.user-id;
		this.followState = el.initital-follow-state; 
	}
}

module.exports = FollowToggle;