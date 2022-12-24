import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BypassSecurityComponent } from './components/bypass-security/bypass-security.component';

@NgModule({
  declarations: [BypassSecurityComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [BypassSecurityComponent],
})
export class AppModule {}
