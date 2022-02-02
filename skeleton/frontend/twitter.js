const FollowToggle = require('./follow_toggle.js');

console.log("row 3");
$(document).ready(()=>{
	console.log("row 5");
	$('button.follow-toggle').each((i) => new FollowToggle($('button.follow-toggle')[i]));
});

console.log("row 8");