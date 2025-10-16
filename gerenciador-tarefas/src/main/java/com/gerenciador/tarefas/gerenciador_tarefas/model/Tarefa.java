package com.gerenciador.tarefas.gerenciador_tarefas.model;
import
        jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table (name = "tabela")

public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    private String titulo;
    private String descriçao;
    private boolean concluida = false;
    private LocalDateTime DataCriacao = LocalDateTime.now();

    public Tarefa(){}

    public Tarefa(String titulo, String descriçao){
        this.titulo = titulo;
        this.descriçao = descriçao;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitulo() { return titulo; }
    public void setTitulo(String titulo) { this.titulo = titulo; }

    public String getDescricao() { return descriçao; }
    public void setDescricao(String descricao) { this.descriçao = descricao; }

    public Boolean getConcluida() { return concluida; }
    public void setConcluida(Boolean concluida) { this.concluida = concluida; }

    public LocalDateTime getDataCriacao() { return DataCriacao; }
    public void setDataCriacao(LocalDateTime dataCriacao) { this.DataCriacao = dataCriacao; }


}
