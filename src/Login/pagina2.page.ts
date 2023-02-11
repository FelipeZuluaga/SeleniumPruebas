import { PageContext, Page } from "@testing/wdio-page-objects";

const select ={
    wrapper:' .orangehrm-dashboard-grid',
   
}
@PageContext({
    path: '/web/index.php/dashboard/index',
    wrapper: '#app',
})
export class Pagina2Page extends Page {

    posicionGlobal(){
        $(select.wrapper).waitForDisplayed({timeout: 60000});
        $(select.wrapper).isExisting();
        $(select.wrapper).click();
    }
}