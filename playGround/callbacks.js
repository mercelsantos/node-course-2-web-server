var getUser = (id,callback) => {
    var user = {
        id:id,
        name:'Vikram'
    };

    setTimeout(() => {
        callback(user)
    },300)

};

getUser(44,(userObject) => {
    console.log(userObject);
});