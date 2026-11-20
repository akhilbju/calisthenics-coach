# Calisthenics Coach (Android)

React + Vite + Capacitor app with offline workout/run logging, a 30-day plan, exercise cues and diagrams, set tracking, rest timer, progress summaries, skill checklists and daily local notifications.

## Requirements
- Node.js 20+
- Android Studio (stable)
- JDK 17 (Android Studio bundled JDK is suitable)

## Browser preview
```bash
npm install
npm run dev
```

## Build Android app
```bash
npm install
npx cap add android
npm run android:sync
npx cap open android
```
In Android Studio, wait for Gradle sync, connect an Android phone with USB debugging enabled or choose an emulator, then press Run.

For later changes:
```bash
npm run android:sync
```

## Daily notifications
Open Settings in the app, choose a reminder time, tap Save daily reminder and grant notification permission. Android notification/battery settings can affect delivery.

## Offline data
Workout logs, run logs and preferences use localStorage on the device. No account/server is used. Clearing app data or uninstalling deletes the history.

## Scope / limitations
- Run duration and optional distance are entered manually; no GPS tracking.
- Exercise diagrams are schematic illustrations, not videos.
- A pull-up bar is required for actual pull-up and muscle-up training.
- The 30-day program starts on the first app launch and progresses through five training days, one active recovery day and one rest day per week.
- This is a training aid, not medical advice. Stop if chest pain, dizziness or unusual breathlessness occurs.
