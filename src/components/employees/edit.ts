import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';

import { EntityType } from '../../model';
import Service from '../../services/appService';

import { PanelComponent } from '../../common/panel';
import { TextFieldComponent } from '../../common/text-field';
import { SelectFieldComponent } from '../../common/select-field';

const service = new Service();
const entityType: EntityType = 'employee';

@Component({
    template: require('./edit.html'),
    components: {
        'panel': PanelComponent,
        'text-field': TextFieldComponent,
        'select-field': SelectFieldComponent
    }
})
export class EmployeeEditComponent extends Vue {
    entityType = entityType;
    id = 0;
    loading = false;

    data () {
        return { 
            item: {},
            header: {
                title: 'Employee',
                icon: 'home',
                hidden: false,
                viewPath: '<small><span class="c-white">Employee</span></small>'
            },
            employeeList: [],
            departmentList: []
        };
    }

    mounted() {
        service.initHeader(this);
        service.getLookups(this, ['department'])
                .then(() => {
                    service.getById(this);
                });
    }

    handleGoBack(e) {
        service.goBack(e, this);
    }

    handleSubmit(e) {
        service.submit(e, this);
    }

    getOptionName(x) { 
        console.log('logged from owner function!');
        return x.name;
    }
}