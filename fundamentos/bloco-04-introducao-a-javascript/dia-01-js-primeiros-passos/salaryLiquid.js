let grossSalary = 1300;
let aliquotINSS = null;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary*0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  aliquotINSS = grossSalary*0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  aliquotINSS = grossSalary*0.11;
} else if (grossSalary > 5189.82) {
  aliquotINSS = 570.88;
}

let baseSalary = grossSalary - aliquotINSS;
let IR = null;

if (baseSalary <= 1903.98) {
  IR = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  IR = baseSalary*0.075 - 142.80;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  IR = baseSalary*0.15 - 354.80;
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  IR = baseSalary*0.225 - 636.13;
} else if (baseSalary > 4664.68) {
  IR = baseSalary*0.275 - 869.36;
}

let liquidSalary = baseSalary - IR;

console.log(liquidSalary);