import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogComponent, DynamicDialogRef } from 'primeng/dynamicdialog';
import { genres } from 'src/app/constants/movie';
import { Genre } from 'src/app/interfaces/movie';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { subscribe } from 'src/app/store/actions/movie.actions';
import { Store } from '@ngrx/store';
import { SubscriptionData } from 'src/app/interfaces/subscription';
@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, DropdownModule, MultiSelectModule],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.scss',
})
export class SubscriptionComponent implements OnInit {
  subsctiptionForm!: FormGroup;
  instance: DynamicDialogComponent | undefined;
  birthYears: number[] = [];
  genres: [] | Genre[] = [];
  constructor(
    public ref: DynamicDialogRef,
    private dialogService: DialogService,
    private store: Store,
  ) {
    this.instance = this.dialogService.getInstance(this.ref);
  }
  ngOnInit(): void {
    this.genres = genres;
    this.birthYears = this.generateBirthYears();
    this.subsctiptionForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      birhYear: new FormControl('', [Validators.required]),
      genre: new FormControl([], [Validators.required]),
    });
  }
  generateBirthYears(): number[] {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: 100 }, (_, i) => currentYear - i);
  }
  onSubmit(): void {
    if (this.subsctiptionForm.valid) {
      const subscriptionData: SubscriptionData = this.subsctiptionForm.value;
      this.store.dispatch(subscribe({ data: subscriptionData }));
      this.ref.close({ buttonType: 'Subscribe', name: 'Subscription is Ok' });
    }
  }
  get name() {
    return this.subsctiptionForm.get('name')!;
  }
  get email() {
    return this.subsctiptionForm.get('email')!;
  }
  get birhYear() {
    return this.subsctiptionForm.get('birhYear')!;
  }
  get genre() {
    return this.subsctiptionForm.get('genre')!;
  }
}
