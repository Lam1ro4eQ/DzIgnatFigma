import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            switch (action.payload) {
                case "up": {
                    const collatore = new Intl.Collator
                    let sortState = state.sort((x, y) => collatore.compare(x.name, y.name))
                    return sortState // need to fix
                }
                case "down": {
                    const collatore = new Intl.Collator
                    let sortState = state.sort((x, y) => collatore.compare(y.name, x.name))
                    return sortState // need to fix
                }
            }
        }
        case 'check': {
            const checkState = [...state]
            return checkState.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
