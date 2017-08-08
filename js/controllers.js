app.controller('ToastEx', function($scope, $mdToast) {
    $mdToast.show(
        $mdToast.simple('Hello World Toast!')
        .position('right top')
        .hideDelay(3000)
        );
});

app.controller('layoutController', layoutController);

function layoutController($scope) {
}

app.controller('autoCompleteController', autoCompleteController);

function autoCompleteController($timeout, $q, $log) {
    var self = this;
    self.simularQuery = false;
    self.isDisabled = false;

    // Lista de estados a serem exibidos.
    self.estados = loadEstados();
    self.queryBusca = queryBusca;
    self.selectedItemChange = selectedItemChange;
    self.searchTextChange = searchTextChange;
    self.novoEstado = novoEstado;

    function novoEstado(state) {
        alert("A implementar...");
    }

    function queryBusca (query) {
        var results = query ? self.estados.filter( createFilterFor(query) ) : self.estados, deferred;

        if (self.simularQuery) {
            deferred = $q.defer();

            $timeout(function () {
                deferred.resolve( results );
            }, Math.random() * 1000, false);

            return deferred.promise;
        } else {
            return results;
        }
    }

    function searchTextChange(text) {
        $log.info('Texto modificado para: ' + text);
    }

    function selectedItemChange(item) {
        $log.info('Item modificado para: ' + JSON.stringify(item));
    }

    // Constrói uma lista de estados como map de pares de chave-valor.
    function loadEstados() {
        var allEstados = 'Acre (AC), Alagoas (AL), Amapá (AP), Amazonas (AM), Bahia (BA), Ceará (CE), Distrito Federal (DF), Espírito Santo (ES), Goiás (GO), Maranhão (MA), Mato Grosso (MT), Mato Grosso do Sul (MS), Minas Gerais (MG), Pará (PA) , Paraíba (PB), Paraná (PR), Pernambuco (PE), Piauí (PI), Rio de Janeiro (RJ), Rio Grande do Norte (RN), Rio Grande do Sul (RS), Rondônia (RO), Roraima (RR), Santa Catarina (SC), São Paulo (SP), Sergipe (SE), Tocantins (TO)';

        return allEstados.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    // Filtra pela query de busca.
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    }
}