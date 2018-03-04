// import '../main';
import { AppComponent } from '../app/app.component';

import { Version } from '@microsoft/sp-core-library';

import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// @ts-ignore
import { AppModuleNgFactory } from '../app/app.module.ngfactory';

import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { debug } from 'util';

export default class NgHelloWorldWebPartWebPart extends BaseClientSideWebPart<AppComponent> {
    constructor() {
        super();
    }
    ngElement: HTMLElement;
    public render(): void {
        this.domElement.innerHTML = `<app-root description='` + this.properties.description + `'></app-root>`;
        platformBrowserDynamic().bootstrapModuleFactory(
            AppModuleNgFactory, { ngZone: 'noop' })
            .catch(
                err => console.log(err));
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: 'Description'
                    },
                    groups: [
                        {
                            groupName: 'Options',
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: 'Description',
                                    value: 'Sahil'
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
