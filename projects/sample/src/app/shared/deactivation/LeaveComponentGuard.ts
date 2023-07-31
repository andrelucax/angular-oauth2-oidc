import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class LeaveComponentGuard  {
  canDeactivate(
    component: any,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return component.canDeactivate();
  }
}
