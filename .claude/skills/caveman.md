---
name: caveman
description: Debug logging intelligent - Ajoute des logs visuels pour le débogage
triggers:
  - debug
  - log
  - trace
---

# Caveman Debugging

Système de logging visuel pour déboguer rapidement.

## Usage

Quand l'utilisateur demande de déboguer ou tracer du code :

1. **Ajouter des logs visuels** avec emojis distinctifs :
   ```typescript
   console.log('🔵 [Component] Mounted')
   console.log('🟢 [API] Request:', data)
   console.log('🔴 [Error] Failed:', error)
   console.log('🟡 [Warning] Attention:', message)
   ```

2. **Tracer les flux de données** :
   ```typescript
   console.log('📥 [Input]', input)
   console.log('⚙️ [Process]', result)
   console.log('📤 [Output]', output)
   ```

3. **Performance** :
   ```typescript
   console.time('⏱️ Operation')
   // ... code
   console.timeEnd('⏱️ Operation')
   ```

## Nettoyage

Après résolution, proposer de retirer les logs avec :
```bash
grep -r "console.log" src/ --include="*.ts" --include="*.tsx"
```
