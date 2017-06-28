import Vue from 'vue';
import { Logger } from '../../util/log';
import Component from 'vue-class-component';

let Events;

@Component({
    template: require('./view-header.html'),
    // props: ['viewPath', 'title', 'icon']
})
export class ViewHeaderComponent extends Vue {
    data () {
        return {
            loader: '',
            loading: false,
            col: 'lg-12',
            header: {
                title: '',
                viewPath: '',
                icon: '',
                description: '',
            },
            hidden: false,
        };
    }
    mounted() {
        Events = this.$root.$data['events'];
        Events.$on('updateViewHeader', (data) => {
            console.log('ViewHeader - I heard an event.', data);
            this.$set(this, 'header', data ? data : { } );
            // this.$data['title'] = data ? data.title : '';
            // this.$set(this, 'title', (data ? data.title : ''));
            // this.$set(this, 'icon', (data ? data.icon : ''));
            // this.$set(this, 'viewPath', (data ? data.viewPath : ''));
            // this['title'] = data ? data.title : '';
        });
    }
}
    // export default {
    //     data () {
    //         return {
    //             col: 'lg-12',
    //             title: '',
    //             viewPath: '',
    //             icon: '',
    //             description: '',
    //             hidden: false,
    //         }
    //     },
    //     oncreate() {

    //     },
    //     methods: {
    //         handleUpdate (data) {                
    //             // if (!data){
    //             //     this.set({hidden: false});
    //             // }                
    //             // else {
    //             //     data.hidden = true;
    //             //     this.set(data);
    //             // }
    //             // console.log('handleUpdate', data);
    //         }
    //     }
    // }