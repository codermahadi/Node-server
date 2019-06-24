var route = function route(url) {

    switch (url) {
        case '/home':
            return 'home'
            break
        case '/contact':
            return 'contact'
            break
        default:
            return 'none'
    }
}

exports.module = route;