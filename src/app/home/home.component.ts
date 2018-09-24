import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  timeLineJson: JSON;
  constructor() { }

  ngOnInit() {
    let tmpJson = `{
    "organization": [
      {
        "year": 2010,
        "name": "ING",
        "designation": "Application Lead",
        "duration": "January 2018 – Present",
        "city": "Brussels",
        "country": "Belgium",
        "logo": "ing-bank-logo.png"
      }, {
        "year": 2015,
        "name": "Oracle",
        "designation": "Java Consultant",
        "duration": "September 2014 – January 2016",
        "city": "Doha",
        "country": "Qatar",
        "logo": "oracle-logo.png"
      }, {
        "year": 2013,
        "name": "Telenet",
        "designation": "Java Analyst Developer",
        "duration": "July 2013 – August 2014",
        "city": "Mechelen",
        "country": "Belgium",
        "logo": "telenet-logo-uitgelicht.jpg"
      }
      , {
        "year": 2010,
        "name": "Infosys",
        "designation": "Java Developer",
        "duration": "June 2010 – July 2013",
        "city": "Pune",
        "country": "Maharashtra, India",
        "logo": "Infosys-logo.jpg"
      }
    ]
  }`;

  this.timeLineJson = JSON.parse(tmpJson);
}

}
