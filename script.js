

class SCROLL {
    constructor(set) {
        if(typeof set.el === 'string') {
            this.el = document.querySelector(set.el);
        }else if(set.el instanceof HTMLElement) {
            this.el = set.el;
        }
        this.top = set.top;
        this.el.style.position = 'fixed';
        this.unit = set.unit;
        this.el.style.top = this.scrollNumber() + 'px';
        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }
    scroll() {
        // pageYOffset - берет расстояние от верха до нашего скрола
        this.window = this.scrollNumber();
        if(this.window - pageYOffset > 0) {
            this.el.style.top = this.window - pageYOffset + 'px';
        }else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if(this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        }else if(this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height,top) {
        return (height * top) / 100;
    }
}

let scroll = new SCROLL({
    el: '.header__nav',
    top: 100,
    unit: '%'
});



let nav = document.querySelector('.header__content');

class HOVER{
    constructor(element) {
        this.el = element;
        this.el.addEventListener('mouseover', () => this.move());
    }
    move() {
        this.el.style.position = 'absolute';
        this.el.style.top = this.random(0, window.innerHeight - this.el.clientHeight * 2) + 'px';
        this.el.style.left = this.random(0, window.innerWidth - this.el.clientWidth * 2) + 'px';
    }
    random(min,max) {
        return Math.floor(Math.random() * (max + 1 + min) - min);
    }
}


let hover = new HOVER(nav);