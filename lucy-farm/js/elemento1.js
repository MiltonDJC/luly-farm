let botonFood = document.getElementById("botonFood");
let botonMedicine = document.getElementById("botonMedicine");
let botonRecipe = document.getElementById("botonRecipe");
let parrafo = document.getElementById("parrafo");

botonFood.addEventListener("click", enComidas);
botonMedicine.addEventListener("click", medicine);
botonRecipe.addEventListener("click", recipeFood);

// function esconderTexto(){
//     let textoEscondido = document.getElementById("parrafo").style.visibility = "none";
// }
function enComidas(){
    document.getElementById("parrafo").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, natus veritatis esse saepe asperiores corrupti explicabo assumenda voluptatum. Laudantium quis quidem inventore enim soluta magnam esse exercitationem consectetur culpa. Ex quibusdam quos adipisci, alias doloremque laboriosam quam illum est. Iste cupiditate molestiae similique itaque aperiam quas libero doloremque vero laborum rerum expedita, assumenda facilis rem, mollitia amet accusantium consequuntur. Deserunt quisquam, pariatur error nesciunt et nobis amet voluptates reprehenderit, maiores enim eos optio eaque beatae quos consequuntur ratione laborum deleniti sunt exercitationem totam in fuga suscipit quis. Ut, autem.";
}
function medicine(){
    document.getElementById("parrafo").innerHTML = "Iste cupiditate molestiae similique itaque aperiam quas libero doloremque vero laborum rerum expedita, assumenda facilis rem, mollitia amet accusantium consequuntur."
}
function recipeFood(){
    document.getElementById("parrafo").innerHTML = "Ex quibusdam quos adipisci, alias doloremque laboriosam quam illum est. Iste cupiditate molestiae similique itaque aperiam quas libero doloremque vero laborum rerum expedita, assumenda facilis rem, mollitia amet accusantium consequuntur. Deserunt quisquam, pariatur error nesciunt et nobis amet voluptates reprehenderit, maiores enim eos optio eaque beatae quos consequuntur ratione laborum deleniti sunt exercitationem totam in fuga suscipit quis. Ut, autem."
}