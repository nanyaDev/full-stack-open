const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / (height / 100) ** 2

  if (bmi < 18.5) return "Underweight"
  if (bmi >= 18.5 && bmi < 25) return "Normal"
  if (bmi >= 25) return "Overweight"
}

console.log(calculateBmi(180, 74))