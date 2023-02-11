import { Given, Then, When, World } from "@testing/cucumber-runner";
import { pageProvider } from "@testing/wdio-page-objects";
import { expect } from "chai";
import { TableDefinition } from "cucumber";
import { LoginPage } from "./loginOrange.page";
import { Pagina2Page } from "./pagina2.page";

export class LoginSteps {

    get LoginPage(){
        return pageProvider.wait(LoginPage);
    }
    get Pagina2Page(){
        return pageProvider.wait(Pagina2Page);
    }

    @Given(/^que como cliente visito OrangeHRM$/)
    welco(){
        pageProvider.go(LoginPage);
        this.LoginPage.welcome();
    }
    @When(/^quiero validar los siguiente:$/)
    valid(table: TableDefinition){
        const rows = table.hashes();
        rows.forEach(({item}) => {
            this.LoginPage.valid({item});
        })
    }
    @Then(/^validacion exitosa.$/)
    exitos(){
        this.LoginPage.exit();
    }
    /*------ */
    @When(/^ingreso user y Password correctamente$/)
    creden(){
        const user =  "Admin";
        const pass = "admin123";
        this.LoginPage.Login(user,pass);
    }
    @Then(/^validamos la posición global.$/)
    valids(){
        this.Pagina2Page.posicionGlobal();
    }
    /*------Incorrecto */
    @When(/^ingreso user y Password incorrectas$/)
    credenIncorrs(){
        const user = "admistr";
        const pass = "12345"
        this.LoginPage.Login(user,pass);
    }
    @Then(/^validamos el error al ingresar.$/)
    validserror(){
        this.LoginPage.exit();
    }
}