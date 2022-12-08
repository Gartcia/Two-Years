var Confetti=function(){var t=function(){return function(){this.gravity=10,this.particle_count=75,this.particle_size=1,this.explosion_power=25,this.destroy_target=!0,this.fade=!1}}(),e=function(){function e(n){var r=this;if(this.bursts=[],this.setCount=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.particle_count=t},this.setPower=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.explosion_power=t},this.setSize=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.particle_size=t},this.setFade=function(t){if("boolean"!=typeof t)throw new Error("Input must be of type 'boolean'");e.CONFIG.fade=t},this.destroyTarget=function(t){if("boolean"!=typeof t)throw new Error("Input must be of type 'boolean'");e.CONFIG.destroy_target=t},this.setupCanvasContext=function(){if(!e.CTX){var t=document.createElement("canvas");e.CTX=t.getContext("2d"),t.width=2*window.innerWidth,t.height=2*window.innerHeight,t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="calc(100%)",t.style.height="calc(100%)",t.style.margin="0",t.style.padding="0",t.style.zIndex="999999999",t.style.pointerEvents="none",document.body.appendChild(t),window.addEventListener("resize",function(){t.width=2*window.innerWidth,t.height=2*window.innerHeight})}},this.setupElement=function(t){var n;r.element=document.getElementById(t),null===(n=r.element)||void 0===n||n.addEventListener("click",function(t){var n=new o(2*t.clientX,2*t.clientY);r.bursts.push(new i(n)),e.CONFIG.destroy_target&&(r.element.style.visibility="hidden")})},this.update=function(t){r.delta_time=(t-r.time)/1e3,r.time=t;for(var e=r.bursts.length-1;e>=0;e--)r.bursts[e].update(r.delta_time),0==r.bursts[e].particles.length&&r.bursts.splice(e,1);r.draw(),window.requestAnimationFrame(r.update)},!n)throw new Error("Missing id");e.CONFIG||(e.CONFIG=new t),this.time=(new Date).getTime(),this.delta_time=0,this.setupCanvasContext(),this.setupElement(n),window.requestAnimationFrame(this.update)}return e.prototype.draw=function(){s.clearScreen();for(var t=0,e=this.bursts;t<e.length;t++){e[t].draw()}},e}(),i=function(){function t(t){this.particles=[];for(var i=0;i<e.CONFIG.particle_count;i++)this.particles.push(new n(t))}return t.prototype.update=function(t){for(var e=this.particles.length-1;e>=0;e--)this.particles[e].update(t),this.particles[e].checkBounds()&&this.particles.splice(e,1)},t.prototype.draw=function(){for(var t=this.particles.length-1;t>=0;t--)this.particles[t].draw()},t}(),n=function(){function t(t){this.size=new o((16*Math.random()+4)*e.CONFIG.particle_size,(4*Math.random()+4)*e.CONFIG.particle_size),this.position=new o(t.x-this.size.x/2,t.y-this.size.y/2),this.velocity=r.generateVelocity(),this.rotation=360*Math.random(),this.rotation_speed=10*(Math.random()-.5),this.hue=360*Math.random(),this.opacity=100,this.lifetime=Math.random()+.25}return t.prototype.update=function(t){this.velocity.y+=e.CONFIG.gravity*(this.size.y/(10*e.CONFIG.particle_size))*t,this.velocity.x+=25*(Math.random()-.5)*t,this.velocity.y*=.98,this.velocity.x*=.98,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.rotation+=this.rotation_speed,e.CONFIG.fade&&(this.opacity-=this.lifetime)},t.prototype.checkBounds=function(){return this.position.y-2*this.size.x>2*window.innerHeight},t.prototype.draw=function(){s.drawRectangle(this.position,this.size,this.rotation,this.hue,this.opacity)},t}(),o=function(){return function(t,e){this.x=t||0,this.y=e||0}}(),r=function(){function t(){}return t.generateVelocity=function(){var t=Math.random()-.5,i=Math.random()-.7,n=Math.sqrt(t*t+i*i);return i/=n,new o((t/=n)*(Math.random()*e.CONFIG.explosion_power),i*(Math.random()*e.CONFIG.explosion_power))},t}(),s=function(){function t(){}return t.clearScreen=function(){e.CTX&&e.CTX.clearRect(0,0,2*window.innerWidth,2*window.innerHeight)},t.drawRectangle=function(t,i,n,o,r){e.CTX&&(e.CTX.save(),e.CTX.beginPath(),e.CTX.translate(t.x+i.x/2,t.y+i.y/2),e.CTX.rotate(n*Math.PI/180),e.CTX.rect(-i.x/2,-i.y/2,i.x,i.y),e.CTX.fillStyle="hsla("+o+"deg, 90%, 65%, "+r+"%)",e.CTX.fill(),e.CTX.restore())},t}();return e}();
let confetti = new Confetti('empecemos');
confetti.setCount(500);
confetti.setSize(1);
confetti.setPower(100);
confetti.setFade(true);
confetti.destroyTarget(true);

