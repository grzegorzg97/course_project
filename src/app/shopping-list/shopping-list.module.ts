import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent}
        ]),
       
    ],
    
})
export class ShoppingListModule {}