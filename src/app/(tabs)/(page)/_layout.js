import { Slot } from 'expo-router';

export default function PagesLayout() {
  // Render child pages without creating a nested navigator.
  // This avoids creating another Tabs/Stack and keeps the router history
  // consistent (router.back will go to the previous route as expected).
  return <Slot />;
}