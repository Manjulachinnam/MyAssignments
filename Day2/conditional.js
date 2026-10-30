/* Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript */


/*let browserName ='chrome'
function launchBrowser(browserName) {
    if (browserName=== 'chrome') {
        console.log('browsername is chrome');
        
    } else {console.log('browsername is not chrome');
    
        
    }
}launchBrowser();*/

function runTests() {
    let testType = 'smoke'
    switch (testType) {
        case "smoke":
                console.log('smoke testing');
                
            break;
        case "sanity":
             console.log('sanity testing');
            break;

        case "Regression":
            console.log('Regression testing');
            break;
        default:
            break;
    }  
}runTests();