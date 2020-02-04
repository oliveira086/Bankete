import Inicio from '../src/telas/TelaDeLogin/TelaDeLogin'
import Cadastro from '../src/telas/TelaDeCadastro/TelaDeCadastro'
import Principal from '../src/telas/TelaPrincipal/TelaPrincipal'
import Historico from '../src/telas/TelaDeHistorico/TelaDeHistorico'
import Transferencia from '../src/telas/TelaDeTransferencia/TelaDeTransferencia'
import TelaDeMenu from '../src/telas/TelaDeMenu/TelaDeMenu'
import TelaTransferenciaNovo from '../src/telas/TelaTransferenciaNovo/TelaTransferenciaNovo'
import TelaDeConfirmacao from '../src/telas/TelaDeConfirmacao/TelaDeConfirmacao'
import TelaDePagamento from '../src/telas/TelaDePagamento/TelaDePagamento'
import TelaDeValor from '../src/telas/TelaDeValor/TelaDeValor'
import TelaDeSeisDigitos from '../src/telas/TelaDeSeisDigitos/TelaDeSeisDigitos'
import TelaMudarSeisDigitos from '../src/telas/TelaMudarSeisDigitos/TelaMudarSeisDigitos'
import TelaDeConfirmacaoDeDados from '../src/telas/TelaDeConfirmacaoDeDados/TelaDeConfirmacaoDeDados'
import TelaDeConcluido from '../src/telas/TelaDeConcluido/TelaDeConcluido'
import TelaDeRedirecionar from '../src/telas/TelaDeRedirecionar/TelaDeRedirecionar'
import TelaDeRecuperacao from '../src/telas/TelaDeRecuperacao/TelaDeRecuperacao'


import {
    createAppContainer,
    createStackNavigator,
  } from 'react-navigation'

  const AppSwitchNavigator = createStackNavigator({
    Inicio: {
      screen: Inicio,
        navigationOptions: {
            header: null,
          }
    },
    Cadastro: {
      screen: Cadastro,
        navigationOptions:{
          header:null,
        }
    },
    Principal: {
      screen: Principal,
        navigationOptions:{
          header:null,
        }
    },
    Historico:{
      screen: Historico,
        navigationOptions:{
          header:null,
        }
    },
    Transferencia:{
      screen: Transferencia,
        navigationOptions:{
          header:null
        }
    },
    TelaDeMenu:{
      screen: TelaDeMenu,
        navigationOptions:{
          header:null
        }
    },
    TelaTransferenciaNovo:{
      screen: TelaTransferenciaNovo,
        navigationOptions:{
          header:null
        }
    },
    TelaDeConfirmacao:{
      screen: TelaDeConfirmacao,
        navigationOptions:{
          header:null
        }
    },
    TelaDePagamento:{
      screen: TelaDePagamento,
        navigationOptions:{
          header:null
        }
    },
    TelaDeValor:{
      screen: TelaDeValor,
        navigationOptions:{
          header:null
        }
    },
    TelaDeSeisDigitos:{
      screen: TelaDeSeisDigitos,
        navigationOptions:{
          header:null
        }
    },
    TelaMudarSeisDigitos:{
      screen: TelaMudarSeisDigitos,
        navigationOptions:{
          header:null
        }
    },
    TelaDeConfirmacaoDeDados:{
      screen: TelaDeConfirmacaoDeDados,
        navigationOptions:{
          header:null
        }
    },
    TelaDeConcluido:{
      screen: TelaDeConcluido,
        navigationOptions:{
          header:null
        }
    },
    TelaDeRedirecionar:{
      screen: TelaDeRedirecionar,
        navigationOptions:{
          header:null
        }
    },
    TelaDeRecuperacao:{
      screen: TelaDeRecuperacao,
        navigationOptions:{
          header:null
        }
    },



  },
  {
      initialRouteName: 'Inicio'
  })

  const AppContainer = createAppContainer(AppSwitchNavigator)
 

  export default AppContainer