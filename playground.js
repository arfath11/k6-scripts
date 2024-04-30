//Random multiple examples of k6 scripts



// import http from 'k6/http';
// import { check, sleep } from 'k6';
// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


// export const options = {
//   //DO TEST IN STAGES
//   stages: [
//     { duration: '10s', target: 20 }, // For first 10s scale to 20vus
//     { duration: '15s', target: 10 }, // For next 15s scale  down to 10vus
//     { duration: '20s', target: 0 }, // For next 20s scale down to 0vus
//   ],
// };

// export default function () {
//   const res = http.get('https://httpbin.test.k6.io/');
//   //Add check if status is 200
//   check(res, { 'status was 200': (r) => r.status == 200 });
//   sleep(1);
// }






import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for breakpoint in this section
  executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '1m', target: 1000 }, // just slowly ramp-up to a HUGE load
  ],
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io');
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};




// import { check } from 'k6';
// import http from 'k6/http';

// export default function () {
//   const res = http.get('https://k6.io');
//   for (const p in res.headers) {
//     if (res.headers.hasOwnProperty(p)) {
//       console.log(p + ' : ' + res.headers[p]);
//     }
//   }
//   check(res, {
//     'status is 200': (r) => r.status === 200,
//     'caption is correct': (r) => r.html('h1').text() == 'Example Domain',
//   });
//  }


