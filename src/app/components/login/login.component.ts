import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null;

  constructor(private readonly _http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      excelFile: new FormControl(null)
    });
  }

  /**
   * @description handle the submit button in form
   */
  handleSubmit = () => {
    this._http
      .post(
        "http://localhost:3000/getfile",
        { data: this.srcresult },
        {
          reportProgress: false
        }
      )
      .subscribe(
        x => {
          console.log(x);
        },
        err => {
          console.log(err);
        }
      );
  };

  myExcelFile: File;
  myFiles: FileList;
  srcresult;
  handleOnChange = (ev?) => {
    this.myFiles = ev.target.files;
    this.myExcelFile = this.myFiles[0];

    console.log(this.myExcelFile);

    let r = new FileReader();
    r.onload = (ev?) => {
      this.srcresult = ev.target.result;
      console.log(this.srcresult);
    };

    //r.readAsArrayBuffer(this.myExcelFile);

    r.readAsDataURL(this.myExcelFile);

    // r.readAsText(
    //   this.myExcelFile,
    //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    // );
  };
} // component class
