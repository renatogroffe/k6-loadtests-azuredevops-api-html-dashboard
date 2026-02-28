import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.1.0/index.js";

export let options = {
    thresholds: {
        http_req_failed: ['rate<0.05']
    }    
};

export default function () {
  // Teste do endpoint - espera 200 OK
  const contadorResponse = http.get('#{EndpointGetTest}#');
  
  check(contadorResponse, {
    'contador: status é 200 OK': (r) => r.status === 200,
  });

  // Espera 1 segundo ao final de cada iteração
  sleep(1);
}

export function handleSummary(data) {
  return {
    "k6-reporter.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}