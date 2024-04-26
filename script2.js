import { browser } from 'k6/experimental/browser';
import { check } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
  scenarios: {

    ui: {

      executor: 'constant-vus',
      //spin up 3 concurrent users
      vus: 3,
      // Keep the test on for 60 seconds
      duration: '60s', 
 
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
  const page3 = context.newPage();
  const page4 = context.newPage();

  const page2 = context.newPage();




  try {
page3.goto('https://www.google.com/')
page4.goto('https://vimeo.com/')

   //open the page with the given URL
   await page.goto('https://www.outsidethestack.net/');

   await page2.goto('https://www.youtube.com/watch?v=LXb3EKWsInQ')


    
  } 
  finally {

    //close the page  and browser context
    page.close();
    context.close();
  }
}

//UNCOMMENT THIS IS YOU WANT TO GENERATE A REPORT

// export function handleSummary(data) {
   
//     // Get the current date
//     const currentDate = new Date();
  
//     // Format the date as YYYY-MM-DD
//     const formattedDate = currentDate.toISOString().slice(0,10);
    
//     // Generate filename with current date
//     const filename = `BL_MultiWebsite__${formattedDate}.html`;
//   return {
//     // add timestamp to the file name
    
//    [filename]: htmlReport(data),
//   };
// }
