import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { HotelService } from "../../services/hotel.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-admin",
    styleUrl: "./admin.component.scss",
    templateUrl: "./admin.component.html",
    imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class AdminComponent implements OnInit {
  addHotel = false;
  users: any[] = [];
  hotels: any[] = [];
  hotelForm: FormGroup;

  constructor(private fb: FormBuilder, private hotelService: HotelService, private userService: UserService) {
    this.hotelForm = this.fb.group({
      name: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      address: ["", Validators.required],
      zip: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      rate: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      roomCount: ["", [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
  }

  ngOnInit(): void {
    this.getHotels();
    this.getUsers();
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => (this.hotels = hotels));
  }

  getUsers(): void {
    this.userService.getAllUsers().subscribe(users => (this.users = users));
  }

  createHotel(): void {
    if (this.hotelForm.valid) {
      console.log('Creating hotel with data:', this.hotelForm.value);
      this.hotelService.addHotel(this.hotelForm.value).subscribe({
        next: (response) => {
          console.log('Hotel created successfully:', response);
          this.addHotel = false;
          this.hotelForm.reset();
          this.getHotels();
        },
        error: (error) => {
          console.error('Error creating hotel:', error);
          alert('Failed to create hotel: ' + (error.error?.message || error.message));
        }
      });
    } else {
      console.log('Form is invalid:', this.hotelForm.errors);
      this.hotelForm.markAllAsTouched();
      alert('Please fill all required fields correctly');
    }
  }

  deleteHotel(hotelId: string): void {
    this.hotelService.deleteHotel(hotelId).subscribe(() => this.getHotels());
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId).subscribe(() => this.getUsers());
  }
}
