import Vue from 'vue';
import Component from 'vue-class-component';
import {Logger} from '../../util/log';
import { PageService } from '../../services/appService';
import DataTableComponent from '../../common/DataTable.vue';

const service = new PageService();
@Component({
    template: require('./table.html'),
        components: {
        'datatable': DataTableComponent,
    }
})
export class TableComponent extends Vue {

    protected logger: Logger;
    repo: string = 'https://github.com/ducksoupdev/vue-webpack-typescript';

    data() {
        return { 
            header: {
                title: 'Table',
                icon: 'leaf',
                hidden: false,
                viewPath: '<small><span class="c-white">Table</span></small>'
            },
            rowdata: [{
                "fname": "Gale",
                "lname": "Mcmyne",
                "age": 16,
                "state": "RI",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Tighe",
                "lname": "Walls",
                "age": 43,
                "state": "AL",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Anuj",
                "lname": "Wittcop",
                "age": 16,
                "state": "MO",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Elisha",
                "lname": "Mahan",
                "age": 28,
                "state": "MA",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Sutman",
                "lname": "Kiab",
                "age": 18,
                "state": "ME",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Wazir",
                "lname": "Odonoghue",
                "age": 27,
                "state": "ND",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Renardo",
                "lname": "Schuessler",
                "age": 5,
                "state": "OK",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Colleen",
                "lname": "Schotuen",
                "age": 33,
                "state": "DE",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Natalia",
                "lname": "Sacks",
                "age": 24,
                "state": "FL",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Kamaniee",
                "lname": "Knaus",
                "age": 11,
                "state": "ID",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Deena",
                "lname": "Downing",
                "age": 39,
                "state": "NM",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Gueorgui",
                "lname": "Downing",
                "age": 22,
                "state": "LA",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Toya",
                "lname": "Wallace",
                "age": 19,
                "state": "MD",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Deborah",
                "lname": "Morrison",
                "age": 14,
                "state": "VT",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Nerissa",
                "lname": "Wade",
                "age": 7,
                "state": "DE",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Glenn",
                "lname": "Bommi",
                "age": 8,
                "state": "MO",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Kate",
                "lname": "Azcunaga",
                "age": 25,
                "state": "ME",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Jesse",
                "lname": "Ingham",
                "age": 50,
                "state": "OK",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Gateri",
                "lname": "Sergent",
                "age": 50,
                "state": "MA",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }, {
                "fname": "Marian",
                "lname": "Malmfeldt",
                "age": 50,
                "state": "DC",
                "button": "<button class='waves-effect waves-light btn nopadding'>Action</button>"
            }],
            columndata: [ // Array of objects
                {
                    label: 'fname', // Column name
                    field: 'fname', // Field name from row
                    numeric: false, // Affects sorting
                    html: false, // Escapes output if false.
                }, {
                    label: 'lname',
                    field: 'lname',
                    numeric: false,
                    html: false,
                }, {
                    label: 'age',
                    field: 'age',
                    numeric: true,
                    html: false,
                }, {
                    label: 'state',
                    field: 'state',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Action',
                    field: 'button',
                    numeric: false,
                    html: true,
                }
            ]
        };
    }

    mounted() {
        if (!this.logger) this.logger = new Logger();
        this.$nextTick(() => this.logger.info('about is ready!'));

        service.initHeader(this);  
    }
}
