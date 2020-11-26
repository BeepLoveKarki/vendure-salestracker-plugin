import { FormControl } from '@angular/forms';
import { SharedModule, CustomFieldControl, 
  CustomFieldConfigType, registerCustomFieldComponent } from '@vendure/admin-ui/core';

@Component({
  template: `
    <input
        type="range"
        [min]="customFieldConfig.intMin"
        [max]="customFieldConfig.intMax"
        [formControl]="formControl" />
    {{ formControl.value }}
  `,
})

export class UnitTypeControl implements CustomFieldControl {
  customFieldConfig: CustomFieldConfigType;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [UnitTypeControl],
  providers: [
    registerCustomFieldComponent('ProductVariant', 'UnitType', UnitTypeControl),
  ]
})


export class UnitTypeControlModule { }