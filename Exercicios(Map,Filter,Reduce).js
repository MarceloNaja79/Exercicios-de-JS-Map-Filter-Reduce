//const list = [1, 2, 3, , 4, 5, 6, 7, 8, 9]

//const sum = list.reduce((acumulador, valoratual) => {
  //  return acumulador + valoratual
//}, 0)

const cart = [
    { productName: 'Abobora', pricePorkg: 5, kg: 1 },
    { productName: 'Maçã', pricePorkg: 3.55, kg: 1.3 },
    { productName: 'Cebola', pricePorkg: 1.2, kg: 2 },
    { productName: 'Alho', pricePorkg: 5.4, kg: 1.67 },
    { productName: 'Banana', pricePorkg: 3, kg: 1.5 },
    { productName: 'Pera', pricePorkg: 2, kg: 3.98 },
]

const finalValue = cart.reduce((acc, value) => {
    const result =  value.pricePorkg * value.kg
return acc + result
}, 0)
//console.log(`A Sua Compra Ficou no Total de: ${finalValue}`)

// Filter serve para filtrar selecionar somente oq vc quer

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numeros.filter(valorAtual => valorAtual % 2 === 0 );
//console.log(pares)



const companies =[
    {name:'Samsung', marketValue: 50, CEO: 'kim hyun suk', foundeOn: 1938},

     {name:'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundeOn: 1975},

      {name:'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundeOn: 1968},

       {name:'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundeOn: 2004},

        {name:'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundeOn: 2006},

         {name:'Apple', marketValue: 845, CEO: 'Tim Cook', foundeOn: 1976},
]

const add10percent = (company) => {
    company.marketValue = company.marketValue - company.marketValue / 10 
    return company
}

const filterCompanies = (company) => company.foundeOn < 1980
const calculateTotalMarketValue = (acc,company) => acc + company.marketValue


const marketValueOldCompanies = companies
.map(add10percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue, 0)

console.log (marketValueOldCompanies)