import Vue from 'vue';
import Component from 'vue-class-component';
import { makeUniqueId } from '../../utils';

@Component({
    template: require('./text-field.html'),
    props: ['type', 'placeholder', 'label', 'value', 'required', 'readOnly']
})
export class TextFieldComponent extends Vue {
    data() {
        return { 
            uuid: makeUniqueId(),
            pattern: '',
            validate: null,
            validators: null,
        };
    }
}