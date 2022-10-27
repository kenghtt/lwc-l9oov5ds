import { LightningElement } from 'lwc';

export default class Dropdown extends LightningElement {
    value = 'inProgress';

    get options() {
        return [
            { label: 'Report Only – Chat', value: 'reportOnlyChat' },
            { label: 'Verbal Education Only', value: 'verbalEducationOnly' },
            { label: 'Verbal Education and Report Provided', value: 'verbalEducationAndReportProvided' },
            { label: 'Warm Transferred', value: 'warmTransferred' },

        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