const fotos = [
    {
        titulo: "Nos mudamos juntos",
        fecha: "31/01/2022",
        link: "images/Nos-mudamos.jpg"
    },
    {
        titulo: "Primera desgracia",
        fecha: "04/02/2022",
        link: "images/Se-rompio.jpeg"
    },
    {
        titulo: "Cumpliste 20 años",
        fecha: "17/02/2022",
        link: "images/Cumpliste-20.jpg"
    },
    {
        titulo: "Arreglaron los caños",
        fecha: "26/02/2022",
        link: "images/Arreglaron-los-caños.jpeg"
    },
    {
        titulo: "Fuimos a Tucson",
        fecha: "27/02/2022",
        link: "images/fuimos-a-tucson.jpg"
    },
    {
        titulo: "Arreglaron el agua...",
        fecha: "04/03/2022",
        link: "images/Se-arreglo.jpeg"
    },
    {
        titulo: "Fuimos a merendar juntos",
        fecha: "31/03/2022",
        link: "images/Merendando.jpg"
    },
    {
        titulo: "Siempre igual eh",
        fecha: "04/04/2022",
        link: "images/En-la-camita.jpg"
    },
    {
        titulo: "Hay muchas como esta",
        fecha: "08/04/2022",
        link: "images/De-vuelta-en-la-cama.jpg"
    },
    {
        titulo: "Vos",
        fecha: "25/05/2022",
        link: "images/Vos.jpg"
    },
    {
        titulo: "Yo",
        fecha: "25/05/2022",
        link: "images/Yo.jpg"
    },
    {
        titulo: "Merendando pero no me gustó",
        fecha: "05/08/2022",
        link: "images/merendando-feo.jpg"
    },
    {
        titulo: "Cuando estabas con muletas",
        fecha: "05/08/2022",
        link: "images/falta-un-poco.jpg"
    },
    {
        titulo: "Ahora se rompio el inodoro",
        fecha: "12/08/2022",
        link: "images/Ahora-el-inodoro.jpeg"
    },
    {
        titulo: "Tu pie",
        fecha: "27/08/2022",
        link: "images/esta-perfecto.jpg"
    },
    {
        titulo: "Este dia dolió y mucho",
        fecha: "01/09/2022",
        link: "images/No-verga.jpeg"
    },
    {
        titulo: "Merienda en las vacas",
        fecha: "07/10/2022",
        link: "images/Mmm-rico.jpg"
    },
    {
        titulo: "Con el gato jej",
        fecha: "07/10/2022",
        link: "images/Con-un-gato.jpg"
    },
    {
        titulo: "Primera noche",
        fecha: "07/10/2022",
        link: "images/Primera-noche.jpg"
    },
    {
        titulo: "Estabas muy linda",
        fecha: "07/10/2022",
        link: "images/Muy-preciosa.jpg"
    },
    {
        titulo: "Había un lindo fondo",
        fecha: "09/10/2022",
        link: "images/fondo-vacaciones-2.jpg"
    },
    {
        titulo: "Verdad que si?",
        fecha: "09/10/2022",
        link: "images/fondo-vacaciones.jpg"
    },
    {
        titulo: "Aquí estabas borracha",
        fecha: "10/10/2022",
        link: "images/Borracha.jpg"
    },
    {
        titulo: "Volvimos!",
        fecha: "12/10/2022",
        link: "images/Vuelta-en-Bs-As.jpg"
    },
    {
        titulo: "Había que probar las nuevas burger",
        fecha: "31/10/2022",
        link: "images/linda-en-el-mac.jpg"
    },
    {
        titulo: "Tu primera salida sola",
        fecha: "12/11/2022",
        link: "images/Salida-sola.jpg"
    },
    {
        titulo: "En la ofi",
        fecha: "17/11/2022",
        link: "images/Trabajando-juntos2.jpg"
    },
    {
        titulo: "Trabajando juntos",
        fecha: "17/11/2022",
        link: "images/Trabajando-juntos.jpg"
    },
    {
        titulo: "En compañía operada",
        fecha: "Las siguientes no tengo la fecha",
        link: "images/en-compañia.jpg"
    },
    {
        titulo: "Primera bañera juntos",
        fecha: "En Febrero, pero no se cuando",
        link: "images/Primera-bañera-juntos.jpg"
    },
    {
        titulo: "A operarse!",
        fecha: "Ya no se que poner aca",
        link: "images/En-la-operacion.jpg"
    },
    {
        titulo: "Uyy se vienen los cortes",
        fecha: "Y si le pregunto cuando fue?",
        link: "images/Ya-en-camilla.jpg"
    },
    {
        titulo: "Operada con puntos",
        fecha: "Na esta bien así",
        link: "images/Operada.jpg"
    },
    {
        titulo: "Cuando fuimos a Arjona",
        fecha: "Fue hace poco pero no recuerdo",
        link: "images/Arjona.webp"
    },
    {
        titulo: "Rehabilitandonos",
        fecha: "Despues de la operación fue",
        link: "images/Rehabilitandose.jpg"
    },
    {
        titulo: "Tintura nueva, vida nueva",
        fecha: "Este dia fuiste a ver a tu madrina",
        link: "images/Se-tiñio.jpg"
    },
    {
        titulo: "Epoca de Be Real",
        fecha: "Uff ni idea esto eh",
        link: "images/Be-real.jpg"
    },
    {
        titulo: "Que divertido que fue dios",
        fecha: "En el viaje",
        link: "images/Viaje-divertido.jpg"
    },
    {
        titulo: "Comimos en una parrilla",
        fecha: "En el viaje",
        link: "images/Que-buena-parrilla.jpg"
    },
    {
        titulo: "Facheritos",
        fecha: "En el viaje",
        link: "images/Nos-de-viaje.jpg"
    },
    {
        titulo: "Esta es epica",
        fecha: "No se donde ni cuando",
        link: "images/Foton.jpg"
    },
    {
        titulo: "Estuvo re bueno NDN",
        fecha: "Fue hace poco",
        link: "images/NDN.jpg"
    },
    {
        titulo: "Nuevas uñas pa",
        fecha: "La ultima que tengo",
        link: "images/Esas-uñas-mamita.jpg"
    },
]


