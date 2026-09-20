# RioCardGame

Card Game 2D para Android desenvolvido com React Native + Expo.

## Estrutura do Projeto

```
src/
├── core/           # Lógica e máquina de estados (GameState)
├── data/           # Banco de dados JSON (cards.json)
├── ui/
│   ├── components/ # Componentes visuais (CardView)
│   └── screens/    # Telas do jogo (BoardScreen)
```

## Cartas Iniciais

| ID | Nome | Facção | Custo | ATK | DEF |
|----|------|--------|-------|-----|-----|
| uv_01 | Mestre Doutor | União Vermelha | 8 | 2500 | 2000 |
| tbp_01 | Visconde do Complexo | Terceiro Bloco Puro | 7 | 2200 | 2600 |
| ada_01 | Bebê da Rocinha | Aliança dos Aliados | 3 | 1400 | 1000 |
| pm_01 | Capitão da Reserva | A Liga Paramilitar | 9 | 2800 | 3000 |

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Abrir no Android (requer Expo Go)
npm run android
```

## Build Automático (CI/CD)

O projeto inclui pipeline GitHub Actions (`.github/workflows/build.yml`) que:

1. Faz checkout do código
2. Instala dependências
3. Instala EAS CLI
4. Executa `eas build --platform android --profile preview` para gerar APK
5. Faz upload do APK como artifact

### Configuração necessária no GitHub:

1. Criar conta no [Expo](https://expo.dev)
2. Rodar `eas login` e `eas build:configure` localmente
3. Adicionar secrets no GitHub:
   - `EXPO_TOKEN` (de `expo token:create`)
   - `EAS_PROJECT_ID` (do `eas.json` ou dashboard)

## Tecnologias

- React Native 0.74 + Expo 51
- TypeScript
- Expo Router
- EAS Build
- GitHub Actions