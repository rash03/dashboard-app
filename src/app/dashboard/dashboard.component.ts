import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  customerId='';
  customers: string[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  submitForm(): void {
    const apiUrl = 'http://localhost:3000/api/v1/customers';
    const params = { id: this.customerId };

    this.http.get<any>(apiUrl, { params }).subscribe(
      (response) => {
        // Handle the API response here
        console.log(response);
        this.customers = response;
      },
      (error) => {
        // Handle error, if any
        console.error(error);
      }
    );
  }
  clearTable(): void {
    this.customers = [];
  }
  
  // redirectToCustomer(customer: string): void {
  //   const apiUrl = `http://localhost:3000/api/v1/customer/${customer}`;
  
  //   this.http.get(apiUrl).subscribe(
  //     (response) => {
  //       // Redirect to the new page passing the response as query parameter
  //       this.router.navigate(['/customer-details'], { queryParams: { data: JSON.stringify(response) } });
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }
  // viewCustomerDetails(customerName: string): void {
  //   this.router.navigate(['customer', customerName]);
  // }
  navigateToCustomerDetails(customer: string): void {
    this.router.navigate(['/customer-details', customer]);
  }
  
}
