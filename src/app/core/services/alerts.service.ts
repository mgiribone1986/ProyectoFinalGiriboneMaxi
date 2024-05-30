import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AlertsService {
  notifier$ = new BehaviorSubject<string | null>(null);
}
