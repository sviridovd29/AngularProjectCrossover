export interface User {
  fullUserName: string,
  city: string,
  school: string
  phone: string,
  colorTheme: string,
  userName: string,
  userEmail: string,
  pass: {
    password: string,
    rpassword: string,
  } 
}


export interface Car {
  id: number,
  path: string,
  brand: string,
  series: string,
  model: string,
  year: number,
  description: string,
  gasoline: string,
  expense: string,
  urlLogo: string,
  urlImg: string
}
