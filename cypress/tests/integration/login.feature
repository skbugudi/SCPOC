Feature: Login and upload file in the Employer Portal
    @focus     This feature is to test fileupload and go to grid page
    Scenario Outline: Scenario Outline name: Upload file and delete file from Grid
        Given I am in login page and login with <custodian> and <username> and <password> to the application
        When I upload contributions with <file>
        Then I resolve the exceptions with <fund>
        Then I navigate to Grid and verify
        Examples:
            | custodian | username        | password | file                   | fund        |
            | "MCSONE"  | "MCSONEUserOne" | "&qsltd" | "CSV/ato-all-smsf.csv" | "TRANSPORT" |