import { Component, OnInit, ViewChild } from '@angular/core';
import { TitulosIndividuais } from '../modelos/titulos-individuais';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CadastrarTituloIndividualComponent } from '../cadastrar-titulo-individual/cadastrar-titulo-individual.component';
import { TitulosIndividuaisService } from '../servicos/titulos-individuais.service';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-listar-titulos-individuais',
  templateUrl: './listar-titulos-individuais.component.html',
  styleUrls: ['./listar-titulos-individuais.component.css']
})
export class ListarTitulosIndividuaisComponent implements OnInit {
  titulos: TitulosIndividuais[];
  displayedColumns: string[] = ['titulo', 'proprietario', 'situacao', 'admissao', 'saida', 'acoes'];
  dataSource: MatTableDataSource<TitulosIndividuais>;
  txtFiltro: string;

  constructor(private dialog: MatDialog,
              private titulosService: TitulosIndividuaisService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.getTitulos();
    this.dataSource = new MatTableDataSource(this.titulos);
    this.dataSource.sort = this.sort;
  }

  aplicarFiltro(event: Event) {
    this.txtFiltro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.txtFiltro.trim().toLowerCase();
  }

  filtrar() {
    this.titulosService.buscarTitulo(this.txtFiltro);
  }

  private getTitulos() {
    this.titulos = this.titulosService.getTitulos();
  }

  abrirDialogVisualizar(titulo: TitulosIndividuais) {
    console.log(titulo);
  }

  abrirDialogEditar(titulo: TitulosIndividuais) {
    console.log(titulo);
  }

  abrirDialogExcluir(titulo: TitulosIndividuais) {
    console.log(titulo);
  }

  imprimir(titulo: TitulosIndividuais) {
    console.log(titulo);
  }

  abrirDialogCadastrarIndividual() {
    const dialogRef = this.dialog.open(CadastrarTituloIndividualComponent, {
      width: 'auto',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getTitulos();
      }
    });
  }

}

