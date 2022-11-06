const formEl  = document.getElementById('form');
const inputEmail = document.getElementById("inpEmail");
const inputPassword = document.getElementById("inpPassword");
const errorSpan = document.getElementById('error');
const button = document.getElementById("btn"); 
const login = 'admin@gmail.com'; 
const password = '111111';
//--
formEl.addEventListener('submit',(e) => {
  e.preventDefault();
  const {value: emailString} = inputEmail;  
  const {value: passwordString} = inputPassword;  
  //--  
  if (!emailString.includes('@')) {    
    errorSpan.textContent = 'email input is @';
    return false;
  }
  //---
  let nameEmail = emailString.split('@')[0]; 
  let fullDomen = emailString.split('@')[1];
  let nameDomen = fullDomen.split('.')[0];
  let nameCountry = fullDomen.split('.')[1]
  //--  
  if(!nameDomen) {
    errorSpan.textContent = 'domen input is emtry';
    return false;
  }
  //--
  if(!nameCountry) {
    errorSpan.textContent = 'Country input is emtry';
    return false;
  }
  //--
  if (!passwordString) {     
    errorSpan.textContent = 'password input is emtry';
    return false;
  }
  //--
  if (passwordString.length < 6) {     
    errorSpan.textContent = 'password > 6';
    return false;
  }
  //--
  if(emailString !== login) {
    errorSpan.textContent = 'no such user found'
  } else {    
    window.location.assign('https://www.google.ua');
  };
  /* 
    console.log('name'+ ' ' + nameEmail);
    console.log('domen' + ' ' + nameDomen);
    console.log('country'+ ' ' + nameCountry);
  */    

  inputEmail.value ='';
  inputPassword.value ='';
});

const check = () => btn.disabled =
inputEmail.value < 1  || inputPassword.value.length < 1;
inputEmail.addEventListener('input', check);
inputPassword.addEventListener('input', check);
check();