import { Component, OnInit } from '@angular/core';
@Component({
selector: 'phone-login',
templateUrl: './phone-login.component.html',
styleUrls: ['./phone-login.component.scss']
})
export class PhoneLoginComponent implements OnInit {
otpSent: boolean = false
phoneNumber = null
otp = null
constructor() { }
ngOnInit() {
}
sendOtp(){}
signIn(){}
}
