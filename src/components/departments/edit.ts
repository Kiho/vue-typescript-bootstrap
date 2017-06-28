import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';

import { EntityType } from '../../model';
import Service from '../../services/appService';

import { PanelComponent } from '../../common/panel';
import { TextFieldComponent } from '../../common/text-field';

const service = new Service();
const entityType: EntityType = 'department';

@Component({
    template: require('./edit.html'),
    components: {
        'panel': PanelComponent,
        'text-field': TextFieldComponent,
    }
})
export class DepartmentEditComponent extends Vue {
    entityType = entityType;
    id = 0;
    loading = false;

    data () {
        return { 
            item: {},
            header: {
                title: 'Department',
                icon: 'home',
                hidden: false,
                viewPath: '<small><span class="c-white">Department</span></small>'
            },
            departmentList: [],
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