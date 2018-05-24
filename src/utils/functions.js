module.exports = {
    validateUsername(username) {
        let flag = true;
        
        if(!username) {
            flag = false;
        }
        if(username.length < 6) {
            flag = false;
        }
        if(username.indexOf(' ') !== -1) {
            flag = false;
        }
        

        return flag;
    }
}