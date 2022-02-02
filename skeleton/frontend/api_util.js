return $.ajax({
    method: "DELETE",
    url: `/users/${this.userId}/follow`,
    data: {user: {user_id: this.userId}},
    dataType: 'JSON'})


return $.ajax({
        method: "POST",
        url: `/users/${this.userId}/follow`,
        data: {user: {user_id: this.userId}},
        dataType: 'JSON'
    })
