const FollowToggle = require('./follow_toggle.js');

$(document).ready(()=>{
	$('button.follow-toggle').each((i) => new FollowToggle($('button.follow-toggle')[i]));
});
