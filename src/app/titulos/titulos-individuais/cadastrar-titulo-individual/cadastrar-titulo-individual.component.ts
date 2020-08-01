import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitulosIndividuais } from '../modelos/titulos-individuais';
import { TitulosIndividuaisService } from '../servicos/titulos-individuais.service';
import { FormControl, Validators } from '@angular/forms';
import { TituloErrorStateMatcher } from '../validacoes/tituloErrorStateMatcher';

@Component({
  selector: 'app-cadastrar-titulo-individual',
  templateUrl: './cadastrar-titulo-individual.component.html',
  styleUrls: ['./cadastrar-titulo-individual.component.css']
})
export class CadastrarTituloIndividualComponent implements OnInit {
  titulo: TitulosIndividuais;
  erro: string;
  tituloFormControl = new FormControl('', Validators.required);
  situacaoFormControl = new FormControl('', Validators.required);
  matcher = new TituloErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<CadastrarTituloIndividualComponent>,
    private tituloService: TitulosIndividuaisService) { }

  ngOnInit(): void {
    this.instanceObject();
  }


  salvar() {
    debugger;
    if (!this.matcher.isErrorState(this.tituloFormControl, null) && !this.matcher.isErrorState(this.situacaoFormControl, null)) {
      this.tituloService.insertTitulos(this.titulo);
      this.dialogRef.close(this.titulo);
    }
  }

  private instanceObject() {
    this.titulo = {
      titulo: '',
      admissao: null,
      saida: null,
      observacao: '',
      proprietario: '',
      situacao: ''
    };

    this.erro = '';
  }

}
