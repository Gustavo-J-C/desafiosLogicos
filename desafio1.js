// Dada uma lista de números e um número k, retorne se quaisquer dois 
// números da lista somam k.

// Por exemplo, dado [10, 15, 3, 7] e k de 17, retorne verdadeiro já que 10 + 7 é 17.

// Bônus: você pode fazer isso em uma passagem?

let data = [10, 15, 3, 7]
let k = 17

let result = false;
while (result != true) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[i] + data[j] == k) {
                    result = true
                }        
            }
        }
        break;
}

console.log(result);