import * as CustomerActions from "./customer.action";
import { Customer } from "../customer.model";
import * as formRoot from "../../state/app-state";
import { Action } from "rxjs/internal/scheduler/Action";

export interface CustomerState {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: string
}

export interface AppState extends formRoot.AppState {
    customers: CustomerState;
}

export const initialState: CustomerState = {
    customers: [],
    loading: false,
    loaded: false,
    error: ""
};

export function customerReducer( 
    state = initialState,
    action: CustomerActions.Actions
): CustomerState {
    switch(action.type){
        case CustomerActions.CustomerActionType.LOAD_CUSTOMERS: {
            return {
                ...state,
                loading: true
            }
        }
        case CustomerActions.CustomerActionType.LOAD_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                customers: action.payload
            }
        }
        case CustomerActions.CustomerActionType.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                customers: [],
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return state;
        } 
    }
}