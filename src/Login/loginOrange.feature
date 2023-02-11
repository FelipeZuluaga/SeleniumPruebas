@Login
Feature: loginOrange
    Como Usuario quiero validar la pagina de login con todos sus elementos principales
    y poder loguearme de forma correcta e incorrecta y validar el olvido de contraseña.

    @Login001
    Scenario: Validar el titulo los usuarios y el formulario de login con sus botones
        Given que como cliente visito OrangeHRM
        When  quiero validar los siguiente:
            | item                 |
            | header               |
            | titulo pagina        |
            | sub titulo           |
            | credenciales         |
            | Username             |
            | input UserName       |
            | Password             |
            | input Password       |
            | boton Login          |
            | text olvido Password |
            | footer               |
        Then validacion exitosa.


    @Login002
    Scenario: quiero ingresar con las credenciales correctas
        Given que como cliente visito OrangeHRM
        When  ingreso user y Password correctamente
        Then  validamos la posición global.

    @Login003
    Scenario: quiero ingresar con las credenciales incorrectas
        Given que como cliente visito OrangeHRM
        When  ingreso user y Password incorrectas
        Then  validamos el error al ingresar.   