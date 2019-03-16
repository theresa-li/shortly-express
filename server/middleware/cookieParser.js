const parseCookies = (req, res, next) => {
    //console.log('REQ : ', req.headers.cookie, 'NEXT : ', next);
    var cookieObj = {};
    if(req.headers.cookie !== undefined) {
        var splitCookies = req.headers.cookie.split('; ');
        
        for(var i= 0; i < splitCookies.length; i++) {
            var cookieAndKey = splitCookies[i].split('=');
            cookieObj[cookieAndKey[0]] = cookieAndKey[1];
        }
        console.log(cookieObj);
        req.cookies = cookieObj;
        next(cookieObj);
        
    
        
    }
        
    
    
};

module.exports = parseCookies;