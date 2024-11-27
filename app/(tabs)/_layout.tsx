import UserActions from "@/components/UserActions";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Stack, Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <ActionSheetProvider>
      <Stack>
        <Stack.Screen
          name="home/home"
          options={{
            title: "Home",
            headerRight: () => <UserActions options={["About", "Logout"]} />,
          }}
        />
        <Stack.Screen
          name="about/about"
          options={{
            title: "About",
            headerRight: () => <UserActions options={["Logout"]} />,
          }}
        />
      </Stack>
    </ActionSheetProvider>
  );
}
