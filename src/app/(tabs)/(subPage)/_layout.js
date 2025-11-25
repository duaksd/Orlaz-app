import { Slot } from 'expo-router';

export default function SubPageLayout() {
  // Render city child pages without creating a nested Tabs navigator.
  // This prevents accidental nested tab navigators which break router history.
  return <Slot />;
}