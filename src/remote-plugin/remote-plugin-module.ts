import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Entry } from './entry/entry';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    Entry, // ✅ Use `Entry` in imports, not declarations
    RouterModule.forChild([
      { path: '', component: Entry }
    ])
  ],
  // no declarations or exports
})
export class RemotePluginModule {}