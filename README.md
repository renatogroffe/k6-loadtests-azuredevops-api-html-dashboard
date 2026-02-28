# k6-loadtests-azuredevops-api-html-dashboard
Exemplo de pipeline do Azure DevOps para a execução automatizada de testes de carga do k6 em uma API REST, com thresholds + checks e a exportação dos resultados para relatórios HTML (Web Dashboard e HTML Reporter).


Links importantes:
- Aplicação utilizada nos testes: https://github.com/renatogroffe/aspnetcore10-minimalapis-appinsights-otel-scalar_contagemacessos-simulacaofalhas
- k6 Web Dashboard (Oficial): https://grafana.com/docs/k6/latest/results-output/web-dashboard/
- Extensão JavaScript do k6 Reporter: https://github.com/benc-uk/k6-reporter
