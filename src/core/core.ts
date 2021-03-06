import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyForm } from './components/formly.form';
import { FormlyFieldConfig } from './components/formly.field.config';
import { FormlyField } from './components/formly.field';
import { FormlyAttributes } from './components/formly.attributes';
import { FormlyConfig, ConfigOption, FORMLY_CONFIG_TOKEN } from './services/formly.config';
import { FormlyValidationMessages } from './services/formly.validation-messages';
import { FormlyPubSub, FormlyEventEmitter } from './services/formly.event.emitter';
import { FormlyFieldVisibilityDelegate } from './services/formly.field.delegates';
export { SingleFocusDispatcher } from './services/formly.single.focus.dispatcher'
import { FormlyUtils } from './services/formly.utils';
import { Field } from './templates/field';
import { FieldType } from './templates/field.type';
import { FieldWrapper } from './templates/field.wrapper';
import { FormlyGroup } from './components/formly.group';

export {
  FormlyField,
  FormlyFieldConfig,
  FormlyForm,
  FormlyConfig,
  FormlyPubSub,
  FormlyValidationMessages,
  FormlyFieldVisibilityDelegate,
  FormlyEventEmitter,

  Field,
  FieldType,
  FieldWrapper,
};

const FORMLY_DIRECTIVES = [FormlyForm, FormlyField, FormlyAttributes, FormlyGroup];

@NgModule({
  declarations: FORMLY_DIRECTIVES,
  entryComponents: [FormlyGroup],
  exports: FORMLY_DIRECTIVES,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class FormlyModule {
  static forRoot(config: ConfigOption = {}): ModuleWithProviders {
    return {
      ngModule: FormlyModule,
      providers: [
        FormlyConfig,
        FormlyPubSub,
        FormlyValidationMessages,
        FormlyUtils,
        { provide: FORMLY_CONFIG_TOKEN, useValue: config, multi: true },
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: config, multi: true },
      ],
    };
  }
}
