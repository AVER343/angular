import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password=''
  lengthOfInput:number=0
  checkboxOne=false
  checkboxTwo=false
  checkboxThree=false
  onChangeUseLetters=()=>{
    this.checkboxOne=!this.checkboxOne
  } 
  onChangeUseNumbers=()=>{
    this.checkboxTwo=!this.checkboxTwo
  } 
  onChangeUseSymbols=()=>{
    this.checkboxThree=!this.checkboxThree
  } 
  onButtonClick=()=>{
    const numbers='0123456789'
    const letters='abcdefghijklmnopqrstuvwxyz'
    const symbols='-+=)(*&^%$#@!{}[]:;"<>/?`~'
    let generatedPassword:string=''
    let passwordToBe:string=''
    if(this.checkboxOne){
      generatedPassword=generatedPassword.concat(numbers)
    }
    if(this.checkboxTwo){
      generatedPassword=generatedPassword.concat(letters)
    }
    if(this.checkboxThree){
      generatedPassword=generatedPassword.concat(symbols)
    }
    let len = generatedPassword.length
    let i:number
    console.log(this.lengthOfInput)
    for(i=0;i<this.lengthOfInput;i++)
    {
      let index = Math.floor(Math.random()*len)
      passwordToBe = passwordToBe.concat(generatedPassword[index])
    }
    this.password = passwordToBe
  }
  onChange=(event)=>{
    const parsedValue = parseInt(event.target.value)
    if(!isNaN(parsedValue))
    {
      this.lengthOfInput = parsedValue
    }
    else{

    }
  }
}
