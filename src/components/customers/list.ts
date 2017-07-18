import Vue from 'vue';
import { Component, watch } from 'vue-property-decorator';
import { Logger } from '../../util/log';

import { server } from '../../api';
import { EntityType } from '../../model';
import * as utils from '../../utils';
import Service from '../../services/appService';
import { PanelComponent } from '../../common/panel';
import DataTableComponent from '../../common/DataTable.vue';

const service = new Service();
const entityType: EntityType = 'customer';

@Component({
    template: require('./list.html'),
    components: {
        'datatable': DataTableComponent,
        'panel': PanelComponent,
    }
})
export class CustomersComponent extends Vue {

    name: 'customer-index';

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
                title: 'Customers',
                icon: 'users',
                hidden: false,
                viewPath: '<small><span class="c-white">Customers</span></small>'
            },
            columndata: [ // Array of objects
                {
                    label: 'ID', // Column name
                    field: 'id', // Field name from row
                    numeric: true, // Affects sorting
                    html: false, // Escapes output if false.
                }, {
                    label: 'First Name', // Column name
                    field: 'fname', // Field name from row
                    numeric: false, // Affects sorting
                    html: false, // Escapes output if false.
                }, {
                    label: 'Last Name',
                    field: 'lname',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Age',
                    field: 'age',
                    numeric: true,
                    html: false,
                }, {
                    label: 'State',
                    field: 'state',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Action',
                    field: function (data) {
                        return '<a href="#customers/' + data.id + '" class="btn btn-default btn-xs">Edit</a>';
                    },
                    numeric: false,
                    html: true,
                    sortable: false
                }
            ]
        };
    }

    mounted() {
        console.log('Customers', this.$el.textContent); // I'm text inside the component.
        service.init(this);
        service.getList(this);    
    }
}
