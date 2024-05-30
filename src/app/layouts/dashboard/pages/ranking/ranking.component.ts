import { Component } from '@angular/core';




/*
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

}

*/

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent {
  displayedColumns: string[] = ['id', 'valor', 'descripcion']; // Define displayedColumns
  sanciones = [
    { id: 1, valor: 5, descripcion: 'Incendiera pupitres' },
    { id: 2, valor: 3, descripcion: 'Lanzar objetos contundentes a los profesores' },
    { id: 3, valor: 4, descripcion: 'Fumar en los baños con Musica de Bob Marley' },
    { id: 4, valor: 5, descripcion: 'Dormir sobre los libros' },
    { id: 5, valor: 8, descripcion: 'Machetearse en los examenes' },
    { id: 6, valor: 9, descripcion: 'Copiar y pegar con Chat GPT' },
    { id: 7, valor: 15, descripcion: 'Utilizar El rincon del vago' },
    { id: 8, valor: 21, descripcion: 'Hacerse la rata' },
    { id: 9, valor: 20, descripcion: 'No probar el arte culinario de la directora kelly' },
    { id: 10, valor: -5, descripcion: 'Traer mascotas al establecimiento' },
    { id: 11, valor: -1, descripcion: 'Traer manzanas a los profesores' },
    { id: 12, valor: 0, descripcion: 'Sobornar a los profesores' },
    { id: 13, valor: 3, descripcion: 'Falsificar firmas de los padres' },
    { id: 14, valor: 94-93, descripcion: 'Tomar la Institucion' },
    { id: 15, valor: 44, descripcion: 'No respetar opiniones diferentes' },
    { id: 16, valor: 44, descripcion: 'Cobrar por la reserva del pupitre --> si hay carencias que no se note' },
  ];
}