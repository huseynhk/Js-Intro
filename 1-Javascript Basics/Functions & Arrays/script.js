const companies = [
    {name:'Fogito' , category:'Development' , start:2002 , end:2021},
    {name:'Fahovo' , category:'Finance' , start:1998 , end:2023},
    {name:'Marandi' , category:'Design' , start:2012 , end:2022},
    {name:'Kapital' , category:'Technology' , start:1992 , end:2015},
    {name:'Pasha' , category:'Retail' , start:1999 , end:2005},
    {name:'Rabite' , category:'Finance' , start:2006 , end:2009},
    {name:'Irshad' , category:'Development' , start:2004 , end:2021},
    {name:'AzGranata' , category:'Design' , start:1993 , end:2011},
    {name:'AzerSun' , category:'Development' , start:1997 , end:2001},
    {name:'Veyseloglu' , category:'Design' , start:1988 , end:2018},
]

const ages = [30 , 22 , 16 , 33 , 32 , 45 , 63 , 34 , 24 , 21 , 27 , 10 , 19 , 55]

//////////////////////////////////////////////////////////// FOR
for (let index = 0; index < companies.length; index++) {
  console.log(companies[index].name)    
}

/////////////////////////////////////////////////////////// FOR EACH
companies.forEach(function(company) {
    console.log(company.name)   
})

////////////////////////////////////////////////////////////// FILTER
let value = []
for (let i = 0; i < ages.length; i++) {
 if (ages[i] >= 30) {
  value.push(ages[i])
 }
}
console.log(value)   

////////////////////
let values = ages.filter(findAge)
function findAge(age) {
if(age >= 30){
  return true
}
}
console.log(values)  

/////////////////////
let values2 = ages.filter(age => age >= 30)
console.log(values2)  

/////////////////////
const development = companies.filter(findJob)
function findJob(company) {
  if(company.category === 'Development'){
    return true
  }
}
console.log(development)
/////////////////////
let development2 = companies.filter(company => company.category === 'Design')
console.log(development2)
/////////////////////
const findYear = companies.filter(company => (company.start >= 1988 && company.end < 2014))
console.log(findYear)
/////////////////////
const findEx = companies.filter(company => (company.end - company.start >= 25))
console.log(findEx)


////////////////////////////////////////////////////////////// MAP
const companyNames = companies.map(findName)
function findName(company){
  return company.name
}
console.log(companyNames)
///////////////
const experience = companies.map(findExperience)
function findExperience(company){
  return `${company.name} [${company.start} - ${company.end}]`
}
console.log(experience)
///////////////
const experience2 = companies.map(company => `${company.category} [${company.start} - ${company.end}]`)
console.log(experience2)
///////////////
const squareAge = ages.map(age => Math.sqrt(age)).map(age => age * 10)
console.log(squareAge)
///////////////



////////////////////////////////////////////////////////////// SORT

const sortedCompanies = companies.sort(compare)
function compare(a,b) {
  return a.start - b.start
}
console.log(sortedCompanies)

const sortedCompanies2 = companies.sort(compare)
function compare(a,b) {
  if(a.start > b.start){
    return 1
  }
  else{
    return -1

  }
}
console.log(sortedCompanies2)

const sortedCompanies3 = companies.sort((a,b) => (a.start > b.start ? 1 : -1))
console.log(sortedCompanies3)

const sortNames = companies.sort(((a, b) => a.name > b.name ? 1 : -1))
console.log(sortNames)


const combined = ages
.map(age => age *2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0)
console.log(combined)
