const ApiUtil = {
	newFollow: function(userId){
		return $.ajax({
			method: "POST",
			url: `/users/${userId}/follow`,
			// data: {user: {user_id: userId}},
			dataType: 'JSON'
		})
	},

	deleteFollow: function(userId){
		return $.ajax({
			method: "DELETE",
			url: `/users/${userId}/follow`,
			// data: {user: {user_id: userId}},
			dataType: 'JSON'
	})
}
};


module.exports = ApiUtil;

