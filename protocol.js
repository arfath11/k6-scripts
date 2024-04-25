
import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
  vus: 10,
  iterations: 100,
  noVUConnectionReuse: true,
};



export default function () {
  http.get('https://vimeo.com/'); // change the URL to the one you want to test
  sleep(1); 
}

//UNCOMMENT THIS IS YOU WANT TO GENERATE A REPORT

// export function handleSummary(data) {
   
//     // Get the current date
//     const currentDate = new Date();
  
//     // Format the date as YYYY-MM-DD
//     const formattedDate = currentDate.toISOString().slice(0,10);
    
//     // Generate filename with current date
//     const filename = `PL_vimeo.com_${formattedDate}.html`;
//   return {
//     // add timestamp to the file name
    
//    [filename]: htmlReport(data),
//   };
// }