const menu = document.querySelector(".toggle");
const linksConteiner = document.querySelector(".nav-conteiner");
const button = document.querySelector(".menu-button");
const date = document.getElementById("date");
const links = document.querySelector(".links");
const nav = document.getElementById("home");
const backToTop = document.querySelector(".back-top");
const navLinks = document.querySelectorAll(".scroll-link");
const explore = document.getElementById("explore");
const img = document.querySelector(".back-img");
const recuadro = document.querySelector(".recuadro");
const preNextBtn = document.querySelectorAll(".btn");
const restart = document.querySelector(".btn-restart");
const preloader = document.querySelector(".preloader-conteiner")

menu.addEventListener("click", function(){
    const conteinerHeight = linksConteiner.getBoundingClientRect().height;
    const listHeight = links.getBoundingClientRect().height;
    if(window.innerWidth <= 1000){
        if(conteinerHeight === 0){
            linksConteiner.style.height = `${listHeight}px`;
        } else {
            linksConteiner.style.height = `0px`;
        }

        button.classList.toggle("menu-buttonx");
    }
})

window.addEventListener("scroll", function(){
    const scrollHeight = window.scrollY;
    const navHeigth = nav.getBoundingClientRect().height;
    const position = nav.offsetHeight - navHeigth;
    if (scrollHeight > navHeigth){
        nav.classList.add("fixed-nav");
    } else {
        nav.classList.remove("fixed-nav");
    }
    if (scrollHeight > position + 200){
        backToTop.classList.add("fixed-back-to-top");
    } else {
        backToTop.classList.remove("fixed-back-to-top");
    }
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeigth = nav.getBoundingClientRect().height; 
        let position = element.offsetTop - navHeigth;

        if(!nav.classList.contains("fixed-nav")){
            position -= navHeigth;  
        }

        window.scrollTo({
            left: 0,
            top: position,
        })

        if(window.innerWidth <= 1000){
        linksConteiner.style.height = `0px`;
        button.classList.remove("menu-buttonx");
        }
    })
})


window.addEventListener("DOMContentLoaded", function(){
    displayImages(fotos);
})

const displayImages = function(fotos){
    const cadaFoto = fotos.map(function(foto){
        return `<div class="slide">
        <h2 class="slide-text">${foto.titulo}</h2>
        <img src=${foto.link} alt="foto" class="img">
        <h3 class="slide-text">${foto.fecha}</h3>
        </div>`
    }).join("");
    recuadro.innerHTML = cadaFoto;

    const fotoStyle = document.querySelectorAll(".slide");
    fotoStyle.forEach(function(slide, index){
        slide.style.left = `${index * 100}%`
    })
}

let counter = 0;

preNextBtn.forEach(function(btn){
    btn.addEventListener("click", function(e){
        if(e.currentTarget.classList.contains("right")){
            if(counter < fotos.length - 1){
                counter++;
                carrusel();
            } else {
                counter = 0;
                carrusel();
            }
        } else {
            if(counter > 0){
                counter--;
                carrusel();
            } else {
                counter = fotos.length - 1;
                carrusel();
            }
        }
    })
})

restart.addEventListener("click", function(){
    counter = 0;
    carrusel();
})

function carrusel(){
    const fotoStyle = document.querySelectorAll(".slide");
    fotoStyle.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
})


var root = document.querySelector(':root');
const rosaOscuro = "#E97777";
const rosaClaro = "#FF9F9F";
const beigeOscuro = "#FCDDB0";
const beigeClaro = "#FFFAD7";    
const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", function(){
    if(!changeColor.classList.contains("back")){
        root.style.setProperty('--clr-text', beigeClaro);
        root.style.setProperty('--clr-btn', beigeOscuro);
        root.style.setProperty('--clr-text-soft', rosaClaro);
        root.style.setProperty('--clr-back', rosaOscuro);
        changeColor.classList.add("back");
    } else {
        root.style.setProperty('--clr-text', rosaOscuro);
        root.style.setProperty('--clr-btn', rosaClaro);
        root.style.setProperty('--clr-text-soft', beigeOscuro);
        root.style.setProperty('--clr-back', beigeClaro);
        changeColor.classList.remove("back");
    }
})

