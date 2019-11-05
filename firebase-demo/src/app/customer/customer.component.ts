import { Component, OnInit } from '@angular/core';
import { CustomerService  } from "../shared/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
	submitted: boolean;
	formControls = this.customerService.form.controls;
	showSuccessMessage: boolean;

	ngOnInit() {
  	}

	onSubmit(){
	// here we said that if the value of the hidden input is null and it's by default null we will insert a new customer and when the $key value is not null we will update an existing data
	    this.submitted = true;
	    if(this.customerService.form.valid){
           	if(this.customerService.form.get("$key").value == null ){ // here we will call the insert function and we passed an object containing details of customer from the form and .value to bring the values from the input boxes including $key                   this.customerService.insertCustomer(this.customerService.form.value);
       		this.customerService.insertCustomer(this.customerService.form.value);
		       this.showSuccessMessage =true;// we set the property to true
		       setTimeout(()=> this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
		       this.submitted = false;
		       this.customerService.form.reset();// the form will be empty after new record created
	    } else {
	    	
	    //update
	    }
	 }
	}
}