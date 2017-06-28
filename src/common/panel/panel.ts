import Vue from 'vue';
// import { Component, watch } from 'vue-property-decorator';
import { Logger } from '../../util/log';
import Component from 'vue-class-component';

@Component({
    template: require('./panel.html'),
    props: ['filled', 'title', 'toolbar']
})
export class PanelComponent extends Vue {
    protected logger: Logger;

    package: string = 'vue-webpack-typescript';
    
    data () {
        return {
            loader: '',
            loading: false,
            col: 'lg-12',
            tools: false,
            description: '',
        };
    }
}