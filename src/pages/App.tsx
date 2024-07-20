import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import "./style.scss";
import ITarefa from "../types/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([])
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>()

  function selecionarTarefa(tarefaClicada: ITarefa) {
    setTarefaSelecionada(tarefaClicada)
    setTarefas(tarefas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaClicada.id ? true : false
    })))
  }
  function finalizarTarefa() {
    if (tarefaSelecionada) {
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === tarefaSelecionada.id) {
            return {
              ...tarefa,
              selecionado: false,
              concluido: true
            }
          }
          return tarefa;
        }))
    }
  }
  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro
        tarefaSelecionada={tarefaSelecionada}
        finalizarTarefa={finalizarTarefa}
      />
    </div>
  );
}

export default App;
