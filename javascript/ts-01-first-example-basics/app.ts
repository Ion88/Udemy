// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name,
//     this.age = age
//   }
// }

interface Greetable {
  name: string
}

interface Printable {
  print(): void
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}

  print() {
    console.log(this.name)
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age)
  }
}

const user = new User('Ion', 33)

const num1Input = document.getElementById('num1') as HTMLInputElement
const num2Input = <HTMLInputElement>document.getElementById('num2')
const buttonElement = document.querySelector('button')!

function addNumbers(a: number, b: number) {
  return a + b
}

type PrintMode = 'console' | 'alert'
enum OutputMode { CONSOLE, ALERT }

function printResult(result: string | number, printMode: OutputMode ) {
  if (printMode === OutputMode.CONSOLE) {

    console.log(result)
  } else if (printMode === OutputMode.ALERT) {
    alert(result)
  }
}

// const result = addNumbers(3,5)
// console.log(result)

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResults = CalculationContainer[]
// type CalculationResults = { res: number, print: () => void }[]

const results: CalculationResults = []
const names = ['Ion']

buttonElement.addEventListener('click', () => {
  const num1 = +num1Input.value 
  const num2 = +num2Input.value
  const result = addNumbers(num1, num2)
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res)
    }
  }
  results.push(resultContainer)
  //results.push(5)
  //results[0].print()
  printResult(result, OutputMode.CONSOLE)
  printResult(result, OutputMode.ALERT)
})

function logAndEcho<T>(val: T) {
  console.log(val)
  return val
}

logAndEcho<string>('Hi there').split(' ')