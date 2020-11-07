import { Component, OnInit } from '@angular/core';
import { Romanzo } from './romanzi.model';

@Component({
  selector: 'app-romanzi',
  templateUrl: './romanzi.component.html',
  styleUrls: ['./romanzi.component.scss']
})
export class RomanziComponent implements OnInit {
  
  mockRomanzi: Romanzo[] = [
    {
      id: 1, 
      titolo: "Solitudine in Paradiso",
      descrizione:"Davide, il ragazzo dagli occhi di ghiaccio, affetto da una morbosa solitudine. Il villaggio Paradiso, il luogo che gli rapisce l'anima, dove ogni anno torna per trascorrere le vacanze estive con i genitori, nella sua casetta color bianco pallido e sbiadito. L'unico luogo dove la sua malinconia assume contorni sfumati fino a dissolversi completamente. Il luogo che custodisce un terribile segreto. Un giorno d'estate gli occhi di Davide incontrano quelli di Chiara. Ma per lui non è facile amare qualcuno. Il buio fa paura, è un'incognita troppo rischiosa. Così la lascia andare. Il pentimento gli attanaglierà il cuore per tutto l'inverno seguente, e quando sarà pronto per aprirsi all'amore, sarà ormai troppo tardi. Quattro anni dopo quell'estate, il destino non si è dimenticato di Davide. Chiara era solo il punto di partenza di un viaggio al confine tra la follia e una razionalità amara e dirompente. Solo il tempo svelerà la vera essenza della solitudine di Davide, assumendo la forma di un terribile segreto, e alla fine gli si rivelerà davanti agli occhi come non fosse mai andato via. Un dramma psicologico che vi investirà con l'intensità di emozioni travolgenti. Una storia d'amore adolescenziale che si snoda tra i vicoli di un percorso esistenziale dai risvolti sconvolgenti.",
      data_di_uscita: "19/10/1991",
      image: "../../../assets/imgs/sip.jpg"
    },
    {
      id: 1, 
      titolo: "Solitudine in Paradiso",
      descrizione:"Davide, il ragazzo dagli occhi di ghiaccio, affetto da una morbosa solitudine. Il villaggio Paradiso, il luogo che gli rapisce l'anima, dove ogni anno torna per trascorrere le vacanze estive con i genitori, nella sua casetta color bianco pallido e sbiadito. L'unico luogo dove la sua malinconia assume contorni sfumati fino a dissolversi completamente. Il luogo che custodisce un terribile segreto. Un giorno d'estate gli occhi di Davide incontrano quelli di Chiara. Ma per lui non è facile amare qualcuno. Il buio fa paura, è un'incognita troppo rischiosa. Così la lascia andare. Il pentimento gli attanaglierà il cuore per tutto l'inverno seguente, e quando sarà pronto per aprirsi all'amore, sarà ormai troppo tardi. Quattro anni dopo quell'estate, il destino non si è dimenticato di Davide. Chiara era solo il punto di partenza di un viaggio al confine tra la follia e una razionalità amara e dirompente. Solo il tempo svelerà la vera essenza della solitudine di Davide, assumendo la forma di un terribile segreto, e alla fine gli si rivelerà davanti agli occhi come non fosse mai andato via. Un dramma psicologico che vi investirà con l'intensità di emozioni travolgenti. Una storia d'amore adolescenziale che si snoda tra i vicoli di un percorso esistenziale dai risvolti sconvolgenti.",
      data_di_uscita: "19/10/1991",
      image: "../../../assets/imgs/sip.jpg"
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
