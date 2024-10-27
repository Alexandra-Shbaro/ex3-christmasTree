let number = parseInt(prompt("Enter the number of rows: "));
let body = document.querySelector("body")
let html = `<div class="row-container">`
for (let i = 0; i < number; i++) {
    let str = `<div class="row">`
    if (i == 0) {
        str += `<div class="symbol red">*</div>`
    } else {

        if (i != 1) {
            for (let j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    str += `<div class="symbol red">*</div>`
                } else {
                    str += `<div class="symbol green">|</div>`
                }

            }
        }

    }
    str += `</div>`
    html += str
}

html += `</div>`

body.innerHTML = html
