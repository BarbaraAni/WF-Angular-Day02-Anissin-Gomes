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
        firstName: new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.email),// to check if the value inside the input is an email
        mobile: new FormControl('', [Validators.required, Validators.minLength(8)]), // here we put an array because we want the user to fill the input and the input length must be at least 8
        address: new FormControl('')
    });
    getCustomers(){
        this.customerList = this.firebase.list('customers');
        return this.customerList.snapshotChanges();
    }
    insertCustomer(customer){
        this.customerList.push({
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            mobile: customer.mobile,
            address: customer.address
        });
    }
}