import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

//ngFor Directive
//-firstname-lastname-id-phone-gender-email
users = [
{
  id: 1,
  firstName: "Flora",
  lastName: "Twell",
  email: "ftwell0@phoca.cz",
  gender: "Female",
  phone: "0111223344",

},

{
  id: 2,
    firstName: "Thanh",
    lastName: "Tuyen",
    email: "tuyenphamlove1234@gmail.com",
    gender: "Female",
   phone: "0356519925",
},

{
  id: 3,
    firstName: "hi",
    lastName: "Twell",
    email: "hitwell0@phoca.cz",
    gender: "male",
    phone: "0124356788",
},

{
  id: 4,
  firstName: "Pham",
  lastName: "Hoa",
  email: "hoapham@gmail.com",
  gender: "Female",
  phone: "0356512288",
},
{
  id: 5,
  firstName: "Hoa",
  lastName: "Hong",
  email: "hoahong@gmail.com",
  gender: "male",
  phone: "0356518889",

},
{
  id: 6,
  firstName: "Hoa",
  lastName: "Hue",
  email: "hoahue@gmail.com",
  gender: "female",
  phone: "0123333444",

},
{
  id: 7,
  firstName: "Hoa",
  lastName: "Cam",
  email: "hoacam@gmail.com",
  gender: "female",
  phone: "0123333488",

},
{
  id: 8,
  firstName: "Hoa",
  lastName: "Cuc",
  email: "hoacuc@gmail.com",
  gender: "female",
  phone: "0123333025",

},
{
  id: 9,
  firstName: "Hoa",
  lastName: "Lan",
  email: "hoalan@gmail.com",
  gender: "female",
  phone: "01233334445",

},
{
  id:10,
  firstName: "Hoa",
  lastName: "Mai",
  email: "hoamai@gmail.com",
  gender: "female",
  phone: "01233334999",

},
{
  id:11,
  firstName: "Hoa",
  lastName: "Dao",
  email: "hoadao@gmail.com",
  gender: "male",
  phone: "01233334900",

},


]
}