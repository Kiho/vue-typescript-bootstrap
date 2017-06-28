import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../util/log';
import { PageService } from '../../services/appService';

const service = new PageService();
@Component({
    template: require('./about.html')
})
export class AboutComponent extends Vue {

    protected logger: Logger;
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';

    data() {
        return { 
            header: {
                title: 'About',
                icon: 'leaf',
                hidden: false,
                viewPath: '<small><span class="c-white">About</span></small>'
            },
        };
    }

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));

        service.initHeader(this);  
    }
}
