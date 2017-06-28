import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { makeUniqueId } from '../../utils';

@Component({
    template: require('./select-field.html'),
})
export class SelectFieldComponent extends Vue {
    @Prop() optionList: Array<any>;
    @Prop() label: string;
    @Prop() value: number;
    @Prop() required: boolean;
    @Prop({ default: (x) => x.name})
    getOptionName: Function;

    data() {
        return { 
            uuid: makeUniqueId(),
        };
    }
}