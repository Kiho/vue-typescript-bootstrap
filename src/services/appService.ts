import { server } from '../api';
import { EntityType, createNew } from '../model';
import Vue from 'vue';

export const lookupTypes: EntityType[] = ['employee', 'department'];

const loaded = (intervalTime, start, end, complete: () => void) => {
    if (end - start < intervalTime) {
        setTimeout(complete, intervalTime);
    } else {
        complete();
    }       
};

export interface IApp extends Vue {
    entityType: EntityType;
    id: number;
    $Progress?: any;
}

export class PageService {
    initHeader(app: Vue) {
        const data = app.$data['header'];
        const Events: Vue = app.$root.$data['events'];
        Events.$emit('updateViewHeader', data);		
    }
}

export default class AppService extends PageService {
    validator;

    init(app: IApp) {
        // app.entityType = app.get('entityType');
        // app.id = app.get('id');
        super.initHeader(app);
    } 

    async serverAction(app: IApp, action, postAction) {
        let start = Date.now();
        let data;

        const startLoading = () => {
            // app.set({loading: false});
            app.$Progress.start();
        };
        const completeLoading = () => {
            // app.set({loading: false});
            app.$Progress.finish();
        };
        
        try {
            startLoading();
            data = await action(app.entityType);            
        } catch (e) {
            alert('ERROR: ' + e.message);
        }
        
        let end = Date.now();
        if (data) {
            postAction(data);
        }

        const intervalTime = 500;
        loaded(intervalTime, start, end, completeLoading);
        return data;
    }

    async getLookups(app: IApp, entities: EntityType[], predicate?: (EntityType) => boolean) {
        const loadAll = [];
        entities.forEach(entity => {
            loadAll.push(
                server.getList(entity).then((x) => {
                    const listName = entity + 'List';
                    app.$set(app, listName, x);
                    // cache.data[entity] = x;
                    console.log(listName + ' from server', x);
                })
            );                      
        });
        return Promise.all(loadAll);
    }

    async getList(app: IApp) {
        const action = () => server.getList(app.entityType);
        const postAction = (list) => app.$set(app, 'list', list);
        this.serverAction(app, action, postAction);
    }

    async getById(app: IApp) {
        const id = parseInt(app.$route.params.id); 
        if (id === 0) {
            this.createNew(app); return;
        }
        app.id = id;
        const action = () => server.getById(app.entityType, app.id);
        const postAction = (item) => app.$set(app, 'item', item);
        this.serverAction(app, action, postAction);
    }

    async submit(event, app: IApp) {
        // prevent the page from reloading
        event.preventDefault();
        // const form = app.refs.form;
        const data = app.$data['item'];

        // const validatorResult = validator.checkAll($(form));
        // if (!validatorResult.valid) {
        //     return;
        // }

        console.log('item', data);
        const action = () => server.post(app.entityType, data);
        const postAction = (r) => {
            if (r.id > 0) {
                app.id = r.id;
                this.getById(app);
            }
        };
        this.serverAction(app, action, postAction);
    } 

    goBack(event, app: IApp) {
        // prevent the page from reloading
        event.preventDefault();
        app.$router.go(-1);
    }

    createNew(app: IApp) {        
        app.$set(app, 'item', createNew(app.entityType));
    }
}
