import {Ingredient} from '../../shared/ingredient.model';
import * as ShoppinglistAction from './shopping-list.actions';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]
};

export function shoppingListReducer(state = initialState,
                                    action: ShoppinglistAction.ShoppingListActions) {
    switch (action.type) {
        case ShoppinglistAction.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppinglistAction.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        default:
            return state;
    }
}
