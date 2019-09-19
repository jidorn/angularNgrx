import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {LoggingService} from '../logging.service';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Observable<{ ingredients: Ingredient[] }>;

    constructor(
        private slService: ShoppingListService,
        private loggingService: LoggingService,
        private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
    ) {
    }

    ngOnInit() {
        this.ingredients = this.store.select('shoppingList');
    }

    onEditItem(index: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }

    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
}
