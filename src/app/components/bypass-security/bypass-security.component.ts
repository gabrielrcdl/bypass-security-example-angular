import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
})
export class BypassSecurityComponent {
  dangerousUrl: string;
  trustedUrl: SafeUrl;
  dangerousVideoUrl!: string;
  videoUrl!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Olá mundão!!")';
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }
}
