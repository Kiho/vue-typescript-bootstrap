import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';

import { EntityType } from '../../model';
import Service from '../../services/appService';

import { PanelComponent } from '../../common/panel';
import { TextFieldComponent } from '../../common/text-field';

const service = new Service();
const entityType: EntityType = 'company';

@Component({
    template: require('./edit.html'),
    components: {
        'panel': PanelComponent,
        'text-field': TextFieldComponent,
    }
})
export class CompanyEditComponent extends Vue {
    entityType = entityType;
    id = 0;
    loading = false;

    data () {
        return { 
            item: {},
            header: {
                title: 'Company',
                icon: 'home',
                hidden: false,
                viewPath: '<small><span class="c-white">Company</span></small>'
            },
            companyList: [],
            employeeList: []
        };
    }

    mounted() {
        service.init(this);
        service.getById(this);
    }

    handleGoBack(e) {
        service.goBack(e, this);
    }

    handleSubmit(e) {
        service.submit(e, this);
    }
}