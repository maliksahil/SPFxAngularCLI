// import '../main';
import { AppComponent } from '../../app/app.component';

import { Version } from '@microsoft/sp-core-library';

import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// @ts-ignore
import { AppModuleNgFactory } from '../../app/app.module.ngfactory';

import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import { ListingComponent } from '../../app/listing/listing.component';


export default class NgHelloWorldWebPartWebPart extends BaseClientSideWebPart<ListingComponent> {
    constructor() {
        super();
    }
    ngElement: HTMLElement;
    public render(): void {
        this.domElement.innerHTML = `<app-listing></app-listing>`;
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
