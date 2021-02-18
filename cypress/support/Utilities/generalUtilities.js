export class GeneralUtilities {
    waitForElement(locator){
        cy.waitFor('.widget-title.smaller', {
            timeout: 200, // The time in ms to poll for changes
            tries: 300,   // How many times to try before failing
                          // 300 tries at 200ms timeout = 1min
          });
    }

    deleteScript(){
        return `delete from empis_sys.PVS_MATCHING_EXCEPTION_MEMBER mem where mem.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_MATCHING_EXCEPTION me where me.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in (  SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_MEMBER_SYNC_REQUEST where PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ))));
        delete from empis_sys.pvs_member_response_history where 
        pvs_validation_error_id in 
        (select c.pvs_validation_error_id from empis_sys.pvs_validation_error c where c.PVS_CONTRIBUTION_ID in
        (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in 
        (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in 
        (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in 
        ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )))));
        delete from empis_sys.pvs_member_response where 
        pvs_validation_error_id in 
        (select c.pvs_validation_error_id from empis_sys.pvs_validation_error c where c.PVS_CONTRIBUTION_ID in
        (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in 
        (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in 
        (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in 
        ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )))));
        delete from empis_sys.PVS_VALIDATION_ERROR ve where ve.PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ))));
        delete from empis_sys.pvs_contribution_member_audit ve where ve.PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ))));
        delete from empis_sys.PVS_CONTRIBUTION_HISTORY ch where ch.PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (  SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ))));
        delete from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (  SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_MEMBER_PARAMETER mp where mp.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_MEMBER_HISTORY mh where mh.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (  SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_EMPLOYER_EMPLOYEE_HISTORY eeh where eeh.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (  SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' );
        delete from empis_sys.PVS_INPUT_SOURCE_FILE_HISTORY pisfh where pisfh.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_INPUT_SOURCE_FILE pisf where pisf.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        --delete from empis_sys.PVS_DATA_FILE_HISTORY where PVS_DATA_FILE_HISTORY_ID in (select df.PVS_DATA_FILE_ID from empis_sys.PVS_DATA_FILE df where df.PVS_DATA_FILE_ID in (select pisf.PVS_DATA_FILE_ID from empis_sys.PVS_INPUT_SOURCE_FILE pisf where pisf.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ))));
        delete from empis_sys.PVS_DATA_FILE df where df.PVS_DATA_FILE_ID in (select pisf.PVS_DATA_FILE_ID from empis_sys.PVS_INPUT_SOURCE_FILE pisf where pisf.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_INPUT_SOURCE_EMPLOYER where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' );
        delete from empis_sys.PVS_INPUT_SOURCE_SCHEDULE piss where piss.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_INPUT_SOURCE_HISTORY where PVS_INPUT_SOURCE_ID in (select pis.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE pis where pis.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_INPUT_SOURCE pis where pis.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' ));
        delete from empis_sys.PVS_MATCHING_EXCEPTION_MEMBER where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_MATCHING_EXCEPTION me where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_MEMBER_SYNC_REQUEST where PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (select pvs_employer_id from empis_sys.pvs_employer where CUSTODIAN_IDENTIFIER ='SHANTHSSO'))));
        delete from pvs_contribution_member_audit  where PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (select pvs_employer_id from empis_sys.pvs_employer where CUSTODIAN_IDENTIFIER ='SHANTHSSO'))));       
        delete from empis_sys.PVS_VALIDATION_ERROR ve where ve.PVS_CONTRIBUTION_ID in (select c.PVS_CONTRIBUTION_ID from empis_sys.PVS_CONTRIBUTION c where c.PVS_MEMBER_ID in (select m.PVS_MEMBER_ID from empis_sys.PVS_MEMBER m where m.PVS_EMPLOYER_EMPLOYEE_ID in (select ee.PVS_EMPLOYER_EMPLOYEE_ID from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where PVS_EMPLOYER_ID in (select pvs_employer_id from empis_sys.pvs_employer where CUSTODIAN_IDENTIFIER ='SHANTHSSO'))));
        delete from empis_sys.PVS_CONTRIBUTION_HISTORY ch where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_CONTRIBUTION c where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_MEMBER_PARAMETER mp  where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_MEMBER_HISTORY mh where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_MEMBER m where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_EMPLOYER_EMPLOYEE_HISTORY eeh where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_EMPLOYER_EMPLOYEE ee where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_INPUT_SOURCE_FILE_HISTORY pisfh where pisfh.PVS_INPUT_SOURCE_ID in (select PVS_INPUT_SOURCE_ID  from empis_sys.PVS_INPUT_SOURCE pis where updated_by_username = 'shanthsso-cust');
        delete from empis_sys.PVS_INPUT_SOURCE_FILE pisf  where pvs_data_file_id in  (select pvs_data_file_id from empis_sys.PVS_DATA_FILE df where updated_by_username = 'shanthsso-cust');
        delete from empis_sys.pvs_submission_history df where df.PVS_DATA_FILE_ID in (select pisf.PVS_DATA_FILE_ID from empis_sys.PVS_INPUT_SOURCE_FILE pisf where pisf.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.pvs_submission df where df.PVS_DATA_FILE_ID in (select PVS_DATA_FILE_ID from empis_sys.pvs_data_file  where updated_by_username ='shanthsso-cust' );
        delete from empis_sys.pvs_submission df where df.PVS_DATA_FILE_ID in (select pisf.PVS_DATA_FILE_ID from empis_sys.PVS_INPUT_SOURCE_FILE pisf where pisf.PVS_INPUT_SOURCE_ID in (select pise.PVS_INPUT_SOURCE_ID from empis_sys.PVS_INPUT_SOURCE_EMPLOYER pise where PVS_EMPLOYER_ID in ( SELECT pvs_employer_id FROM empis_sys.pvs_employer where custodian_identifier='SHANTHSSO' )));
        delete from empis_sys.PVS_DATA_FILE df where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_INPUT_SOURCE_EMPLOYER where updated_by_username = 'shanthsso-cust';
        delete from empis_sys.PVS_INPUT_SOURCE_SCHEDULE piss where piss.PVS_INPUT_SOURCE_ID in (select PVS_INPUT_SOURCE_ID  from empis_sys.PVS_INPUT_SOURCE pis where updated_by_username = 'shanthsso-cust');
        delete from empis_sys.PVS_INPUT_SOURCE_HISTORY  where updated_by_username = 'shanthsso-cust';`
    }

}

export const util = new GeneralUtilities();