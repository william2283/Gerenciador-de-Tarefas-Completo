package com.gerenciador.tarefas.gerenciador_tarefas.repository;
import com.gerenciador.tarefas.gerenciador_tarefas.model.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
  public interface TarefaRepository extends JpaRepository <Tarefa, Long>{
}
