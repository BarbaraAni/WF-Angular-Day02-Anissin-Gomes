import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 constructor(private firebase: AngularFireDatabase) { }
	customerList: AngularFireList<any>;

	form = new FormGroup({
        $key: new FormControl(null),
        task: new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input
        deadline: new FormControl('', Validators.required),
        status: new FormControl('', Validators.required)
    });
    getCustomers(){
        this.customerList = this.firebase.list('customers');
        return this.customerList.snapshotChanges();
    }
    insertCustomer(customer){
        this.customerList.push({
            task: customer.task,
            deadline: customer.deadline,
            status: customer.status
        });
    }
}