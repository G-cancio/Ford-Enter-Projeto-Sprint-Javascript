let carArr = [];

class Car {
   
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.imagem = imagem;
    }
}

let carouselArrCompare = [];

function GetCarArrPosition(CarObject) {
    for(let i = 0; i < carouselArrCompare.length; i++){
        if(carouselArrCompare[i].nome === CarObject.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(checkbox, CarObject) {
   
    if(checkbox.checked){
        if(carouselArrCompare.length >= 2) {
            alert("Você só pode selecionar 2 veículos para a comparação.")  
            checkbox.checked = false;
            return;
        }
        carouselArrCompare.push(CarObject);
    } else {
        let position = GetCarArrPosition(CarObject);
        if (position !== -1) {
        carouselArrCompare.splice(position, 1);
        }
    }
}

function ShowCompare() {
    if(carouselArrCompare.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();

    document.getElementById("compare").style.display = "block";
}

function UpdateCompareTable() {
        for (let coluna = 0; coluna < 2; coluna++) {
            let car = carouselArrCompare[coluna];

        if (car) {
            document.getElementById(`compare_image_${coluna}`).innerHTML = `<img src="${car.imagem}" width="150" alt="${car.nome}">`;
            document.getElementById(`compare_modelo_${coluna}`).textContent = car.nome;
            document.getElementById(`compare_alturacacamba_${coluna}`).textContent = car.alturaCacamba + " mm";
            document.getElementById(`compare_alturaveiculo_${coluna}`).textContent = car.alturaVeiculo + " mm";
            document.getElementById(`compare_alturasolo_${coluna}`).textContent = car.alturaSolo + " mm";
            document.getElementById(`compare_capacidadecarga_${coluna}`).textContent = car.capacidadeCarga + " Kg";
            document.getElementById(`compare_motor_${coluna}`).textContent = car.motor;
            document.getElementById(`compare_potencia_${coluna}`).textContent = car.potencia + " cv";
            document.getElementById(`compare_volumecacamba_${coluna}`).textContent = car.volumeCacamba + " L";
            document.getElementById(`compare_roda_${coluna}`).textContent = car.roda;
            
            let precoFormatado = typeof car.preco === "number" 
                ? car.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : "R$ " + car.preco;
            document.getElementById(`compare_preco_${coluna}`).textContent = precoFormatado;
        } else {
            ClearColumnFields(coluna);
        }
    }
}

function ClearColumnFields(coluna) {
    const campos = ['image', 'modelo', 'alturacacamba', 'alturaveiculo', 'alturasolo', 'capacidadecarga', 'motor', 'potencia', 'volumecacamba', 'roda', 'preco'];
    campos.forEach(campo => {
        let elemento = document.getElementById(`compare_${campo}_${coluna}`);
        if (elemento) 
            elemento.innerHTML = '';
    });
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}