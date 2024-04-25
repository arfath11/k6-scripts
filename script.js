import { browser } from 'k6/experimental/browser';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
  scenarios: {

    ui: {

      executor: 'constant-vus',
      //spin up 3 concurrent users
      vus: 3,
      // Keep the test on for 10 seconds
      duration: '50s', 
 
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  //launch a new browser context
  const context = browser.newContext();
  const page = context.newPage(); 
 // const page2 = context.newPage();




  try {
    //await page2.goto('https://www.youtube.com/watch?v=LXb3EKWsInQ')
   //open the page with the given URL
    await page.goto('https://test.k6.io/my_messages.php');
    
   //fill in the login form
    page.locator('input[name="login"]').type('admin');
    page.locator('input[name="password"]').type('123');

    const submitButton = page.locator('input[type="submit"]');

    await Promise.all([page.waitForNavigation(), submitButton.click()]);

    check(page, {
      header: (p) => p.locator('h2').textContent() == 'Welcome, admin!',
    });
  } finally {

    //close the page  and browser context
    page.close();
    context.close();
  }}

//UNCOMMENT THIS IS YOU WANT TO GENERATE A REPORT

// export function handleSummary(data) {
   
//     // Get the current date
//     const currentDate = new Date();
  
//     // Format the date as YYYY-MM-DD
//     const formattedDate = currentDate.toISOString().slice(0,10);
    
//     // Generate filename with current date
//     const filename = `BL_testk6__${formattedDate}.html`;
//   return {
//     // add timestamp to the file name
    
//    [filename]: htmlReport(data),
//   };
// }