import { LightningElement } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

export default class AppLauncher extends NavigationMixin(LightningElement) {
yourorgurl = 'https://yourorg.salesforce.com';
salesimg = this.yourorgurl + '/logos/Salesforce/SalesCloud/logo.png?v=1';
serviceimg = this.yourorgurl + '/logos/Salesforce/ServiceCloud/logo.png?v=1';
marketingimg = this.yourorgurl + '/logos/Salesforce/MarketingCloud/logo.png?v=1';
codebuilderimg =  this.yourorgurl + '/file-asset/CodeBuilder__cbIcon2Color?v=1';
customimg =  this.yourorgurl + '/file-asset/channels4_profile?v=1';

salesapp = this.yourorgurl + '/lightning/app/' + 'YOUR_SALES_APP_ID';
serviceapp = this.yourorgurl + '/lightning/app/' + 'YOUR_SERVICE_APP_ID';
marketingapp = this.yourorgurl + '/lightning/app/' + 'YOUR_MARKETING_APP_ID';
codebuilerapp = this.yourorgurl + '/lightning/app/' + 'YOUR_CODEBUILDER_APP_ID';
customapp = this.yourorgurl + '/lightning/app/' + 'YOUR_CUSTOM_APP_ID';

    sales(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.salesapp
            }
          });
         }


       services(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.serviceapp
            }
          });
       }  

       market(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.marketingapp
            }
          });
       }  

       codebuilder(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.codebuilerapp
            }
          });
       }  
       
       saga(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: this.customapp
            }
          });
       }  
    }