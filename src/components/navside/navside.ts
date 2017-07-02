import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';
import { Link } from './link';
import { Logger } from '../../util/log';

@Component({
    template: require('./navside.html')
})
export class NavSideComponent extends Vue {

    protected logger: Logger;

    inverted: boolean = true; // default value

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    links: Link[] = [
        new Link('Home', '/', 'home'),
        new Link('Departments', '/departments', 'sitemap'),
        new Link('Employees', '/employees', 'users'),
        new Link('About', '/about', 'leaf')
    ];

    @watch('$route.path')
    pathChanged() {
        this.logger.info('Changed current path to: ' + this.$route.path);
        console.log(this.$route);
    }

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info(this.object.default));
    }
}
