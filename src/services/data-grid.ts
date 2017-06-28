import Vue from 'vue';
import { server } from '../api';
import toastr from '../common/toastr';

export default {
    ref: null,
    data: function (data) {      
        return Object.assign({
            tableInstance: undefined,
            dataSource: [],
        }, data);
    },
    oncreate: function (component) { // life-cycle hook 
        this.ref = component.$refs['table'];
        component.$nextTick(() => {
            this.loadData(component);
            component.initTable(); 
        });
    
    },
    ondestroy: function () {
        this.getTable().remove();
    },
    getTable () {
        return $(this.ref);
    },
    initTable(component: Vue, options) {
        const table = this.getTable().DataTable(options);
        component.$data['tableInstance'] = table;
        return table;
    },
    updateTable: function (component: Vue, data) {
        const table = component.$data['tableInstance'];
        if (table && data) {
            table.clear();
            table.rows.add(data);
            table.draw();
            toastr.info(`Retrieved data from ${component.$data['url']}`, 'Info');
        }
    },
    loadData: function (component: Vue) {   
        const url = component.$data['url'];
        server.doFetch(url).then(json => {
            component.$set(component, 'dataSource', json);
        });
    }
};