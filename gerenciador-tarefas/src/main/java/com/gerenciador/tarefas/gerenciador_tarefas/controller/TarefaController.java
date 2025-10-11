package com.gerenciador.tarefas.gerenciador_tarefas.controller;

import com.gerenciador.tarefas.gerenciador_tarefas.model.Tarefa;
import com.gerenciador.tarefas.gerenciador_tarefas.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/tarefas")
public class TarefaController {

    @Autowired
    private TarefaRepository repository;

    @GetMapping
    public List<Tarefa> listarTarefas() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Tarefa> buscarTarefa(@PathVariable Long id) {
        return repository.findById(id);    }


    @PostMapping
    public Tarefa criarTarefa(@RequestBody Tarefa tarefa) {
        return repository.save(tarefa);    }


    @PutMapping("/{id}")
    public Tarefa atualizarTarefa(@PathVariable Long id, @RequestBody Tarefa tarefaAtualizada) {
        return repository.findById(id)
                .map(tarefa -> {
                    tarefa.setTitulo(tarefaAtualizada.getTitulo());
                    tarefa.setDescricao(tarefaAtualizada.getDescricao());
                    tarefa.setConcluida(tarefaAtualizada.getConcluida());
                    return repository.save(tarefa);
                })
                .orElseGet(() -> {
                    tarefaAtualizada.setId(id);
                    return repository.save(tarefaAtualizada);
                });
    }

    @DeleteMapping("/{id}")
    public void deletarTarefa(@PathVariable Long id) {
        repository.deleteById(id);
    }
}

