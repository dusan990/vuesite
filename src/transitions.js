gsap.registerPlugin(SplitText);

gsap.defaults({
    duration: 1,
    ease: 'power3.inOut',
});

const enterTextAnimation = text => {
    const tl = gsap.timeline();

    tl.fromTo(
        text,
        {
            yPercent: '100',
            opacity: 0,
        },
        {
            yPercent: '0',
            opacity: 1,
            stagger: 0.014,
        }
    );

    return tl;
};

const leaveTextAnimation = text => {
    const tl = gsap.timeline();

    tl.to(text, {
        yPercent: '-100',
        opacity: 0,
        stagger: 0.014,
    });

    return tl;
};

const lineSplit = lines => {
    const line = new SplitText(lines, {
        type: 'lines, words, chars',
        linesClass: 'split-line',
    });

    return line;
};

const wipeY = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.to(el, {
        scaleY: value,
        transformOrigin: origin,
        force3D: true,
        ease: 'power3.inOut',
    });

    return tl;
};

const wipeFromY = (el, origin, value) => {
    const tl = gsap.timeline();

    tl.from(el, {
        scaleY: value,
        transformOrigin: origin,
        force3D: true,
    });

    return tl;
};

const skewOutUp = element => {
    const tl = gsap.timeline();

    tl.to(element, {
        y: '-60',
        opacity: 0,
        skewY: 2,
    });

    return tl;
};

const skewInUp = element => {
    const tl = gsap.timeline();

    tl.from(element, {
        y: '60',
        opacity: 0,
        skewY: 2,
    });

    return tl;
};

const scaleOut = el => {
    const tl = gsap.timeline();

    tl.from(el, {
        scale: 1.2,
        y: 80,
        duration: 1.2,
        ease: 'power3.inOut',
    });

    return tl;
};


const product = Vue.component('product', {
    template: '#product',
    props: ['title', 'image']
})

const mojarico = Vue.component('mojarico', {
    template: '#mojarico',
    components: {
        product
    }
})

const broghue = Vue.component('broghue', {
    template: '#broghue',
    components: {
        product
    }
})

const bakino = Vue.component('bakino', {
    template: '#bakino',
    components: {
        product
    }
})

Vue.component('the-menu', {
    template: '#menu',
    props: {
        links: Array
    }
})


const routes = [
    {
        path: '/',
        redirect: '/broghue'
    },
    {
        name: 'Broghue',
        path: '/broghue',
        component: broghue
    },
    {
        name: 'Mojarico',
        path: '/mojarico',
        component: mojarico
    },
    {
        name: 'Bakino',
        path: '/bakino',
        component: bakino
    }
];

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  data() {
      return {
          routes
      }
  },
    methods: {
        leave(el, done) {
            const heroTitle = lineSplit('.hero__title');
            const heroText = lineSplit('.hero__text');

            const master = gsap.timeline({
                onStart: () => {
                    document.body.classList.add('body--overflow');
                },
                onComplete: () => {
                    done();
                },
            });

            master
                .add(leaveTextAnimation(heroTitle.chars))
                .add(skewOutUp(heroText.lines), '<')
                .add(skewOutUp('.hero .btn'), '<')
                .add(wipeY('.hero__overlay', 'center bottom', 1), '-=1.3');
        },
        enter(el, done) {
            const heroTitle = lineSplit('.hero__title');
            const heroText = lineSplit('.hero__text');

            const master = gsap.timeline({
                onComplete: () => {
                    document.body.classList.remove('body--overflow');
                    done();
                },
            });

            master
                .add(enterTextAnimation(heroTitle.chars))
                .add(skewInUp(heroText.lines), '-=0.95')
                .add(skewInUp('.hero .btn'), '<')
                .add(wipeFromY('.hero__overlay', 'center top', 1), '-=1.2')
                .add(scaleOut('.hero__right img'), '<');
        },
    }
}).$mount('#app')