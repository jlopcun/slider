const responsiveSliderValues =[
    {
        title:'Banco del pulpo',
        img:'assets/banco-pulpo.jpg',
        alt:'banco pulpo img'
    },
    {
        title:'La marina',
        img:'assets/la-marina.jpg',
        alt:'la marina img'
    },
    {
        title:'Plaza de María Pita',
        img:'assets/maria-pita.jpg',
        alt:'plaza de María Pita img'
    },
    {
        title:'Planetario',
        img:'assets/planetario.jpg',
        alt:'Planetario img'
    },
    {
        title:'Playa de las lapas',
        img:'assets/playa-lapas.jpg',
        alt:'playa de las lapas img'
    },
    {
        title:'Paza de Lugo',
        img:'assets/plaza-de-lugo.jpeg',
        alt:'plaza de Lugo img'
    },{
        title:'Soldado de la Domus',
        img:'assets/soldado-coruña.jpg',
        alt:'soldado de la Domus'
    }    
]
let actual = 0;
const $ = (el) => document.getElementById(el);
const $slider = $('slider');
const $interactions = $('interactions');
const RootStyles = document.documentElement.style;
let Percent=0;
const passDia =(slider) =>{
    if(actual===responsiveSliderValues.length){
        actual=0;
    }
    if(actual===-1){
        actual=responsiveSliderValues.length-1;
    }
    let title = slider.querySelector('.slider-title');
    let imgSrc = slider.querySelector('.slider-img');
    title.textContent = responsiveSliderValues[actual].title;
    imgSrc.src = responsiveSliderValues[actual].img;
    imgSrc.alt = responsiveSliderValues[actual].alt;
}
setInterval(()=>{
    Percent=0;
    actual++;
    passDia($slider);
},5000)
setInterval(()=>{
    Percent+=0.29;
    RootStyles.setProperty('--sliderPercent',`${Percent}%`);
},1)

passDia($slider,actual);



$interactions.addEventListener('click',(e)=>{
    const id = e.target.id;
    const act = {
        'adel':()=>{
            actual++;
        },
        'atras':()=>{
            actual--;
            
        },
   }
    
    if(act[id]) act[id]();
    passDia($slider)
    
})