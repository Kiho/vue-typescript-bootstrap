import Vue from 'vue';
import Component from 'vue-class-component';
import { PanelComponent } from '../../common/panel';
import { PageService } from '../../services/appService';

const service = new PageService();

@Component({
    template: require('./home.html'),
    components: {
        'panel': PanelComponent
    }
})
export class HomeComponent extends Vue {

    package: string = 'vue-webpack-typescript';
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';
    mode: string = process.env.ENV;

    data() {
        return { 
            header: {
                title: 'Home',
                icon: 'home',
                hidden: false,
                viewPath: '<small><span class="c-white">Home</span></small>'
            },
        };
    }

    mounted() {
        console.log('Departments', this.$el.textContent); // I'm text inside the component.
        service.initHeader(this);  
    }
}
