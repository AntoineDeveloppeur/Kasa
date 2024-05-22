
function splitName(name) {
    const indexSpace = name.indexOf(" ")

    if (indexSpace === -1) {
        return [name, ""]
    }
    
    const firstName = name.substring(0,indexSpace)
    const familyName = name.substring(indexSpace+1)


    return [firstName, familyName]
}

export default splitName