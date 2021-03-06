import { Injectable } from '@angular/core';

export interface SiteTheme {
  name: string;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root',
 })
export class ThemeStorageService {
  static storageKey = 'material-tutorial-theme-storage-current-name';

  storeTheme(theme: SiteTheme) {
    try {
      window.localStorage[ThemeStorageService.storageKey] = theme.name;
    } catch { }
  }

  getStoredThemeName(): string | null {
    try {
      return window.localStorage[ThemeStorageService.storageKey] || null;
    } catch {
      return null;
    }
  }

  clearStorage() {
    try {
      window.localStorage.removeItem(ThemeStorageService.storageKey);
    } catch { }
  }
}
