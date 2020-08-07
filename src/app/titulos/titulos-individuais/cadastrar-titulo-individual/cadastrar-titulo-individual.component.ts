import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TitulosIndividuais } from '../modelos/titulos-individuais';
import { TitulosIndividuaisService } from '../servicos/titulos-individuais.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TituloErrorStateMatcher } from '../validacoes/tituloErrorStateMatcher';
import { validateVerticalPosition } from '@angular/cdk/overlay';

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
  formCadastroIndividual: FormGroup;
  post: any = '';

  constructor(
    public dialogRef: MatDialogRef<CadastrarTituloIndividualComponent>,
    private tituloService: TitulosIndividuaisService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.formCadastroIndividual = this.formBuilder.group({
      'titulo': [null, [Validators.required]],
      'situacao': [null, [Validators.required]],
      'observacao': [null, Validators.maxLength(255)]
    });
  }

  verificarTitulo() {
    return this.formCadastroIndividual.get('titulo').hasError('required') ? 'Campo obrigatório' : 'Campo obrigatório';
  }

  verificaSituacao() {
    return this.formCadastroIndividual.get('situacao').hasError('required') ? 'Campo obrigatório' : 'Campo obrigatório';
  }

  enviar(post) {
    this.post = post;
  }


  salvar() {
    console.log(this.formCadastroIndividual.get('situacao').value);
    this.titulo = {
      titulo: this.formCadastroIndividual.get('titulo').value,
      admissao: new Date(),
      saida: null,
      observacao: this.formCadastroIndividual.get('observacao').value,
      proprietario: '',
      situacao: this.formCadastroIndividual.get('situacao').value
    };

    this.tituloService.inserirTitulos(this.titulo);
    this.dialogRef.close(this.titulo);
  }

}
