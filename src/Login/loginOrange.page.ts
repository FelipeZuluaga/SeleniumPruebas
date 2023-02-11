import { PageContext, Page } from "@testing/wdio-page-objects";

const select ={
    wrapper:' [class="orangehrm-login-branding"]',
    header: ' [class="orangehrm-login-layout"]',
    tituloPagina: 'img[src="/web/images/ohrm_branding.png?1672659722816"]',
    subTitulo: '.oxd-text--h5',
    credenciales: '.orangehrm-demo-credentials',
    username:'[class="oxd-form-row"]:nth-of-type(1)',
    inputUserName:'[name="username"]',
    password: '[class="oxd-form-row"]:nth-of-type(2)',
    inputPassword:'[name="password"]',
    bntLogin:'button.oxd-button',
    textbntOlvidoContrase:'[class="orangehrm-login-forgot"] .oxd-text',
    footer: '[class="orangehrm-login-footer"]',
}
@PageContext({
    path: '/web/index.php/auth/login',
    wrapper: '#app',
})
export class LoginPage extends Page {

    welcome(){
        $(select.wrapper).isExisting();
    }
    valid({item}){
        switch (item) {
            case 'header':
                $(select.inputUserName).waitForDisplayed({ timeout: 60000 });
                $(select.header).isExisting();
                break;
            case 'titulo pagina':
                $(select.tituloPagina).isExisting();
                break;
            case 'sub titulo':
                $(select.subTitulo).isExisting();
                break;
            case 'credenciales':
                $(select.credenciales).isExisting();
                break;
            case 'Username':
                $(select.username).isExisting();
                break;
            case 'input UserName':
                $(select.inputUserName).waitForDisplayed({ timeout: 60000 });
                $(select.inputUserName).isExisting();
                break;
            case 'Password':
                $(select.password).isExisting();
                break;
            case 'input Password':
                $(select.inputPassword).isExisting();
                break;
            case 'boton Login':
                $(select.bntLogin).isExisting();
                break;
            case 'text olvido Password':
                $(select.textbntOlvidoContrase).isExisting();
                break;
            case 'footer':
                $(select.footer).waitForDisplayed({timeout: 60000 });
                $(select.footer).isExisting();
                break;
        }
    }
    exit(){
        $(select.tituloPagina).waitForDisplayed({ timeout: 60000 });
        $(select.tituloPagina).isExisting();
    }
    Login(user:string,pass:string){
        $(select.inputUserName).isExisting();
        $(select.inputUserName).addValue(user);
        $(select.inputPassword).isExisting();
        $(select.inputPassword).addValue(pass);
        $(select.bntLogin).isExisting();
        $(select.bntLogin).click();
    }

}