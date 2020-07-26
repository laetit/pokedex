export const capitalize = (string) => {
    let s = string.trim()
    let upper = true
    let resp = ''
    s.split('').map((letra) => {
        if (letra === ' ') {
            resp = resp + ' '
            upper = true
            return false
        }
        if (upper) {
            resp = resp + letra.toLocaleUpperCase()
            upper = false
        } else {
            resp = resp + letra.toLocaleLowerCase()
        }
        return true
    })
    return resp
}