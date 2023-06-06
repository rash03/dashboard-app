import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customerName!: string;
  customerDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerName = params['name'];
      this.getCustomerDetails();
    });
  }

  getCustomerDetails(): void {
    const apiUrl = `http://localhost:3000/api/v1/customer/${this.customerName}`;
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.customerDetails = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }
}
