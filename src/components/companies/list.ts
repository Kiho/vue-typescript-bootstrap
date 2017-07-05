import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';
import { Logger } from '../../util/log';

import { server } from '../../api';
import { EntityType } from '../../model';
import * as utils from '../../utils';
import Service from '../../services/appService';
import { PanelComponent } from '../../common/panel';

const service = new Service();
const entityType: EntityType = 'company';

@Component({
    template: require('./list.html'),
    components: {
        'panel': PanelComponent,
    }
})
export class CompaniesComponent extends Vue {

    name: 'company-index';

    protected logger: Logger;

    entityType = entityType;

    id = 0;

    loading = false;

    object: { default: string } = { default: 'Default object property!' }; // objects as default values don't need to be wrapped into functions

    data() {
        return { 
            list: [],
            entityType: entityType,
            header: {
                title: 'Companies',
                icon: 'sitemap',
                hidden: false,
                viewPath: '<small><span class="c-white">Companies</span></small>'
            },
        };
    }

    mounted() {
        console.log('Companies', this.$el.textContent); // I'm text inside the component.
        service.init(this);
        service.getList(this);    
    }
}
