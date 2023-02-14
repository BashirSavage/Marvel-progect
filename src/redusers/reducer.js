const initialState = {
    characters: [],
    randomCharacter: {},
    selectCharacter: {},
    comics: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "upload/characters":
            return({
                ...state,
                characters: action.payload,
                randomCharacter: action.payload[0]
            })
        case "random/character":
                return({
                    ...state,
                    randomCharacter: state.characters[Math.floor(Math.random() * 98)]
                })
        case "select/character":
                    return({
                        ...state,
                        selectCharacter: action.payload

                    })
                    case "upload/comics":
                        return({
                            ...state,
                            comics: action.payload
                        })
                      
       default: 
       return state
        
}}